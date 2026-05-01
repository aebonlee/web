import type { WebProblem } from '../../types';
export const p4: WebProblem = {
  id: 'beginner-4', number: 4, title: '네비게이션 바', titleEn: 'Navigation Bar',
  category: 'beginner', topic: 'css', difficulty: 'beginner',
  description: 'Flexbox를 사용하여 수평 네비게이션 바를 만드세요.',
  descriptionEn: 'Create a horizontal navigation bar using Flexbox.',
  solution: {
    html: `<nav class="navbar">\n  <div class="logo">DreamIT</div>\n  <ul class="nav-links">\n    <li><a href="#">홈</a></li>\n    <li><a href="#">소개</a></li>\n    <li><a href="#">서비스</a></li>\n    <li><a href="#">연락처</a></li>\n  </ul>\n</nav>`,
    css: `.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: #0046C8;\n  color: white;\n}\n.logo { font-size: 1.4rem; font-weight: bold; }\n.nav-links {\n  display: flex;\n  list-style: none;\n  gap: 20px;\n  margin: 0; padding: 0;\n}\n.nav-links a {\n  color: white;\n  text-decoration: none;\n  padding: 6px 12px;\n  border-radius: 4px;\n}\n.nav-links a:hover { background: rgba(255,255,255,0.2); }`
  },
  solutionExplanation: 'Flexbox의 justify-content: space-between으로 로고와 메뉴를 양쪽에 배치하고, gap으로 메뉴 간격을 설정했습니다.',
  solutionExplanationEn: 'Used Flexbox justify-content: space-between to place logo and menu on opposite sides, and gap for menu spacing.'
};
