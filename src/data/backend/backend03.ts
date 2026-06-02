import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '03-auth',
  chapter: 3,
  titleKey: 'backend03',
  sections: [
    {
      title: '비밀번호 해싱',
      titleEn: 'Password Hashing',
      content: '비밀번호는 절대 평문으로 저장하면 안 됩니다. bcrypt 같은 단방향 해시 함수로 salt와 함께 해싱해 저장하고, 로그인 시 입력값을 같은 방식으로 해싱해 비교합니다. 해시는 복호화할 수 없어 DB가 유출돼도 원본 비밀번호를 보호합니다.',
      contentEn: 'Never store passwords in plain text. Hash them with a salt using a one-way hash function like bcrypt, and on login, hash the input the same way and compare. Hashes cannot be reversed, protecting original passwords even if the DB leaks.',
      code: `const bcrypt = require('bcrypt');

// 회원가입 - 비밀번호 해싱 저장
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);  // salt rounds = 10
  await db.users.insert({ email, password: hash });
  res.status(201).json({ message: '가입 완료' });
});

// 로그인 - 해시 비교
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await db.users.findByEmail(email);
  const ok = user && await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ error: '인증 실패' });
  res.json({ message: '로그인 성공' });
});`,
      codeLanguage: 'javascript',
      quiz: {
        question: '비밀번호를 안전하게 저장하는 방법은?',
        questionEn: 'What is the safe way to store passwords?',
        options: ['평문 그대로 저장', 'bcrypt 등으로 해싱하여 저장', 'Base64로 인코딩', '쿠키에 저장'],
        optionsEn: ['Store as plain text', 'Hash with bcrypt and store', 'Encode with Base64', 'Store in a cookie'],
        correctIndex: 1,
        explanation: 'bcrypt 같은 단방향 해시로 salt와 함께 저장하면 복호화가 불가능해, DB 유출 시에도 원본 비밀번호가 보호됩니다. Base64는 누구나 디코딩 가능하므로 안전하지 않습니다.',
        explanationEn: 'Storing with a one-way hash like bcrypt plus a salt makes it irreversible, protecting passwords even if the DB leaks. Base64 is decodable by anyone and is not safe.'
      }
    },
    {
      title: 'JWT 토큰 인증',
      titleEn: 'JWT Token Authentication',
      content: 'JWT(JSON Web Token)는 사용자 정보를 서명된 토큰에 담아 무상태(stateless) 인증을 구현합니다. 로그인 시 토큰을 발급해 클라이언트가 보관하고, 이후 요청 헤더(Authorization: Bearer)에 담아 보내면 서버가 서명을 검증합니다.',
      contentEn: 'JWT (JSON Web Token) implements stateless authentication by embedding user info in a signed token. On login, a token is issued and stored by the client; subsequent requests send it in the header (Authorization: Bearer) and the server verifies the signature.',
      code: `const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

// 로그인 성공 시 토큰 발급
const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '1h' });
res.json({ token });

// 인증 미들웨어 - 토큰 검증
function authenticate(req, res, next) {
  const header = req.headers.authorization;
  const token = header && header.split(' ')[1];   // "Bearer xxx"
  if (!token) return res.status(401).json({ error: '토큰 없음' });

  try {
    req.user = jwt.verify(token, SECRET);   // 검증 + 페이로드 추출
    next();
  } catch {
    res.status(403).json({ error: '유효하지 않은 토큰' });
  }
}`,
      codeLanguage: 'javascript',
      quiz: {
        question: 'JWT 토큰을 요청에 담아 보낼 때 일반적으로 사용하는 HTTP 헤더는?',
        questionEn: 'Which HTTP header is typically used to send a JWT token in a request?',
        options: ['Content-Type', 'Authorization', 'Accept', 'Cookie-Token'],
        optionsEn: ['Content-Type', 'Authorization', 'Accept', 'Cookie-Token'],
        correctIndex: 1,
        explanation: 'JWT는 보통 Authorization 헤더에 "Bearer <token>" 형식으로 담아 보내며, 서버가 이를 추출해 검증합니다.',
        explanationEn: 'A JWT is usually sent in the Authorization header as "Bearer <token>", which the server extracts and verifies.'
      }
    },
    {
      title: 'CORS와 보안 기초',
      titleEn: 'CORS and Security Basics',
      content: 'CORS(Cross-Origin Resource Sharing)는 다른 출처(도메인)의 요청을 브라우저가 허용할지 제어합니다. 서버에서 허용할 출처를 명시해야 프론트엔드가 API를 호출할 수 있습니다. 그 밖에 입력 검증, 비밀키의 환경 변수 분리, HTTPS 사용이 기본 보안 수칙입니다.',
      contentEn: 'CORS (Cross-Origin Resource Sharing) controls whether the browser allows requests from a different origin (domain). The server must specify allowed origins so the frontend can call the API. Other basic security practices include input validation, keeping secrets in environment variables, and using HTTPS.',
      code: `const cors = require('cors');

// 특정 출처만 허용
app.use(cors({
  origin: 'https://web.dreamitbiz.com',
  credentials: true
}));

// 비밀키는 코드가 아닌 환경 변수에서
const SECRET = process.env.JWT_SECRET;   // .env, 절대 하드코딩 금지

// 입력 검증 예시
app.post('/api/users', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: '유효한 이메일이 아닙니다' });
  }
  // ...
});`,
      codeLanguage: 'javascript',
      quiz: {
        question: 'CORS 설정이 필요한 이유는?',
        questionEn: 'Why is CORS configuration needed?',
        options: ['데이터베이스 속도 향상', '다른 출처(도메인)의 브라우저 요청 허용을 제어하기 위해', '비밀번호 암호화', '이미지 압축'],
        optionsEn: ['To speed up the database', 'To control allowing browser requests from a different origin', 'To encrypt passwords', 'To compress images'],
        correctIndex: 1,
        explanation: 'CORS는 브라우저의 동일 출처 정책 때문에 필요합니다. 서버가 허용 출처를 지정해야 다른 도메인의 프론트엔드가 API를 호출할 수 있습니다.',
        explanationEn: 'CORS is needed due to the browser\'s same-origin policy. The server must specify allowed origins so a frontend on another domain can call the API.'
      }
    }
  ]
};

export default chapter;
