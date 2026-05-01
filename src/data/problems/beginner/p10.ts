import type { WebProblem } from '../../types';
export const p10: WebProblem = {
  id: 'beginner-10', number: 10, title: '다크모드 토글', titleEn: 'Toggle Dark Mode',
  category: 'beginner', topic: 'javascript', difficulty: 'beginner',
  description: '버튼을 클릭하면 다크모드와 라이트모드를 전환하는 기능을 만드세요. 배경색과 글자색이 변경되어야 합니다.',
  descriptionEn: 'Create a toggle that switches between dark mode and light mode when clicked. Background and text colors should change.',
  hint: 'classList.toggle()과 CSS 변수(custom properties)를 활용하세요.',
  hintEn: 'Use classList.toggle() and CSS custom properties.',
  solution: {
    html: `<div class="theme-container">\n  <header>\n    <h1>다크모드 토글</h1>\n    <button id="themeToggle" class="toggle-btn">🌙 다크모드</button>\n  </header>\n  <main>\n    <div class="content-card">\n      <h3>안녕하세요!</h3>\n      <p>이 페이지는 다크모드와 라이트모드를 지원합니다. 상단 버튼을 클릭하여 테마를 전환해보세요.</p>\n    </div>\n    <div class="content-card">\n      <h3>CSS 변수 활용</h3>\n      <p>CSS Custom Properties를 사용하면 테마 전환을 효율적으로 구현할 수 있습니다.</p>\n    </div>\n  </main>\n</div>`,
    css: `.theme-container {\n  --bg-color: #ffffff;\n  --text-color: #222222;\n  --card-bg: #f5f5f5;\n  --primary: #0046C8;\n  min-height: 100vh;\n  background: var(--bg-color);\n  color: var(--text-color);\n  padding: 24px;\n  font-family: sans-serif;\n  transition: all 0.3s ease;\n}\n.theme-container.dark {\n  --bg-color: #1a1a2e;\n  --text-color: #e0e0e0;\n  --card-bg: #25253e;\n  --primary: #4A8FE7;\n}\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 600px;\n  margin: 0 auto 24px;\n}\n.toggle-btn {\n  padding: 8px 16px;\n  border: 2px solid var(--primary);\n  background: transparent;\n  color: var(--primary);\n  border-radius: 20px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.toggle-btn:hover {\n  background: var(--primary);\n  color: white;\n}\nmain {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.content-card {\n  background: var(--card-bg);\n  padding: 20px;\n  border-radius: 12px;\n  margin-bottom: 16px;\n}\n.content-card h3 {\n  color: var(--primary);\n  margin: 0 0 8px;\n}\n.content-card p {\n  line-height: 1.6;\n  margin: 0;\n}`,
    js: `const toggle = document.getElementById('themeToggle');\nconst container = document.querySelector('.theme-container');\nlet isDark = false;\n\ntoggle.addEventListener('click', function() {\n  isDark = !isDark;\n  container.classList.toggle('dark');\n  toggle.textContent = isDark ? '☀️ 라이트모드' : '🌙 다크모드';\n});`
  },
  solutionExplanation: 'CSS 변수(Custom Properties)로 테마 색상을 정의하고, JavaScript의 classList.toggle()로 dark 클래스를 전환합니다. transition으로 부드러운 전환 효과를 추가했습니다.',
  solutionExplanationEn: 'Defined theme colors with CSS Custom Properties, toggled dark class with classList.toggle(). Added smooth transition effects.'
};
