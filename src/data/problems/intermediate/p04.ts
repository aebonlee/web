import type { WebProblem } from '../../types';
export const p4: WebProblem = {
  id: 'intermediate-4', number: 4, title: '탭 컴포넌트', titleEn: 'Tab Component',
  category: 'intermediate', topic: 'javascript', difficulty: 'intermediate',
  description: '여러 탭을 클릭하면 해당 콘텐츠가 표시되는 탭 컴포넌트를 만드세요. 활성화된 탭에 하이라이트 스타일을 적용하세요.',
  descriptionEn: 'Create a tab component that shows corresponding content when tabs are clicked. Apply highlight styles to the active tab.',
  hint: 'data 속성과 classList를 활용하여 탭 전환을 구현하세요.',
  hintEn: 'Use data attributes and classList to implement tab switching.',
  solution: {
    html: `<div class="tabs-container">\n  <div class="tab-buttons">\n    <button class="tab-btn active" data-tab="html">HTML</button>\n    <button class="tab-btn" data-tab="css">CSS</button>\n    <button class="tab-btn" data-tab="js">JavaScript</button>\n  </div>\n  <div class="tab-content active" id="tab-html">\n    <h3>HTML</h3>\n    <p>HTML(HyperText Markup Language)은 웹 페이지의 구조를 정의하는 마크업 언어입니다. 시맨틱 태그를 사용하여 의미 있는 문서 구조를 만들 수 있습니다.</p>\n  </div>\n  <div class="tab-content" id="tab-css">\n    <h3>CSS</h3>\n    <p>CSS(Cascading Style Sheets)는 HTML 요소의 시각적 표현을 담당합니다. Flexbox, Grid, 애니메이션 등 다양한 레이아웃 기법을 제공합니다.</p>\n  </div>\n  <div class="tab-content" id="tab-js">\n    <h3>JavaScript</h3>\n    <p>JavaScript는 웹 페이지에 상호작용성을 추가하는 프로그래밍 언어입니다. DOM 조작, 이벤트 처리, 비동기 프로그래밍 등이 가능합니다.</p>\n  </div>\n</div>`,
    css: `.tabs-container {\n  max-width: 500px;\n  margin: 20px auto;\n  font-family: sans-serif;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(0,0,0,0.1);\n}\n.tab-buttons {\n  display: flex;\n  background: #f0f0f0;\n}\n.tab-btn {\n  flex: 1;\n  padding: 14px 20px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-size: 15px;\n  font-weight: 600;\n  color: #666;\n  transition: all 0.3s;\n  border-bottom: 3px solid transparent;\n}\n.tab-btn:hover { color: #0046C8; background: #e8f0fe; }\n.tab-btn.active {\n  color: #0046C8;\n  background: white;\n  border-bottom-color: #0046C8;\n}\n.tab-content {\n  display: none;\n  padding: 24px;\n  background: white;\n}\n.tab-content.active { display: block; }\n.tab-content h3 { color: #0046C8; margin: 0 0 12px; }\n.tab-content p { color: #555; line-height: 1.7; margin: 0; }`,
    js: `document.querySelectorAll('.tab-btn').forEach(function(btn) {\n  btn.addEventListener('click', function() {\n    // Remove active from all buttons and contents\n    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });\n    document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });\n\n    // Activate clicked tab\n    btn.classList.add('active');\n    var tabId = 'tab-' + btn.getAttribute('data-tab');\n    document.getElementById(tabId).classList.add('active');\n  });\n});`
  },
  solutionExplanation: 'data-tab 속성으로 탭과 콘텐츠를 연결하고, classList.add/remove로 활성 상태를 전환합니다.',
  solutionExplanationEn: 'Connected tabs to content via data-tab attributes, and toggled active state with classList.add/remove.'
};
