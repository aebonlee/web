import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '04-deploy',
  chapter: 4,
  titleKey: 'backend04',
  sections: [
    {
      title: '환경 변수와 설정 관리',
      titleEn: 'Environment Variables and Config',
      content: '데이터베이스 주소, 비밀키, 포트 등 환경마다 달라지는 값은 코드에 하드코딩하지 않고 환경 변수로 분리합니다. dotenv로 .env 파일을 읽어 process.env에 주입하고, .env는 .gitignore로 제외합니다. 개발/운영 설정을 분리하면 안전하고 유연한 배포가 가능합니다.',
      contentEn: 'Values that differ by environment — database URL, secret keys, port — should be separated into environment variables rather than hardcoded. Use dotenv to read a .env file into process.env, and exclude .env via .gitignore. Separating dev/prod config enables safe, flexible deployment.',
      code: `// .env 파일 (git 제외 대상)
//   PORT=3000
//   DATABASE_URL=postgres://...
//   JWT_SECRET=super-secret

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error('DATABASE_URL 환경 변수가 필요합니다.');
}

app.listen(PORT, () => {
  console.log(\`서버 실행 (포트 \${PORT})\`);
});`,
      codeLanguage: 'javascript',
      quiz: {
        question: '데이터베이스 비밀번호 같은 값을 코드 대신 어디에 두는 것이 안전한가요?',
        questionEn: 'Where is it safe to keep values like a database password instead of in code?',
        options: ['소스 코드에 직접', '환경 변수(.env)', 'README 파일', 'HTML 주석'],
        optionsEn: ['Directly in source code', 'Environment variables (.env)', 'A README file', 'An HTML comment'],
        correctIndex: 1,
        explanation: '민감한 설정 값은 환경 변수로 분리하고 .env를 git에서 제외해야 유출 위험을 줄이고 환경별 설정을 유연하게 관리할 수 있습니다.',
        explanationEn: 'Sensitive config should be in environment variables with .env excluded from git, reducing leak risk and enabling flexible per-environment config.'
      }
    },
    {
      title: '파일 업로드 처리',
      titleEn: 'Handling File Uploads',
      content: '이미지 등 파일 업로드는 multipart/form-data로 전송되며, Express에서는 multer 미들웨어로 처리합니다. 파일 크기·확장자를 제한해 보안을 강화하고, 실제 운영에서는 로컬 디스크보다 S3·Supabase Storage 같은 외부 스토리지에 저장하는 것이 일반적입니다.',
      contentEn: 'File uploads (images, etc.) are sent as multipart/form-data and handled in Express with the multer middleware. Restrict file size and extensions to harden security, and in production it is common to store files in external storage like S3 or Supabase Storage rather than the local disk.',
      code: `const multer = require('multer');

// 5MB 제한 + 이미지 확장자만 허용
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ok = /jpeg|jpg|png|webp/.test(file.mimetype);
    cb(ok ? null : new Error('이미지 파일만 허용'), ok);
  }
});

// 단일 파일 업로드 라우트
app.post('/api/upload', upload.single('image'), (req, res) => {
  res.json({ filename: req.file.filename, size: req.file.size });
});`,
      codeLanguage: 'javascript',
      quiz: {
        question: 'Express에서 파일 업로드(multipart/form-data)를 처리할 때 흔히 쓰는 미들웨어는?',
        questionEn: 'Which middleware is commonly used to handle file uploads (multipart/form-data) in Express?',
        options: ['cors', 'multer', 'morgan', 'helmet'],
        optionsEn: ['cors', 'multer', 'morgan', 'helmet'],
        correctIndex: 1,
        explanation: 'multer는 multipart/form-data 요청을 파싱해 파일을 저장하고 req.file/req.files로 접근하게 해주는 대표적인 업로드 미들웨어입니다.',
        explanationEn: 'multer parses multipart/form-data requests, stores files, and exposes them via req.file/req.files — the standard upload middleware.'
      }
    },
    {
      title: '서버 배포와 운영',
      titleEn: 'Server Deployment and Operations',
      content: 'Node 서버는 Railway, Render, Fly.io 같은 PaaS나 직접 구성한 서버에 배포합니다. PM2로 프로세스를 관리해 충돌 시 자동 재시작하고, 헬스 체크 엔드포인트로 상태를 점검합니다. 로그를 수집하고 환경 변수를 플랫폼에 등록하는 것이 운영의 기본입니다.',
      contentEn: 'A Node server is deployed to a PaaS like Railway, Render, or Fly.io, or to a self-managed server. Manage the process with PM2 for auto-restart on crash, and check status with a health-check endpoint. Collecting logs and registering environment variables on the platform are operational basics.',
      code: `// 헬스 체크 엔드포인트
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

# PM2로 프로세스 관리 (서버에서)
npm install -g pm2
pm2 start server.js --name api
pm2 logs api          # 로그 확인
pm2 restart api       # 재시작
pm2 startup && pm2 save   # 부팅 시 자동 실행`,
      codeLanguage: 'javascript',
      quiz: {
        question: '배포된 서버가 정상 동작하는지 외부에서 점검하도록 만드는 것은?',
        questionEn: 'What lets you externally check that a deployed server is healthy?',
        options: ['헬스 체크 엔드포인트(/health)', '주석', '콘솔 로그', '.gitignore'],
        optionsEn: ['A health-check endpoint (/health)', 'Comments', 'Console logs', '.gitignore'],
        correctIndex: 0,
        explanation: '/health 같은 헬스 체크 엔드포인트는 로드밸런서·모니터링 도구가 서버 상태를 주기적으로 확인하는 데 사용됩니다.',
        explanationEn: 'A health-check endpoint like /health is used by load balancers and monitoring tools to periodically verify server status.'
      }
    },
    {
      title: '실습 예제: 배포 준비된 서버 구성',
      titleEn: 'Practice: A Deployment-Ready Server Setup',
      content: '환경 변수 로딩, 필수 변수 검증, 헬스 체크, 포트 설정을 갖춘 "배포 가능한" 서버 기본 골격을 만들어 봅니다. 운영 환경에 바로 올릴 수 있는 최소 구성입니다.',
      contentEn: 'Build a "deployment-ready" server skeleton with environment-variable loading, required-variable validation, a health check, and port configuration. It is a minimal setup you can ship to production directly.',
      code: `require('dotenv').config();
const express = require('express');
const app = express();

// 1) 필수 환경 변수 검증 (없으면 즉시 종료)
['DATABASE_URL', 'JWT_SECRET'].forEach(key => {
  if (!process.env[key]) {
    console.error('환경 변수 누락: ' + key);
    process.exit(1);
  }
});

app.use(express.json());

// 2) 헬스 체크 (모니터링용)
app.get('/health', (req, res) =>
  res.json({ status: 'ok', uptime: process.uptime() })
);

// 3) 포트는 플랫폼이 주입 (Render/Railway 등)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('listening on ' + PORT));

# 실행/운영
# pm2 start server.js --name api && pm2 save`,
      codeLanguage: 'javascript'
    }
  ]
};

export default chapter;
