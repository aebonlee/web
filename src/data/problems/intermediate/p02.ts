import type { WebProblem } from '../../types';
export const p2: WebProblem = {
  id: 'intermediate-p02', number: 2, title: 'CSS 애니메이션', titleEn: 'CSS Animations',
  category: 'intermediate', topic: 'css', difficulty: 'intermediate',
  description: '@keyframes를 사용하여 로딩 스피너, 페이드인 텍스트, 바운스 효과 등 다양한 CSS 애니메이션을 만드세요.',
  descriptionEn: 'Create various CSS animations using @keyframes: loading spinner, fade-in text, and bounce effects.',
  hint: '@keyframes, animation-duration, animation-iteration-count 속성을 활용하세요.',
  hintEn: 'Use @keyframes, animation-duration, and animation-iteration-count properties.',
  solution: {
    html: `<div class="animation-showcase">\n  <div class="demo">\n    <h3>로딩 스피너</h3>\n    <div class="spinner"></div>\n  </div>\n  <div class="demo">\n    <h3>페이드인 텍스트</h3>\n    <p class="fade-in">안녕하세요! 환영합니다.</p>\n  </div>\n  <div class="demo">\n    <h3>바운스 효과</h3>\n    <div class="bounce-ball"></div>\n  </div>\n  <div class="demo">\n    <h3>펄스 효과</h3>\n    <div class="pulse-dot"></div>\n  </div>\n</div>`,
    css: `.animation-showcase {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n  padding: 24px;\n  font-family: sans-serif;\n}\n.demo {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n}\n.demo h3 { color: #0046C8; margin-bottom: 20px; }\n\n/* Spinner */\n.spinner {\n  width: 40px; height: 40px;\n  border: 4px solid #e0e0e0;\n  border-top-color: #0046C8;\n  border-radius: 50%;\n  margin: 0 auto;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n\n/* Fade In */\n.fade-in {\n  animation: fadeIn 2s ease-in-out infinite alternate;\n  font-size: 1.2rem;\n  color: #333;\n}\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n/* Bounce */\n.bounce-ball {\n  width: 30px; height: 30px;\n  background: #0046C8;\n  border-radius: 50%;\n  margin: 0 auto;\n  animation: bounce 0.6s ease-in-out infinite alternate;\n}\n@keyframes bounce {\n  from { transform: translateY(0); }\n  to { transform: translateY(-40px); }\n}\n\n/* Pulse */\n.pulse-dot {\n  width: 20px; height: 20px;\n  background: #e74c3c;\n  border-radius: 50%;\n  margin: 10px auto;\n  animation: pulse 1.5s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% { transform: scale(1); opacity: 1; }\n  50% { transform: scale(1.8); opacity: 0.3; }\n}`
  },
  solutionExplanation: '@keyframes로 4가지 애니메이션(회전, 페이드인, 바운스, 펄스)을 정의하고 animation 속성으로 적용했습니다.',
  solutionExplanationEn: 'Defined 4 animations (spin, fade-in, bounce, pulse) with @keyframes and applied them using the animation property.'
};
