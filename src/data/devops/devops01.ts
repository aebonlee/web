import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-vite',
  chapter: 1,
  titleKey: 'devops01',
  sections: [
    {
      title: 'Vite 빌드 도구',
      titleEn: 'Vite Build Tool',
      content: 'Vite는 차세대 프론트엔드 빌드 도구로, 빠른 개발 서버와 최적화된 프로덕션 빌드를 제공합니다. HMR(Hot Module Replacement)으로 코드 변경 시 즉시 반영되며, 개발 중에는 네이티브 ES 모듈을 사용해 번들링 없이 빠르게 구동됩니다.',
      contentEn: 'Vite is a next-generation frontend build tool offering a fast dev server and optimized production builds. HMR (Hot Module Replacement) instantly reflects code changes, and during development it uses native ES modules to start fast without bundling.',
      code: `# Vite 프로젝트 생성
npm create vite@latest my-app -- --template react-ts

# 개발 서버 시작 / 프로덕션 빌드 / 미리보기
npm run dev
npm run build
npm run preview

# vite.config.ts 예시
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: { outDir: 'dist', assetsDir: 'assets' },
  server: { port: 5173, host: true }
});`,
      codeLanguage: 'bash',
      quiz: {
        question: 'Vite가 개발 서버에서 코드 변경을 즉시 반영하는 기능의 이름은?',
        questionEn: 'What is the name of the Vite feature that instantly reflects code changes in the dev server?',
        options: ['SSR', 'HMR (Hot Module Replacement)', 'CDN', 'Tree Shaking'],
        optionsEn: ['SSR', 'HMR (Hot Module Replacement)', 'CDN', 'Tree Shaking'],
        correctIndex: 1,
        explanation: 'HMR은 변경된 모듈만 교체하여 페이지 전체를 새로고침하지 않고 즉시 화면에 반영합니다.',
        explanationEn: 'HMR swaps only the changed module, reflecting it instantly without a full page reload.'
      }
    },
    {
      title: '환경 변수와 빌드 최적화',
      titleEn: 'Environment Variables and Build Optimization',
      content: 'Vite에서는 .env 파일에 환경 변수를 정의하고, 클라이언트에 노출할 값은 반드시 VITE_ 접두사를 붙여야 import.meta.env로 접근할 수 있습니다. 프로덕션 빌드는 코드 분할, 압축, 트리 셰이킹을 자동으로 수행해 번들 크기를 줄입니다.',
      contentEn: 'In Vite, define environment variables in a .env file; values exposed to the client must be prefixed with VITE_ to be accessible via import.meta.env. Production builds automatically perform code splitting, minification, and tree shaking to reduce bundle size.',
      code: `# .env 파일 (VITE_ 접두사 필수)
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_KEY=your-anon-key

// 코드에서 접근
const url = import.meta.env.VITE_SUPABASE_URL;

// 동적 import로 코드 분할 (lazy loading)
const Admin = lazy(() => import('./pages/Admin'));

// vite.config.ts - 수동 청크 분리
build: {
  rollupOptions: {
    output: {
      manualChunks: { vendor: ['react', 'react-dom'] }
    }
  }
}`,
      codeLanguage: 'bash',
      quiz: {
        question: 'Vite에서 클라이언트 코드에 노출할 환경 변수에 반드시 붙여야 하는 접두사는?',
        questionEn: 'What prefix is required for environment variables exposed to client code in Vite?',
        options: ['REACT_APP_', 'VITE_', 'ENV_', 'PUBLIC_'],
        optionsEn: ['REACT_APP_', 'VITE_', 'ENV_', 'PUBLIC_'],
        correctIndex: 1,
        explanation: 'Vite는 보안을 위해 VITE_ 접두사가 붙은 변수만 import.meta.env를 통해 클라이언트에 노출합니다.',
        explanationEn: 'For security, Vite exposes only variables prefixed with VITE_ to the client via import.meta.env.'
      }
    },
    {
      title: '패키지 매니저와 스크립트',
      titleEn: 'Package Managers and Scripts',
      content: 'npm, yarn, pnpm은 의존성을 설치·관리하는 도구입니다. package.json의 dependencies(런타임)와 devDependencies(개발용)를 구분하고, scripts에 자주 쓰는 명령을 등록합니다. CI 환경에서는 lock 파일 기준으로 정확히 설치하는 npm ci를 사용합니다.',
      contentEn: 'npm, yarn, and pnpm are tools for installing and managing dependencies. Distinguish package.json\'s dependencies (runtime) from devDependencies (development), and register frequently used commands in scripts. In CI, use npm ci to install exactly per the lock file.',
      code: `# 설치
npm install                # package.json 전체 설치
npm install react          # 런타임 의존성 추가
npm install -D vite        # 개발 의존성 추가 (devDependencies)
npm ci                     # lock 파일 기준 정확히 설치 (CI용)

# package.json scripts 실행
npm run dev
npm run build

# pnpm은 디스크 절약 + 빠른 설치
pnpm install
pnpm add react`,
      codeLanguage: 'bash',
      quiz: {
        question: 'CI 환경에서 package-lock.json 기준으로 정확하게 설치할 때 쓰는 명령은?',
        questionEn: 'Which command installs exactly per package-lock.json in a CI environment?',
        options: ['npm install', 'npm ci', 'npm update', 'npm fix'],
        optionsEn: ['npm install', 'npm ci', 'npm update', 'npm fix'],
        correctIndex: 1,
        explanation: 'npm ci는 lock 파일과 정확히 일치하게 설치하며 기존 node_modules를 지우고 재설치해 빌드 재현성을 보장합니다.',
        explanationEn: 'npm ci installs exactly matching the lock file, wiping and reinstalling node_modules to guarantee reproducible builds.'
      }
    },
    {
      title: '실습 예제: Vite 프로젝트 만들고 환경 변수 쓰기',
      titleEn: 'Practice: Create a Vite Project and Use Env Vars',
      content: 'Vite 프로젝트를 생성해 개발 서버를 띄우고, .env에 환경 변수를 정의해 코드에서 사용한 뒤 프로덕션 빌드까지 해 봅니다. 실제 프론트엔드 프로젝트의 시작 절차 그대로입니다.',
      contentEn: 'Create a Vite project, run the dev server, define an env var in .env and use it in code, then make a production build. This is exactly how a real frontend project starts.',
      code: `# 1) 프로젝트 생성 + 의존성 설치
npm create vite@latest my-app -- --template react-ts
cd my-app && npm install

# 2) 환경 변수 정의 (.env)
echo "VITE_API_URL=https://api.example.com" > .env

# 3) 코드에서 사용
#   const url = import.meta.env.VITE_API_URL;

# 4) 개발 서버 / 빌드 / 미리보기
npm run dev       # http://localhost:5173
npm run build     # dist/ 생성
npm run preview   # 빌드 결과 확인`,
      codeLanguage: 'bash'
    }
  ]
};

export default chapter;
