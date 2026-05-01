import type { WebProblem } from '../../types';
export const p6: WebProblem = {
  id: 'beginner-p06', number: 6, title: '그라데이션 버튼', titleEn: 'Gradient Button',
  category: 'beginner', topic: 'css', difficulty: 'beginner',
  description: 'CSS 그라데이션과 hover 애니메이션이 적용된 버튼을 만드세요. 마우스를 올리면 그라데이션 방향이 바뀌어야 합니다.',
  descriptionEn: 'Create a button with CSS gradient and hover animation. The gradient direction should change on hover.',
  hint: 'linear-gradient와 transition 속성을 활용하세요.',
  hintEn: 'Use linear-gradient and transition properties.',
  solution: {
    html: `<div style="text-align:center;padding:60px">\n  <button class="gradient-btn">시작하기</button>\n  <button class="gradient-btn outline">더 알아보기</button>\n</div>`,
    css: `.gradient-btn {\n  padding: 14px 36px;\n  font-size: 16px;\n  font-weight: 600;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  background: linear-gradient(135deg, #0046C8, #4A8FE7);\n  color: white;\n  transition: all 0.3s ease;\n  margin: 0 8px;\n}\n.gradient-btn:hover {\n  background: linear-gradient(315deg, #0046C8, #4A8FE7);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0,70,200,0.35);\n}\n.gradient-btn.outline {\n  background: transparent;\n  border: 2px solid #0046C8;\n  color: #0046C8;\n}\n.gradient-btn.outline:hover {\n  background: linear-gradient(135deg, #0046C8, #4A8FE7);\n  color: white;\n  border-color: transparent;\n}`
  },
  solutionExplanation: 'linear-gradient로 그라데이션 배경을 만들고, hover 시 방향을 반대로 변경합니다. transition으로 부드러운 전환 효과를 추가했습니다.',
  solutionExplanationEn: 'Created gradient background with linear-gradient, reversing direction on hover. Added smooth transition effects.'
};
