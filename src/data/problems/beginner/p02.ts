import type { WebProblem } from '../../types';
export const p2: WebProblem = {
  id: 'beginner-p02', number: 2, title: '간단한 카드 UI', titleEn: 'Simple Card UI',
  category: 'beginner', topic: 'css', difficulty: 'beginner',
  description: 'CSS를 사용하여 그림자와 둥근 모서리를 가진 카드 UI를 만드세요.',
  descriptionEn: 'Create a card UI with shadow and rounded corners using CSS.',
  solution: {
    html: `<div class="card">\n  <h3>카드 제목</h3>\n  <p>카드 설명이 여기에 들어갑니다.</p>\n  <button>더 보기</button>\n</div>`,
    css: `.card {\n  max-width: 300px;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  background: white;\n  font-family: sans-serif;\n}\n.card h3 { color: #0046C8; margin: 0 0 12px; }\n.card p { color: #666; line-height: 1.6; }\n.card button {\n  background: #0046C8;\n  color: white;\n  border: none;\n  padding: 8px 20px;\n  border-radius: 6px;\n  cursor: pointer;\n  margin-top: 12px;\n}\n.card button:hover { background: #003399; }`
  },
  solutionExplanation: 'box-shadow로 카드 그림자를, border-radius로 둥근 모서리를 구현했습니다. 버튼에 hover 효과도 추가했습니다.',
  solutionExplanationEn: 'Used box-shadow for card shadow and border-radius for rounded corners. Added hover effect on the button.'
};
