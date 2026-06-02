export const translations: Record<string, Record<string, unknown>> = {
  ko: {
    // ─── Nav (flat keys — used by site.ts labelKey) ───
    'nav.home': '홈',
    'nav.problems': '도장깨기',
    'nav.playground': '실습장',
    'nav.guide': '학습가이드',
    'nav.progress': '진행률',
    'nav.about': '소개',
    'nav.login': '로그인',
    'nav.register': '회원가입',
    'nav.mypage': '마이페이지',
    'nav.logout': '로그아웃',
    'nav.admin': '관리자',
    'nav.profile': '프로필',
    'nav.webBasics': '웹 기초',
    'nav.frameworks': '프레임워크',
    'nav.tools': '도구',

    // Flat nav keys for site.ts menuItems labelKey compatibility
    home: '홈',
    guide: '학습 가이드',
    problems: '도장깨기',
    progress: '진행률',
    playground: '실습장',
    webBasics: '웹 기초',
    vibeCoding: '바이브코딩',
    frameworks: '프레임워크',
    tools: '도구',

    // ─── Topics (flat — used by site.ts dropdown labelKey) ───
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    react: 'React',
    typescript: 'TypeScript',
    git: 'Git & GitHub',
    backend: '백엔드',
    devops: 'DevOps',
    vibecoding: '바이브코딩',

    // ─── Topics (dotted) ───
    'topic.html': 'HTML',
    'topic.css': 'CSS',
    'topic.javascript': 'JavaScript',
    'topic.react': 'React',
    'topic.typescript': 'TypeScript',
    'topic.git': 'Git & GitHub',
    'topic.backend': '백엔드',
    'topic.devops': 'DevOps',

    // ─── Site-specific nav labels ───
    'site.nav.html': 'HTML',
    'site.nav.css': 'CSS',
    'site.nav.javascript': 'JavaScript',
    'site.nav.react': 'React',
    'site.nav.typescript': 'TypeScript',
    'site.nav.git': 'Git & GitHub',
    'site.nav.backend': '백엔드',
    'site.nav.devops': 'DevOps',

    // ─── Topic Descriptions ───
    htmlDesc: '웹 페이지의 구조를 만드는 마크업 언어를 학습합니다.',
    cssDesc: '웹 페이지의 스타일과 레이아웃을 디자인하는 방법을 학습합니다.',
    javascriptDesc: '웹 페이지에 동적 기능을 추가하는 프로그래밍 언어를 학습합니다.',
    reactDesc: '컴포넌트 기반 UI 라이브러리로 모던 웹 앱을 구축합니다.',
    typescriptDesc: '타입 안전성을 갖춘 JavaScript의 상위 집합 언어를 학습합니다.',
    gitDesc: '버전 관리 시스템으로 코드를 효율적으로 관리하는 방법을 학습합니다.',
    backendDesc: '서버, API, 데이터베이스 등 백엔드 기술을 학습합니다.',
    devopsDesc: '배포, CI/CD, 인프라 관리 등 DevOps 실무를 학습합니다.',
    vibecodingDesc: 'Claude Code 설치부터 Node.js 설정·오류 해결까지, AI와 함께하는 개발을 시작합니다.',

    // ─── HTML Chapters ───
    html01: 'HTML 기본 구조',
    html02: '텍스트와 링크',
    html03: '폼과 입력',
    html04: '멀티미디어와 임베드',

    // ─── CSS Chapters ───
    css01: 'CSS 선택자와 속성',
    css02: '박스 모델과 레이아웃',
    css03: 'Flexbox',
    css04: 'Grid와 반응형 디자인',

    // ─── JavaScript Chapters ───
    js01: '변수와 자료형',
    js02: '함수와 스코프',
    js03: 'DOM 조작',
    js04: 'ES6+ 핵심 문법',

    // ─── React Chapters ───
    react01: 'JSX와 컴포넌트',
    react02: 'State와 Props',
    react03: 'Hooks',
    react04: 'Context와 컴포넌트 패턴',

    // ─── TypeScript Chapters ───
    ts01: '타입 기초',
    ts02: '인터페이스와 타입',
    ts03: '고급 타입과 enum',
    ts04: 'React와 TypeScript',

    // ─── Git Chapters ───
    git01: 'Git 기초',
    git02: '브랜칭과 머지',
    git03: 'Rebase와 이력 관리',
    git04: '협업 전략과 컨벤션',

    // ─── Backend Chapters ───
    backend01: 'Node.js 기초',
    backend02: 'REST API',
    backend03: '인증과 JWT',
    backend04: '환경 변수와 배포',

    // ─── DevOps Chapters ───
    devops01: 'Vite와 빌드도구',
    devops02: '배포와 CI/CD',
    devops03: '코드 품질과 테스트',
    devops04: '성능 최적화와 모니터링',

    // ─── Vibe Coding Chapters ───
    vibe01: 'Node.js 설치',
    vibe02: 'Claude Code 설치와 시작',
    vibe03: '자주 발생하는 오류 해결',

    // ─── Categories (flat) ───
    beginner: '입문',
    beginnerDesc: '프로그래밍을 처음 시작하는 분을 위한 기초 문제입니다.',
    intermediate: '중급',
    intermediateDesc: '기본기를 갖춘 분을 위한 심화 문제입니다.',
    advanced: '고급',
    advancedDesc: '심도 있는 이해를 필요로 하는 도전 문제입니다.',
    practical: '실전',
    practicalDesc: '실무에서 활용 가능한 프로젝트형 문제입니다.',

    // ─── Categories (dotted) ───
    'category.beginner': '입문',
    'category.intermediate': '중급',
    'category.advanced': '고급',
    'category.practical': '실전',

    // ─── Home page (dotted) ───
    'home.hero.title1': '웹 개발의 모든 것',
    'home.hero.desc1': 'HTML부터 DevOps까지 체계적으로',
    'home.hero.title2': '도장깨기로 실력 UP',
    'home.hero.desc2': '40개 문제로 실력 검증',
    'home.hero.title3': '라이브 코딩',
    'home.hero.desc3': '실시간 미리보기로 학습',
    'home.topics.title': '학습 토픽',
    'home.stats.topics': '학습 토픽',
    'home.stats.chapters': '학습 챕터',
    'home.stats.problems': '도전 문제',

    // ─── Hero (flat — used by existing Home.tsx) ───
    heroTitle1: '웹 개발의',
    heroHighlight1: '첫 걸음',
    heroDesc1: 'HTML, CSS, JavaScript부터 React, TypeScript까지 체계적으로 학습하세요.',
    heroTitle2: '실전 문제로',
    heroHighlight2: '실력 향상',
    heroDesc2: '난이도별 코딩 문제를 풀며 실무 역량을 키워보세요.',
    heroTitle3: '나만의 학습',
    heroHighlight3: '로드맵',
    heroDesc3: '학습 진도와 성취를 추적하며 목표를 달성하세요.',
    startLearning: '학습 시작하기',
    viewProgress: '학습 현황 보기',

    // ─── Section (flat) ───
    topicSection: '학습 주제',
    topicSectionDesc: '웹 개발에 필요한 핵심 기술들을 체계적으로 학습할 수 있습니다.',

    // ─── Home sections (added) ───
    'home.stats.free': '무료 학습',
    'home.why.title': '왜 이 플랫폼인가요?',
    'home.why.subtitle': '입문자부터 실무자까지, 막힘없이 성장하도록 설계했습니다.',
    'home.why.f1.title': '체계적인 커리큘럼',
    'home.why.f1.desc': 'HTML·CSS부터 React·TypeScript·Git·백엔드·DevOps까지 순서대로 정리된 학습 경로를 따라가세요.',
    'home.why.f2.title': '직접 풀며 배우기',
    'home.why.f2.desc': '난이도별 40개 실전 문제와 라이브 코드 에디터로 손으로 익힙니다.',
    'home.why.f3.title': '실시간 미리보기',
    'home.why.f3.desc': '작성한 코드를 즉시 화면으로 확인하며 결과를 체득합니다.',
    'home.why.f4.title': '학습 현황 추적',
    'home.why.f4.desc': '진도와 성취를 한눈에 확인하며 끝까지 완주하세요.',
    'home.cat.title': '난이도별 도장깨기',
    'home.cat.subtitle': '입문부터 실전까지 단계별로 도전하세요.',
    'home.cta.title': '지금 바로 시작하세요',
    'home.cta.desc': '회원가입 없이도 모든 학습 콘텐츠를 무료로 이용할 수 있습니다.',
    'home.cta.btn': '학습 시작하기',

    // ─── Stats (flat) ───
    totalProblems: '총 문제 수',
    languages: '학습 언어',
    categories: '카테고리',

    // ─── Problems (flat — used by existing pages) ───
    allProblems: '전체 문제',
    noProblem: '문제 없음',
    noProblemsYet: '아직 등록된 문제가 없습니다.',
    comingSoon: '곧 새로운 문제가 추가될 예정입니다.',
    expectedOutput: '예상 출력',
    solution: '풀이 보기',
    markComplete: '완료 표시',
    markIncomplete: '미완료로 변경',
    completed: '완료',

    // ─── Problems (dotted) ───
    'problems.title': '도장깨기',
    'problems.subtitle': '실력을 검증하세요',
    'problems.filter.all': '전체',
    'problems.filter.topic': '토픽',
    'problems.search': '문제 검색',
    'problems.completed': '완료',
    'problems.start': '시작하기',

    // ─── Problem detail (dotted) ───
    'problem.hint': '힌트',
    'problem.solution': '솔루션',
    'problem.markComplete': '완료 표시',
    'problem.markIncomplete': '완료 해제',
    'problem.prev': '이전 문제',
    'problem.next': '다음 문제',

    // ─── Playground (dotted) ───
    'playground.title': '실습장',
    'playground.subtitle': '자유롭게 코딩하세요',
    'playground.run': '실행',
    'playground.reset': '초기화',
    'playground.template': '템플릿',

    // ─── Playground (flat) ───
    playgroundDesc: 'HTML, CSS, JavaScript 코드를 직접 작성하고 실시간으로 결과를 확인하세요.',

    // ─── Progress (flat — used by existing pages) ───
    progressTitle: '학습 현황',
    communitySubtitle: '나의 학습 진행 상황과 커뮤니티 통계를 확인하세요.',
    totalCompleted: '완료한 문제',
    totalRemaining: '남은 문제',
    completionRate: '완료율',
    overallProgress: '전체 진행률',
    stampCollection: '스탬프 컬렉션',
    participants: '참여자 수',
    totalSolves: '총 풀이 수',
    popularProblem: '인기 문제',
    solveCount: '풀이 횟수',
    myProgress: '나의 진행률',
    communityCategoryProgress: '커뮤니티 카테고리별 진행률',
    communityStampCollection: '커뮤니티 스탬프 현황',
    loadingStats: '통계 로딩 중...',
    statsLoadFailed: '통계를 불러오는 데 실패했습니다.',

    // ─── Progress (dotted) ───
    'progress.title': '학습 진행률',
    'progress.community': '커뮤니티 통계',
    'progress.personal': '내 진행률',
    'progress.total': '전체 완료',
    'progress.stamp': '스탬프',

    // ─── Profile (dotted) ───
    'profile.title': '내 프로필',
    'profile.badges': '뱃지 컬렉션',
    'profile.certificate': '인증서',
    'profile.downloadPdf': 'PDF 다운로드',
    'profile.downloadPng': 'PNG 다운로드',

    // ─── Guide (flat — used by existing Guide.tsx) ───
    guideTitle: '학습 가이드',
    guideSubtitle: '효과적인 웹 개발 학습을 위한 로드맵과 팁을 제공합니다.',

    // ─── Guide (dotted) ───
    'guide.title': '학습 가이드',
    'guide.subtitle': '효과적인 학습 방법',

    // ─── Chapter (flat) ───
    chapterPrev: '이전 챕터',
    chapterNext: '다음 챕터',
    chapterList: '챕터 목록',
    codeExample: '코드 예제',
    outputResult: '실행 결과',
    chapterOverview: '챕터 개요',
    chapters: '챕터',
    learning: '학습 중',

    // ─── Common (flat) ───
    backToList: '목록으로',
    notFound: '페이지를 찾을 수 없습니다.',
    goHome: '홈으로 이동',
    copied: '복사되었습니다!',
    copy: '복사',
    categoryOverview: '카테고리 개요',
    explanation: '해설',

    // ─── Common (dotted) ───
    'common.chapter': '챕터',
    'common.back': '돌아가기',
    'common.next': '다음',
    'common.prev': '이전',
    'common.copy': '복사',
    'common.copied': '복사됨',
    'common.loading': '로딩 중...',
    'common.error': '오류가 발생했습니다',
    'common.search': '검색',
    'common.close': '닫기',
    'common.save': '저장',
    'common.cancel': '취소',
    'common.confirm': '확인',
    'common.delete': '삭제',

    // ─── Auth (flat) ───
    login: '로그인',
    logout: '로그아웃',
    signUp: '회원가입',
    profile: '프로필',
    editName: '이름 수정',
    saveName: '이름 저장',
    cancelEdit: '취소',
    completedProblems: '완료한 문제',
    syncing: '동기화 중...',
    badgesTitle: '획득한 배지',

    // ─── Auth (dotted) ───
    auth: {
      login: '로그인',
      register: '회원가입',
      email: '이메일',
      password: '비밀번호',
      forgotPassword: '비밀번호 찾기',
      googleLogin: 'Google로 로그인',
      kakaoLogin: '카카오로 로그인',
      loginTitle: '로그인',
      loginSubtitle: '로그인 방법을 선택하세요',
      loginError: '로그인 중 오류가 발생했습니다.',
      loggingIn: '로그인 중...',
      signUp: '회원가입',
      signUpTitle: '회원가입',
      signUpSubtitle: '계정을 만들어 학습을 시작하세요',
      signUpSuccess: '가입 완료! 이메일을 확인해주세요.',
      signUpError: '회원가입 중 오류가 발생했습니다.',
      signingUp: '가입 중...',
      checkEmail: '이메일 인증 링크를 확인해주세요.',
      goToLogin: '로그인하러 가기',
      noAccount: '계정이 없으신가요?',
      hasAccount: '이미 계정이 있으신가요?',
      back: '뒤로',
      emailPlaceholder: '이메일 주소',
      passwordPlaceholder: '비밀번호',
      passwordConfirmPlaceholder: '비밀번호 확인',
      displayName: '표시 이름',
      displayNamePlaceholder: '이름을 입력하세요',
      passwordMismatch: '비밀번호가 일치하지 않습니다.',
      forgotPasswordTitle: '비밀번호 찾기',
      forgotPasswordSubtitle: '가입한 이메일 주소를 입력하세요.',
      resetEmailSent: '이메일 전송 완료!',
      checkEmailForReset: '비밀번호 재설정 링크를 이메일로 전송했습니다.',
      backToLogin: '로그인으로 돌아가기',
      sending: '전송 중...',
      sendResetLink: '재설정 링크 전송',
      myPage: '마이페이지',
      profileUpdated: '프로필이 업데이트되었습니다.',
      save: '저장',
      saving: '저장 중...',
      noName: '이름 없음',
      loginWith: '로그인:',
      emailAccount: '이메일 계정',
      admin: '관리자',
      editProfile: '프로필 수정',
      orderHistory: '주문 내역',
      logout: '로그아웃',
      orderLoadError: '주문 내역을 불러올 수 없습니다.',
      retry: '다시 시도',
      noOrders: '주문 내역이 없습니다.',
      uploadComplete: '업로드 완료',
      removeImage: '이미지 삭제',
      uploading: '업로드 중...',
      dragOrClick: '이미지를 드래그하거나 클릭하세요',
    },

    // ─── Badges (flat) ───
    badgeBeginnerMaster: '입문 마스터',
    badgeBeginnerMasterDesc: '입문 문제를 모두 완료했습니다.',
    badgeIntermediateMaster: '중급 마스터',
    badgeIntermediateMasterDesc: '중급 문제를 모두 완료했습니다.',
    badgeAdvancedMaster: '고급 마스터',
    badgeAdvancedMasterDesc: '고급 문제를 모두 완료했습니다.',
    badgePracticalMaster: '실전 마스터',
    badgePracticalMasterDesc: '실전 문제를 모두 완료했습니다.',
    badgeFirstStep: '첫 발걸음',
    badgeFirstStepDesc: '첫 번째 문제를 완료했습니다.',
    badgeExplorer: '탐험가',
    badgeExplorerDesc: '10개 이상의 문제를 완료했습니다.',
    badgeChallenger: '도전자',
    badgeChallengerDesc: '25개 이상의 문제를 완료했습니다.',
    badgeExpert: '전문가',
    badgeExpertDesc: '50개 이상의 문제를 완료했습니다.',
    badgeGrandMaster: '그랜드마스터',
    badgeGrandMasterDesc: '모든 문제를 완료했습니다.',
    badgeFrontendTrio: '프론트엔드 삼총사',
    badgeFrontendTrioDesc: 'HTML, CSS, JavaScript 문제를 모두 완료했습니다.',
    badgeReactMaster: 'React 마스터',
    badgeReactMasterDesc: 'React 관련 문제를 모두 완료했습니다.',
    badgeFullstack: '풀스택 개발자',
    badgeFullstackDesc: '프론트엔드와 백엔드 문제를 모두 완료했습니다.',
    badgeAllRounder: '올라운더',
    badgeAllRounderDesc: '모든 카테고리에서 1개 이상 문제를 완료했습니다.',
    badgeEarned: '획득',
    badgeLocked: '잠김',

    // ─── Certificate (flat) ───
    certificateTitle: '수료증',
    certificateSubtitle: '학습 성취를 증명하는 수료증을 발급받으세요.',
    certSiteName: 'DreamIT 웹 개발 학습',
    certTitle: '웹 개발 학습 수료증',
    certAwardedTo: '수여 대상',
    certDescription: '본 수료증은 DreamIT 웹 개발 학습 과정을 성공적으로 이수하였음을 증명합니다.',
    certCompletedProblems: '완료 문제 수',
    certCompletionRate: '달성률',
    certDate: '발급일',
    downloadPDF: 'PDF 다운로드',
    downloadPNG: 'PNG 다운로드',
    certificateLocked: '수료증은 모든 문제를 완료한 후 발급됩니다.',
    downloading: '다운로드 중...',

    // ─── Footer (dotted) ───
    footer: {
      tagline: '웹 개발의 기초부터 실전까지, 체계적인 학습 콘텐츠를 제공합니다.',
      quickLinks: '바로가기',
      contact: '문의하기',
      terms: '이용약관',
      privacy: '개인정보처리방침',
      copyright: 'All Rights Reserved.',
    },

    // ─── Footer (flat) ───
    footerDesc: '웹 개발의 기초부터 실전까지, 체계적인 학습 콘텐츠를 제공합니다.',
    quickLinks: '바로가기',
    resourceLinks: '학습 자료',
    familySites: '패밀리 사이트',
    copyright: 'DreamIT Biz. All Rights Reserved.',
    contact: '문의하기',
    businessHours: '평일 09:00 - 18:00',

    // ─── Theme (flat) ───
    lightMode: '라이트 모드',
    darkMode: '다크 모드',
    autoMode: '자동 모드',
    themeColor: '테마 색상',

    // ─── Search (dotted) ───
    search: {
      placeholder: '검색어를 입력하세요...',
      searching: '검색 중...',
      noResults: '검색 결과가 없습니다.',
      hint: '챕터, 문제, 토픽 등을 검색해보세요.',
      blog: '블로그',
      board: '게시판',
      gallery: '갤러리',
    },

    // ─── Shop (dotted) ───
    shop: {
      currency: '원',
    },

    // ─── Checkout (dotted) ───
    checkout: {
      title: '결제하기',
      customerInfo: '주문자 정보',
      name: '이름',
      namePlaceholder: '이름을 입력하세요',
      email: '이메일',
      emailPlaceholder: '이메일을 입력하세요',
      phone: '연락처',
      phonePlaceholder: '연락처를 입력하세요',
      paymentMethod: '결제 수단',
      card: '카드 결제',
      bankTransfer: '계좌이체',
      agree: '주문 내용에 동의합니다.',
      orderSummary: '주문 요약',
      totalAmount: '총 결제 금액',
      processing: '결제 중...',
      pay: '결제하기',
    },

    // ─── Cart (dotted) ───
    cart: {
      title: '장바구니',
      empty: '장바구니가 비어 있습니다.',
      continueShopping: '쇼핑 계속하기',
      remove: '삭제',
      orderSummary: '주문 요약',
      items: '개 상품',
      total: '합계',
      checkout: '결제하기',
    },

    // ─── Order (dotted) ───
    order: {
      title: '주문 확인',
      success: '주문이 완료되었습니다!',
      orderNumber: '주문 번호',
      paymentStatus: '결제 상태',
      paid: '결제 완료',
      pending: '결제 대기',
      failed: '결제 실패',
      orderDetails: '주문 상세',
      productName: '상품명',
      unitPrice: '단가',
      quantity: '수량',
      subtotal: '소계',
      totalAmount: '총 금액',
      backToShop: '쇼핑으로 돌아가기',
      backToHome: '홈으로',
    },

    // ─── Community (dotted) ───
    community: {
      cancel: '취소',
      loading: '로딩 중...',
    },

    // ─── Comments (dotted) ───
    comments: {
      deleteConfirm: '정말 삭제하시겠습니까?',
    },
  },

  en: {
    // ─── Nav (dotted flat) ───
    'nav.home': 'Home',
    'nav.problems': 'Challenges',
    'nav.playground': 'Playground',
    'nav.guide': 'Guide',
    'nav.progress': 'Progress',
    'nav.about': 'About',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'nav.mypage': 'My Page',
    'nav.logout': 'Logout',
    'nav.admin': 'Admin',
    'nav.profile': 'Profile',
    'nav.webBasics': 'Web Basics',
    'nav.frameworks': 'Frameworks',
    'nav.tools': 'Tools',

    // Flat nav keys for site.ts menuItems labelKey compatibility
    home: 'Home',
    guide: 'Guide',
    problems: 'Challenges',
    progress: 'Progress',
    playground: 'Playground',
    webBasics: 'Web Basics',
    vibeCoding: 'Vibe Coding',
    frameworks: 'Frameworks',
    tools: 'Dev Tools',

    // ─── Topics (flat) ───
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    react: 'React',
    typescript: 'TypeScript',
    git: 'Git & GitHub',
    backend: 'Backend',
    devops: 'DevOps',
    vibecoding: 'Vibe Coding',

    // ─── Topics (dotted) ───
    'topic.html': 'HTML',
    'topic.css': 'CSS',
    'topic.javascript': 'JavaScript',
    'topic.react': 'React',
    'topic.typescript': 'TypeScript',
    'topic.git': 'Git & GitHub',
    'topic.backend': 'Backend',
    'topic.devops': 'DevOps',

    // ─── Site-specific nav labels ───
    'site.nav.html': 'HTML',
    'site.nav.css': 'CSS',
    'site.nav.javascript': 'JavaScript',
    'site.nav.react': 'React',
    'site.nav.typescript': 'TypeScript',
    'site.nav.git': 'Git & GitHub',
    'site.nav.backend': 'Backend',
    'site.nav.devops': 'DevOps',

    // ─── Topic Descriptions ───
    htmlDesc: 'Learn the markup language that structures web pages.',
    cssDesc: 'Learn how to style and layout web pages.',
    javascriptDesc: 'Learn the programming language that adds dynamic functionality to web pages.',
    reactDesc: 'Build modern web apps with a component-based UI library.',
    typescriptDesc: 'Learn the typed superset of JavaScript for safer code.',
    gitDesc: 'Learn to manage code efficiently with version control.',
    backendDesc: 'Learn server, API, and database technologies.',
    devopsDesc: 'Learn deployment, CI/CD, and infrastructure management.',
    vibecodingDesc: 'Start developing with AI — from installing Claude Code to Node.js setup and troubleshooting.',

    // ─── HTML Chapters ───
    html01: 'HTML Basic Structure',
    html02: 'Text and Links',
    html03: 'Forms and Input',
    html04: 'Multimedia & Embedding',

    // ─── CSS Chapters ───
    css01: 'CSS Selectors & Properties',
    css02: 'Box Model & Layout',
    css03: 'Flexbox',
    css04: 'Grid & Responsive Design',

    // ─── JavaScript Chapters ───
    js01: 'Variables & Data Types',
    js02: 'Functions & Scope',
    js03: 'DOM Manipulation',
    js04: 'Modern ES6+ Syntax',

    // ─── React Chapters ───
    react01: 'JSX & Components',
    react02: 'State & Props',
    react03: 'Hooks',
    react04: 'Context & Component Patterns',

    // ─── TypeScript Chapters ───
    ts01: 'Type Basics',
    ts02: 'Interfaces & Types',
    ts03: 'Advanced Types & Enums',
    ts04: 'TypeScript with React',

    // ─── Git Chapters ───
    git01: 'Git Basics',
    git02: 'Branching & Merging',
    git03: 'Rebase & History',
    git04: 'Collaboration & Conventions',

    // ─── Backend Chapters ───
    backend01: 'Node.js Basics',
    backend02: 'REST API',
    backend03: 'Authentication & JWT',
    backend04: 'Env Config & Deployment',

    // ─── DevOps Chapters ───
    devops01: 'Vite & Build Tools',
    devops02: 'Deployment & CI/CD',
    devops03: 'Code Quality & Testing',
    devops04: 'Performance & Monitoring',

    // ─── Vibe Coding Chapters ───
    vibe01: 'Installing Node.js',
    vibe02: 'Installing & Starting Claude Code',
    vibe03: 'Troubleshooting Common Errors',

    // ─── Categories (flat) ───
    beginner: 'Beginner',
    beginnerDesc: 'Foundational problems for those just starting out.',
    intermediate: 'Intermediate',
    intermediateDesc: 'Advanced problems for those with solid fundamentals.',
    advanced: 'Advanced',
    advancedDesc: 'Challenging problems requiring deep understanding.',
    practical: 'Practical',
    practicalDesc: 'Project-based problems applicable to real-world scenarios.',

    // ─── Categories (dotted) ───
    'category.beginner': 'Beginner',
    'category.intermediate': 'Intermediate',
    'category.advanced': 'Advanced',
    'category.practical': 'Practical',

    // ─── Home page (dotted) ───
    'home.hero.title1': 'Everything Web Dev',
    'home.hero.desc1': 'From HTML to DevOps',
    'home.hero.title2': 'Level Up with Challenges',
    'home.hero.desc2': 'Prove your skills',
    'home.hero.title3': 'Live Coding',
    'home.hero.desc3': 'Learn with live preview',
    'home.topics.title': 'Learning Topics',
    'home.stats.topics': 'Topics',
    'home.stats.chapters': 'Chapters',
    'home.stats.problems': 'Challenges',

    // ─── Hero (flat) ───
    heroTitle1: 'Your First Step in',
    heroHighlight1: 'Web Development',
    heroDesc1: 'Learn systematically from HTML, CSS, JavaScript to React and TypeScript.',
    heroTitle2: 'Improve Skills with',
    heroHighlight2: 'Real Problems',
    heroDesc2: 'Solve coding problems by difficulty level and build practical skills.',
    heroTitle3: 'Your Personal',
    heroHighlight3: 'Learning Roadmap',
    heroDesc3: 'Track your progress and achievements to reach your goals.',
    startLearning: 'Start Learning',
    viewProgress: 'View Progress',

    // ─── Section (flat) ───
    topicSection: 'Learning Topics',
    topicSectionDesc: 'Learn essential web development technologies in a structured curriculum.',

    // ─── Home sections (added) ───
    'home.stats.free': 'Free',
    'home.why.title': 'Why This Platform?',
    'home.why.subtitle': 'Designed so everyone — from beginners to professionals — can grow without friction.',
    'home.why.f1.title': 'Structured Curriculum',
    'home.why.f1.desc': 'Follow an ordered learning path from HTML/CSS to React, TypeScript, Git, backend, and DevOps.',
    'home.why.f2.title': 'Learn by Doing',
    'home.why.f2.desc': 'Master concepts hands-on with 40 real problems by difficulty and a live code editor.',
    'home.why.f3.title': 'Live Preview',
    'home.why.f3.desc': 'See your code render instantly on screen and internalize the results.',
    'home.why.f4.title': 'Progress Tracking',
    'home.why.f4.desc': 'See your progress and achievements at a glance and finish what you start.',
    'home.cat.title': 'Challenge by Difficulty',
    'home.cat.subtitle': 'Take on challenges step by step, from beginner to practical.',
    'home.cta.title': 'Start Right Now',
    'home.cta.desc': 'All learning content is available for free — no sign-up required.',
    'home.cta.btn': 'Start Learning',

    // ─── Stats (flat) ───
    totalProblems: 'Total Problems',
    languages: 'Languages',
    categories: 'Categories',

    // ─── Problems (flat) ───
    allProblems: 'All Problems',
    noProblem: 'No Problem',
    noProblemsYet: 'No problems have been added yet.',
    comingSoon: 'New problems will be added soon.',
    expectedOutput: 'Expected Output',
    solution: 'View Solution',
    markComplete: 'Mark Complete',
    markIncomplete: 'Mark Incomplete',
    completed: 'Completed',

    // ─── Problems (dotted) ───
    'problems.title': 'Challenges',
    'problems.subtitle': 'Test your skills',
    'problems.filter.all': 'All',
    'problems.filter.topic': 'Topic',
    'problems.search': 'Search problems',
    'problems.completed': 'Completed',
    'problems.start': 'Start',

    // ─── Problem detail (dotted) ───
    'problem.hint': 'Hint',
    'problem.solution': 'Solution',
    'problem.markComplete': 'Mark Complete',
    'problem.markIncomplete': 'Unmark',
    'problem.prev': 'Previous',
    'problem.next': 'Next',

    // ─── Playground (dotted) ───
    'playground.title': 'Playground',
    'playground.subtitle': 'Code freely',
    'playground.run': 'Run',
    'playground.reset': 'Reset',
    'playground.template': 'Template',

    // ─── Playground (flat) ───
    playgroundDesc: 'Write HTML, CSS, and JavaScript code and see results in real time.',

    // ─── Progress (flat) ───
    progressTitle: 'Learning Progress',
    communitySubtitle: 'View your learning progress and community statistics.',
    totalCompleted: 'Completed',
    totalRemaining: 'Remaining',
    completionRate: 'Completion Rate',
    overallProgress: 'Overall Progress',
    stampCollection: 'Stamp Collection',
    participants: 'Participants',
    totalSolves: 'Total Solves',
    popularProblem: 'Popular Problem',
    solveCount: 'Solve Count',
    myProgress: 'My Progress',
    communityCategoryProgress: 'Community Category Progress',
    communityStampCollection: 'Community Stamp Collection',
    loadingStats: 'Loading stats...',
    statsLoadFailed: 'Failed to load statistics.',

    // ─── Progress (dotted) ───
    'progress.title': 'Learning Progress',
    'progress.community': 'Community Stats',
    'progress.personal': 'My Progress',
    'progress.total': 'Total Completed',
    'progress.stamp': 'Stamp',

    // ─── Profile (dotted) ───
    'profile.title': 'My Profile',
    'profile.badges': 'Badge Collection',
    'profile.certificate': 'Certificate',
    'profile.downloadPdf': 'Download PDF',
    'profile.downloadPng': 'Download PNG',

    // ─── Guide (flat) ───
    guideTitle: 'Learning Guide',
    guideSubtitle: 'Roadmaps and tips for effective web development learning.',

    // ─── Guide (dotted) ───
    'guide.title': 'Learning Guide',
    'guide.subtitle': 'How to learn effectively',

    // ─── Chapter (flat) ───
    chapterPrev: 'Previous Chapter',
    chapterNext: 'Next Chapter',
    chapterList: 'Chapter List',
    codeExample: 'Code Example',
    outputResult: 'Output Result',
    chapterOverview: 'Chapter Overview',
    chapters: 'Chapters',
    learning: 'Learning',

    // ─── Common (flat) ───
    backToList: 'Back to List',
    notFound: 'Page not found.',
    goHome: 'Go Home',
    copied: 'Copied!',
    copy: 'Copy',
    categoryOverview: 'Category Overview',
    explanation: 'Explanation',

    // ─── Common (dotted) ───
    'common.chapter': 'Chapter',
    'common.back': 'Go Back',
    'common.next': 'Next',
    'common.prev': 'Previous',
    'common.copy': 'Copy',
    'common.copied': 'Copied',
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.search': 'Search',
    'common.close': 'Close',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'common.delete': 'Delete',

    // ─── Auth (flat) ───
    login: 'Log In',
    logout: 'Log Out',
    signUp: 'Sign Up',
    profile: 'Profile',
    editName: 'Edit Name',
    saveName: 'Save Name',
    cancelEdit: 'Cancel',
    completedProblems: 'Completed Problems',
    syncing: 'Syncing...',
    badgesTitle: 'Earned Badges',

    // ─── Auth (dotted) ───
    auth: {
      login: 'Login',
      register: 'Register',
      email: 'Email',
      password: 'Password',
      forgotPassword: 'Forgot Password',
      googleLogin: 'Login with Google',
      kakaoLogin: 'Login with Kakao',
      loginTitle: 'Login',
      loginSubtitle: 'Choose a login method',
      loginError: 'An error occurred while logging in.',
      loggingIn: 'Logging in...',
      signUp: 'Sign Up',
      signUpTitle: 'Sign Up',
      signUpSubtitle: 'Create an account to start learning',
      signUpSuccess: 'Sign up complete! Please check your email.',
      signUpError: 'An error occurred during sign up.',
      signingUp: 'Signing up...',
      checkEmail: 'Please check your email for a verification link.',
      goToLogin: 'Go to Login',
      noAccount: "Don't have an account?",
      hasAccount: 'Already have an account?',
      back: 'Back',
      emailPlaceholder: 'Email address',
      passwordPlaceholder: 'Password',
      passwordConfirmPlaceholder: 'Confirm password',
      displayName: 'Display Name',
      displayNamePlaceholder: 'Enter your name',
      passwordMismatch: 'Passwords do not match.',
      forgotPasswordTitle: 'Forgot Password',
      forgotPasswordSubtitle: 'Enter the email address you signed up with.',
      resetEmailSent: 'Email sent!',
      checkEmailForReset: 'A password reset link has been sent to your email.',
      backToLogin: 'Back to Login',
      sending: 'Sending...',
      sendResetLink: 'Send Reset Link',
      myPage: 'My Page',
      profileUpdated: 'Profile has been updated.',
      save: 'Save',
      saving: 'Saving...',
      noName: 'No Name',
      loginWith: 'Login:',
      emailAccount: 'Email Account',
      admin: 'Admin',
      editProfile: 'Edit Profile',
      orderHistory: 'Order History',
      logout: 'Logout',
      orderLoadError: 'Unable to load order history.',
      retry: 'Retry',
      noOrders: 'No orders found.',
      uploadComplete: 'Upload complete',
      removeImage: 'Remove Image',
      uploading: 'Uploading...',
      dragOrClick: 'Drag or click to upload image',
    },

    // ─── Badges (flat) ───
    badgeBeginnerMaster: 'Beginner Master',
    badgeBeginnerMasterDesc: 'Completed all beginner problems.',
    badgeIntermediateMaster: 'Intermediate Master',
    badgeIntermediateMasterDesc: 'Completed all intermediate problems.',
    badgeAdvancedMaster: 'Advanced Master',
    badgeAdvancedMasterDesc: 'Completed all advanced problems.',
    badgePracticalMaster: 'Practical Master',
    badgePracticalMasterDesc: 'Completed all practical problems.',
    badgeFirstStep: 'First Step',
    badgeFirstStepDesc: 'Completed your first problem.',
    badgeExplorer: 'Explorer',
    badgeExplorerDesc: 'Completed 10 or more problems.',
    badgeChallenger: 'Challenger',
    badgeChallengerDesc: 'Completed 25 or more problems.',
    badgeExpert: 'Expert',
    badgeExpertDesc: 'Completed 50 or more problems.',
    badgeGrandMaster: 'Grand Master',
    badgeGrandMasterDesc: 'Completed all problems.',
    badgeFrontendTrio: 'Frontend Trio',
    badgeFrontendTrioDesc: 'Completed all HTML, CSS, and JavaScript problems.',
    badgeReactMaster: 'React Master',
    badgeReactMasterDesc: 'Completed all React-related problems.',
    badgeFullstack: 'Fullstack Developer',
    badgeFullstackDesc: 'Completed all frontend and backend problems.',
    badgeAllRounder: 'All-Rounder',
    badgeAllRounderDesc: 'Completed at least one problem in every category.',
    badgeEarned: 'Earned',
    badgeLocked: 'Locked',

    // ─── Certificate (flat) ───
    certificateTitle: 'Certificate',
    certificateSubtitle: 'Receive a certificate to prove your learning achievements.',
    certSiteName: 'DreamIT Web Development',
    certTitle: 'Web Development Certificate',
    certAwardedTo: 'Awarded To',
    certDescription: 'This certificate verifies successful completion of the DreamIT Web Development learning course.',
    certCompletedProblems: 'Problems Completed',
    certCompletionRate: 'Completion Rate',
    certDate: 'Date Issued',
    downloadPDF: 'Download PDF',
    downloadPNG: 'Download PNG',
    certificateLocked: 'Certificate is available after completing all problems.',
    downloading: 'Downloading...',

    // ─── Footer (dotted) ───
    footer: {
      tagline: 'Structured learning content from web development basics to advanced practice.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      terms: 'Terms',
      privacy: 'Privacy Policy',
      copyright: 'All Rights Reserved.',
    },

    // ─── Footer (flat) ───
    footerDesc: 'Structured learning content from web development basics to advanced practice.',
    quickLinks: 'Quick Links',
    resourceLinks: 'Resources',
    familySites: 'Family Sites',
    copyright: 'DreamIT Biz. All Rights Reserved.',
    contact: 'Contact',
    businessHours: 'Weekdays 09:00 - 18:00',

    // ─── Theme (flat) ───
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    autoMode: 'Auto Mode',
    themeColor: 'Theme Color',

    // ─── Search (dotted) ───
    search: {
      placeholder: 'Search...',
      searching: 'Searching...',
      noResults: 'No results found.',
      hint: 'Search for chapters, problems, topics, and more.',
      blog: 'Blog',
      board: 'Board',
      gallery: 'Gallery',
    },

    // ─── Shop (dotted) ───
    shop: {
      currency: 'KRW',
    },

    // ─── Checkout (dotted) ───
    checkout: {
      title: 'Checkout',
      customerInfo: 'Customer Information',
      name: 'Name',
      namePlaceholder: 'Enter your name',
      email: 'Email',
      emailPlaceholder: 'Enter your email',
      phone: 'Phone',
      phonePlaceholder: 'Enter your phone number',
      paymentMethod: 'Payment Method',
      card: 'Credit Card',
      bankTransfer: 'Bank Transfer',
      agree: 'I agree to the order details.',
      orderSummary: 'Order Summary',
      totalAmount: 'Total Amount',
      processing: 'Processing...',
      pay: 'Pay Now',
    },

    // ─── Cart (dotted) ───
    cart: {
      title: 'Cart',
      empty: 'Your cart is empty.',
      continueShopping: 'Continue Shopping',
      remove: 'Remove',
      orderSummary: 'Order Summary',
      items: 'items',
      total: 'Total',
      checkout: 'Checkout',
    },

    // ─── Order (dotted) ───
    order: {
      title: 'Order Confirmation',
      success: 'Your order has been placed!',
      orderNumber: 'Order Number',
      paymentStatus: 'Payment Status',
      paid: 'Paid',
      pending: 'Pending',
      failed: 'Failed',
      orderDetails: 'Order Details',
      productName: 'Product',
      unitPrice: 'Unit Price',
      quantity: 'Qty',
      subtotal: 'Subtotal',
      totalAmount: 'Total',
      backToShop: 'Back to Shop',
      backToHome: 'Go Home',
    },

    // ─── Community (dotted) ───
    community: {
      cancel: 'Cancel',
      loading: 'Loading...',
    },

    // ─── Comments (dotted) ───
    comments: {
      deleteConfirm: 'Are you sure you want to delete this?',
    },
  },
};

export default translations;

