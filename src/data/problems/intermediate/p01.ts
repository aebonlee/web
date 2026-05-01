import type { WebProblem } from '../../types';
export const p1: WebProblem = {
  id: 'intermediate-1', number: 1, title: '반응형 그리드 레이아웃', titleEn: 'Responsive Grid Layout',
  category: 'intermediate', topic: 'css', difficulty: 'intermediate',
  description: 'CSS Grid를 사용하여 화면 크기에 따라 열 수가 자동으로 변경되는 반응형 카드 레이아웃을 만드세요. 데스크톱 3열, 태블릿 2열, 모바일 1열이어야 합니다.',
  descriptionEn: 'Create a responsive card layout using CSS Grid that automatically adjusts columns based on screen size. Desktop 3 columns, tablet 2, mobile 1.',
  hint: '@media 쿼리와 auto-fill/minmax를 활용하세요.',
  hintEn: 'Use @media queries and auto-fill/minmax.',
  solution: {
    html: `<div class="grid-container">\n  <div class="grid-card"><h3>프로젝트 1</h3><p>React로 만든 웹 애플리케이션</p><span class="tag">React</span></div>\n  <div class="grid-card"><h3>프로젝트 2</h3><p>Node.js 기반 REST API 서버</p><span class="tag">Node.js</span></div>\n  <div class="grid-card"><h3>프로젝트 3</h3><p>TypeScript 유틸리티 라이브러리</p><span class="tag">TypeScript</span></div>\n  <div class="grid-card"><h3>프로젝트 4</h3><p>Python 데이터 분석 도구</p><span class="tag">Python</span></div>\n  <div class="grid-card"><h3>프로젝트 5</h3><p>모바일 반응형 포트폴리오</p><span class="tag">CSS</span></div>\n  <div class="grid-card"><h3>프로젝트 6</h3><p>실시간 채팅 애플리케이션</p><span class="tag">WebSocket</span></div>\n</div>`,
    css: `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.grid-card {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 12px rgba(0,0,0,0.08);\n  transition: transform 0.2s, box-shadow 0.2s;\n  font-family: sans-serif;\n}\n.grid-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.12);\n}\n.grid-card h3 {\n  color: #0046C8;\n  margin: 0 0 8px;\n}\n.grid-card p {\n  color: #666;\n  line-height: 1.6;\n  margin: 0 0 16px;\n}\n.tag {\n  display: inline-block;\n  background: #e8f0fe;\n  color: #0046C8;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .grid-container {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 16px;\n    padding: 16px;\n  }\n}\n@media (max-width: 480px) {\n  .grid-container {\n    grid-template-columns: 1fr;\n  }\n}`
  },
  solutionExplanation: 'auto-fill과 minmax를 사용하여 자동 반응형 그리드를 만들고, @media 쿼리로 브레이크포인트별 열 수를 제어합니다.',
  solutionExplanationEn: 'Used auto-fill with minmax for automatic responsive grid, and @media queries to control column counts at breakpoints.'
};
