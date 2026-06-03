// 토픽 오버뷰(첫 진입) 페이지용 메타데이터.
// 학습 목표/로드맵은 챕터·섹션 데이터에서 자동 도출하고, 여기에는
// 토픽을 소개하는 큐레이션 정보(태그라인·학습성과·선수지식)만 둔다.

export interface TopicMeta {
  /** 한 줄 소개 */
  tagline: string;
  taglineEn: string;
  /** 이 과정을 마치면 할 수 있는 것 */
  outcome: string;
  outcomeEn: string;
  /** 선수 지식 (한 줄) */
  prereq: string;
  prereqEn: string;
}

export const topicMeta: Record<string, TopicMeta> = {
  html: {
    tagline: '웹의 뼈대를 세우는 마크업 언어',
    taglineEn: 'The markup language that builds the skeleton of the web',
    outcome: '시맨틱 구조·폼·멀티미디어로 접근성 높은 웹 문서를 직접 작성할 수 있습니다.',
    outcomeEn: 'Write accessible web documents with semantic structure, forms, and multimedia.',
    prereq: '사전 지식 불필요 — 웹 개발의 출발점',
    prereqEn: 'No prerequisites — the starting point of web development',
  },
  css: {
    tagline: '레이아웃과 디자인을 책임지는 스타일 언어',
    taglineEn: 'The styling language behind layout and design',
    outcome: '박스 모델·Flexbox·Grid·반응형으로 어떤 화면에도 맞는 UI를 구성할 수 있습니다.',
    outcomeEn: 'Build UIs that fit any screen with the box model, Flexbox, Grid, and responsive design.',
    prereq: 'HTML 기본 구조 이해 권장',
    prereqEn: 'Basic understanding of HTML structure recommended',
  },
  javascript: {
    tagline: '웹에 생명을 불어넣는 프로그래밍 언어',
    taglineEn: 'The programming language that brings the web to life',
    outcome: 'DOM 조작·이벤트·비동기·ES6+ 문법으로 동적인 웹을 구현할 수 있습니다.',
    outcomeEn: 'Build dynamic web pages with DOM manipulation, events, async, and ES6+ syntax.',
    prereq: 'HTML/CSS 기초',
    prereqEn: 'Basics of HTML/CSS',
  },
  vibecoding: {
    tagline: 'AI와 함께 개발하는 새로운 방식',
    taglineEn: 'A new way to build — developing alongside AI',
    outcome: 'Claude Code 설치부터 오류 해결까지, AI 페어 프로그래밍 환경을 갖출 수 있습니다.',
    outcomeEn: 'Set up an AI pair-programming environment, from installing Claude Code to troubleshooting.',
    prereq: '터미널 기본 사용 경험이 있으면 수월',
    prereqEn: 'Smoother with basic terminal experience',
  },
  react: {
    tagline: '컴포넌트로 UI를 조립하는 라이브러리',
    taglineEn: 'A library for composing UIs from components',
    outcome: 'JSX·상태·Hooks·Context로 인터랙티브한 SPA를 만들 수 있습니다.',
    outcomeEn: 'Build interactive SPAs with JSX, state, Hooks, and Context.',
    prereq: 'JavaScript ES6+ 문법',
    prereqEn: 'JavaScript ES6+ syntax',
  },
  typescript: {
    tagline: '타입으로 안정성을 더한 자바스크립트',
    taglineEn: 'JavaScript with the safety of static types',
    outcome: '타입·제네릭·유틸리티 타입으로 견고하고 유지보수 쉬운 코드를 작성할 수 있습니다.',
    outcomeEn: 'Write robust, maintainable code with types, generics, and utility types.',
    prereq: 'JavaScript 기초',
    prereqEn: 'JavaScript basics',
  },
  django: {
    tagline: '배터리 포함 파이썬 풀스택 웹 프레임워크',
    taglineEn: 'The batteries-included Python full-stack web framework',
    outcome: 'MTV 구조·ORM·관리자 페이지로 데이터 기반 웹 서비스를 구축할 수 있습니다.',
    outcomeEn: 'Build data-driven web services with the MTV pattern, ORM, and the admin page.',
    prereq: 'Python 기초 문법',
    prereqEn: 'Basic Python syntax',
  },
  flask: {
    tagline: '가볍고 유연한 파이썬 마이크로 프레임워크',
    taglineEn: 'The lightweight, flexible Python micro framework',
    outcome: '라우팅·REST API·템플릿·Blueprint로 원하는 구조의 웹앱을 만들 수 있습니다.',
    outcomeEn: 'Build web apps your way with routing, REST APIs, templates, and Blueprints.',
    prereq: 'Python 기초 문법',
    prereqEn: 'Basic Python syntax',
  },
  gradio: {
    tagline: 'ML 데모를 몇 줄로 만드는 UI 프레임워크',
    taglineEn: 'A UI framework that turns ML demos into a few lines',
    outcome: '함수·모델을 웹 UI로 감싸 데모와 챗봇을 빠르게 공유할 수 있습니다.',
    outcomeEn: 'Wrap functions and models in a web UI to share demos and chatbots fast.',
    prereq: 'Python 함수 작성 경험',
    prereqEn: 'Experience writing Python functions',
  },
  streamlit: {
    tagline: '스크립트로 만드는 데이터 앱 프레임워크',
    taglineEn: 'A data-app framework built from a single script',
    outcome: '위젯·차트·레이아웃으로 인터랙티브 데이터 대시보드를 만들 수 있습니다.',
    outcomeEn: 'Build interactive data dashboards with widgets, charts, and layouts.',
    prereq: 'Python·pandas 기초',
    prereqEn: 'Basics of Python and pandas',
  },
  git: {
    tagline: '코드의 시간을 다루는 버전 관리 시스템',
    taglineEn: 'The version control system that masters your code history',
    outcome: '브랜치·머지·rebase·협업 워크플로로 팀 개발을 안전하게 진행할 수 있습니다.',
    outcomeEn: 'Run team development safely with branches, merges, rebase, and collaboration workflows.',
    prereq: '터미널 기본 명령',
    prereqEn: 'Basic terminal commands',
  },
  backend: {
    tagline: '서버·API·데이터베이스의 세계',
    taglineEn: 'The world of servers, APIs, and databases',
    outcome: 'Node/Express와 Supabase로 인증·CRUD·배포까지 갖춘 백엔드를 구축할 수 있습니다.',
    outcomeEn: 'Build a backend with auth, CRUD, and deployment using Node/Express and Supabase.',
    prereq: 'JavaScript 기초',
    prereqEn: 'JavaScript basics',
  },
  devops: {
    tagline: '빌드·배포·운영을 자동화하는 기술',
    taglineEn: 'The craft of automating build, deploy, and operations',
    outcome: 'Vite·CI/CD·테스트·모니터링으로 개발부터 배포까지 파이프라인을 구성할 수 있습니다.',
    outcomeEn: 'Compose a pipeline from dev to deploy with Vite, CI/CD, testing, and monitoring.',
    prereq: 'Git·터미널 기본',
    prereqEn: 'Basics of Git and the terminal',
  },
};

export default topicMeta;
