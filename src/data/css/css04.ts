import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '04-grid-responsive',
  chapter: 4,
  titleKey: 'css04',
  sections: [
    {
      title: 'CSS Grid 레이아웃',
      titleEn: 'CSS Grid Layout',
      content: 'Grid는 행과 열을 모두 다루는 2차원 레이아웃 시스템입니다. display:grid와 grid-template-columns로 열을 정의하고, gap으로 간격을 줍니다. repeat()와 fr 단위로 유연한 격자를 만들 수 있습니다.',
      contentEn: 'Grid is a two-dimensional layout system that handles both rows and columns. Define columns with display:grid and grid-template-columns, and add spacing with gap. Build flexible grids with repeat() and the fr unit.',
      code: `<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  .grid > div {
    background: #0046C8; color: #fff;
    padding: 20px; text-align: center; border-radius: 8px;
  }
  .span-2 { grid-column: span 2; background: #00855A; }
</style>

<div class="grid">
  <div class="span-2">span 2</div>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: 'grid-template-columns: repeat(3, 1fr)의 의미는?',
        questionEn: 'What does grid-template-columns: repeat(3, 1fr) mean?',
        options: ['3개의 행을 만든다', '동일한 너비의 열 3개를 만든다', '3px 간격을 준다', '3개 요소만 표시한다'],
        optionsEn: ['Creates 3 rows', 'Creates 3 equal-width columns', 'Adds 3px gap', 'Shows only 3 elements'],
        correctIndex: 1,
        explanation: 'repeat(3, 1fr)은 1fr(남은 공간의 동일 비율) 열을 3번 반복해, 너비가 같은 열 3개를 만듭니다.',
        explanationEn: 'repeat(3, 1fr) repeats a 1fr (equal share of remaining space) column three times, creating 3 equal-width columns.'
      }
    },
    {
      title: '반응형과 미디어 쿼리',
      titleEn: 'Responsive Design and Media Queries',
      content: '미디어 쿼리(@media)는 화면 너비 등 조건에 따라 다른 스타일을 적용해 반응형 웹을 만듭니다. 모바일 우선(mobile-first) 접근에서는 기본 스타일을 모바일로 작성하고, min-width로 큰 화면 스타일을 덧붙입니다.',
      contentEn: 'Media queries (@media) apply different styles based on conditions like screen width to create responsive web designs. In a mobile-first approach, write base styles for mobile and layer larger-screen styles with min-width.',
      code: `<style>
  .cards { display: grid; grid-template-columns: 1fr; gap: 10px; }
  .card { background: #8B1AC8; color:#fff; padding:16px; border-radius:8px; }

  /* 태블릿 이상: 2열 */
  @media (min-width: 600px) {
    .cards { grid-template-columns: repeat(2, 1fr); }
  }
  /* 데스크톱 이상: 3열 */
  @media (min-width: 900px) {
    .cards { grid-template-columns: repeat(3, 1fr); }
  }
</style>

<div class="cards">
  <div class="card">A</div><div class="card">B</div>
  <div class="card">C</div><div class="card">D</div>
</div>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: '모바일 우선(mobile-first) 반응형에서 주로 사용하는 미디어 쿼리 조건은?',
        questionEn: 'Which media query condition is mainly used in mobile-first responsive design?',
        options: ['max-width', 'min-width', 'max-height', 'orientation'],
        optionsEn: ['max-width', 'min-width', 'max-height', 'orientation'],
        correctIndex: 1,
        explanation: '모바일 우선에서는 기본(작은 화면) 스타일을 먼저 쓰고 min-width로 화면이 커질 때 스타일을 추가합니다.',
        explanationEn: 'Mobile-first writes base (small-screen) styles first and adds styles with min-width as the screen grows.'
      }
    },
    {
      title: 'CSS 변수와 전환',
      titleEn: 'CSS Variables and Transitions',
      content: 'CSS 사용자 정의 속성(변수)은 --name으로 정의하고 var(--name)으로 사용합니다. :root에 두면 전역으로 재사용됩니다. transition은 속성 변화에 부드러운 애니메이션을 부여해 호버 효과 등에 사용합니다.',
      contentEn: 'CSS custom properties (variables) are defined with --name and used with var(--name). Placing them in :root makes them globally reusable. transition applies smooth animation to property changes, useful for hover effects.',
      code: `<style>
  :root { --brand: #0046C8; --radius: 10px; }
  .btn {
    background: var(--brand);
    color: #fff; border: none;
    padding: 12px 20px;
    border-radius: var(--radius);
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
  .btn:hover { transform: translateY(-3px); opacity: 0.9; }
</style>

<button class="btn">마우스를 올려보세요</button>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: 'CSS 변수를 전역으로 정의할 때 흔히 사용하는 선택자는?',
        questionEn: 'Which selector is commonly used to define CSS variables globally?',
        options: ['body', ':root', '*', 'html.global'],
        optionsEn: ['body', ':root', '*', 'html.global'],
        correctIndex: 1,
        explanation: ':root는 문서 최상위(html)를 가리키며, 여기에 정의한 변수는 모든 요소에서 var()로 재사용할 수 있습니다.',
        explanationEn: ':root targets the document root (html); variables defined there can be reused anywhere via var().'
      }
    }
  ]
};

export default chapter;
