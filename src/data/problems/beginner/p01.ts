import type { WebProblem } from '../../types';
export const p1: WebProblem = {
  id: 'beginner-1', number: 1, title: '자기소개 페이지', titleEn: 'Self Introduction Page',
  category: 'beginner', topic: 'html', difficulty: 'beginner',
  description: '자기소개 HTML 페이지를 작성하세요. 이름, 취미, 좋아하는 것을 포함해야 합니다.',
  descriptionEn: 'Create a self-introduction HTML page. Include your name, hobbies, and favorite things.',
  hint: '<h1>, <p>, <ul>, <li> 태그를 활용하세요.',
  hintEn: 'Use <h1>, <p>, <ul>, <li> tags.',
  solution: {
    html: `<h1>안녕하세요! 저는 홍길동입니다</h1>\n<p>웹 개발을 배우고 있는 학생입니다.</p>\n<h2>취미</h2>\n<ul>\n  <li>코딩</li>\n  <li>독서</li>\n  <li>게임</li>\n</ul>\n<h2>좋아하는 것</h2>\n<ol>\n  <li>JavaScript</li>\n  <li>React</li>\n  <li>TypeScript</li>\n</ol>`
  },
  solutionExplanation: 'HTML의 기본 태그인 h1(제목), p(단락), ul/ol(목록), li(항목)을 사용하여 구조화된 자기소개 페이지를 만들었습니다.',
  solutionExplanationEn: 'Created a structured self-introduction page using basic HTML tags: h1 (heading), p (paragraph), ul/ol (lists), li (items).'
};
