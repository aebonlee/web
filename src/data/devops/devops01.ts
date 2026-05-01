import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-vite',
  chapter: 1,
  titleKey: 'devops01',
  sections: [
    {
      title: 'Vite 빌드 도구',
      titleEn: 'Vite Build Tool',
      content: 'Vite는 차세대 프론트엔드 빌드 도구로, 빠른 개발 서버와 최적화된 프로덕션 빌드를 제공합니다. HMR(Hot Module Replacement)으로 코드 변경 시 즉시 반영됩니다.',
      contentEn: 'Vite is a next-generation frontend build tool offering a fast dev server and optimized production builds. HMR (Hot Module Replacement) instantly reflects code changes.',
      code: `# Vite 프로젝트 생성
npm create vite@latest my-app -- --template react-ts

# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# vite.config.ts 예시
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 5173,
    host: true
  }
});`,
      codeLanguage: 'javascript'
    }
  ]
};

export default chapter;
