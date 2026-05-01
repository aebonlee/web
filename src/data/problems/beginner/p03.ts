import type { WebProblem } from '../../types';
export const p3: WebProblem = {
  id: 'beginner-3', number: 3, title: '버튼 클릭 카운터', titleEn: 'Button Click Counter',
  category: 'beginner', topic: 'javascript', difficulty: 'beginner',
  description: '버튼을 클릭할 때마다 숫자가 1씩 증가하는 카운터를 만드세요.',
  descriptionEn: 'Create a counter that increments by 1 each time a button is clicked.',
  solution: {
    html: `<div style="text-align:center;padding:40px">\n  <h2 id="count">0</h2>\n  <button id="btn" style="padding:10px 24px;font-size:16px;cursor:pointer">클릭!</button>\n</div>`,
    js: `let count = 0;\ndocument.getElementById('btn').addEventListener('click', function() {\n  count++;\n  document.getElementById('count').textContent = count;\n});`
  },
  solutionExplanation: 'addEventListener로 클릭 이벤트를 감지하고, textContent로 화면의 숫자를 업데이트합니다.',
  solutionExplanationEn: 'Uses addEventListener to detect click events and textContent to update the displayed number.'
};
