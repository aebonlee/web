import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '04-performance',
  chapter: 4,
  titleKey: 'devops04',
  sections: [
    {
      title: '웹 성능 최적화',
      titleEn: 'Web Performance Optimization',
      content: '빠른 웹은 사용자 경험과 SEO에 직결됩니다. 코드 분할(lazy loading), 이미지 최적화(WebP·지연 로딩), 캐싱, 번들 크기 축소가 핵심 기법입니다. Core Web Vitals(LCP, CLS, INP) 지표로 사용자 체감 성능을 측정합니다.',
      contentEn: 'A fast site directly affects user experience and SEO. Key techniques are code splitting (lazy loading), image optimization (WebP, lazy loading), caching, and bundle size reduction. Core Web Vitals (LCP, CLS, INP) measure perceived performance.',
      code: `// 1) 라우트 단위 코드 분할 (React)
const Admin = lazy(() => import('./pages/Admin'));

// 2) 이미지 지연 로딩
<img src="photo.webp" loading="lazy" alt="..." />

// 3) Vite 번들 분석
// npm run build -- 후 dist 청크 크기 확인
// rollup-plugin-visualizer로 시각화

// 4) 무거운 라이브러리는 동적 import
const heavy = await import('./heavyLib');`,
      codeLanguage: 'javascript',
      quiz: {
        question: '초기 로딩 속도를 높이기 위해 페이지를 필요할 때만 불러오는 기법은?',
        questionEn: 'Which technique loads pages only when needed to improve initial load speed?',
        options: ['코드 분할(lazy loading)', '인라인 스타일', '전역 변수', '동기 렌더링'],
        optionsEn: ['Code splitting (lazy loading)', 'Inline styles', 'Global variables', 'Synchronous rendering'],
        correctIndex: 0,
        explanation: '코드 분할은 번들을 잘게 나눠 당장 필요한 코드만 먼저 로드하므로, 초기 로딩이 빨라집니다.',
        explanationEn: 'Code splitting breaks the bundle into pieces and loads only what is immediately needed, speeding up the initial load.'
      }
    },
    {
      title: '모니터링과 로깅',
      titleEn: 'Monitoring and Logging',
      content: '배포 후에는 에러와 성능을 지속적으로 관찰해야 합니다. Sentry로 런타임 에러를 추적하고, 구조화된 로그를 남겨 문제를 재현·진단합니다. Google Analytics·웹 바이탈 측정으로 실제 사용자 환경의 지표를 수집합니다.',
      contentEn: 'After deployment, errors and performance must be continuously observed. Track runtime errors with Sentry and leave structured logs to reproduce and diagnose issues. Collect real-user metrics with Google Analytics and web-vitals measurement.',
      code: `// Sentry로 에러 추적 (예시)
import * as Sentry from '@sentry/react';
Sentry.init({ dsn: process.env.VITE_SENTRY_DSN });

// 실사용자 웹 바이탈 측정
import { onLCP, onCLS, onINP } from 'web-vitals';
onLCP(console.log);   // Largest Contentful Paint
onCLS(console.log);   // Cumulative Layout Shift
onINP(console.log);   // Interaction to Next Paint

// 구조화 로그
console.log(JSON.stringify({
  level: 'error', msg: 'payment failed', userId: 42, ts: Date.now()
}));`,
      codeLanguage: 'javascript',
      quiz: {
        question: '배포된 앱에서 발생하는 런타임 에러를 수집·추적하는 도구의 예는?',
        questionEn: 'Which is an example of a tool that collects and tracks runtime errors in a deployed app?',
        options: ['Prettier', 'Sentry', 'Vite', 'ESLint'],
        optionsEn: ['Prettier', 'Sentry', 'Vite', 'ESLint'],
        correctIndex: 1,
        explanation: 'Sentry는 운영 환경에서 발생한 에러를 스택 트레이스·컨텍스트와 함께 수집해 알려주는 모니터링 도구입니다.',
        explanationEn: 'Sentry is a monitoring tool that captures production errors with stack traces and context and alerts you.'
      }
    },
    {
      title: 'HTTPS와 캐싱 전략',
      titleEn: 'HTTPS and Caching Strategy',
      content: 'HTTPS는 통신을 암호화해 데이터 위변조와 도청을 막는 필수 요소입니다. CDN과 캐시 헤더(Cache-Control)로 정적 자산을 사용자 가까이에서 빠르게 제공하고, 파일명 해시로 캐시 무효화를 제어합니다. Vite 빌드는 자산에 해시를 자동으로 붙입니다.',
      contentEn: 'HTTPS encrypts communication to prevent tampering and eavesdropping, and is essential. With a CDN and cache headers (Cache-Control), static assets are served fast from near the user, and filename hashes control cache invalidation. Vite builds automatically add hashes to assets.',
      code: `# 정적 자산 - 길게 캐시 (파일명 해시로 무효화)
Cache-Control: public, max-age=31536000, immutable

# HTML - 항상 최신 확인
Cache-Control: no-cache

# Vite 빌드 결과 (자동 해시)
# dist/assets/index-D6boZUkF.js
# dist/assets/index.es-BJ5Iw-Wg.js
# → 내용이 바뀌면 해시가 바뀌어 브라우저가 새 파일을 받음`,
      codeLanguage: 'bash',
      quiz: {
        question: '내용이 자주 바뀌지 않는 정적 자산(JS/CSS)에 파일명 해시를 붙이면 좋은 점은?',
        questionEn: 'What is the benefit of adding a filename hash to rarely-changing static assets (JS/CSS)?',
        options: ['파일이 작아진다', '길게 캐시하면서도 내용 변경 시 자동으로 새 파일을 받게 한다', 'HTTPS가 필요 없어진다', '빌드가 생략된다'],
        optionsEn: ['Files get smaller', 'Enables long caching while auto-fetching new files when content changes', 'HTTPS becomes unnecessary', 'The build is skipped'],
        correctIndex: 1,
        explanation: '내용이 바뀌면 해시(파일명)가 달라지므로, 자산을 길게 캐시해도 변경 시 브라우저가 새 파일을 내려받아 캐시 무효화 문제가 해결됩니다.',
        explanationEn: 'When content changes the hash (filename) changes, so assets can be cached for a long time yet browsers fetch new files on change, solving cache invalidation.'
      }
    },
    {
      title: '실습 예제: 성능 점검 루틴',
      titleEn: 'Practice: A Performance Audit Routine',
      content: '빌드 후 번들 크기를 확인하고, Lighthouse로 성능 점수를 측정하고, 코드 분할로 큰 청크를 줄이는 점검 루틴을 따라 해 봅니다. 배포 전 반복하면 좋은 체크리스트입니다.',
      contentEn: 'Follow an audit routine: check bundle size after build, measure performance with Lighthouse, and reduce large chunks with code splitting. A good checklist to repeat before deployment.',
      code: `# 1) 빌드 후 청크 크기 확인 (Vite가 gzip 크기 출력)
npm run build

# 2) 번들 시각화로 큰 의존성 찾기
npm install -D rollup-plugin-visualizer
#   vite.config: plugins: [react(), visualizer()]

# 3) Lighthouse로 성능 측정 (CLI)
npx lighthouse https://web.dreamitbiz.com --view

# 4) 무거운 청크는 동적 import로 분할
#   const Chart = lazy(() => import('./Chart'));
# → 초기 번들에서 제외되어 LCP 개선`,
      codeLanguage: 'bash'
    }
  ]
};

export default chapter;
