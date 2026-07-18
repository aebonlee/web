var e=[{id:`beginner-p01`,number:1,title:`자기소개 페이지`,titleEn:`Self Introduction Page`,category:`beginner`,topic:`html`,difficulty:`beginner`,description:`자기소개 HTML 페이지를 작성하세요. 이름, 취미, 좋아하는 것을 포함해야 합니다.`,descriptionEn:`Create a self-introduction HTML page. Include your name, hobbies, and favorite things.`,hint:`<h1>, <p>, <ul>, <li> 태그를 활용하세요.`,hintEn:`Use <h1>, <p>, <ul>, <li> tags.`,solution:{html:`<h1>안녕하세요! 저는 홍길동입니다</h1>
<p>웹 개발을 배우고 있는 학생입니다.</p>
<h2>취미</h2>
<ul>
  <li>코딩</li>
  <li>독서</li>
  <li>게임</li>
</ul>
<h2>좋아하는 것</h2>
<ol>
  <li>JavaScript</li>
  <li>React</li>
  <li>TypeScript</li>
</ol>`},solutionExplanation:`HTML의 기본 태그인 h1(제목), p(단락), ul/ol(목록), li(항목)을 사용하여 구조화된 자기소개 페이지를 만들었습니다.`,solutionExplanationEn:`Created a structured self-introduction page using basic HTML tags: h1 (heading), p (paragraph), ul/ol (lists), li (items).`},{id:`beginner-p02`,number:2,title:`간단한 카드 UI`,titleEn:`Simple Card UI`,category:`beginner`,topic:`css`,difficulty:`beginner`,description:`CSS를 사용하여 그림자와 둥근 모서리를 가진 카드 UI를 만드세요.`,descriptionEn:`Create a card UI with shadow and rounded corners using CSS.`,solution:{html:`<div class="card">
  <h3>카드 제목</h3>
  <p>카드 설명이 여기에 들어갑니다.</p>
  <button>더 보기</button>
</div>`,css:`.card {
  max-width: 300px;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  background: white;
  font-family: sans-serif;
}
.card h3 { color: #0046C8; margin: 0 0 12px; }
.card p { color: #666; line-height: 1.6; }
.card button {
  background: #0046C8;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 12px;
}
.card button:hover { background: #003399; }`},solutionExplanation:`box-shadow로 카드 그림자를, border-radius로 둥근 모서리를 구현했습니다. 버튼에 hover 효과도 추가했습니다.`,solutionExplanationEn:`Used box-shadow for card shadow and border-radius for rounded corners. Added hover effect on the button.`},{id:`beginner-p03`,number:3,title:`버튼 클릭 카운터`,titleEn:`Button Click Counter`,category:`beginner`,topic:`javascript`,difficulty:`beginner`,description:`버튼을 클릭할 때마다 숫자가 1씩 증가하는 카운터를 만드세요.`,descriptionEn:`Create a counter that increments by 1 each time a button is clicked.`,solution:{html:`<div style="text-align:center;padding:40px">
  <h2 id="count">0</h2>
  <button id="btn" style="padding:10px 24px;font-size:16px;cursor:pointer">클릭!</button>
</div>`,js:`let count = 0;
document.getElementById('btn').addEventListener('click', function() {
  count++;
  document.getElementById('count').textContent = count;
});`},solutionExplanation:`addEventListener로 클릭 이벤트를 감지하고, textContent로 화면의 숫자를 업데이트합니다.`,solutionExplanationEn:`Uses addEventListener to detect click events and textContent to update the displayed number.`},{id:`beginner-p04`,number:4,title:`네비게이션 바`,titleEn:`Navigation Bar`,category:`beginner`,topic:`css`,difficulty:`beginner`,description:`Flexbox를 사용하여 수평 네비게이션 바를 만드세요.`,descriptionEn:`Create a horizontal navigation bar using Flexbox.`,solution:{html:`<nav class="navbar">
  <div class="logo">DreamIT</div>
  <ul class="nav-links">
    <li><a href="#">홈</a></li>
    <li><a href="#">소개</a></li>
    <li><a href="#">서비스</a></li>
    <li><a href="#">연락처</a></li>
  </ul>
</nav>`,css:`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: #0046C8;
  color: white;
}
.logo { font-size: 1.4rem; font-weight: bold; }
.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0; padding: 0;
}
.nav-links a {
  color: white;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;
}
.nav-links a:hover { background: rgba(255,255,255,0.2); }`},solutionExplanation:`Flexbox의 justify-content: space-between으로 로고와 메뉴를 양쪽에 배치하고, gap으로 메뉴 간격을 설정했습니다.`,solutionExplanationEn:`Used Flexbox justify-content: space-between to place logo and menu on opposite sides, and gap for menu spacing.`},{id:`beginner-p05`,number:5,title:`이미지 갤러리`,titleEn:`Image Gallery`,category:`beginner`,topic:`html`,difficulty:`beginner`,description:`HTML과 CSS를 사용하여 3열 이미지 갤러리를 만드세요. figure와 figcaption 태그를 활용하세요.`,descriptionEn:`Create a 3-column image gallery using HTML and CSS. Use figure and figcaption tags.`,hint:`CSS Grid의 grid-template-columns: repeat(3, 1fr)을 활용하세요.`,hintEn:`Use CSS Grid with grid-template-columns: repeat(3, 1fr).`,solution:{html:`<div class="gallery">
  <figure>
    <img src="https://picsum.photos/300/200?random=1" alt="사진 1">
    <figcaption>풍경 사진 1</figcaption>
  </figure>
  <figure>
    <img src="https://picsum.photos/300/200?random=2" alt="사진 2">
    <figcaption>풍경 사진 2</figcaption>
  </figure>
  <figure>
    <img src="https://picsum.photos/300/200?random=3" alt="사진 3">
    <figcaption>풍경 사진 3</figcaption>
  </figure>
  <figure>
    <img src="https://picsum.photos/300/200?random=4" alt="사진 4">
    <figcaption>풍경 사진 4</figcaption>
  </figure>
  <figure>
    <img src="https://picsum.photos/300/200?random=5" alt="사진 5">
    <figcaption>풍경 사진 5</figcaption>
  </figure>
  <figure>
    <img src="https://picsum.photos/300/200?random=6" alt="사진 6">
    <figcaption>풍경 사진 6</figcaption>
  </figure>
</div>`,css:`.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 20px;
}
.gallery figure {
  margin: 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}
.gallery figcaption {
  padding: 8px 12px;
  text-align: center;
  font-size: 14px;
  color: #555;
  background: #f9f9f9;
}`},solutionExplanation:`CSS Grid로 3열 레이아웃을 만들고, figure/figcaption으로 시맨틱 마크업을 적용했습니다. object-fit: cover로 이미지 비율을 유지합니다.`,solutionExplanationEn:`Used CSS Grid for 3-column layout with semantic figure/figcaption markup. object-fit: cover maintains image aspect ratio.`},{id:`beginner-p06`,number:6,title:`그라데이션 버튼`,titleEn:`Gradient Button`,category:`beginner`,topic:`css`,difficulty:`beginner`,description:`CSS 그라데이션과 hover 애니메이션이 적용된 버튼을 만드세요. 마우스를 올리면 그라데이션 방향이 바뀌어야 합니다.`,descriptionEn:`Create a button with CSS gradient and hover animation. The gradient direction should change on hover.`,hint:`linear-gradient와 transition 속성을 활용하세요.`,hintEn:`Use linear-gradient and transition properties.`,solution:{html:`<div style="text-align:center;padding:60px">
  <button class="gradient-btn">시작하기</button>
  <button class="gradient-btn outline">더 알아보기</button>
</div>`,css:`.gradient-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(135deg, #0046C8, #4A8FE7);
  color: white;
  transition: all 0.3s ease;
  margin: 0 8px;
}
.gradient-btn:hover {
  background: linear-gradient(315deg, #0046C8, #4A8FE7);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,70,200,0.35);
}
.gradient-btn.outline {
  background: transparent;
  border: 2px solid #0046C8;
  color: #0046C8;
}
.gradient-btn.outline:hover {
  background: linear-gradient(135deg, #0046C8, #4A8FE7);
  color: white;
  border-color: transparent;
}`},solutionExplanation:`linear-gradient로 그라데이션 배경을 만들고, hover 시 방향을 반대로 변경합니다. transition으로 부드러운 전환 효과를 추가했습니다.`,solutionExplanationEn:`Created gradient background with linear-gradient, reversing direction on hover. Added smooth transition effects.`},{id:`beginner-p07`,number:7,title:`할 일 목록`,titleEn:`To-Do List`,category:`beginner`,topic:`javascript`,difficulty:`beginner`,description:`입력창에 텍스트를 입력하고 추가 버튼을 누르면 할 일 목록에 항목이 추가되는 프로그램을 만드세요. 각 항목에 삭제 버튼도 포함하세요.`,descriptionEn:`Create a program where typing text and clicking Add adds items to a to-do list. Include a delete button for each item.`,hint:`createElement, appendChild, remove() 메서드를 활용하세요.`,hintEn:`Use createElement, appendChild, and remove() methods.`,solution:{html:`<div class="todo-app">
  <h2>할 일 목록</h2>
  <div class="input-group">
    <input type="text" id="todoInput" placeholder="할 일을 입력하세요...">
    <button id="addBtn">추가</button>
  </div>
  <ul id="todoList"></ul>
</div>`,css:`.todo-app {
  max-width: 400px;
  margin: 20px auto;
  font-family: sans-serif;
}
.todo-app h2 { color: #0046C8; }
.input-group {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.input-group input {
  flex: 1;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}
.input-group input:focus {
  outline: none;
  border-color: #0046C8;
}
.input-group button {
  padding: 10px 20px;
  background: #0046C8;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
#todoList {
  list-style: none;
  padding: 0;
}
#todoList li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  background: #f5f5f5;
  border-radius: 6px;
}
#todoList li .delete-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
}`,js:`document.getElementById('addBtn').addEventListener('click', addTodo);
document.getElementById('todoInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTodo();
});

function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.innerHTML = '<span>' + text + '</span><button class="delete-btn">삭제</button>';
  li.querySelector('.delete-btn').addEventListener('click', function() {
    li.remove();
  });

  document.getElementById('todoList').appendChild(li);
  input.value = '';
  input.focus();
}`},solutionExplanation:`DOM 조작 메서드(createElement, appendChild, remove)를 사용하여 동적으로 목록 항목을 추가/삭제합니다. Enter 키 입력도 지원합니다.`,solutionExplanationEn:`Uses DOM manipulation methods (createElement, appendChild, remove) to dynamically add/delete list items. Also supports Enter key input.`},{id:`beginner-p08`,number:8,title:`연락처 폼`,titleEn:`Contact Form`,category:`beginner`,topic:`html`,difficulty:`beginner`,description:`이름, 이메일, 메시지 필드가 있는 연락처 폼을 만드세요. 각 필드에 적절한 label과 placeholder를 포함하세요.`,descriptionEn:`Create a contact form with name, email, and message fields. Include appropriate labels and placeholders for each field.`,hint:`<form>, <label>, <input>, <textarea> 태그와 for 속성을 활용하세요.`,hintEn:`Use <form>, <label>, <input>, <textarea> tags with the for attribute.`,solution:{html:`<form class="contact-form">
  <h2>문의하기</h2>
  <div class="form-group">
    <label for="name">이름</label>
    <input type="text" id="name" placeholder="이름을 입력하세요" required>
  </div>
  <div class="form-group">
    <label for="email">이메일</label>
    <input type="email" id="email" placeholder="example@email.com" required>
  </div>
  <div class="form-group">
    <label for="subject">제목</label>
    <input type="text" id="subject" placeholder="문의 제목">
  </div>
  <div class="form-group">
    <label for="message">메시지</label>
    <textarea id="message" rows="5" placeholder="메시지를 입력하세요..." required></textarea>
  </div>
  <button type="submit">보내기</button>
</form>`,css:`.contact-form {
  max-width: 480px;
  margin: 20px auto;
  padding: 32px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  font-family: sans-serif;
}
.contact-form h2 {
  color: #0046C8;
  margin: 0 0 24px;
}
.form-group {
  margin-bottom: 16px;
}
.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px 14px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #0046C8;
}
.contact-form button {
  width: 100%;
  padding: 12px;
  background: #0046C8;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
}
.contact-form button:hover {
  background: #003399;
}`},solutionExplanation:`label의 for 속성과 input의 id를 연결하여 접근성을 확보했습니다. required 속성으로 필수 입력 검증을 추가했습니다.`,solutionExplanationEn:`Connected label for attribute with input id for accessibility. Added required attribute for mandatory field validation.`},{id:`beginner-p09`,number:9,title:`타이포그래피 스타일`,titleEn:`Typography Styles`,category:`beginner`,topic:`css`,difficulty:`beginner`,description:`CSS를 사용하여 다양한 타이포그래피 스타일을 적용한 텍스트 페이지를 만드세요. 제목, 본문, 인용문, 강조 등을 포함하세요.`,descriptionEn:`Create a text page with various typography styles using CSS. Include headings, body text, blockquotes, and emphasis.`,hint:`font-size, font-weight, line-height, letter-spacing 속성을 활용하세요.`,hintEn:`Use font-size, font-weight, line-height, and letter-spacing properties.`,solution:{html:`<article class="typography">
  <h1>웹 타이포그래피의 기초</h1>
  <p class="subtitle">아름다운 텍스트 디자인의 시작</p>
  <p class="lead">타이포그래피는 웹 디자인에서 가장 중요한 요소 중 하나입니다. 적절한 글꼴, 크기, 간격을 사용하면 가독성이 크게 향상됩니다.</p>
  <h2>주요 원칙</h2>
  <p>좋은 타이포그래피는 <strong>가독성</strong>과 <em>심미성</em>의 균형을 추구합니다. 줄 간격, 글자 간격, 단락 간격 모두 중요한 역할을 합니다.</p>
  <blockquote>
    "좋은 타이포그래피는 보이지 않는다. 나쁜 타이포그래피는 어디에나 보인다."
    <cite>— Oliver Reichenstein</cite>
  </blockquote>
  <h3>실전 팁</h3>
  <p>본문 텍스트는 <code>16px</code> 이상, 줄 간격은 <code>1.6</code> 이상을 유지하세요.</p>
</article>`,css:`.typography {
  max-width: 680px;
  margin: 0 auto;
  padding: 40px 24px;
  font-family: 'Pretendard', sans-serif;
  color: #222;
}
.typography h1 {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 8px;
}
.typography .subtitle {
  font-size: 1.2rem;
  color: #0046C8;
  margin-bottom: 32px;
}
.typography .lead {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #444;
}
.typography h2 {
  font-size: 1.6rem;
  margin-top: 40px;
  padding-bottom: 8px;
  border-bottom: 2px solid #0046C8;
}
.typography h3 {
  font-size: 1.3rem;
  color: #0046C8;
}
.typography p {
  font-size: 1rem;
  line-height: 1.75;
  margin-bottom: 16px;
}
.typography blockquote {
  border-left: 4px solid #0046C8;
  margin: 24px 0;
  padding: 16px 24px;
  background: #f0f4ff;
  border-radius: 0 8px 8px 0;
  font-style: italic;
  color: #555;
}
.typography blockquote cite {
  display: block;
  margin-top: 8px;
  font-size: 0.9rem;
  color: #888;
}
.typography code {
  background: #f0f0f0;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.9em;
  color: #e74c3c;
}`},solutionExplanation:`다양한 CSS 타이포그래피 속성(font-size, line-height, letter-spacing)을 사용하여 계층적 텍스트 디자인을 구현했습니다.`,solutionExplanationEn:`Implemented hierarchical text design using various CSS typography properties (font-size, line-height, letter-spacing).`},{id:`beginner-p10`,number:10,title:`다크모드 토글`,titleEn:`Toggle Dark Mode`,category:`beginner`,topic:`javascript`,difficulty:`beginner`,description:`버튼을 클릭하면 다크모드와 라이트모드를 전환하는 기능을 만드세요. 배경색과 글자색이 변경되어야 합니다.`,descriptionEn:`Create a toggle that switches between dark mode and light mode when clicked. Background and text colors should change.`,hint:`classList.toggle()과 CSS 변수(custom properties)를 활용하세요.`,hintEn:`Use classList.toggle() and CSS custom properties.`,solution:{html:`<div class="theme-container">
  <header>
    <h1>다크모드 토글</h1>
    <button id="themeToggle" class="toggle-btn">🌙 다크모드</button>
  </header>
  <main>
    <div class="content-card">
      <h3>안녕하세요!</h3>
      <p>이 페이지는 다크모드와 라이트모드를 지원합니다. 상단 버튼을 클릭하여 테마를 전환해보세요.</p>
    </div>
    <div class="content-card">
      <h3>CSS 변수 활용</h3>
      <p>CSS Custom Properties를 사용하면 테마 전환을 효율적으로 구현할 수 있습니다.</p>
    </div>
  </main>
</div>`,css:`.theme-container {
  --bg-color: #ffffff;
  --text-color: #222222;
  --card-bg: #f5f5f5;
  --primary: #0046C8;
  min-height: 100vh;
  background: var(--bg-color);
  color: var(--text-color);
  padding: 24px;
  font-family: sans-serif;
  transition: all 0.3s ease;
}
.theme-container.dark {
  --bg-color: #1a1a2e;
  --text-color: #e0e0e0;
  --card-bg: #25253e;
  --primary: #4A8FE7;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  margin: 0 auto 24px;
}
.toggle-btn {
  padding: 8px 16px;
  border: 2px solid var(--primary);
  background: transparent;
  color: var(--primary);
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}
.toggle-btn:hover {
  background: var(--primary);
  color: white;
}
main {
  max-width: 600px;
  margin: 0 auto;
}
.content-card {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 16px;
}
.content-card h3 {
  color: var(--primary);
  margin: 0 0 8px;
}
.content-card p {
  line-height: 1.6;
  margin: 0;
}`,js:`const toggle = document.getElementById('themeToggle');
const container = document.querySelector('.theme-container');
let isDark = false;

toggle.addEventListener('click', function() {
  isDark = !isDark;
  container.classList.toggle('dark');
  toggle.textContent = isDark ? '☀️ 라이트모드' : '🌙 다크모드';
});`},solutionExplanation:`CSS 변수(Custom Properties)로 테마 색상을 정의하고, JavaScript의 classList.toggle()로 dark 클래스를 전환합니다. transition으로 부드러운 전환 효과를 추가했습니다.`,solutionExplanationEn:`Defined theme colors with CSS Custom Properties, toggled dark class with classList.toggle(). Added smooth transition effects.`}],t=[{id:`intermediate-p01`,number:1,title:`반응형 그리드 레이아웃`,titleEn:`Responsive Grid Layout`,category:`intermediate`,topic:`css`,difficulty:`intermediate`,description:`CSS Grid를 사용하여 화면 크기에 따라 열 수가 자동으로 변경되는 반응형 카드 레이아웃을 만드세요. 데스크톱 3열, 태블릿 2열, 모바일 1열이어야 합니다.`,descriptionEn:`Create a responsive card layout using CSS Grid that automatically adjusts columns based on screen size. Desktop 3 columns, tablet 2, mobile 1.`,hint:`@media 쿼리와 auto-fill/minmax를 활용하세요.`,hintEn:`Use @media queries and auto-fill/minmax.`,solution:{html:`<div class="grid-container">
  <div class="grid-card"><h3>프로젝트 1</h3><p>React로 만든 웹 애플리케이션</p><span class="tag">React</span></div>
  <div class="grid-card"><h3>프로젝트 2</h3><p>Node.js 기반 REST API 서버</p><span class="tag">Node.js</span></div>
  <div class="grid-card"><h3>프로젝트 3</h3><p>TypeScript 유틸리티 라이브러리</p><span class="tag">TypeScript</span></div>
  <div class="grid-card"><h3>프로젝트 4</h3><p>Python 데이터 분석 도구</p><span class="tag">Python</span></div>
  <div class="grid-card"><h3>프로젝트 5</h3><p>모바일 반응형 포트폴리오</p><span class="tag">CSS</span></div>
  <div class="grid-card"><h3>프로젝트 6</h3><p>실시간 채팅 애플리케이션</p><span class="tag">WebSocket</span></div>
</div>`,css:`.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.grid-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  font-family: sans-serif;
}
.grid-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
.grid-card h3 {
  color: #0046C8;
  margin: 0 0 8px;
}
.grid-card p {
  color: #666;
  line-height: 1.6;
  margin: 0 0 16px;
}
.tag {
  display: inline-block;
  background: #e8f0fe;
  color: #0046C8;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 16px;
  }
}
@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}`},solutionExplanation:`auto-fill과 minmax를 사용하여 자동 반응형 그리드를 만들고, @media 쿼리로 브레이크포인트별 열 수를 제어합니다.`,solutionExplanationEn:`Used auto-fill with minmax for automatic responsive grid, and @media queries to control column counts at breakpoints.`},{id:`intermediate-p02`,number:2,title:`CSS 애니메이션`,titleEn:`CSS Animations`,category:`intermediate`,topic:`css`,difficulty:`intermediate`,description:`@keyframes를 사용하여 로딩 스피너, 페이드인 텍스트, 바운스 효과 등 다양한 CSS 애니메이션을 만드세요.`,descriptionEn:`Create various CSS animations using @keyframes: loading spinner, fade-in text, and bounce effects.`,hint:`@keyframes, animation-duration, animation-iteration-count 속성을 활용하세요.`,hintEn:`Use @keyframes, animation-duration, and animation-iteration-count properties.`,solution:{html:`<div class="animation-showcase">
  <div class="demo">
    <h3>로딩 스피너</h3>
    <div class="spinner"></div>
  </div>
  <div class="demo">
    <h3>페이드인 텍스트</h3>
    <p class="fade-in">안녕하세요! 환영합니다.</p>
  </div>
  <div class="demo">
    <h3>바운스 효과</h3>
    <div class="bounce-ball"></div>
  </div>
  <div class="demo">
    <h3>펄스 효과</h3>
    <div class="pulse-dot"></div>
  </div>
</div>`,css:`.animation-showcase {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 24px;
  font-family: sans-serif;
}
.demo {
  background: white;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.demo h3 { color: #0046C8; margin-bottom: 20px; }

/* Spinner */
.spinner {
  width: 40px; height: 40px;
  border: 4px solid #e0e0e0;
  border-top-color: #0046C8;
  border-radius: 50%;
  margin: 0 auto;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Fade In */
.fade-in {
  animation: fadeIn 2s ease-in-out infinite alternate;
  font-size: 1.2rem;
  color: #333;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Bounce */
.bounce-ball {
  width: 30px; height: 30px;
  background: #0046C8;
  border-radius: 50%;
  margin: 0 auto;
  animation: bounce 0.6s ease-in-out infinite alternate;
}
@keyframes bounce {
  from { transform: translateY(0); }
  to { transform: translateY(-40px); }
}

/* Pulse */
.pulse-dot {
  width: 20px; height: 20px;
  background: #e74c3c;
  border-radius: 50%;
  margin: 10px auto;
  animation: pulse 1.5s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.8); opacity: 0.3; }
}`},solutionExplanation:`@keyframes로 4가지 애니메이션(회전, 페이드인, 바운스, 펄스)을 정의하고 animation 속성으로 적용했습니다.`,solutionExplanationEn:`Defined 4 animations (spin, fade-in, bounce, pulse) with @keyframes and applied them using the animation property.`},{id:`intermediate-p03`,number:3,title:`Fetch API 데이터 표시`,titleEn:`Fetch API Data Display`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`Fetch API를 사용하여 외부 API에서 사용자 목록 데이터를 가져와 카드 형태로 화면에 표시하세요. 로딩 상태와 에러 처리도 포함하세요.`,descriptionEn:`Use the Fetch API to retrieve user list data from an external API and display it as cards. Include loading states and error handling.`,hint:`fetch(), .then(), .catch()와 async/await 패턴을 활용하세요.`,hintEn:`Use fetch(), .then(), .catch() and async/await patterns.`,solution:{html:`<div class="api-demo">
  <h2>사용자 목록</h2>
  <button id="loadBtn" class="load-btn">데이터 불러오기</button>
  <div id="status" class="status"></div>
  <div id="userList" class="user-list"></div>
</div>`,css:`.api-demo {
  max-width: 600px;
  margin: 20px auto;
  padding: 24px;
  font-family: sans-serif;
}
.api-demo h2 { color: #0046C8; }
.load-btn {
  padding: 10px 24px;
  background: #0046C8;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 16px;
}
.load-btn:disabled {
  background: #999;
  cursor: not-allowed;
}
.status {
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 6px;
  font-size: 14px;
}
.status.loading { background: #fff3cd; color: #856404; }
.status.error { background: #f8d7da; color: #721c24; }
.user-list {
  display: grid;
  gap: 12px;
}
.user-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #0046C8;
}
.user-avatar {
  width: 48px; height: 48px;
  background: #0046C8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
}
.user-info h4 { margin: 0 0 4px; color: #333; }
.user-info p { margin: 0; color: #666; font-size: 13px; }`,js:`const loadBtn = document.getElementById('loadBtn');
const status = document.getElementById('status');
const userList = document.getElementById('userList');

loadBtn.addEventListener('click', async function() {
  loadBtn.disabled = true;
  status.className = 'status loading';
  status.textContent = '데이터를 불러오는 중...';
  userList.innerHTML = '';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('HTTP Error: ' + response.status);
    const users = await response.json();

    status.textContent = '';
    status.className = 'status';

    users.forEach(function(user) {
      const card = document.createElement('div');
      card.className = 'user-card';
      card.innerHTML = 
        '<div class="user-avatar">' + user.name.charAt(0) + '</div>' +
        '<div class="user-info">' +
        '<h4>' + user.name + '</h4>' +
        '<p>' + user.email + ' | ' + user.company.name + '</p>' +
        '</div>';
      userList.appendChild(card);
    });
  } catch (err) {
    status.className = 'status error';
    status.textContent = '에러 발생: ' + err.message;
  } finally {
    loadBtn.disabled = false;
  }
});`},solutionExplanation:`async/await로 Fetch API를 호출하고, try-catch-finally로 로딩/에러/완료 상태를 관리합니다. DOM을 동적으로 생성하여 데이터를 표시합니다.`,solutionExplanationEn:`Called Fetch API with async/await, managed loading/error/complete states with try-catch-finally. Dynamically created DOM to display data.`},{id:`intermediate-p04`,number:4,title:`탭 컴포넌트`,titleEn:`Tab Component`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`여러 탭을 클릭하면 해당 콘텐츠가 표시되는 탭 컴포넌트를 만드세요. 활성화된 탭에 하이라이트 스타일을 적용하세요.`,descriptionEn:`Create a tab component that shows corresponding content when tabs are clicked. Apply highlight styles to the active tab.`,hint:`data 속성과 classList를 활용하여 탭 전환을 구현하세요.`,hintEn:`Use data attributes and classList to implement tab switching.`,solution:{html:`<div class="tabs-container">
  <div class="tab-buttons">
    <button class="tab-btn active" data-tab="html">HTML</button>
    <button class="tab-btn" data-tab="css">CSS</button>
    <button class="tab-btn" data-tab="js">JavaScript</button>
  </div>
  <div class="tab-content active" id="tab-html">
    <h3>HTML</h3>
    <p>HTML(HyperText Markup Language)은 웹 페이지의 구조를 정의하는 마크업 언어입니다. 시맨틱 태그를 사용하여 의미 있는 문서 구조를 만들 수 있습니다.</p>
  </div>
  <div class="tab-content" id="tab-css">
    <h3>CSS</h3>
    <p>CSS(Cascading Style Sheets)는 HTML 요소의 시각적 표현을 담당합니다. Flexbox, Grid, 애니메이션 등 다양한 레이아웃 기법을 제공합니다.</p>
  </div>
  <div class="tab-content" id="tab-js">
    <h3>JavaScript</h3>
    <p>JavaScript는 웹 페이지에 상호작용성을 추가하는 프로그래밍 언어입니다. DOM 조작, 이벤트 처리, 비동기 프로그래밍 등이 가능합니다.</p>
  </div>
</div>`,css:`.tabs-container {
  max-width: 500px;
  margin: 20px auto;
  font-family: sans-serif;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}
.tab-buttons {
  display: flex;
  background: #f0f0f0;
}
.tab-btn {
  flex: 1;
  padding: 14px 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: #666;
  transition: all 0.3s;
  border-bottom: 3px solid transparent;
}
.tab-btn:hover { color: #0046C8; background: #e8f0fe; }
.tab-btn.active {
  color: #0046C8;
  background: white;
  border-bottom-color: #0046C8;
}
.tab-content {
  display: none;
  padding: 24px;
  background: white;
}
.tab-content.active { display: block; }
.tab-content h3 { color: #0046C8; margin: 0 0 12px; }
.tab-content p { color: #555; line-height: 1.7; margin: 0; }`,js:`document.querySelectorAll('.tab-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    // Remove active from all buttons and contents
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
    document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });

    // Activate clicked tab
    btn.classList.add('active');
    var tabId = 'tab-' + btn.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});`},solutionExplanation:`data-tab 속성으로 탭과 콘텐츠를 연결하고, classList.add/remove로 활성 상태를 전환합니다.`,solutionExplanationEn:`Connected tabs to content via data-tab attributes, and toggled active state with classList.add/remove.`},{id:`intermediate-p05`,number:5,title:`아코디언 메뉴`,titleEn:`Accordion Menu`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`클릭하면 열리고 닫히는 아코디언 메뉴를 만드세요. 하나의 항목을 열면 나머지는 자동으로 닫히도록 구현하세요.`,descriptionEn:`Create an accordion menu that opens and closes on click. When one item opens, the others should automatically close.`,hint:`max-height와 overflow: hidden을 사용하여 애니메이션을 구현하세요.`,hintEn:`Use max-height and overflow: hidden to implement animations.`,solution:{html:`<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">HTML이란?</button>
    <div class="accordion-body">
      <p>HTML(HyperText Markup Language)은 웹 페이지의 골격을 구성하는 마크업 언어입니다. 태그를 사용하여 제목, 단락, 이미지, 링크 등 다양한 요소를 정의합니다.</p>
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">CSS란?</button>
    <div class="accordion-body">
      <p>CSS(Cascading Style Sheets)는 HTML 문서의 시각적 스타일을 정의하는 언어입니다. 색상, 폰트, 레이아웃, 애니메이션 등을 제어할 수 있습니다.</p>
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">JavaScript란?</button>
    <div class="accordion-body">
      <p>JavaScript는 웹 페이지에 동적 기능을 추가하는 프로그래밍 언어입니다. 사용자 인터랙션 처리, API 호출, DOM 조작 등이 가능합니다.</p>
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">React란?</button>
    <div class="accordion-body">
      <p>React는 Meta에서 개발한 JavaScript 라이브러리로, 컴포넌트 기반의 UI를 효율적으로 구축할 수 있습니다. Virtual DOM을 사용하여 성능을 최적화합니다.</p>
    </div>
  </div>
</div>`,css:`.accordion {
  max-width: 500px;
  margin: 20px auto;
  font-family: sans-serif;
}
.accordion-item {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 8px;
  overflow: hidden;
}
.accordion-header {
  width: 100%;
  padding: 16px 20px;
  background: white;
  border: none;
  text-align: left;
  font-size: 15px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.2s;
}
.accordion-header::after {
  content: '+';
  font-size: 20px;
  color: #0046C8;
  transition: transform 0.3s;
}
.accordion-header.active {
  background: #f0f4ff;
  color: #0046C8;
}
.accordion-header.active::after {
  content: '-';
  transform: rotate(180deg);
}
.accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.accordion-body p {
  padding: 0 20px 16px;
  color: #555;
  line-height: 1.7;
  margin: 0;
}`,js:`document.querySelectorAll('.accordion-header').forEach(function(header) {
  header.addEventListener('click', function() {
    var isActive = header.classList.contains('active');

    // Close all items
    document.querySelectorAll('.accordion-header').forEach(function(h) {
      h.classList.remove('active');
      h.nextElementSibling.style.maxHeight = null;
    });

    // Open clicked item if it was closed
    if (!isActive) {
      header.classList.add('active');
      var body = header.nextElementSibling;
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});`},solutionExplanation:`max-height를 0과 scrollHeight 사이에서 전환하여 부드러운 열기/닫기 애니메이션을 구현합니다. 한 항목만 열리도록 나머지를 먼저 닫습니다.`,solutionExplanationEn:`Transitions max-height between 0 and scrollHeight for smooth open/close animation. Closes all others before opening the clicked item.`},{id:`intermediate-p06`,number:6,title:`모달 팝업`,titleEn:`Modal Popup`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`버튼을 클릭하면 오버레이와 함께 모달 팝업이 나타나는 컴포넌트를 만드세요. 닫기 버튼, 오버레이 클릭, ESC 키로 닫을 수 있어야 합니다.`,descriptionEn:`Create a modal popup component that appears with an overlay when a button is clicked. It should close via close button, overlay click, or ESC key.`,hint:`position: fixed와 z-index를 사용하여 오버레이를 구현하세요.`,hintEn:`Use position: fixed and z-index to implement the overlay.`,solution:{html:`<div style="text-align:center;padding:60px">
  <button id="openModal" class="open-btn">모달 열기</button>
</div>

<div id="modalOverlay" class="modal-overlay">
  <div class="modal">
    <button class="modal-close" id="closeModal">&times;</button>
    <h2>알림</h2>
    <p>이것은 모달 팝업 예제입니다. 아래 방법으로 닫을 수 있습니다:</p>
    <ul>
      <li>오른쪽 상단 X 버튼 클릭</li>
      <li>배경(오버레이) 클릭</li>
      <li>ESC 키 누르기</li>
    </ul>
    <div class="modal-actions">
      <button class="modal-btn primary" id="confirmBtn">확인</button>
      <button class="modal-btn secondary" id="cancelBtn">취소</button>
    </div>
  </div>
</div>`,css:`.open-btn {
  padding: 14px 32px;
  background: #0046C8;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}
.open-btn:hover { background: #003399; }
.modal-overlay {
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
}
.modal-overlay.active {
  display: flex;
}
.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 440px;
  width: 90%;
  position: relative;
  animation: modalIn 0.3s ease;
}
@keyframes modalIn {
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.modal-close {
  position: absolute;
  top: 12px; right: 16px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #999;
}
.modal-close:hover { color: #333; }
.modal h2 { color: #0046C8; margin: 0 0 12px; }
.modal p { color: #555; line-height: 1.6; }
.modal ul { color: #666; line-height: 1.8; }
.modal-actions {
  display: flex;
  gap: 12px;
  margin-top: 20px;
  justify-content: flex-end;
}
.modal-btn {
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}
.modal-btn.primary { background: #0046C8; color: white; }
.modal-btn.secondary { background: #e0e0e0; color: #333; }`,js:`var overlay = document.getElementById('modalOverlay');

function openModal() {
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('openModal').addEventListener('click', openModal);
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('confirmBtn').addEventListener('click', closeModal);
document.getElementById('cancelBtn').addEventListener('click', closeModal);

// Close on overlay click
overlay.addEventListener('click', function(e) {
  if (e.target === overlay) closeModal();
});

// Close on ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});`},solutionExplanation:`position: fixed 오버레이 위에 모달을 배치하고, 3가지 닫기 방법(X 버튼, 오버레이 클릭, ESC 키)을 구현했습니다. body overflow hidden으로 배경 스크롤을 방지합니다.`,solutionExplanationEn:`Positioned modal over a fixed overlay with 3 close methods (X button, overlay click, ESC key). Prevented background scroll with body overflow hidden.`},{id:`intermediate-p07`,number:7,title:`폼 유효성 검사`,titleEn:`Form Validation`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`실시간 유효성 검사가 포함된 회원가입 폼을 만드세요. 이메일 형식, 비밀번호 강도, 비밀번호 확인 등을 검증하세요.`,descriptionEn:`Create a signup form with real-time validation. Validate email format, password strength, and password confirmation.`,hint:`정규표현식과 input 이벤트를 활용하세요.`,hintEn:`Use regular expressions and input events.`,solution:{html:`<form class="signup-form" id="signupForm">
  <h2>회원가입</h2>
  <div class="field">
    <label for="email">이메일</label>
    <input type="email" id="email" placeholder="example@email.com">
    <span class="msg" id="emailMsg"></span>
  </div>
  <div class="field">
    <label for="password">비밀번호</label>
    <input type="password" id="password" placeholder="8자 이상, 영문+숫자+특수문자">
    <div class="strength-bar"><div class="strength-fill" id="strengthFill"></div></div>
    <span class="msg" id="pwMsg"></span>
  </div>
  <div class="field">
    <label for="confirmPw">비밀번호 확인</label>
    <input type="password" id="confirmPw" placeholder="비밀번호를 다시 입력하세요">
    <span class="msg" id="confirmMsg"></span>
  </div>
  <button type="submit" id="submitBtn" disabled>가입하기</button>
</form>`,css:`.signup-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 32px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  font-family: sans-serif;
}
.signup-form h2 { color: #0046C8; margin: 0 0 24px; }
.field { margin-bottom: 16px; }
.field label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  color: #333;
}
.field input {
  width: 100%;
  padding: 10px 14px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.field input:focus { outline: none; border-color: #0046C8; }
.field input.valid { border-color: #27ae60; }
.field input.invalid { border-color: #e74c3c; }
.msg {
  display: block;
  font-size: 12px;
  margin-top: 4px;
  min-height: 16px;
}
.msg.success { color: #27ae60; }
.msg.error { color: #e74c3c; }
.strength-bar {
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  margin-top: 6px;
  overflow: hidden;
}
.strength-fill {
  height: 100%;
  width: 0;
  border-radius: 2px;
  transition: width 0.3s, background 0.3s;
}
.signup-form button {
  width: 100%;
  padding: 12px;
  background: #0046C8;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
}
.signup-form button:disabled {
  background: #ccc;
  cursor: not-allowed;
}`,js:`var emailInput = document.getElementById('email');
var pwInput = document.getElementById('password');
var confirmInput = document.getElementById('confirmPw');
var submitBtn = document.getElementById('submitBtn');

var emailValid = false, pwValid = false, confirmValid = false;

emailInput.addEventListener('input', function() {
  var regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  var msg = document.getElementById('emailMsg');
  if (regex.test(emailInput.value)) {
    emailValid = true;
    emailInput.className = 'valid';
    msg.textContent = '올바른 이메일 형식입니다.';
    msg.className = 'msg success';
  } else {
    emailValid = false;
    emailInput.className = emailInput.value ? 'invalid' : '';
    msg.textContent = emailInput.value ? '올바른 이메일 형식이 아닙니다.' : '';
    msg.className = 'msg error';
  }
  checkAll();
});

pwInput.addEventListener('input', function() {
  var pw = pwInput.value;
  var strength = 0;
  var fill = document.getElementById('strengthFill');
  var msg = document.getElementById('pwMsg');

  if (pw.length >= 8) strength++;
  if (/[a-zA-Z]/.test(pw)) strength++;
  if (/[0-9]/.test(pw)) strength++;
  if (/[^a-zA-Z0-9]/.test(pw)) strength++;

  var colors = ['#e74c3c', '#f39c12', '#f1c40f', '#27ae60'];
  fill.style.width = (strength * 25) + '%';
  fill.style.background = colors[strength - 1] || '#e0e0e0';

  if (strength >= 3 && pw.length >= 8) {
    pwValid = true;
    pwInput.className = 'valid';
    msg.textContent = '강한 비밀번호입니다.';
    msg.className = 'msg success';
  } else {
    pwValid = false;
    pwInput.className = pw ? 'invalid' : '';
    msg.textContent = pw ? '8자 이상, 영문+숫자+특수문자를 포함하세요.' : '';
    msg.className = 'msg error';
  }
  checkAll();
});

confirmInput.addEventListener('input', function() {
  var msg = document.getElementById('confirmMsg');
  if (confirmInput.value === pwInput.value && confirmInput.value) {
    confirmValid = true;
    confirmInput.className = 'valid';
    msg.textContent = '비밀번호가 일치합니다.';
    msg.className = 'msg success';
  } else {
    confirmValid = false;
    confirmInput.className = confirmInput.value ? 'invalid' : '';
    msg.textContent = confirmInput.value ? '비밀번호가 일치하지 않습니다.' : '';
    msg.className = 'msg error';
  }
  checkAll();
});

function checkAll() {
  submitBtn.disabled = !(emailValid && pwValid && confirmValid);
}

document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('회원가입이 완료되었습니다!');
});`},solutionExplanation:`정규표현식으로 이메일 형식을 검증하고, 비밀번호 강도를 4단계로 시각화합니다. 모든 조건 충족 시에만 제출 버튼이 활성화됩니다.`,solutionExplanationEn:`Validates email format with regex, visualizes password strength in 4 levels. Submit button activates only when all conditions are met.`},{id:`intermediate-p08`,number:8,title:`Local Storage CRUD`,titleEn:`Local Storage CRUD`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`localStorage를 사용하여 메모를 생성, 읽기, 수정, 삭제할 수 있는 메모 앱을 만드세요. 페이지를 새로고침해도 데이터가 유지되어야 합니다.`,descriptionEn:`Create a memo app that can create, read, update, and delete memos using localStorage. Data should persist after page refresh.`,hint:`JSON.stringify()와 JSON.parse()로 배열 데이터를 저장하세요.`,hintEn:`Use JSON.stringify() and JSON.parse() to store array data.`,solution:{html:`<div class="memo-app">
  <h2>메모장</h2>
  <div class="memo-input">
    <input type="text" id="memoTitle" placeholder="제목">
    <textarea id="memoContent" placeholder="내용을 입력하세요..." rows="3"></textarea>
    <button id="addMemo">메모 추가</button>
  </div>
  <div id="memoList" class="memo-list"></div>
</div>`,css:`.memo-app {
  max-width: 500px;
  margin: 20px auto;
  padding: 24px;
  font-family: sans-serif;
}
.memo-app h2 { color: #0046C8; }
.memo-input {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}
.memo-input input, .memo-input textarea {
  padding: 10px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
}
.memo-input input:focus, .memo-input textarea:focus {
  outline: none;
  border-color: #0046C8;
}
.memo-input button {
  padding: 10px;
  background: #0046C8;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}
.memo-list { display: flex; flex-direction: column; gap: 12px; }
.memo-card {
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #0046C8;
}
.memo-card h4 { margin: 0 0 8px; color: #333; }
.memo-card p { margin: 0 0 12px; color: #666; line-height: 1.5; white-space: pre-wrap; }
.memo-card .meta { font-size: 12px; color: #999; margin-bottom: 8px; }
.memo-card .actions { display: flex; gap: 8px; }
.memo-card .actions button {
  padding: 4px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
}
.memo-card .edit-btn { background: #f0f4ff; color: #0046C8; }
.memo-card .delete-btn { background: #fde8e8; color: #e74c3c; }`,js:`var memos = JSON.parse(localStorage.getItem('memos') || '[]');
render();

document.getElementById('addMemo').addEventListener('click', function() {
  var title = document.getElementById('memoTitle').value.trim();
  var content = document.getElementById('memoContent').value.trim();
  if (!title || !content) return alert('제목과 내용을 입력하세요.');

  memos.push({ id: Date.now(), title: title, content: content, date: new Date().toLocaleString() });
  save();
  document.getElementById('memoTitle').value = '';
  document.getElementById('memoContent').value = '';
});

function save() {
  localStorage.setItem('memos', JSON.stringify(memos));
  render();
}

function render() {
  var list = document.getElementById('memoList');
  list.innerHTML = memos.length === 0 ? '<p style="color:#999;text-align:center">메모가 없습니다.</p>' : '';
  memos.slice().reverse().forEach(function(memo) {
    var card = document.createElement('div');
    card.className = 'memo-card';
    card.innerHTML = '<h4>' + memo.title + '</h4><p class="meta">' + memo.date + '</p><p>' + memo.content + '</p><div class="actions"><button class="edit-btn">수정</button><button class="delete-btn">삭제</button></div>';
    card.querySelector('.delete-btn').addEventListener('click', function() {
      memos = memos.filter(function(m) { return m.id !== memo.id; });
      save();
    });
    card.querySelector('.edit-btn').addEventListener('click', function() {
      var newTitle = prompt('새 제목:', memo.title);
      var newContent = prompt('새 내용:', memo.content);
      if (newTitle !== null && newContent !== null) {
        memo.title = newTitle;
        memo.content = newContent;
        memo.date = new Date().toLocaleString() + ' (수정됨)';
        save();
      }
    });
    list.appendChild(card);
  });
}`},solutionExplanation:`localStorage에 JSON 형태로 메모 배열을 저장합니다. CRUD 작업 후 save() 함수로 저장과 렌더링을 동시에 처리합니다.`,solutionExplanationEn:`Stores memo array as JSON in localStorage. The save() function handles both storage and rendering after each CRUD operation.`},{id:`intermediate-p09`,number:9,title:`이미지 슬라이더`,titleEn:`Image Slider`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`이전/다음 버튼과 인디케이터 점이 있는 이미지 슬라이더를 만드세요. 자동 재생 기능도 포함하세요.`,descriptionEn:`Create an image slider with previous/next buttons and indicator dots. Include auto-play functionality.`,hint:`transform: translateX()를 사용하여 슬라이드를 이동시키세요.`,hintEn:`Use transform: translateX() to move slides.`,solution:{html:`<div class="slider-container">
  <div class="slider">
    <div class="slides" id="slides">
      <div class="slide" style="background:#0046C8"><h2>Slide 1</h2><p>HTML 기초 배우기</p></div>
      <div class="slide" style="background:#00855A"><h2>Slide 2</h2><p>CSS 레이아웃 마스터</p></div>
      <div class="slide" style="background:#8B1AC8"><h2>Slide 3</h2><p>JavaScript 핵심 문법</p></div>
      <div class="slide" style="background:#C87200"><h2>Slide 4</h2><p>React 컴포넌트 개발</p></div>
    </div>
    <button class="prev" id="prevBtn">&#10094;</button>
    <button class="next" id="nextBtn">&#10095;</button>
  </div>
  <div class="dots" id="dots"></div>
  <div style="text-align:center;margin-top:12px">
    <button id="autoBtn" class="auto-btn">자동 재생 ▶</button>
  </div>
</div>`,css:`.slider-container {
  max-width: 600px;
  margin: 20px auto;
  font-family: sans-serif;
}
.slider {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}
.slides {
  display: flex;
  transition: transform 0.5s ease;
}
.slide {
  min-width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}
.slide h2 { font-size: 2rem; margin: 0 0 8px; }
.slide p { font-size: 1.1rem; opacity: 0.9; }
.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.3);
  color: white;
  border: none;
  padding: 12px 16px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s;
}
.prev:hover, .next:hover { background: rgba(255,255,255,0.5); }
.prev { left: 12px; }
.next { right: 12px; }
.dots {
  text-align: center;
  margin-top: 12px;
}
.dot {
  display: inline-block;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: #ccc;
  margin: 0 4px;
  cursor: pointer;
  transition: background 0.3s;
}
.dot.active { background: #0046C8; }
.auto-btn {
  padding: 8px 20px;
  border: 2px solid #0046C8;
  background: transparent;
  color: #0046C8;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
}
.auto-btn.playing { background: #0046C8; color: white; }`,js:`var current = 0;
var slides = document.querySelectorAll('.slide');
var total = slides.length;
var dotsContainer = document.getElementById('dots');
var autoBtn = document.getElementById('autoBtn');
var autoInterval = null;

// Create dots
for (var i = 0; i < total; i++) {
  var dot = document.createElement('span');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('data-index', i);
  dot.addEventListener('click', function() {
    goTo(parseInt(this.getAttribute('data-index')));
  });
  dotsContainer.appendChild(dot);
}

function goTo(index) {
  current = index;
  if (current >= total) current = 0;
  if (current < 0) current = total - 1;
  document.getElementById('slides').style.transform = 'translateX(-' + (current * 100) + '%)';
  document.querySelectorAll('.dot').forEach(function(d, i) {
    d.className = i === current ? 'dot active' : 'dot';
  });
}

document.getElementById('prevBtn').addEventListener('click', function() { goTo(current - 1); });
document.getElementById('nextBtn').addEventListener('click', function() { goTo(current + 1); });

autoBtn.addEventListener('click', function() {
  if (autoInterval) {
    clearInterval(autoInterval);
    autoInterval = null;
    autoBtn.textContent = '자동 재생 ▶';
    autoBtn.classList.remove('playing');
  } else {
    autoInterval = setInterval(function() { goTo(current + 1); }, 3000);
    autoBtn.textContent = '정지 ⏸';
    autoBtn.classList.add('playing');
  }
});`},solutionExplanation:`transform: translateX()로 슬라이드를 이동시키고, 동적으로 생성한 인디케이터 점과 setInterval로 자동 재생 기능을 구현했습니다.`,solutionExplanationEn:`Moves slides with transform: translateX(), dynamically created indicator dots, and implemented auto-play with setInterval.`},{id:`intermediate-p10`,number:10,title:`검색 필터`,titleEn:`Search Filter`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`입력창에 텍스트를 입력하면 실시간으로 목록이 필터링되는 검색 기능을 만드세요. 카테고리 필터 버튼도 추가하세요.`,descriptionEn:`Create a search feature that filters a list in real-time as text is typed. Add category filter buttons too.`,hint:`filter()와 includes() 메서드를 활용하세요.`,hintEn:`Use filter() and includes() methods.`,solution:{html:`<div class="search-app">
  <h2>프로그래밍 언어 검색</h2>
  <input type="text" id="searchInput" class="search-input" placeholder="검색어를 입력하세요...">
  <div class="filter-btns" id="filterBtns">
    <button class="filter-btn active" data-cat="all">전체</button>
    <button class="filter-btn" data-cat="frontend">프론트엔드</button>
    <button class="filter-btn" data-cat="backend">백엔드</button>
    <button class="filter-btn" data-cat="mobile">모바일</button>
  </div>
  <div class="results-count" id="resultsCount"></div>
  <div id="itemList" class="item-list"></div>
</div>`,css:`.search-app {
  max-width: 500px;
  margin: 20px auto;
  padding: 24px;
  font-family: sans-serif;
}
.search-app h2 { color: #0046C8; }
.search-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  box-sizing: border-box;
  margin-bottom: 12px;
}
.search-input:focus { outline: none; border-color: #0046C8; }
.filter-btns { display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
.filter-btn {
  padding: 6px 16px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}
.filter-btn.active { background: #0046C8; color: white; border-color: #0046C8; }
.results-count { font-size: 13px; color: #999; margin-bottom: 12px; }
.item-list { display: flex; flex-direction: column; gap: 8px; }
.item-card {
  display: flex; justify-content: space-between; align-items: center;
  padding: 12px 16px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.2s;
}
.item-card:hover { background: #e8f0fe; }
.item-card .name { font-weight: 600; color: #333; }
.item-card .cat {
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 12px;
  background: #e8f0fe;
  color: #0046C8;
}
.no-results { text-align: center; color: #999; padding: 40px; }`,js:`var items = [
  { name: 'JavaScript', cat: 'frontend' },
  { name: 'TypeScript', cat: 'frontend' },
  { name: 'React', cat: 'frontend' },
  { name: 'Vue.js', cat: 'frontend' },
  { name: 'Angular', cat: 'frontend' },
  { name: 'Python', cat: 'backend' },
  { name: 'Node.js', cat: 'backend' },
  { name: 'Java', cat: 'backend' },
  { name: 'Go', cat: 'backend' },
  { name: 'Ruby', cat: 'backend' },
  { name: 'Swift', cat: 'mobile' },
  { name: 'Kotlin', cat: 'mobile' },
  { name: 'Flutter', cat: 'mobile' },
  { name: 'React Native', cat: 'mobile' }
];

var currentCat = 'all';

function render() {
  var query = document.getElementById('searchInput').value.toLowerCase();
  var filtered = items.filter(function(item) {
    var matchCat = currentCat === 'all' || item.cat === currentCat;
    var matchSearch = item.name.toLowerCase().includes(query);
    return matchCat && matchSearch;
  });

  document.getElementById('resultsCount').textContent = filtered.length + '개 결과';
  var list = document.getElementById('itemList');

  if (filtered.length === 0) {
    list.innerHTML = '<div class="no-results">검색 결과가 없습니다.</div>';
    return;
  }

  list.innerHTML = filtered.map(function(item) {
    return '<div class="item-card"><span class="name">' + item.name + '</span><span class="cat">' + item.cat + '</span></div>';
  }).join('');
}

document.getElementById('searchInput').addEventListener('input', render);

document.querySelectorAll('.filter-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    currentCat = btn.getAttribute('data-cat');
    render();
  });
});

render();`},solutionExplanation:`filter()로 검색어와 카테고리를 동시에 적용하고, includes()로 대소문자 구분 없는 검색을 구현합니다.`,solutionExplanationEn:`Applies both search text and category filters simultaneously with filter(), and implements case-insensitive search with includes().`}],n=[{id:`advanced-p01`,number:1,title:`SPA 라우터`,titleEn:`SPA Router`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`Hash 기반 SPA(Single Page Application) 라우터를 직접 구현하세요. URL 변경 시 페이지 전환 없이 콘텐츠가 교체되어야 합니다.`,descriptionEn:`Implement a hash-based SPA (Single Page Application) router. Content should swap without page reload when the URL changes.`,hint:`hashchange 이벤트와 location.hash를 활용하세요.`,hintEn:`Use the hashchange event and location.hash.`,solution:{html:`<div class="spa-app">
  <nav class="spa-nav">
    <a href="#/" class="nav-link active">홈</a>
    <a href="#/about" class="nav-link">소개</a>
    <a href="#/projects" class="nav-link">프로젝트</a>
    <a href="#/contact" class="nav-link">연락처</a>
  </nav>
  <div id="app" class="spa-content"></div>
</div>`,css:`.spa-app {
  max-width: 600px;
  margin: 0 auto;
  font-family: sans-serif;
}
.spa-nav {
  display: flex;
  gap: 4px;
  background: #f0f0f0;
  padding: 4px;
  border-radius: 8px;
  margin-bottom: 20px;
}
.nav-link {
  flex: 1;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  color: #666;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s;
}
.nav-link.active {
  background: #0046C8;
  color: white;
}
.spa-content {
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  min-height: 200px;
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.spa-content h2 { color: #0046C8; margin-top: 0; }
.spa-content p { color: #555; line-height: 1.7; }`,js:`var routes = {
  '/': function() {
    return '<h2>홈</h2><p>SPA 라우터 예제에 오신 것을 환영합니다! 상단 메뉴를 클릭하여 페이지를 전환해보세요.</p><p>페이지가 새로고침되지 않고 콘텐츠만 교체됩니다.</p>';
  },
  '/about': function() {
    return '<h2>소개</h2><p>이 SPA 라우터는 Hash 기반으로 동작합니다. location.hash와 hashchange 이벤트를 사용하여 URL 변경을 감지합니다.</p><ul><li>Hash 라우팅 (#/path)</li><li>페이지 전환 애니메이션</li><li>활성 메뉴 하이라이트</li><li>404 페이지 처리</li></ul>';
  },
  '/projects': function() {
    return '<h2>프로젝트</h2><div style="display:grid;gap:12px"><div style="padding:16px;background:#f0f4ff;border-radius:8px"><strong>프로젝트 A</strong><br>React 기반 대시보드</div><div style="padding:16px;background:#f0fff4;border-radius:8px"><strong>프로젝트 B</strong><br>Node.js REST API</div><div style="padding:16px;background:#fff0f4;border-radius:8px"><strong>프로젝트 C</strong><br>TypeScript 라이브러리</div></div>';
  },
  '/contact': function() {
    return '<h2>연락처</h2><p>이메일: example@dreamitbiz.com</p><p>전화: 02-1234-5678</p>';
  }
};

function router() {
  var hash = location.hash.slice(1) || '/';
  var app = document.getElementById('app');
  var route = routes[hash];

  app.style.animation = 'none';
  app.offsetHeight; // trigger reflow
  app.style.animation = 'fadeIn 0.3s ease';

  if (route) {
    app.innerHTML = route();
  } else {
    app.innerHTML = '<h2>404</h2><p>페이지를 찾을 수 없습니다.</p><a href="#/">홈으로 돌아가기</a>';
  }

  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(function(link) {
    var href = link.getAttribute('href').slice(1);
    link.classList.toggle('active', href === hash);
  });
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);`},solutionExplanation:`hashchange 이벤트로 URL 변경을 감지하고, routes 객체에서 해당 경로의 렌더 함수를 실행합니다. 404 처리와 활성 메뉴 하이라이트도 포함합니다.`,solutionExplanationEn:`Detects URL changes via hashchange event and executes the render function from the routes object. Includes 404 handling and active menu highlighting.`},{id:`advanced-p02`,number:2,title:`상태 관리 패턴`,titleEn:`State Management Pattern`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`Observer 패턴을 사용하여 간단한 상태 관리 라이브러리를 구현하세요. 상태가 변경되면 구독된 컴포넌트들이 자동으로 업데이트되어야 합니다.`,descriptionEn:`Implement a simple state management library using the Observer pattern. Subscribed components should auto-update when state changes.`,hint:`subscribe, getState, setState 메서드를 가진 Store 객체를 만드세요.`,hintEn:`Create a Store object with subscribe, getState, and setState methods.`,solution:{html:`<div class="state-demo">
  <h2>상태 관리 데모</h2>
  <div class="panels">
    <div class="panel">
      <h3>카운터</h3>
      <div class="counter-display" id="counterDisplay">0</div>
      <div class="btn-group">
        <button id="decBtn">-</button>
        <button id="resetBtn">리셋</button>
        <button id="incBtn">+</button>
      </div>
    </div>
    <div class="panel">
      <h3>사용자 정보</h3>
      <input type="text" id="nameInput" placeholder="이름 입력">
      <div id="userDisplay" class="user-display">이름: 없음</div>
    </div>
    <div class="panel">
      <h3>상태 로그</h3>
      <div id="stateLog" class="state-log"></div>
    </div>
  </div>
</div>`,css:`.state-demo {
  max-width: 600px;
  margin: 20px auto;
  padding: 24px;
  font-family: sans-serif;
}
.state-demo h2 { color: #0046C8; }
.panels { display: flex; flex-direction: column; gap: 16px; }
.panel {
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.panel h3 { color: #0046C8; margin: 0 0 12px; }
.counter-display {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: #333;
  margin: 16px 0;
}
.btn-group {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.btn-group button {
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
}
.btn-group button:first-child { background: #fde8e8; color: #e74c3c; }
.btn-group button:nth-child(2) { background: #f0f0f0; color: #666; }
.btn-group button:last-child { background: #e8f0fe; color: #0046C8; }
.panel input {
  width: 100%; padding: 10px; border: 2px solid #e0e0e0;
  border-radius: 8px; font-size: 14px; box-sizing: border-box;
  margin-bottom: 12px;
}
.panel input:focus { outline: none; border-color: #0046C8; }
.user-display { padding: 12px; background: #f8f9fa; border-radius: 8px; color: #555; }
.state-log {
  max-height: 150px;
  overflow-y: auto;
  font-size: 12px;
  font-family: monospace;
  background: #1a1a2e;
  color: #4AE79A;
  padding: 12px;
  border-radius: 8px;
}`,js:`// Simple Store implementation (Observer pattern)
function createStore(initialState) {
  var state = JSON.parse(JSON.stringify(initialState));
  var listeners = [];

  return {
    getState: function() { return JSON.parse(JSON.stringify(state)); },
    setState: function(updater) {
      var prev = JSON.parse(JSON.stringify(state));
      if (typeof updater === 'function') {
        state = Object.assign({}, state, updater(state));
      } else {
        state = Object.assign({}, state, updater);
      }
      listeners.forEach(function(fn) { fn(state, prev); });
    },
    subscribe: function(fn) {
      listeners.push(fn);
      return function() {
        listeners = listeners.filter(function(l) { return l !== fn; });
      };
    }
  };
}

// Create store
var store = createStore({ count: 0, userName: '' });

// Subscribe: Counter display
store.subscribe(function(state) {
  document.getElementById('counterDisplay').textContent = state.count;
});

// Subscribe: User display
store.subscribe(function(state) {
  document.getElementById('userDisplay').textContent = '이름: ' + (state.userName || '없음');
});

// Subscribe: State log
store.subscribe(function(state, prev) {
  var log = document.getElementById('stateLog');
  var time = new Date().toLocaleTimeString();
  log.innerHTML += '<div>[' + time + '] ' + JSON.stringify(state) + '</div>';
  log.scrollTop = log.scrollHeight;
});

// Event handlers
document.getElementById('incBtn').addEventListener('click', function() {
  store.setState(function(s) { return { count: s.count + 1 }; });
});
document.getElementById('decBtn').addEventListener('click', function() {
  store.setState(function(s) { return { count: s.count - 1 }; });
});
document.getElementById('resetBtn').addEventListener('click', function() {
  store.setState({ count: 0 });
});
document.getElementById('nameInput').addEventListener('input', function(e) {
  store.setState({ userName: e.target.value });
});`},solutionExplanation:`Observer 패턴의 createStore 함수를 구현하여 상태 변경 시 모든 구독자에게 알립니다. subscribe는 구독 해제 함수를 반환합니다.`,solutionExplanationEn:`Implemented a createStore function with Observer pattern that notifies all subscribers on state changes. subscribe returns an unsubscribe function.`},{id:`advanced-p03`,number:3,title:`커스텀 훅 빌더`,titleEn:`Custom Hook Builder`,category:`advanced`,topic:`react`,difficulty:`advanced`,description:`Vanilla JavaScript로 React의 useState, useEffect와 유사한 훅 시스템을 구현하세요. 상태 관리와 부수 효과(side effect) 처리를 직접 만들어보세요.`,descriptionEn:`Implement a hook system similar to React useState and useEffect using vanilla JavaScript. Build state management and side effect handling from scratch.`,hint:`클로저와 배열 인덱스를 사용하여 훅 상태를 추적하세요.`,hintEn:`Use closures and array indices to track hook state.`,solution:{html:`<div class="hook-demo">
  <h2>커스텀 훅 시스템</h2>
  <div id="app" class="hook-app"></div>
  <div class="hook-log">
    <h4>렌더링 로그</h4>
    <div id="log" class="log-area"></div>
  </div>
</div>`,css:`.hook-demo {
  max-width: 500px;
  margin: 20px auto;
  padding: 24px;
  font-family: sans-serif;
}
.hook-demo h2 { color: #0046C8; }
.hook-app {
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  margin-bottom: 16px;
}
.hook-app h3 { color: #0046C8; margin-top: 0; }
.hook-app .count {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin: 16px 0;
}
.hook-app .btn-row {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.hook-app .btn-row button {
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}
.hook-app .status {
  text-align: center;
  margin-top: 12px;
  padding: 8px;
  border-radius: 6px;
  font-size: 14px;
}
.hook-log h4 { color: #0046C8; margin: 0 0 8px; }
.log-area {
  background: #1a1a2e;
  color: #4AE79A;
  padding: 12px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 12px;
  max-height: 120px;
  overflow-y: auto;
}`,js:`// Mini Hook System
var hooks = [];
var hookIndex = 0;
var rootRender = null;

function useState(initial) {
  var idx = hookIndex;
  if (hooks[idx] === undefined) hooks[idx] = initial;

  function setState(newVal) {
    if (typeof newVal === 'function') {
      hooks[idx] = newVal(hooks[idx]);
    } else {
      hooks[idx] = newVal;
    }
    rerender();
  }

  hookIndex++;
  return [hooks[idx], setState];
}

function useEffect(callback, deps) {
  var idx = hookIndex;
  var prevDeps = hooks[idx];
  var hasChanged = !prevDeps || deps.some(function(dep, i) {
    return dep !== prevDeps[i];
  });
  if (hasChanged) {
    callback();
    hooks[idx] = deps;
  }
  hookIndex++;
}

function rerender() {
  hookIndex = 0;
  if (rootRender) rootRender();
}

// App component using hooks
function App() {
  var countState = useState(0);
  var count = countState[0];
  var setCount = countState[1];

  var nameState = useState('World');
  var name = nameState[0];
  var setName = nameState[1];

  useEffect(function() {
    var log = document.getElementById('log');
    log.innerHTML += '<div>[Effect] count = ' + count + ', name = ' + name + '</div>';
    log.scrollTop = log.scrollHeight;
  }, [count, name]);

  var statusBg = count > 5 ? '#fde8e8' : count < 0 ? '#fff3cd' : '#e8f0fe';
  var statusText = count > 5 ? '높음!' : count < 0 ? '음수!' : '정상';

  document.getElementById('app').innerHTML =
    '<h3>Hello, ' + name + '!</h3>' +
    '<div class="count">' + count + '</div>' +
    '<div class="btn-row">' +
    '<button style="background:#fde8e8;color:#e74c3c" id="dec">-1</button>' +
    '<button style="background:#f0f0f0;color:#666" id="rst">리셋</button>' +
    '<button style="background:#e8f0fe;color:#0046C8" id="inc">+1</button>' +
    '</div>' +
    '<div class="status" style="background:' + statusBg + '">' + statusText + '</div>' +
    '<input style="width:100%;padding:8px;margin-top:12px;border:2px solid #ddd;border-radius:6px;box-sizing:border-box" placeholder="이름 변경" value="' + name + '" id="nameIn">';

  document.getElementById('inc').onclick = function() { setCount(function(c) { return c + 1; }); };
  document.getElementById('dec').onclick = function() { setCount(function(c) { return c - 1; }); };
  document.getElementById('rst').onclick = function() { setCount(0); };
  document.getElementById('nameIn').oninput = function(e) { setName(e.target.value); };
}

rootRender = App;
App();`},solutionExplanation:`클로저와 전역 hookIndex를 사용하여 useState와 useEffect를 구현했습니다. 상태 변경 시 hookIndex를 초기화하고 전체 컴포넌트를 다시 렌더링합니다.`,solutionExplanationEn:`Implemented useState and useEffect using closures and a global hookIndex. Resets hookIndex and re-renders the entire component on state change.`},{id:`advanced-p04`,number:4,title:`무한 스크롤`,titleEn:`Infinite Scroll`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`Intersection Observer API를 사용하여 무한 스크롤을 구현하세요. 스크롤이 하단에 도달하면 새로운 데이터가 자동으로 로드되어야 합니다.`,descriptionEn:`Implement infinite scroll using the Intersection Observer API. New data should auto-load when scrolling reaches the bottom.`,hint:`IntersectionObserver와 sentinel 요소를 활용하세요.`,hintEn:`Use IntersectionObserver with a sentinel element.`,solution:{html:`<div class="infinite-scroll">
  <h2>무한 스크롤 피드</h2>
  <div id="feed" class="feed"></div>
  <div id="sentinel" class="sentinel">
    <div class="loader" id="loader"></div>
    <span id="loaderText">더 불러오는 중...</span>
  </div>
  <div id="endMsg" class="end-msg" style="display:none">모든 항목을 불러왔습니다.</div>
</div>`,css:`.infinite-scroll {
  max-width: 500px;
  margin: 0 auto;
  padding: 24px;
  font-family: sans-serif;
}
.infinite-scroll h2 { color: #0046C8; }
.feed { display: flex; flex-direction: column; gap: 12px; }
.feed-item {
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.06);
  border-left: 4px solid #0046C8;
  animation: slideIn 0.3s ease;
}
@keyframes slideIn {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
.feed-item .item-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 8px;
}
.feed-item .item-title { font-weight: 600; color: #333; }
.feed-item .item-id { font-size: 12px; color: #999; background: #f0f0f0; padding: 2px 8px; border-radius: 10px; }
.feed-item .item-body { color: #666; line-height: 1.6; font-size: 14px; }
.sentinel {
  text-align: center;
  padding: 24px;
  color: #999;
}
.loader {
  width: 30px; height: 30px;
  border: 3px solid #e0e0e0;
  border-top-color: #0046C8;
  border-radius: 50%;
  margin: 0 auto 8px;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.end-msg {
  text-align: center;
  padding: 24px;
  color: #999;
  font-style: italic;
}`,js:`var page = 1;
var perPage = 5;
var maxItems = 30;
var loading = false;

function generateItems(pageNum) {
  var items = [];
  var start = (pageNum - 1) * perPage + 1;
  var topics = ['JavaScript 비동기 처리', 'CSS Grid 레이아웃', 'React 성능 최적화', 'TypeScript 제네릭', 'Node.js 스트림', 'Docker 컨테이너', 'Git 브랜치 전략', 'REST API 설계', 'GraphQL 쿼리', 'CI/CD 파이프라인'];

  for (var i = 0; i < perPage && start + i <= maxItems; i++) {
    var idx = start + i;
    items.push({
      id: idx,
      title: topics[(idx - 1) % topics.length],
      body: '이것은 ' + idx + '번째 아티클입니다. 웹 개발에 필요한 핵심 주제를 다룹니다. 이론과 실습을 통해 깊이 있는 학습이 가능합니다.'
    });
  }
  return items;
}

function renderItems(items) {
  var feed = document.getElementById('feed');
  items.forEach(function(item) {
    var div = document.createElement('div');
    div.className = 'feed-item';
    div.innerHTML = '<div class="item-header"><span class="item-title">' + item.title + '</span><span class="item-id">#' + item.id + '</span></div><div class="item-body">' + item.body + '</div>';
    feed.appendChild(div);
  });
}

function loadMore() {
  if (loading) return;
  loading = true;

  // Simulate network delay
  setTimeout(function() {
    var items = generateItems(page);
    renderItems(items);
    page++;
    loading = false;

    if ((page - 1) * perPage >= maxItems) {
      document.getElementById('sentinel').style.display = 'none';
      document.getElementById('endMsg').style.display = 'block';
      observer.disconnect();
    }
  }, 800);
}

// Intersection Observer
var observer = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting) {
    loadMore();
  }
}, { threshold: 0.1 });

observer.observe(document.getElementById('sentinel'));

// Initial load
loadMore();`},solutionExplanation:`IntersectionObserver로 sentinel 요소의 가시성을 감지하여 자동으로 다음 데이터를 로드합니다. 모든 데이터를 불러온 후 observer를 disconnect합니다.`,solutionExplanationEn:`Detects sentinel element visibility with IntersectionObserver to auto-load next data. Disconnects observer after all data is loaded.`},{id:`advanced-p05`,number:5,title:`드래그 앤 드롭`,titleEn:`Drag and Drop`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`HTML5 Drag and Drop API를 사용하여 칸반 보드 스타일의 드래그 앤 드롭 인터페이스를 만드세요. 카드를 열 사이에서 이동할 수 있어야 합니다.`,descriptionEn:`Create a Kanban-board style drag and drop interface using the HTML5 Drag and Drop API. Cards should be movable between columns.`,hint:`draggable 속성과 dragstart, dragover, drop 이벤트를 활용하세요.`,hintEn:`Use the draggable attribute and dragstart, dragover, drop events.`,solution:{html:`<div class="kanban">
  <h2>칸반 보드</h2>
  <div class="board">
    <div class="column" data-status="todo">
      <h3>할 일</h3>
      <div class="card-list">
        <div class="card" draggable="true" data-id="1">UI 디자인 설계</div>
        <div class="card" draggable="true" data-id="2">데이터베이스 스키마</div>
        <div class="card" draggable="true" data-id="3">API 문서 작성</div>
      </div>
    </div>
    <div class="column" data-status="doing">
      <h3>진행 중</h3>
      <div class="card-list">
        <div class="card" draggable="true" data-id="4">로그인 기능 개발</div>
        <div class="card" draggable="true" data-id="5">메인 페이지 구현</div>
      </div>
    </div>
    <div class="column" data-status="done">
      <h3>완료</h3>
      <div class="card-list">
        <div class="card" draggable="true" data-id="6">프로젝트 셋업</div>
      </div>
    </div>
  </div>
</div>`,css:`.kanban {
  padding: 24px;
  font-family: sans-serif;
}
.kanban h2 { color: #0046C8; text-align: center; }
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
}
.column {
  background: #f0f2f5;
  border-radius: 12px;
  padding: 16px;
  min-height: 200px;
}
.column h3 {
  margin: 0 0 12px;
  font-size: 14px;
  text-transform: uppercase;
  color: #888;
  letter-spacing: 1px;
}
.column[data-status="todo"] h3 { color: #e74c3c; }
.column[data-status="doing"] h3 { color: #f39c12; }
.column[data-status="done"] h3 { color: #27ae60; }
.card-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 60px;
}
.card {
  background: white;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  cursor: grab;
  font-size: 14px;
  color: #333;
  transition: transform 0.15s, box-shadow 0.15s;
  user-select: none;
}
.card:active { cursor: grabbing; }
.card.dragging {
  opacity: 0.5;
  transform: scale(0.95);
}
.column.drag-over {
  background: #e8f0fe;
  outline: 2px dashed #0046C8;
  outline-offset: -2px;
}`,js:`var draggedCard = null;

// Card events
document.querySelectorAll('.card').forEach(function(card) {
  card.addEventListener('dragstart', function(e) {
    draggedCard = card;
    card.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });
  card.addEventListener('dragend', function() {
    card.classList.remove('dragging');
    draggedCard = null;
    document.querySelectorAll('.column').forEach(function(col) {
      col.classList.remove('drag-over');
    });
  });
});

// Column events
document.querySelectorAll('.column').forEach(function(column) {
  var cardList = column.querySelector('.card-list');

  column.addEventListener('dragover', function(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    column.classList.add('drag-over');

    // Find insertion point
    var afterCard = getDragAfterElement(cardList, e.clientY);
    if (afterCard) {
      cardList.insertBefore(draggedCard, afterCard);
    } else {
      cardList.appendChild(draggedCard);
    }
  });

  column.addEventListener('dragleave', function(e) {
    if (!column.contains(e.relatedTarget)) {
      column.classList.remove('drag-over');
    }
  });

  column.addEventListener('drop', function(e) {
    e.preventDefault();
    column.classList.remove('drag-over');
  });
});

function getDragAfterElement(container, y) {
  var elements = Array.from(container.querySelectorAll('.card:not(.dragging)'));
  var result = null;
  var closest = Number.NEGATIVE_INFINITY;

  elements.forEach(function(child) {
    var box = child.getBoundingClientRect();
    var offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest) {
      closest = offset;
      result = child;
    }
  });
  return result;
}`},solutionExplanation:`HTML5 Drag and Drop API의 dragstart, dragover, drop 이벤트를 사용합니다. getDragAfterElement로 마우스 위치에 따른 정확한 삽입 지점을 계산합니다.`,solutionExplanationEn:`Uses HTML5 Drag and Drop API events: dragstart, dragover, drop. getDragAfterElement calculates the precise insertion point based on mouse position.`},{id:`advanced-p06`,number:6,title:`Virtual DOM 개념`,titleEn:`Virtual DOM Concept`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`간단한 Virtual DOM 시스템을 구현하세요. 가상 DOM 트리를 생성하고, diff 알고리즘으로 변경사항만 실제 DOM에 적용하는 패치 함수를 만드세요.`,descriptionEn:`Implement a simple Virtual DOM system. Create a virtual DOM tree, and build a patch function that applies only changes to the real DOM using a diff algorithm.`,hint:`createElement, diff, patch 세 함수를 구현하세요.`,hintEn:`Implement three functions: createElement, diff, and patch.`,solution:{html:`<div class="vdom-demo">
  <h2>Virtual DOM 데모</h2>
  <div class="controls">
    <button id="updateBtn">상태 변경</button>
    <button id="resetBtn">리셋</button>
  </div>
  <div class="panels">
    <div class="panel">
      <h4>렌더링 결과</h4>
      <div id="root" class="render-area"></div>
    </div>
    <div class="panel">
      <h4>패치 로그</h4>
      <div id="patchLog" class="patch-log"></div>
    </div>
  </div>
</div>`,css:`.vdom-demo {
  max-width: 600px;
  margin: 20px auto;
  padding: 24px;
  font-family: sans-serif;
}
.vdom-demo h2 { color: #0046C8; }
.controls {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.controls button {
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}
.controls button:first-child { background: #0046C8; color: white; }
.controls button:last-child { background: #f0f0f0; color: #666; }
.panels { display: flex; flex-direction: column; gap: 16px; }
.panel {
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.panel h4 { color: #0046C8; margin: 0 0 12px; }
.render-area {
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  min-height: 60px;
}
.render-area .item {
  padding: 8px 12px;
  margin-bottom: 4px;
  border-radius: 4px;
  font-size: 14px;
}
.patch-log {
  background: #1a1a2e;
  color: #4AE79A;
  padding: 12px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 12px;
  max-height: 150px;
  overflow-y: auto;
}`,js:`// Simple Virtual DOM implementation
var patchLog = document.getElementById('patchLog');

function h(tag, props, children) {
  return { tag: tag, props: props || {}, children: children || [] };
}

function createRealDOM(vnode) {
  if (typeof vnode === 'string') return document.createTextNode(vnode);
  var el = document.createElement(vnode.tag);
  Object.keys(vnode.props).forEach(function(key) {
    el.setAttribute(key, vnode.props[key]);
  });
  vnode.children.forEach(function(child) {
    el.appendChild(createRealDOM(child));
  });
  return el;
}

function diff(oldNode, newNode) {
  if (!oldNode) return { type: 'CREATE', newNode: newNode };
  if (!newNode) return { type: 'REMOVE' };
  if (typeof oldNode !== typeof newNode || 
      (typeof oldNode === 'string' && oldNode !== newNode) ||
      oldNode.tag !== newNode.tag) {
    return { type: 'REPLACE', newNode: newNode };
  }
  if (newNode.tag) {
    var propPatches = diffProps(oldNode.props, newNode.props);
    var childPatches = [];
    var maxLen = Math.max(oldNode.children.length, newNode.children.length);
    for (var i = 0; i < maxLen; i++) {
      childPatches.push(diff(oldNode.children[i], newNode.children[i]));
    }
    return { type: 'UPDATE', propPatches: propPatches, childPatches: childPatches };
  }
  return null;
}

function diffProps(oldP, newP) {
  var patches = [];
  var allKeys = new Set(Object.keys(oldP).concat(Object.keys(newP)));
  allKeys.forEach(function(key) {
    if (oldP[key] !== newP[key]) {
      patches.push({ key: key, value: newP[key] });
    }
  });
  return patches;
}

function patch(parent, patches, index) {
  index = index || 0;
  if (!patches) return;
  var el = parent.childNodes[index];
  switch (patches.type) {
    case 'CREATE':
      log('CREATE: ' + JSON.stringify(patches.newNode).substring(0, 50));
      parent.appendChild(createRealDOM(patches.newNode));
      break;
    case 'REMOVE':
      log('REMOVE: node at index ' + index);
      parent.removeChild(el);
      break;
    case 'REPLACE':
      log('REPLACE: node at index ' + index);
      parent.replaceChild(createRealDOM(patches.newNode), el);
      break;
    case 'UPDATE':
      patches.propPatches.forEach(function(p) {
        log('PROP: ' + p.key + ' = ' + p.value);
        if (p.value === undefined) el.removeAttribute(p.key);
        else el.setAttribute(p.key, p.value);
      });
      patches.childPatches.forEach(function(cp, i) {
        patch(el, cp, i);
      });
      break;
  }
}

function log(msg) {
  patchLog.innerHTML += '<div>' + msg + '</div>';
  patchLog.scrollTop = patchLog.scrollHeight;
}

// Demo
var count = 0;
var colors = ['#e8f0fe', '#e8ffe8', '#ffe8e8', '#f0e8ff', '#fff0e8'];

function buildVDOM() {
  var items = [];
  for (var i = 0; i <= count; i++) {
    items.push(h('div', { class: 'item', style: 'background:' + colors[i % 5] }, ['Item ' + (i + 1) + ' (count: ' + count + ')']));
  }
  return h('div', {}, [h('p', {}, ['Total items: ' + (count + 1)])].concat(items));
}

var currentVDOM = buildVDOM();
var root = document.getElementById('root');
root.appendChild(createRealDOM(currentVDOM));
log('Initial render complete');

document.getElementById('updateBtn').addEventListener('click', function() {
  count++;
  var newVDOM = buildVDOM();
  var patches2 = diff(currentVDOM, newVDOM);
  log('--- Patch #' + count + ' ---');
  patch(root, patches2, 0);
  currentVDOM = newVDOM;
});

document.getElementById('resetBtn').addEventListener('click', function() {
  count = 0;
  patchLog.innerHTML = '';
  var newVDOM = buildVDOM();
  root.innerHTML = '';
  root.appendChild(createRealDOM(newVDOM));
  currentVDOM = newVDOM;
  log('Reset complete');
});`},solutionExplanation:`h() 함수로 가상 노드를 생성하고, diff()로 변경점을 찾고, patch()로 최소한의 DOM 조작만 수행합니다. CREATE, REMOVE, REPLACE, UPDATE 네 가지 패치 타입을 지원합니다.`,solutionExplanationEn:`Creates virtual nodes with h(), finds changes with diff(), and performs minimal DOM operations with patch(). Supports four patch types: CREATE, REMOVE, REPLACE, UPDATE.`},{id:`advanced-p07`,number:7,title:`웹 컴포넌트`,titleEn:`Web Components`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`Custom Elements API를 사용하여 재사용 가능한 웹 컴포넌트를 만드세요. Shadow DOM으로 스타일을 캡슐화하고, 속성(attributes)을 통해 설정할 수 있어야 합니다.`,descriptionEn:`Create reusable web components using the Custom Elements API. Encapsulate styles with Shadow DOM and make them configurable via attributes.`,hint:`HTMLElement를 상속받는 클래스를 만들고 customElements.define()으로 등록하세요.`,hintEn:`Create a class extending HTMLElement and register it with customElements.define().`,solution:{html:`<div class="wc-demo">
  <h2>웹 컴포넌트 데모</h2>
  <user-card name="김민수" role="프론트엔드 개발자" avatar="M"></user-card>
  <user-card name="이지은" role="백엔드 개발자" avatar="J" theme="green"></user-card>
  <user-card name="박서연" role="UI/UX 디자이너" avatar="S" theme="purple"></user-card>
  <alert-box type="info">웹 컴포넌트는 프레임워크 없이 재사용 가능한 UI를 만들 수 있습니다.</alert-box>
  <alert-box type="success">Shadow DOM으로 스타일이 완전히 캡슐화됩니다.</alert-box>
  <alert-box type="warning">Custom Elements는 모든 모던 브라우저에서 지원됩니다.</alert-box>
</div>`,css:`.wc-demo {
  max-width: 500px;
  margin: 20px auto;
  padding: 24px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.wc-demo h2 { color: #0046C8; margin-bottom: 8px; }`,js:`// User Card Component
class UserCard extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow({ mode: 'open' });
    var name = this.getAttribute('name') || 'Unknown';
    var role = this.getAttribute('role') || 'Developer';
    var avatar = this.getAttribute('avatar') || '?';
    var theme = this.getAttribute('theme') || 'blue';
    var colors = { blue: '#0046C8', green: '#00855A', purple: '#8B1AC8' };
    var color = colors[theme] || colors.blue;

    shadow.innerHTML = 
      '<style>' +
      ':host { display: block; }' +
      '.card { display:flex;align-items:center;gap:16px;padding:16px;background:white;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.08);border-left:4px solid ' + color + '; }' +
      '.avatar { width:48px;height:48px;border-radius:50%;background:' + color + ';color:white;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700; }' +
      '.info h3 { margin:0 0 4px;font-size:16px;color:#333; }' +
      '.info p { margin:0;font-size:13px;color:#888; }' +
      '</style>' +
      '<div class="card"><div class="avatar">' + avatar + '</div><div class="info"><h3>' + name + '</h3><p>' + role + '</p></div></div>';
  }
}
customElements.define('user-card', UserCard);

// Alert Box Component
class AlertBox extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow({ mode: 'open' });
    var type = this.getAttribute('type') || 'info';
    var styles = {
      info:    { bg: '#e8f0fe', border: '#0046C8', icon: 'i', color: '#0046C8' },
      success: { bg: '#e8ffe8', border: '#27ae60', icon: '\\u2713', color: '#27ae60' },
      warning: { bg: '#fff3cd', border: '#f39c12', icon: '!', color: '#856404' }
    };
    var s = styles[type] || styles.info;

    shadow.innerHTML =
      '<style>' +
      ':host { display: block; }' +
      '.alert { display:flex;align-items:flex-start;gap:12px;padding:14px 16px;background:' + s.bg + ';border-left:4px solid ' + s.border + ';border-radius:0 8px 8px 0;font-family:sans-serif; }' +
      '.icon { width:24px;height:24px;border-radius:50%;background:' + s.border + ';color:white;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;flex-shrink:0; }' +
      '.msg { color:' + s.color + ';font-size:14px;line-height:1.5;padding-top:2px; }' +
      '</style>' +
      '<div class="alert"><div class="icon">' + s.icon + '</div><div class="msg"><slot></slot></div></div>';
  }
}
customElements.define('alert-box', AlertBox);`},solutionExplanation:`Custom Elements API로 <user-card>와 <alert-box> 두 개의 웹 컴포넌트를 정의했습니다. Shadow DOM으로 스타일을 캡슐화하고, <slot>으로 콘텐츠를 삽입합니다.`,solutionExplanationEn:`Defined two web components <user-card> and <alert-box> with Custom Elements API. Encapsulated styles with Shadow DOM and used <slot> for content projection.`},{id:`advanced-p08`,number:8,title:`WebSocket 채팅 UI`,titleEn:`WebSocket Chat UI`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`WebSocket을 시뮬레이션한 실시간 채팅 UI를 만드세요. 메시지 전송, 수신, 타이핑 인디케이터, 온라인 사용자 목록을 포함하세요.`,descriptionEn:`Create a real-time chat UI simulating WebSocket. Include message sending, receiving, typing indicator, and online user list.`,hint:`setTimeout으로 서버 응답을 시뮬레이션하세요.`,hintEn:`Simulate server responses with setTimeout.`,solution:{html:`<div class="chat-app">
  <div class="chat-sidebar">
    <h3>온라인 (3)</h3>
    <div class="user-item active-user"><span class="online-dot"></span> 나 (You)</div>
    <div class="user-item"><span class="online-dot"></span> AI 봇</div>
    <div class="user-item"><span class="online-dot"></span> 관리자</div>
  </div>
  <div class="chat-main">
    <div class="chat-header">실시간 채팅</div>
    <div class="chat-messages" id="messages"></div>
    <div class="typing-indicator" id="typing" style="display:none">
      <span></span><span></span><span></span> AI 봇이 입력 중...
    </div>
    <div class="chat-input">
      <input type="text" id="msgInput" placeholder="메시지를 입력하세요...">
      <button id="sendBtn">전송</button>
    </div>
  </div>
</div>`,css:`.chat-app {
  display: flex;
  max-width: 600px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  height: 450px;
  font-family: sans-serif;
}
.chat-sidebar {
  width: 140px;
  background: #1a1a2e;
  color: white;
  padding: 16px;
}
.chat-sidebar h3 { font-size: 13px; color: #aaa; margin: 0 0 12px; }
.user-item {
  display: flex; align-items: center; gap: 8px;
  padding: 8px; border-radius: 6px; font-size: 13px; margin-bottom: 4px;
}
.user-item.active-user { background: rgba(255,255,255,0.1); }
.online-dot {
  width: 8px; height: 8px; border-radius: 50%; background: #27ae60;
}
.chat-main {
  flex: 1; display: flex; flex-direction: column; background: #f8f9fa;
}
.chat-header {
  padding: 14px 16px; background: #0046C8; color: white; font-weight: 600;
}
.chat-messages {
  flex: 1; overflow-y: auto; padding: 16px;
  display: flex; flex-direction: column; gap: 8px;
}
.msg {
  max-width: 75%; padding: 10px 14px; border-radius: 12px;
  font-size: 14px; line-height: 1.5; animation: msgIn 0.2s ease;
}
@keyframes msgIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
.msg.sent {
  align-self: flex-end; background: #0046C8; color: white;
  border-bottom-right-radius: 4px;
}
.msg.received {
  align-self: flex-start; background: white; color: #333;
  border-bottom-left-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
.msg .time { font-size: 11px; opacity: 0.7; margin-top: 4px; text-align: right; }
.typing-indicator {
  padding: 8px 16px; font-size: 13px; color: #888;
}
.typing-indicator span {
  display: inline-block; width: 6px; height: 6px; border-radius: 50%;
  background: #aaa; margin-right: 2px; animation: typing 1.4s infinite;
}
.typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
.typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
@keyframes typing { 0%,100%{opacity:0.3;transform:translateY(0)} 50%{opacity:1;transform:translateY(-4px)} }
.chat-input {
  display: flex; gap: 8px; padding: 12px;
  background: white; border-top: 1px solid #e0e0e0;
}
.chat-input input {
  flex: 1; padding: 10px; border: 2px solid #e0e0e0;
  border-radius: 8px; font-size: 14px;
}
.chat-input input:focus { outline: none; border-color: #0046C8; }
.chat-input button {
  padding: 10px 20px; background: #0046C8; color: white;
  border: none; border-radius: 8px; cursor: pointer; font-weight: 600;
}`,js:`var messages = document.getElementById('messages');
var input = document.getElementById('msgInput');
var typing = document.getElementById('typing');

var botReplies = [
  '안녕하세요! 무엇을 도와드릴까요?',
  '좋은 질문이네요! 웹 개발에 대해 더 알려드릴게요.',
  'JavaScript는 정말 재미있는 언어입니다!',
  '코딩을 계속 연습하면 실력이 빠르게 늘어요.',
  'React와 TypeScript 조합을 추천합니다!',
  '궁금한 점이 더 있으시면 말씀해 주세요.',
  'CSS Grid와 Flexbox를 함께 사용해보세요!'
];

function getTime() {
  var d = new Date();
  return d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0');
}

function addMessage(text, type) {
  var div = document.createElement('div');
  div.className = 'msg ' + type;
  div.innerHTML = text + '<div class="time">' + getTime() + '</div>';
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {
  var text = input.value.trim();
  if (!text) return;
  addMessage(text, 'sent');
  input.value = '';

  // Simulate bot typing
  typing.style.display = 'block';
  setTimeout(function() {
    typing.style.display = 'none';
    var reply = botReplies[Math.floor(Math.random() * botReplies.length)];
    addMessage(reply, 'received');
  }, 1000 + Math.random() * 1500);
}

document.getElementById('sendBtn').addEventListener('click', sendMessage);
input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') sendMessage();
});

// Initial welcome message
setTimeout(function() {
  addMessage('안녕하세요! AI 봇입니다. 무엇이든 물어보세요.', 'received');
}, 500);`},solutionExplanation:`setTimeout으로 서버 응답을 시뮬레이션하고, 타이핑 인디케이터 애니메이션으로 실시간 채팅 경험을 구현합니다. CSS 애니메이션으로 메시지 등장 효과를 추가했습니다.`,solutionExplanationEn:`Simulates server responses with setTimeout and implements real-time chat experience with typing indicator animation. Added message entrance effects with CSS animations.`},{id:`advanced-p09`,number:9,title:`Service Worker 캐싱`,titleEn:`Service Worker Caching`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`Service Worker의 캐싱 전략을 시뮬레이션하는 데모를 만드세요. Cache First, Network First, Stale While Revalidate 전략을 시각적으로 보여주세요.`,descriptionEn:`Create a demo simulating Service Worker caching strategies. Visually demonstrate Cache First, Network First, and Stale While Revalidate strategies.`,hint:`각 전략의 요청/응답 흐름을 시각적으로 표현하세요.`,hintEn:`Visually represent the request/response flow of each strategy.`,solution:{html:`<div class="sw-demo">
  <h2>Service Worker 캐싱 전략</h2>
  <div class="strategy-tabs">
    <button class="strat-btn active" data-strat="cache-first">Cache First</button>
    <button class="strat-btn" data-strat="network-first">Network First</button>
    <button class="strat-btn" data-strat="swr">Stale While Revalidate</button>
  </div>
  <div class="demo-area">
    <div class="flow">
      <div class="flow-node client" id="client">Client</div>
      <div class="flow-arrow" id="arrow1">--></div>
      <div class="flow-node sw" id="sw">Service Worker</div>
      <div class="flow-arrow" id="arrow2">--></div>
      <div class="flow-node" id="target">Cache / Network</div>
    </div>
    <div class="description" id="description"></div>
    <button id="simulateBtn" class="simulate-btn">요청 시뮬레이션</button>
    <div class="result-log" id="resultLog"></div>
  </div>
</div>`,css:`.sw-demo {
  max-width: 550px;
  margin: 20px auto;
  padding: 24px;
  font-family: sans-serif;
}
.sw-demo h2 { color: #0046C8; }
.strategy-tabs {
  display: flex;
  gap: 4px;
  background: #f0f0f0;
  padding: 4px;
  border-radius: 8px;
  margin-bottom: 20px;
}
.strat-btn {
  flex: 1; padding: 10px; border: none; background: transparent;
  border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 13px; color: #666;
}
.strat-btn.active { background: #0046C8; color: white; }
.demo-area {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
.flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
}
.flow-node {
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 13px;
  text-align: center;
  min-width: 80px;
  transition: all 0.3s;
}
.flow-node.client { background: #e8f0fe; color: #0046C8; }
.flow-node.sw { background: #f0e8ff; color: #8B1AC8; }
.flow-node.cache-active { background: #e8ffe8; color: #27ae60; }
.flow-node.network-active { background: #fff3cd; color: #856404; }
.flow-node.highlight { transform: scale(1.1); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
.flow-arrow {
  font-family: monospace;
  color: #999;
  font-size: 18px;
  transition: color 0.3s;
}
.flow-arrow.active { color: #0046C8; font-weight: bold; }
.description {
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 16px;
}
.simulate-btn {
  width: 100%;
  padding: 12px;
  background: #0046C8;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 12px;
}
.simulate-btn:disabled { background: #999; cursor: not-allowed; }
.result-log {
  background: #1a1a2e;
  color: #4AE79A;
  padding: 12px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 12px;
  min-height: 60px;
  max-height: 120px;
  overflow-y: auto;
}`,js:`var strategies = {
  'cache-first': {
    desc: '<strong>Cache First</strong>: 캐시를 먼저 확인합니다. 캐시에 있으면 즉시 반환하고, 없으면 네트워크에서 가져와 캐시에 저장합니다. 정적 자산(이미지, CSS, JS)에 적합합니다.',
    steps: [
      { delay: 300, log: '1. Client -> Service Worker 요청', highlight: ['client', 'arrow1'] },
      { delay: 600, log: '2. Service Worker -> Cache 확인', highlight: ['sw'] },
      { delay: 400, log: '3. Cache HIT! 캐시에서 응답 반환', highlight: ['target'], targetClass: 'cache-active', targetText: 'Cache' },
      { delay: 300, log: '4. Service Worker -> Client 응답 (빠름!)', highlight: ['arrow1', 'client'] }
    ]
  },
  'network-first': {
    desc: '<strong>Network First</strong>: 네트워크를 먼저 시도합니다. 성공하면 캐시를 업데이트하고 반환합니다. 실패하면 캐시에서 가져옵니다. API 데이터에 적합합니다.',
    steps: [
      { delay: 300, log: '1. Client -> Service Worker 요청', highlight: ['client', 'arrow1'] },
      { delay: 400, log: '2. Service Worker -> Network 요청', highlight: ['sw', 'arrow2'] },
      { delay: 1000, log: '3. Network 응답 수신 (느림)', highlight: ['target'], targetClass: 'network-active', targetText: 'Network' },
      { delay: 400, log: '4. 캐시 업데이트 + Client 응답', highlight: ['sw', 'arrow1', 'client'] }
    ]
  },
  'swr': {
    desc: '<strong>Stale While Revalidate</strong>: 캐시에서 즉시 반환(stale)하면서, 동시에 네트워크에서 최신 데이터를 가져와 캐시를 업데이트합니다. 뉴스 피드 등에 적합합니다.',
    steps: [
      { delay: 300, log: '1. Client -> Service Worker 요청', highlight: ['client', 'arrow1'] },
      { delay: 400, log: '2. 캐시에서 즉시 반환 (stale data)', highlight: ['sw'], targetClass: 'cache-active', targetText: 'Cache' },
      { delay: 300, log: '3. Client 에 stale 응답 전달', highlight: ['arrow1', 'client'] },
      { delay: 800, log: '4. 동시에 Network에서 최신 데이터 fetch', highlight: ['arrow2', 'target'], targetClass: 'network-active', targetText: 'Network' },
      { delay: 400, log: '5. 캐시 업데이트 완료 (다음 요청은 fresh)', highlight: ['sw'] }
    ]
  }
};

var currentStrat = 'cache-first';
var running = false;

function updateView() {
  document.getElementById('description').innerHTML = strategies[currentStrat].desc;
  document.getElementById('resultLog').innerHTML = '';
  resetFlow();
}

function resetFlow() {
  ['client','sw','target'].forEach(function(id) {
    var el = document.getElementById(id);
    el.classList.remove('highlight','cache-active','network-active');
  });
  document.getElementById('target').textContent = 'Cache / Network';
  ['arrow1','arrow2'].forEach(function(id) {
    document.getElementById(id).classList.remove('active');
  });
}

document.querySelectorAll('.strat-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    if (running) return;
    document.querySelectorAll('.strat-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    currentStrat = btn.getAttribute('data-strat');
    updateView();
  });
});

document.getElementById('simulateBtn').addEventListener('click', function() {
  if (running) return;
  running = true;
  document.getElementById('simulateBtn').disabled = true;
  document.getElementById('resultLog').innerHTML = '';
  resetFlow();

  var steps = strategies[currentStrat].steps;
  var totalDelay = 0;

  steps.forEach(function(step, i) {
    totalDelay += step.delay;
    setTimeout(function() {
      resetFlow();
      step.highlight.forEach(function(id) {
        document.getElementById(id).classList.add(id.startsWith('arrow') ? 'active' : 'highlight');
      });
      if (step.targetClass) document.getElementById('target').classList.add(step.targetClass);
      if (step.targetText) document.getElementById('target').textContent = step.targetText;
      var log = document.getElementById('resultLog');
      log.innerHTML += '<div>' + step.log + '</div>';
      log.scrollTop = log.scrollHeight;
    }, totalDelay);
  });

  setTimeout(function() {
    running = false;
    document.getElementById('simulateBtn').disabled = false;
    var log = document.getElementById('resultLog');
    log.innerHTML += '<div style="color:#4AE7E7">--- 시뮬레이션 완료 ---</div>';
  }, totalDelay + 500);
});

updateView();`},solutionExplanation:`3가지 캐싱 전략(Cache First, Network First, SWR)의 요청 흐름을 시각적 애니메이션으로 보여줍니다. setTimeout 체인으로 단계별 시뮬레이션을 구현했습니다.`,solutionExplanationEn:`Visually animates the request flow of 3 caching strategies (Cache First, Network First, SWR). Implements step-by-step simulation with setTimeout chains.`},{id:`advanced-p10`,number:10,title:`성능 최적화`,titleEn:`Performance Optimization`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`debounce, throttle, lazy loading, 메모이제이션 등 웹 성능 최적화 기법을 구현하고 시각적으로 비교하세요.`,descriptionEn:`Implement and visually compare web performance optimization techniques: debounce, throttle, lazy loading, and memoization.`,hint:`requestAnimationFrame과 closure를 활용하세요.`,hintEn:`Use requestAnimationFrame and closures.`,solution:{html:`<div class="perf-demo">
  <h2>성능 최적화 기법</h2>
  <div class="tabs">
    <button class="tab active" data-panel="debounce">Debounce</button>
    <button class="tab" data-panel="throttle">Throttle</button>
    <button class="tab" data-panel="memo">Memoization</button>
  </div>

  <div class="panel active" id="panel-debounce">
    <h3>Debounce vs 일반</h3>
    <p>입력을 멈춘 후 일정 시간 뒤에 실행합니다.</p>
    <input type="text" id="debounceInput" placeholder="검색어를 입력하세요...">
    <div class="counters">
      <div class="counter-box"><span id="normalCount">0</span><label>일반 호출</label></div>
      <div class="counter-box accent"><span id="debounceCount">0</span><label>Debounce 호출</label></div>
    </div>
    <div class="log-box" id="debounceLog"></div>
  </div>

  <div class="panel" id="panel-throttle">
    <h3>Throttle vs 일반</h3>
    <p>일정 간격으로 최대 1회만 실행합니다.</p>
    <div class="scroll-area" id="scrollArea">
      <div class="scroll-content">스크롤해보세요! 이 영역을 위아래로 스크롤하면 이벤트 발생 횟수를 비교할 수 있습니다.<br><br>Lorem ipsum dolor sit amet...<br><br>Scroll me!<br><br>Keep scrolling...<br><br>Almost there...<br><br>End!</div>
    </div>
    <div class="counters">
      <div class="counter-box"><span id="scrollNormal">0</span><label>일반 스크롤</label></div>
      <div class="counter-box accent"><span id="scrollThrottle">0</span><label>Throttle 스크롤</label></div>
    </div>
  </div>

  <div class="panel" id="panel-memo">
    <h3>Memoization</h3>
    <p>같은 입력에 대한 결과를 캐시하여 재계산을 방지합니다.</p>
    <div class="memo-input">
      <input type="number" id="fibInput" value="35" min="1" max="45">
      <button id="fibBtn">계산</button>
      <button id="fibMemoBtn">메모 계산</button>
    </div>
    <div class="counters">
      <div class="counter-box"><span id="fibTime">-</span><label>일반 (ms)</label></div>
      <div class="counter-box accent"><span id="fibMemoTime">-</span><label>메모 (ms)</label></div>
    </div>
    <div class="log-box" id="memoLog"></div>
  </div>
</div>`,css:`.perf-demo {
  max-width: 500px;
  margin: 20px auto;
  padding: 24px;
  font-family: sans-serif;
}
.perf-demo h2 { color: #0046C8; }
.tabs {
  display: flex;
  gap: 4px;
  background: #f0f0f0;
  padding: 4px;
  border-radius: 8px;
  margin-bottom: 16px;
}
.tab {
  flex: 1; padding: 10px; border: none; background: transparent;
  border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 13px; color: #666;
}
.tab.active { background: #0046C8; color: white; }
.panel { display: none; background: white; padding: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
.panel.active { display: block; }
.panel h3 { color: #0046C8; margin: 0 0 8px; }
.panel p { color: #666; font-size: 14px; margin: 0 0 16px; }
.panel input[type="text"], .panel input[type="number"] {
  width: 100%; padding: 10px; border: 2px solid #e0e0e0; border-radius: 8px;
  font-size: 14px; box-sizing: border-box; margin-bottom: 16px;
}
.panel input:focus { outline: none; border-color: #0046C8; }
.counters { display: flex; gap: 12px; margin-bottom: 16px; }
.counter-box {
  flex: 1; text-align: center; padding: 16px; background: #f8f9fa; border-radius: 8px;
}
.counter-box.accent { background: #e8f0fe; }
.counter-box span { display: block; font-size: 2rem; font-weight: 700; color: #333; }
.counter-box.accent span { color: #0046C8; }
.counter-box label { font-size: 12px; color: #888; }
.log-box {
  background: #1a1a2e; color: #4AE79A; padding: 10px; border-radius: 8px;
  font-family: monospace; font-size: 11px; max-height: 80px; overflow-y: auto;
}
.scroll-area {
  height: 100px; overflow-y: auto; background: #f0f0f0; border-radius: 8px;
  padding: 12px; margin-bottom: 16px; font-size: 14px; color: #666;
}
.scroll-content { height: 400px; }
.memo-input {
  display: flex; gap: 8px; margin-bottom: 16px;
}
.memo-input input { flex: 1; margin-bottom: 0; }
.memo-input button {
  padding: 10px 16px; border: none; border-radius: 8px; cursor: pointer;
  font-weight: 600; font-size: 13px;
}
.memo-input button:first-of-type { background: #f0f0f0; color: #666; }
.memo-input button:last-of-type { background: #0046C8; color: white; }`,js:`// Tab switching
document.querySelectorAll('.tab').forEach(function(tab) {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
    document.querySelectorAll('.panel').forEach(function(p) { p.classList.remove('active'); });
    tab.classList.add('active');
    document.getElementById('panel-' + tab.getAttribute('data-panel')).classList.add('active');
  });
});

// === Debounce ===
function debounce(fn, delay) {
  var timer;
  return function() {
    clearTimeout(timer);
    var args = arguments;
    var self = this;
    timer = setTimeout(function() { fn.apply(self, args); }, delay);
  };
}

var normalC = 0, debounceC = 0;
var dLog = document.getElementById('debounceLog');

var debouncedSearch = debounce(function(val) {
  debounceC++;
  document.getElementById('debounceCount').textContent = debounceC;
  dLog.innerHTML += '<div>Debounce: "' + val + '"</div>';
  dLog.scrollTop = dLog.scrollHeight;
}, 500);

document.getElementById('debounceInput').addEventListener('input', function(e) {
  normalC++;
  document.getElementById('normalCount').textContent = normalC;
  debouncedSearch(e.target.value);
});

// === Throttle ===
function throttle(fn, limit) {
  var inThrottle;
  return function() {
    var args = arguments;
    var self = this;
    if (!inThrottle) {
      fn.apply(self, args);
      inThrottle = true;
      setTimeout(function() { inThrottle = false; }, limit);
    }
  };
}

var scrollN = 0, scrollT = 0;
var throttledScroll = throttle(function() {
  scrollT++;
  document.getElementById('scrollThrottle').textContent = scrollT;
}, 200);

document.getElementById('scrollArea').addEventListener('scroll', function() {
  scrollN++;
  document.getElementById('scrollNormal').textContent = scrollN;
  throttledScroll();
});

// === Memoization ===
function memoize(fn) {
  var cache = {};
  return function(n) {
    if (cache[n] !== undefined) return cache[n];
    var result = fn(n);
    cache[n] = result;
    return result;
  };
}

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

var memoFib = memoize(function(n) {
  if (n <= 1) return n;
  return memoFib(n - 1) + memoFib(n - 2);
});

var mLog = document.getElementById('memoLog');

document.getElementById('fibBtn').addEventListener('click', function() {
  var n = parseInt(document.getElementById('fibInput').value);
  if (n > 40) { alert('40 이하로 입력하세요 (일반 계산은 느립니다)'); return; }
  var start = performance.now();
  var result = fib(n);
  var time = (performance.now() - start).toFixed(2);
  document.getElementById('fibTime').textContent = time;
  mLog.innerHTML += '<div>fib(' + n + ') = ' + result + ' [' + time + 'ms]</div>';
  mLog.scrollTop = mLog.scrollHeight;
});

document.getElementById('fibMemoBtn').addEventListener('click', function() {
  var n = parseInt(document.getElementById('fibInput').value);
  var start = performance.now();
  var result = memoFib(n);
  var time = (performance.now() - start).toFixed(4);
  document.getElementById('fibMemoTime').textContent = time;
  mLog.innerHTML += '<div>memoFib(' + n + ') = ' + result + ' [' + time + 'ms]</div>';
  mLog.scrollTop = mLog.scrollHeight;
});`},solutionExplanation:`debounce는 마지막 호출 후 대기시간이 지나면 실행하고, throttle은 일정 간격으로 최대 1회 실행합니다. memoize는 함수 결과를 캐싱하여 동일 입력의 재계산을 방지합니다.`,solutionExplanationEn:`Debounce executes after a wait period from the last call, throttle executes at most once per interval. Memoize caches function results to prevent recalculation for the same input.`}],r=[{id:`practical-p01`,number:1,title:`포트폴리오 웹사이트`,titleEn:`Portfolio Website`,category:`practical`,topic:`html`,difficulty:`practical`,description:`히어로 섹션, 소개, 프로젝트 갤러리, 기술 스택, 연락처가 포함된 개인 포트폴리오 원페이지 웹사이트를 만드세요.`,descriptionEn:`Create a one-page personal portfolio website with hero section, about, project gallery, tech stack, and contact sections.`,hint:`CSS Grid/Flexbox와 smooth scrolling을 활용하세요.`,hintEn:`Use CSS Grid/Flexbox and smooth scrolling.`,solution:{html:`<nav class="port-nav">
  <div class="nav-brand">Portfolio</div>
  <div class="nav-menu">
    <a href="#about">소개</a>
    <a href="#projects">프로젝트</a>
    <a href="#skills">기술</a>
    <a href="#contact">연락처</a>
  </div>
</nav>
<section class="hero-section">
  <h1>안녕하세요,<br>저는 <span class="highlight">웹 개발자</span>입니다</h1>
  <p>사용자 경험을 중시하는 프론트엔드 개발자입니다.</p>
  <a href="#projects" class="cta-btn">프로젝트 보기</a>
</section>
<section id="about" class="section">
  <h2>소개</h2>
  <p>3년차 프론트엔드 개발자로서 React, TypeScript, Node.js를 활용한 웹 애플리케이션 개발에 전문성을 보유하고 있습니다.</p>
</section>
<section id="projects" class="section">
  <h2>프로젝트</h2>
  <div class="project-grid">
    <div class="project-card">
      <div class="project-thumb" style="background:#0046C8"></div>
      <h3>쇼핑몰 플랫폼</h3>
      <p>React + Node.js 기반 e-commerce</p>
      <div class="tags"><span>React</span><span>Node.js</span></div>
    </div>
    <div class="project-card">
      <div class="project-thumb" style="background:#00855A"></div>
      <h3>대시보드</h3>
      <p>실시간 데이터 시각화 대시보드</p>
      <div class="tags"><span>TypeScript</span><span>D3.js</span></div>
    </div>
    <div class="project-card">
      <div class="project-thumb" style="background:#8B1AC8"></div>
      <h3>채팅 앱</h3>
      <p>WebSocket 실시간 메신저</p>
      <div class="tags"><span>Socket.io</span><span>Express</span></div>
    </div>
  </div>
</section>
<section id="skills" class="section">
  <h2>기술 스택</h2>
  <div class="skills-grid">
    <div class="skill-item"><div class="skill-bar" style="width:95%"></div><span>JavaScript</span></div>
    <div class="skill-item"><div class="skill-bar" style="width:90%"></div><span>React</span></div>
    <div class="skill-item"><div class="skill-bar" style="width:85%"></div><span>TypeScript</span></div>
    <div class="skill-item"><div class="skill-bar" style="width:80%"></div><span>Node.js</span></div>
    <div class="skill-item"><div class="skill-bar" style="width:75%"></div><span>Python</span></div>
  </div>
</section>
<section id="contact" class="section">
  <h2>연락처</h2>
  <p>이메일: developer@example.com</p>
  <p>GitHub: github.com/developer</p>
</section>`,css:`html { scroll-behavior: smooth; }
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Pretendard', sans-serif; color: #333; }
.port-nav {
  position: fixed; top: 0; width: 100%; display: flex;
  justify-content: space-between; align-items: center;
  padding: 16px 40px; background: rgba(255,255,255,0.95);
  backdrop-filter: blur(8px); z-index: 100;
  box-shadow: 0 1px 8px rgba(0,0,0,0.06);
}
.nav-brand { font-size: 1.3rem; font-weight: 800; color: #0046C8; }
.nav-menu { display: flex; gap: 24px; }
.nav-menu a { text-decoration: none; color: #666; font-weight: 500; font-size: 14px; }
.nav-menu a:hover { color: #0046C8; }
.hero-section {
  min-height: 100vh; display: flex; flex-direction: column;
  justify-content: center; padding: 0 40px;
  background: linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%);
}
.hero-section h1 { font-size: 3rem; line-height: 1.3; margin-bottom: 16px; }
.highlight { color: #0046C8; }
.hero-section p { font-size: 1.2rem; color: #666; margin-bottom: 32px; }
.cta-btn {
  display: inline-block; padding: 14px 32px; background: #0046C8;
  color: white; text-decoration: none; border-radius: 8px; font-weight: 600;
}
.section { padding: 80px 40px; max-width: 900px; margin: 0 auto; }
.section h2 { font-size: 2rem; color: #0046C8; margin-bottom: 24px; }
.section p { color: #555; line-height: 1.8; font-size: 1.05rem; }
.project-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.project-card {
  background: white; border-radius: 12px; overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08); transition: transform 0.2s;
}
.project-card:hover { transform: translateY(-4px); }
.project-thumb { height: 120px; }
.project-card h3 { padding: 16px 16px 4px; color: #333; font-size: 1rem; }
.project-card p { padding: 0 16px; font-size: 13px; color: #888; }
.tags { padding: 12px 16px; display: flex; gap: 6px; }
.tags span {
  font-size: 11px; padding: 3px 10px; background: #e8f0fe;
  color: #0046C8; border-radius: 12px;
}
.skills-grid { display: flex; flex-direction: column; gap: 16px; }
.skill-item { position: relative; background: #f0f0f0; border-radius: 8px; height: 36px; overflow: hidden; }
.skill-bar { height: 100%; background: linear-gradient(90deg, #0046C8, #4A8FE7); border-radius: 8px; }
.skill-item span {
  position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
  font-size: 13px; font-weight: 600; color: white;
}`},solutionExplanation:`원페이지 포트폴리오를 fixed nav, 히어로, 프로젝트 그리드, 스킬 바, 연락처 섹션으로 구성했습니다. scroll-behavior: smooth로 부드러운 내비게이션을 구현합니다.`,solutionExplanationEn:`Built a one-page portfolio with fixed nav, hero, project grid, skill bars, and contact sections. smooth scrolling for seamless navigation.`},{id:`practical-p02`,number:2,title:`날씨 대시보드`,titleEn:`Weather Dashboard`,category:`practical`,topic:`javascript`,difficulty:`practical`,description:`도시를 검색하면 현재 날씨, 기온, 습도, 풍속 등을 카드 형태로 보여주는 날씨 대시보드를 만드세요. (시뮬레이션 데이터 사용)`,descriptionEn:`Create a weather dashboard that shows current weather, temperature, humidity, and wind speed in card format when searching for a city. (Use simulated data)`,hint:`가상 날씨 데이터를 객체로 미리 정의하세요.`,hintEn:`Pre-define simulated weather data as objects.`,solution:{html:`<div class="weather-app">
  <h2>날씨 대시보드</h2>
  <div class="search-bar">
    <input type="text" id="cityInput" placeholder="도시명을 입력하세요 (서울, 부산, 제주...)">
    <button id="searchBtn">검색</button>
  </div>
  <div id="weatherResult" class="weather-result"></div>
  <div class="city-buttons" id="cityButtons"></div>
</div>`,css:`.weather-app {
  max-width: 500px;
  margin: 20px auto;
  padding: 24px;
  font-family: sans-serif;
}
.weather-app h2 { color: #0046C8; }
.search-bar {
  display: flex; gap: 8px; margin-bottom: 20px;
}
.search-bar input {
  flex: 1; padding: 12px; border: 2px solid #e0e0e0;
  border-radius: 8px; font-size: 14px;
}
.search-bar input:focus { outline: none; border-color: #0046C8; }
.search-bar button {
  padding: 12px 24px; background: #0046C8; color: white;
  border: none; border-radius: 8px; cursor: pointer; font-weight: 600;
}
.weather-result { margin-bottom: 20px; }
.weather-card {
  background: linear-gradient(135deg, #0046C8, #4A8FE7);
  color: white; border-radius: 16px; padding: 32px;
  animation: fadeUp 0.4s ease;
}
@keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
.weather-card .city-name { font-size: 1.5rem; font-weight: 700; margin-bottom: 4px; }
.weather-card .date { font-size: 13px; opacity: 0.8; margin-bottom: 20px; }
.weather-card .temp-row {
  display: flex; align-items: center; gap: 16px; margin-bottom: 24px;
}
.weather-card .temp { font-size: 4rem; font-weight: 800; line-height: 1; }
.weather-card .condition { font-size: 1.1rem; }
.weather-card .details {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
}
.weather-card .detail-item {
  text-align: center; background: rgba(255,255,255,0.15);
  padding: 12px; border-radius: 8px;
}
.weather-card .detail-item .value { font-size: 1.2rem; font-weight: 700; }
.weather-card .detail-item .label { font-size: 11px; opacity: 0.8; margin-top: 4px; }
.weather-card.night {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
}
.city-buttons {
  display: flex; flex-wrap: wrap; gap: 8px;
}
.city-btn {
  padding: 6px 14px; border: 1px solid #ddd; background: white;
  border-radius: 16px; cursor: pointer; font-size: 13px; color: #666;
}
.city-btn:hover { border-color: #0046C8; color: #0046C8; }
.not-found {
  text-align: center; padding: 40px; color: #999;
  background: #f8f9fa; border-radius: 12px;
}`,js:`var weatherData = {
  '서울': { temp: 22, condition: '맑음', icon: '☀️', humidity: 45, wind: 3.2, feelsLike: 20 },
  '부산': { temp: 24, condition: '구름 조금', icon: '⛅', humidity: 62, wind: 4.5, feelsLike: 23 },
  '제주': { temp: 26, condition: '흐림', icon: '☁️', humidity: 70, wind: 5.1, feelsLike: 25 },
  '대구': { temp: 28, condition: '맑음', icon: '☀️', humidity: 35, wind: 1.8, feelsLike: 30 },
  '인천': { temp: 21, condition: '안개', icon: '🌫️', humidity: 78, wind: 2.3, feelsLike: 19 },
  '광주': { temp: 25, condition: '소나기', icon: '🌧️', humidity: 80, wind: 3.7, feelsLike: 24 },
  '대전': { temp: 23, condition: '맑음', icon: '☀️', humidity: 42, wind: 2.1, feelsLike: 22 },
  'Tokyo': { temp: 27, condition: 'Sunny', icon: '☀️', humidity: 50, wind: 3.0, feelsLike: 28 },
  'New York': { temp: 18, condition: 'Cloudy', icon: '☁️', humidity: 65, wind: 6.2, feelsLike: 16 }
};

var cities = Object.keys(weatherData);
var btnContainer = document.getElementById('cityButtons');

cities.forEach(function(city) {
  var btn = document.createElement('button');
  btn.className = 'city-btn';
  btn.textContent = city;
  btn.addEventListener('click', function() { showWeather(city); });
  btnContainer.appendChild(btn);
});

function showWeather(city) {
  document.getElementById('cityInput').value = city;
  var data = weatherData[city];
  var result = document.getElementById('weatherResult');

  if (!data) {
    result.innerHTML = '<div class="not-found">"' + city + '" 도시를 찾을 수 없습니다.</div>';
    return;
  }

  var now = new Date();
  var isNight = now.getHours() >= 18 || now.getHours() < 6;
  var dateStr = now.toLocaleDateString('ko-KR', { year:'numeric', month:'long', day:'numeric', weekday:'long' });

  result.innerHTML =
    '<div class="weather-card' + (isNight ? ' night' : '') + '">' +
    '<div class="city-name">' + city + '</div>' +
    '<div class="date">' + dateStr + '</div>' +
    '<div class="temp-row">' +
    '<div class="temp">' + data.temp + '°</div>' +
    '<div><div style="font-size:2.5rem">' + data.icon + '</div><div class="condition">' + data.condition + '</div></div>' +
    '</div>' +
    '<div class="details">' +
    '<div class="detail-item"><div class="value">' + data.humidity + '%</div><div class="label">습도</div></div>' +
    '<div class="detail-item"><div class="value">' + data.wind + 'm/s</div><div class="label">풍속</div></div>' +
    '<div class="detail-item"><div class="value">' + data.feelsLike + '°</div><div class="label">체감온도</div></div>' +
    '</div></div>';
}

document.getElementById('searchBtn').addEventListener('click', function() {
  showWeather(document.getElementById('cityInput').value.trim());
});
document.getElementById('cityInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') showWeather(e.target.value.trim());
});

showWeather('서울');`},solutionExplanation:`시뮬레이션 날씨 데이터를 객체로 저장하고, 도시 검색 시 해당 데이터를 그라데이션 카드 UI로 렌더링합니다. 시간에 따라 낮/밤 테마가 변경됩니다.`,solutionExplanationEn:`Stores simulated weather data as objects, rendering gradient card UI on city search. Theme changes between day/night based on time.`},{id:`practical-p03`,number:3,title:`필터 기능 할 일 앱`,titleEn:`To-Do App with Filters`,category:`practical`,topic:`javascript`,difficulty:`practical`,description:`전체/활성/완료 필터, 완료 토글, 삭제, 진행률 표시가 있는 할 일 관리 앱을 만드세요. localStorage로 데이터를 영구 저장하세요.`,descriptionEn:`Create a to-do management app with all/active/completed filters, completion toggle, delete, and progress bar. Persist data with localStorage.`,hint:`filter 메서드로 필터링하고 checkbox로 완료 상태를 토글하세요.`,hintEn:`Use the filter method for filtering and checkboxes for toggling completion.`,solution:{html:`<div class="todo-pro">
  <h2>할 일 관리</h2>
  <div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>
  <div class="progress-text" id="progressText">0/0 완료</div>
  <div class="add-area">
    <input type="text" id="newTodo" placeholder="새로운 할 일...">
    <select id="priority">
      <option value="low">낮음</option>
      <option value="medium" selected>보통</option>
      <option value="high">높음</option>
    </select>
    <button id="addBtn">추가</button>
  </div>
  <div class="filters">
    <button class="filter-btn active" data-filter="all">전체</button>
    <button class="filter-btn" data-filter="active">활성</button>
    <button class="filter-btn" data-filter="completed">완료</button>
  </div>
  <ul id="todoList" class="todo-list"></ul>
  <div class="footer">
    <span id="itemCount">0개 항목</span>
    <button id="clearCompleted">완료 항목 삭제</button>
  </div>
</div>`,css:`.todo-pro {
  max-width: 480px;
  margin: 20px auto;
  padding: 24px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  font-family: sans-serif;
}
.todo-pro h2 { color: #0046C8; margin: 0 0 16px; }
.progress-bar {
  height: 6px; background: #e0e0e0; border-radius: 3px;
  overflow: hidden; margin-bottom: 4px;
}
.progress-fill {
  height: 100%; background: linear-gradient(90deg, #0046C8, #4A8FE7);
  border-radius: 3px; transition: width 0.3s; width: 0;
}
.progress-text { font-size: 12px; color: #999; margin-bottom: 16px; }
.add-area { display: flex; gap: 8px; margin-bottom: 16px; }
.add-area input {
  flex: 1; padding: 10px; border: 2px solid #e0e0e0;
  border-radius: 8px; font-size: 14px;
}
.add-area input:focus { outline: none; border-color: #0046C8; }
.add-area select {
  padding: 10px; border: 2px solid #e0e0e0; border-radius: 8px;
  font-size: 13px; background: white;
}
.add-area button {
  padding: 10px 20px; background: #0046C8; color: white;
  border: none; border-radius: 8px; cursor: pointer; font-weight: 600;
}
.filters { display: flex; gap: 4px; margin-bottom: 16px; }
.filter-btn {
  flex: 1; padding: 8px; border: none; background: #f0f0f0;
  border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 500;
}
.filter-btn.active { background: #0046C8; color: white; }
.todo-list { list-style: none; padding: 0; margin: 0; }
.todo-item {
  display: flex; align-items: center; gap: 12px;
  padding: 12px; border-bottom: 1px solid #f0f0f0;
  animation: slideIn 0.2s ease;
}
@keyframes slideIn { from { opacity:0; transform:translateX(-10px); } }
.todo-item input[type="checkbox"] {
  width: 20px; height: 20px; accent-color: #0046C8; cursor: pointer;
}
.todo-item .text { flex: 1; font-size: 14px; color: #333; }
.todo-item.done .text { text-decoration: line-through; color: #aaa; }
.todo-item .priority {
  font-size: 11px; padding: 2px 8px; border-radius: 10px;
}
.priority-high { background: #fde8e8; color: #e74c3c; }
.priority-medium { background: #fff3cd; color: #856404; }
.priority-low { background: #e8f0fe; color: #0046C8; }
.todo-item .del-btn {
  background: none; border: none; color: #ccc; cursor: pointer;
  font-size: 18px; padding: 0 4px;
}
.todo-item .del-btn:hover { color: #e74c3c; }
.footer {
  display: flex; justify-content: space-between; align-items: center;
  padding-top: 12px; font-size: 13px; color: #999;
}
.footer button {
  background: none; border: none; color: #e74c3c; cursor: pointer;
  font-size: 13px;
}
.footer button:hover { text-decoration: underline; }`,js:`var todos = JSON.parse(localStorage.getItem('todoPro') || '[]');
var currentFilter = 'all';

function save() {
  localStorage.setItem('todoPro', JSON.stringify(todos));
  render();
}

function render() {
  var filtered = todos.filter(function(t) {
    if (currentFilter === 'active') return !t.done;
    if (currentFilter === 'completed') return t.done;
    return true;
  });

  var list = document.getElementById('todoList');
  list.innerHTML = '';

  filtered.forEach(function(todo) {
    var li = document.createElement('li');
    li.className = 'todo-item' + (todo.done ? ' done' : '');
    li.innerHTML =
      '<input type="checkbox"' + (todo.done ? ' checked' : '') + '>' +
      '<span class="text">' + todo.text + '</span>' +
      '<span class="priority priority-' + todo.priority + '">' + todo.priority + '</span>' +
      '<button class="del-btn">&times;</button>';

    li.querySelector('input').addEventListener('change', function() {
      todo.done = !todo.done;
      save();
    });
    li.querySelector('.del-btn').addEventListener('click', function() {
      todos = todos.filter(function(t) { return t.id !== todo.id; });
      save();
    });
    list.appendChild(li);
  });

  // Progress
  var done = todos.filter(function(t) { return t.done; }).length;
  var total = todos.length;
  var pct = total > 0 ? Math.round((done / total) * 100) : 0;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = done + '/' + total + ' 완료 (' + pct + '%)';
  document.getElementById('itemCount').textContent = filtered.length + '개 항목';
}

document.getElementById('addBtn').addEventListener('click', addTodo);
document.getElementById('newTodo').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTodo();
});

function addTodo() {
  var input = document.getElementById('newTodo');
  var text = input.value.trim();
  if (!text) return;
  todos.push({
    id: Date.now(),
    text: text,
    done: false,
    priority: document.getElementById('priority').value
  });
  input.value = '';
  save();
}

document.querySelectorAll('.filter-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    render();
  });
});

document.getElementById('clearCompleted').addEventListener('click', function() {
  todos = todos.filter(function(t) { return !t.done; });
  save();
});

render();`},solutionExplanation:`필터링, 우선순위, 진행률 표시, localStorage 영구저장을 모두 포함한 완전한 할 일 앱입니다. 체크박스로 완료 상태를 토글합니다.`,solutionExplanationEn:`A complete to-do app with filtering, priority levels, progress display, and localStorage persistence. Checkboxes toggle completion state.`},{id:`practical-p04`,number:4,title:`블로그 포스트 에디터`,titleEn:`Blog Post Editor`,category:`practical`,topic:`javascript`,difficulty:`practical`,description:`제목, 본문(마크다운 미리보기), 태그 추가 기능이 있는 블로그 포스트 에디터를 만드세요. 실시간 미리보기를 지원하세요.`,descriptionEn:`Create a blog post editor with title, body (markdown preview), and tag management. Support real-time preview.`,hint:`contentEditable 또는 textarea와 실시간 HTML 변환을 활용하세요.`,hintEn:`Use contentEditable or textarea with real-time HTML conversion.`,solution:{html:`<div class="editor-app">
  <div class="editor-header">
    <h2>블로그 에디터</h2>
    <div class="header-actions">
      <button id="previewToggle" class="toggle-btn">미리보기</button>
      <button id="saveBtn" class="save-btn">저장</button>
    </div>
  </div>
  <input type="text" id="titleInput" class="title-input" placeholder="제목을 입력하세요...">
  <div class="tag-area">
    <div class="tags" id="tagList"></div>
    <input type="text" id="tagInput" class="tag-input" placeholder="태그 추가 (Enter)">
  </div>
  <div class="editor-body">
    <div class="edit-pane" id="editPane">
      <textarea id="content" placeholder="본문을 작성하세요...

**굵게** *기울임* # 제목
- 목록 항목
> 인용문"></textarea>
    </div>
    <div class="preview-pane" id="previewPane" style="display:none">
      <div id="preview"></div>
    </div>
  </div>
  <div class="word-count" id="wordCount">0자</div>
</div>`,css:`.editor-app {
  max-width: 700px;
  margin: 20px auto;
  padding: 24px;
  font-family: sans-serif;
}
.editor-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 16px;
}
.editor-header h2 { color: #0046C8; margin: 0; }
.header-actions { display: flex; gap: 8px; }
.toggle-btn {
  padding: 8px 16px; border: 2px solid #0046C8; background: transparent;
  color: #0046C8; border-radius: 6px; cursor: pointer; font-weight: 600;
}
.toggle-btn.active { background: #0046C8; color: white; }
.save-btn {
  padding: 8px 16px; background: #27ae60; color: white;
  border: none; border-radius: 6px; cursor: pointer; font-weight: 600;
}
.title-input {
  width: 100%; padding: 14px 0; border: none; border-bottom: 2px solid #e0e0e0;
  font-size: 1.8rem; font-weight: 700; color: #333; box-sizing: border-box;
}
.title-input:focus { outline: none; border-bottom-color: #0046C8; }
.tag-area {
  display: flex; align-items: center; flex-wrap: wrap; gap: 6px;
  padding: 12px 0; border-bottom: 1px solid #f0f0f0;
}
.tags { display: flex; gap: 6px; flex-wrap: wrap; }
.tag {
  display: flex; align-items: center; gap: 4px;
  padding: 4px 10px; background: #e8f0fe; color: #0046C8;
  border-radius: 14px; font-size: 12px; font-weight: 500;
}
.tag button {
  background: none; border: none; color: #0046C8; cursor: pointer;
  font-size: 14px; padding: 0 2px;
}
.tag-input {
  border: none; padding: 4px 8px; font-size: 13px; min-width: 100px;
}
.tag-input:focus { outline: none; }
.editor-body { margin-top: 16px; min-height: 300px; }
.editor-body textarea {
  width: 100%; min-height: 300px; padding: 16px; border: 2px solid #e0e0e0;
  border-radius: 8px; font-size: 15px; line-height: 1.7; resize: vertical;
  font-family: 'Pretendard', sans-serif; color: #333; box-sizing: border-box;
}
.editor-body textarea:focus { outline: none; border-color: #0046C8; }
.preview-pane {
  padding: 16px; border: 2px solid #e0e0e0; border-radius: 8px;
  min-height: 300px; background: #fafafa;
}
.preview-pane h1 { font-size: 1.8rem; color: #333; border-bottom: 2px solid #e0e0e0; padding-bottom: 8px; }
.preview-pane h2 { font-size: 1.4rem; color: #0046C8; }
.preview-pane p { line-height: 1.8; color: #444; }
.preview-pane blockquote {
  border-left: 4px solid #0046C8; margin: 12px 0; padding: 8px 16px;
  background: #f0f4ff; border-radius: 0 6px 6px 0; color: #555;
}
.preview-pane ul { padding-left: 20px; }
.preview-pane li { line-height: 1.8; color: #444; }
.preview-pane strong { color: #333; }
.preview-pane em { color: #666; }
.word-count { text-align: right; font-size: 12px; color: #999; margin-top: 8px; }`,js:`var tags = [];

// Simple markdown parser
function parseMarkdown(text) {
  return text
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>')
    .replace(/\\*(.+?)\\*/g, '<em>$1</em>')
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\\/li>)/s, '<ul>$1</ul>')
    .replace(/\\n\\n/g, '</p><p>')
    .replace(/^(.+)$/gm, function(match) {
      if (match.startsWith('<')) return match;
      return match;
    });
}

// Preview toggle
var showPreview = false;
document.getElementById('previewToggle').addEventListener('click', function() {
  showPreview = !showPreview;
  this.classList.toggle('active');
  this.textContent = showPreview ? '편집' : '미리보기';
  document.getElementById('editPane').style.display = showPreview ? 'none' : 'block';
  document.getElementById('previewPane').style.display = showPreview ? 'block' : 'none';
  if (showPreview) updatePreview();
});

// Real-time preview
function updatePreview() {
  var content = document.getElementById('content').value;
  document.getElementById('preview').innerHTML = parseMarkdown(content);
}

document.getElementById('content').addEventListener('input', function() {
  if (showPreview) updatePreview();
  document.getElementById('wordCount').textContent = this.value.length + '자';
});

// Tags
function renderTags() {
  var list = document.getElementById('tagList');
  list.innerHTML = tags.map(function(tag, i) {
    return '<span class="tag">' + tag + '<button data-i="' + i + '">&times;</button></span>';
  }).join('');
  list.querySelectorAll('button').forEach(function(btn) {
    btn.addEventListener('click', function() {
      tags.splice(parseInt(btn.getAttribute('data-i')), 1);
      renderTags();
    });
  });
}

document.getElementById('tagInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    var tag = this.value.trim();
    if (tag && tags.indexOf(tag) === -1) {
      tags.push(tag);
      renderTags();
    }
    this.value = '';
  }
});

// Save
document.getElementById('saveBtn').addEventListener('click', function() {
  var post = {
    title: document.getElementById('titleInput').value,
    content: document.getElementById('content').value,
    tags: tags,
    savedAt: new Date().toLocaleString()
  };
  localStorage.setItem('blogDraft', JSON.stringify(post));
  alert('저장되었습니다! (' + post.savedAt + ')');
});

// Load draft
var draft = JSON.parse(localStorage.getItem('blogDraft') || 'null');
if (draft) {
  document.getElementById('titleInput').value = draft.title || '';
  document.getElementById('content').value = draft.content || '';
  tags = draft.tags || [];
  renderTags();
  document.getElementById('wordCount').textContent = (draft.content || '').length + '자';
}`},solutionExplanation:`간단한 마크다운 파서로 실시간 미리보기를 구현하고, 태그 관리와 localStorage 임시 저장 기능을 포함한 블로그 에디터입니다.`,solutionExplanationEn:`A blog editor with real-time preview via a simple markdown parser, tag management, and localStorage draft saving.`},{id:`practical-p05`,number:5,title:`퀴즈 앱`,titleEn:`Quiz App`,category:`practical`,topic:`javascript`,difficulty:`practical`,description:`객관식 퀴즈 앱을 만드세요. 문제 번호, 진행률, 타이머, 정답 확인, 결과 화면을 포함하세요.`,descriptionEn:`Create a multiple-choice quiz app. Include question number, progress bar, timer, answer checking, and results screen.`,hint:`문제 배열을 만들고 인덱스로 현재 문제를 추적하세요.`,hintEn:`Create a questions array and track the current question by index.`,solution:{html:`<div class="quiz-app" id="quizApp">
  <div class="quiz-header">
    <span class="q-num" id="qNum">1/5</span>
    <div class="timer" id="timer">30</div>
  </div>
  <div class="progress"><div class="progress-fill" id="qProgress"></div></div>
  <div id="quizContent"></div>
</div>`,css:`.quiz-app {
  max-width: 500px;
  margin: 20px auto;
  padding: 24px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  font-family: sans-serif;
}
.quiz-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 12px;
}
.q-num { font-size: 14px; font-weight: 600; color: #0046C8; }
.timer {
  width: 40px; height: 40px; border-radius: 50%;
  background: #e8f0fe; color: #0046C8; font-weight: 700;
  display: flex; align-items: center; justify-content: center; font-size: 16px;
}
.timer.warning { background: #fde8e8; color: #e74c3c; }
.progress {
  height: 4px; background: #e0e0e0; border-radius: 2px;
  margin-bottom: 24px; overflow: hidden;
}
.progress-fill {
  height: 100%; background: #0046C8; border-radius: 2px;
  transition: width 0.3s; width: 0;
}
.question { font-size: 1.2rem; font-weight: 600; color: #333; margin-bottom: 20px; line-height: 1.5; }
.options { display: flex; flex-direction: column; gap: 10px; }
.option {
  padding: 14px 16px; border: 2px solid #e0e0e0; border-radius: 10px;
  cursor: pointer; font-size: 15px; color: #444; transition: all 0.2s;
  background: white; text-align: left; width: 100%;
}
.option:hover { border-color: #0046C8; background: #f0f4ff; }
.option.selected { border-color: #0046C8; background: #e8f0fe; color: #0046C8; font-weight: 600; }
.option.correct { border-color: #27ae60; background: #e8ffe8; color: #27ae60; }
.option.wrong { border-color: #e74c3c; background: #fde8e8; color: #e74c3c; }
.option:disabled { cursor: not-allowed; }
.explanation {
  margin-top: 16px; padding: 12px; background: #f0f4ff;
  border-radius: 8px; font-size: 14px; color: #555; line-height: 1.6;
}
.next-btn {
  margin-top: 20px; width: 100%; padding: 14px;
  background: #0046C8; color: white; border: none;
  border-radius: 10px; font-size: 16px; font-weight: 600; cursor: pointer;
}
.result-card { text-align: center; padding: 32px 0; }
.result-card .score {
  font-size: 4rem; font-weight: 800; color: #0046C8; margin: 16px 0;
}
.result-card .grade { font-size: 1.2rem; margin-bottom: 24px; }
.result-card .retry-btn {
  padding: 14px 40px; background: #0046C8; color: white;
  border: none; border-radius: 10px; font-size: 16px; cursor: pointer; font-weight: 600;
}`,js:`var questions = [
  {
    q: 'HTML에서 가장 큰 제목 태그는?',
    opts: ['<heading>', '<h1>', '<head>', '<title>'],
    answer: 1,
    explain: '<h1>은 HTML에서 가장 큰(최상위) 제목 태그입니다. <h1>~<h6>까지 6단계가 있습니다.'
  },
  {
    q: 'CSS에서 요소를 가로 중앙에 배치하는 속성은?',
    opts: ['text-align: center', 'margin: 0 auto', 'float: center', 'align: center'],
    answer: 1,
    explain: 'margin: 0 auto는 블록 요소를 수평 중앙에 배치합니다. width가 지정되어 있어야 합니다.'
  },
  {
    q: 'JavaScript에서 배열에 요소를 추가하는 메서드는?',
    opts: ['add()', 'push()', 'append()', 'insert()'],
    answer: 1,
    explain: 'push()는 배열의 끝에 요소를 추가합니다. unshift()는 앞에 추가합니다.'
  },
  {
    q: 'React에서 상태를 관리하는 Hook은?',
    opts: ['useRef', 'useEffect', 'useState', 'useMemo'],
    answer: 2,
    explain: 'useState는 컴포넌트의 상태를 선언하고 관리하는 React Hook입니다.'
  },
  {
    q: 'HTTP 상태 코드 404는 무엇을 의미하나요?',
    opts: ['서버 오류', '권한 없음', '페이지 없음', '요청 성공'],
    answer: 2,
    explain: '404 Not Found는 요청한 리소스를 서버에서 찾을 수 없을 때 반환됩니다.'
  }
];

var current = 0, score = 0, answered = false, timerInterval;

function showQuestion() {
  answered = false;
  var q = questions[current];
  document.getElementById('qNum').textContent = (current + 1) + '/' + questions.length;
  document.getElementById('qProgress').style.width = ((current / questions.length) * 100) + '%';

  var html = '<div class="question">' + q.q + '</div><div class="options">';
  q.opts.forEach(function(opt, i) {
    html += '<button class="option" data-i="' + i + '">' + opt + '</button>';
  });
  html += '</div>';
  document.getElementById('quizContent').innerHTML = html;

  // Timer
  var timeLeft = 30;
  var timerEl = document.getElementById('timer');
  timerEl.textContent = timeLeft;
  timerEl.classList.remove('warning');
  clearInterval(timerInterval);
  timerInterval = setInterval(function() {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 10) timerEl.classList.add('warning');
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      checkAnswer(-1);
    }
  }, 1000);

  // Option click
  document.querySelectorAll('.option').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (answered) return;
      checkAnswer(parseInt(btn.getAttribute('data-i')));
    });
  });
}

function checkAnswer(selected) {
  answered = true;
  clearInterval(timerInterval);
  var q = questions[current];
  var correct = q.answer;

  document.querySelectorAll('.option').forEach(function(btn, i) {
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct');
    if (i === selected && selected !== correct) btn.classList.add('wrong');
  });

  if (selected === correct) score++;

  var content = document.getElementById('quizContent');
  content.innerHTML += '<div class="explanation">' + q.explain + '</div>';
  content.innerHTML += '<button class="next-btn" id="nextBtn">' + (current < questions.length - 1 ? '다음 문제' : '결과 보기') + '</button>';

  document.getElementById('nextBtn').addEventListener('click', function() {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
}

function showResult() {
  clearInterval(timerInterval);
  document.getElementById('timer').textContent = '-';
  document.getElementById('qProgress').style.width = '100%';
  var pct = Math.round((score / questions.length) * 100);
  var grade = pct >= 80 ? 'A (우수)' : pct >= 60 ? 'B (양호)' : 'C (노력 필요)';
  var color = pct >= 80 ? '#27ae60' : pct >= 60 ? '#f39c12' : '#e74c3c';

  document.getElementById('quizContent').innerHTML =
    '<div class="result-card">' +
    '<h2>퀴즈 완료!</h2>' +
    '<div class="score" style="color:' + color + '">' + score + '/' + questions.length + '</div>' +
    '<div class="grade" style="color:' + color + '">등급: ' + grade + ' (' + pct + '%)</div>' +
    '<button class="retry-btn" id="retryBtn">다시 풀기</button>' +
    '</div>';

  document.getElementById('retryBtn').addEventListener('click', function() {
    current = 0; score = 0;
    showQuestion();
  });
}

showQuestion();`},solutionExplanation:`문제 배열을 인덱스로 순회하며, 타이머와 정답 확인 후 해설을 보여줍니다. 모든 문제 완료 후 점수와 등급이 포함된 결과 화면을 표시합니다.`,solutionExplanationEn:`Iterates through questions array by index, shows explanation after timer and answer check. Displays results with score and grade after all questions.`},{id:`practical-p06`,number:6,title:`계산기 앱`,titleEn:`Calculator App`,category:`practical`,topic:`javascript`,difficulty:`practical`,description:`사칙연산, 소수점, 퍼센트, 부호 변환, 백스페이스 기능이 있는 계산기를 만드세요. 키보드 입력도 지원하세요.`,descriptionEn:`Create a calculator with basic operations, decimal, percent, sign toggle, backspace, and keyboard input support.`,hint:`eval() 대신 직접 계산 로직을 구현하세요.`,hintEn:`Implement calculation logic directly instead of using eval().`,solution:{html:`<div class="calc">
  <div class="calc-display">
    <div class="calc-expression" id="expression"></div>
    <div class="calc-result" id="display">0</div>
  </div>
  <div class="calc-buttons">
    <button class="btn func" data-action="clear">AC</button>
    <button class="btn func" data-action="sign">+/-</button>
    <button class="btn func" data-action="percent">%</button>
    <button class="btn op" data-action="divide">&divide;</button>
    <button class="btn num" data-val="7">7</button>
    <button class="btn num" data-val="8">8</button>
    <button class="btn num" data-val="9">9</button>
    <button class="btn op" data-action="multiply">&times;</button>
    <button class="btn num" data-val="4">4</button>
    <button class="btn num" data-val="5">5</button>
    <button class="btn num" data-val="6">6</button>
    <button class="btn op" data-action="subtract">-</button>
    <button class="btn num" data-val="1">1</button>
    <button class="btn num" data-val="2">2</button>
    <button class="btn num" data-val="3">3</button>
    <button class="btn op" data-action="add">+</button>
    <button class="btn num zero" data-val="0">0</button>
    <button class="btn num" data-val=".">.</button>
    <button class="btn equals" data-action="equals">=</button>
  </div>
</div>`,css:`.calc {
  max-width: 320px;
  margin: 20px auto;
  background: #1a1a2e;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  font-family: sans-serif;
}
.calc-display {
  padding: 16px 8px;
  text-align: right;
  margin-bottom: 16px;
}
.calc-expression {
  font-size: 14px;
  color: #888;
  min-height: 20px;
  margin-bottom: 4px;
}
.calc-result {
  font-size: 2.8rem;
  font-weight: 300;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
}
.calc-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.btn {
  padding: 18px;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.15s;
  width: 60px; height: 60px;
  display: flex; align-items: center; justify-content: center;
}
.btn:active { transform: scale(0.95); }
.btn.num {
  background: #2d2d44;
  color: white;
}
.btn.num:hover { background: #3d3d55; }
.btn.func {
  background: #3d3d55;
  color: #8B1AC8;
}
.btn.func:hover { background: #4d4d66; }
.btn.op {
  background: #0046C8;
  color: white;
}
.btn.op:hover { background: #0055ee; }
.btn.op.active { background: white; color: #0046C8; }
.btn.equals {
  background: #27ae60;
  color: white;
}
.btn.equals:hover { background: #2ecc71; }
.btn.zero {
  grid-column: span 2;
  width: 100%;
  border-radius: 30px;
  justify-content: flex-start;
  padding-left: 24px;
}`,js:`var display = document.getElementById('display');
var expression = document.getElementById('expression');
var current = '0';
var prev = '';
var operator = '';
var shouldReset = false;

function updateDisplay() {
  display.textContent = current.length > 12 ? parseFloat(current).toExponential(6) : current;
}

function inputNumber(val) {
  if (shouldReset) { current = ''; shouldReset = false; }
  if (val === '.' && current.includes('.')) return;
  if (current === '0' && val !== '.') current = val;
  else current += val;
  updateDisplay();
}

function setOperator(op) {
  if (operator && !shouldReset) calculate();
  prev = current;
  operator = op;
  shouldReset = true;
  var opSymbol = { add:'+', subtract:'-', multiply:'x', divide:'/' };
  expression.textContent = prev + ' ' + (opSymbol[op] || '');
  // Highlight active operator
  document.querySelectorAll('.btn.op').forEach(function(b) { b.classList.remove('active'); });
  var activeBtn = document.querySelector('[data-action="' + op + '"]');
  if (activeBtn) activeBtn.classList.add('active');
}

function calculate() {
  if (!operator || !prev) return;
  var a = parseFloat(prev);
  var b = parseFloat(current);
  var result;
  switch (operator) {
    case 'add': result = a + b; break;
    case 'subtract': result = a - b; break;
    case 'multiply': result = a * b; break;
    case 'divide': result = b === 0 ? 'Error' : a / b; break;
  }
  var opSymbol = { add:'+', subtract:'-', multiply:'x', divide:'/' };
  expression.textContent = prev + ' ' + opSymbol[operator] + ' ' + current + ' =';
  current = result === 'Error' ? 'Error' : String(parseFloat(result.toFixed(10)));
  operator = '';
  prev = '';
  shouldReset = true;
  updateDisplay();
  document.querySelectorAll('.btn.op').forEach(function(b) { b.classList.remove('active'); });
}

// Button clicks
document.querySelectorAll('.btn.num').forEach(function(btn) {
  btn.addEventListener('click', function() { inputNumber(btn.getAttribute('data-val')); });
});
document.querySelectorAll('.btn.op').forEach(function(btn) {
  btn.addEventListener('click', function() { setOperator(btn.getAttribute('data-action')); });
});
document.querySelector('[data-action="equals"]').addEventListener('click', calculate);
document.querySelector('[data-action="clear"]').addEventListener('click', function() {
  current = '0'; prev = ''; operator = ''; shouldReset = false;
  expression.textContent = '';
  updateDisplay();
  document.querySelectorAll('.btn.op').forEach(function(b) { b.classList.remove('active'); });
});
document.querySelector('[data-action="sign"]').addEventListener('click', function() {
  if (current !== '0' && current !== 'Error') {
    current = String(-parseFloat(current));
    updateDisplay();
  }
});
document.querySelector('[data-action="percent"]').addEventListener('click', function() {
  current = String(parseFloat(current) / 100);
  updateDisplay();
});

// Keyboard support
document.addEventListener('keydown', function(e) {
  if (e.key >= '0' && e.key <= '9') inputNumber(e.key);
  else if (e.key === '.') inputNumber('.');
  else if (e.key === '+') setOperator('add');
  else if (e.key === '-') setOperator('subtract');
  else if (e.key === '*') setOperator('multiply');
  else if (e.key === '/') { e.preventDefault(); setOperator('divide'); }
  else if (e.key === 'Enter' || e.key === '=') calculate();
  else if (e.key === 'Escape') {
    current = '0'; prev = ''; operator = ''; shouldReset = false;
    expression.textContent = '';
    updateDisplay();
  } else if (e.key === 'Backspace') {
    current = current.slice(0, -1) || '0';
    updateDisplay();
  }
});`},solutionExplanation:`CSS Grid로 계산기 버튼 레이아웃을 만들고, 상태 변수(current, prev, operator)로 계산 로직을 관리합니다. 키보드 이벤트로 물리 키보드 입력도 지원합니다.`,solutionExplanationEn:`Created calculator button layout with CSS Grid, managed calculation logic with state variables (current, prev, operator). Supports physical keyboard input via keydown events.`},{id:`practical-p07`,number:7,title:`이커머스 상품 페이지`,titleEn:`E-Commerce Product Page`,category:`practical`,topic:`html`,difficulty:`practical`,description:`상품 이미지, 가격, 옵션 선택, 수량 조절, 장바구니 추가 기능이 있는 이커머스 상품 상세 페이지를 만드세요.`,descriptionEn:`Create an e-commerce product detail page with product image, price, option selection, quantity control, and add-to-cart functionality.`,hint:`옵션 선택에 따라 가격이 변경되도록 구현하세요.`,hintEn:`Implement price changes based on option selection.`,solution:{html:`<div class="product-page">
  <div class="product-layout">
    <div class="product-gallery">
      <div class="main-image" id="mainImage" style="background:#e8f0fe">
        <div class="badge">NEW</div>
      </div>
      <div class="thumb-list">
        <div class="thumb active" data-color="#e8f0fe" style="background:#e8f0fe"></div>
        <div class="thumb" data-color="#fde8e8" style="background:#fde8e8"></div>
        <div class="thumb" data-color="#e8ffe8" style="background:#e8ffe8"></div>
        <div class="thumb" data-color="#f0e8ff" style="background:#f0e8ff"></div>
      </div>
    </div>
    <div class="product-info">
      <div class="brand">DreamIT Store</div>
      <h1>프리미엄 웹 개발 강의</h1>
      <div class="rating">&#9733;&#9733;&#9733;&#9733;&#9734; <span>(128 리뷰)</span></div>
      <div class="price-area">
        <span class="original-price">₩199,000</span>
        <span class="sale-price" id="salePrice">₩149,000</span>
        <span class="discount">25% OFF</span>
      </div>
      <div class="option-group">
        <label>패키지 선택</label>
        <select id="packageSelect">
          <option value="0">기본 (프론트엔드) - ₩149,000</option>
          <option value="50000">프로 (프론트+백엔드) - ₩199,000</option>
          <option value="100000">올인원 (풀스택) - ₩249,000</option>
        </select>
      </div>
      <div class="option-group">
        <label>수량</label>
        <div class="qty-control">
          <button id="qtyDown">-</button>
          <span id="qty">1</span>
          <button id="qtyUp">+</button>
        </div>
      </div>
      <div class="total-area">
        <span>총 금액:</span>
        <strong id="totalPrice">₩149,000</strong>
      </div>
      <div class="action-btns">
        <button class="cart-btn" id="cartBtn">장바구니 담기</button>
        <button class="buy-btn" id="buyBtn">바로 구매</button>
      </div>
      <div class="features">
        <div class="feature">&#10003; 평생 수강</div>
        <div class="feature">&#10003; 수료증 발급</div>
        <div class="feature">&#10003; 질의응답 지원</div>
      </div>
    </div>
  </div>
  <div class="toast" id="toast">장바구니에 추가되었습니다!</div>
</div>`,css:`.product-page {
  max-width: 800px;
  margin: 20px auto;
  padding: 24px;
  font-family: sans-serif;
}
.product-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
.main-image {
  height: 350px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  position: relative;
  transition: background 0.3s;
}
.badge {
  position: absolute; top: 16px; left: 16px;
  background: #e74c3c; color: white;
  padding: 4px 12px; border-radius: 4px;
  font-size: 12px; font-weight: 700;
}
.thumb-list { display: flex; gap: 8px; margin-top: 12px; }
.thumb {
  width: 60px; height: 60px; border-radius: 8px;
  cursor: pointer; border: 3px solid transparent;
  transition: border-color 0.2s;
}
.thumb.active { border-color: #0046C8; }
.thumb:hover { border-color: #999; }
.product-info { display: flex; flex-direction: column; gap: 12px; }
.brand { color: #0046C8; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
.product-info h1 { margin: 0; font-size: 1.6rem; color: #333; }
.rating { color: #f39c12; font-size: 15px; }
.rating span { color: #999; font-size: 13px; }
.price-area { display: flex; align-items: center; gap: 12px; }
.original-price { text-decoration: line-through; color: #999; font-size: 14px; }
.sale-price { font-size: 1.6rem; font-weight: 700; color: #e74c3c; }
.discount {
  background: #fde8e8; color: #e74c3c;
  padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;
}
.option-group label { display: block; font-weight: 600; color: #333; margin-bottom: 6px; font-size: 14px; }
.option-group select {
  width: 100%; padding: 10px; border: 2px solid #e0e0e0;
  border-radius: 8px; font-size: 14px; background: white;
}
.qty-control {
  display: flex; align-items: center; gap: 0;
  border: 2px solid #e0e0e0; border-radius: 8px; display: inline-flex;
}
.qty-control button {
  width: 36px; height: 36px; border: none; background: #f0f0f0;
  cursor: pointer; font-size: 18px; font-weight: 600;
}
.qty-control button:first-child { border-radius: 6px 0 0 6px; }
.qty-control button:last-child { border-radius: 0 6px 6px 0; }
.qty-control span {
  width: 48px; text-align: center; font-weight: 600;
  font-size: 16px; line-height: 36px;
}
.total-area {
  display: flex; justify-content: space-between; align-items: center;
  padding: 16px; background: #f8f9fa; border-radius: 8px;
}
.total-area strong { font-size: 1.4rem; color: #0046C8; }
.action-btns { display: flex; gap: 8px; }
.cart-btn {
  flex: 1; padding: 14px; border: 2px solid #0046C8;
  background: transparent; color: #0046C8;
  border-radius: 10px; font-weight: 600; cursor: pointer; font-size: 15px;
}
.buy-btn {
  flex: 1; padding: 14px; border: none;
  background: #0046C8; color: white;
  border-radius: 10px; font-weight: 600; cursor: pointer; font-size: 15px;
}
.features { display: flex; gap: 16px; flex-wrap: wrap; }
.feature { font-size: 13px; color: #27ae60; }
.toast {
  position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%) translateY(100px);
  background: #333; color: white; padding: 12px 24px;
  border-radius: 8px; font-size: 14px; transition: transform 0.3s;
}
.toast.show { transform: translateX(-50%) translateY(0); }`,js:`var basePrice = 149000;
var qty = 1;
var extra = 0;

function formatPrice(n) {
  return '\\u20A9' + n.toLocaleString();
}

function updateTotal() {
  var total = (basePrice + extra) * qty;
  document.getElementById('totalPrice').textContent = formatPrice(total);
  document.getElementById('salePrice').textContent = formatPrice(basePrice + extra);
}

document.getElementById('qtyUp').addEventListener('click', function() {
  qty = Math.min(qty + 1, 10);
  document.getElementById('qty').textContent = qty;
  updateTotal();
});

document.getElementById('qtyDown').addEventListener('click', function() {
  qty = Math.max(qty - 1, 1);
  document.getElementById('qty').textContent = qty;
  updateTotal();
});

document.getElementById('packageSelect').addEventListener('change', function(e) {
  extra = parseInt(e.target.value);
  updateTotal();
});

// Thumbnail clicks
document.querySelectorAll('.thumb').forEach(function(thumb) {
  thumb.addEventListener('click', function() {
    document.querySelectorAll('.thumb').forEach(function(t) { t.classList.remove('active'); });
    thumb.classList.add('active');
    document.getElementById('mainImage').style.background = thumb.getAttribute('data-color');
  });
});

// Toast notification
function showToast(msg) {
  var toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, 2500);
}

document.getElementById('cartBtn').addEventListener('click', function() {
  showToast('장바구니에 ' + qty + '개 추가되었습니다!');
});
document.getElementById('buyBtn').addEventListener('click', function() {
  showToast('구매 페이지로 이동합니다...');
});`},solutionExplanation:`옵션 선택과 수량에 따라 총 금액을 동적으로 계산하고, 썸네일 클릭으로 메인 이미지를 변경합니다. Toast 알림으로 사용자 피드백을 제공합니다.`,solutionExplanationEn:`Dynamically calculates total based on options and quantity, changes main image on thumbnail click. Provides user feedback with toast notifications.`},{id:`practical-p08`,number:8,title:`API 대시보드`,titleEn:`API Dashboard`,category:`practical`,topic:`javascript`,difficulty:`practical`,description:`여러 API 엔드포인트의 상태를 모니터링하는 대시보드를 만드세요. 상태 표시, 응답 시간, 자동 새로고침 기능을 포함하세요.`,descriptionEn:`Create a dashboard monitoring multiple API endpoint statuses. Include status indicators, response times, and auto-refresh functionality.`,hint:`시뮬레이션 데이터를 사용하여 실시간 모니터링 UI를 구현하세요.`,hintEn:`Implement real-time monitoring UI using simulated data.`,solution:{html:`<div class="api-dash">
  <div class="dash-header">
    <h2>API 모니터링 대시보드</h2>
    <div class="header-right">
      <span class="last-update" id="lastUpdate">-</span>
      <button id="refreshBtn" class="refresh-btn">새로고침</button>
      <label class="auto-label"><input type="checkbox" id="autoRefresh"> 자동 (5s)</label>
    </div>
  </div>
  <div class="stats-row" id="statsRow">
    <div class="stat-card"><div class="stat-value" id="totalApis">0</div><div class="stat-label">전체 API</div></div>
    <div class="stat-card up"><div class="stat-value" id="upCount">0</div><div class="stat-label">정상</div></div>
    <div class="stat-card down"><div class="stat-value" id="downCount">0</div><div class="stat-label">장애</div></div>
    <div class="stat-card avg"><div class="stat-value" id="avgTime">0ms</div><div class="stat-label">평균 응답</div></div>
  </div>
  <div class="api-list" id="apiList"></div>
</div>`,css:`.api-dash {
  max-width: 700px;
  margin: 20px auto;
  padding: 24px;
  font-family: sans-serif;
}
.dash-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 20px; flex-wrap: wrap; gap: 12px;
}
.dash-header h2 { color: #0046C8; margin: 0; }
.header-right { display: flex; align-items: center; gap: 12px; }
.last-update { font-size: 12px; color: #999; }
.refresh-btn {
  padding: 6px 16px; background: #0046C8; color: white;
  border: none; border-radius: 6px; cursor: pointer; font-size: 13px;
}
.auto-label { font-size: 13px; color: #666; display: flex; align-items: center; gap: 4px; }
.stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 20px; }
.stat-card {
  padding: 16px; background: white; border-radius: 10px;
  text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.stat-card .stat-value { font-size: 1.8rem; font-weight: 700; color: #333; }
.stat-card.up .stat-value { color: #27ae60; }
.stat-card.down .stat-value { color: #e74c3c; }
.stat-card.avg .stat-value { color: #0046C8; }
.stat-card .stat-label { font-size: 12px; color: #999; margin-top: 4px; }
.api-list { display: flex; flex-direction: column; gap: 8px; }
.api-item {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 16px; background: white; border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04); transition: all 0.2s;
}
.api-item:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
.status-dot {
  width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0;
}
.status-dot.up { background: #27ae60; }
.status-dot.down { background: #e74c3c; }
.status-dot.slow { background: #f39c12; }
.api-name { flex: 1; font-weight: 600; color: #333; font-size: 14px; }
.api-url { font-size: 12px; color: #999; font-family: monospace; flex: 2; }
.api-time {
  font-size: 13px; font-weight: 600; padding: 4px 10px;
  border-radius: 6px; min-width: 60px; text-align: center;
}
.api-time.fast { background: #e8ffe8; color: #27ae60; }
.api-time.normal { background: #fff3cd; color: #856404; }
.api-time.slow { background: #fde8e8; color: #e74c3c; }
.api-status {
  font-size: 12px; font-weight: 600; padding: 4px 10px;
  border-radius: 6px;
}
.api-status.up { background: #e8ffe8; color: #27ae60; }
.api-status.down { background: #fde8e8; color: #e74c3c; }`,js:`var endpoints = [
  { name: 'User API', url: '/api/v1/users', baseTime: 45 },
  { name: 'Auth API', url: '/api/v1/auth/login', baseTime: 120 },
  { name: 'Products API', url: '/api/v1/products', baseTime: 80 },
  { name: 'Orders API', url: '/api/v1/orders', baseTime: 150 },
  { name: 'Payments API', url: '/api/v1/payments', baseTime: 200 },
  { name: 'Search API', url: '/api/v1/search', baseTime: 95 },
  { name: 'Notifications', url: '/api/v1/notifications', baseTime: 60 },
  { name: 'Analytics API', url: '/api/v1/analytics', baseTime: 300 }
];

var autoTimer = null;

function simulate() {
  return endpoints.map(function(ep) {
    var isDown = Math.random() < 0.1; // 10% chance of failure
    var jitter = Math.floor(Math.random() * ep.baseTime * 0.5);
    var responseTime = isDown ? 0 : ep.baseTime + jitter;
    return {
      name: ep.name,
      url: ep.url,
      status: isDown ? 'down' : 'up',
      responseTime: responseTime
    };
  });
}

function render(data) {
  var up = data.filter(function(d) { return d.status === 'up'; }).length;
  var down = data.length - up;
  var avgTime = Math.round(data.filter(function(d) { return d.status === 'up'; }).reduce(function(s, d) { return s + d.responseTime; }, 0) / (up || 1));

  document.getElementById('totalApis').textContent = data.length;
  document.getElementById('upCount').textContent = up;
  document.getElementById('downCount').textContent = down;
  document.getElementById('avgTime').textContent = avgTime + 'ms';
  document.getElementById('lastUpdate').textContent = new Date().toLocaleTimeString();

  var list = document.getElementById('apiList');
  list.innerHTML = data.map(function(d) {
    var timeClass = d.status === 'down' ? 'slow' : d.responseTime < 100 ? 'fast' : d.responseTime < 200 ? 'normal' : 'slow';
    var dotClass = d.status === 'down' ? 'down' : d.responseTime > 250 ? 'slow' : 'up';
    return '<div class="api-item">' +
      '<div class="status-dot ' + dotClass + '"></div>' +
      '<span class="api-name">' + d.name + '</span>' +
      '<span class="api-url">' + d.url + '</span>' +
      '<span class="api-time ' + timeClass + '">' + (d.status === 'down' ? 'N/A' : d.responseTime + 'ms') + '</span>' +
      '<span class="api-status ' + d.status + '">' + (d.status === 'up' ? 'UP' : 'DOWN') + '</span>' +
      '</div>';
  }).join('');
}

function refresh() {
  render(simulate());
}

document.getElementById('refreshBtn').addEventListener('click', refresh);

document.getElementById('autoRefresh').addEventListener('change', function(e) {
  if (e.target.checked) {
    autoTimer = setInterval(refresh, 5000);
  } else {
    clearInterval(autoTimer);
    autoTimer = null;
  }
});

refresh();`},solutionExplanation:`시뮬레이션 데이터로 API 상태를 모니터링하는 대시보드입니다. 통계 카드, 상태 인디케이터, 응답 시간 표시, 자동 새로고침을 포함합니다.`,solutionExplanationEn:`Dashboard monitoring API status with simulated data. Includes stats cards, status indicators, response time display, and auto-refresh.`},{id:`practical-p09`,number:9,title:`소셜 미디어 피드`,titleEn:`Social Media Feed`,category:`practical`,topic:`javascript`,difficulty:`practical`,description:`프로필 이미지, 게시물 텍스트, 좋아요/댓글 기능, 게시물 작성이 포함된 소셜 미디어 피드 UI를 만드세요.`,descriptionEn:`Create a social media feed UI with profile images, post text, like/comment functionality, and post creation.`,hint:`게시물 데이터를 배열로 관리하고 좋아요/댓글 상태를 토글하세요.`,hintEn:`Manage post data as an array and toggle like/comment states.`,solution:{html:`<div class="social-feed">
  <div class="compose-box">
    <div class="compose-header">
      <div class="avatar" style="background:#0046C8">나</div>
      <textarea id="newPost" placeholder="무슨 생각을 하고 계신가요?"></textarea>
    </div>
    <div class="compose-footer">
      <button id="postBtn" class="post-btn">게시하기</button>
    </div>
  </div>
  <div id="feed" class="feed-list"></div>
</div>`,css:`.social-feed {
  max-width: 500px;
  margin: 20px auto;
  font-family: sans-serif;
}
.compose-box {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  margin-bottom: 16px;
}
.compose-header { display: flex; gap: 12px; margin-bottom: 12px; }
.compose-header textarea {
  flex: 1; border: none; resize: none; font-size: 15px;
  line-height: 1.5; min-height: 60px; padding: 8px;
}
.compose-header textarea:focus { outline: none; }
.compose-footer { display: flex; justify-content: flex-end; }
.post-btn {
  padding: 8px 24px; background: #0046C8; color: white;
  border: none; border-radius: 8px; cursor: pointer; font-weight: 600;
}
.post-btn:disabled { background: #ccc; }
.avatar {
  width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: white; font-weight: 700; font-size: 14px; flex-shrink: 0;
}
.feed-list { display: flex; flex-direction: column; gap: 12px; }
.post-card {
  background: white; border-radius: 12px; overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06); animation: fadeUp 0.3s ease;
}
@keyframes fadeUp { from { opacity:0; transform:translateY(12px); } }
.post-header {
  display: flex; align-items: center; gap: 10px; padding: 14px 16px;
}
.post-author { font-weight: 600; color: #333; font-size: 14px; }
.post-time { font-size: 12px; color: #999; }
.post-body { padding: 0 16px 14px; color: #444; line-height: 1.6; font-size: 15px; white-space: pre-wrap; }
.post-actions {
  display: flex; border-top: 1px solid #f0f0f0;
}
.action-btn {
  flex: 1; padding: 10px; border: none; background: transparent;
  cursor: pointer; font-size: 14px; color: #666;
  display: flex; align-items: center; justify-content: center; gap: 6px;
  transition: background 0.2s;
}
.action-btn:hover { background: #f8f9fa; }
.action-btn.liked { color: #e74c3c; font-weight: 600; }
.comments-area {
  border-top: 1px solid #f0f0f0; padding: 12px 16px;
  display: none;
}
.comments-area.open { display: block; }
.comment {
  display: flex; gap: 8px; margin-bottom: 10px;
}
.comment .avatar { width: 28px; height: 28px; font-size: 11px; }
.comment-body {
  background: #f0f2f5; padding: 8px 12px; border-radius: 12px;
  font-size: 13px; color: #333; line-height: 1.4;
}
.comment-body strong { font-size: 12px; }
.comment-input {
  display: flex; gap: 8px; margin-top: 8px;
}
.comment-input input {
  flex: 1; padding: 8px 12px; border: 1px solid #e0e0e0;
  border-radius: 20px; font-size: 13px;
}
.comment-input input:focus { outline: none; border-color: #0046C8; }
.comment-input button {
  padding: 6px 14px; background: #0046C8; color: white;
  border: none; border-radius: 20px; cursor: pointer; font-size: 12px;
}`,js:`var posts = [
  { id: 1, author: '김민수', avatar: '#0046C8', initial: 'M', text: '오늘 React 19의 새로운 기능을 테스트해봤는데, Server Components가 정말 혁신적이네요!', time: '2시간 전', likes: 12, liked: false, comments: [{ author: '이지은', initial: 'J', color: '#8B1AC8', text: '저도 궁금했어요! 어떤 부분이 가장 좋았나요?' }] },
  { id: 2, author: '박서연', avatar: '#00855A', initial: 'S', text: 'CSS Container Queries를 실무에 적용해봤습니다.\\n반응형 컴포넌트 개발이 훨씬 편해졌어요!', time: '5시간 전', likes: 8, liked: false, comments: [] },
  { id: 3, author: '이지은', avatar: '#8B1AC8', initial: 'J', text: 'TypeScript 5.8의 새로운 타입 추론 기능이 엄청납니다. 코드가 훨씬 깔끔해졌어요.', time: '1일 전', likes: 24, liked: true, comments: [{ author: '김민수', initial: 'M', color: '#0046C8', text: '동의합니다! satisfies 연산자도 정말 유용해요.' }] }
];
var nextId = 4;

function renderFeed() {
  var feed = document.getElementById('feed');
  feed.innerHTML = posts.map(function(post) {
    var commentsHtml = post.comments.map(function(c) {
      return '<div class="comment"><div class="avatar" style="background:' + c.color + '">' + c.initial + '</div><div class="comment-body"><strong>' + c.author + '</strong><br>' + c.text + '</div></div>';
    }).join('');

    return '<div class="post-card" data-id="' + post.id + '">' +
      '<div class="post-header">' +
      '<div class="avatar" style="background:' + post.avatar + '">' + post.initial + '</div>' +
      '<div><div class="post-author">' + post.author + '</div><div class="post-time">' + post.time + '</div></div>' +
      '</div>' +
      '<div class="post-body">' + post.text + '</div>' +
      '<div class="post-actions">' +
      '<button class="action-btn like-btn' + (post.liked ? ' liked' : '') + '">' + (post.liked ? '&#10084;' : '&#9825;') + ' ' + post.likes + '</button>' +
      '<button class="action-btn comment-toggle-btn">&#128172; ' + post.comments.length + '</button>' +
      '</div>' +
      '<div class="comments-area">' + commentsHtml +
      '<div class="comment-input"><input type="text" placeholder="댓글 작성..."><button class="add-comment-btn">게시</button></div>' +
      '</div></div>';
  }).join('');

  // Bind events
  feed.querySelectorAll('.post-card').forEach(function(card) {
    var id = parseInt(card.getAttribute('data-id'));
    var post = posts.find(function(p) { return p.id === id; });

    card.querySelector('.like-btn').addEventListener('click', function() {
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
      renderFeed();
    });

    card.querySelector('.comment-toggle-btn').addEventListener('click', function() {
      card.querySelector('.comments-area').classList.toggle('open');
    });

    card.querySelector('.add-comment-btn').addEventListener('click', function() {
      var input = card.querySelector('.comment-input input');
      var text = input.value.trim();
      if (!text) return;
      post.comments.push({ author: '나', initial: '나', color: '#C87200', text: text });
      input.value = '';
      renderFeed();
      // Re-open comments
      var newCard = document.querySelector('[data-id="' + id + '"]');
      newCard.querySelector('.comments-area').classList.add('open');
    });
  });
}

// New post
document.getElementById('postBtn').addEventListener('click', function() {
  var textarea = document.getElementById('newPost');
  var text = textarea.value.trim();
  if (!text) return;
  posts.unshift({
    id: nextId++, author: '나', avatar: '#C87200', initial: '나',
    text: text, time: '방금 전', likes: 0, liked: false, comments: []
  });
  textarea.value = '';
  renderFeed();
});

renderFeed();`},solutionExplanation:`게시물 배열을 기반으로 피드를 렌더링하고, 좋아요 토글/댓글 추가/새 게시물 작성 기능을 구현합니다. 이벤트 바인딩으로 각 게시물에 독립적인 상호작용을 제공합니다.`,solutionExplanationEn:`Renders feed from posts array with like toggle, comment add, and new post creation. Event binding provides independent interaction per post.`},{id:`practical-p10`,number:10,title:`풀스택 미니 프로젝트`,titleEn:`Full-Stack Mini Project`,category:`practical`,topic:`backend`,difficulty:`practical`,description:`프론트엔드(UI) + 백엔드(시뮬레이션 API) + 데이터 저장(localStorage)을 결합한 회원 관리 시스템을 만드세요. CRUD 기능, 검색, 페이지네이션을 포함하세요.`,descriptionEn:`Create a member management system combining frontend (UI) + backend (simulated API) + data storage (localStorage). Include CRUD, search, and pagination.`,hint:`Promise를 사용하여 API 호출을 시뮬레이션하세요.`,hintEn:`Use Promises to simulate API calls.`,solution:{html:`<div class="fullstack-app">
  <header class="app-header">
    <h2>회원 관리 시스템</h2>
    <button id="addMemberBtn" class="add-btn">+ 회원 추가</button>
  </header>
  <div class="toolbar">
    <input type="text" id="searchInput" placeholder="이름 또는 이메일 검색...">
    <select id="roleFilter">
      <option value="">전체 역할</option>
      <option value="admin">관리자</option>
      <option value="member">회원</option>
      <option value="guest">게스트</option>
    </select>
  </div>
  <div class="api-status" id="apiStatus"></div>
  <table class="member-table">
    <thead>
      <tr><th>이름</th><th>이메일</th><th>역할</th><th>가입일</th><th>관리</th></tr>
    </thead>
    <tbody id="tableBody"></tbody>
  </table>
  <div class="pagination" id="pagination"></div>

  <div class="modal-overlay" id="modal">
    <div class="modal-box">
      <h3 id="modalTitle">회원 추가</h3>
      <input type="text" id="mName" placeholder="이름">
      <input type="email" id="mEmail" placeholder="이메일">
      <select id="mRole">
        <option value="member">회원</option>
        <option value="admin">관리자</option>
        <option value="guest">게스트</option>
      </select>
      <div class="modal-actions">
        <button id="modalCancel" class="cancel-btn">취소</button>
        <button id="modalSave" class="save-btn">저장</button>
      </div>
    </div>
  </div>
</div>`,css:`.fullstack-app {
  max-width: 700px;
  margin: 20px auto;
  padding: 24px;
  font-family: sans-serif;
}
.app-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 16px;
}
.app-header h2 { color: #0046C8; margin: 0; }
.add-btn {
  padding: 10px 20px; background: #0046C8; color: white;
  border: none; border-radius: 8px; cursor: pointer; font-weight: 600;
}
.toolbar {
  display: flex; gap: 12px; margin-bottom: 12px;
}
.toolbar input {
  flex: 1; padding: 10px; border: 2px solid #e0e0e0;
  border-radius: 8px; font-size: 14px;
}
.toolbar input:focus { outline: none; border-color: #0046C8; }
.toolbar select {
  padding: 10px; border: 2px solid #e0e0e0; border-radius: 8px;
  background: white; font-size: 14px;
}
.api-status {
  font-size: 12px; padding: 6px 12px; border-radius: 6px;
  margin-bottom: 12px; display: none;
}
.api-status.loading { display: block; background: #fff3cd; color: #856404; }
.api-status.success { display: block; background: #e8ffe8; color: #27ae60; }
.api-status.error { display: block; background: #fde8e8; color: #e74c3c; }
.member-table {
  width: 100%; border-collapse: collapse;
  background: white; border-radius: 10px; overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.member-table th {
  background: #f8f9fa; padding: 12px 14px; text-align: left;
  font-size: 13px; color: #666; font-weight: 600;
}
.member-table td {
  padding: 12px 14px; border-top: 1px solid #f0f0f0;
  font-size: 14px; color: #333;
}
.member-table tr:hover td { background: #f8f9fa; }
.role-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 12px; font-weight: 600;
}
.role-admin { background: #e8f0fe; color: #0046C8; }
.role-member { background: #e8ffe8; color: #27ae60; }
.role-guest { background: #f0f0f0; color: #888; }
.action-btns { display: flex; gap: 4px; }
.action-btns button {
  padding: 4px 10px; border: none; border-radius: 4px;
  cursor: pointer; font-size: 12px;
}
.edit-btn { background: #e8f0fe; color: #0046C8; }
.del-btn { background: #fde8e8; color: #e74c3c; }
.pagination {
  display: flex; justify-content: center; gap: 4px; margin-top: 16px;
}
.page-btn {
  width: 32px; height: 32px; border: 1px solid #e0e0e0;
  background: white; border-radius: 6px; cursor: pointer;
  font-size: 13px; display: flex; align-items: center; justify-content: center;
}
.page-btn.active { background: #0046C8; color: white; border-color: #0046C8; }
.modal-overlay {
  display: none; position: fixed; top: 0; left: 0;
  width: 100%; height: 100%; background: rgba(0,0,0,0.4);
  justify-content: center; align-items: center; z-index: 100;
}
.modal-overlay.open { display: flex; }
.modal-box {
  background: white; border-radius: 16px; padding: 24px;
  width: 90%; max-width: 400px;
}
.modal-box h3 { color: #0046C8; margin: 0 0 16px; }
.modal-box input, .modal-box select {
  width: 100%; padding: 10px; border: 2px solid #e0e0e0;
  border-radius: 8px; font-size: 14px; margin-bottom: 12px;
  box-sizing: border-box;
}
.modal-box input:focus { outline: none; border-color: #0046C8; }
.modal-actions { display: flex; gap: 8px; justify-content: flex-end; }
.cancel-btn {
  padding: 10px 20px; background: #f0f0f0; color: #666;
  border: none; border-radius: 8px; cursor: pointer;
}
.save-btn {
  padding: 10px 20px; background: #0046C8; color: white;
  border: none; border-radius: 8px; cursor: pointer; font-weight: 600;
}`,js:`// Simulated Backend API
var DB_KEY = 'members_db';
var PER_PAGE = 5;
var currentPage = 1;
var editingId = null;

function getDB() {
  return JSON.parse(localStorage.getItem(DB_KEY) || '[]');
}
function setDB(data) {
  localStorage.setItem(DB_KEY, JSON.stringify(data));
}

// Initialize sample data
if (getDB().length === 0) {
  setDB([
    { id: 1, name: '김민수', email: 'minsu@example.com', role: 'admin', date: '2026-01-15' },
    { id: 2, name: '이지은', email: 'jieun@example.com', role: 'member', date: '2026-02-20' },
    { id: 3, name: '박서연', email: 'seoyeon@example.com', role: 'member', date: '2026-03-05' },
    { id: 4, name: '정동엽', email: 'dongyeob@example.com', role: 'admin', date: '2026-03-10' },
    { id: 5, name: '최유진', email: 'yujin@example.com', role: 'guest', date: '2026-04-01' },
    { id: 6, name: '한소희', email: 'sohee@example.com', role: 'member', date: '2026-04-10' },
    { id: 7, name: '오세훈', email: 'sehoon@example.com', role: 'member', date: '2026-04-15' },
    { id: 8, name: '윤아름', email: 'areum@example.com', role: 'guest', date: '2026-04-20' }
  ]);
}

// Simulated API calls with Promise
function api(action, data) {
  showStatus('loading', action + ' 처리 중...');
  return new Promise(function(resolve) {
    setTimeout(function() {
      var db = getDB();
      var result;
      switch (action) {
        case 'list':
          result = db; break;
        case 'create':
          data.id = Date.now();
          data.date = new Date().toISOString().split('T')[0];
          db.push(data);
          setDB(db);
          result = data; break;
        case 'update':
          db = db.map(function(m) { return m.id === data.id ? Object.assign(m, data) : m; });
          setDB(db);
          result = data; break;
        case 'delete':
          db = db.filter(function(m) { return m.id !== data.id; });
          setDB(db);
          result = { deleted: true }; break;
      }
      showStatus('success', action + ' 완료');
      setTimeout(function() { hideStatus(); }, 1500);
      resolve(result);
    }, 300);
  });
}

function showStatus(type, msg) {
  var el = document.getElementById('apiStatus');
  el.className = 'api-status ' + type;
  el.textContent = msg;
}
function hideStatus() {
  document.getElementById('apiStatus').style.display = 'none';
}

// Render
function render() {
  api('list').then(function(members) {
    var query = document.getElementById('searchInput').value.toLowerCase();
    var role = document.getElementById('roleFilter').value;

    var filtered = members.filter(function(m) {
      var matchSearch = m.name.toLowerCase().includes(query) || m.email.toLowerCase().includes(query);
      var matchRole = !role || m.role === role;
      return matchSearch && matchRole;
    });

    // Pagination
    var totalPages = Math.ceil(filtered.length / PER_PAGE) || 1;
    if (currentPage > totalPages) currentPage = totalPages;
    var start = (currentPage - 1) * PER_PAGE;
    var pageData = filtered.slice(start, start + PER_PAGE);

    var tbody = document.getElementById('tableBody');
    tbody.innerHTML = pageData.length === 0
      ? '<tr><td colspan="5" style="text-align:center;color:#999;padding:40px">데이터가 없습니다.</td></tr>'
      : pageData.map(function(m) {
        return '<tr>' +
          '<td><strong>' + m.name + '</strong></td>' +
          '<td>' + m.email + '</td>' +
          '<td><span class="role-badge role-' + m.role + '">' + m.role + '</span></td>' +
          '<td>' + m.date + '</td>' +
          '<td><div class="action-btns">' +
          '<button class="edit-btn" data-id="' + m.id + '">수정</button>' +
          '<button class="del-btn" data-id="' + m.id + '">삭제</button>' +
          '</div></td></tr>';
      }).join('');

    // Pagination buttons
    var pag = document.getElementById('pagination');
    pag.innerHTML = '';
    for (var i = 1; i <= totalPages; i++) {
      var btn = document.createElement('button');
      btn.className = 'page-btn' + (i === currentPage ? ' active' : '');
      btn.textContent = i;
      btn.setAttribute('data-page', i);
      btn.addEventListener('click', function() {
        currentPage = parseInt(this.getAttribute('data-page'));
        render();
      });
      pag.appendChild(btn);
    }

    // Bind edit/delete
    tbody.querySelectorAll('.edit-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var id = parseInt(btn.getAttribute('data-id'));
        var member = members.find(function(m) { return m.id === id; });
        editingId = id;
        document.getElementById('modalTitle').textContent = '회원 수정';
        document.getElementById('mName').value = member.name;
        document.getElementById('mEmail').value = member.email;
        document.getElementById('mRole').value = member.role;
        document.getElementById('modal').classList.add('open');
      });
    });
    tbody.querySelectorAll('.del-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (confirm('삭제하시겠습니까?')) {
          api('delete', { id: parseInt(btn.getAttribute('data-id')) }).then(render);
        }
      });
    });
  });
}

// Modal
document.getElementById('addMemberBtn').addEventListener('click', function() {
  editingId = null;
  document.getElementById('modalTitle').textContent = '회원 추가';
  document.getElementById('mName').value = '';
  document.getElementById('mEmail').value = '';
  document.getElementById('mRole').value = 'member';
  document.getElementById('modal').classList.add('open');
});

document.getElementById('modalCancel').addEventListener('click', function() {
  document.getElementById('modal').classList.remove('open');
});

document.getElementById('modalSave').addEventListener('click', function() {
  var name = document.getElementById('mName').value.trim();
  var email = document.getElementById('mEmail').value.trim();
  var role = document.getElementById('mRole').value;
  if (!name || !email) return alert('이름과 이메일을 입력하세요.');

  var action = editingId ? 'update' : 'create';
  var data = { name: name, email: email, role: role };
  if (editingId) data.id = editingId;

  api(action, data).then(function() {
    document.getElementById('modal').classList.remove('open');
    render();
  });
});

// Search & Filter
document.getElementById('searchInput').addEventListener('input', function() { currentPage = 1; render(); });
document.getElementById('roleFilter').addEventListener('change', function() { currentPage = 1; render(); });

render();`},solutionExplanation:`Promise 기반 시뮬레이션 API로 CRUD 작업을 수행하고, localStorage를 데이터베이스로 사용합니다. 검색, 역할 필터, 페이지네이션을 포함한 완전한 관리 시스템입니다.`,solutionExplanationEn:`Performs CRUD via Promise-based simulated API with localStorage as database. A complete management system with search, role filter, and pagination.`}],i=[{id:`01-elements`,chapter:1,titleKey:`html01`,sections:[{title:`HTML이란?`,titleEn:`What is HTML?`,content:`HTML(HyperText Markup Language)은 웹 페이지의 구조를 정의하는 마크업 언어입니다. 웹 브라우저는 HTML 문서를 읽어 화면에 콘텐츠를 표시합니다. HTML은 태그(tag)를 사용하여 제목, 단락, 이미지, 링크 등 다양한 요소를 구성합니다.`,contentEn:`HTML (HyperText Markup Language) is a markup language that defines the structure of web pages. Web browsers read HTML documents and display content on screen. HTML uses tags to compose various elements such as headings, paragraphs, images, and links.`,code:`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>나의 첫 웹페이지</title>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>HTML을 배워봅시다.</p>
</body>
</html>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`HTML에서 문서의 제목을 정의하는 태그는?`,questionEn:`Which HTML tag defines the document title?`,options:[`<head>`,`<title>`,`<h1>`,`<meta>`],optionsEn:[`<head>`,`<title>`,`<h1>`,`<meta>`],correctIndex:1,explanation:`<title> 태그는 브라우저 탭에 표시되는 문서의 제목을 정의합니다.`,explanationEn:`The <title> tag defines the document title displayed in the browser tab.`}},{title:`기본 태그들`,titleEn:`Basic Tags`,content:`HTML의 가장 기본적인 태그들을 알아봅시다. <h1>~<h6>는 제목, <p>는 단락, <br>은 줄바꿈, <hr>은 수평선, <strong>은 굵게, <em>은 기울임을 나타냅니다.`,contentEn:`Let's learn the most basic HTML tags. <h1>~<h6> for headings, <p> for paragraphs, <br> for line breaks, <hr> for horizontal rules, <strong> for bold, and <em> for italics.`,code:`<h1>제목 1 (가장 큰 제목)</h1>
<h2>제목 2</h2>
<h3>제목 3</h3>
<p>이것은 <strong>굵은 텍스트</strong>와 <em>기울임 텍스트</em>입니다.</p>
<hr>
<p>수평선 아래의 단락입니다.<br>줄바꿈도 됩니다.</p>`,codeLanguage:`html`,livePreview:!0},{title:`링크와 이미지`,titleEn:`Links and Images`,content:`<a> 태그는 하이퍼링크를 만들고, <img> 태그는 이미지를 삽입합니다. href 속성은 링크 대상을, src 속성은 이미지 경로를, alt 속성은 대체 텍스트를 지정합니다.`,contentEn:`The <a> tag creates hyperlinks and the <img> tag inserts images. The href attribute specifies the link target, src specifies the image path, and alt specifies alternative text.`,code:`<a href="https://www.dreamitbiz.com" target="_blank">
  DreamIT Biz 방문하기
</a>

<img src="https://via.placeholder.com/300x200"
     alt="예시 이미지"
     width="300" height="200">

<a href="mailto:aebon@dreamitbiz.com">이메일 보내기</a>`,codeLanguage:`html`,livePreview:!0},{title:`실습 예제: 자기소개 카드`,titleEn:`Practice: Self-Introduction Card`,content:`지금까지 배운 제목·단락·링크·이미지를 모두 사용해 간단한 자기소개 카드를 만들어 봅니다. Preview로 결과를 확인하고, 이름·소개 문구·링크를 자유롭게 바꿔 보세요.`,contentEn:`Use everything you learned — headings, paragraphs, links, and images — to build a simple self-introduction card. Check the result in Preview and freely change the name, intro text, and links.`,code:`<div style="max-width:320px;border:1px solid #e5e7eb;border-radius:12px;padding:20px;font-family:sans-serif">
  <img src="https://picsum.photos/80" alt="프로필 사진"
       style="width:80px;height:80px;border-radius:50%">
  <h2>이애본</h2>
  <p><strong>웹 개발 학습자</strong> · 서울</p>
  <p>HTML을 배우며 첫 웹페이지를 만들고 있습니다. <em>꾸준함</em>이 무기!</p>
  <hr>
  <p>
    <a href="https://www.dreamitbiz.com" target="_blank">포트폴리오</a> ·
    <a href="mailto:aebon@dreamitbiz.com">이메일</a>
  </p>
</div>`,codeLanguage:`html`,livePreview:!0}]},{id:`02-forms`,chapter:2,titleKey:`html02`,sections:[{title:`폼(Form) 기초`,titleEn:`Form Basics`,content:`HTML 폼은 사용자로부터 데이터를 수집하는 데 사용됩니다. <form> 태그로 폼을 감싸고, <input>, <textarea>, <select> 등의 요소로 입력 필드를 구성합니다.`,contentEn:`HTML forms are used to collect data from users. Wrap the form with the <form> tag and compose input fields with <input>, <textarea>, <select> elements.`,code:`<form action="/submit" method="POST">
  <label for="name">이름:</label>
  <input type="text" id="name" name="name" placeholder="이름 입력">

  <label for="email">이메일:</label>
  <input type="email" id="email" name="email" placeholder="이메일 입력">

  <label for="msg">메시지:</label>
  <textarea id="msg" name="message" rows="4" placeholder="내용을 입력하세요"></textarea>

  <button type="submit">제출하기</button>
</form>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`사용자 이메일을 입력받기 위한 input type은?`,questionEn:`What input type is used for email input?`,options:[`text`,`email`,`mail`,`address`],optionsEn:[`text`,`email`,`mail`,`address`],correctIndex:1,explanation:`type="email"은 이메일 형식 검증을 자동으로 수행합니다.`,explanationEn:`type="email" automatically validates email format.`}},{title:`다양한 Input 타입`,titleEn:`Various Input Types`,content:`HTML5는 다양한 입력 타입을 제공합니다: text, password, number, date, color, range, checkbox, radio 등이 있습니다.`,contentEn:`HTML5 provides various input types: text, password, number, date, color, range, checkbox, radio, and more.`,code:`<form>
  <input type="text" placeholder="텍스트"><br>
  <input type="password" placeholder="비밀번호"><br>
  <input type="number" min="0" max="100" value="50"><br>
  <input type="date"><br>
  <input type="color" value="#0046C8"><br>
  <input type="range" min="0" max="100"><br>

  <label><input type="checkbox"> 동의합니다</label><br>
  <label><input type="radio" name="gender"> 남성</label>
  <label><input type="radio" name="gender"> 여성</label>
</form>`,codeLanguage:`html`,livePreview:!0},{title:`실습 예제: 만족도 설문 폼`,titleEn:`Practice: Satisfaction Survey Form`,content:`라디오 버튼, 체크박스, 셀렉트, 텍스트영역을 조합해 간단한 설문 폼을 만들어 봅니다. 각 입력에 label을 연결해 접근성을 지키는 것이 핵심입니다.`,contentEn:`Combine radio buttons, checkboxes, a select, and a textarea to build a simple survey form. The key is connecting a label to each input for accessibility.`,code:`<form style="max-width:360px;font-family:sans-serif;display:grid;gap:12px">
  <h3>강의 만족도 설문</h3>

  <fieldset>
    <legend>전반적인 만족도</legend>
    <label><input type="radio" name="sat" value="5"> 매우 만족</label><br>
    <label><input type="radio" name="sat" value="3"> 보통</label><br>
    <label><input type="radio" name="sat" value="1"> 불만족</label>
  </fieldset>

  <label for="topic">가장 유익한 주제</label>
  <select id="topic" name="topic">
    <option>HTML</option><option>CSS</option><option>JavaScript</option>
  </select>

  <label><input type="checkbox" name="recommend"> 지인에게 추천하겠습니다</label>

  <label for="comment">자유 의견</label>
  <textarea id="comment" rows="3" placeholder="의견을 남겨주세요"></textarea>

  <button type="submit">제출</button>
</form>`,codeLanguage:`html`,livePreview:!0}]},{id:`03-semantic`,chapter:3,titleKey:`html03`,sections:[{title:`시맨틱 HTML`,titleEn:`Semantic HTML`,content:`시맨틱 태그는 콘텐츠의 의미를 명확하게 전달합니다. <header>, <nav>, <main>, <section>, <article>, <aside>, <footer> 등을 사용하면 검색 엔진과 스크린 리더가 페이지 구조를 더 잘 이해할 수 있습니다.`,contentEn:`Semantic tags clearly convey the meaning of content. Using <header>, <nav>, <main>, <section>, <article>, <aside>, <footer> helps search engines and screen readers better understand page structure.`,code:`<header>
  <nav>
    <a href="/">홈</a>
    <a href="/about">소개</a>
    <a href="/contact">연락처</a>
  </nav>
</header>

<main>
  <article>
    <h2>블로그 포스트 제목</h2>
    <p>포스트 내용이 여기에 옵니다.</p>
  </article>

  <aside>
    <h3>관련 링크</h3>
    <ul>
      <li><a href="#">링크 1</a></li>
      <li><a href="#">링크 2</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2026 DreamIT Biz</p>
</footer>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`페이지의 주요 콘텐츠를 감싸는 시맨틱 태그는?`,questionEn:`Which semantic tag wraps the main content of a page?`,options:[`<div>`,`<section>`,`<main>`,`<article>`],optionsEn:[`<div>`,`<section>`,`<main>`,`<article>`],correctIndex:2,explanation:`<main> 태그는 문서의 주요 콘텐츠를 나타내며, 페이지당 하나만 사용합니다.`,explanationEn:`The <main> tag represents the main content of the document and should be used only once per page.`}},{title:`리스트와 테이블`,titleEn:`Lists and Tables`,content:`순서 있는 목록은 <ol>, 순서 없는 목록은 <ul>, 정의 목록은 <dl>을 사용합니다. 테이블은 <table>, <thead>, <tbody>, <tr>, <th>, <td> 태그로 구성합니다.`,contentEn:`Use <ol> for ordered lists, <ul> for unordered lists, and <dl> for definition lists. Tables are composed of <table>, <thead>, <tbody>, <tr>, <th>, <td> tags.`,code:`<h3>순서 없는 목록</h3>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h3>순서 있는 목록</h3>
<ol>
  <li>기초 배우기</li>
  <li>프로젝트 만들기</li>
  <li>배포하기</li>
</ol>

<h3>성적표</h3>
<table border="1" cellpadding="8">
  <thead>
    <tr><th>과목</th><th>점수</th></tr>
  </thead>
  <tbody>
    <tr><td>HTML</td><td>95</td></tr>
    <tr><td>CSS</td><td>88</td></tr>
    <tr><td>JavaScript</td><td>92</td></tr>
  </tbody>
</table>`,codeLanguage:`html`,livePreview:!0},{title:`실습 예제: 시맨틱 프로필 페이지`,titleEn:`Practice: Semantic Profile Page`,content:`시맨틱 태그(header·main·section·footer)와 리스트·테이블을 함께 사용해 작은 프로필 페이지를 구성해 봅니다. <div> 대신 의미 있는 태그를 쓰는 연습이 핵심입니다.`,contentEn:`Build a small profile page using semantic tags (header, main, section, footer) together with lists and a table. The key is practicing meaningful tags instead of <div>.`,code:`<article style="max-width:380px;font-family:sans-serif;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
  <header style="background:#0046C8;color:#fff;padding:16px">
    <h2 style="margin:0">이애본</h2>
    <p style="margin:4px 0 0">프론트엔드 학습자</p>
  </header>
  <main style="padding:16px">
    <section>
      <h3>보유 기술</h3>
      <ul>
        <li>HTML / CSS</li>
        <li>JavaScript</li>
      </ul>
    </section>
    <section>
      <h3>학습 현황</h3>
      <table border="1" cellpadding="6" style="border-collapse:collapse;width:100%">
        <thead><tr><th>토픽</th><th>진도</th></tr></thead>
        <tbody>
          <tr><td>HTML</td><td>100%</td></tr>
          <tr><td>CSS</td><td>60%</td></tr>
        </tbody>
      </table>
    </section>
  </main>
  <footer style="padding:12px 16px;color:#666;font-size:0.85rem">
    &copy; 2026 DreamIT Biz
  </footer>
</article>`,codeLanguage:`html`,livePreview:!0}]},{id:`04-media`,chapter:4,titleKey:`html04`,sections:[{title:`이미지와 figure`,titleEn:`Images and figure`,content:`<img>의 alt 속성은 접근성과 SEO에 중요합니다. <figure>와 <figcaption>으로 이미지에 설명을 붙이고, srcset/sizes로 화면 크기에 맞는 이미지를 제공해 반응형 이미지를 구현할 수 있습니다.`,contentEn:`The alt attribute of <img> is important for accessibility and SEO. Use <figure> and <figcaption> to caption images, and srcset/sizes to serve appropriately sized images for responsive design.`,code:`<figure style="margin:0;text-align:center">
  <img src="https://picsum.photos/320/180"
       alt="랜덤 풍경 사진"
       style="max-width:100%;border-radius:8px">
  <figcaption style="color:#666;font-size:0.85rem;margin-top:6px">
    그림 1. figcaption으로 붙인 이미지 설명
  </figcaption>
</figure>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`이미지에 설명(캡션)을 의미적으로 붙일 때 사용하는 태그는?`,questionEn:`Which tag semantically adds a caption to an image?`,options:[`<caption>`,`<figcaption>`,`<label>`,`<alt>`],optionsEn:[`<caption>`,`<figcaption>`,`<label>`,`<alt>`],correctIndex:1,explanation:`<figure> 안의 <figcaption>이 이미지/도표의 캡션을 의미적으로 표현합니다. <caption>은 표(table)용입니다.`,explanationEn:`<figcaption> inside <figure> semantically represents a caption for an image/diagram. <caption> is for tables.`}},{title:`오디오와 비디오`,titleEn:`Audio and Video`,content:`<audio>와 <video> 태그로 미디어를 삽입합니다. controls 속성으로 재생 컨트롤을 표시하고, 여러 <source>를 제공해 브라우저 호환성을 높입니다. poster, autoplay, loop, muted 등의 속성으로 동작을 제어합니다.`,contentEn:`Use <audio> and <video> tags to embed media. The controls attribute shows playback controls, and multiple <source> elements improve browser compatibility. Control behavior with poster, autoplay, loop, muted, and more.`,code:`<video controls width="320" poster="https://picsum.photos/320/180"
       style="border-radius:8px;max-width:100%">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  브라우저가 video 태그를 지원하지 않습니다.
</video>

<audio controls style="display:block;margin-top:12px;width:100%">
  <source src="audio.mp3" type="audio/mpeg">
</audio>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`<video>에 재생/정지 등 기본 컨트롤을 표시하는 속성은?`,questionEn:`Which attribute shows default playback controls on <video>?`,options:[`autoplay`,`controls`,`preload`,`poster`],optionsEn:[`autoplay`,`controls`,`preload`,`poster`],correctIndex:1,explanation:`controls 속성을 추가하면 브라우저 기본 재생 컨트롤(재생/정지/볼륨 등)이 표시됩니다.`,explanationEn:`Adding the controls attribute displays the browser's default playback controls (play/pause/volume, etc.).`}},{title:`iframe과 임베드`,titleEn:`iframe and Embedding`,content:`<iframe>은 다른 HTML 문서를 현재 페이지에 삽입합니다. YouTube 영상, 지도, 외부 위젯 등을 임베드할 때 사용합니다. 보안을 위해 sandbox 속성으로 권한을 제한하고, loading="lazy"로 성능을 개선할 수 있습니다.`,contentEn:`<iframe> embeds another HTML document into the current page. Use it to embed YouTube videos, maps, external widgets, and more. For security, restrict permissions with the sandbox attribute, and improve performance with loading="lazy".`,code:`<!-- YouTube 영상 임베드 -->
<iframe width="320" height="180"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video"
  loading="lazy"
  allowfullscreen
  style="border:0;border-radius:8px;max-width:100%">
</iframe>

<!-- 보안 제한이 걸린 iframe -->
<iframe src="widget.html"
  sandbox="allow-scripts allow-same-origin">
</iframe>`,codeLanguage:`html`,quiz:{question:`iframe의 권한을 제한해 보안을 강화하는 속성은?`,questionEn:`Which attribute restricts an iframe's permissions for security?`,options:[`secure`,`sandbox`,`restrict`,`safe`],optionsEn:[`secure`,`sandbox`,`restrict`,`safe`],correctIndex:1,explanation:`sandbox 속성은 iframe 내부의 스크립트 실행·폼 제출 등 기능을 기본 차단하고, allow-* 토큰으로 필요한 권한만 허용합니다.`,explanationEn:`The sandbox attribute blocks features like script execution and form submission inside the iframe by default, allowing only needed permissions via allow-* tokens.`}},{title:`실습 예제: 미디어 갤러리`,titleEn:`Practice: Media Gallery`,content:`figure와 figcaption으로 이미지 카드를 나열하고, video를 함께 배치해 작은 미디어 갤러리를 만들어 봅니다. 반응형으로 보이도록 max-width를 사용하는 점에 주목하세요.`,contentEn:`Lay out image cards with figure and figcaption and place a video alongside to build a small media gallery. Note the use of max-width so it stays responsive.`,code:`<div style="display:flex;gap:12px;flex-wrap:wrap;font-family:sans-serif">
  <figure style="margin:0;width:150px">
    <img src="https://picsum.photos/id/10/150/100" alt="자연 사진"
         style="width:100%;border-radius:8px">
    <figcaption style="font-size:0.8rem;color:#666">자연 풍경</figcaption>
  </figure>
  <figure style="margin:0;width:150px">
    <img src="https://picsum.photos/id/20/150/100" alt="도시 사진"
         style="width:100%;border-radius:8px">
    <figcaption style="font-size:0.8rem;color:#666">도시 야경</figcaption>
  </figure>
  <figure style="margin:0;width:150px">
    <video controls poster="https://picsum.photos/id/30/150/100"
           style="width:100%;border-radius:8px">
      <source src="clip.mp4" type="video/mp4">
    </video>
    <figcaption style="font-size:0.8rem;color:#666">소개 영상</figcaption>
  </figure>
</div>`,codeLanguage:`html`,livePreview:!0}]}],a=[{id:`01-selectors`,chapter:1,titleKey:`css01`,sections:[{title:`CSS란?`,titleEn:`What is CSS?`,content:`CSS(Cascading Style Sheets)는 HTML 문서의 시각적 표현을 정의하는 스타일시트 언어입니다. 색상, 폰트, 레이아웃, 애니메이션 등을 제어합니다. CSS는 세 가지 방법으로 적용할 수 있습니다: 인라인, 내부(style 태그), 외부(.css 파일).`,contentEn:`CSS (Cascading Style Sheets) is a stylesheet language that defines the visual presentation of HTML documents. It controls colors, fonts, layout, animations, and more. CSS can be applied in three ways: inline, internal (style tag), and external (.css file).`,code:`<style>
  h1 { color: #0046C8; font-size: 2rem; }
  p { color: #555; line-height: 1.6; }
  .highlight { background: #FFF3CD; padding: 8px 12px; border-radius: 4px; }
</style>

<h1>CSS 스타일링</h1>
<p>CSS로 웹 페이지를 아름답게 꾸밀 수 있습니다.</p>
<p class="highlight">이 문단은 하이라이트 스타일이 적용되었습니다.</p>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`CSS에서 클래스 선택자의 기호는?`,questionEn:`What symbol is used for class selectors in CSS?`,options:[`#`,`.`,`@`,`&`],optionsEn:[`#`,`.`,`@`,`&`],correctIndex:1,explanation:`점(.)은 클래스 선택자, 샵(#)은 ID 선택자입니다.`,explanationEn:`Dot (.) is for class selectors, hash (#) is for ID selectors.`}},{title:`선택자 종류`,titleEn:`Types of Selectors`,content:`CSS 선택자는 스타일을 적용할 요소를 지정합니다. 요소 선택자, 클래스 선택자(.class), ID 선택자(#id), 자손 선택자, 가상 클래스(:hover, :first-child) 등이 있습니다.`,contentEn:`CSS selectors specify which elements to style. There are element selectors, class selectors (.class), ID selectors (#id), descendant selectors, pseudo-classes (:hover, :first-child), and more.`,code:`<style>
  /* 요소 선택자 */
  p { margin: 8px 0; }

  /* 클래스 선택자 */
  .primary { color: #0046C8; }
  .danger { color: #E17055; }

  /* ID 선택자 */
  #special { font-weight: bold; font-size: 1.2rem; }

  /* 자손 선택자 */
  .card p { padding-left: 12px; }

  /* 가상 클래스 */
  a:hover { color: #E17055; }
</style>

<p class="primary">클래스: primary</p>
<p class="danger">클래스: danger</p>
<p id="special">ID: special</p>
<div class="card">
  <p>카드 안의 단락 (자손 선택자)</p>
</div>
<a href="#">마우스를 올려보세요 (hover)</a>`,codeLanguage:`html`,livePreview:!0},{title:`실습 예제: 알림 배지 스타일링`,titleEn:`Practice: Styling Notification Badges`,content:`클래스 선택자와 가상 클래스(:hover)를 활용해 상태별 배지(성공·경고·위험)를 만들어 봅니다. 같은 구조에 클래스만 바꿔 다른 색을 적용하는 패턴을 익혀 보세요.`,contentEn:`Use class selectors and the :hover pseudo-class to build status badges (success, warning, danger). Learn the pattern of applying different colors by swapping only the class on the same structure.`,code:`<style>
  .badge {
    display: inline-block; padding: 6px 14px; border-radius: 9999px;
    font-family: sans-serif; font-weight: 700; color: #fff;
    cursor: pointer; transition: opacity 0.2s;
  }
  .badge:hover { opacity: 0.8; }
  .badge.success { background: #00855A; }
  .badge.warning { background: #C87200; }
  .badge.danger  { background: #C8102E; }
</style>

<span class="badge success">완료</span>
<span class="badge warning">대기중</span>
<span class="badge danger">실패</span>`,codeLanguage:`html`,livePreview:!0}]},{id:`02-box-model`,chapter:2,titleKey:`css02`,sections:[{title:`박스 모델`,titleEn:`Box Model`,content:`모든 HTML 요소는 박스 모델을 따릅니다: content(콘텐츠) → padding(안쪽 여백) → border(테두리) → margin(바깥 여백). box-sizing: border-box를 설정하면 width/height에 padding과 border가 포함됩니다.`,contentEn:`Every HTML element follows the box model: content → padding → border → margin. Setting box-sizing: border-box includes padding and border in width/height.`,code:`<style>
  .box {
    width: 200px;
    padding: 20px;
    border: 3px solid #0046C8;
    margin: 16px;
    background: #E8F4FD;
    box-sizing: border-box;
  }
  .box-content { width: 200px; padding: 20px; border: 3px solid #E17055; margin: 16px; background: #FFF3CD; box-sizing: content-box; }
</style>

<div class="box">
  <strong>border-box</strong><br>
  width: 200px (패딩+보더 포함)
</div>
<div class="box-content">
  <strong>content-box</strong><br>
  width: 200px (콘텐츠만)
</div>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`box-sizing: border-box의 효과는?`,questionEn:`What does box-sizing: border-box do?`,options:[`margin을 width에 포함`,`padding과 border를 width에 포함`,`content만 width로 계산`,`border를 제거`],optionsEn:[`Include margin in width`,`Include padding and border in width`,`Calculate only content as width`,`Remove border`],correctIndex:1,explanation:`border-box는 padding과 border를 width/height 안에 포함시킵니다.`,explanationEn:`border-box includes padding and border within the width/height.`}},{title:`실습 예제: 정보 카드 만들기`,titleEn:`Practice: Building an Info Card`,content:`padding·border·margin·border-radius·box-shadow를 조합해 깔끔한 정보 카드를 만들어 봅니다. 여백이 박스 모델 안에서 어떻게 작동하는지 Preview로 확인하세요.`,contentEn:`Combine padding, border, margin, border-radius, and box-shadow to build a clean info card. Check in Preview how spacing works within the box model.`,code:`<style>
  .info-card {
    box-sizing: border-box;
    width: 280px;
    padding: 24px;
    margin: 16px auto;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    font-family: sans-serif;
  }
  .info-card h3 { margin: 0 0 8px; color: #0046C8; }
  .info-card p { margin: 0; color: #555; line-height: 1.6; }
  .info-card .tag {
    display: inline-block; margin-top: 12px; padding: 4px 10px;
    background: #E8F4FD; color: #0046C8; border-radius: 6px; font-size: 0.8rem;
  }
</style>

<div class="info-card">
  <h3>박스 모델</h3>
  <p>content → padding → border → margin 순서로 공간이 쌓입니다.</p>
  <span class="tag">CSS 기초</span>
</div>`,codeLanguage:`html`,livePreview:!0}]},{id:`03-flexbox`,chapter:3,titleKey:`css03`,sections:[{title:`Flexbox 레이아웃`,titleEn:`Flexbox Layout`,content:`Flexbox는 1차원 레이아웃 모델로, 행(row) 또는 열(column) 방향으로 아이템을 유연하게 배치합니다. display: flex를 부모에 설정하면 자식이 flex 아이템이 됩니다.`,contentEn:`Flexbox is a one-dimensional layout model that flexibly arranges items in row or column direction. Setting display: flex on the parent makes children flex items.`,code:`<style>
  .flex-demo { display: flex; gap: 12px; padding: 16px; background: #f5f5f5; border-radius: 8px; margin: 8px 0; }
  .flex-demo .item { padding: 16px 24px; background: #0046C8; color: white; border-radius: 4px; font-weight: bold; }
  .flex-center { display: flex; justify-content: center; align-items: center; height: 100px; background: #E8F4FD; border-radius: 8px; margin: 8px 0; }
  .flex-between { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #FFF3CD; border-radius: 8px; margin: 8px 0; }
  .flex-between .item { padding: 8px 16px; background: #E17055; color: white; border-radius: 4px; }
</style>

<h4>기본 flex (행 방향)</h4>
<div class="flex-demo">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<h4>justify-content: center + align-items: center</h4>
<div class="flex-center">
  <strong>가운데 정렬!</strong>
</div>

<h4>justify-content: space-between</h4>
<div class="flex-between">
  <div class="item">왼쪽</div>
  <div class="item">가운데</div>
  <div class="item">오른쪽</div>
</div>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`Flexbox에서 주축 방향 정렬 속성은?`,questionEn:`Which Flexbox property aligns items along the main axis?`,options:[`align-items`,`justify-content`,`flex-direction`,`align-self`],optionsEn:[`align-items`,`justify-content`,`flex-direction`,`align-self`],correctIndex:1,explanation:`justify-content는 주축(기본: 가로) 방향 정렬, align-items는 교차축(기본: 세로) 정렬입니다.`,explanationEn:`justify-content aligns along the main axis (default: horizontal), align-items along the cross axis (default: vertical).`}},{title:`실습 예제: 네비게이션 바`,titleEn:`Practice: Navigation Bar`,content:`Flexbox의 justify-content: space-between과 gap을 사용해 로고-메뉴-버튼이 배치된 상단 네비게이션 바를 만들어 봅니다. 실제 웹사이트 헤더에서 가장 많이 쓰이는 패턴입니다.`,contentEn:`Use Flexbox's justify-content: space-between and gap to build a top navigation bar with logo, menu, and button. This is the most common pattern in real website headers.`,code:`<style>
  .nav {
    display: flex; align-items: center; justify-content: space-between;
    padding: 12px 20px; background: #0046C8; border-radius: 10px;
    font-family: sans-serif; color: #fff;
  }
  .nav .logo { font-weight: 800; font-size: 1.1rem; }
  .nav .menu { display: flex; gap: 18px; list-style: none; margin: 0; padding: 0; }
  .nav .menu a { color: #cfe0ff; text-decoration: none; }
  .nav .menu a:hover { color: #fff; }
  .nav .cta {
    background: #fff; color: #0046C8; border: none;
    padding: 8px 14px; border-radius: 8px; font-weight: 700; cursor: pointer;
  }
</style>

<nav class="nav">
  <div class="logo">DreamIT</div>
  <ul class="menu">
    <li><a href="#">홈</a></li>
    <li><a href="#">학습</a></li>
    <li><a href="#">소개</a></li>
  </ul>
  <button class="cta">시작하기</button>
</nav>`,codeLanguage:`html`,livePreview:!0}]},{id:`04-grid-responsive`,chapter:4,titleKey:`css04`,sections:[{title:`CSS Grid 레이아웃`,titleEn:`CSS Grid Layout`,content:`Grid는 행과 열을 모두 다루는 2차원 레이아웃 시스템입니다. display:grid와 grid-template-columns로 열을 정의하고, gap으로 간격을 줍니다. repeat()와 fr 단위로 유연한 격자를 만들 수 있습니다.`,contentEn:`Grid is a two-dimensional layout system that handles both rows and columns. Define columns with display:grid and grid-template-columns, and add spacing with gap. Build flexible grids with repeat() and the fr unit.`,code:`<style>
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
</div>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`grid-template-columns: repeat(3, 1fr)의 의미는?`,questionEn:`What does grid-template-columns: repeat(3, 1fr) mean?`,options:[`3개의 행을 만든다`,`동일한 너비의 열 3개를 만든다`,`3px 간격을 준다`,`3개 요소만 표시한다`],optionsEn:[`Creates 3 rows`,`Creates 3 equal-width columns`,`Adds 3px gap`,`Shows only 3 elements`],correctIndex:1,explanation:`repeat(3, 1fr)은 1fr(남은 공간의 동일 비율) 열을 3번 반복해, 너비가 같은 열 3개를 만듭니다.`,explanationEn:`repeat(3, 1fr) repeats a 1fr (equal share of remaining space) column three times, creating 3 equal-width columns.`}},{title:`반응형과 미디어 쿼리`,titleEn:`Responsive Design and Media Queries`,content:`미디어 쿼리(@media)는 화면 너비 등 조건에 따라 다른 스타일을 적용해 반응형 웹을 만듭니다. 모바일 우선(mobile-first) 접근에서는 기본 스타일을 모바일로 작성하고, min-width로 큰 화면 스타일을 덧붙입니다.`,contentEn:`Media queries (@media) apply different styles based on conditions like screen width to create responsive web designs. In a mobile-first approach, write base styles for mobile and layer larger-screen styles with min-width.`,code:`<style>
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
</div>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`모바일 우선(mobile-first) 반응형에서 주로 사용하는 미디어 쿼리 조건은?`,questionEn:`Which media query condition is mainly used in mobile-first responsive design?`,options:[`max-width`,`min-width`,`max-height`,`orientation`],optionsEn:[`max-width`,`min-width`,`max-height`,`orientation`],correctIndex:1,explanation:`모바일 우선에서는 기본(작은 화면) 스타일을 먼저 쓰고 min-width로 화면이 커질 때 스타일을 추가합니다.`,explanationEn:`Mobile-first writes base (small-screen) styles first and adds styles with min-width as the screen grows.`}},{title:`CSS 변수와 전환`,titleEn:`CSS Variables and Transitions`,content:`CSS 사용자 정의 속성(변수)은 --name으로 정의하고 var(--name)으로 사용합니다. :root에 두면 전역으로 재사용됩니다. transition은 속성 변화에 부드러운 애니메이션을 부여해 호버 효과 등에 사용합니다.`,contentEn:`CSS custom properties (variables) are defined with --name and used with var(--name). Placing them in :root makes them globally reusable. transition applies smooth animation to property changes, useful for hover effects.`,code:`<style>
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

<button class="btn">마우스를 올려보세요</button>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`CSS 변수를 전역으로 정의할 때 흔히 사용하는 선택자는?`,questionEn:`Which selector is commonly used to define CSS variables globally?`,options:[`body`,`:root`,`*`,`html.global`],optionsEn:[`body`,`:root`,`*`,`html.global`],correctIndex:1,explanation:`:root는 문서 최상위(html)를 가리키며, 여기에 정의한 변수는 모든 요소에서 var()로 재사용할 수 있습니다.`,explanationEn:`:root targets the document root (html); variables defined there can be reused anywhere via var().`}},{title:`실습 예제: 반응형 가격표`,titleEn:`Practice: Responsive Pricing Cards`,content:`Grid·CSS 변수·미디어 쿼리를 모두 사용해 반응형 가격표를 만들어 봅니다. Preview 영역의 너비에 따라 1열↔다열로 바뀌는지 확인해 보세요(미리보기가 좁으면 1열로 보입니다).`,contentEn:`Build a responsive pricing table using Grid, CSS variables, and media queries together. Check whether it switches between 1 and multiple columns depending on the preview width (it shows 1 column when narrow).`,code:`<style>
  :root { --accent: #8B1AC8; }
  .plans { display: grid; grid-template-columns: 1fr; gap: 12px; font-family: sans-serif; }
  @media (min-width: 480px) { .plans { grid-template-columns: repeat(2, 1fr); } }
  .plan {
    border: 2px solid #eee; border-radius: 12px; padding: 20px; text-align: center;
    transition: transform 0.2s, border-color 0.2s;
  }
  .plan:hover { transform: translateY(-4px); border-color: var(--accent); }
  .plan h3 { margin: 0 0 8px; }
  .plan .price { font-size: 1.6rem; font-weight: 800; color: var(--accent); }
</style>

<div class="plans">
  <div class="plan"><h3>Basic</h3><div class="price">무료</div><p>핵심 강의</p></div>
  <div class="plan"><h3>Pro</h3><div class="price">₩9,900</div><p>전체 강의 + 인증서</p></div>
</div>`,codeLanguage:`html`,livePreview:!0}]}],o=[{id:`01-basics`,chapter:1,titleKey:`js01`,sections:[{title:`JavaScript 소개`,titleEn:`Introduction to JavaScript`,content:`JavaScript는 웹 페이지에 동적인 기능을 추가하는 프로그래밍 언어입니다. 변수 선언은 let(변경 가능), const(상수), var(구식)를 사용합니다. ES6+에서는 let과 const 사용을 권장합니다.`,contentEn:`JavaScript is a programming language that adds dynamic functionality to web pages. Variable declarations use let (mutable), const (constant), and var (legacy). ES6+ recommends using let and const.`,code:`<script>
  // 변수 선언
  const name = "DreamIT";
  let count = 0;

  // 함수
  function greet(who) {
    return "안녕하세요, " + who + "!";
  }

  // 화면에 출력
  document.getElementById("output").textContent = greet(name);

  // 카운터
  document.getElementById("btn").addEventListener("click", function() {
    count++;
    document.getElementById("counter").textContent = count;
  });
<\/script>

<p id="output">로딩 중...</p>
<button id="btn" style="padding:8px 16px;cursor:pointer">클릭: <span id="counter">0</span></button>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`ES6+에서 권장하는 변수 선언 키워드 2가지는?`,questionEn:`What are the 2 recommended variable declaration keywords in ES6+?`,options:[`var와 let`,`let과 const`,`var와 const`,`function과 let`],optionsEn:[`var and let`,`let and const`,`var and const`,`function and let`],correctIndex:1,explanation:`let은 재할당 가능한 변수, const는 재할당 불가능한 상수에 사용합니다.`,explanationEn:`let is for reassignable variables, const is for non-reassignable constants.`}},{title:`조건문과 반복문`,titleEn:`Conditionals and Loops`,content:`if/else 조건문으로 분기 처리하고, for/while/for...of 반복문으로 반복 작업을 수행합니다. 삼항 연산자(?:)는 간단한 조건 표현에 유용합니다.`,contentEn:`Use if/else for branching and for/while/for...of loops for repetitive tasks. The ternary operator (?:) is useful for simple conditional expressions.`,code:`<div id="result"></div>
<script>
  const el = document.getElementById("result");
  let html = "";

  // 조건문
  const score = 85;
  const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
  html += "<p>점수: " + score + " → 등급: " + grade + "</p>";

  // for 반복문
  html += "<p>구구단 3단: ";
  for (let i = 1; i <= 9; i++) {
    html += "3×" + i + "=" + (3*i) + " ";
  }
  html += "</p>";

  // 배열 순회
  const fruits = ["사과", "바나나", "딸기"];
  html += "<ul>";
  for (const fruit of fruits) {
    html += "<li>" + fruit + "</li>";
  }
  html += "</ul>";

  el.innerHTML = html;
<\/script>`,codeLanguage:`html`,livePreview:!0},{title:`실습 예제: 실시간 글자 수 카운터`,titleEn:`Practice: Live Character Counter`,content:`변수·이벤트·조건문을 활용해 입력창의 글자 수를 실시간으로 세는 카운터를 만들어 봅니다. 100자를 넘으면 색이 빨갛게 바뀌도록 조건을 추가했습니다. 직접 입력해 보세요.`,contentEn:`Use variables, events, and conditionals to build a counter that counts characters in real time. A condition turns the color red when it exceeds 100 characters. Try typing.`,code:`<textarea id="ta" rows="3" style="width:100%;box-sizing:border-box;padding:8px"
  placeholder="여기에 입력해 보세요..."></textarea>
<p id="count" style="font-family:sans-serif">0 / 100</p>
<script>
  const ta = document.getElementById("ta");
  const count = document.getElementById("count");
  const MAX = 100;

  ta.addEventListener("input", function() {
    const len = ta.value.length;
    count.textContent = len + " / " + MAX;
    count.style.color = len > MAX ? "#C8102E" : "#555";
  });
<\/script>`,codeLanguage:`html`,livePreview:!0}]},{id:`02-dom`,chapter:2,titleKey:`js02`,sections:[{title:`DOM 조작`,titleEn:`DOM Manipulation`,content:`DOM(Document Object Model)은 HTML 문서를 트리 구조의 객체로 표현합니다. JavaScript로 DOM 요소를 선택하고, 속성을 변경하고, 새 요소를 추가/삭제할 수 있습니다.`,contentEn:`The DOM (Document Object Model) represents HTML documents as a tree of objects. JavaScript can select DOM elements, modify attributes, and add/remove elements.`,code:`<div id="app">
  <h3 id="title">제목을 클릭하세요</h3>
  <ul id="list">
    <li>항목 1</li>
    <li>항목 2</li>
  </ul>
  <button id="addBtn" style="padding:6px 12px;margin:4px;cursor:pointer">항목 추가</button>
  <button id="colorBtn" style="padding:6px 12px;margin:4px;cursor:pointer">색상 변경</button>
</div>
<script>
  let counter = 3;
  const colors = ["#0046C8","#E17055","#00B894","#6C5CE7"];
  let ci = 0;

  document.getElementById("title").addEventListener("click", function() {
    this.textContent = "클릭됨! (" + new Date().toLocaleTimeString() + ")";
  });

  document.getElementById("addBtn").addEventListener("click", function() {
    const li = document.createElement("li");
    li.textContent = "항목 " + counter++;
    document.getElementById("list").appendChild(li);
  });

  document.getElementById("colorBtn").addEventListener("click", function() {
    ci = (ci + 1) % colors.length;
    document.getElementById("title").style.color = colors[ci];
  });
<\/script>`,codeLanguage:`html`,livePreview:!0},{title:`실습 예제: 할 일 목록`,titleEn:`Practice: To-Do List`,content:`DOM 생성(createElement)·이벤트·삭제(remove)를 종합해 동작하는 할 일 목록을 만들어 봅니다. 입력 후 추가 버튼을 누르고, 각 항목의 삭제 버튼도 눌러 보세요.`,contentEn:`Combine DOM creation (createElement), events, and removal (remove) to build a working to-do list. Add items and try the delete button on each item.`,code:`<div style="font-family:sans-serif;max-width:320px">
  <div style="display:flex;gap:6px">
    <input id="todoInput" placeholder="할 일 입력" style="flex:1;padding:6px">
    <button id="add" style="padding:6px 12px;cursor:pointer">추가</button>
  </div>
  <ul id="todos" style="padding-left:18px"></ul>
</div>
<script>
  const input = document.getElementById("todoInput");
  const list = document.getElementById("todos");

  function addTodo() {
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement("li");
    li.textContent = text;
    const del = document.createElement("button");
    del.textContent = "삭제";
    del.style.cssText = "margin-left:8px;cursor:pointer";
    del.onclick = () => li.remove();
    li.appendChild(del);
    list.appendChild(li);
    input.value = "";
    input.focus();
  }

  document.getElementById("add").addEventListener("click", addTodo);
  input.addEventListener("keydown", e => { if (e.key === "Enter") addTodo(); });
<\/script>`,codeLanguage:`html`,livePreview:!0}]},{id:`03-async`,chapter:3,titleKey:`js03`,sections:[{title:`비동기 프로그래밍`,titleEn:`Asynchronous Programming`,content:`JavaScript는 싱글 스레드이지만 비동기 처리로 효율적인 작업이 가능합니다. Promise, async/await, fetch API를 사용하여 네트워크 요청, 타이머 등을 처리합니다.`,contentEn:`JavaScript is single-threaded but handles tasks efficiently with asynchronous processing. Use Promise, async/await, and fetch API for network requests, timers, etc.`,code:`<div id="async-demo"></div>
<button id="fetchBtn" style="padding:8px 16px;cursor:pointer;margin:8px 0">데이터 가져오기</button>
<script>
  const el = document.getElementById("async-demo");

  // Promise 예제
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // async/await
  async function fetchData() {
    el.innerHTML = "<p>로딩 중...</p>";
    await delay(1000);

    // 시뮬레이션된 API 응답
    const data = [
      { name: "HTML", level: "기초" },
      { name: "CSS", level: "기초" },
      { name: "JavaScript", level: "중급" }
    ];

    let html = "<table border='1' cellpadding='8'>";
    html += "<tr><th>기술</th><th>레벨</th></tr>";
    data.forEach(item => {
      html += "<tr><td>" + item.name + "</td><td>" + item.level + "</td></tr>";
    });
    html += "</table>";
    el.innerHTML = html;
  }

  document.getElementById("fetchBtn").addEventListener("click", fetchData);
  el.innerHTML = "<p>버튼을 클릭하여 데이터를 가져오세요.</p>";
<\/script>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`async 함수 안에서 Promise를 기다리는 키워드는?`,questionEn:`What keyword waits for a Promise inside an async function?`,options:[`wait`,`await`,`then`,`resolve`],optionsEn:[`wait`,`await`,`then`,`resolve`],correctIndex:1,explanation:`await 키워드는 async 함수 안에서만 사용할 수 있으며, Promise가 해결될 때까지 실행을 일시 중지합니다.`,explanationEn:`The await keyword can only be used inside async functions and pauses execution until the Promise resolves.`}},{title:`실습 예제: 실제 API 호출`,titleEn:`Practice: Calling a Real API`,content:`fetch와 async/await로 실제 공개 API에서 데이터를 받아 화면에 표시해 봅니다. try/catch로 에러도 처리합니다. 버튼을 눌러 무작위 사용자 정보를 불러오세요.`,contentEn:`Use fetch and async/await to retrieve data from a real public API and display it. Errors are handled with try/catch. Press the button to load random user info.`,code:`<button id="load" style="padding:8px 16px;cursor:pointer;margin-bottom:8px">사용자 불러오기</button>
<div id="result" style="font-family:sans-serif"></div>
<script>
  const result = document.getElementById("result");

  async function loadUser() {
    result.innerHTML = "불러오는 중...";
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/" +
        (Math.floor(Math.random() * 10) + 1));
      if (!res.ok) throw new Error("HTTP " + res.status);
      const user = await res.json();
      result.innerHTML =
        "<strong>" + user.name + "</strong><br>" +
        "✉ " + user.email + "<br>🏢 " + user.company.name;
    } catch (err) {
      result.innerHTML = "<span style='color:#C8102E'>에러: " + err.message + "</span>";
    }
  }

  document.getElementById("load").addEventListener("click", loadUser);
<\/script>`,codeLanguage:`html`,livePreview:!0}]},{id:`04-es6`,chapter:4,titleKey:`js04`,sections:[{title:`구조 분해와 전개 구문`,titleEn:`Destructuring and Spread`,content:`구조 분해 할당(destructuring)으로 배열·객체에서 값을 간결하게 꺼냅니다. 전개 구문(...)은 배열/객체를 펼쳐 복사하거나 병합할 때 사용하고, 나머지 매개변수(rest)로 가변 인자를 받습니다.`,contentEn:`Destructuring extracts values from arrays/objects concisely. The spread syntax (...) copies or merges arrays/objects, and rest parameters capture variadic arguments.`,code:`<div id="out"></div>
<script>
  // 객체 구조 분해
  const user = { name: '홍길동', age: 30, city: '서울' };
  const { name, age } = user;

  // 배열 구조 분해
  const [first, second] = ['A', 'B', 'C'];

  // 전개 구문 - 병합
  const merged = { ...user, job: '개발자' };

  // 나머지 매개변수
  const sum = (...nums) => nums.reduce((a, b) => a + b, 0);

  document.getElementById('out').innerHTML =
    '<p>' + name + ', ' + age + '세 / ' + first + second + '</p>' +
    '<p>job: ' + merged.job + ' / sum: ' + sum(1, 2, 3, 4) + '</p>';
<\/script>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`const { name } = user; 가 하는 일은?`,questionEn:`What does const { name } = user; do?`,options:[`user를 name으로 이름 변경`,`user 객체의 name 속성을 꺼내 변수 name에 할당`,`name이라는 새 객체 생성`,`오류 발생`],optionsEn:[`Renames user to name`,`Extracts the name property of user into a variable name`,`Creates a new object name`,`Throws an error`],correctIndex:1,explanation:`객체 구조 분해로, user.name 값을 동일한 이름의 변수 name에 할당합니다.`,explanationEn:`This is object destructuring; it assigns user.name to a variable named name.`}},{title:`배열 고차 함수`,titleEn:`Array Higher-Order Functions`,content:`map(변환), filter(걸러내기), reduce(누적), find(찾기), some/every(조건 검사)는 반복문 없이 데이터를 선언적으로 처리하는 핵심 메서드입니다. 메서드 체이닝으로 여러 단계를 연결할 수 있습니다.`,contentEn:`map (transform), filter (select), reduce (accumulate), find (search), and some/every (condition checks) are core methods for processing data declaratively without loops. They can be chained across multiple steps.`,code:`<div id="out"></div>
<script>
  const products = [
    { name: '키보드', price: 89000 },
    { name: '마우스', price: 32000 },
    { name: '모니터', price: 210000 }
  ];

  // 5만원 이상 상품명만, 가격 합계
  const expensive = products
    .filter(p => p.price >= 50000)
    .map(p => p.name);

  const total = products.reduce((sum, p) => sum + p.price, 0);

  document.getElementById('out').innerHTML =
    '<p>5만원 이상: ' + expensive.join(', ') + '</p>' +
    '<p>총합: ' + total.toLocaleString() + '원</p>';
<\/script>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`배열의 각 요소를 변환해 같은 길이의 새 배열을 반환하는 메서드는?`,questionEn:`Which method transforms each element and returns a new array of the same length?`,options:[`filter()`,`map()`,`reduce()`,`forEach()`],optionsEn:[`filter()`,`map()`,`reduce()`,`forEach()`],correctIndex:1,explanation:`map()은 각 요소에 콜백을 적용한 결과로 같은 길이의 새 배열을 만듭니다. filter는 조건에 맞는 일부만, reduce는 단일 값으로 누적합니다.`,explanationEn:`map() builds a new array of the same length from the callback result for each element. filter selects a subset and reduce accumulates to a single value.`}},{title:`템플릿 리터럴과 단축 문법`,titleEn:`Template Literals and Shorthand`,content:"백틱(`)으로 감싼 템플릿 리터럴은 ${} 안에 표현식을 넣고 여러 줄 문자열을 만듭니다. 옵셔널 체이닝(?.)과 널 병합(??)으로 안전하게 값에 접근하고, 단축 속성·화살표 함수로 코드를 간결하게 작성합니다.",contentEn:"Template literals wrapped in backticks embed expressions in ${} and create multi-line strings. Optional chaining (?.) and nullish coalescing (??) access values safely, and shorthand properties and arrow functions keep code concise.",code:`<div id="out"></div>
<script>
  const user = { name: '지은', address: null };

  // 템플릿 리터럴
  const greeting = \`안녕하세요, \${user.name}님!\`;

  // 옵셔널 체이닝 + 널 병합
  const city = user.address?.city ?? '주소 미등록';

  document.getElementById('out').innerHTML =
    '<p>' + greeting + '</p><p>도시: ' + city + '</p>';
<\/script>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`user.address?.city 에서 ?. (옵셔널 체이닝)의 역할은?`,questionEn:`What does ?. (optional chaining) do in user.address?.city?`,options:[`항상 에러를 던진다`,`address가 null/undefined면 에러 없이 undefined를 반환`,`city를 강제로 생성`,`비동기로 동작`],optionsEn:[`Always throws an error`,`Returns undefined without error if address is null/undefined`,`Forcibly creates city`,`Runs asynchronously`],correctIndex:1,explanation:`옵셔널 체이닝은 앞 값이 null/undefined일 때 에러를 던지지 않고 undefined를 반환하여 안전하게 중첩 속성에 접근합니다.`,explanationEn:`Optional chaining returns undefined instead of throwing when the preceding value is null/undefined, safely accessing nested properties.`}},{title:`실습 예제: 장바구니 합계 계산기`,titleEn:`Practice: Cart Total Calculator`,content:`map·filter·reduce 등 배열 메서드와 구조 분해를 종합해, 체크된 상품의 합계를 실시간으로 계산하는 장바구니를 만들어 봅니다. 체크박스를 켜고 끄며 합계 변화를 확인하세요.`,contentEn:`Combine array methods (map, filter, reduce) and destructuring to build a cart that calculates the total of checked items in real time. Toggle the checkboxes and watch the total change.`,code:`<div id="cart" style="font-family:sans-serif;max-width:320px"></div>
<h3 id="total" style="font-family:sans-serif"></h3>
<script>
  const products = [
    { id: 1, name: '키보드', price: 89000, checked: true },
    { id: 2, name: '마우스', price: 32000, checked: true },
    { id: 3, name: '모니터', price: 210000, checked: false }
  ];

  const cart = document.getElementById('cart');
  const totalEl = document.getElementById('total');

  function render() {
    cart.innerHTML = products.map(({ id, name, price, checked }) =>
      '<label style="display:block;margin:4px 0">' +
      '<input type="checkbox" data-id="' + id + '"' + (checked ? ' checked' : '') + '> ' +
      name + ' — ' + price.toLocaleString() + '원</label>'
    ).join('');

    const total = products
      .filter(p => p.checked)
      .reduce((sum, p) => sum + p.price, 0);
    totalEl.textContent = '합계: ' + total.toLocaleString() + '원';

    cart.querySelectorAll('input').forEach(box => {
      box.addEventListener('change', e => {
        const id = Number(e.target.dataset.id);
        const item = products.find(p => p.id === id);
        item.checked = e.target.checked;
        render();
      });
    });
  }

  render();
<\/script>`,codeLanguage:`html`,livePreview:!0}]}],s=[{id:`01-jsx`,chapter:1,titleKey:`react01`,sections:[{title:`React 프로젝트 시작 (Vite)`,titleEn:`Starting a React Project (Vite)`,content:`React는 Node.js 환경에서 Vite 같은 빌드 도구로 프로젝트를 만들어 개발합니다. 먼저 Node.js를 설치해야 하는데, 설치 방법은 운영체제마다 다르니 본인 OS의 창만 따라 하세요(아래). Node가 준비되면 npm 명령(운영체제 공통)으로 Vite React 프로젝트를 생성하고 개발 서버를 띄웁니다.`,contentEn:`React projects are built in a Node.js environment using a build tool like Vite. First install Node.js — the method differs by OS, so follow only your OS panel below. Once Node is ready, create a Vite React project and start the dev server with npm commands (the same on every OS).`,codeBlocks:[{label:`🪟 Windows`,code:`# Node.js 설치 (LTS) — https://nodejs.org 또는 winget
winget install OpenJS.NodeJS.LTS
node -v   # 새 PowerShell 창에서 확인`,codeLanguage:`powershell`},{label:`🍎 macOS`,code:`# Node.js 설치 — Homebrew (또는 nvm)
brew install node
node -v`,codeLanguage:`bash`},{label:`🐧 Linux`,code:`# Node.js 설치 — nvm 권장
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install --lts
node -v`,codeLanguage:`bash`}],code:`# Node 설치 후 (운영체제 공통) — Vite로 React 프로젝트 생성
npm create vite@latest my-app -- --template react
cd my-app
npm install        # 의존성 설치
npm run dev        # 개발 서버 → http://localhost:5173

# src/App.jsx 를 열어 아래 컴포넌트부터 작성해 보세요.`,codeLanguage:`bash`,quiz:{question:`React 프로젝트를 만들 때 흔히 쓰는 빌드 도구는?`,questionEn:`Which build tool is commonly used to scaffold a React project?`,options:[`Photoshop`,`Vite`,`Excel`,`Docker`],optionsEn:[`Photoshop`,`Vite`,`Excel`,`Docker`],correctIndex:1,explanation:`npm create vite@latest ... --template react 로 Vite 기반 React 프로젝트를 빠르게 생성할 수 있습니다. Node.js가 먼저 설치되어 있어야 합니다.`,explanationEn:`npm create vite@latest ... --template react quickly scaffolds a Vite-based React project. Node.js must be installed first.`}},{title:`React와 JSX`,titleEn:`React and JSX`,content:`React는 UI를 컴포넌트 단위로 구성하는 JavaScript 라이브러리입니다. JSX는 JavaScript 안에서 HTML과 유사한 문법을 사용할 수 있게 해주는 확장 문법입니다. 중괄호 {}를 사용하여 JavaScript 표현식을 삽입하며, 컴포넌트는 반드시 하나의 부모 요소(또는 <>...</> 프래그먼트)를 반환해야 합니다.`,contentEn:`React is a JavaScript library for building UIs with components. JSX is a syntax extension that allows HTML-like syntax in JavaScript. Use curly braces {} to embed JavaScript expressions, and a component must return a single parent element (or a <>...</> fragment).`,code:`// React 컴포넌트 예제
function Welcome({ name }) {
  const greeting = \`안녕하세요, \${name}님!\`;
  const isLoggedIn = true;

  return (
    <div>
      <h2>{greeting}</h2>
      {isLoggedIn ? (
        <p style={{ color: '#00B894' }}>로그인 상태입니다.</p>
      ) : (
        <p style={{ color: '#E17055' }}>로그인이 필요합니다.</p>
      )}
      <ul>
        {['HTML', 'CSS', 'JS'].map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}`,codeLanguage:`jsx`,quiz:{question:`JSX에서 JavaScript 표현식을 삽입할 때 사용하는 기호는?`,questionEn:`What symbol is used to embed JavaScript expressions in JSX?`,options:[`소괄호 ()`,`중괄호 {}`,`대괄호 []`,`꺾쇠 <>`],optionsEn:[`Parentheses ()`,`Curly braces {}`,`Brackets []`,`Angle brackets <>`],correctIndex:1,explanation:`JSX 안에서는 중괄호 {} 안에 변수, 함수 호출, 삼항 연산자 등 JavaScript 표현식을 넣을 수 있습니다.`,explanationEn:`Inside JSX, you can place JavaScript expressions such as variables, function calls, and ternary operators within curly braces {}.`}},{title:`Props로 데이터 전달`,titleEn:`Passing Data with Props`,content:`Props(properties)는 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달하는 방법입니다. 자식은 props를 읽기 전용으로 받으며 직접 수정할 수 없습니다. 구조 분해 할당으로 필요한 값만 꺼내 쓰고, 매개변수에 기본값을 지정할 수도 있습니다.`,contentEn:`Props (properties) are how a parent component passes data to a child component. The child receives props as read-only and cannot modify them directly. Use destructuring to extract only the needed values, and you can set default values on parameters.`,code:`// 자식 컴포넌트 - props로 데이터 받기
function ProductCard({ name, price, sale = false }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{price.toLocaleString()}원</p>
      {sale && <span className="badge">세일!</span>}
    </div>
  );
}

// 부모 컴포넌트 - props로 데이터 전달
function Shop() {
  return (
    <div>
      <ProductCard name="키보드" price={89000} sale={true} />
      <ProductCard name="마우스" price={32000} />
    </div>
  );
}`,codeLanguage:`jsx`,quiz:{question:`React에서 props의 특징으로 올바른 것은?`,questionEn:`Which is correct about props in React?`,options:[`자식이 자유롭게 수정할 수 있다`,`읽기 전용이며 직접 수정할 수 없다`,`부모에게만 전달된다`,`숫자만 전달할 수 있다`],optionsEn:[`The child can freely modify them`,`Read-only and cannot be modified directly`,`Only passed to parents`,`Only numbers can be passed`],correctIndex:1,explanation:`props는 읽기 전용(immutable)입니다. 자식 컴포넌트는 받은 props를 직접 변경할 수 없습니다.`,explanationEn:`props are read-only (immutable). A child component cannot directly modify the props it receives.`}},{title:`리스트 렌더링과 key`,titleEn:`List Rendering and key`,content:`배열 데이터를 화면에 표시할 때는 map() 메서드로 각 항목을 JSX로 변환합니다. 이때 각 요소에 고유한 key 속성을 지정해야 React가 변경된 항목을 효율적으로 추적할 수 있습니다. 배열 인덱스보다는 고유 id를 key로 사용하는 것이 권장됩니다.`,contentEn:`To render array data, use the map() method to transform each item into JSX. Each element needs a unique key attribute so React can efficiently track changes. Using a unique id as the key is preferred over the array index.`,code:`function TodoList() {
  const todos = [
    { id: 1, text: 'React 배우기', done: true },
    { id: 2, text: 'TypeScript 배우기', done: false },
    { id: 3, text: '프로젝트 만들기', done: false }
  ];

  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.done ? 'line-through' : 'none'
          }}
        >
          {todo.done ? '✅' : '⬜'} {todo.text}
        </li>
      ))}
    </ul>
  );
}`,codeLanguage:`jsx`,quiz:{question:`리스트를 map()으로 렌더링할 때 각 항목에 key를 지정하는 이유는?`,questionEn:`Why specify a key for each item when rendering a list with map()?`,options:[`CSS 스타일링을 위해`,`React가 변경된 항목을 효율적으로 추적하기 위해`,`항목을 정렬하기 위해`,`key는 선택 사항이라 필요 없다`],optionsEn:[`For CSS styling`,`So React can efficiently track changed items`,`To sort items`,`key is optional and unnecessary`],correctIndex:1,explanation:`key는 React가 어떤 항목이 추가/변경/삭제되었는지 식별하여 렌더링 성능을 높이는 데 사용됩니다.`,explanationEn:`key helps React identify which items were added/changed/removed, improving rendering performance.`}},{title:`실습 예제: 별점 표시 컴포넌트`,titleEn:`Practice: Star Rating Component`,content:`props로 받은 점수를 기반으로 별(★)을 채워 표시하는 컴포넌트를 만들어 봅니다. 배열 생성과 map, 조건부 스타일을 종합한 연습입니다. rating 값을 바꿔 재사용해 보세요.`,contentEn:`Build a component that fills stars (★) based on a score passed via props. It combines array creation, map, and conditional styling. Reuse it by changing the rating value.`,code:`function StarRating({ rating, max = 5 }) {
  // 0..max-1 인덱스 배열을 만들어 채움 여부 판단
  return (
    <div aria-label={\`\${rating} / \${max}\`}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} style={{ color: i < rating ? '#FDCB6E' : '#ddd', fontSize: 24 }}>
          ★
        </span>
      ))}
      <span style={{ marginLeft: 8, color: '#666' }}>{rating}/{max}</span>
    </div>
  );
}

function Reviews() {
  return (
    <div>
      <StarRating rating={5} />
      <StarRating rating={3} />
      <StarRating rating={4} max={5} />
    </div>
  );
}`,codeLanguage:`jsx`}]},{id:`02-state`,chapter:2,titleKey:`react02`,sections:[{title:`useState Hook`,titleEn:`useState Hook`,content:`useState는 React 함수 컴포넌트에서 상태(state)를 관리하는 Hook입니다. const [state, setState] = useState(초기값) 형태로 사용하며, setState로 상태를 업데이트하면 컴포넌트가 다시 렌더링됩니다.`,contentEn:`useState is a Hook for managing state in React function components. Use const [state, setState] = useState(initialValue) format, and the component re-renders when state is updated with setState.`,code:`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div>
      <h3>카운터: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>리셋</button>

      <hr />
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="이름을 입력하세요"
      />
      <p>입력값: {name || '(비어있음)'}</p>
    </div>
  );
}`,codeLanguage:`jsx`,quiz:{question:`useState의 반환값은?`,questionEn:`What does useState return?`,options:[`상태값만`,`업데이트 함수만`,`[상태값, 업데이트 함수] 배열`,`{상태값, 업데이트 함수} 객체`],optionsEn:[`Only state value`,`Only update function`,`[state, updater] array`,`{state, updater} object`],correctIndex:2,explanation:`useState는 [현재 상태값, 상태 업데이트 함수]를 담은 배열을 반환합니다.`,explanationEn:`useState returns an array containing [current state, state update function].`}},{title:`함수형 업데이트와 불변성`,titleEn:`Functional Updates and Immutability`,content:`이전 상태를 기반으로 업데이트할 때는 setState(prev => ...) 형태의 함수형 업데이트를 사용하면 안전합니다. 객체나 배열 상태를 변경할 때는 직접 수정하지 말고, 전개 구문(...)으로 새 객체/배열을 만들어 불변성을 유지해야 React가 변경을 감지합니다.`,contentEn:`When updating based on previous state, the functional update form setState(prev => ...) is safe. When changing object or array state, never mutate directly — create a new object/array with the spread syntax (...) to maintain immutability so React detects the change.`,code:`import { useState } from 'react';

function Cart() {
  const [items, setItems] = useState([]);

  // 함수형 업데이트 - 이전 상태 기반
  function addItem(name) {
    setItems(prev => [...prev, { id: Date.now(), name }]);
  }

  function removeItem(id) {
    // 불변성 유지 - filter로 새 배열 생성
    setItems(prev => prev.filter(item => item.id !== id));
  }

  return (
    <div>
      <button onClick={() => addItem('상품')}>담기</button>
      <p>장바구니: {items.length}개</p>
      {items.map(item => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => removeItem(item.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
}`,codeLanguage:`jsx`,quiz:{question:`배열 상태에 항목을 추가할 때 올바른 방법은?`,questionEn:`What is the correct way to add an item to array state?`,options:[`items.push(newItem)`,`setItems([...items, newItem])`,`items[items.length] = newItem`,`items.length++`],optionsEn:[`items.push(newItem)`,`setItems([...items, newItem])`,`items[items.length] = newItem`,`items.length++`],correctIndex:1,explanation:`기존 배열을 직접 수정하면 안 됩니다. 전개 구문으로 새 배열을 만들어 setState에 전달해야 불변성이 유지됩니다.`,explanationEn:`Never mutate the existing array directly. Create a new array with the spread syntax and pass it to setState to maintain immutability.`}},{title:`폼과 제어 컴포넌트`,titleEn:`Forms and Controlled Components`,content:`입력 요소의 value를 state와 연결하고 onChange로 상태를 갱신하는 방식을 제어 컴포넌트(controlled component)라고 합니다. 여러 입력을 하나의 객체 상태로 관리하면 폼을 깔끔하게 다룰 수 있습니다.`,contentEn:`Binding an input element's value to state and updating it via onChange is called a controlled component. Managing multiple inputs as a single object state keeps form handling clean.`,code:`import { useState } from 'react';

function SignupForm() {
  const [form, setForm] = useState({ email: '', password: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(\`가입: \${form.email}\`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={form.email}
        onChange={handleChange} placeholder="이메일" />
      <input name="password" type="password" value={form.password}
        onChange={handleChange} placeholder="비밀번호" />
      <button type="submit">가입하기</button>
    </form>
  );
}`,codeLanguage:`jsx`,quiz:{question:`제어 컴포넌트(controlled component)의 핵심 특징은?`,questionEn:`What is the key characteristic of a controlled component?`,options:[`DOM이 입력값을 직접 관리한다`,`input의 value를 React state가 관리한다`,`ref로만 값을 읽는다`,`onChange가 필요 없다`],optionsEn:[`The DOM manages the input value directly`,`React state manages the input's value`,`Values are read only via ref`,`onChange is not needed`],correctIndex:1,explanation:`제어 컴포넌트는 input의 value를 React state와 연결하고 onChange로 갱신하여, state가 입력값의 단일 출처가 됩니다.`,explanationEn:`A controlled component binds the input's value to React state and updates it via onChange, making state the single source of truth.`}},{title:`실습 예제: 좋아요 토글 버튼`,titleEn:`Practice: Like Toggle Button`,content:`boolean 상태와 숫자 상태를 함께 다뤄, 누를 때마다 좋아요가 켜지고/꺼지며 카운트가 증감하는 버튼을 만들어 봅니다. 함수형 업데이트로 안전하게 카운트를 갱신합니다.`,contentEn:`Manage a boolean state and a number state together to build a button that toggles a like on/off and increments/decrements the count on each press. Update the count safely with a functional update.`,code:`import { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(12);

  function toggle() {
    setLiked(prev => !prev);
    setCount(prev => prev + (liked ? -1 : 1));
  }

  return (
    <button
      onClick={toggle}
      style={{
        padding: '8px 16px',
        border: '1px solid ' + (liked ? '#C8102E' : '#ccc'),
        background: liked ? '#FDECEE' : '#fff',
        color: liked ? '#C8102E' : '#333',
        borderRadius: 8, cursor: 'pointer'
      }}
    >
      {liked ? '♥' : '♡'} 좋아요 {count}
    </button>
  );
}`,codeLanguage:`jsx`}]},{id:`03-hooks`,chapter:3,titleKey:`react03`,sections:[{title:`useEffect Hook`,titleEn:`useEffect Hook`,content:`useEffect는 컴포넌트의 생명주기에 따라 부수 효과(side effect)를 수행합니다. API 호출, 이벤트 리스너 등록, 타이머 설정 등에 사용합니다. 의존성 배열로 실행 시점을 제어하며, 반환하는 함수는 정리(cleanup) 작업에 사용됩니다.`,contentEn:`useEffect performs side effects based on component lifecycle. Used for API calls, event listeners, timers, etc. The dependency array controls when it runs, and the returned function is used for cleanup.`,code:`import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // 클린업 함수 (언마운트 또는 의존성 변경 시)
    return () => clearInterval(interval);
  }, [isRunning]); // isRunning이 변경될 때만 실행

  return (
    <div>
      <h3>타이머: {seconds}초</h3>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? '정지' : '시작'}
      </button>
      <button onClick={() => { setIsRunning(false); setSeconds(0); }}>
        리셋
      </button>
    </div>
  );
}`,codeLanguage:`jsx`,quiz:{question:`useEffect의 빈 의존성 배열 []은 언제 실행되나요?`,questionEn:`When does useEffect with empty dependency array [] run?`,options:[`매 렌더링마다`,`컴포넌트 마운트 시 1회만`,`상태 변경 시마다`,`언마운트 시에만`],optionsEn:[`Every render`,`Only once on mount`,`Every state change`,`Only on unmount`],correctIndex:1,explanation:`빈 배열 []을 전달하면 컴포넌트가 처음 마운트될 때 한 번만 실행됩니다.`,explanationEn:`Passing an empty array [] makes it run only once when the component first mounts.`}},{title:`데이터 페칭과 정리`,titleEn:`Data Fetching and Cleanup`,content:`useEffect 안에서 API를 호출해 데이터를 불러오는 것이 일반적인 패턴입니다. 로딩 상태와 에러 상태를 함께 관리하고, 컴포넌트가 언마운트되었을 때 상태 업데이트를 막기 위해 정리 함수로 플래그를 관리하는 것이 좋습니다.`,contentEn:`Fetching data by calling an API inside useEffect is a common pattern. Manage loading and error states together, and use a cleanup function with a flag to prevent state updates after the component unmounts.`,code:`import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        if (active) {        // 언마운트 후 setState 방지
          setUsers(data);
          setLoading(false);
        }
      });

    return () => { active = false; };
  }, []);

  if (loading) return <p>불러오는 중...</p>;
  return (
    <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
  );
}`,codeLanguage:`jsx`,quiz:{question:`useEffect의 정리(cleanup) 함수를 사용하는 대표적인 이유는?`,questionEn:`What is a typical reason to use a useEffect cleanup function?`,options:[`컴포넌트를 더 빨리 렌더링하기 위해`,`타이머·구독·리스너를 해제하고 메모리 누수를 막기 위해`,`state를 초기화하기 위해`,`props를 변경하기 위해`],optionsEn:[`To render the component faster`,`To clear timers/subscriptions/listeners and prevent memory leaks`,`To reset state`,`To change props`],correctIndex:1,explanation:`정리 함수는 setInterval, 이벤트 리스너, 구독 등을 해제하여 메모리 누수와 잘못된 상태 업데이트를 방지합니다.`,explanationEn:`The cleanup function releases setInterval, event listeners, subscriptions, etc., preventing memory leaks and stale state updates.`}},{title:`커스텀 Hook 만들기`,titleEn:`Creating Custom Hooks`,content:`반복되는 상태 로직을 use로 시작하는 함수로 추출하면 커스텀 Hook이 됩니다. 여러 컴포넌트에서 동일한 로직을 재사용할 수 있어 코드가 깔끔해집니다. 예를 들어 localStorage와 동기화되는 상태를 Hook으로 만들 수 있습니다.`,contentEn:`Extracting repeated state logic into a function that starts with "use" creates a custom Hook. The same logic can be reused across multiple components, keeping code clean. For example, you can make a Hook for state synced with localStorage.`,code:`import { useState } from 'react';

// 커스텀 Hook - localStorage 동기화
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initial;
  });

  function update(newValue) {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  return [value, update];
}

// 사용
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      현재 테마: {theme}
    </button>
  );
}`,codeLanguage:`jsx`,quiz:{question:`커스텀 Hook의 이름이 따라야 하는 규칙은?`,questionEn:`What naming convention must a custom Hook follow?`,options:[`get으로 시작`,`use로 시작`,`Hook으로 끝남`,`대문자로 시작`],optionsEn:[`Start with get`,`Start with use`,`End with Hook`,`Start with uppercase`],correctIndex:1,explanation:`커스텀 Hook은 반드시 use로 시작해야 React가 Hook 규칙을 적용하고 린터가 올바르게 검사할 수 있습니다.`,explanationEn:`A custom Hook must start with "use" so React applies the Rules of Hooks and the linter can check it correctly.`}},{title:`실습 예제: 창 크기 추적기`,titleEn:`Practice: Window Size Tracker`,content:`useEffect로 resize 이벤트를 구독하고 정리(cleanup)에서 해제하는 패턴을 실습합니다. 이벤트 리스너를 등록·해제하는 흐름이 핵심입니다. 브라우저 창 크기를 바꾸면 값이 갱신됩니다.`,contentEn:`Practice subscribing to the resize event with useEffect and unsubscribing in cleanup. The key is the register/unregister flow for event listeners. The value updates as you resize the browser window.`,code:`import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize); // 정리
  }, []);

  return width;
}

function ResponsiveBadge() {
  const width = useWindowWidth();
  const device = width < 600 ? '모바일' : width < 1024 ? '태블릿' : '데스크톱';
  return <p>현재 너비: {width}px → {device}</p>;
}`,codeLanguage:`jsx`}]},{id:`04-context`,chapter:4,titleKey:`react04`,sections:[{title:`Context로 전역 상태 공유`,titleEn:`Sharing Global State with Context`,content:`props를 여러 단계로 내려보내는 prop drilling을 피하려면 Context를 사용합니다. createContext로 컨텍스트를 만들고 Provider로 값을 공급하면, 하위 컴포넌트는 useContext로 어디서든 그 값을 읽을 수 있습니다. 테마·로그인 정보 등 전역 데이터에 적합합니다.`,contentEn:`To avoid prop drilling — passing props down many levels — use Context. Create a context with createContext and supply a value with Provider; descendant components can read it anywhere with useContext. It suits global data like theme and auth info.`,code:`import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        토글
      </button>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  // 중간 컴포넌트가 props를 전달하지 않아도 됨
  const theme = useContext(ThemeContext);
  return <p>현재 테마: {theme}</p>;
}`,codeLanguage:`jsx`,quiz:{question:`Context를 사용하는 주된 이유는?`,questionEn:`What is the main reason to use Context?`,options:[`렌더링 속도를 높이려고`,`prop drilling 없이 전역 값을 하위에 공유하려고`,`CSS를 적용하려고`,`서버와 통신하려고`],optionsEn:[`To speed up rendering`,`To share global values to descendants without prop drilling`,`To apply CSS`,`To communicate with a server`],correctIndex:1,explanation:`Context는 중간 컴포넌트들을 거쳐 props를 일일이 전달하지 않고도 트리 하위에 값을 공급합니다.`,explanationEn:`Context supplies values to descendants without manually passing props through intermediate components.`}},{title:`useReducer로 복잡한 상태 관리`,titleEn:`Managing Complex State with useReducer`,content:`여러 값이 함께 바뀌거나 상태 전이가 복잡할 때는 useReducer가 useState보다 적합합니다. (state, action) => newState 형태의 리듀서 함수로 상태 변경 로직을 한곳에 모으고, dispatch로 액션을 보냅니다.`,contentEn:`When multiple values change together or state transitions are complex, useReducer fits better than useState. A reducer function of the form (state, action) => newState centralizes update logic, and you send actions with dispatch.`,code:`import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'inc': return { count: state.count + 1 };
    case 'dec': return { count: state.count - 1 };
    case 'reset': return { count: 0 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: 'dec' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>리셋</button>
      <button onClick={() => dispatch({ type: 'inc' })}>+1</button>
    </div>
  );
}`,codeLanguage:`jsx`,quiz:{question:`useReducer의 리듀서 함수 시그니처로 올바른 것은?`,questionEn:`What is the correct reducer function signature for useReducer?`,options:[`(action) => state`,`(state, action) => newState`,`(props) => state`,`() => dispatch`],optionsEn:[`(action) => state`,`(state, action) => newState`,`(props) => state`,`() => dispatch`],correctIndex:1,explanation:`리듀서는 현재 state와 action을 받아 새로운 state를 반환하는 순수 함수 (state, action) => newState입니다.`,explanationEn:`A reducer is a pure function (state, action) => newState that takes the current state and an action and returns the next state.`}},{title:`성능 최적화 (memo, useMemo, useCallback)`,titleEn:`Performance Optimization (memo, useMemo, useCallback)`,content:`React.memo는 props가 같으면 컴포넌트 재렌더링을 건너뜁니다. useMemo는 비싼 계산 결과를, useCallback은 함수 참조를 메모이제이션해 불필요한 재계산·재생성을 막습니다. 단, 과도한 최적화는 오히려 복잡도를 키우므로 병목이 확인될 때 적용합니다.`,contentEn:`React.memo skips re-rendering a component when its props are unchanged. useMemo memoizes an expensive computation result and useCallback memoizes a function reference, preventing unnecessary recomputation/recreation. Apply them when a bottleneck is confirmed, since over-optimizing adds complexity.`,code:`import { memo, useMemo, useCallback, useState } from 'react';

const Child = memo(function Child({ onClick }) {
  return <button onClick={onClick}>자식 버튼</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  // 비싼 계산 메모이제이션
  const doubled = useMemo(() => count * 2, [count]);

  // 함수 참조 고정 → Child 불필요한 재렌더 방지
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);

  return (
    <div>
      <p>{count} × 2 = {doubled}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
      <Child onClick={handleClick} />
    </div>
  );
}`,codeLanguage:`jsx`,quiz:{question:`함수의 참조를 고정(메모이제이션)해 자식의 불필요한 재렌더링을 막는 Hook은?`,questionEn:`Which Hook memoizes a function reference to prevent unnecessary child re-renders?`,options:[`useMemo`,`useCallback`,`useEffect`,`useRef`],optionsEn:[`useMemo`,`useCallback`,`useEffect`,`useRef`],correctIndex:1,explanation:`useCallback은 의존성이 바뀌지 않는 한 동일한 함수 참조를 유지합니다. useMemo는 값(계산 결과)을 메모이제이션합니다.`,explanationEn:`useCallback keeps the same function reference as long as dependencies are unchanged. useMemo memoizes a value (computation result).`}},{title:`실습 예제: 테마 Context 적용`,titleEn:`Practice: Applying a Theme Context`,content:`Context와 커스텀 Hook을 결합해, 어디서든 테마를 읽고 토글할 수 있는 작은 시스템을 만들어 봅니다. Provider로 감싸고 useTheme()으로 소비하는 전형적인 패턴입니다.`,contentEn:`Combine Context and a custom Hook to build a small system where the theme can be read and toggled anywhere. It is the typical pattern of wrapping with a Provider and consuming via useTheme().`,code:`import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const toggle = () => setDark(d => !d);
  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div style={{ background: dark ? '#111' : '#fff', color: dark ? '#fff' : '#111', padding: 20 }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// 커스텀 Hook으로 소비 편의 제공
const useTheme = () => useContext(ThemeContext);

function Header() {
  const { dark, toggle } = useTheme();
  return <button onClick={toggle}>{dark ? '🌙 다크' : '☀️ 라이트'}</button>;
}

function App() {
  return <ThemeProvider><Header /></ThemeProvider>;
}`,codeLanguage:`jsx`}]}],c=[{id:`01-types`,chapter:1,titleKey:`ts01`,sections:[{title:`TypeScript 설치 & 프로젝트 설정`,titleEn:`Installing TypeScript & Project Setup`,content:`TypeScript는 Node.js 환경에서 동작하므로 먼저 Node.js를 설치합니다(설치는 운영체제마다 다르니 본인 OS 창을 따라 하세요). 그다음 방법은 두 가지입니다: ① 새 프로젝트라면 Vite의 react-ts 템플릿으로 바로 시작, ② 기존 프로젝트라면 typescript를 설치하고 tsc --init으로 tsconfig.json을 생성합니다. tsc는 .ts를 .js로 컴파일하는 컴파일러입니다.`,contentEn:`TypeScript runs in a Node.js environment, so install Node.js first (the method differs by OS — follow your OS panel). Then you have two options: ① for a new project, start with Vite's react-ts template; ② for an existing project, install typescript and generate tsconfig.json with tsc --init. tsc is the compiler that turns .ts into .js.`,codeBlocks:[{label:`🪟 Windows`,code:`# Node.js 설치 (LTS)
winget install OpenJS.NodeJS.LTS
node -v   # 새 PowerShell 창에서 확인`,codeLanguage:`powershell`},{label:`🍎 macOS`,code:`# Node.js 설치 — Homebrew (또는 nvm)
brew install node
node -v`,codeLanguage:`bash`},{label:`🐧 Linux`,code:`# Node.js 설치 — nvm 권장
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install --lts
node -v`,codeLanguage:`bash`}],code:`# 방법 ① 새 프로젝트: Vite react-ts 템플릿 (운영체제 공통)
npm create vite@latest my-app -- --template react-ts
cd my-app && npm install && npm run dev

# 방법 ② 기존 프로젝트에 TypeScript 추가
npm install -D typescript
npx tsc --init           # tsconfig.json 생성

# .ts 파일 컴파일 / 타입 검사
npx tsc                  # 컴파일
npx tsc --noEmit         # 타입 검사만 (출력 파일 없이)`,codeLanguage:`bash`,quiz:{question:`TypeScript 설정 파일을 생성하는 명령은?`,questionEn:`Which command generates the TypeScript config file?`,options:[`npm init`,`npx tsc --init`,`node tsconfig`,`vite build`],optionsEn:[`npm init`,`npx tsc --init`,`node tsconfig`,`vite build`],correctIndex:1,explanation:`npx tsc --init 은 컴파일러 옵션이 담긴 tsconfig.json을 생성합니다. 새 프로젝트는 Vite react-ts 템플릿이 이를 자동 포함합니다.`,explanationEn:`npx tsc --init creates tsconfig.json with compiler options. A new Vite react-ts project includes it automatically.`}},{title:`TypeScript 기초 타입`,titleEn:`TypeScript Basic Types`,content:`TypeScript는 JavaScript에 정적 타입을 추가한 언어입니다. 변수, 함수 매개변수, 반환값에 타입을 명시하여 코드의 안정성을 높입니다. 기본 타입: string, number, boolean, array, object, any, void, null, undefined.`,contentEn:`TypeScript adds static types to JavaScript. Specify types on variables, function parameters, and return values for better code reliability. Basic types: string, number, boolean, array, object, any, void, null, undefined.`,code:`// 기본 타입
let name: string = "DreamIT";
let age: number = 25;
let isStudent: boolean = true;
let scores: number[] = [90, 85, 92];

// 함수 타입
function add(a: number, b: number): number {
  return a + b;
}

// 객체 타입
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // optional
}

const user: User = {
  id: 1,
  name: "홍길동",
  email: "hong@example.com"
};

// 유니온 타입
type Status = "pending" | "active" | "inactive";
let userStatus: Status = "active";`,codeLanguage:`typescript`,quiz:{question:`TypeScript에서 선택적 속성을 표시하는 기호는?`,questionEn:`What symbol marks optional properties in TypeScript?`,options:[`!`,`?`,`*`,`&`],optionsEn:[`!`,`?`,`*`,`&`],correctIndex:1,explanation:`속성명 뒤에 ?를 붙이면 해당 속성이 선택적(있어도 되고 없어도 됨)임을 나타냅니다.`,explanationEn:`Adding ? after a property name indicates it is optional (may or may not exist).`}},{title:`interface와 type`,titleEn:`interface and type`,content:`객체의 형태를 정의할 때 interface와 type 별칭을 모두 사용할 수 있습니다. interface는 extends로 확장하거나 같은 이름으로 선언을 병합할 수 있고, type은 유니온·교차·튜플 등 더 다양한 형태를 표현할 수 있습니다. 객체 구조에는 주로 interface, 그 외에는 type을 권장합니다.`,contentEn:`You can define the shape of an object with both interface and type aliases. interface can be extended with extends or merged across declarations of the same name, while type can express more varied shapes such as unions, intersections, and tuples. interface is preferred for object structures, type for the rest.`,code:`// interface - 확장 가능
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = { name: '바둑이', breed: '진돗개' };

// type - 유니온, 교차, 튜플
type ID = string | number;          // 유니온
type Point = [number, number];      // 튜플

type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged;          // 교차(intersection)

const p: Person = { name: '홍길동', age: 30 };`,codeLanguage:`typescript`,quiz:{question:`interface와 type의 차이로 올바른 것은?`,questionEn:`Which is a correct difference between interface and type?`,options:[`type만 객체를 정의할 수 있다`,`interface는 같은 이름으로 선언 병합이 가능하다`,`interface는 유니온 타입을 만들 수 있다`,`둘은 완전히 동일하다`],optionsEn:[`Only type can define objects`,`interface supports declaration merging with the same name`,`interface can create union types`,`They are completely identical`],correctIndex:1,explanation:`interface는 같은 이름으로 여러 번 선언하면 자동으로 병합되며 extends로 확장됩니다. 유니온·튜플 표현은 type이 더 적합합니다.`,explanationEn:`interface merges automatically when declared multiple times with the same name and extends with extends. type is more suitable for unions and tuples.`}},{title:`함수 타입과 제네릭 미리보기`,titleEn:`Function Types and Generics Preview`,content:`함수의 매개변수와 반환 타입을 명시할 수 있으며, 선택적 매개변수(?)와 기본값을 지정할 수 있습니다. 화살표 함수에도 타입을 붙일 수 있고, 함수 타입 자체를 type으로 정의해 콜백에 활용합니다.`,contentEn:`You can specify a function's parameter and return types, with optional parameters (?) and default values. Arrow functions can be typed too, and you can define a function type itself with type for use in callbacks.`,code:`// 선택적 매개변수와 기본값
function greet(name: string, greeting: string = "안녕"): string {
  return \`\${greeting}, \${name}님!\`;
}

// 화살표 함수 타입
const multiply = (a: number, b: number): number => a * b;

// 함수 타입 별칭 (콜백)
type Comparator = (a: number, b: number) => number;

const numbers = [3, 1, 2];
const asc: Comparator = (a, b) => a - b;
numbers.sort(asc); // [1, 2, 3]

// 반환값이 없으면 void
function log(message: string): void {
  console.log(message);
}`,codeLanguage:`typescript`,quiz:{question:`반환값이 없는 함수의 반환 타입으로 적절한 것은?`,questionEn:`What is the appropriate return type for a function that returns nothing?`,options:[`null`,`void`,`never`,`undefined만 가능`],optionsEn:[`null`,`void`,`never`,`only undefined`],correctIndex:1,explanation:`명시적으로 값을 반환하지 않는 함수의 반환 타입은 void로 표기합니다.`,explanationEn:`A function that does not explicitly return a value has the return type void.`}},{title:`실습 예제: 장바구니 합계 함수 타이핑`,titleEn:`Practice: Typing a Cart Total Function`,content:`interface로 상품 타입을 정의하고, 그 배열을 받아 합계를 계산하는 함수에 타입을 부여해 봅니다. 잘못된 속성에 접근하면 컴파일 단계에서 오류가 잡히는 것을 확인하세요.`,contentEn:`Define a product type with an interface and type a function that takes an array of them and computes the total. Notice that accessing a wrong property is caught at compile time.`,code:`interface CartItem {
  name: string;
  price: number;
  qty: number;
}

function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

const cart: CartItem[] = [
  { name: '키보드', price: 89000, qty: 1 },
  { name: '마우스', price: 32000, qty: 2 }
];

const total: number = cartTotal(cart);  // 153000
// cart[0].pirce  ← 오타 시 컴파일 에러로 즉시 발견`,codeLanguage:`typescript`}]},{id:`02-generics`,chapter:2,titleKey:`ts02`,sections:[{title:`제네릭(Generics)`,titleEn:`Generics`,content:`제네릭은 타입을 매개변수처럼 사용하여 재사용 가능한 코드를 작성합니다. 함수, 인터페이스, 클래스에 적용할 수 있으며, 타입 안전성을 유지하면서 유연한 코드를 만들 수 있습니다. extends로 타입에 제약을 걸 수도 있습니다.`,contentEn:`Generics use types as parameters to write reusable code. They can be applied to functions, interfaces, and classes, creating flexible code while maintaining type safety. You can also constrain types with extends.`,code:`// 제네릭 함수
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNum = getFirst([1, 2, 3]);      // number
const firstStr = getFirst(["a", "b"]);     // string

// 제네릭 인터페이스
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User { id: number; name: string; }

const response: ApiResponse<User> = {
  data: { id: 1, name: "홍길동" },
  status: 200,
  message: "성공"
};

// 제네릭 제약 (extends)
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
getLength("hello");    // 5
getLength([1, 2, 3]);  // 3`,codeLanguage:`typescript`,quiz:{question:`제네릭에서 <T extends { length: number }>가 의미하는 것은?`,questionEn:`What does <T extends { length: number }> mean in generics?`,options:[`T는 항상 number여야 한다`,`T는 length 속성을 가진 타입으로 제한된다`,`T는 배열만 가능하다`,`T는 무시된다`],optionsEn:[`T must always be number`,`T is constrained to types having a length property`,`T can only be an array`,`T is ignored`],correctIndex:1,explanation:`extends는 제네릭 타입에 제약을 거는 문법으로, 여기서는 length 속성을 가진 타입(문자열, 배열 등)만 허용합니다.`,explanationEn:`extends constrains a generic type; here it allows only types with a length property (strings, arrays, etc.).`}},{title:`유틸리티 타입`,titleEn:`Utility Types`,content:`TypeScript는 기존 타입을 변형해 새 타입을 만드는 유틸리티 타입을 내장하고 있습니다. Partial<T>는 모든 속성을 선택적으로, Required<T>는 모두 필수로, Pick<T, K>는 일부 속성만, Omit<T, K>는 특정 속성을 제외하여 타입을 만듭니다.`,contentEn:`TypeScript provides built-in utility types that transform existing types. Partial<T> makes all properties optional, Required<T> makes all required, Pick<T, K> selects some properties, and Omit<T, K> excludes specific properties.`,code:`interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Partial - 모든 속성 선택적 (수정 시 유용)
function updateUser(id: number, changes: Partial<User>) {
  // changes는 일부 속성만 있어도 됨
}
updateUser(1, { name: '새이름' });

// Pick - 일부 속성만 추출
type UserPreview = Pick<User, 'id' | 'name'>;
const preview: UserPreview = { id: 1, name: '홍길동' };

// Omit - 특정 속성 제외 (비밀번호 숨기기)
type PublicUser = Omit<User, 'password'>;
const pub: PublicUser = { id: 1, name: '홍길동', email: 'a@b.com' };`,codeLanguage:`typescript`,quiz:{question:`User 타입에서 password를 제외한 타입을 만드는 유틸리티 타입은?`,questionEn:`Which utility type creates a type excluding password from User?`,options:[`Pick<User, "password">`,`Omit<User, "password">`,`Partial<User>`,`Required<User>`],optionsEn:[`Pick<User, "password">`,`Omit<User, "password">`,`Partial<User>`,`Required<User>`],correctIndex:1,explanation:`Omit<T, K>는 타입 T에서 지정한 속성 K를 제외한 새 타입을 만듭니다. 반대로 Pick은 지정한 속성만 추출합니다.`,explanationEn:`Omit<T, K> creates a new type from T excluding the specified property K. Conversely, Pick extracts only the specified properties.`}},{title:`타입 가드와 좁히기`,titleEn:`Type Guards and Narrowing`,content:`유니온 타입을 다룰 때 typeof, instanceof, in 연산자 등으로 타입을 좁히면(narrowing) TypeScript가 각 분기에서 정확한 타입을 추론합니다. 사용자 정의 타입 가드(value is Type)로 더 복잡한 검사도 만들 수 있습니다.`,contentEn:`When handling union types, narrowing with typeof, instanceof, or the in operator lets TypeScript infer the exact type in each branch. You can also create more complex checks with user-defined type guards (value is Type).`,code:`// typeof로 좁히기
function formatValue(value: string | number): string {
  if (typeof value === 'number') {
    return value.toFixed(2);   // 여기서 value는 number
  }
  return value.toUpperCase();  // 여기서 value는 string
}

// in 연산자로 좁히기
type Cat = { meow: () => void };
type Dog = { bark: () => void };

function speak(animal: Cat | Dog) {
  if ('meow' in animal) {
    animal.meow();   // Cat으로 좁혀짐
  } else {
    animal.bark();   // Dog로 좁혀짐
  }
}

// 사용자 정의 타입 가드
function isString(v: unknown): v is string {
  return typeof v === 'string';
}`,codeLanguage:`typescript`,quiz:{question:`string | number 유니온에서 number 분기로 타입을 좁히는 방법은?`,questionEn:`How do you narrow to the number branch in a string | number union?`,options:[`value === number`,`typeof value === "number"`,`value instanceof Number`,`value as number`],optionsEn:[`value === number`,`typeof value === "number"`,`value instanceof Number`,`value as number`],correctIndex:1,explanation:`typeof value === "number" 검사를 통과한 분기에서는 TypeScript가 value를 number로 좁혀 추론합니다.`,explanationEn:`In the branch passing the typeof value === "number" check, TypeScript narrows value to number.`}},{title:`실습 예제: 제네릭 페이지네이션 타입`,titleEn:`Practice: Generic Pagination Type`,content:`제네릭과 유틸리티 타입을 조합해 어떤 데이터든 담을 수 있는 페이지네이션 응답 타입을 만들어 봅니다. 실제 API 설계에서 자주 쓰는 재사용 가능한 패턴입니다.`,contentEn:`Combine generics and utility types to build a pagination response type that can hold any data. It is a reusable pattern frequently used in real API design.`,code:`// 어떤 항목 타입이든 담는 페이지네이션 응답
interface Paginated<T> {
  items: T[];
  page: number;
  total: number;
}

interface Product { id: number; name: string; price: number; }

// 목록에는 가격을 뺀 요약 타입만 노출
type ProductSummary = Omit<Product, 'price'>;

const res: Paginated<ProductSummary> = {
  items: [{ id: 1, name: '키보드' }, { id: 2, name: '마우스' }],
  page: 1,
  total: 42
};

function firstName(r: Paginated<ProductSummary>): string | undefined {
  return r.items[0]?.name;
}`,codeLanguage:`typescript`}]},{id:`03-advanced-types`,chapter:3,titleKey:`ts03`,sections:[{title:`enum과 리터럴 타입`,titleEn:`Enums and Literal Types`,content:`enum은 이름이 있는 상수 집합을 정의합니다. 다만 번들 크기와 트리셰이킹 측면에서, 유니온 리터럴 타입(as const)이 더 가볍고 권장되는 경우가 많습니다. 두 방식의 차이를 이해하고 상황에 맞게 선택합니다.`,contentEn:`enum defines a named set of constants. However, for bundle size and tree-shaking, union literal types (as const) are often lighter and recommended. Understand the difference and choose appropriately.`,code:`// enum
enum Role { Admin = 'ADMIN', User = 'USER', Guest = 'GUEST' }
const r: Role = Role.Admin;

// 유니온 리터럴 (더 가벼움)
type Status = 'pending' | 'active' | 'done';
const s: Status = 'active';

// as const 객체 → 리터럴 유니온 추출
const COLORS = { red: '#f00', blue: '#00f' } as const;
type ColorKey = keyof typeof COLORS;   // 'red' | 'blue'
type ColorValue = typeof COLORS[ColorKey]; // '#f00' | '#00f'`,codeLanguage:`typescript`,quiz:{question:`type Status = 'pending' | 'active' | 'done' 는 어떤 타입인가요?`,questionEn:`What kind of type is type Status = 'pending' | 'active' | 'done'?`,options:[`enum 타입`,`문자열 리터럴 유니온 타입`,`제네릭 타입`,`튜플 타입`],optionsEn:[`An enum type`,`A string literal union type`,`A generic type`,`A tuple type`],correctIndex:1,explanation:`특정 문자열 값들을 |로 결합한 문자열 리터럴 유니온 타입으로, 해당 값들만 허용합니다.`,explanationEn:`It is a string literal union type combining specific string values with |, allowing only those values.`}},{title:`맵드 타입과 조건부 타입`,titleEn:`Mapped and Conditional Types`,content:`맵드 타입은 [K in keyof T] 문법으로 기존 타입의 속성을 순회하며 새 타입을 만듭니다. 조건부 타입(T extends U ? X : Y)은 타입에 따라 분기합니다. 유틸리티 타입(Partial, Readonly 등)도 내부적으로 이 기능으로 구현됩니다.`,contentEn:`Mapped types iterate over an existing type's properties with the [K in keyof T] syntax to build new types. Conditional types (T extends U ? X : Y) branch based on a type. Utility types (Partial, Readonly, etc.) are built on these internally.`,code:`interface User { id: number; name: string; }

// 맵드 타입 - 모든 속성을 읽기 전용으로
type ReadonlyUser = { readonly [K in keyof User]: User[K] };

// 맵드 타입 - 모든 속성을 선택적으로 (Partial 구현)
type MyPartial<T> = { [K in keyof T]?: T[K] };

// 조건부 타입
type IsString<T> = T extends string ? 'yes' : 'no';
type A = IsString<string>;  // 'yes'
type B = IsString<number>;  // 'no'`,codeLanguage:`typescript`,quiz:{question:`조건부 타입 T extends U ? X : Y 에서 T가 U에 할당 가능하면 결과는?`,questionEn:`In the conditional type T extends U ? X : Y, what is the result if T is assignable to U?`,options:[`Y`,`X`,`never`,`unknown`],optionsEn:[`Y`,`X`,`never`,`unknown`],correctIndex:1,explanation:`T가 U에 할당 가능(조건 참)하면 X, 아니면 Y가 됩니다. 삼항 연산자와 동일한 구조입니다.`,explanationEn:`If T is assignable to U (condition true) the result is X, otherwise Y — the same structure as a ternary operator.`}},{title:`unknown, never와 타입 단언`,titleEn:`unknown, never, and Type Assertions`,content:`unknown은 any보다 안전한 최상위 타입으로, 사용 전 타입 검사를 강제합니다. never는 절대 발생하지 않는 값을 의미해 완전성 검사에 쓰입니다. as로 타입을 단언할 수 있지만 남용하면 타입 안전성을 해치므로 주의합니다.`,contentEn:`unknown is a safer top type than any, forcing a type check before use. never represents a value that never occurs, used in exhaustiveness checks. You can assert a type with as, but overuse undermines type safety, so be careful.`,code:`// unknown - 검사 후 사용
function handle(value: unknown) {
  if (typeof value === 'string') {
    return value.toUpperCase();   // 여기서 string으로 좁혀짐
  }
  return String(value);
}

// never - 완전성 검사
type Shape = 'circle' | 'square';
function area(s: Shape): number {
  switch (s) {
    case 'circle': return 3.14;
    case 'square': return 4;
    default:
      const _exhaustive: never = s;  // 누락된 케이스가 있으면 컴파일 에러
      return _exhaustive;
  }
}`,codeLanguage:`typescript`,quiz:{question:`any 대신 unknown을 쓰는 이유는?`,questionEn:`Why use unknown instead of any?`,options:[`더 빠르게 동작해서`,`사용 전에 타입 검사를 강제해 더 안전해서`,`문자열만 담을 수 있어서`,`차이가 없어서`],optionsEn:[`It runs faster`,`It is safer by forcing a type check before use`,`It can only hold strings`,`There is no difference`],correctIndex:1,explanation:`unknown은 어떤 값이든 받지만, 좁히기(narrowing) 없이는 사용할 수 없어 any보다 타입 안전합니다.`,explanationEn:`unknown accepts any value but cannot be used without narrowing, making it type-safer than any.`}},{title:`실습 예제: 판별 유니온으로 상태 처리`,titleEn:`Practice: Handling State with a Discriminated Union`,content:`공통 필드(status)를 판별자로 갖는 유니온 타입을 만들어, switch로 각 상태를 안전하게 처리해 봅니다. API 로딩 상태를 표현하는 실전 패턴으로, 빠진 케이스를 never로 잡아낼 수 있습니다.`,contentEn:`Build a union type with a common discriminant field (status) and handle each state safely with switch. This is a real-world pattern for representing API loading states, where missing cases are caught with never.`,code:`type Fetch<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

function render(state: Fetch<string[]>): string {
  switch (state.status) {
    case 'loading':
      return '불러오는 중...';
    case 'success':
      return state.data.join(', ');   // 여기서만 data 접근 가능
    case 'error':
      return '에러: ' + state.message; // 여기서만 message 접근 가능
    default:
      const _exhaustive: never = state;
      return _exhaustive;
  }
}

render({ status: 'success', data: ['A', 'B'] });`,codeLanguage:`typescript`}]},{id:`04-react-ts`,chapter:4,titleKey:`ts04`,sections:[{title:`컴포넌트 Props 타입`,titleEn:`Typing Component Props`,content:`React 컴포넌트의 props는 interface나 type으로 정의합니다. 선택적 prop은 ?, 자식 요소는 React.ReactNode, 이벤트 핸들러는 적절한 이벤트 타입으로 명시합니다. 이렇게 하면 잘못된 prop 사용을 컴파일 단계에서 잡을 수 있습니다.`,contentEn:`Type a React component's props with interface or type. Mark optional props with ?, children with React.ReactNode, and event handlers with the appropriate event type. This catches incorrect prop usage at compile time.`,code:`interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';   // 선택적
  disabled?: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

function Button({ label, variant = 'primary', onClick, children }: ButtonProps) {
  return (
    <button className={variant} onClick={onClick}>
      {label}{children}
    </button>
  );
}

// 사용 - label 누락 시 컴파일 에러
<Button label="저장" onClick={() => save()} />`,codeLanguage:`tsx`,quiz:{question:`React에서 자식 요소(children)를 받을 때 적절한 타입은?`,questionEn:`What is the appropriate type for receiving children in React?`,options:[`string`,`React.ReactNode`,`any[]`,`HTMLElement`],optionsEn:[`string`,`React.ReactNode`,`any[]`,`HTMLElement`],correctIndex:1,explanation:`React.ReactNode는 문자열·숫자·JSX·배열·null 등 렌더링 가능한 모든 자식을 포괄하는 타입입니다.`,explanationEn:`React.ReactNode covers all renderable children — strings, numbers, JSX, arrays, null, and more.`}},{title:`Hook과 이벤트 타입`,titleEn:`Typing Hooks and Events`,content:`useState는 보통 초기값으로 타입이 추론되지만, 제네릭으로 명시할 수도 있습니다(useState<User | null>(null)). useRef는 요소 타입을 지정하고, 이벤트 핸들러는 React.ChangeEvent, React.MouseEvent 등으로 정확히 타이핑합니다.`,contentEn:`useState usually infers its type from the initial value, but you can specify it with a generic (useState<User | null>(null)). useRef specifies the element type, and event handlers are typed precisely with React.ChangeEvent, React.MouseEvent, etc.`,code:`import { useState, useRef } from 'react';

interface User { id: number; name: string; }

function Form() {
  // 제네릭으로 타입 명시
  const [user, setUser] = useState<User | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 이벤트 타입 명시
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  function focusInput() {
    inputRef.current?.focus();
  }

  return <input ref={inputRef} onChange={handleChange} />;
}`,codeLanguage:`tsx`,quiz:{question:`초기값이 null인 상태에 User 객체도 담으려면 useState를 어떻게 선언하나요?`,questionEn:`How do you declare useState to hold a User object with an initial value of null?`,options:[`useState(null)`,`useState<User | null>(null)`,`useState<User>(null)`,`useState(User)`],optionsEn:[`useState(null)`,`useState<User | null>(null)`,`useState<User>(null)`,`useState(User)`],correctIndex:1,explanation:`초기값이 null이면 타입 추론이 null로 고정되므로, 제네릭 useState<User | null>(null)로 두 타입을 모두 허용해야 합니다.`,explanationEn:`With a null initial value, inference fixes the type to null, so use the generic useState<User | null>(null) to allow both types.`}},{title:`API 응답과 제네릭 활용`,titleEn:`API Responses and Generics in Practice`,content:`fetch로 받은 데이터에 타입을 부여하면 자동완성과 오류 검출이 가능합니다. 제네릭 함수로 재사용 가능한 API 호출기를 만들고, 응답 형태를 interface로 정의해 타입 안전한 데이터 흐름을 구성합니다.`,contentEn:`Typing data fetched via fetch enables autocomplete and error detection. Build a reusable API caller with a generic function and define the response shape with an interface for a type-safe data flow.`,code:`interface Post { id: number; title: string; body: string; }

// 제네릭 API 호출기
async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error('요청 실패: ' + res.status);
  return res.json() as Promise<T>;
}

// 사용 - posts는 Post[]로 추론됨
async function loadPosts() {
  const posts = await fetchJson<Post[]>('/api/posts');
  return posts.map(p => p.title);   // p.title 자동완성
}`,codeLanguage:`tsx`,quiz:{question:`fetchJson<Post[]>(url)에서 제네릭 <Post[]>의 역할은?`,questionEn:`What is the role of the generic <Post[]> in fetchJson<Post[]>(url)?`,options:[`URL을 검증한다`,`반환되는 데이터의 타입을 Post[]로 지정한다`,`요청을 반복한다`,`에러를 무시한다`],optionsEn:[`Validates the URL`,`Specifies the returned data type as Post[]`,`Repeats the request`,`Ignores errors`],correctIndex:1,explanation:`제네릭 인자로 반환 타입을 Post[]로 지정해, 호출 결과가 Post 배열로 추론되고 자동완성·타입 검사가 적용됩니다.`,explanationEn:`The generic argument sets the return type to Post[], so the result is inferred as an array of Post with autocomplete and type checking.`}},{title:`실습 예제: 제네릭 List 컴포넌트`,titleEn:`Practice: Generic List Component`,content:`제네릭을 사용해 어떤 타입의 배열이든 렌더링할 수 있는 재사용 List 컴포넌트를 만들어 봅니다. renderItem과 keyOf를 props로 받아 타입 안전성을 유지하면서 유연하게 동작합니다.`,contentEn:`Use generics to build a reusable List component that can render an array of any type. It takes renderItem and keyOf as props, staying flexible while preserving type safety.`,code:`interface ListProps<T> {
  items: T[];
  keyOf: (item: T) => string | number;
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, keyOf, renderItem }: ListProps<T>) {
  return <ul>{items.map(item => <li key={keyOf(item)}>{renderItem(item)}</li>)}</ul>;
}

interface User { id: number; name: string; }

function UserList({ users }: { users: User[] }) {
  return (
    <List
      items={users}
      keyOf={u => u.id}
      renderItem={u => <strong>{u.name}</strong>}  // u는 User로 추론됨
    />
  );
}`,codeLanguage:`tsx`}]}],l=[{id:`01-basics`,chapter:1,titleKey:`git01`,sections:[{title:`Git 설치와 초기 설정`,titleEn:`Installing Git & First-Time Setup`,content:`Git 명령을 쓰려면 먼저 Git을 설치해야 합니다. 설치 방법은 운영체제마다 다르니 본인 OS의 창만 따라 하세요(아래). 설치 후 새 터미널에서 git --version으로 확인합니다. 그다음 모든 커밋에 기록될 이름·이메일을 한 번만 설정하면(전역 설정) 준비가 끝납니다. 이름·이메일은 GitHub 계정과 같게 맞추는 것을 권장합니다.`,contentEn:`To use Git commands, install Git first. The method differs by OS — follow only your OS panel below. After installing, verify with git --version in a new terminal. Then set the name/email recorded on every commit once (global config) and you are ready. It is recommended to match them to your GitHub account.`,codeBlocks:[{label:`🪟 Windows`,code:`# 방법 1) 공식 설치 파일: https://git-scm.com 에서 다운로드 후 설치
#         (설치 옵션은 기본값으로 Next)

# 방법 2) winget 패키지 매니저
winget install Git.Git

# ★ 설치 후 새 PowerShell 창을 열고 확인
git --version`,codeLanguage:`powershell`},{label:`🍎 macOS`,code:`# 방법 1) Homebrew (권장)
brew install git

# 방법 2) Xcode 명령줄 도구에 포함된 git 설치
xcode-select --install

# 확인
git --version`,codeLanguage:`bash`},{label:`🐧 Linux`,code:`# Debian / Ubuntu
sudo apt update && sudo apt install git

# Fedora / RHEL
sudo dnf install git

# 확인
git --version`,codeLanguage:`bash`}],code:`# 최초 1회: 커밋에 기록될 이름·이메일 설정 (전역)
git config --global user.name "Hong Gildong"
git config --global user.email "you@example.com"

# 기본 브랜치 이름을 main으로
git config --global init.defaultBranch main

# 설정 확인
git config --list`,codeLanguage:`bash`,quiz:{question:`Git 설치 후 가장 먼저 해야 할 전역 설정은?`,questionEn:`What global setup should you do right after installing Git?`,options:[`브랜치 삭제`,`user.name과 user.email 설정`,`저장소 푸시`,`파일 삭제`],optionsEn:[`Delete a branch`,`Set user.name and user.email`,`Push a repository`,`Delete files`],correctIndex:1,explanation:`git config --global로 이름·이메일을 한 번 설정해 두면 이후 모든 커밋에 작성자 정보로 기록됩니다.`,explanationEn:`Setting name/email once with git config --global records them as the author on all future commits.`}},{title:`Git 기초`,titleEn:`Git Basics`,content:`Git은 분산 버전 관리 시스템으로, 코드의 변경 이력을 추적하고 협업을 돕습니다. git init으로 저장소를 생성하고, add → commit → push 흐름으로 변경사항을 관리합니다. 작업 디렉터리 → 스테이징 영역 → 저장소의 3단계 구조를 이해하는 것이 핵심입니다.`,contentEn:`Git is a distributed version control system that tracks code changes and facilitates collaboration. Create a repository with git init, and manage changes with the add → commit → push workflow. Understanding the three-stage structure — working directory → staging area → repository — is key.`,code:`# Git 기본 명령어
git init                          # 저장소 초기화
git status                        # 상태 확인
git add index.html                # 파일 스테이징
git add .                         # 모든 변경 파일 스테이징
git commit -m "첫 번째 커밋"       # 커밋
git log --oneline                 # 커밋 로그

# 원격 저장소
git remote add origin https://github.com/user/repo.git
git push -u origin main           # 푸시
git pull origin main              # 풀`,codeLanguage:`bash`,quiz:{question:`git add 명령이 하는 일은?`,questionEn:`What does the git add command do?`,options:[`변경사항을 원격 저장소에 올린다`,`변경사항을 스테이징 영역에 추가한다`,`커밋을 되돌린다`,`새 브랜치를 만든다`],optionsEn:[`Pushes changes to the remote`,`Adds changes to the staging area`,`Reverts a commit`,`Creates a new branch`],correctIndex:1,explanation:`git add는 작업 디렉터리의 변경사항을 스테이징 영역에 올립니다. 이후 git commit으로 저장소에 기록됩니다.`,explanationEn:`git add stages changes from the working directory. They are then recorded into the repository with git commit.`}},{title:`브랜치와 병합`,titleEn:`Branches and Merging`,content:`브랜치는 독립적인 작업 공간으로, 메인 코드에 영향을 주지 않고 새 기능을 개발할 수 있습니다. 작업이 끝나면 merge로 변경사항을 합칩니다. 기능별로 브랜치를 나누는 것이 협업의 기본입니다.`,contentEn:`A branch is an independent workspace where you can develop new features without affecting the main code. When done, merge combines the changes. Splitting branches by feature is the basis of collaboration.`,code:`# 브랜치 생성 및 전환
git branch feature/login          # 브랜치 생성
git switch feature/login          # 브랜치 전환 (또는 git checkout)
git switch -c feature/signup      # 생성 + 전환

# 브랜치 목록과 병합
git branch                        # 브랜치 목록
git switch main                   # main으로 이동
git merge feature/login           # feature/login을 main에 병합

# 병합 완료 후 브랜치 삭제
git branch -d feature/login`,codeLanguage:`bash`,quiz:{question:`새 브랜치를 만들면서 동시에 전환하는 명령은?`,questionEn:`Which command creates a new branch and switches to it at once?`,options:[`git branch -c name`,`git switch -c name`,`git merge name`,`git checkout name`],optionsEn:[`git branch -c name`,`git switch -c name`,`git merge name`,`git checkout name`],correctIndex:1,explanation:`git switch -c name (또는 git checkout -b name)은 브랜치를 생성하면서 바로 그 브랜치로 전환합니다.`,explanationEn:`git switch -c name (or git checkout -b name) creates a branch and immediately switches to it.`}},{title:`되돌리기와 임시 저장`,titleEn:`Undoing and Stashing`,content:`실수한 변경사항을 되돌릴 때는 상황에 맞는 명령을 사용합니다. git restore는 작업 디렉터리 변경을 취소하고, git reset은 스테이징/커밋을 되돌리며, git revert는 기존 커밋을 취소하는 새 커밋을 만듭니다. git stash는 작업을 임시로 치워둘 때 유용합니다.`,contentEn:`Use the right command for the situation when undoing mistakes. git restore discards working directory changes, git reset undoes staging/commits, and git revert creates a new commit that undoes a previous one. git stash is useful for temporarily setting work aside.`,code:`# 작업 디렉터리 변경 취소
git restore index.html            # 파일 변경 되돌리기
git restore --staged index.html   # 스테이징 취소

# 커밋 되돌리기
git reset --soft HEAD~1           # 커밋만 취소(변경 유지)
git reset --hard HEAD~1           # 커밋+변경 모두 취소(주의!)
git revert <commit-hash>          # 안전하게 취소 커밋 생성

# 작업 임시 저장
git stash                         # 현재 변경 임시 저장
git stash pop                     # 임시 저장 복원`,codeLanguage:`bash`,quiz:{question:`이미 공유된(push된) 커밋을 안전하게 되돌리는 방법은?`,questionEn:`How do you safely undo an already shared (pushed) commit?`,options:[`git reset --hard`,`git revert`,`git restore`,`git stash`],optionsEn:[`git reset --hard`,`git revert`,`git restore`,`git stash`],correctIndex:1,explanation:`git revert는 기존 이력을 지우지 않고 변경을 취소하는 새 커밋을 만들어, 공유된 브랜치에서도 안전합니다. reset --hard는 이력을 바꿔 협업 시 위험합니다.`,explanationEn:`git revert creates a new commit that undoes changes without deleting history, making it safe on shared branches. reset --hard rewrites history and is risky in collaboration.`}},{title:`실습 예제: 첫 저장소 만들고 커밋하기`,titleEn:`Practice: Create Your First Repo and Commit`,content:`빈 폴더에서 시작해 저장소를 만들고 첫 커밋을 남긴 뒤, 기능 브랜치를 만들어 작업하는 전체 흐름을 따라 해 봅니다. 가장 기본이 되는 일상 워크플로입니다.`,contentEn:`Follow the full flow of starting from an empty folder, creating a repo, making your first commit, then creating a feature branch to work on. This is the most basic daily workflow.`,code:`# 1) 새 프로젝트 폴더에서 저장소 시작
mkdir my-site && cd my-site
git init

# 2) 파일 만들고 첫 커밋
echo "# My Site" > README.md
git add README.md
git commit -m "chore: 프로젝트 초기화"

# 3) 기능 브랜치에서 작업
git switch -c feature/hello
echo "<h1>Hello</h1>" > index.html
git add index.html
git commit -m "feat: 첫 페이지 추가"

# 4) main에 병합
git switch main
git merge feature/hello
git log --oneline    # 이력 확인`,codeLanguage:`bash`}]},{id:`02-github`,chapter:2,titleKey:`git02`,sections:[{title:`GitHub & GitHub Pages`,titleEn:`GitHub & GitHub Pages`,content:`GitHub는 Git 저장소를 호스팅하는 플랫폼입니다. Pull Request로 코드 리뷰를 하고, GitHub Pages로 정적 웹사이트를 무료 배포할 수 있습니다. CNAME 파일로 커스텀 도메인을 연결할 수도 있습니다.`,contentEn:`GitHub is a platform for hosting Git repositories. Review code with Pull Requests and deploy static websites for free with GitHub Pages. You can also connect a custom domain with a CNAME file.`,code:`# GitHub Pages 배포 (gh-pages 패키지)
npm install -D gh-pages

# package.json에 추가
#   "scripts": {
#     "predeploy": "npm run build",
#     "deploy": "gh-pages -d dist"
#   }

# 배포 실행
npm run deploy

# CNAME 파일 (커스텀 도메인)
echo "web.dreamitbiz.com" > public/CNAME`,codeLanguage:`bash`,quiz:{question:`GitHub Pages에서 커스텀 도메인을 연결할 때 필요한 파일은?`,questionEn:`Which file is needed to connect a custom domain on GitHub Pages?`,options:[`robots.txt`,`CNAME`,`sitemap.xml`,`.gitignore`],optionsEn:[`robots.txt`,`CNAME`,`sitemap.xml`,`.gitignore`],correctIndex:1,explanation:`CNAME 파일에 도메인을 적어 두면 GitHub Pages가 해당 커스텀 도메인으로 사이트를 서비스합니다.`,explanationEn:`Writing the domain in a CNAME file makes GitHub Pages serve the site on that custom domain.`}},{title:`협업 워크플로 (PR & 충돌 해결)`,titleEn:`Collaboration Workflow (PR & Conflicts)`,content:`팀 협업에서는 기능 브랜치를 만들어 작업한 뒤 Pull Request로 리뷰를 요청합니다. 여러 사람이 같은 파일을 수정하면 병합 충돌(merge conflict)이 발생하는데, 충돌 표시를 직접 정리하고 커밋하여 해결합니다.`,contentEn:`In team collaboration, create a feature branch, work on it, then open a Pull Request to request review. When multiple people edit the same file, a merge conflict occurs — resolve it by manually cleaning up the conflict markers and committing.`,code:`# 일반적인 협업 흐름
git switch -c feature/cart        # 기능 브랜치 생성
# ... 작업 후 ...
git add .
git commit -m "feat: 장바구니 추가"
git push -u origin feature/cart   # 원격에 푸시 후 GitHub에서 PR 생성

# 최신 main 반영 중 충돌 발생 시
git switch feature/cart
git merge main
# <<<<<<< HEAD ... ======= ... >>>>>>> main 표시를
# 직접 정리한 뒤
git add .
git commit -m "merge: 충돌 해결"`,codeLanguage:`bash`,quiz:{question:`병합 충돌(merge conflict)이 발생하는 상황은?`,questionEn:`When does a merge conflict occur?`,options:[`브랜치를 새로 만들 때`,`서로 다른 브랜치가 같은 부분을 다르게 수정했을 때`,`커밋 메시지가 비었을 때`,`push 할 때마다`],optionsEn:[`When creating a new branch`,`When different branches modify the same part differently`,`When the commit message is empty`,`Every time you push`],correctIndex:1,explanation:`두 브랜치가 같은 파일의 같은 영역을 서로 다르게 변경하면 Git이 자동 병합하지 못하고 충돌을 표시합니다. 사람이 직접 정리해야 합니다.`,explanationEn:`When two branches change the same region of the same file differently, Git cannot auto-merge and marks a conflict that a human must resolve.`}},{title:`GitHub Actions 자동 배포`,titleEn:`Automated Deployment with GitHub Actions`,content:`GitHub Actions는 코드를 push할 때마다 자동으로 빌드와 배포를 수행하는 CI/CD 기능입니다. .github/workflows/ 폴더에 YAML 파일을 만들면 워크플로가 정의됩니다. 이 사이트도 main 브랜치 push 시 자동 배포됩니다.`,contentEn:`GitHub Actions is a CI/CD feature that automatically builds and deploys every time you push code. Defining a workflow is as simple as creating a YAML file in the .github/workflows/ folder. This site also deploys automatically on push to main.`,code:`# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`,codeLanguage:`yaml`,quiz:{question:`GitHub Actions 워크플로 파일은 어느 폴더에 두어야 하나요?`,questionEn:`Which folder must GitHub Actions workflow files be placed in?`,options:[`/actions`,`/.github/workflows`,`/workflows`,`/ci`],optionsEn:[`/actions`,`/.github/workflows`,`/workflows`,`/ci`],correctIndex:1,explanation:`GitHub는 .github/workflows/ 폴더 안의 YAML 파일을 자동으로 워크플로로 인식하여 실행합니다.`,explanationEn:`GitHub automatically recognizes and runs YAML files inside the .github/workflows/ folder as workflows.`}},{title:`실습 예제: 로컬 프로젝트를 GitHub에 올리고 배포하기`,titleEn:`Practice: Push a Local Project to GitHub and Deploy`,content:`로컬 저장소를 GitHub 원격에 연결하고, gh-pages로 정적 사이트를 배포하는 전체 과정을 따라 해 봅니다. 이 학습 사이트(web.dreamitbiz.com)도 동일한 방식으로 운영됩니다.`,contentEn:`Follow the full process of connecting a local repo to a GitHub remote and deploying a static site with gh-pages. This learning site (web.dreamitbiz.com) is operated the same way.`,code:`# 1) GitHub에서 빈 저장소 생성 후 원격 연결
git remote add origin https://github.com/me/my-site.git
git push -u origin main

# 2) 배포 도구 설치 및 스크립트 등록
npm install -D gh-pages
#   package.json
#   "scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d dist" }

# 3) 커스텀 도메인 + 배포
echo "my-site.example.com" > public/CNAME
npm run deploy        # 빌드 후 gh-pages 브랜치로 발행

# 4) GitHub 저장소 Settings > Pages 에서 gh-pages 브랜치 확인`,codeLanguage:`bash`}]},{id:`03-rebase`,chapter:3,titleKey:`git03`,sections:[{title:`Rebase로 이력 정리`,titleEn:`Cleaning History with Rebase`,content:`rebase는 브랜치의 기준점을 다른 커밋으로 옮겨 이력을 선형으로 만듭니다. merge가 병합 커밋을 남기는 것과 달리 rebase는 깔끔한 일직선 히스토리를 만듭니다. 단, 이미 공유된(push된) 커밋을 rebase하면 이력이 바뀌어 위험하므로 로컬 브랜치에만 사용합니다.`,contentEn:`rebase moves a branch's base onto another commit, making history linear. Unlike merge, which leaves a merge commit, rebase produces a clean straight-line history. However, rebasing already-shared (pushed) commits rewrites history and is risky, so use it only on local branches.`,code:`# feature 브랜치를 최신 main 위로 재배치
git switch feature
git rebase main

# 충돌 해결 후 진행
git add .
git rebase --continue

# rebase 중단(원상복구)
git rebase --abort

# 인터랙티브 rebase - 커밋 합치기/수정
git rebase -i HEAD~3
# pick/squash/reword 등으로 최근 3개 커밋 정리`,codeLanguage:`bash`,quiz:{question:`rebase를 사용하면 안 되는 상황은?`,questionEn:`When should you avoid using rebase?`,options:[`로컬 브랜치를 정리할 때`,`이미 push되어 공유된 커밋을 다시 정리할 때`,`커밋 메시지를 수정할 때`,`최신 main을 반영할 때`],optionsEn:[`Cleaning up a local branch`,`Reworking commits already pushed and shared`,`Editing a commit message`,`Incorporating the latest main`],correctIndex:1,explanation:`rebase는 커밋 해시를 바꾸므로, 이미 공유된 커밋에 적용하면 다른 사람의 이력과 충돌합니다. 공유 전 로컬에서만 사용하세요.`,explanationEn:`rebase changes commit hashes, so applying it to shared commits conflicts with others' history. Use it only locally before sharing.`}},{title:`cherry-pick과 tag`,titleEn:`cherry-pick and tag`,content:`cherry-pick은 다른 브랜치의 특정 커밋 하나만 골라 현재 브랜치에 적용합니다. tag는 특정 커밋에 버전 이름(v1.0.0 등)을 붙여 릴리스 지점을 표시합니다. 주로 시맨틱 버저닝과 함께 배포 버전을 관리하는 데 씁니다.`,contentEn:`cherry-pick picks a single commit from another branch and applies it to the current branch. tag attaches a version name (e.g., v1.0.0) to a specific commit to mark a release point. It is typically used with semantic versioning to manage release versions.`,code:`# 특정 커밋만 현재 브랜치로 가져오기
git cherry-pick <commit-hash>

# 태그 생성 (릴리스 표시)
git tag v1.0.0                       # 가벼운 태그
git tag -a v1.0.0 -m "첫 정식 릴리스" # 주석 태그

# 태그 목록 / 원격에 푸시
git tag
git push origin v1.0.0
git push origin --tags               # 모든 태그 푸시`,codeLanguage:`bash`,quiz:{question:`다른 브랜치의 커밋 "하나만" 골라 현재 브랜치에 적용하는 명령은?`,questionEn:`Which command applies just "one" commit from another branch to the current branch?`,options:[`git merge`,`git cherry-pick`,`git rebase`,`git tag`],optionsEn:[`git merge`,`git cherry-pick`,`git rebase`,`git tag`],correctIndex:1,explanation:`git cherry-pick <hash>는 지정한 커밋 하나만 골라 현재 브랜치에 새 커밋으로 적용합니다.`,explanationEn:`git cherry-pick <hash> applies just the specified commit as a new commit on the current branch.`}},{title:`이력 탐색 (diff, blame, bisect)`,titleEn:`Exploring History (diff, blame, bisect)`,content:`git diff로 변경 내용을 비교하고, git blame으로 각 줄을 누가 언제 바꿨는지 추적합니다. git bisect는 이진 탐색으로 버그가 처음 들어온 커밋을 빠르게 찾아줍니다. 디버깅과 코드 리뷰에 유용한 도구들입니다.`,contentEn:`Use git diff to compare changes, git blame to trace who changed each line and when, and git bisect to quickly find the commit that introduced a bug via binary search. These are useful tools for debugging and code review.`,code:`# 변경 비교
git diff                    # 작업 디렉터리 vs 스테이징
git diff main feature       # 두 브랜치 비교

# 각 줄의 마지막 수정자 추적
git blame index.html

# 버그가 처음 생긴 커밋 이진 탐색
git bisect start
git bisect bad              # 현재(버그 있음)
git bisect good v1.0.0      # 정상이던 시점
# Git이 중간 커밋으로 이동 → 테스트 후 good/bad 반복
git bisect reset           # 탐색 종료`,codeLanguage:`bash`,quiz:{question:`버그가 처음 들어온 커밋을 이진 탐색으로 찾는 Git 명령은?`,questionEn:`Which Git command finds the commit that introduced a bug using binary search?`,options:[`git blame`,`git bisect`,`git diff`,`git log`],optionsEn:[`git blame`,`git bisect`,`git diff`,`git log`],correctIndex:1,explanation:`git bisect는 good/bad 지점을 표시하면 이진 탐색으로 문제가 처음 발생한 커밋을 효율적으로 찾아줍니다.`,explanationEn:`git bisect efficiently finds the first faulty commit via binary search once you mark good/bad points.`}},{title:`실습 예제: 커밋 이력 정리하기`,titleEn:`Practice: Tidying Up Commit History`,content:`"오타 수정", "다시 수정" 같은 지저분한 커밋들을 interactive rebase로 하나로 합쳐(squash) 깔끔한 이력을 만들어 봅니다. PR을 올리기 전 자주 쓰는 정리 작업입니다.`,contentEn:`Use interactive rebase to squash messy commits like "fix typo" and "fix again" into one for a clean history. This is common cleanup done before opening a PR.`,code:`# 최근 3개 커밋을 정리 대상으로 열기
git rebase -i HEAD~3

# 편집기에서 (위가 과거, 아래가 최신):
#   pick   a1b2c3  feat: 로그인 폼 추가
#   squash d4e5f6  fix: 오타 수정       ← 위 커밋에 합침
#   squash 7g8h9i  fix: 다시 수정       ← 위 커밋에 합침
# 저장하면 합쳐진 커밋 메시지를 새로 작성

# 정리된 이력 확인
git log --oneline

# 이미 push한 브랜치라면 (주의: 본인 기능 브랜치에서만)
git push --force-with-lease`,codeLanguage:`bash`}]},{id:`04-workflow`,chapter:4,titleKey:`git04`,sections:[{title:`.gitignore와 저장소 관리`,titleEn:`.gitignore and Repository Hygiene`,content:`.gitignore는 버전 관리에서 제외할 파일을 지정합니다. node_modules, 빌드 산출물(dist), 환경 변수 파일(.env), OS 파일(.DS_Store) 등은 반드시 제외해야 합니다. 이미 추적 중인 파일은 git rm --cached로 추적에서 빼야 합니다.`,contentEn:`.gitignore specifies files to exclude from version control. Always exclude node_modules, build output (dist), environment files (.env), and OS files (.DS_Store). For already-tracked files, remove them from tracking with git rm --cached.`,code:`# .gitignore 예시
node_modules/
dist/
.env
.env.local
*.log
.DS_Store
.vscode/

# 이미 추적 중인 파일을 추적에서 제외
git rm --cached .env
git commit -m "chore: stop tracking .env"

# 무시 규칙이 잘 적용되는지 확인
git status --ignored`,codeLanguage:`bash`,quiz:{question:`.env 파일을 Git에서 반드시 제외해야 하는 이유는?`,questionEn:`Why must .env files be excluded from Git?`,options:[`용량이 커서`,`API 키 등 민감 정보가 노출될 수 있어서`,`문법 오류가 나서`,`빌드가 느려져서`],optionsEn:[`They are large`,`They may expose sensitive info like API keys`,`They cause syntax errors`,`They slow the build`],correctIndex:1,explanation:`.env에는 API 키·비밀번호 등 민감 정보가 들어가므로, 공개 저장소에 올라가면 보안 사고로 이어집니다.`,explanationEn:`.env holds sensitive info like API keys and passwords; committing it to a public repo can cause a security breach.`}},{title:`커밋 컨벤션과 브랜치 전략`,titleEn:`Commit Conventions and Branch Strategy`,content:`Conventional Commits(feat, fix, docs, chore 등)는 커밋 메시지에 일관된 형식을 부여해 변경 이력을 읽기 쉽게 만듭니다. 브랜치 전략으로는 main/develop/feature를 나누는 Git Flow, main에서 짧은 브랜치를 따는 GitHub Flow 등이 있습니다.`,contentEn:`Conventional Commits (feat, fix, docs, chore, etc.) give commit messages a consistent format, making history easy to read. Branch strategies include Git Flow, which separates main/develop/feature, and GitHub Flow, which cuts short branches off main.`,code:`# Conventional Commits 형식
#   <type>: <설명>
git commit -m "feat: 장바구니 기능 추가"
git commit -m "fix: 로그인 토큰 만료 버그 수정"
git commit -m "docs: README 설치 안내 보강"
git commit -m "refactor: API 호출 로직 분리"

# GitHub Flow (간단/권장)
# 1) main에서 기능 브랜치 생성
# 2) 작업 후 PR 생성 → 리뷰 → main 병합
# 3) main은 항상 배포 가능 상태 유지`,codeLanguage:`bash`,quiz:{question:`Conventional Commits에서 새로운 기능 추가에 사용하는 타입은?`,questionEn:`In Conventional Commits, which type is used for adding a new feature?`,options:[`fix`,`feat`,`docs`,`chore`],optionsEn:[`fix`,`feat`,`docs`,`chore`],correctIndex:1,explanation:`feat은 새로운 기능(feature) 추가를 의미합니다. fix는 버그 수정, docs는 문서, chore는 잡무성 변경입니다.`,explanationEn:`feat means adding a new feature. fix is a bug fix, docs is documentation, and chore is maintenance changes.`}},{title:`Fork와 오픈소스 기여`,titleEn:`Forks and Open Source Contribution`,content:`권한이 없는 저장소에 기여할 때는 Fork(내 계정으로 복제)한 뒤 작업하고, 원본 저장소로 Pull Request를 보냅니다. 원본의 최신 변경은 upstream 원격을 추가해 동기화합니다. 이것이 오픈소스 협업의 표준 흐름입니다.`,contentEn:`To contribute to a repository you don't have write access to, Fork it (clone to your account), work on it, and open a Pull Request to the original. Sync the latest upstream changes by adding an upstream remote. This is the standard open-source collaboration flow.`,code:`# 1) GitHub에서 Fork 후 내 복제본 클론
git clone https://github.com/me/project.git
cd project

# 2) 원본 저장소를 upstream으로 추가
git remote add upstream https://github.com/original/project.git

# 3) 원본 최신 변경 동기화
git fetch upstream
git merge upstream/main

# 4) 기능 브랜치 작업 후 내 fork에 push → PR 생성
git switch -c fix/typo
git push origin fix/typo`,codeLanguage:`bash`,quiz:{question:`오픈소스에서 원본 저장소의 최신 변경을 가져오기 위해 추가하는 원격의 관례적 이름은?`,questionEn:`What is the conventional name of the remote added to fetch the original repo's latest changes in open source?`,options:[`origin`,`upstream`,`master`,`source`],optionsEn:[`origin`,`upstream`,`master`,`source`],correctIndex:1,explanation:`내 fork는 origin, 원본 저장소는 upstream으로 추가하는 것이 관례입니다. upstream에서 fetch/merge해 동기화합니다.`,explanationEn:`By convention, your fork is origin and the original repo is added as upstream. You sync by fetching/merging from upstream.`}},{title:`실습 예제: 오픈소스에 PR 보내기`,titleEn:`Practice: Sending a PR to Open Source`,content:`Fork → upstream 동기화 → 기능 브랜치 → 커밋 컨벤션 → push → PR 까지, 오픈소스 기여의 표준 흐름을 한 번에 따라 해 봅니다. 첫 컨트리뷰션 시 그대로 활용할 수 있습니다.`,contentEn:`Follow the standard open-source contribution flow end to end: Fork → sync upstream → feature branch → conventional commit → push → PR. You can use it as-is for your first contribution.`,code:`# 1) Fork한 내 저장소 클론 + 원본 연결
git clone https://github.com/me/awesome-lib.git && cd awesome-lib
git remote add upstream https://github.com/original/awesome-lib.git

# 2) 최신 원본 반영
git fetch upstream && git switch main && git merge upstream/main

# 3) 기능 브랜치에서 작업 + 컨벤션 커밋
git switch -c fix/readme-typo
git commit -am "docs: README 설치 명령 오타 수정"

# 4) 내 fork로 push 후 GitHub에서 PR 생성
git push origin fix/readme-typo
# → GitHub의 "Compare & pull request" 버튼으로 원본에 PR`,codeLanguage:`bash`}]}],u=[{id:`01-nodejs`,chapter:1,titleKey:`backend01`,sections:[{title:`Node.js 설치 & Express 프로젝트 준비`,titleEn:`Installing Node.js & Setting Up an Express Project`,content:`백엔드 개발은 Node.js 런타임 설치에서 시작합니다. 설치 방법은 운영체제마다 다르니 본인 OS의 창만 따라 하세요(아래). Node를 설치하면 패키지 매니저 npm도 함께 설치되며, 권장 버전은 18 이상입니다. 설치 후에는 프로젝트 폴더를 만들고 npm init으로 초기화한 뒤 Express를 설치하면 준비가 끝납니다. (Node 버전 관리가 필요하면 nvm 사용을 권장합니다.)`,contentEn:`Backend development starts by installing the Node.js runtime. The method differs by OS — follow only your OS panel below. Installing Node also installs the npm package manager; version 18+ is recommended. Then create a project folder, initialize it with npm init, and install Express. (Use nvm if you need Node version management.)`,codeBlocks:[{label:`🪟 Windows`,code:`# 공식 설치 파일: https://nodejs.org 에서 LTS(.msi) 설치
#   또는 winget 사용
winget install OpenJS.NodeJS.LTS

# ★ 설치 후 새 PowerShell 창에서 확인
node -v
npm -v`,codeLanguage:`powershell`},{label:`🍎 macOS`,code:`# Homebrew (권장)
brew install node

# 또는 nvm으로 설치 (버전 관리에 유리)
#   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
#   nvm install --lts

node -v
npm -v`,codeLanguage:`bash`},{label:`🐧 Linux`,code:`# nvm 권장 (배포판 기본 패키지는 버전이 낮을 수 있음)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install --lts

# 또는 Debian/Ubuntu 패키지
#   sudo apt update && sudo apt install nodejs npm

node -v
npm -v`,codeLanguage:`bash`}],code:`# 설치 후 (운영체제 공통) — 프로젝트 폴더 만들고 Express 설치
mkdir my-api && cd my-api
npm init -y                 # package.json 생성
npm install express         # Express 설치

# 이제 server.js 를 만들어 다음 섹션의 코드를 작성하면 됩니다.`,codeLanguage:`bash`,quiz:{question:`Node.js를 설치하면 함께 설치되는 패키지 매니저는?`,questionEn:`Which package manager is installed together with Node.js?`,options:[`pip`,`npm`,`brew`,`apt`],optionsEn:[`pip`,`npm`,`brew`,`apt`],correctIndex:1,explanation:`Node.js를 설치하면 npm(Node Package Manager)이 함께 설치되어 express 같은 패키지를 설치할 수 있습니다.`,explanationEn:`Installing Node.js also installs npm (Node Package Manager), letting you install packages like express.`}},{title:`Node.js & Express 기초`,titleEn:`Node.js & Express Basics`,content:`Node.js는 브라우저 밖에서 JavaScript를 실행하는 런타임입니다. Express는 Node.js의 가장 인기 있는 웹 프레임워크로, REST API를 쉽게 구축할 수 있습니다. HTTP 메서드(GET/POST/PUT/DELETE)를 경로(route)에 매핑해 CRUD API를 만듭니다.`,contentEn:`Node.js is a runtime that executes JavaScript outside the browser. Express is the most popular Node.js web framework for easily building REST APIs. Map HTTP methods (GET/POST/PUT/DELETE) to routes to build CRUD APIs.`,code:`// Express 서버 예제
const express = require('express');
const app = express();

app.use(express.json());

// GET - 목록 조회
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: '홍길동' },
    { id: 2, name: '김철수' }
  ]);
});

// POST - 생성
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ id: 3, name });
});

// PUT - 수정 / DELETE - 삭제
app.put('/api/users/:id', (req, res) => {
  res.json({ id: Number(req.params.id), name: req.body.name });
});
app.delete('/api/users/:id', (req, res) => {
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('서버 실행: http://localhost:3000');
});`,codeLanguage:`javascript`,quiz:{question:`새 리소스를 생성하는 데 일반적으로 사용하는 HTTP 메서드는?`,questionEn:`Which HTTP method is typically used to create a new resource?`,options:[`GET`,`POST`,`DELETE`,`HEAD`],optionsEn:[`GET`,`POST`,`DELETE`,`HEAD`],correctIndex:1,explanation:`POST는 서버에 새 리소스를 생성할 때 사용하며, 성공 시 보통 201 Created 상태 코드를 반환합니다.`,explanationEn:`POST is used to create a new resource on the server and typically returns a 201 Created status on success.`}},{title:`미들웨어와 라우팅`,titleEn:`Middleware and Routing`,content:`미들웨어는 요청(req)과 응답(res) 사이에서 실행되는 함수로, 로깅·인증·body 파싱 등을 처리합니다. next()를 호출해 다음 미들웨어로 넘깁니다. 라우터를 분리하면 기능별로 코드를 깔끔하게 모듈화할 수 있습니다.`,contentEn:`Middleware are functions that run between the request (req) and response (res), handling logging, authentication, body parsing, and more. Call next() to pass to the next middleware. Splitting routers lets you modularize code cleanly by feature.`,code:`const express = require('express');
const app = express();

// 전역 미들웨어 - 모든 요청에 실행
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();   // 다음 미들웨어로 진행
});

// 인증 미들웨어
function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: '인증 필요' });
  next();
}

// 특정 라우트에만 미들웨어 적용
app.get('/api/profile', auth, (req, res) => {
  res.json({ name: '홍길동' });
});`,codeLanguage:`javascript`,quiz:{question:`Express 미들웨어에서 다음 단계로 제어를 넘기기 위해 호출하는 함수는?`,questionEn:`Which function is called in Express middleware to pass control to the next step?`,options:[`continue()`,`next()`,`res.send()`,`pass()`],optionsEn:[`continue()`,`next()`,`res.send()`,`pass()`],correctIndex:1,explanation:`next()를 호출하면 다음 미들웨어나 라우트 핸들러로 제어가 넘어갑니다. 호출하지 않으면 요청이 멈춥니다.`,explanationEn:`Calling next() passes control to the next middleware or route handler. Without it, the request hangs.`}},{title:`에러 처리와 상태 코드`,titleEn:`Error Handling and Status Codes`,content:`REST API는 적절한 HTTP 상태 코드로 결과를 알립니다. 200(성공), 201(생성), 400(잘못된 요청), 401(인증 필요), 404(없음), 500(서버 오류)이 대표적입니다. Express에서는 인자가 4개인 (err, req, res, next) 미들웨어로 에러를 한곳에서 처리합니다.`,contentEn:`A REST API signals results with appropriate HTTP status codes. Common ones are 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), and 500 (Server Error). In Express, a 4-argument (err, req, res, next) middleware handles errors in one place.`,code:`app.get('/api/users/:id', (req, res, next) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: '잘못된 ID' });
  }
  const user = findUser(id);
  if (!user) {
    return res.status(404).json({ error: '사용자 없음' });
  }
  res.json(user);
});

// 에러 처리 미들웨어 (인자 4개) - 맨 마지막에 등록
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: '서버 오류가 발생했습니다.' });
});`,codeLanguage:`javascript`,quiz:{question:`요청한 리소스를 찾을 수 없을 때 반환하는 HTTP 상태 코드는?`,questionEn:`Which HTTP status code is returned when the requested resource is not found?`,options:[`200`,`400`,`404`,`500`],optionsEn:[`200`,`400`,`404`,`500`],correctIndex:2,explanation:`404 Not Found는 요청한 리소스가 서버에 존재하지 않음을 의미합니다. 400은 잘못된 요청, 500은 서버 내부 오류입니다.`,explanationEn:`404 Not Found means the requested resource does not exist on the server. 400 is a bad request and 500 is an internal server error.`}},{title:`실습 예제: 메모 CRUD API`,titleEn:`Practice: Memo CRUD API`,content:`메모리 배열을 데이터 저장소로 삼아, 메모를 조회·생성·삭제하는 완전한 미니 REST API를 만들어 봅니다. 라우팅·상태 코드·입력 검증을 한 번에 연습하는 예제입니다.`,contentEn:`Using an in-memory array as the data store, build a complete mini REST API to read, create, and delete memos. This example practices routing, status codes, and input validation together.`,code:`const express = require('express');
const app = express();
app.use(express.json());

let memos = [{ id: 1, text: '첫 메모' }];
let nextId = 2;

// 목록
app.get('/api/memos', (req, res) => res.json(memos));

// 생성 (검증 포함)
app.post('/api/memos', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'text는 필수입니다' });
  const memo = { id: nextId++, text };
  memos.push(memo);
  res.status(201).json(memo);
});

// 삭제
app.delete('/api/memos/:id', (req, res) => {
  const id = Number(req.params.id);
  const before = memos.length;
  memos = memos.filter(m => m.id !== id);
  if (memos.length === before) return res.status(404).json({ error: '없음' });
  res.status(204).send();
});

app.listen(3000, () => console.log('http://localhost:3000'));`,codeLanguage:`javascript`}]},{id:`02-database`,chapter:2,titleKey:`backend02`,sections:[{title:`데이터베이스 기초 (Supabase)`,titleEn:`Database Basics (Supabase)`,content:`Supabase는 오픈소스 Firebase 대안으로, PostgreSQL 데이터베이스, 인증, 스토리지, Edge Functions를 제공합니다. SQL로 테이블을 정의하고 JavaScript SDK로 쉽게 CRUD 작업을 수행합니다.`,contentEn:`Supabase is an open-source Firebase alternative offering PostgreSQL database, auth, storage, and Edge Functions. Define tables with SQL and perform CRUD operations easily with the JavaScript SDK.`,code:`// Supabase 클라이언트 설정
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://your-project.supabase.co',
  'your-anon-key'
);

// 데이터 조회 (SELECT)
const { data: users } = await supabase
  .from('users')
  .select('*')
  .order('created_at', { ascending: false });

// 데이터 추가 (INSERT)
const { data } = await supabase
  .from('users')
  .insert({ name: '홍길동', email: 'hong@example.com' });

// 데이터 수정 (UPDATE) / 삭제 (DELETE)
await supabase.from('users').update({ name: '김길동' }).eq('id', 1);
await supabase.from('users').delete().eq('id', 1);`,codeLanguage:`javascript`,quiz:{question:`Supabase가 기반으로 하는 관계형 데이터베이스는?`,questionEn:`Which relational database is Supabase built on?`,options:[`MySQL`,`PostgreSQL`,`MongoDB`,`SQLite`],optionsEn:[`MySQL`,`PostgreSQL`,`MongoDB`,`SQLite`],correctIndex:1,explanation:`Supabase는 오픈소스 PostgreSQL을 기반으로 하며, SQL과 강력한 관계형 기능을 그대로 활용할 수 있습니다.`,explanationEn:`Supabase is built on open-source PostgreSQL, letting you use SQL and powerful relational features directly.`}},{title:`필터·정렬·페이지네이션`,titleEn:`Filtering, Sorting, and Pagination`,content:`실무에서는 전체 데이터를 한 번에 가져오지 않고 조건으로 필터링하고, 정렬하고, 페이지 단위로 나눠 가져옵니다. Supabase는 eq, gt, like 같은 필터 메서드와 order, range로 이를 체이닝 방식으로 지원합니다.`,contentEn:`In practice, you don't fetch all data at once — you filter by conditions, sort, and paginate. Supabase supports filter methods like eq, gt, and like, plus order and range, all in a chainable style.`,code:`// 조건 필터 + 정렬
const { data } = await supabase
  .from('posts')
  .select('id, title, views')
  .eq('published', true)         // published = true
  .gt('views', 100)              // views > 100
  .ilike('title', '%react%')     // 제목에 react 포함(대소문자 무시)
  .order('views', { ascending: false });

// 페이지네이션 (10개씩, 2페이지)
const page = 2, size = 10;
const from = (page - 1) * size;
const { data: pageData, count } = await supabase
  .from('posts')
  .select('*', { count: 'exact' })
  .range(from, from + size - 1);`,codeLanguage:`javascript`,quiz:{question:`Supabase에서 "특정 열의 값이 정확히 일치"하는 행을 필터링하는 메서드는?`,questionEn:`Which Supabase method filters rows where a column value exactly matches?`,options:[`.like()`,`.eq()`,`.gt()`,`.order()`],optionsEn:[`.like()`,`.eq()`,`.gt()`,`.order()`],correctIndex:1,explanation:`.eq(column, value)는 해당 열의 값이 정확히 일치하는 행만 조회합니다. .gt는 초과, .like는 패턴 일치입니다.`,explanationEn:`.eq(column, value) returns rows where the column exactly equals the value. .gt is greater-than and .like is pattern matching.`}},{title:`인증과 행 수준 보안(RLS)`,titleEn:`Authentication and Row Level Security (RLS)`,content:`Supabase Auth는 이메일/소셜 로그인으로 사용자를 인증하고 JWT 토큰을 발급합니다. 데이터베이스에는 RLS(Row Level Security) 정책을 켜서, 로그인한 사용자가 자신의 데이터만 읽고 쓰도록 행 단위로 권한을 제어해야 합니다.`,contentEn:`Supabase Auth authenticates users via email/social login and issues JWT tokens. On the database, enable RLS (Row Level Security) policies so logged-in users can read and write only their own data, controlling permissions at the row level.`,code:`// 회원가입 / 로그인
await supabase.auth.signUp({ email, password });
const { data } = await supabase.auth.signInWithPassword({ email, password });
const { data: { user } } = await supabase.auth.getUser();

-- RLS 정책 (SQL) - 본인 데이터만 접근 허용
alter table posts enable row level security;

create policy "자신의 글만 수정"
  on posts for update
  using ( auth.uid() = user_id );`,codeLanguage:`javascript`,quiz:{question:`Supabase에서 사용자가 자신의 행 데이터만 접근하도록 제어하는 기능은?`,questionEn:`Which feature controls users to access only their own row data in Supabase?`,options:[`CORS`,`RLS (Row Level Security)`,`CDN`,`JWT 만료`],optionsEn:[`CORS`,`RLS (Row Level Security)`,`CDN`,`JWT expiry`],correctIndex:1,explanation:`RLS는 행 단위 보안 정책으로, auth.uid() 등을 사용해 로그인한 사용자가 허용된 행에만 접근하도록 제한합니다.`,explanationEn:`RLS is a row-level security policy that uses auth.uid() and others to restrict logged-in users to permitted rows only.`}},{title:`실습 예제: 게시글 목록·상세 조회`,titleEn:`Practice: Fetching Post List and Detail`,content:`Supabase 클라이언트로 게시글 목록(페이지네이션)과 단일 게시글 상세를 조회하는 함수를 만들어 봅니다. select·order·range·single 메서드를 종합한 실전 데이터 접근 패턴입니다.`,contentEn:`Build functions that fetch a post list (with pagination) and a single post's detail using the Supabase client. It is a practical data-access pattern combining select, order, range, and single.`,code:`import { createClient } from '@supabase/supabase-js';
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

// 목록 조회 (페이지당 10개)
async function getPosts(page = 1) {
  const size = 10;
  const from = (page - 1) * size;
  const { data, count, error } = await supabase
    .from('posts')
    .select('id, title, created_at', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, from + size - 1);
  if (error) throw error;
  return { posts: data, total: count };
}

// 단일 게시글 상세
async function getPost(id) {
  const { data, error } = await supabase
    .from('posts').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
}`,codeLanguage:`javascript`}]},{id:`03-auth`,chapter:3,titleKey:`backend03`,sections:[{title:`비밀번호 해싱`,titleEn:`Password Hashing`,content:`비밀번호는 절대 평문으로 저장하면 안 됩니다. bcrypt 같은 단방향 해시 함수로 salt와 함께 해싱해 저장하고, 로그인 시 입력값을 같은 방식으로 해싱해 비교합니다. 해시는 복호화할 수 없어 DB가 유출돼도 원본 비밀번호를 보호합니다.`,contentEn:`Never store passwords in plain text. Hash them with a salt using a one-way hash function like bcrypt, and on login, hash the input the same way and compare. Hashes cannot be reversed, protecting original passwords even if the DB leaks.`,code:`const bcrypt = require('bcrypt');

// 회원가입 - 비밀번호 해싱 저장
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);  // salt rounds = 10
  await db.users.insert({ email, password: hash });
  res.status(201).json({ message: '가입 완료' });
});

// 로그인 - 해시 비교
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await db.users.findByEmail(email);
  const ok = user && await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ error: '인증 실패' });
  res.json({ message: '로그인 성공' });
});`,codeLanguage:`javascript`,quiz:{question:`비밀번호를 안전하게 저장하는 방법은?`,questionEn:`What is the safe way to store passwords?`,options:[`평문 그대로 저장`,`bcrypt 등으로 해싱하여 저장`,`Base64로 인코딩`,`쿠키에 저장`],optionsEn:[`Store as plain text`,`Hash with bcrypt and store`,`Encode with Base64`,`Store in a cookie`],correctIndex:1,explanation:`bcrypt 같은 단방향 해시로 salt와 함께 저장하면 복호화가 불가능해, DB 유출 시에도 원본 비밀번호가 보호됩니다. Base64는 누구나 디코딩 가능하므로 안전하지 않습니다.`,explanationEn:`Storing with a one-way hash like bcrypt plus a salt makes it irreversible, protecting passwords even if the DB leaks. Base64 is decodable by anyone and is not safe.`}},{title:`JWT 토큰 인증`,titleEn:`JWT Token Authentication`,content:`JWT(JSON Web Token)는 사용자 정보를 서명된 토큰에 담아 무상태(stateless) 인증을 구현합니다. 로그인 시 토큰을 발급해 클라이언트가 보관하고, 이후 요청 헤더(Authorization: Bearer)에 담아 보내면 서버가 서명을 검증합니다.`,contentEn:`JWT (JSON Web Token) implements stateless authentication by embedding user info in a signed token. On login, a token is issued and stored by the client; subsequent requests send it in the header (Authorization: Bearer) and the server verifies the signature.`,code:`const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

// 로그인 성공 시 토큰 발급
const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '1h' });
res.json({ token });

// 인증 미들웨어 - 토큰 검증
function authenticate(req, res, next) {
  const header = req.headers.authorization;
  const token = header && header.split(' ')[1];   // "Bearer xxx"
  if (!token) return res.status(401).json({ error: '토큰 없음' });

  try {
    req.user = jwt.verify(token, SECRET);   // 검증 + 페이로드 추출
    next();
  } catch {
    res.status(403).json({ error: '유효하지 않은 토큰' });
  }
}`,codeLanguage:`javascript`,quiz:{question:`JWT 토큰을 요청에 담아 보낼 때 일반적으로 사용하는 HTTP 헤더는?`,questionEn:`Which HTTP header is typically used to send a JWT token in a request?`,options:[`Content-Type`,`Authorization`,`Accept`,`Cookie-Token`],optionsEn:[`Content-Type`,`Authorization`,`Accept`,`Cookie-Token`],correctIndex:1,explanation:`JWT는 보통 Authorization 헤더에 "Bearer <token>" 형식으로 담아 보내며, 서버가 이를 추출해 검증합니다.`,explanationEn:`A JWT is usually sent in the Authorization header as "Bearer <token>", which the server extracts and verifies.`}},{title:`CORS와 보안 기초`,titleEn:`CORS and Security Basics`,content:`CORS(Cross-Origin Resource Sharing)는 다른 출처(도메인)의 요청을 브라우저가 허용할지 제어합니다. 서버에서 허용할 출처를 명시해야 프론트엔드가 API를 호출할 수 있습니다. 그 밖에 입력 검증, 비밀키의 환경 변수 분리, HTTPS 사용이 기본 보안 수칙입니다.`,contentEn:`CORS (Cross-Origin Resource Sharing) controls whether the browser allows requests from a different origin (domain). The server must specify allowed origins so the frontend can call the API. Other basic security practices include input validation, keeping secrets in environment variables, and using HTTPS.`,code:`const cors = require('cors');

// 특정 출처만 허용
app.use(cors({
  origin: 'https://web.dreamitbiz.com',
  credentials: true
}));

// 비밀키는 코드가 아닌 환경 변수에서
const SECRET = process.env.JWT_SECRET;   // .env, 절대 하드코딩 금지

// 입력 검증 예시
app.post('/api/users', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: '유효한 이메일이 아닙니다' });
  }
  // ...
});`,codeLanguage:`javascript`,quiz:{question:`CORS 설정이 필요한 이유는?`,questionEn:`Why is CORS configuration needed?`,options:[`데이터베이스 속도 향상`,`다른 출처(도메인)의 브라우저 요청 허용을 제어하기 위해`,`비밀번호 암호화`,`이미지 압축`],optionsEn:[`To speed up the database`,`To control allowing browser requests from a different origin`,`To encrypt passwords`,`To compress images`],correctIndex:1,explanation:`CORS는 브라우저의 동일 출처 정책 때문에 필요합니다. 서버가 허용 출처를 지정해야 다른 도메인의 프론트엔드가 API를 호출할 수 있습니다.`,explanationEn:`CORS is needed due to the browser's same-origin policy. The server must specify allowed origins so a frontend on another domain can call the API.`}},{title:`실습 예제: 보호된 라우트 만들기`,titleEn:`Practice: Building a Protected Route`,content:`비밀번호 해싱 → 로그인 시 JWT 발급 → 인증 미들웨어로 보호된 라우트 접근까지, 인증 흐름을 한 파일로 엮어 봅니다. 토큰이 없으면 401이 반환되는 것을 확인하세요.`,contentEn:`Tie the auth flow together in one file: password hashing → issuing a JWT on login → accessing a protected route via auth middleware. Verify that a missing token returns 401.`,code:`const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

// 로그인 → 토큰 발급 (비밀번호 검증은 bcrypt.compare 가정)
app.post('/api/login', async (req, res) => {
  const user = await findUser(req.body.email);
  const ok = user && await bcrypt.compare(req.body.password, user.password);
  if (!ok) return res.status(401).json({ error: '인증 실패' });
  const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// 인증 미들웨어
function auth(req, res, next) {
  const token = (req.headers.authorization || '').split(' ')[1];
  if (!token) return res.status(401).json({ error: '토큰 없음' });
  try { req.user = jwt.verify(token, SECRET); next(); }
  catch { res.status(403).json({ error: '유효하지 않은 토큰' }); }
}

// 보호된 라우트
app.get('/api/me', auth, (req, res) => {
  res.json({ userId: req.user.userId });
});`,codeLanguage:`javascript`}]},{id:`04-deploy`,chapter:4,titleKey:`backend04`,sections:[{title:`환경 변수와 설정 관리`,titleEn:`Environment Variables and Config`,content:`데이터베이스 주소, 비밀키, 포트 등 환경마다 달라지는 값은 코드에 하드코딩하지 않고 환경 변수로 분리합니다. dotenv로 .env 파일을 읽어 process.env에 주입하고, .env는 .gitignore로 제외합니다. 개발/운영 설정을 분리하면 안전하고 유연한 배포가 가능합니다.`,contentEn:`Values that differ by environment — database URL, secret keys, port — should be separated into environment variables rather than hardcoded. Use dotenv to read a .env file into process.env, and exclude .env via .gitignore. Separating dev/prod config enables safe, flexible deployment.`,code:`// .env 파일 (git 제외 대상)
//   PORT=3000
//   DATABASE_URL=postgres://...
//   JWT_SECRET=super-secret

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error('DATABASE_URL 환경 변수가 필요합니다.');
}

app.listen(PORT, () => {
  console.log(\`서버 실행 (포트 \${PORT})\`);
});`,codeLanguage:`javascript`,quiz:{question:`데이터베이스 비밀번호 같은 값을 코드 대신 어디에 두는 것이 안전한가요?`,questionEn:`Where is it safe to keep values like a database password instead of in code?`,options:[`소스 코드에 직접`,`환경 변수(.env)`,`README 파일`,`HTML 주석`],optionsEn:[`Directly in source code`,`Environment variables (.env)`,`A README file`,`An HTML comment`],correctIndex:1,explanation:`민감한 설정 값은 환경 변수로 분리하고 .env를 git에서 제외해야 유출 위험을 줄이고 환경별 설정을 유연하게 관리할 수 있습니다.`,explanationEn:`Sensitive config should be in environment variables with .env excluded from git, reducing leak risk and enabling flexible per-environment config.`}},{title:`파일 업로드 처리`,titleEn:`Handling File Uploads`,content:`이미지 등 파일 업로드는 multipart/form-data로 전송되며, Express에서는 multer 미들웨어로 처리합니다. 파일 크기·확장자를 제한해 보안을 강화하고, 실제 운영에서는 로컬 디스크보다 S3·Supabase Storage 같은 외부 스토리지에 저장하는 것이 일반적입니다.`,contentEn:`File uploads (images, etc.) are sent as multipart/form-data and handled in Express with the multer middleware. Restrict file size and extensions to harden security, and in production it is common to store files in external storage like S3 or Supabase Storage rather than the local disk.`,code:`const multer = require('multer');

// 5MB 제한 + 이미지 확장자만 허용
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ok = /jpeg|jpg|png|webp/.test(file.mimetype);
    cb(ok ? null : new Error('이미지 파일만 허용'), ok);
  }
});

// 단일 파일 업로드 라우트
app.post('/api/upload', upload.single('image'), (req, res) => {
  res.json({ filename: req.file.filename, size: req.file.size });
});`,codeLanguage:`javascript`,quiz:{question:`Express에서 파일 업로드(multipart/form-data)를 처리할 때 흔히 쓰는 미들웨어는?`,questionEn:`Which middleware is commonly used to handle file uploads (multipart/form-data) in Express?`,options:[`cors`,`multer`,`morgan`,`helmet`],optionsEn:[`cors`,`multer`,`morgan`,`helmet`],correctIndex:1,explanation:`multer는 multipart/form-data 요청을 파싱해 파일을 저장하고 req.file/req.files로 접근하게 해주는 대표적인 업로드 미들웨어입니다.`,explanationEn:`multer parses multipart/form-data requests, stores files, and exposes them via req.file/req.files — the standard upload middleware.`}},{title:`서버 배포와 운영`,titleEn:`Server Deployment and Operations`,content:`Node 서버는 Railway, Render, Fly.io 같은 PaaS나 직접 구성한 서버에 배포합니다. PM2로 프로세스를 관리해 충돌 시 자동 재시작하고, 헬스 체크 엔드포인트로 상태를 점검합니다. 로그를 수집하고 환경 변수를 플랫폼에 등록하는 것이 운영의 기본입니다.`,contentEn:`A Node server is deployed to a PaaS like Railway, Render, or Fly.io, or to a self-managed server. Manage the process with PM2 for auto-restart on crash, and check status with a health-check endpoint. Collecting logs and registering environment variables on the platform are operational basics.`,code:`// 헬스 체크 엔드포인트
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

# PM2로 프로세스 관리 (서버에서)
npm install -g pm2
pm2 start server.js --name api
pm2 logs api          # 로그 확인
pm2 restart api       # 재시작
pm2 startup && pm2 save   # 부팅 시 자동 실행`,codeLanguage:`javascript`,quiz:{question:`배포된 서버가 정상 동작하는지 외부에서 점검하도록 만드는 것은?`,questionEn:`What lets you externally check that a deployed server is healthy?`,options:[`헬스 체크 엔드포인트(/health)`,`주석`,`콘솔 로그`,`.gitignore`],optionsEn:[`A health-check endpoint (/health)`,`Comments`,`Console logs`,`.gitignore`],correctIndex:0,explanation:`/health 같은 헬스 체크 엔드포인트는 로드밸런서·모니터링 도구가 서버 상태를 주기적으로 확인하는 데 사용됩니다.`,explanationEn:`A health-check endpoint like /health is used by load balancers and monitoring tools to periodically verify server status.`}},{title:`실습 예제: 배포 준비된 서버 구성`,titleEn:`Practice: A Deployment-Ready Server Setup`,content:`환경 변수 로딩, 필수 변수 검증, 헬스 체크, 포트 설정을 갖춘 "배포 가능한" 서버 기본 골격을 만들어 봅니다. 운영 환경에 바로 올릴 수 있는 최소 구성입니다.`,contentEn:`Build a "deployment-ready" server skeleton with environment-variable loading, required-variable validation, a health check, and port configuration. It is a minimal setup you can ship to production directly.`,code:`require('dotenv').config();
const express = require('express');
const app = express();

// 1) 필수 환경 변수 검증 (없으면 즉시 종료)
['DATABASE_URL', 'JWT_SECRET'].forEach(key => {
  if (!process.env[key]) {
    console.error('환경 변수 누락: ' + key);
    process.exit(1);
  }
});

app.use(express.json());

// 2) 헬스 체크 (모니터링용)
app.get('/health', (req, res) =>
  res.json({ status: 'ok', uptime: process.uptime() })
);

// 3) 포트는 플랫폼이 주입 (Render/Railway 등)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('listening on ' + PORT));

# 실행/운영
# pm2 start server.js --name api && pm2 save`,codeLanguage:`javascript`}]}],d=[{id:`01-vite`,chapter:1,titleKey:`devops01`,sections:[{title:`개발 환경 준비 — Node.js 설치`,titleEn:`Setting Up Your Environment — Installing Node.js`,content:`Vite·ESLint·Vitest 등 이 토픽에서 다루는 도구는 모두 Node.js 위에서 동작합니다. 따라서 가장 먼저 Node.js(와 함께 설치되는 npm)를 설치해야 합니다. 설치 방법은 운영체제마다 다르니 본인 OS의 창만 따라 하세요(아래). 권장 버전은 18 이상이며, 여러 버전을 오갈 일이 많은 DevOps 작업에서는 nvm 사용이 특히 유리합니다.`,contentEn:`The tools in this topic — Vite, ESLint, Vitest, etc. — all run on Node.js, so install Node.js (and the npm that comes with it) first. The method differs by OS — follow only your OS panel below. Version 18+ is recommended, and nvm is especially handy for DevOps work that often switches versions.`,codeBlocks:[{label:`🪟 Windows`,code:`# 공식 설치 파일: https://nodejs.org 에서 LTS(.msi) 설치
#   또는 winget 사용
winget install OpenJS.NodeJS.LTS

# ★ 설치 후 새 PowerShell 창에서 확인
node -v
npm -v`,codeLanguage:`powershell`},{label:`🍎 macOS`,code:`# Homebrew (권장)
brew install node

# 또는 nvm (버전 관리에 유리)
#   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
#   nvm install --lts

node -v
npm -v`,codeLanguage:`bash`},{label:`🐧 Linux`,code:`# nvm 권장 (배포판 기본 패키지는 버전이 낮을 수 있음)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install --lts

# 또는 Debian/Ubuntu
#   sudo apt update && sudo apt install nodejs npm

node -v
npm -v`,codeLanguage:`bash`}],quiz:{question:`이 토픽의 도구(Vite·ESLint·Vitest)들이 공통으로 필요로 하는 것은?`,questionEn:`What do the tools in this topic (Vite, ESLint, Vitest) all require?`,options:[`Python`,`Node.js`,`Docker`,`Java`],optionsEn:[`Python`,`Node.js`,`Docker`,`Java`],correctIndex:1,explanation:`Vite·ESLint·Vitest 등은 모두 Node.js 기반 도구라, Node.js(및 npm) 설치가 먼저 필요합니다.`,explanationEn:`Vite, ESLint, Vitest, etc. are all Node.js-based tools, so installing Node.js (and npm) comes first.`}},{title:`Vite 빌드 도구`,titleEn:`Vite Build Tool`,content:`Vite는 차세대 프론트엔드 빌드 도구로, 빠른 개발 서버와 최적화된 프로덕션 빌드를 제공합니다. HMR(Hot Module Replacement)으로 코드 변경 시 즉시 반영되며, 개발 중에는 네이티브 ES 모듈을 사용해 번들링 없이 빠르게 구동됩니다.`,contentEn:`Vite is a next-generation frontend build tool offering a fast dev server and optimized production builds. HMR (Hot Module Replacement) instantly reflects code changes, and during development it uses native ES modules to start fast without bundling.`,code:`# Vite 프로젝트 생성
npm create vite@latest my-app -- --template react-ts

# 개발 서버 시작 / 프로덕션 빌드 / 미리보기
npm run dev
npm run build
npm run preview

# vite.config.ts 예시
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: { outDir: 'dist', assetsDir: 'assets' },
  server: { port: 5173, host: true }
});`,codeLanguage:`bash`,quiz:{question:`Vite가 개발 서버에서 코드 변경을 즉시 반영하는 기능의 이름은?`,questionEn:`What is the name of the Vite feature that instantly reflects code changes in the dev server?`,options:[`SSR`,`HMR (Hot Module Replacement)`,`CDN`,`Tree Shaking`],optionsEn:[`SSR`,`HMR (Hot Module Replacement)`,`CDN`,`Tree Shaking`],correctIndex:1,explanation:`HMR은 변경된 모듈만 교체하여 페이지 전체를 새로고침하지 않고 즉시 화면에 반영합니다.`,explanationEn:`HMR swaps only the changed module, reflecting it instantly without a full page reload.`}},{title:`환경 변수와 빌드 최적화`,titleEn:`Environment Variables and Build Optimization`,content:`Vite에서는 .env 파일에 환경 변수를 정의하고, 클라이언트에 노출할 값은 반드시 VITE_ 접두사를 붙여야 import.meta.env로 접근할 수 있습니다. 프로덕션 빌드는 코드 분할, 압축, 트리 셰이킹을 자동으로 수행해 번들 크기를 줄입니다.`,contentEn:`In Vite, define environment variables in a .env file; values exposed to the client must be prefixed with VITE_ to be accessible via import.meta.env. Production builds automatically perform code splitting, minification, and tree shaking to reduce bundle size.`,code:`# .env 파일 (VITE_ 접두사 필수)
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_KEY=your-anon-key

// 코드에서 접근
const url = import.meta.env.VITE_SUPABASE_URL;

// 동적 import로 코드 분할 (lazy loading)
const Admin = lazy(() => import('./pages/Admin'));

// vite.config.ts - 수동 청크 분리
build: {
  rollupOptions: {
    output: {
      manualChunks: { vendor: ['react', 'react-dom'] }
    }
  }
}`,codeLanguage:`bash`,quiz:{question:`Vite에서 클라이언트 코드에 노출할 환경 변수에 반드시 붙여야 하는 접두사는?`,questionEn:`What prefix is required for environment variables exposed to client code in Vite?`,options:[`REACT_APP_`,`VITE_`,`ENV_`,`PUBLIC_`],optionsEn:[`REACT_APP_`,`VITE_`,`ENV_`,`PUBLIC_`],correctIndex:1,explanation:`Vite는 보안을 위해 VITE_ 접두사가 붙은 변수만 import.meta.env를 통해 클라이언트에 노출합니다.`,explanationEn:`For security, Vite exposes only variables prefixed with VITE_ to the client via import.meta.env.`}},{title:`패키지 매니저와 스크립트`,titleEn:`Package Managers and Scripts`,content:`npm, yarn, pnpm은 의존성을 설치·관리하는 도구입니다. package.json의 dependencies(런타임)와 devDependencies(개발용)를 구분하고, scripts에 자주 쓰는 명령을 등록합니다. CI 환경에서는 lock 파일 기준으로 정확히 설치하는 npm ci를 사용합니다.`,contentEn:`npm, yarn, and pnpm are tools for installing and managing dependencies. Distinguish package.json's dependencies (runtime) from devDependencies (development), and register frequently used commands in scripts. In CI, use npm ci to install exactly per the lock file.`,code:`# 설치
npm install                # package.json 전체 설치
npm install react          # 런타임 의존성 추가
npm install -D vite        # 개발 의존성 추가 (devDependencies)
npm ci                     # lock 파일 기준 정확히 설치 (CI용)

# package.json scripts 실행
npm run dev
npm run build

# pnpm은 디스크 절약 + 빠른 설치
pnpm install
pnpm add react`,codeLanguage:`bash`,quiz:{question:`CI 환경에서 package-lock.json 기준으로 정확하게 설치할 때 쓰는 명령은?`,questionEn:`Which command installs exactly per package-lock.json in a CI environment?`,options:[`npm install`,`npm ci`,`npm update`,`npm fix`],optionsEn:[`npm install`,`npm ci`,`npm update`,`npm fix`],correctIndex:1,explanation:`npm ci는 lock 파일과 정확히 일치하게 설치하며 기존 node_modules를 지우고 재설치해 빌드 재현성을 보장합니다.`,explanationEn:`npm ci installs exactly matching the lock file, wiping and reinstalling node_modules to guarantee reproducible builds.`}},{title:`실습 예제: Vite 프로젝트 만들고 환경 변수 쓰기`,titleEn:`Practice: Create a Vite Project and Use Env Vars`,content:`Vite 프로젝트를 생성해 개발 서버를 띄우고, .env에 환경 변수를 정의해 코드에서 사용한 뒤 프로덕션 빌드까지 해 봅니다. 실제 프론트엔드 프로젝트의 시작 절차 그대로입니다.`,contentEn:`Create a Vite project, run the dev server, define an env var in .env and use it in code, then make a production build. This is exactly how a real frontend project starts.`,codeBlocks:[{label:`🪟 Windows (PowerShell)`,code:`# 1) 프로젝트 생성 + 의존성 설치
npm create vite@latest my-app -- --template react-ts
cd my-app; npm install

# 2) 환경 변수 정의 (.env) — PowerShell은 Set-Content 권장
Set-Content .env "VITE_API_URL=https://api.example.com"

# 3) 코드에서: const url = import.meta.env.VITE_API_URL;

# 4) 개발 서버 / 빌드 / 미리보기
npm run dev
npm run build
npm run preview`,codeLanguage:`powershell`},{label:`🍎 macOS / Linux (터미널)`,code:`# 1) 프로젝트 생성 + 의존성 설치
npm create vite@latest my-app -- --template react-ts
cd my-app && npm install

# 2) 환경 변수 정의 (.env)
echo "VITE_API_URL=https://api.example.com" > .env

# 3) 코드에서: const url = import.meta.env.VITE_API_URL;

# 4) 개발 서버 / 빌드 / 미리보기
npm run dev
npm run build
npm run preview`,codeLanguage:`bash`}]}]},{id:`02-cicd`,chapter:2,titleKey:`devops02`,sections:[{title:`CI/CD & 배포`,titleEn:`CI/CD & Deployment`,content:`CI/CD(Continuous Integration/Continuous Deployment)는 코드 변경 시 자동으로 빌드, 테스트, 배포하는 프로세스입니다. GitHub Actions, Vercel, Netlify, GitHub Pages 등 다양한 배포 옵션이 있습니다.`,contentEn:`CI/CD (Continuous Integration/Continuous Deployment) automatically builds, tests, and deploys on code changes. Various deployment options include GitHub Actions, Vercel, Netlify, and GitHub Pages.`,code:`# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`,codeLanguage:`yaml`,quiz:{question:`CI/CD에서 CD가 의미하는 것은?`,questionEn:`What does CD stand for in CI/CD?`,options:[`Code Debugging`,`Continuous Deployment(Delivery)`,`Central Database`,`Container Docker`],optionsEn:[`Code Debugging`,`Continuous Deployment(Delivery)`,`Central Database`,`Container Docker`],correctIndex:1,explanation:`CD는 Continuous Deployment(또는 Delivery)로, 통합·테스트를 통과한 코드를 자동으로 배포하는 과정을 뜻합니다.`,explanationEn:`CD stands for Continuous Deployment (or Delivery), the process of automatically deploying code that passed integration and testing.`}},{title:`Docker로 환경 통일`,titleEn:`Standardizing Environments with Docker`,content:`Docker는 애플리케이션과 실행 환경을 컨테이너로 묶어 "내 컴퓨터에서는 되는데" 문제를 없앱니다. 먼저 운영체제에 맞게 Docker를 설치하세요(아래 OS별 창). Windows·macOS는 Docker Desktop, Linux는 Docker Engine을 설치합니다. 설치 후 Dockerfile에 빌드 과정을 정의하고 이미지를 만들면 어디서든 동일하게 실행됩니다. 멀티 스테이지 빌드로 최종 이미지 크기를 줄일 수 있습니다.`,contentEn:`Docker packages an application and its runtime into a container, eliminating the "works on my machine" problem. First install Docker for your OS (panels below): Docker Desktop on Windows/macOS, Docker Engine on Linux. Then define the build in a Dockerfile and build an image to run it identically anywhere. Multi-stage builds reduce the final image size.`,codeBlocks:[{label:`🪟 Windows`,code:`# Docker Desktop 설치 (WSL2 기반)
#   https://www.docker.com/products/docker-desktop 에서 설치
#   또는 winget 사용
winget install Docker.DockerDesktop

# 설치 후 Docker Desktop 실행 → 새 터미널에서 확인
docker --version`,codeLanguage:`powershell`},{label:`🍎 macOS`,code:`# Docker Desktop 설치
brew install --cask docker
# 또는 https://www.docker.com/products/docker-desktop 에서 설치

# Docker Desktop 앱 실행 후 확인
docker --version`,codeLanguage:`bash`},{label:`🐧 Linux`,code:`# Docker Engine 설치 (공식 편의 스크립트)
curl -fsSL https://get.docker.com | sh

# sudo 없이 쓰려면 현재 사용자를 docker 그룹에 추가 (재로그인 필요)
sudo usermod -aG docker $USER

docker --version`,codeLanguage:`bash`}],code:`# Dockerfile - 멀티 스테이지 빌드
# 1단계: 빌드
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2단계: 정적 파일 서빙 (가벼운 nginx)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

# 빌드 & 실행
# docker build -t my-web .
# docker run -p 8080:80 my-web`,codeLanguage:`dockerfile`,quiz:{question:`Docker를 사용하는 주된 이점은?`,questionEn:`What is the main benefit of using Docker?`,options:[`코드를 자동으로 작성해 준다`,`실행 환경을 컨테이너로 통일해 어디서든 동일하게 동작한다`,`CSS를 최적화한다`,`데이터베이스를 대체한다`],optionsEn:[`It writes code automatically`,`It standardizes the runtime in a container so it behaves the same anywhere`,`It optimizes CSS`,`It replaces databases`],correctIndex:1,explanation:`Docker는 앱과 의존성·환경을 컨테이너로 묶어 개발/스테이징/운영 어디서든 동일하게 실행되도록 보장합니다.`,explanationEn:`Docker packages the app, dependencies, and environment into a container so it runs identically across dev, staging, and production.`}},{title:`배포 전략과 모니터링`,titleEn:`Deployment Strategies and Monitoring`,content:`안정적인 서비스 운영을 위해 배포 전략을 선택합니다. 롤링 배포는 인스턴스를 순차 교체하고, 블루-그린은 새 버전을 별도로 띄운 뒤 트래픽을 전환하며, 카나리는 일부 사용자에게만 먼저 노출합니다. 배포 후에는 로그와 지표를 모니터링해 문제를 빠르게 감지합니다.`,contentEn:`Choose a deployment strategy for stable operations. Rolling deployment replaces instances sequentially, blue-green spins up the new version separately then switches traffic, and canary exposes it to a subset of users first. After deployment, monitor logs and metrics to detect issues quickly.`,code:`# 주요 배포 전략 비교
# 1) 롤링(Rolling)   : 인스턴스를 조금씩 새 버전으로 교체
# 2) 블루-그린(Blue-Green): 새(green) 환경 준비 후 트래픽 일괄 전환
# 3) 카나리(Canary)  : 트래픽 5% → 25% → 100% 점진 확대

# 헬스 체크 엔드포인트 (배포 검증용)
# GET /health  ->  { "status": "ok", "uptime": 12345 }

# 문제 발생 시 즉시 롤백
# 블루-그린: 트래픽을 다시 blue(이전 버전)로 전환
# git revert 후 재배포로 코드 롤백`,codeLanguage:`bash`,quiz:{question:`새 버전을 일부 사용자에게만 먼저 노출하고 점진적으로 확대하는 배포 전략은?`,questionEn:`Which deployment strategy exposes a new version to a subset of users first and expands gradually?`,options:[`롤링(Rolling)`,`블루-그린(Blue-Green)`,`카나리(Canary)`,`빅뱅(Big Bang)`],optionsEn:[`Rolling`,`Blue-Green`,`Canary`,`Big Bang`],correctIndex:2,explanation:`카나리 배포는 소수 사용자에게 먼저 새 버전을 노출해 위험을 줄이고, 문제가 없으면 점진적으로 비율을 높입니다.`,explanationEn:`Canary deployment exposes the new version to a few users first to reduce risk, then gradually increases the rollout if no issues arise.`}},{title:`실습 예제: 테스트 후 자동 배포 워크플로`,titleEn:`Practice: Test-then-Deploy Workflow`,content:`main에 push되면 의존성 설치 → 린트 → 테스트 → 빌드 → 배포 순서로 자동 실행되는 GitHub Actions 워크플로를 작성해 봅니다. 테스트가 실패하면 배포가 중단되는 안전장치가 핵심입니다.`,contentEn:`Write a GitHub Actions workflow that, on push to main, runs install → lint → test → build → deploy in order. The key safeguard is that deployment stops if tests fail.`,code:`# .github/workflows/ci-cd.yml
name: CI/CD
on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run lint           # 실패 시 이후 단계 중단
      - run: npm run test -- --run   # 테스트 통과해야 배포
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`,codeLanguage:`yaml`}]},{id:`03-quality`,chapter:3,titleKey:`devops03`,sections:[{title:`ESLint와 Prettier`,titleEn:`ESLint and Prettier`,content:`ESLint는 코드의 잠재적 오류와 안티패턴을 정적으로 검사하고, Prettier는 코드 포맷(들여쓰기·따옴표·줄바꿈)을 자동으로 통일합니다. 둘을 함께 쓰면 팀 전체가 일관된 스타일과 품질을 유지할 수 있습니다.`,contentEn:`ESLint statically checks code for potential errors and anti-patterns, while Prettier automatically unifies code formatting (indentation, quotes, line breaks). Used together, they keep an entire team consistent in style and quality.`,code:`# 설치
npm install -D eslint prettier eslint-config-prettier

# 검사 / 자동 수정
npx eslint src --fix
npx prettier --write "src/**/*.{ts,tsx}"

// .prettierrc 예시
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}

# package.json scripts
#   "lint": "eslint src",
#   "format": "prettier --write src"`,codeLanguage:`bash`,quiz:{question:`ESLint와 Prettier의 주된 역할 구분으로 올바른 것은?`,questionEn:`What correctly distinguishes the main roles of ESLint and Prettier?`,options:[`둘 다 코드 포맷만 담당`,`ESLint는 코드 품질/오류 검사, Prettier는 포맷 정리`,`둘 다 빌드 도구`,`Prettier가 버그를 잡는다`],optionsEn:[`Both only handle formatting`,`ESLint checks quality/errors, Prettier handles formatting`,`Both are build tools`,`Prettier catches bugs`],correctIndex:1,explanation:`ESLint는 잠재적 오류·안티패턴을 잡는 린터, Prettier는 스타일을 자동 정렬하는 포매터입니다. 역할이 다르므로 함께 사용합니다.`,explanationEn:`ESLint is a linter that catches potential errors/anti-patterns; Prettier is a formatter that auto-aligns style. Their roles differ, so they are used together.`}},{title:`자동화 테스트`,titleEn:`Automated Testing`,content:`Vitest·Jest 같은 도구로 단위 테스트를 작성해 코드가 의도대로 동작하는지 자동 검증합니다. 테스트는 리팩터링 시 안전망이 되고, CI에 연결하면 PR마다 자동 실행되어 회귀(regression)를 막습니다.`,contentEn:`Write unit tests with tools like Vitest or Jest to automatically verify that code behaves as intended. Tests act as a safety net during refactoring, and when wired into CI they run on every PR to prevent regressions.`,code:`import { describe, it, expect } from 'vitest';

function add(a, b) { return a + b; }

describe('add', () => {
  it('두 수를 더한다', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('음수도 처리한다', () => {
    expect(add(-1, 1)).toBe(0);
  });
});

# 실행
# npx vitest          (watch 모드)
# npx vitest run      (1회 실행, CI용)`,codeLanguage:`javascript`,quiz:{question:`자동화 테스트를 CI에 연결했을 때의 주요 이점은?`,questionEn:`What is a key benefit of wiring automated tests into CI?`,options:[`빌드 크기가 줄어든다`,`PR마다 자동 실행되어 회귀 버그를 조기에 잡는다`,`CSS가 예뻐진다`,`서버 비용이 0이 된다`],optionsEn:[`Build size shrinks`,`They run on every PR, catching regressions early`,`CSS looks nicer`,`Server cost becomes zero`],correctIndex:1,explanation:`테스트를 CI에 연결하면 코드 변경마다 자동 실행되어, 기존 기능이 깨지는 회귀를 병합 전에 발견할 수 있습니다.`,explanationEn:`Wiring tests into CI runs them on every change, catching regressions that break existing features before merge.`}},{title:`Git Hooks와 자동화`,titleEn:`Git Hooks and Automation`,content:`Husky로 Git 훅을 설정하면 커밋·푸시 직전에 린트·포맷·테스트를 자동 실행할 수 있습니다. lint-staged와 결합하면 변경된 파일만 검사해 빠릅니다. 문제가 있는 코드가 저장소에 들어가는 것을 사전에 차단합니다.`,contentEn:`With Husky you can set up Git hooks to run lint/format/tests automatically right before commit or push. Combined with lint-staged, it checks only changed files for speed. This blocks problematic code from entering the repository up front.`,code:`# Husky 설치 및 초기화
npm install -D husky lint-staged
npx husky init

# .husky/pre-commit
#   npx lint-staged

// package.json - 변경된 파일만 검사
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}`,codeLanguage:`bash`,quiz:{question:`Husky로 설정하는 Git 훅의 목적은?`,questionEn:`What is the purpose of a Git hook set up with Husky?`,options:[`브랜치를 자동 삭제`,`커밋/푸시 전에 린트·테스트 등을 자동 실행`,`커밋 메시지를 번역`,`원격 저장소를 생성`],optionsEn:[`Auto-delete branches`,`Auto-run lint/tests before commit/push`,`Translate commit messages`,`Create a remote repo`],correctIndex:1,explanation:`Git 훅은 특정 Git 이벤트(예: pre-commit) 시 스크립트를 실행합니다. Husky로 커밋 전 린트·테스트를 강제해 품질을 보장합니다.`,explanationEn:`Git hooks run scripts on specific Git events (e.g., pre-commit). Husky enforces lint/tests before commit to ensure quality.`}},{title:`실습 예제: 품질 도구 한 번에 셋업`,titleEn:`Practice: Set Up Quality Tools at Once`,content:`ESLint·Prettier·Husky·lint-staged를 설치하고, 커밋 직전에 변경된 파일만 자동 검사·정리되도록 구성해 봅니다. 팀 프로젝트 초기 세팅에 그대로 쓸 수 있는 절차입니다.`,contentEn:`Install ESLint, Prettier, Husky, and lint-staged, and configure it so only changed files are auto-checked/formatted right before commit. This procedure is ready to use for initial team project setup.`,code:`# 1) 설치
npm install -D eslint prettier husky lint-staged

# 2) Husky 초기화 + pre-commit 훅
npx husky init
echo "npx lint-staged" > .husky/pre-commit

# 3) package.json 에 lint-staged 설정
#   "lint-staged": {
#     "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
#   }

# 이제 git commit 시 변경된 파일만 자동 검사/정리됨
git add . && git commit -m "feat: 기능 추가"  # 훅이 자동 실행`,codeLanguage:`bash`}]},{id:`04-performance`,chapter:4,titleKey:`devops04`,sections:[{title:`웹 성능 최적화`,titleEn:`Web Performance Optimization`,content:`빠른 웹은 사용자 경험과 SEO에 직결됩니다. 코드 분할(lazy loading), 이미지 최적화(WebP·지연 로딩), 캐싱, 번들 크기 축소가 핵심 기법입니다. Core Web Vitals(LCP, CLS, INP) 지표로 사용자 체감 성능을 측정합니다.`,contentEn:`A fast site directly affects user experience and SEO. Key techniques are code splitting (lazy loading), image optimization (WebP, lazy loading), caching, and bundle size reduction. Core Web Vitals (LCP, CLS, INP) measure perceived performance.`,code:`// 1) 라우트 단위 코드 분할 (React)
const Admin = lazy(() => import('./pages/Admin'));

// 2) 이미지 지연 로딩
<img src="photo.webp" loading="lazy" alt="..." />

// 3) Vite 번들 분석
// npm run build -- 후 dist 청크 크기 확인
// rollup-plugin-visualizer로 시각화

// 4) 무거운 라이브러리는 동적 import
const heavy = await import('./heavyLib');`,codeLanguage:`javascript`,quiz:{question:`초기 로딩 속도를 높이기 위해 페이지를 필요할 때만 불러오는 기법은?`,questionEn:`Which technique loads pages only when needed to improve initial load speed?`,options:[`코드 분할(lazy loading)`,`인라인 스타일`,`전역 변수`,`동기 렌더링`],optionsEn:[`Code splitting (lazy loading)`,`Inline styles`,`Global variables`,`Synchronous rendering`],correctIndex:0,explanation:`코드 분할은 번들을 잘게 나눠 당장 필요한 코드만 먼저 로드하므로, 초기 로딩이 빨라집니다.`,explanationEn:`Code splitting breaks the bundle into pieces and loads only what is immediately needed, speeding up the initial load.`}},{title:`모니터링과 로깅`,titleEn:`Monitoring and Logging`,content:`배포 후에는 에러와 성능을 지속적으로 관찰해야 합니다. Sentry로 런타임 에러를 추적하고, 구조화된 로그를 남겨 문제를 재현·진단합니다. Google Analytics·웹 바이탈 측정으로 실제 사용자 환경의 지표를 수집합니다.`,contentEn:`After deployment, errors and performance must be continuously observed. Track runtime errors with Sentry and leave structured logs to reproduce and diagnose issues. Collect real-user metrics with Google Analytics and web-vitals measurement.`,code:`// Sentry로 에러 추적 (예시)
import * as Sentry from '@sentry/react';
Sentry.init({ dsn: process.env.VITE_SENTRY_DSN });

// 실사용자 웹 바이탈 측정
import { onLCP, onCLS, onINP } from 'web-vitals';
onLCP(console.log);   // Largest Contentful Paint
onCLS(console.log);   // Cumulative Layout Shift
onINP(console.log);   // Interaction to Next Paint

// 구조화 로그
console.log(JSON.stringify({
  level: 'error', msg: 'payment failed', userId: 42, ts: Date.now()
}));`,codeLanguage:`javascript`,quiz:{question:`배포된 앱에서 발생하는 런타임 에러를 수집·추적하는 도구의 예는?`,questionEn:`Which is an example of a tool that collects and tracks runtime errors in a deployed app?`,options:[`Prettier`,`Sentry`,`Vite`,`ESLint`],optionsEn:[`Prettier`,`Sentry`,`Vite`,`ESLint`],correctIndex:1,explanation:`Sentry는 운영 환경에서 발생한 에러를 스택 트레이스·컨텍스트와 함께 수집해 알려주는 모니터링 도구입니다.`,explanationEn:`Sentry is a monitoring tool that captures production errors with stack traces and context and alerts you.`}},{title:`HTTPS와 캐싱 전략`,titleEn:`HTTPS and Caching Strategy`,content:`HTTPS는 통신을 암호화해 데이터 위변조와 도청을 막는 필수 요소입니다. CDN과 캐시 헤더(Cache-Control)로 정적 자산을 사용자 가까이에서 빠르게 제공하고, 파일명 해시로 캐시 무효화를 제어합니다. Vite 빌드는 자산에 해시를 자동으로 붙입니다.`,contentEn:`HTTPS encrypts communication to prevent tampering and eavesdropping, and is essential. With a CDN and cache headers (Cache-Control), static assets are served fast from near the user, and filename hashes control cache invalidation. Vite builds automatically add hashes to assets.`,code:`# 정적 자산 - 길게 캐시 (파일명 해시로 무효화)
Cache-Control: public, max-age=31536000, immutable

# HTML - 항상 최신 확인
Cache-Control: no-cache

# Vite 빌드 결과 (자동 해시)
# dist/assets/index-D6boZUkF.js
# dist/assets/index.es-BJ5Iw-Wg.js
# → 내용이 바뀌면 해시가 바뀌어 브라우저가 새 파일을 받음`,codeLanguage:`bash`,quiz:{question:`내용이 자주 바뀌지 않는 정적 자산(JS/CSS)에 파일명 해시를 붙이면 좋은 점은?`,questionEn:`What is the benefit of adding a filename hash to rarely-changing static assets (JS/CSS)?`,options:[`파일이 작아진다`,`길게 캐시하면서도 내용 변경 시 자동으로 새 파일을 받게 한다`,`HTTPS가 필요 없어진다`,`빌드가 생략된다`],optionsEn:[`Files get smaller`,`Enables long caching while auto-fetching new files when content changes`,`HTTPS becomes unnecessary`,`The build is skipped`],correctIndex:1,explanation:`내용이 바뀌면 해시(파일명)가 달라지므로, 자산을 길게 캐시해도 변경 시 브라우저가 새 파일을 내려받아 캐시 무효화 문제가 해결됩니다.`,explanationEn:`When content changes the hash (filename) changes, so assets can be cached for a long time yet browsers fetch new files on change, solving cache invalidation.`}},{title:`실습 예제: 성능 점검 루틴`,titleEn:`Practice: A Performance Audit Routine`,content:`빌드 후 번들 크기를 확인하고, Lighthouse로 성능 점수를 측정하고, 코드 분할로 큰 청크를 줄이는 점검 루틴을 따라 해 봅니다. 배포 전 반복하면 좋은 체크리스트입니다.`,contentEn:`Follow an audit routine: check bundle size after build, measure performance with Lighthouse, and reduce large chunks with code splitting. A good checklist to repeat before deployment.`,code:`# 1) 빌드 후 청크 크기 확인 (Vite가 gzip 크기 출력)
npm run build

# 2) 번들 시각화로 큰 의존성 찾기
npm install -D rollup-plugin-visualizer
#   vite.config: plugins: [react(), visualizer()]

# 3) Lighthouse로 성능 측정 (CLI)
npx lighthouse https://web.dreamitbiz.com --view

# 4) 무거운 청크는 동적 import로 분할
#   const Chart = lazy(() => import('./Chart'));
# → 초기 번들에서 제외되어 LCP 개선`,codeLanguage:`bash`}]}],f=[{id:`01-nodejs`,chapter:1,titleKey:`vibe01`,sections:[{title:`바이브코딩 준비 & 내 운영체제 확인`,titleEn:`Preparing for Vibe Coding & Checking Your OS`,content:`바이브코딩(Vibe Coding)은 AI에게 자연어로 의도를 전달해 코드를 만드는 개발 방식입니다. Claude Code 같은 도구는 Node.js 위에서 동작하므로 가장 먼저 Node.js를 설치합니다. 시작 전, 내 컴퓨터의 운영체제(Windows / macOS)와 "터미널"을 알아둡니다. Windows는 PowerShell(시작 메뉴에서 "PowerShell" 검색), macOS는 터미널(Spotlight에서 "터미널" 검색)을 엽니다.`,contentEn:`Vibe coding is a way of building software by expressing intent to an AI in natural language. Tools like Claude Code run on Node.js, so install Node.js first. Before starting, know your OS (Windows / macOS) and its "terminal." On Windows use PowerShell (search "PowerShell" in the Start menu); on macOS use Terminal (search "Terminal" in Spotlight).`,code:`# ── 공통: 이미 설치돼 있는지 확인 ──
node -v      # 예: v20.11.0  (18 이상 권장)
npm -v       # 예: 10.2.4

# 위에서 "command not found"(macOS) 또는
# "'node'은(는) ... 인식되지 않습니다"(Windows) 가 나오면
# 아직 설치되지 않은 것 → 다음 섹션에서 설치합니다.

# 내 운영체제에서 터미널 여는 법
#  · Windows : 시작 메뉴 → "PowerShell" 검색 → 실행
#  · macOS   : Spotlight(⌘+Space) → "터미널" 입력 → 실행`,codeLanguage:`bash`,quiz:{question:`Claude Code를 쓰기 위해 가장 먼저 설치해야 하는 것은?`,questionEn:`What must be installed first to use Claude Code?`,options:[`Python`,`Node.js`,`Docker`,`Java`],optionsEn:[`Python`,`Node.js`,`Docker`,`Java`],correctIndex:1,explanation:`Claude Code는 Node.js 기반 CLI 도구입니다. Node.js(및 함께 설치되는 npm)가 먼저 필요하며 권장 버전은 18 이상입니다.`,explanationEn:`Claude Code is a Node.js-based CLI tool. Node.js (and the npm that comes with it) is required first, with version 18+ recommended.`}},{title:`Windows에 Node.js 설치하기`,titleEn:`Installing Node.js on Windows`,content:`Windows는 공식 사이트에서 LTS 설치 파일(.msi)을 받아 설치하는 것이 가장 쉽습니다. 설치 중 옵션은 기본값 그대로 두고 "Next"만 누르면 됩니다("Add to PATH"는 기본 체크됨). 설치가 끝나면 반드시 PowerShell 창을 새로 열어야 명령이 인식됩니다(기존 창은 인식 못 함).`,contentEn:`On Windows, the easiest path is to download the LTS installer (.msi) from the official site. Keep the defaults and just click "Next" ("Add to PATH" is checked by default). After installation, open a NEW PowerShell window so commands are recognized (the old window won't see it).`,code:`# 1) 브라우저로 https://nodejs.org 접속
#    → 왼쪽 "LTS" 버튼의 Windows Installer(.msi) 다운로드
# 2) 받은 .msi 더블클릭 → Next만 눌러 설치 (기본값 유지)
# 3) ★ 새 PowerShell 창을 연다 (시작 메뉴 → PowerShell)
# 4) 설치 확인
node -v
npm -v

# (참고) winget 패키지 매니저가 있다면 명령으로도 가능
winget install OpenJS.NodeJS.LTS`,codeLanguage:`bash`,quiz:{question:`Windows에서 Node.js 설치 직후 꼭 해야 할 일은?`,questionEn:`What must you do right after installing Node.js on Windows?`,options:[`컴퓨터를 포맷한다`,`새 PowerShell 창을 열고 node -v로 확인한다`,`브라우저를 바꾼다`,`Python을 설치한다`],optionsEn:[`Format the PC`,`Open a NEW PowerShell window and verify with node -v`,`Switch browsers`,`Install Python`],correctIndex:1,explanation:`설치 직후에는 PATH가 갱신되어야 하므로, 기존 창이 아닌 새 PowerShell 창을 열어 node -v로 확인합니다.`,explanationEn:`The PATH must refresh, so open a NEW PowerShell window (not the old one) and verify with node -v.`}},{title:`macOS에 Node.js 설치하기 (nvm 권장)`,titleEn:`Installing Node.js on macOS (nvm Recommended)`,content:`macOS는 nvm(Node Version Manager)으로 설치하는 것을 권장합니다. nvm은 Node를 사용자 홈에 설치해 뒤에서 다룰 권한 오류(EACCES)를 예방하고, 여러 버전을 쉽게 바꿀 수 있습니다. 간단히 쓰려면 공식 설치 파일(.pkg)이나 Homebrew도 됩니다.`,contentEn:`On macOS, installing via nvm (Node Version Manager) is recommended. nvm installs Node in your home directory, preventing the permission errors (EACCES) covered later, and lets you switch versions easily. For simplicity, the official installer (.pkg) or Homebrew also work.`,code:`# ── 권장: nvm 사용 (터미널에 붙여넣기) ──
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
# 터미널을 완전히 닫았다가 다시 연 뒤:
nvm install --lts        # 최신 LTS 설치
nvm use --lts
nvm alias default lts/*   # 기본 버전 고정
node -v

# ── 또는: Homebrew 사용 ──
brew install node

# ── 또는: 공식 설치 파일 ──
# https://nodejs.org 에서 macOS Installer(.pkg) 다운로드 후 실행`,codeLanguage:`bash`,quiz:{question:`macOS에서 nvm으로 Node를 설치하면 좋은 점은?`,questionEn:`What is the benefit of installing Node via nvm on macOS?`,options:[`인터넷이 빨라진다`,`사용자 홈에 설치돼 권한 오류를 예방하고 버전 전환이 쉽다`,`코드를 자동 작성한다`,`CSS가 예뻐진다`],optionsEn:[`Faster internet`,`Installs in your home dir, preventing permission errors and easing version switching`,`Auto-writes code`,`Nicer CSS`],correctIndex:1,explanation:`nvm은 Node를 홈 디렉터리에 두어 sudo 없이 전역 설치가 가능하고(EACCES 예방), 여러 버전을 자유롭게 전환합니다.`,explanationEn:`nvm keeps Node in your home directory so global installs work without sudo (preventing EACCES) and lets you switch versions freely.`}}]},{id:`02-folder`,chapter:2,titleKey:`vibe02`,sections:[{title:`작업 폴더를 어디에 만들까?`,titleEn:`Where to Create Your Project Folder`,content:`Claude Code는 "실행한 폴더"를 작업 대상으로 삼으므로, 먼저 프로젝트를 담을 폴더를 정합니다. 한글·공백·특수문자가 없는 영문 경로를 권장합니다(오류가 적습니다). 권장 위치는 Windows는 C:\\Users\\사용자\\dev, macOS는 ~/dev 입니다. 아래는 운영체제별 명령이 다르니 본인 OS의 창만 따라 하세요. (Windows는 PowerShell 기준이며, CMD에서는 mkdir 대신 md 를 써도 됩니다.)`,contentEn:`Claude Code uses the folder it runs in as its workspace, so first decide where your project lives. Prefer an English path without spaces/special characters (fewer errors). Recommended: C:\\Users\\you\\dev on Windows and ~/dev on macOS. Commands differ by OS — follow only your OS panel. (Windows is shown for PowerShell; in CMD you can use md instead of mkdir.)`,codeBlocks:[{label:`🪟 Windows (PowerShell)`,code:`# 사용자 폴더로 이동 (C:\\Users\\사용자)
cd $HOME

# dev 폴더 생성  (CMD에서는: md dev)
mkdir dev

# dev 폴더로 이동
cd dev

# 현재 위치 확인
pwd`,codeLanguage:`powershell`},{label:`🍎 macOS / Linux (터미널)`,code:`# 홈 폴더로 이동 (/Users/사용자)
cd ~

# dev 폴더 생성  (-p: 이미 있어도 오류 없음)
mkdir -p dev

# dev 폴더로 이동
cd dev

# 현재 위치 확인
pwd`,codeLanguage:`bash`}],quiz:{question:`작업 폴더 경로로 가장 권장되는 것은?`,questionEn:`Which project folder path is most recommended?`,options:[`바탕화면\\새 폴더 (한글·공백 포함)`,`영문·공백 없는 경로 (예: ~/dev, C:\\Users\\you\\dev)`,`아무 곳이나 상관없다`,`시스템 폴더(C:\\Windows)`],optionsEn:[`Desktop\\New Folder (Korean/spaces)`,`English path without spaces (e.g., ~/dev, C:\\Users\\you\\dev)`,`Anywhere is fine`,`A system folder (C:\\Windows)`],correctIndex:1,explanation:`한글·공백·특수문자가 없는 영문 경로가 도구 오류를 줄입니다. 홈 폴더 아래 dev 같은 짧은 경로가 안전합니다.`,explanationEn:`An English path without spaces/special characters reduces tooling errors. A short path like dev under your home folder is safe.`}},{title:`터미널에서 폴더 다루기 (cd · pwd · 목록)`,titleEn:`Working with Folders (cd · pwd · listing)`,content:`터미널의 기본은 "지금 어느 폴더에 있는지"를 늘 확인하는 것입니다. pwd로 현재 위치, cd로 이동, 목록 보기는 명령이 OS마다 다릅니다(Windows는 dir, macOS는 ls). cd ..는 상위 폴더, cd 폴더명은 하위 폴더로 들어갑니다. 절대경로 구분자는 Windows가 역슬래시(\\), macOS가 슬래시(/)입니다.`,contentEn:`The basics: always know "which folder am I in." pwd shows location, cd moves, and listing differs by OS (dir on Windows, ls on macOS). cd .. goes up, cd name enters a subfolder. Absolute-path separators are backslash (\\) on Windows and slash (/) on macOS.`,codeBlocks:[{label:`🪟 Windows (PowerShell)`,code:`pwd                  # 현재 위치
dir                  # 폴더 목록  (ls 도 동작)
cd dev               # 하위 폴더로 들어가기
cd ..                # 한 단계 위로
cd $HOME             # 홈 폴더로

mkdir my-first-app   # 프로젝트 폴더 생성 (CMD: md my-first-app)
cd my-first-app
pwd                  # 여기가 Claude Code 실행 폴더!`,codeLanguage:`powershell`},{label:`🍎 macOS / Linux (터미널)`,code:`pwd                  # 현재 위치
ls -al               # 폴더 목록
cd dev               # 하위 폴더로 들어가기
cd ..                # 한 단계 위로
cd ~                 # 홈 폴더로

mkdir -p my-first-app   # 프로젝트 폴더 생성
cd my-first-app
pwd                  # 여기가 Claude Code 실행 폴더!`,codeLanguage:`bash`}],quiz:{question:`현재 내가 어느 폴더에 있는지 확인하는 명령은?`,questionEn:`Which command shows which folder you are in?`,options:[`cd`,`pwd`,`mkdir`,`node`],optionsEn:[`cd`,`pwd`,`mkdir`,`node`],correctIndex:1,explanation:`pwd(print working directory)는 현재 작업 폴더 경로를 출력합니다. cd는 이동, mkdir(Windows CMD는 md)는 폴더 생성입니다.`,explanationEn:`pwd (print working directory) prints the current folder path. cd moves; mkdir (md in Windows CMD) creates a folder.`}},{title:`실습: 프로젝트 폴더 만들고 준비 끝내기`,titleEn:`Practice: Create a Project Folder and Finish Setup`,content:`Claude Code를 실행할 폴더를 직접 만들어 봅니다. dev 안에 프로젝트 폴더를 만들고 그 안으로 들어가 pwd로 위치를 확인하면 준비 끝입니다. 본인 OS의 창만 그대로 복사해 실행하세요.`,contentEn:`Create the folder where you will run Claude Code. Make a project folder inside dev, move into it, and confirm with pwd. Copy and run only your OS panel.`,codeBlocks:[{label:`🪟 Windows (PowerShell)`,code:`cd $HOME
mkdir dev            # 이미 있으면 이 줄은 건너뛰기
cd dev
mkdir my-first-app
cd my-first-app
pwd                  # C:\\Users\\사용자\\dev\\my-first-app`,codeLanguage:`powershell`},{label:`🍎 macOS / Linux (터미널)`,code:`mkdir -p ~/dev/my-first-app
cd ~/dev/my-first-app
pwd                  # /Users/사용자/dev/my-first-app`,codeLanguage:`bash`}]}]},{id:`03-install-claude-code`,chapter:3,titleKey:`vibe03`,sections:[{title:`Claude Code 설치`,titleEn:`Installing Claude Code`,content:`Node.js가 준비되면 npm으로 Claude Code를 전역(-g) 설치합니다. 전역 설치는 어느 폴더에서든 claude 명령을 쓸 수 있게 해줍니다. macOS에서 nvm을 쓰면 sudo 없이 설치되어 권한 오류를 피할 수 있습니다(앞 챕터 권장 이유).`,contentEn:`Once Node.js is ready, install Claude Code globally (-g) with npm. A global install makes the claude command available in any folder. On macOS with nvm, it installs without sudo, avoiding permission errors (the reason nvm was recommended earlier).`,code:`# 전역 설치 (Windows·macOS 공통)
npm install -g @anthropic-ai/claude-code

# 설치 확인
claude --version

# (선택) 최신으로 업데이트
npm update -g @anthropic-ai/claude-code

# ※ macOS에서 "permission denied / EACCES" 가 나오면
#    sudo 로 강제하지 말고 nvm 사용을 권장 (4챕터 참고)`,codeLanguage:`bash`,quiz:{question:`Claude Code를 어디서든 실행 가능하게 설치하는 npm 옵션은?`,questionEn:`Which npm option installs Claude Code so it runs anywhere?`,options:[`--save`,`-g (전역 설치)`,`-D`,`--local`],optionsEn:[`--save`,`-g (global install)`,`-D`,`--local`],correctIndex:1,explanation:`npm install -g 는 패키지를 전역으로 설치해, 특정 프로젝트가 아니라 시스템 어디서든 claude 명령을 쓸 수 있게 합니다.`,explanationEn:`npm install -g installs the package globally so the claude command works system-wide, not just in one project.`}},{title:`프로젝트 폴더에서 실행 & 로그인`,titleEn:`Run in Your Project Folder & Log In`,content:`2챕터에서 만든 프로젝트 폴더로 이동(cd)한 뒤 claude를 실행하면 대화형 세션이 시작됩니다. ★실행 전 pwd로 "원하는 폴더에 있는지" 꼭 확인하세요(엉뚱한 폴더에서 실행하면 그 폴더를 작업 대상으로 삼습니다). 처음 실행하면 브라우저로 Anthropic 계정 로그인(인증)을 진행합니다. 본인 OS의 창만 따라 하세요.`,contentEn:`Move (cd) into the project folder from Chapter 2, then run claude to start an interactive session. ★Before running, confirm with pwd that you are in the intended folder (running elsewhere makes that folder the workspace). On first run, authenticate with your Anthropic account in the browser. Follow only your OS panel.`,codeBlocks:[{label:`🪟 Windows (PowerShell)`,code:`# 1) 작업 폴더로 이동 + 위치 확인
cd $HOME\\dev\\my-first-app
pwd                  # 원하는 폴더가 맞는지 확인!

# 2) Claude Code 실행 (첫 실행 시 브라우저 로그인)
claude`,codeLanguage:`powershell`},{label:`🍎 macOS / Linux (터미널)`,code:`# 1) 작업 폴더로 이동 + 위치 확인
cd ~/dev/my-first-app
pwd                  # 원하는 폴더가 맞는지 확인!

# 2) Claude Code 실행 (첫 실행 시 브라우저 로그인)
claude`,codeLanguage:`bash`}],quiz:{question:`claude 실행 전에 pwd로 폴더를 확인해야 하는 이유는?`,questionEn:`Why check the folder with pwd before running claude?`,options:[`속도를 높이려고`,`Claude Code가 실행한 폴더를 작업 대상으로 삼기 때문`,`로그인을 건너뛰려고`,`인터넷 연결 확인용`],optionsEn:[`To speed it up`,`Because Claude Code uses the folder it runs in as the workspace`,`To skip login`,`To check the internet`],correctIndex:1,explanation:`Claude Code는 실행 위치(현재 폴더)를 작업 컨텍스트로 삼습니다. 엉뚱한 폴더에서 실행하면 의도치 않은 파일을 다루게 되므로 pwd로 확인합니다.`,explanationEn:`Claude Code uses its launch location (current folder) as the working context. Running elsewhere touches unintended files, so confirm with pwd.`}},{title:`기본 사용법과 슬래시 명령`,titleEn:`Basics and Slash Commands`,content:`세션 안에서는 평소 말하듯 요청하면 됩니다. /로 시작하는 슬래시 명령으로 기능을 빠르게 씁니다(/help 도움말, /clear 대화 초기화, /init 프로젝트 안내 파일 생성). 코드 변경은 사용자의 승인을 거쳐 적용되므로 안전하게 진행됩니다. 세션을 끝내려면 /exit 또는 Ctrl+C 두 번.`,contentEn:`Inside a session, just ask in plain language. Slash commands starting with / give quick access to features (/help, /clear to reset, /init to create a project guide file). Code changes apply after your approval, so it proceeds safely. To end a session, use /exit or press Ctrl+C twice.`,code:`# 세션 안에서 쓰는 대표 슬래시 명령
/help        # 사용 가능한 명령 보기
/clear       # 대화 컨텍스트 초기화
/init        # 프로젝트에 CLAUDE.md(안내 파일) 생성
/exit        # 세션 종료

# 자연어 요청 예시
#   "README에 설치 방법 섹션을 추가해줘"
#   "테스트를 실행하고 실패하면 원인을 설명해줘"`,codeLanguage:`bash`,quiz:{question:`Claude Code 세션에서 / 로 시작하는 입력은?`,questionEn:`What is an input starting with / in a Claude Code session?`,options:[`파일 경로`,`슬래시 명령(기능 단축)`,`주석`,`에러 메시지`],optionsEn:[`A file path`,`A slash command (feature shortcut)`,`A comment`,`An error message`],correctIndex:1,explanation:`/help, /clear 처럼 / 로 시작하는 입력은 슬래시 명령으로, 도구 기능을 빠르게 호출합니다.`,explanationEn:`Inputs starting with / like /help and /clear are slash commands that quickly invoke tool features.`}}]},{id:`04-troubleshooting`,chapter:4,titleKey:`vibe04`,sections:[{title:`권한 오류 — macOS(EACCES) & Windows(실행 정책)`,titleEn:`Permission Errors — macOS (EACCES) & Windows (Execution Policy)`,content:`전역 설치·실행 시 권한 오류가 운영체제별로 다릅니다. macOS/Linux는 "EACCES: permission denied"가 흔한데, sudo로 강제하지 말고 nvm으로 Node를 홈에 두는 것이 근본 해결입니다. Windows는 PowerShell 실행 정책 때문에 스크립트가 막힐 수 있어, 현재 사용자에 한해 정책을 완화합니다(관리자 권한 불필요·안전).`,contentEn:`Permission errors differ by OS. On macOS/Linux, "EACCES: permission denied" is common — don't force it with sudo; the proper fix is nvm (Node in your home). On Windows, PowerShell's execution policy may block scripts, so relax it for the current user only (no admin needed, safe).`,codeBlocks:[{label:`🍎 macOS / Linux — EACCES 해결 (sudo 금지)`,code:`# nvm 설치 → Node를 홈에 두어 권한 문제 해결
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
# 터미널 재시작 후
nvm install --lts
npm install -g @anthropic-ai/claude-code`,codeLanguage:`bash`},{label:`🪟 Windows (PowerShell) — 실행 정책`,code:`# "스크립트를 실행할 수 없습니다" 오류 시
# 현재 사용자만 허용 (관리자 아님, 안전)
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

# 현재 정책 확인
Get-ExecutionPolicy -List`,codeLanguage:`powershell`}],quiz:{question:`macOS에서 EACCES 권한 오류의 권장 해결책은?`,questionEn:`Recommended fix for EACCES on macOS?`,options:[`항상 sudo로 설치`,`nvm으로 Node를 홈에 설치`,`컴퓨터 재부팅`,`파일 삭제`],optionsEn:[`Always install with sudo`,`Install Node in your home via nvm`,`Reboot`,`Delete files`],correctIndex:1,explanation:`sudo는 권한 문제를 키울 수 있습니다. nvm으로 사용자 홈에 Node를 두면 sudo 없이 전역 설치가 되어 EACCES가 사라집니다.`,explanationEn:`sudo can worsen things. nvm puts Node in your home so global installs work without sudo, eliminating EACCES.`}},{title:`"명령을 찾을 수 없음" — PATH 문제 (OS별)`,titleEn:`"Command Not Found" — PATH Issues (per OS)`,content:`설치는 됐는데 node·npm·claude가 "찾을 수 없음"으로 나오면 PATH 문제이거나 터미널을 다시 안 연 경우입니다. 먼저 새 터미널/PowerShell을 엽니다. Windows는 설치 시 "Add to PATH"가 빠졌을 수 있어 .msi 재설치가 가장 간단하고, macOS는 셸 설정(~/.zshrc)에 nvm 로딩 구문이 있는지 확인합니다.`,contentEn:`If installed but node/npm/claude shows "not found," it is a PATH issue or you didn't reopen the terminal. Open a new terminal/PowerShell first. On Windows, "Add to PATH" may have been missed (reinstalling the .msi is simplest); on macOS, check that ~/.zshrc loads nvm.`,codeBlocks:[{label:`🪟 Windows (PowerShell)`,code:`# 0) 먼저 새 PowerShell 창을 연다

# node 위치 확인 → 경로가 보이면 PATH 정상
where.exe node

# 안 보이면: nodejs.org 에서 .msi 재설치
#   설치 마법사에서 "Add to PATH" 체크 확인`,codeLanguage:`powershell`},{label:`🍎 macOS / Linux (터미널)`,code:`# 0) 먼저 새 터미널을 연다

# ~/.zshrc 에 nvm 로딩 구문이 있는지 확인/추가
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# 설정 적용 후 확인
source ~/.zshrc
which node
which claude`,codeLanguage:`bash`}],quiz:{question:`명령이 "찾을 수 없음"으로 나올 때 가장 먼저 시도할 것은?`,questionEn:`First thing to try when a command is "not found"?`,options:[`OS 재설치`,`새 터미널을 열고 PATH/셸 설정 확인`,`코드 다시 작성`,`인터넷 해지`],optionsEn:[`Reinstall the OS`,`Open a new terminal and check PATH/shell config`,`Rewrite the code`,`Cancel the internet`],correctIndex:1,explanation:`대개 PATH 미갱신(터미널 재시작 필요)이나 셸 설정의 nvm 로딩 누락입니다. Windows는 재설치로 Add to PATH를 보장합니다.`,explanationEn:`Usually the PATH wasn't refreshed (reopen the terminal) or shell config lacks nvm loading. On Windows, reinstalling ensures Add to PATH.`}},{title:`폴더 실수 · 버전 · 네트워크 · 캐시`,titleEn:`Wrong Folder · Version · Network · Cache`,content:`초보자가 가장 자주 겪는 실수는 "엉뚱한 폴더에서 실행"입니다. 항상 pwd로 위치를 확인하고, 아니면 올바른 폴더로 이동하세요(아래 OS별 창). 그 밖에 Node 버전이 낮으면 18 이상으로 올리고(nvm install --lts), 회사망·프록시면 레지스트리 접근을 확인하며, 설치가 꼬이면 캐시 정리 후 재설치합니다(npm cache clean --force → 재설치, npm doctor로 자가 진단).`,contentEn:`The most common beginner mistake is "running in the wrong folder" — always confirm with pwd and move to the right folder (OS panels below). Also upgrade Node to 18+ if too low (nvm install --lts), check registry access on corporate/proxy networks, and clear the cache then reinstall if tangled (npm cache clean --force → reinstall; npm doctor to self-check).`,codeBlocks:[{label:`🪟 Windows (PowerShell)`,code:`# 폴더 실수 방지: 실행 전 습관
pwd                          # 원하는 프로젝트 폴더가 맞나?
cd $HOME\\dev\\my-first-app    # 아니면 올바른 폴더로 이동

# 설치가 꼬였을 때: 캐시 정리 후 재설치
npm cache clean --force
npm install -g @anthropic-ai/claude-code`,codeLanguage:`powershell`},{label:`🍎 macOS / Linux (터미널)`,code:`# 폴더 실수 방지: 실행 전 습관
pwd                          # 원하는 프로젝트 폴더가 맞나?
cd ~/dev/my-first-app        # 아니면 올바른 폴더로 이동

# Node 버전이 낮으면 업그레이드
nvm install --lts && nvm use --lts

# 설치가 꼬였을 때: 캐시 정리 후 재설치
npm cache clean --force
npm install -g @anthropic-ai/claude-code`,codeLanguage:`bash`}],quiz:{question:`초보자가 가장 자주 하는 실수와 예방법으로 옳은 것은?`,questionEn:`Most common beginner mistake and its prevention?`,options:[`타이핑이 느림 — 연습`,`엉뚱한 폴더에서 실행 — 실행 전 pwd로 확인`,`마우스 고장 — 교체`,`모니터가 작음 — 확대`],optionsEn:[`Slow typing — practice`,`Running in the wrong folder — confirm with pwd first`,`Broken mouse — replace`,`Small monitor — zoom`],correctIndex:1,explanation:`Claude Code는 현재 폴더를 작업 대상으로 삼으므로, 실행 전 pwd로 올바른 프로젝트 폴더인지 확인하는 습관이 실수를 막습니다.`,explanationEn:`Claude Code uses the current folder as its workspace, so confirming the right folder with pwd before running prevents mistakes.`}}]}],p=[{id:`01-start`,chapter:1,titleKey:`django01`,sections:[{title:`Django 시작하기`,titleEn:`Getting Started with Django`,content:`Django는 파이썬으로 작성된 풀스택 웹 프레임워크로, "배터리 포함(batteries included)" 철학에 따라 ORM·인증·관리자 페이지 등을 기본 제공합니다. 가상환경을 만들고 pip로 설치한 뒤, 프로젝트와 앱을 생성하는 것으로 시작합니다.`,contentEn:`Django is a full-stack web framework written in Python. Following the "batteries included" philosophy, it provides an ORM, authentication, an admin page, and more out of the box. You start by creating a virtual environment, installing it with pip, then creating a project and an app.`,codeBlocks:[{label:`🪟 Windows (PowerShell)`,code:`# 가상환경 생성 + 활성화 (Windows)
python -m venv venv
venv\\Scripts\\activate
pip install django

# 프로젝트와 앱 생성
django-admin startproject config .
python manage.py startapp blog

# 개발 서버 실행 → http://127.0.0.1:8000
python manage.py runserver`,codeLanguage:`powershell`},{label:`🍎 macOS / Linux (터미널)`,code:`# 가상환경 생성 + 활성화 (macOS / Linux)
python3 -m venv venv
source venv/bin/activate
pip install django

# 프로젝트와 앱 생성
django-admin startproject config .
python manage.py startapp blog

# 개발 서버 실행 → http://127.0.0.1:8000
python manage.py runserver`,codeLanguage:`bash`}],quiz:{question:`Django 개발 서버를 실행하는 명령은?`,questionEn:`Which command runs the Django development server?`,options:[`django-admin serve`,`python manage.py runserver`,`pip start`,`django run`],optionsEn:[`django-admin serve`,`python manage.py runserver`,`pip start`,`django run`],correctIndex:1,explanation:`python manage.py runserver 가 개발용 서버를 띄우며 기본 주소는 http://127.0.0.1:8000 입니다.`,explanationEn:`python manage.py runserver starts the development server, defaulting to http://127.0.0.1:8000.`}},{title:`MTV 구조`,titleEn:`The MTV Pattern`,content:`Django는 MTV(Model-Template-View) 패턴을 따릅니다. Model은 데이터(데이터베이스), Template은 화면(HTML), View는 요청을 처리해 둘을 연결하는 로직입니다. 일반적인 MVC의 Controller 역할을 Django에서는 View가, View(화면) 역할을 Template이 담당합니다.`,contentEn:`Django follows the MTV (Model-Template-View) pattern. The Model is data (database), the Template is the screen (HTML), and the View is the logic that handles requests and connects the two. The Controller role of typical MVC is handled by the View in Django, and the View(screen) role by the Template.`,code:`# views.py - 요청을 받아 응답을 만든다 (MTV의 V)
from django.http import HttpResponse
from django.shortcuts import render

def hello(request):
    return HttpResponse("안녕하세요, Django!")

def post_list(request):
    posts = ["첫 글", "둘째 글"]          # 실제로는 Model에서 조회
    return render(request, "blog/list.html", {"posts": posts})`,codeLanguage:`python`,quiz:{question:`Django의 MTV에서 요청을 처리하는 로직을 담당하는 것은?`,questionEn:`In Django's MTV, which part handles request-processing logic?`,options:[`Model`,`Template`,`View`,`Migration`],optionsEn:[`Model`,`Template`,`View`,`Migration`],correctIndex:2,explanation:`View가 요청을 받아 Model에서 데이터를 가져오고 Template으로 렌더링하는 로직을 담당합니다.`,explanationEn:`The View handles the logic of receiving a request, fetching data from the Model, and rendering with a Template.`}},{title:`실습 예제: 첫 페이지 띄우기`,titleEn:`Practice: Serving Your First Page`,content:`뷰 함수를 만들고 URL에 연결해 브라우저에 메시지를 띄우는 전체 흐름을 따라 해 봅니다. URLConf(urls.py)가 어떤 주소를 어떤 뷰에 연결하는지 이해하는 것이 핵심입니다.`,contentEn:`Follow the full flow of creating a view function, wiring it to a URL, and showing a message in the browser. The key is understanding how the URLConf (urls.py) maps an address to a view.`,code:`# blog/views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Web AtoZ - Django 첫 페이지</h1>")

# config/urls.py
from django.urls import path
from blog.views import home

urlpatterns = [
    path("", home),            # http://127.0.0.1:8000/  → home 뷰
]

# 실행
# python manage.py runserver`,codeLanguage:`python`}]},{id:`02-models-orm`,chapter:2,titleKey:`django02`,sections:[{title:`모델 정의하기`,titleEn:`Defining Models`,content:`모델은 데이터베이스 테이블을 파이썬 클래스로 표현합니다. models.Model을 상속하고 필드(CharField, TextField, DateTimeField 등)를 선언하면, Django가 SQL 테이블로 매핑해 줍니다. SQL을 직접 쓰지 않아도 됩니다.`,contentEn:`A model represents a database table as a Python class. Inherit from models.Model and declare fields (CharField, TextField, DateTimeField, etc.), and Django maps it to a SQL table — no raw SQL needed.`,code:`# blog/models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    published = models.BooleanField(default=False)

    def __str__(self):
        return self.title`,codeLanguage:`python`,quiz:{question:`Django 모델 클래스가 상속해야 하는 것은?`,questionEn:`What must a Django model class inherit from?`,options:[`models.Table`,`models.Model`,`django.DB`,`object`],optionsEn:[`models.Table`,`models.Model`,`django.DB`,`object`],correctIndex:1,explanation:`models.Model 을 상속하면 Django ORM이 해당 클래스를 데이터베이스 테이블로 매핑합니다.`,explanationEn:`Inheriting from models.Model lets the Django ORM map the class to a database table.`}},{title:`마이그레이션과 ORM 쿼리`,titleEn:`Migrations and ORM Queries`,content:`모델을 만들거나 바꾸면 makemigrations로 변경 계획을 만들고 migrate로 실제 DB에 반영합니다. 이후에는 QuerySet API(all, filter, get, create 등)로 SQL 없이 데이터를 다룹니다.`,contentEn:`After creating or changing a model, run makemigrations to generate a change plan and migrate to apply it to the DB. Then you manipulate data without SQL using the QuerySet API (all, filter, get, create, etc.).`,code:`# 마이그레이션 생성 & 적용
# python manage.py makemigrations
# python manage.py migrate

# ORM 쿼리 (python manage.py shell)
from blog.models import Post

Post.objects.create(title="첫 글", content="내용")   # 생성
Post.objects.all()                                    # 전체 조회
Post.objects.filter(published=True)                   # 조건 조회
post = Post.objects.get(id=1)                          # 단건 조회
post.title = "수정"; post.save()                       # 수정`,codeLanguage:`python`,quiz:{question:`모델 변경을 실제 데이터베이스에 반영하는 명령은?`,questionEn:`Which command applies model changes to the actual database?`,options:[`python manage.py runserver`,`python manage.py migrate`,`pip install`,`python manage.py shell`],optionsEn:[`python manage.py runserver`,`python manage.py migrate`,`pip install`,`python manage.py shell`],correctIndex:1,explanation:`makemigrations로 변경 계획을 만들고, migrate로 그 계획을 실제 DB 스키마에 적용합니다.`,explanationEn:`makemigrations creates the change plan, and migrate applies that plan to the actual DB schema.`}},{title:`실습 예제: 관리자 페이지로 데이터 관리`,titleEn:`Practice: Managing Data with the Admin`,content:`Django의 강력한 기본 기능인 관리자(admin) 페이지로, 코드 없이 모델 데이터를 추가·수정·삭제해 봅니다. 모델을 admin에 등록하고 슈퍼유저를 만들면 바로 사용할 수 있습니다.`,contentEn:`Use Django's powerful built-in admin to add, edit, and delete model data without code. Register the model in admin and create a superuser to start using it right away.`,code:`# blog/admin.py
from django.contrib import admin
from blog.models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "published", "created_at")
    list_filter = ("published",)
    search_fields = ("title",)

# 슈퍼유저 생성 후 /admin 접속
# python manage.py createsuperuser
# python manage.py runserver  →  http://127.0.0.1:8000/admin`,codeLanguage:`python`}]},{id:`03-views-templates`,chapter:3,titleKey:`django03`,sections:[{title:`URL과 뷰 연결`,titleEn:`Connecting URLs and Views`,content:`URLConf(urls.py)는 요청 주소를 뷰에 연결합니다. path()로 경로 패턴과 뷰를 매핑하고, <int:id> 같은 경로 변환자로 URL의 값을 뷰 인자로 전달받습니다. 앱별 urls.py를 include로 묶으면 구조가 깔끔해집니다.`,contentEn:`A URLConf (urls.py) maps request addresses to views. Use path() to map a path pattern to a view, and path converters like <int:id> to pass URL values as view arguments. Grouping per-app urls.py with include keeps structure clean.`,code:`# config/urls.py
from django.urls import path, include

urlpatterns = [
    path("", include("blog.urls")),
]

# blog/urls.py
from django.urls import path
from blog import views

urlpatterns = [
    path("", views.post_list, name="post_list"),
    path("post/<int:id>/", views.post_detail, name="post_detail"),
]`,codeLanguage:`python`,quiz:{question:`URL <int:id> 의 역할은?`,questionEn:`What does the URL pattern <int:id> do?`,options:[`정수 id 값을 뷰 인자로 전달`,`문자열만 허용`,`관리자 전용 경로`,`id를 숨긴다`],optionsEn:[`Passes an integer id as a view argument`,`Allows only strings`,`Admin-only path`,`Hides the id`],correctIndex:0,explanation:`<int:id>는 URL의 해당 부분을 정수로 변환해 뷰 함수의 id 인자로 전달하는 경로 변환자입니다.`,explanationEn:`<int:id> is a path converter that captures that URL segment as an integer and passes it as the view's id argument.`}},{title:`템플릿 렌더링`,titleEn:`Template Rendering`,content:`템플릿은 HTML에 Django 템플릿 언어(DTL)를 섞어 동적 화면을 만듭니다. {{ 변수 }}로 값을 출력하고 {% for %}·{% if %} 태그로 반복·분기합니다. 뷰에서 render()로 컨텍스트(데이터)를 템플릿에 전달합니다.`,contentEn:`Templates mix HTML with the Django Template Language (DTL) to build dynamic screens. Output values with {{ variable }} and loop/branch with {% for %} / {% if %} tags. The view passes context (data) to the template via render().`,code:`# blog/views.py
from django.shortcuts import render
from blog.models import Post

def post_list(request):
    posts = Post.objects.filter(published=True)
    return render(request, "blog/list.html", {"posts": posts})

# templates/blog/list.html
# <h1>글 목록</h1>
# <ul>
#   {% for post in posts %}
#     <li>{{ post.title }} - {{ post.created_at|date:"Y-m-d" }}</li>
#   {% empty %}
#     <li>아직 글이 없습니다.</li>
#   {% endfor %}
# </ul>`,codeLanguage:`python`,quiz:{question:`Django 템플릿에서 변수 값을 출력하는 문법은?`,questionEn:`What is the syntax to output a variable value in a Django template?`,options:[`{% variable %}`,`{{ variable }}`,"${variable}",`<%= variable %>`],optionsEn:[`{% variable %}`,`{{ variable }}`,"${variable}",`<%= variable %>`],correctIndex:1,explanation:`{{ }} 는 값 출력, {% %} 는 for/if 같은 템플릿 태그(로직)에 사용합니다.`,explanationEn:`{{ }} outputs values, while {% %} is for template tags (logic) like for/if.`}},{title:`실습 예제: 목록 → 상세 페이지`,titleEn:`Practice: List to Detail Page`,content:`목록 뷰와 상세 뷰를 만들어 글을 클릭하면 상세로 이동하는 흐름을 구현해 봅니다. get_object_or_404로 없는 글은 안전하게 404 처리하고, 템플릿에서 url 태그로 링크를 만듭니다.`,contentEn:`Build a list view and a detail view so clicking a post navigates to its detail. Use get_object_or_404 to safely return 404 for missing posts, and build links with the url tag in the template.`,code:`# blog/views.py
from django.shortcuts import render, get_object_or_404
from blog.models import Post

def post_detail(request, id):
    post = get_object_or_404(Post, id=id)
    return render(request, "blog/detail.html", {"post": post})

# templates/blog/list.html (링크)
# {% for post in posts %}
#   <a href="{% url 'post_detail' post.id %}">{{ post.title }}</a>
# {% endfor %}

# templates/blog/detail.html
# <h1>{{ post.title }}</h1>
# <p>{{ post.content }}</p>`,codeLanguage:`python`}]}],m=[{id:`01-start`,chapter:1,titleKey:`flask01`,sections:[{title:`Flask 시작하기`,titleEn:`Getting Started with Flask`,content:`Flask는 가볍고 유연한 파이썬 마이크로 웹 프레임워크입니다. 최소한의 핵심만 제공하고 필요한 기능은 확장으로 추가하는 방식이라, 작은 API나 프로토타입을 빠르게 만들기에 좋습니다. pip로 설치하고 몇 줄로 서버를 띄울 수 있습니다.`,contentEn:`Flask is a lightweight, flexible Python micro web framework. It provides a minimal core and adds features via extensions, making it great for quickly building small APIs or prototypes. Install with pip and start a server in just a few lines.`,codeBlocks:[{label:`🪟 Windows (PowerShell) — 가상환경 + 설치`,code:`python -m venv venv
venv\\Scripts\\activate
pip install flask`,codeLanguage:`powershell`},{label:`🍎 macOS / Linux — 가상환경 + 설치`,code:`python3 -m venv venv
source venv/bin/activate
pip install flask`,codeLanguage:`bash`}],code:`# app.py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "안녕하세요, Flask!"

if __name__ == "__main__":
    app.run(debug=True)   # http://127.0.0.1:5000`,codeLanguage:`python`,quiz:{question:`Flask를 가장 잘 설명한 것은?`,questionEn:`Which best describes Flask?`,options:[`풀스택 프레임워크`,`가볍고 유연한 마이크로 프레임워크`,`데이터베이스`,`프론트엔드 라이브러리`],optionsEn:[`A full-stack framework`,`A lightweight, flexible micro framework`,`A database`,`A frontend library`],correctIndex:1,explanation:`Flask는 최소 핵심만 제공하고 확장으로 기능을 더하는 마이크로 프레임워크입니다. Django와 달리 구성요소를 직접 선택합니다.`,explanationEn:`Flask is a micro framework that provides a minimal core and adds features via extensions. Unlike Django, you choose components yourself.`}},{title:`라우팅과 동적 URL`,titleEn:`Routing and Dynamic URLs`,content:`@app.route 데코레이터로 URL과 함수를 연결합니다. <name>처럼 꺾쇠를 쓰면 URL의 일부를 함수 인자로 받고, <int:id>로 타입을 지정할 수 있습니다. methods 인자로 GET/POST 등 허용 메서드를 정합니다.`,contentEn:`The @app.route decorator maps a URL to a function. Use angle brackets like <name> to capture part of the URL as a function argument, and <int:id> to set its type. The methods argument sets allowed methods like GET/POST.`,code:`from flask import Flask
app = Flask(__name__)

@app.route("/user/<name>")
def greet(name):
    return f"안녕하세요, {name}님!"

@app.route("/post/<int:id>")
def post(id):
    return f"{id}번 글"

@app.route("/submit", methods=["POST"])
def submit():
    return "제출 완료", 201`,codeLanguage:`python`,quiz:{question:`Flask에서 URL과 함수를 연결하는 것은?`,questionEn:`What connects a URL to a function in Flask?`,options:[`@app.route 데코레이터`,`app.connect()`,`url() 함수`,`route.py 파일`],optionsEn:[`The @app.route decorator`,`app.connect()`,`The url() function`,`A route.py file`],correctIndex:0,explanation:`@app.route("/경로") 데코레이터를 함수 위에 붙여 해당 URL 요청을 그 함수가 처리하게 합니다.`,explanationEn:`Placing the @app.route("/path") decorator above a function makes that function handle requests to the URL.`}},{title:`실습 예제: 간단한 인사 앱`,titleEn:`Practice: A Simple Greeting App`,content:`쿼리스트링과 경로 변수를 모두 받아 인사 메시지를 만드는 작은 앱을 구현해 봅니다. request.args로 ?name= 값을 읽고, 기본값 처리도 해봅니다.`,contentEn:`Build a small app that creates a greeting from both a query string and a path variable. Read ?name= via request.args and handle defaults.`,code:`from flask import Flask, request
app = Flask(__name__)

# /hello?name=애본  →  쿼리스트링 사용
@app.route("/hello")
def hello():
    name = request.args.get("name", "방문자")   # 기본값 방문자
    return f"<h2>안녕하세요, {name}님! 👋</h2>"

# /hello/애본  →  경로 변수 사용
@app.route("/hello/<name>")
def hello_path(name):
    return f"<h2>반가워요, {name}님!</h2>"

if __name__ == "__main__":
    app.run(debug=True)`,codeLanguage:`python`}]},{id:`02-rest-api`,chapter:2,titleKey:`flask02`,sections:[{title:`JSON REST API 만들기`,titleEn:`Building a JSON REST API`,content:`Flask는 jsonify로 파이썬 딕셔너리·리스트를 JSON 응답으로 변환합니다. request.get_json()으로 요청 본문을 읽고, 적절한 HTTP 상태 코드와 함께 반환해 REST API를 구성합니다.`,contentEn:`Flask converts Python dicts/lists to JSON responses with jsonify. Read the request body with request.get_json() and return it with the appropriate HTTP status code to build a REST API.`,code:`from flask import Flask, jsonify, request
app = Flask(__name__)

todos = [{"id": 1, "text": "Flask 배우기"}]

@app.route("/api/todos", methods=["GET"])
def list_todos():
    return jsonify(todos)

@app.route("/api/todos", methods=["POST"])
def add_todo():
    data = request.get_json()
    todo = {"id": len(todos) + 1, "text": data["text"]}
    todos.append(todo)
    return jsonify(todo), 201   # 201 Created`,codeLanguage:`python`,quiz:{question:`Flask에서 파이썬 딕셔너리를 JSON 응답으로 변환하는 함수는?`,questionEn:`Which function converts a Python dict to a JSON response in Flask?`,options:[`json.dumps()`,`jsonify()`,`render_json()`,`to_json()`],optionsEn:[`json.dumps()`,`jsonify()`,`render_json()`,`to_json()`],correctIndex:1,explanation:`jsonify()는 딕셔너리/리스트를 JSON으로 직렬화하고 Content-Type: application/json 헤더까지 설정해 줍니다.`,explanationEn:`jsonify() serializes dicts/lists to JSON and also sets the Content-Type: application/json header.`}},{title:`에러 처리와 상태 코드`,titleEn:`Error Handling and Status Codes`,content:`요청이 잘못되면 적절한 상태 코드(400·404 등)로 응답해야 합니다. 튜플 (본문, 상태코드)로 반환하거나 abort()를 사용하고, @app.errorhandler로 공통 에러 응답을 정의할 수 있습니다.`,contentEn:`When a request is invalid, respond with the right status code (400, 404, etc.). Return a (body, status) tuple or use abort(), and define common error responses with @app.errorhandler.`,code:`from flask import Flask, jsonify, request, abort
app = Flask(__name__)

@app.route("/api/todos/<int:id>")
def get_todo(id):
    todo = next((t for t in todos if t["id"] == id), None)
    if todo is None:
        abort(404)                       # 없으면 404
    return jsonify(todo)

@app.errorhandler(404)
def not_found(e):
    return jsonify({"error": "찾을 수 없습니다"}), 404`,codeLanguage:`python`,quiz:{question:`요청한 자원이 없을 때 반환할 적절한 상태 코드는?`,questionEn:`What is the appropriate status code when the requested resource does not exist?`,options:[`200`,`201`,`404`,`500`],optionsEn:[`200`,`201`,`404`,`500`],correctIndex:2,explanation:`404 Not Found는 자원이 존재하지 않음을 의미합니다. abort(404)로 즉시 반환할 수 있습니다.`,explanationEn:`404 Not Found means the resource does not exist. You can return it immediately with abort(404).`}},{title:`실습 예제: 메모 CRUD API`,titleEn:`Practice: Memo CRUD API`,content:`메모를 조회·생성·삭제하는 작은 REST API를 완성해 봅니다. 입력 검증(빈 값 거부)과 상태 코드를 함께 처리하는 실전 패턴입니다.`,contentEn:`Complete a small REST API to read, create, and delete memos. It is a practical pattern combining input validation (rejecting empty values) with status codes.`,code:`from flask import Flask, jsonify, request, abort
app = Flask(__name__)

memos = []
next_id = 1

@app.route("/api/memos", methods=["GET"])
def list_memos():
    return jsonify(memos)

@app.route("/api/memos", methods=["POST"])
def create_memo():
    global next_id
    data = request.get_json() or {}
    text = (data.get("text") or "").strip()
    if not text:
        return jsonify({"error": "text는 필수입니다"}), 400
    memo = {"id": next_id, "text": text}
    next_id += 1
    memos.append(memo)
    return jsonify(memo), 201

@app.route("/api/memos/<int:id>", methods=["DELETE"])
def delete_memo(id):
    global memos
    if not any(m["id"] == id for m in memos):
        abort(404)
    memos = [m for m in memos if m["id"] != id]
    return "", 204`,codeLanguage:`python`}]},{id:`03-templates-structure`,chapter:3,titleKey:`flask03`,sections:[{title:`Jinja2 템플릿`,titleEn:`Jinja2 Templates`,content:`Flask는 Jinja2 템플릿 엔진으로 HTML을 렌더링합니다. render_template으로 templates 폴더의 파일을 불러오고, {{ }}로 값을 출력, {% %}로 반복·분기합니다. 템플릿 상속(extends/block)으로 공통 레이아웃을 재사용합니다.`,contentEn:`Flask renders HTML with the Jinja2 template engine. Load files from the templates folder with render_template, output values with {{ }}, and loop/branch with {% %}. Reuse common layouts via template inheritance (extends/block).`,code:`from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    posts = [{"title": "첫 글"}, {"title": "둘째 글"}]
    return render_template("index.html", posts=posts)

# templates/index.html
# <h1>글 목록</h1>
# <ul>
#   {% for post in posts %}
#     <li>{{ post.title }}</li>
#   {% endfor %}
# </ul>`,codeLanguage:`python`,quiz:{question:`Flask에서 templates 폴더의 HTML을 렌더링하는 함수는?`,questionEn:`Which function renders HTML from the templates folder in Flask?`,options:[`render()`,`render_template()`,`template()`,`html()`],optionsEn:[`render()`,`render_template()`,`template()`,`html()`],correctIndex:1,explanation:`render_template("파일.html", 변수=값) 으로 Jinja2 템플릿을 렌더링하고 데이터를 전달합니다.`,explanationEn:`render_template("file.html", var=value) renders a Jinja2 template and passes data to it.`}},{title:`Blueprint로 구조화`,titleEn:`Structuring with Blueprints`,content:`앱이 커지면 Blueprint로 기능을 모듈로 분리합니다. 관련 라우트를 Blueprint에 모으고 app.register_blueprint로 등록하면, 하나의 거대한 app.py 대신 깔끔한 폴더 구조를 유지할 수 있습니다.`,contentEn:`As an app grows, split features into modules with Blueprints. Group related routes in a Blueprint and register it with app.register_blueprint to keep a clean folder structure instead of one giant app.py.`,code:`# blog/routes.py
from flask import Blueprint

blog = Blueprint("blog", __name__, url_prefix="/blog")

@blog.route("/")
def index():
    return "블로그 홈"

# app.py
from flask import Flask
from blog.routes import blog

app = Flask(__name__)
app.register_blueprint(blog)   # /blog/ 로 접근`,codeLanguage:`python`,quiz:{question:`Flask 앱을 기능별 모듈로 분리할 때 사용하는 것은?`,questionEn:`What is used to split a Flask app into feature modules?`,options:[`Module`,`Blueprint`,`Package`,`Router`],optionsEn:[`Module`,`Blueprint`,`Package`,`Router`],correctIndex:1,explanation:`Blueprint는 라우트 묶음을 모듈화하고, app.register_blueprint로 앱에 연결해 구조를 깔끔하게 유지합니다.`,explanationEn:`A Blueprint modularizes a set of routes and is attached to the app via app.register_blueprint to keep structure clean.`}},{title:`실습 예제: 폼 처리 페이지`,titleEn:`Practice: A Form-Handling Page`,content:`GET으로 폼을 보여주고 POST로 제출을 처리하는 한 라우트를 만들어 봅니다. 같은 경로에서 메서드로 분기하는 전형적인 패턴으로, 제출 후 결과를 다시 렌더링합니다.`,contentEn:`Build a single route that shows a form on GET and handles submission on POST. It is the typical pattern of branching by method on the same path, re-rendering the result after submit.`,code:`from flask import Flask, request, render_template_string
app = Flask(__name__)

FORM = """
<form method="post">
  <input name="msg" placeholder="메시지">
  <button>보내기</button>
</form>
{% if sent %}<p>받은 메시지: {{ sent }}</p>{% endif %}
"""

@app.route("/contact", methods=["GET", "POST"])
def contact():
    sent = None
    if request.method == "POST":
        sent = request.form.get("msg")
    return render_template_string(FORM, sent=sent)

if __name__ == "__main__":
    app.run(debug=True)`,codeLanguage:`python`}]}],h=[{id:`01-start`,chapter:1,titleKey:`gradio01`,sections:[{title:`Gradio 시작하기`,titleEn:`Getting Started with Gradio`,content:`Gradio는 머신러닝 모델이나 파이썬 함수를 몇 줄로 웹 UI로 감싸주는 라이브러리입니다. gr.Interface에 함수와 입력·출력 타입만 지정하면 즉시 데모 페이지가 생성됩니다. AI 데모·프로토타입 공유에 특히 유용합니다.`,contentEn:`Gradio is a library that wraps a machine learning model or Python function into a web UI in a few lines. Give gr.Interface a function and input/output types, and a demo page is generated instantly. It is especially useful for sharing AI demos and prototypes.`,codeBlocks:[{label:`🪟 Windows (PowerShell) — 가상환경 + 설치`,code:`python -m venv venv
venv\\Scripts\\activate
pip install gradio`,codeLanguage:`powershell`},{label:`🍎 macOS / Linux — 가상환경 + 설치`,code:`python3 -m venv venv
source venv/bin/activate
pip install gradio`,codeLanguage:`bash`}],code:`# app.py
import gradio as gr

def greet(name):
    return f"안녕하세요, {name}님!"

demo = gr.Interface(fn=greet, inputs="text", outputs="text")
demo.launch()   # 로컬 웹 UI 실행`,codeLanguage:`python`,quiz:{question:`Gradio의 핵심 용도는?`,questionEn:`What is Gradio mainly used for?`,options:[`데이터베이스 관리`,`파이썬 함수/ML 모델을 웹 UI로 빠르게 감싸기`,`CSS 스타일링`,`버전 관리`],optionsEn:[`Database management`,`Quickly wrapping Python functions/ML models in a web UI`,`CSS styling`,`Version control`],correctIndex:1,explanation:`Gradio는 함수와 입력/출력만 지정하면 웹 데모 UI를 자동 생성해, ML 모델·프로토타입을 쉽게 공유하게 해줍니다.`,explanationEn:`Gradio auto-generates a web demo UI from a function and its inputs/outputs, making it easy to share ML models and prototypes.`}},{title:`Interface와 컴포넌트`,titleEn:`Interface and Components`,content:`gr.Interface의 inputs·outputs에 컴포넌트를 지정해 입력 형태를 정합니다. "text", "number", "slider" 같은 문자열이나 gr.Textbox(), gr.Image() 같은 객체를 쓸 수 있고, 여러 개를 리스트로 넘기면 다중 입력/출력이 됩니다.`,contentEn:`Specify components in gr.Interface's inputs/outputs to define input forms. Use strings like "text", "number", "slider" or objects like gr.Textbox(), gr.Image(), and pass a list for multiple inputs/outputs.`,code:`import gradio as gr

def bmi(height_cm, weight_kg):
    h = height_cm / 100
    value = weight_kg / (h * h)
    return round(value, 1)

demo = gr.Interface(
    fn=bmi,
    inputs=[gr.Slider(120, 220, label="키(cm)"),
            gr.Number(label="몸무게(kg)")],
    outputs=gr.Number(label="BMI"),
)
demo.launch()`,codeLanguage:`python`,quiz:{question:`여러 개의 입력을 받으려면 inputs에 무엇을 전달하나요?`,questionEn:`How do you accept multiple inputs in gr.Interface?`,options:[`문자열 하나`,`컴포넌트들의 리스트`,`dict`,`아무것도 전달 안 함`],optionsEn:[`A single string`,`A list of components`,`A dict`,`Pass nothing`],correctIndex:1,explanation:`inputs에 컴포넌트들의 리스트를 넘기면 함수가 그 순서대로 여러 인자를 받습니다.`,explanationEn:`Passing a list of components to inputs makes the function receive multiple arguments in that order.`}},{title:`실습 예제: 텍스트 변환 데모`,titleEn:`Practice: A Text Transform Demo`,content:`입력 문자열을 대문자/소문자/길이로 변환해 보여주는 데모를 만들어 봅니다. 다중 출력과 예제(examples) 제공으로 사용성을 높이는 패턴을 익힙니다.`,contentEn:`Build a demo that transforms an input string into uppercase/lowercase/length. Learn the pattern of multiple outputs and providing examples to improve usability.`,code:`import gradio as gr

def transform(text):
    return text.upper(), text.lower(), len(text)

demo = gr.Interface(
    fn=transform,
    inputs=gr.Textbox(label="문장 입력"),
    outputs=[gr.Textbox(label="대문자"),
             gr.Textbox(label="소문자"),
             gr.Number(label="글자 수")],
    examples=[["Hello Gradio"], ["Web AtoZ"]],
    title="텍스트 변환기",
)
demo.launch()`,codeLanguage:`python`}]},{id:`02-blocks`,chapter:2,titleKey:`gradio02`,sections:[{title:`Blocks로 자유로운 레이아웃`,titleEn:`Flexible Layouts with Blocks`,content:`gr.Interface가 정형화된 UI라면, gr.Blocks는 행(Row)·열(Column)로 컴포넌트를 자유롭게 배치하고 이벤트를 직접 연결하는 방식입니다. 버튼 클릭(.click)에 함수를 연결하고 inputs/outputs를 지정해 동작을 정의합니다.`,contentEn:`While gr.Interface is a standardized UI, gr.Blocks lets you freely arrange components in Rows/Columns and wire events directly. Connect a function to a button click (.click) and specify inputs/outputs to define behavior.`,code:`import gradio as gr

def add(a, b):
    return a + b

with gr.Blocks() as demo:
    gr.Markdown("## 덧셈 계산기")
    with gr.Row():
        a = gr.Number(label="A")
        b = gr.Number(label="B")
    out = gr.Number(label="결과")
    btn = gr.Button("계산")
    btn.click(fn=add, inputs=[a, b], outputs=out)

demo.launch()`,codeLanguage:`python`,quiz:{question:`gr.Blocks에서 버튼 클릭에 함수를 연결하는 메서드는?`,questionEn:`Which method wires a function to a button click in gr.Blocks?`,options:[`.on()`,`.click()`,`.bind()`,`.submit()`],optionsEn:[`.on()`,`.click()`,`.bind()`,`.submit()`],correctIndex:1,explanation:`btn.click(fn=..., inputs=..., outputs=...) 으로 버튼 클릭 시 실행할 함수와 입출력 컴포넌트를 연결합니다.`,explanationEn:`btn.click(fn=..., inputs=..., outputs=...) connects the function to run on click along with input/output components.`}},{title:`상태와 이벤트`,titleEn:`State and Events`,content:`gr.State로 세션별 상태를 유지하고, 입력 변경(.change)·제출(.submit) 등 다양한 이벤트에 함수를 연결할 수 있습니다. 함수가 상태를 받아 갱신된 상태를 반환하면 누적 동작을 구현할 수 있습니다.`,contentEn:`Keep per-session state with gr.State and wire functions to various events like input change (.change) and submit (.submit). When a function takes state and returns updated state, you can implement cumulative behavior.`,code:`import gradio as gr

def add_item(item, items):
    items = items + [item]
    return items, "\\n".join(items)

with gr.Blocks() as demo:
    store = gr.State([])              # 세션 상태(리스트)
    inp = gr.Textbox(label="항목")
    out = gr.Textbox(label="목록")
    gr.Button("추가").click(add_item, [inp, store], [store, out])

demo.launch()`,codeLanguage:`python`,quiz:{question:`Gradio에서 세션별 상태를 유지하는 컴포넌트는?`,questionEn:`Which component keeps per-session state in Gradio?`,options:[`gr.Memory`,`gr.State`,`gr.Store`,`gr.Cache`],optionsEn:[`gr.Memory`,`gr.State`,`gr.Store`,`gr.Cache`],correctIndex:1,explanation:`gr.State는 사용자 세션별로 값을 저장해, 이벤트 함수에 입력으로 넘기고 갱신된 값을 다시 받을 수 있습니다.`,explanationEn:`gr.State stores values per user session, passed into event functions and returned updated.`}},{title:`실습 예제: 챗봇 인터페이스`,titleEn:`Practice: A Chatbot Interface`,content:`gr.ChatInterface로 몇 줄 만에 채팅 UI를 만들어 봅니다. 응답 함수는 (message, history)를 받아 답변 문자열을 반환하면 됩니다. 실제 LLM 호출 자리에 규칙 기반 응답을 넣어 구조를 익힙니다.`,contentEn:`Build a chat UI in a few lines with gr.ChatInterface. The response function takes (message, history) and returns a reply string. Use a rule-based reply in place of a real LLM call to learn the structure.`,code:`import gradio as gr

def respond(message, history):
    if "안녕" in message:
        return "안녕하세요! 무엇을 도와드릴까요?"
    return f"'{message}' 라고 하셨네요. 더 알려주세요!"

demo = gr.ChatInterface(
    fn=respond,
    title="간단 챗봇",
    examples=["안녕", "Gradio가 뭐야?"],
)
demo.launch()`,codeLanguage:`python`}]},{id:`03-share-deploy`,chapter:3,titleKey:`gradio03`,sections:[{title:`공유와 배포`,titleEn:`Sharing and Deployment`,content:`launch(share=True)를 쓰면 임시 공개 URL이 생성되어 누구에게나 데모를 보여줄 수 있습니다. 영구 배포는 Hugging Face Spaces가 가장 간편하며, app.py와 requirements.txt만 올리면 자동으로 호스팅됩니다.`,contentEn:`launch(share=True) creates a temporary public URL so anyone can see your demo. For permanent hosting, Hugging Face Spaces is the easiest — just upload app.py and requirements.txt and it hosts automatically.`,code:`import gradio as gr

def echo(x):
    return x

demo = gr.Interface(fn=echo, inputs="text", outputs="text")

# 임시 공개 링크 생성 (72시간 유효)
demo.launch(share=True)

# Hugging Face Spaces 배포 시 필요한 파일
# requirements.txt:
#   gradio
# app.py: 위 코드 그대로`,codeLanguage:`python`,quiz:{question:`임시 공개 URL을 만들어 데모를 공유하는 옵션은?`,questionEn:`Which option creates a temporary public URL to share a demo?`,options:[`launch(public=True)`,`launch(share=True)`,`launch(open=True)`,`share()`],optionsEn:[`launch(public=True)`,`launch(share=True)`,`launch(open=True)`,`share()`],correctIndex:1,explanation:`demo.launch(share=True) 는 외부에서 접속 가능한 임시 공개 링크를 생성합니다.`,explanationEn:`demo.launch(share=True) creates a temporary public link accessible externally.`}},{title:`이미지·파일 다루기`,titleEn:`Handling Images and Files`,content:`gr.Image, gr.File, gr.Audio 같은 컴포넌트로 미디어 입출력을 처리합니다. 이미지 입력은 numpy 배열 또는 PIL 이미지로 함수에 전달되며, 반환값을 그대로 출력 컴포넌트가 표시합니다.`,contentEn:`Handle media I/O with components like gr.Image, gr.File, gr.Audio. Image input is passed to the function as a numpy array or PIL image, and the return value is shown by the output component.`,code:`import gradio as gr
import numpy as np

def to_gray(img):
    # img: numpy 배열 (H, W, 3)
    gray = img.mean(axis=2).astype("uint8")
    return np.stack([gray] * 3, axis=2)

demo = gr.Interface(
    fn=to_gray,
    inputs=gr.Image(label="원본"),
    outputs=gr.Image(label="흑백"),
)
demo.launch()`,codeLanguage:`python`,quiz:{question:`gr.Image 입력은 함수에 어떤 형태로 전달되나요?`,questionEn:`In what form is gr.Image input passed to the function?`,options:[`문자열 경로만`,`numpy 배열(또는 PIL 이미지)`,`JSON`,`base64 문자열만`],optionsEn:[`Only a string path`,`A numpy array (or PIL image)`,`JSON`,`Only a base64 string`],correctIndex:1,explanation:`기본적으로 gr.Image는 numpy 배열로 전달됩니다(type="pil"로 PIL 이미지 지정 가능).`,explanationEn:`By default gr.Image is passed as a numpy array (use type="pil" for a PIL image).`}},{title:`실습 예제: 단어 빈도 분석기`,titleEn:`Practice: A Word Frequency Analyzer`,content:`문장을 입력하면 단어별 등장 횟수를 표(Dataframe)로 보여주는 데모를 만들어 봅니다. 출력에 gr.Dataframe을 사용해 분석 결과를 표 형태로 시각화합니다.`,contentEn:`Build a demo that shows word counts as a table (Dataframe) when you input a sentence. Use gr.Dataframe in the output to visualize the analysis as a table.`,code:`import gradio as gr
from collections import Counter

def word_freq(text):
    words = text.lower().split()
    counts = Counter(words).most_common()
    return [[w, c] for w, c in counts]   # [[단어, 횟수], ...]

demo = gr.Interface(
    fn=word_freq,
    inputs=gr.Textbox(label="문장", lines=3),
    outputs=gr.Dataframe(headers=["단어", "횟수"]),
    title="단어 빈도 분석기",
)
demo.launch()`,codeLanguage:`python`}]}],g=[{id:`01-start`,chapter:1,titleKey:`streamlit01`,sections:[{title:`Streamlit 시작하기`,titleEn:`Getting Started with Streamlit`,content:`Streamlit은 파이썬 스크립트만으로 데이터 앱·대시보드를 만드는 프레임워크입니다. HTML/CSS/JS 없이 st.write, st.title 같은 함수를 위에서 아래로 쓰면 그대로 웹 화면이 됩니다. streamlit run 명령으로 실행합니다.`,contentEn:`Streamlit is a framework for building data apps and dashboards with just a Python script. Without HTML/CSS/JS, functions like st.write and st.title written top-to-bottom become a web page. Run it with the streamlit run command.`,codeBlocks:[{label:`🪟 Windows (PowerShell) — 가상환경 + 설치`,code:`python -m venv venv
venv\\Scripts\\activate
pip install streamlit`,codeLanguage:`powershell`},{label:`🍎 macOS / Linux — 가상환경 + 설치`,code:`python3 -m venv venv
source venv/bin/activate
pip install streamlit`,codeLanguage:`bash`}],code:`# app.py
import streamlit as st

st.title("Web AtoZ 데이터 앱")
st.write("Streamlit으로 만든 첫 화면입니다.")
st.metric("방문자", 1234, "+12%")

# 실행 → 브라우저 자동 오픈
# streamlit run app.py`,codeLanguage:`python`,quiz:{question:`Streamlit 앱을 실행하는 명령은?`,questionEn:`Which command runs a Streamlit app?`,options:[`python app.py`,`streamlit run app.py`,`flask run`,`st start`],optionsEn:[`python app.py`,`streamlit run app.py`,`flask run`,`st start`],correctIndex:1,explanation:`streamlit run app.py 로 실행하면 로컬 서버가 뜨고 브라우저가 자동으로 열립니다.`,explanationEn:`streamlit run app.py starts a local server and automatically opens the browser.`}},{title:`텍스트·데이터·차트 표시`,titleEn:`Displaying Text, Data, and Charts`,content:`st.title·st.header·st.markdown으로 글을, st.dataframe·st.table로 표를, st.line_chart·st.bar_chart로 차트를 한 줄에 표시합니다. pandas DataFrame을 그대로 넘기면 인터랙티브 표·차트가 됩니다.`,contentEn:`Show text with st.title/st.header/st.markdown, tables with st.dataframe/st.table, and charts with st.line_chart/st.bar_chart in one line. Pass a pandas DataFrame directly to get interactive tables/charts.`,code:`import streamlit as st
import pandas as pd

st.header("월별 매출")

df = pd.DataFrame({
    "월": ["1월", "2월", "3월"],
    "매출": [120, 150, 90],
})

st.dataframe(df)                 # 인터랙티브 표
st.bar_chart(df, x="월", y="매출")  # 막대 차트`,codeLanguage:`python`,quiz:{question:`Streamlit에서 막대 차트를 그리는 함수는?`,questionEn:`Which function draws a bar chart in Streamlit?`,options:[`st.plot()`,`st.bar_chart()`,`st.graph()`,`st.draw()`],optionsEn:[`st.plot()`,`st.bar_chart()`,`st.graph()`,`st.draw()`],correctIndex:1,explanation:`st.bar_chart(데이터) 로 막대 차트를, st.line_chart로 선 차트를 한 줄에 그릴 수 있습니다.`,explanationEn:`st.bar_chart(data) draws a bar chart and st.line_chart draws a line chart, each in one line.`}},{title:`실습 예제: 미니 대시보드`,titleEn:`Practice: A Mini Dashboard`,content:`지표(metric)·표·차트를 한 화면에 모아 간단한 대시보드를 구성해 봅니다. st.columns로 여러 지표를 가로로 배치하는 레이아웃 패턴을 익힙니다.`,contentEn:`Compose a simple dashboard combining metrics, a table, and a chart on one screen. Learn the layout pattern of placing several metrics horizontally with st.columns.`,code:`import streamlit as st
import pandas as pd

st.title("📊 판매 대시보드")

c1, c2, c3 = st.columns(3)
c1.metric("매출", "₩4.2M", "+8%")
c2.metric("주문", "312", "+24")
c3.metric("환불", "5", "-2")

df = pd.DataFrame({
    "일자": ["월", "화", "수", "목", "금"],
    "매출": [80, 95, 70, 120, 130],
})
st.line_chart(df, x="일자", y="매출")
st.dataframe(df, use_container_width=True)`,codeLanguage:`python`}]},{id:`02-widgets`,chapter:2,titleKey:`streamlit02`,sections:[{title:`위젯과 상호작용`,titleEn:`Widgets and Interaction`,content:`st.slider·st.text_input·st.selectbox·st.button 같은 위젯은 사용자 입력을 받아 그 값을 변수로 돌려줍니다. 위젯 값이 바뀌면 스크립트가 위에서부터 다시 실행되며 화면이 갱신되는 것이 Streamlit의 핵심 동작 모델입니다.`,contentEn:`Widgets like st.slider, st.text_input, st.selectbox, and st.button take user input and return the value as a variable. When a widget value changes, the script re-runs top-to-bottom and the screen updates — this is Streamlit's core execution model.`,code:`import streamlit as st

name = st.text_input("이름", "방문자")
age = st.slider("나이", 0, 100, 25)
lang = st.selectbox("관심 언어", ["Python", "JavaScript", "Go"])

if st.button("인사하기"):
    st.success(f"{name}님({age}세)은 {lang}에 관심이 있군요!")`,codeLanguage:`python`,quiz:{question:`Streamlit에서 위젯 값이 바뀌면 일어나는 일은?`,questionEn:`What happens when a widget value changes in Streamlit?`,options:[`아무 일도 없음`,`스크립트가 위에서부터 다시 실행되어 화면 갱신`,`서버가 재시작`,`페이지가 새 탭으로 열림`],optionsEn:[`Nothing`,`The script re-runs from top, updating the screen`,`The server restarts`,`A new tab opens`],correctIndex:1,explanation:`Streamlit은 위젯 상호작용마다 스크립트 전체를 다시 실행해 최신 값으로 화면을 다시 그립니다.`,explanationEn:`Streamlit re-runs the entire script on each widget interaction, redrawing the screen with the latest values.`}},{title:`session_state와 캐시`,titleEn:`session_state and Caching`,content:`스크립트가 매번 다시 실행되므로, 값을 유지하려면 st.session_state에 저장합니다. 무거운 데이터 로딩·계산은 @st.cache_data로 캐싱해 재실행 시 반복 비용을 줄입니다.`,contentEn:`Since the script re-runs every time, store values in st.session_state to persist them. Cache heavy data loading/computation with @st.cache_data to avoid repeated cost on re-runs.`,code:`import streamlit as st

# 재실행에도 유지되는 카운터
if "count" not in st.session_state:
    st.session_state.count = 0

if st.button("증가"):
    st.session_state.count += 1

st.write("클릭 수:", st.session_state.count)

@st.cache_data            # 결과 캐싱 (무거운 작업 1회만)
def load_data():
    return [i * i for i in range(1000)]

data = load_data()`,codeLanguage:`python`,quiz:{question:`재실행에도 값을 유지하려면 어디에 저장하나요?`,questionEn:`Where do you store values to persist them across re-runs?`,options:[`전역 변수`,`st.session_state`,`파일`,`st.cache만`],optionsEn:[`A global variable`,`st.session_state`,`A file`,`Only st.cache`],correctIndex:1,explanation:`스크립트가 매번 재실행되므로 일반 변수는 초기화됩니다. st.session_state에 저장해야 상태가 유지됩니다.`,explanationEn:`Since the script re-runs each time, normal variables reset. Store in st.session_state to keep state.`}},{title:`실습 예제: 단위 변환기`,titleEn:`Practice: A Unit Converter`,content:`위젯과 즉시 갱신 모델을 활용해, 입력을 바꾸면 결과가 실시간으로 바뀌는 단위 변환기를 만들어 봅니다. 별도 버튼 없이 위젯 변경만으로 재실행되어 결과가 갱신됩니다.`,contentEn:`Using widgets and the instant re-run model, build a unit converter whose result updates live as you change inputs. With no separate button, changing a widget triggers a re-run that updates the result.`,code:`import streamlit as st

st.title("📏 단위 변환기")

unit = st.radio("변환 종류", ["cm → inch", "kg → lb"])
value = st.number_input("값", value=0.0)

if unit == "cm → inch":
    result = value / 2.54
    st.metric("inch", f"{result:.2f}")
else:
    result = value * 2.20462
    st.metric("lb", f"{result:.2f}")`,codeLanguage:`python`}]},{id:`03-layout-deploy`,chapter:3,titleKey:`streamlit03`,sections:[{title:`레이아웃: 사이드바·컬럼·탭`,titleEn:`Layout: Sidebar, Columns, Tabs`,content:`st.sidebar로 좌측 설정 패널을, st.columns로 가로 분할을, st.tabs로 탭을 구성해 화면을 정리합니다. with 블록 안에 컴포넌트를 넣으면 해당 영역에 배치됩니다.`,contentEn:`Organize the screen with st.sidebar for a left settings panel, st.columns for horizontal splits, and st.tabs for tabs. Placing components inside a with block puts them in that area.`,code:`import streamlit as st

with st.sidebar:
    st.header("설정")
    theme = st.selectbox("테마", ["라이트", "다크"])

tab1, tab2 = st.tabs(["요약", "상세"])
with tab1:
    c1, c2 = st.columns(2)
    c1.metric("매출", "4.2M")
    c2.metric("주문", "312")
with tab2:
    st.write("상세 내용이 여기에 표시됩니다.")`,codeLanguage:`python`,quiz:{question:`좌측 설정 패널을 만드는 Streamlit 요소는?`,questionEn:`Which Streamlit element creates a left settings panel?`,options:[`st.panel`,`st.sidebar`,`st.left`,`st.menu`],optionsEn:[`st.panel`,`st.sidebar`,`st.left`,`st.menu`],correctIndex:1,explanation:`st.sidebar(또는 with st.sidebar:)에 넣은 위젯은 화면 왼쪽 사이드바에 배치됩니다.`,explanationEn:`Widgets placed in st.sidebar (or with st.sidebar:) appear in the left sidebar.`}},{title:`Streamlit Community Cloud 배포`,titleEn:`Deploying to Streamlit Community Cloud`,content:`GitHub 저장소에 app.py와 requirements.txt를 올리고 Streamlit Community Cloud에 연결하면 무료로 배포됩니다. 코드를 push하면 자동으로 다시 배포되어 운영이 간단합니다.`,contentEn:`Push app.py and requirements.txt to a GitHub repo and connect it to Streamlit Community Cloud for free hosting. Pushing code auto-redeploys, keeping operations simple.`,code:`# 프로젝트 구조
# my-app/
#   app.py
#   requirements.txt   ← streamlit, pandas 등 의존성

# requirements.txt 예시
#   streamlit
#   pandas

# 배포 순서
# 1) GitHub에 push
# 2) share.streamlit.io 에서 New app → 저장소/브랜치/app.py 선택
# 3) Deploy → push 할 때마다 자동 재배포`,codeLanguage:`python`,quiz:{question:`Streamlit 앱 배포 시 의존성을 명시하는 파일은?`,questionEn:`Which file lists dependencies when deploying a Streamlit app?`,options:[`package.json`,`requirements.txt`,`Dockerfile`,`setup.cfg`],optionsEn:[`package.json`,`requirements.txt`,`Dockerfile`,`setup.cfg`],correctIndex:1,explanation:`requirements.txt에 streamlit 등 파이썬 의존성을 적어두면 배포 환경이 자동으로 설치합니다.`,explanationEn:`Listing Python dependencies like streamlit in requirements.txt lets the deploy environment install them automatically.`}},{title:`실습 예제: CSV 업로드 분석기`,titleEn:`Practice: A CSV Upload Analyzer`,content:`st.file_uploader로 CSV를 업로드받아 표와 기초 통계를 보여주는 앱을 만들어 봅니다. 파일이 없을 때의 안내 처리까지 포함한 실전 데이터 앱 패턴입니다.`,contentEn:`Build an app that uploads a CSV via st.file_uploader and shows the table and basic statistics. It includes guidance when no file is present — a practical data-app pattern.`,code:`import streamlit as st
import pandas as pd

st.title("📁 CSV 분석기")

file = st.file_uploader("CSV 파일 업로드", type="csv")

if file is not None:
    df = pd.read_csv(file)
    st.subheader("데이터 미리보기")
    st.dataframe(df.head())
    st.subheader("기초 통계")
    st.write(df.describe())
else:
    st.info("CSV 파일을 업로드하면 분석 결과가 표시됩니다.")`,codeLanguage:`python`}]}],_=[...e,...t,...n,...r],v={beginner:e,intermediate:t,advanced:n,practical:r};function y(e){return _.find(t=>t.id===e)}function b(e){return v[e]||[]}var x={html:{chapters:i,titleKey:`html`,color:`#E44D26`,icon:`html`},css:{chapters:a,titleKey:`css`,color:`#264DE4`,icon:`css`},javascript:{chapters:o,titleKey:`javascript`,color:`#F7DF1E`,icon:`js`},react:{chapters:s,titleKey:`react`,color:`#61DAFB`,icon:`react`},typescript:{chapters:c,titleKey:`typescript`,color:`#3178C6`,icon:`ts`},git:{chapters:l,titleKey:`git`,color:`#F05032`,icon:`git`},backend:{chapters:u,titleKey:`backend`,color:`#68A063`,icon:`backend`},devops:{chapters:d,titleKey:`devops`,color:`#2496ED`,icon:`devops`},vibecoding:{chapters:f,titleKey:`vibecoding`,color:`#CC785C`,icon:`vibe`},django:{chapters:p,titleKey:`django`,color:`#44B78B`,icon:`django`},flask:{chapters:m,titleKey:`flask`,color:`#6366F1`,icon:`flask`},gradio:{chapters:h,titleKey:`gradio`,color:`#FF7C00`,icon:`gradio`},streamlit:{chapters:g,titleKey:`streamlit`,color:`#FF4B4B`,icon:`streamlit`}},S=[`html`,`css`,`javascript`,`vibecoding`,`react`,`typescript`,`django`,`flask`,`gradio`,`streamlit`,`git`,`backend`,`devops`];export{x as a,v as i,y as n,S as o,b as r,_ as t};