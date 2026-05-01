var e=[{id:`beginner-1`,number:1,title:`자기소개 페이지`,titleEn:`Self Introduction Page`,category:`beginner`,topic:`html`,difficulty:`beginner`,description:`자기소개 HTML 페이지를 작성하세요. 이름, 취미, 좋아하는 것을 포함해야 합니다.`,descriptionEn:`Create a self-introduction HTML page. Include your name, hobbies, and favorite things.`,hint:`<h1>, <p>, <ul>, <li> 태그를 활용하세요.`,hintEn:`Use <h1>, <p>, <ul>, <li> tags.`,solution:{html:`<h1>안녕하세요! 저는 홍길동입니다</h1>
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
</ol>`},solutionExplanation:`HTML의 기본 태그인 h1(제목), p(단락), ul/ol(목록), li(항목)을 사용하여 구조화된 자기소개 페이지를 만들었습니다.`,solutionExplanationEn:`Created a structured self-introduction page using basic HTML tags: h1 (heading), p (paragraph), ul/ol (lists), li (items).`},{id:`beginner-2`,number:2,title:`간단한 카드 UI`,titleEn:`Simple Card UI`,category:`beginner`,topic:`css`,difficulty:`beginner`,description:`CSS를 사용하여 그림자와 둥근 모서리를 가진 카드 UI를 만드세요.`,descriptionEn:`Create a card UI with shadow and rounded corners using CSS.`,solution:{html:`<div class="card">
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
.card button:hover { background: #003399; }`},solutionExplanation:`box-shadow로 카드 그림자를, border-radius로 둥근 모서리를 구현했습니다. 버튼에 hover 효과도 추가했습니다.`,solutionExplanationEn:`Used box-shadow for card shadow and border-radius for rounded corners. Added hover effect on the button.`},{id:`beginner-3`,number:3,title:`버튼 클릭 카운터`,titleEn:`Button Click Counter`,category:`beginner`,topic:`javascript`,difficulty:`beginner`,description:`버튼을 클릭할 때마다 숫자가 1씩 증가하는 카운터를 만드세요.`,descriptionEn:`Create a counter that increments by 1 each time a button is clicked.`,solution:{html:`<div style="text-align:center;padding:40px">
  <h2 id="count">0</h2>
  <button id="btn" style="padding:10px 24px;font-size:16px;cursor:pointer">클릭!</button>
</div>`,js:`let count = 0;
document.getElementById('btn').addEventListener('click', function() {
  count++;
  document.getElementById('count').textContent = count;
});`},solutionExplanation:`addEventListener로 클릭 이벤트를 감지하고, textContent로 화면의 숫자를 업데이트합니다.`,solutionExplanationEn:`Uses addEventListener to detect click events and textContent to update the displayed number.`},{id:`beginner-4`,number:4,title:`네비게이션 바`,titleEn:`Navigation Bar`,category:`beginner`,topic:`css`,difficulty:`beginner`,description:`Flexbox를 사용하여 수평 네비게이션 바를 만드세요.`,descriptionEn:`Create a horizontal navigation bar using Flexbox.`,solution:{html:`<nav class="navbar">
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
.nav-links a:hover { background: rgba(255,255,255,0.2); }`},solutionExplanation:`Flexbox의 justify-content: space-between으로 로고와 메뉴를 양쪽에 배치하고, gap으로 메뉴 간격을 설정했습니다.`,solutionExplanationEn:`Used Flexbox justify-content: space-between to place logo and menu on opposite sides, and gap for menu spacing.`},{id:`beginner-5`,number:5,title:`이미지 갤러리`,titleEn:`Image Gallery`,category:`beginner`,topic:`html`,difficulty:`beginner`,description:`HTML과 CSS를 사용하여 3열 이미지 갤러리를 만드세요. figure와 figcaption 태그를 활용하세요.`,descriptionEn:`Create a 3-column image gallery using HTML and CSS. Use figure and figcaption tags.`,hint:`CSS Grid의 grid-template-columns: repeat(3, 1fr)을 활용하세요.`,hintEn:`Use CSS Grid with grid-template-columns: repeat(3, 1fr).`,solution:{html:`<div class="gallery">
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
}`},solutionExplanation:`CSS Grid로 3열 레이아웃을 만들고, figure/figcaption으로 시맨틱 마크업을 적용했습니다. object-fit: cover로 이미지 비율을 유지합니다.`,solutionExplanationEn:`Used CSS Grid for 3-column layout with semantic figure/figcaption markup. object-fit: cover maintains image aspect ratio.`},{id:`beginner-6`,number:6,title:`그라데이션 버튼`,titleEn:`Gradient Button`,category:`beginner`,topic:`css`,difficulty:`beginner`,description:`CSS 그라데이션과 hover 애니메이션이 적용된 버튼을 만드세요. 마우스를 올리면 그라데이션 방향이 바뀌어야 합니다.`,descriptionEn:`Create a button with CSS gradient and hover animation. The gradient direction should change on hover.`,hint:`linear-gradient와 transition 속성을 활용하세요.`,hintEn:`Use linear-gradient and transition properties.`,solution:{html:`<div style="text-align:center;padding:60px">
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
}`},solutionExplanation:`linear-gradient로 그라데이션 배경을 만들고, hover 시 방향을 반대로 변경합니다. transition으로 부드러운 전환 효과를 추가했습니다.`,solutionExplanationEn:`Created gradient background with linear-gradient, reversing direction on hover. Added smooth transition effects.`},{id:`beginner-7`,number:7,title:`할 일 목록`,titleEn:`To-Do List`,category:`beginner`,topic:`javascript`,difficulty:`beginner`,description:`입력창에 텍스트를 입력하고 추가 버튼을 누르면 할 일 목록에 항목이 추가되는 프로그램을 만드세요. 각 항목에 삭제 버튼도 포함하세요.`,descriptionEn:`Create a program where typing text and clicking Add adds items to a to-do list. Include a delete button for each item.`,hint:`createElement, appendChild, remove() 메서드를 활용하세요.`,hintEn:`Use createElement, appendChild, and remove() methods.`,solution:{html:`<div class="todo-app">
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
}`},solutionExplanation:`DOM 조작 메서드(createElement, appendChild, remove)를 사용하여 동적으로 목록 항목을 추가/삭제합니다. Enter 키 입력도 지원합니다.`,solutionExplanationEn:`Uses DOM manipulation methods (createElement, appendChild, remove) to dynamically add/delete list items. Also supports Enter key input.`},{id:`beginner-8`,number:8,title:`연락처 폼`,titleEn:`Contact Form`,category:`beginner`,topic:`html`,difficulty:`beginner`,description:`이름, 이메일, 메시지 필드가 있는 연락처 폼을 만드세요. 각 필드에 적절한 label과 placeholder를 포함하세요.`,descriptionEn:`Create a contact form with name, email, and message fields. Include appropriate labels and placeholders for each field.`,hint:`<form>, <label>, <input>, <textarea> 태그와 for 속성을 활용하세요.`,hintEn:`Use <form>, <label>, <input>, <textarea> tags with the for attribute.`,solution:{html:`<form class="contact-form">
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
}`},solutionExplanation:`label의 for 속성과 input의 id를 연결하여 접근성을 확보했습니다. required 속성으로 필수 입력 검증을 추가했습니다.`,solutionExplanationEn:`Connected label for attribute with input id for accessibility. Added required attribute for mandatory field validation.`},{id:`beginner-9`,number:9,title:`타이포그래피 스타일`,titleEn:`Typography Styles`,category:`beginner`,topic:`css`,difficulty:`beginner`,description:`CSS를 사용하여 다양한 타이포그래피 스타일을 적용한 텍스트 페이지를 만드세요. 제목, 본문, 인용문, 강조 등을 포함하세요.`,descriptionEn:`Create a text page with various typography styles using CSS. Include headings, body text, blockquotes, and emphasis.`,hint:`font-size, font-weight, line-height, letter-spacing 속성을 활용하세요.`,hintEn:`Use font-size, font-weight, line-height, and letter-spacing properties.`,solution:{html:`<article class="typography">
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
}`},solutionExplanation:`다양한 CSS 타이포그래피 속성(font-size, line-height, letter-spacing)을 사용하여 계층적 텍스트 디자인을 구현했습니다.`,solutionExplanationEn:`Implemented hierarchical text design using various CSS typography properties (font-size, line-height, letter-spacing).`},{id:`beginner-10`,number:10,title:`다크모드 토글`,titleEn:`Toggle Dark Mode`,category:`beginner`,topic:`javascript`,difficulty:`beginner`,description:`버튼을 클릭하면 다크모드와 라이트모드를 전환하는 기능을 만드세요. 배경색과 글자색이 변경되어야 합니다.`,descriptionEn:`Create a toggle that switches between dark mode and light mode when clicked. Background and text colors should change.`,hint:`classList.toggle()과 CSS 변수(custom properties)를 활용하세요.`,hintEn:`Use classList.toggle() and CSS custom properties.`,solution:{html:`<div class="theme-container">
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
});`},solutionExplanation:`CSS 변수(Custom Properties)로 테마 색상을 정의하고, JavaScript의 classList.toggle()로 dark 클래스를 전환합니다. transition으로 부드러운 전환 효과를 추가했습니다.`,solutionExplanationEn:`Defined theme colors with CSS Custom Properties, toggled dark class with classList.toggle(). Added smooth transition effects.`}],t=[{id:`intermediate-1`,number:1,title:`반응형 그리드 레이아웃`,titleEn:`Responsive Grid Layout`,category:`intermediate`,topic:`css`,difficulty:`intermediate`,description:`CSS Grid를 사용하여 화면 크기에 따라 열 수가 자동으로 변경되는 반응형 카드 레이아웃을 만드세요. 데스크톱 3열, 태블릿 2열, 모바일 1열이어야 합니다.`,descriptionEn:`Create a responsive card layout using CSS Grid that automatically adjusts columns based on screen size. Desktop 3 columns, tablet 2, mobile 1.`,hint:`@media 쿼리와 auto-fill/minmax를 활용하세요.`,hintEn:`Use @media queries and auto-fill/minmax.`,solution:{html:`<div class="grid-container">
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
}`},solutionExplanation:`auto-fill과 minmax를 사용하여 자동 반응형 그리드를 만들고, @media 쿼리로 브레이크포인트별 열 수를 제어합니다.`,solutionExplanationEn:`Used auto-fill with minmax for automatic responsive grid, and @media queries to control column counts at breakpoints.`},{id:`intermediate-2`,number:2,title:`CSS 애니메이션`,titleEn:`CSS Animations`,category:`intermediate`,topic:`css`,difficulty:`intermediate`,description:`@keyframes를 사용하여 로딩 스피너, 페이드인 텍스트, 바운스 효과 등 다양한 CSS 애니메이션을 만드세요.`,descriptionEn:`Create various CSS animations using @keyframes: loading spinner, fade-in text, and bounce effects.`,hint:`@keyframes, animation-duration, animation-iteration-count 속성을 활용하세요.`,hintEn:`Use @keyframes, animation-duration, and animation-iteration-count properties.`,solution:{html:`<div class="animation-showcase">
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
}`},solutionExplanation:`@keyframes로 4가지 애니메이션(회전, 페이드인, 바운스, 펄스)을 정의하고 animation 속성으로 적용했습니다.`,solutionExplanationEn:`Defined 4 animations (spin, fade-in, bounce, pulse) with @keyframes and applied them using the animation property.`},{id:`intermediate-3`,number:3,title:`Fetch API 데이터 표시`,titleEn:`Fetch API Data Display`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`Fetch API를 사용하여 외부 API에서 사용자 목록 데이터를 가져와 카드 형태로 화면에 표시하세요. 로딩 상태와 에러 처리도 포함하세요.`,descriptionEn:`Use the Fetch API to retrieve user list data from an external API and display it as cards. Include loading states and error handling.`,hint:`fetch(), .then(), .catch()와 async/await 패턴을 활용하세요.`,hintEn:`Use fetch(), .then(), .catch() and async/await patterns.`,solution:{html:`<div class="api-demo">
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
});`},solutionExplanation:`async/await로 Fetch API를 호출하고, try-catch-finally로 로딩/에러/완료 상태를 관리합니다. DOM을 동적으로 생성하여 데이터를 표시합니다.`,solutionExplanationEn:`Called Fetch API with async/await, managed loading/error/complete states with try-catch-finally. Dynamically created DOM to display data.`},{id:`intermediate-4`,number:4,title:`탭 컴포넌트`,titleEn:`Tab Component`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`여러 탭을 클릭하면 해당 콘텐츠가 표시되는 탭 컴포넌트를 만드세요. 활성화된 탭에 하이라이트 스타일을 적용하세요.`,descriptionEn:`Create a tab component that shows corresponding content when tabs are clicked. Apply highlight styles to the active tab.`,hint:`data 속성과 classList를 활용하여 탭 전환을 구현하세요.`,hintEn:`Use data attributes and classList to implement tab switching.`,solution:{html:`<div class="tabs-container">
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
});`},solutionExplanation:`data-tab 속성으로 탭과 콘텐츠를 연결하고, classList.add/remove로 활성 상태를 전환합니다.`,solutionExplanationEn:`Connected tabs to content via data-tab attributes, and toggled active state with classList.add/remove.`},{id:`intermediate-5`,number:5,title:`아코디언 메뉴`,titleEn:`Accordion Menu`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`클릭하면 열리고 닫히는 아코디언 메뉴를 만드세요. 하나의 항목을 열면 나머지는 자동으로 닫히도록 구현하세요.`,descriptionEn:`Create an accordion menu that opens and closes on click. When one item opens, the others should automatically close.`,hint:`max-height와 overflow: hidden을 사용하여 애니메이션을 구현하세요.`,hintEn:`Use max-height and overflow: hidden to implement animations.`,solution:{html:`<div class="accordion">
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
});`},solutionExplanation:`max-height를 0과 scrollHeight 사이에서 전환하여 부드러운 열기/닫기 애니메이션을 구현합니다. 한 항목만 열리도록 나머지를 먼저 닫습니다.`,solutionExplanationEn:`Transitions max-height between 0 and scrollHeight for smooth open/close animation. Closes all others before opening the clicked item.`},{id:`intermediate-6`,number:6,title:`모달 팝업`,titleEn:`Modal Popup`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`버튼을 클릭하면 오버레이와 함께 모달 팝업이 나타나는 컴포넌트를 만드세요. 닫기 버튼, 오버레이 클릭, ESC 키로 닫을 수 있어야 합니다.`,descriptionEn:`Create a modal popup component that appears with an overlay when a button is clicked. It should close via close button, overlay click, or ESC key.`,hint:`position: fixed와 z-index를 사용하여 오버레이를 구현하세요.`,hintEn:`Use position: fixed and z-index to implement the overlay.`,solution:{html:`<div style="text-align:center;padding:60px">
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
});`},solutionExplanation:`position: fixed 오버레이 위에 모달을 배치하고, 3가지 닫기 방법(X 버튼, 오버레이 클릭, ESC 키)을 구현했습니다. body overflow hidden으로 배경 스크롤을 방지합니다.`,solutionExplanationEn:`Positioned modal over a fixed overlay with 3 close methods (X button, overlay click, ESC key). Prevented background scroll with body overflow hidden.`},{id:`intermediate-7`,number:7,title:`폼 유효성 검사`,titleEn:`Form Validation`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`실시간 유효성 검사가 포함된 회원가입 폼을 만드세요. 이메일 형식, 비밀번호 강도, 비밀번호 확인 등을 검증하세요.`,descriptionEn:`Create a signup form with real-time validation. Validate email format, password strength, and password confirmation.`,hint:`정규표현식과 input 이벤트를 활용하세요.`,hintEn:`Use regular expressions and input events.`,solution:{html:`<form class="signup-form" id="signupForm">
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
});`},solutionExplanation:`정규표현식으로 이메일 형식을 검증하고, 비밀번호 강도를 4단계로 시각화합니다. 모든 조건 충족 시에만 제출 버튼이 활성화됩니다.`,solutionExplanationEn:`Validates email format with regex, visualizes password strength in 4 levels. Submit button activates only when all conditions are met.`},{id:`intermediate-8`,number:8,title:`Local Storage CRUD`,titleEn:`Local Storage CRUD`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`localStorage를 사용하여 메모를 생성, 읽기, 수정, 삭제할 수 있는 메모 앱을 만드세요. 페이지를 새로고침해도 데이터가 유지되어야 합니다.`,descriptionEn:`Create a memo app that can create, read, update, and delete memos using localStorage. Data should persist after page refresh.`,hint:`JSON.stringify()와 JSON.parse()로 배열 데이터를 저장하세요.`,hintEn:`Use JSON.stringify() and JSON.parse() to store array data.`,solution:{html:`<div class="memo-app">
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
}`},solutionExplanation:`localStorage에 JSON 형태로 메모 배열을 저장합니다. CRUD 작업 후 save() 함수로 저장과 렌더링을 동시에 처리합니다.`,solutionExplanationEn:`Stores memo array as JSON in localStorage. The save() function handles both storage and rendering after each CRUD operation.`},{id:`intermediate-9`,number:9,title:`이미지 슬라이더`,titleEn:`Image Slider`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`이전/다음 버튼과 인디케이터 점이 있는 이미지 슬라이더를 만드세요. 자동 재생 기능도 포함하세요.`,descriptionEn:`Create an image slider with previous/next buttons and indicator dots. Include auto-play functionality.`,hint:`transform: translateX()를 사용하여 슬라이드를 이동시키세요.`,hintEn:`Use transform: translateX() to move slides.`,solution:{html:`<div class="slider-container">
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
});`},solutionExplanation:`transform: translateX()로 슬라이드를 이동시키고, 동적으로 생성한 인디케이터 점과 setInterval로 자동 재생 기능을 구현했습니다.`,solutionExplanationEn:`Moves slides with transform: translateX(), dynamically created indicator dots, and implemented auto-play with setInterval.`},{id:`intermediate-10`,number:10,title:`검색 필터`,titleEn:`Search Filter`,category:`intermediate`,topic:`javascript`,difficulty:`intermediate`,description:`입력창에 텍스트를 입력하면 실시간으로 목록이 필터링되는 검색 기능을 만드세요. 카테고리 필터 버튼도 추가하세요.`,descriptionEn:`Create a search feature that filters a list in real-time as text is typed. Add category filter buttons too.`,hint:`filter()와 includes() 메서드를 활용하세요.`,hintEn:`Use filter() and includes() methods.`,solution:{html:`<div class="search-app">
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

render();`},solutionExplanation:`filter()로 검색어와 카테고리를 동시에 적용하고, includes()로 대소문자 구분 없는 검색을 구현합니다.`,solutionExplanationEn:`Applies both search text and category filters simultaneously with filter(), and implements case-insensitive search with includes().`}],n=[{id:`advanced-1`,number:1,title:`SPA 라우터`,titleEn:`SPA Router`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`Hash 기반 SPA(Single Page Application) 라우터를 직접 구현하세요. URL 변경 시 페이지 전환 없이 콘텐츠가 교체되어야 합니다.`,descriptionEn:`Implement a hash-based SPA (Single Page Application) router. Content should swap without page reload when the URL changes.`,hint:`hashchange 이벤트와 location.hash를 활용하세요.`,hintEn:`Use the hashchange event and location.hash.`,solution:{html:`<div class="spa-app">
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
window.addEventListener('load', router);`},solutionExplanation:`hashchange 이벤트로 URL 변경을 감지하고, routes 객체에서 해당 경로의 렌더 함수를 실행합니다. 404 처리와 활성 메뉴 하이라이트도 포함합니다.`,solutionExplanationEn:`Detects URL changes via hashchange event and executes the render function from the routes object. Includes 404 handling and active menu highlighting.`},{id:`advanced-2`,number:2,title:`상태 관리 패턴`,titleEn:`State Management Pattern`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`Observer 패턴을 사용하여 간단한 상태 관리 라이브러리를 구현하세요. 상태가 변경되면 구독된 컴포넌트들이 자동으로 업데이트되어야 합니다.`,descriptionEn:`Implement a simple state management library using the Observer pattern. Subscribed components should auto-update when state changes.`,hint:`subscribe, getState, setState 메서드를 가진 Store 객체를 만드세요.`,hintEn:`Create a Store object with subscribe, getState, and setState methods.`,solution:{html:`<div class="state-demo">
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
});`},solutionExplanation:`Observer 패턴의 createStore 함수를 구현하여 상태 변경 시 모든 구독자에게 알립니다. subscribe는 구독 해제 함수를 반환합니다.`,solutionExplanationEn:`Implemented a createStore function with Observer pattern that notifies all subscribers on state changes. subscribe returns an unsubscribe function.`},{id:`advanced-3`,number:3,title:`커스텀 훅 빌더`,titleEn:`Custom Hook Builder`,category:`advanced`,topic:`react`,difficulty:`advanced`,description:`Vanilla JavaScript로 React의 useState, useEffect와 유사한 훅 시스템을 구현하세요. 상태 관리와 부수 효과(side effect) 처리를 직접 만들어보세요.`,descriptionEn:`Implement a hook system similar to React useState and useEffect using vanilla JavaScript. Build state management and side effect handling from scratch.`,hint:`클로저와 배열 인덱스를 사용하여 훅 상태를 추적하세요.`,hintEn:`Use closures and array indices to track hook state.`,solution:{html:`<div class="hook-demo">
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
App();`},solutionExplanation:`클로저와 전역 hookIndex를 사용하여 useState와 useEffect를 구현했습니다. 상태 변경 시 hookIndex를 초기화하고 전체 컴포넌트를 다시 렌더링합니다.`,solutionExplanationEn:`Implemented useState and useEffect using closures and a global hookIndex. Resets hookIndex and re-renders the entire component on state change.`},{id:`advanced-4`,number:4,title:`무한 스크롤`,titleEn:`Infinite Scroll`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`Intersection Observer API를 사용하여 무한 스크롤을 구현하세요. 스크롤이 하단에 도달하면 새로운 데이터가 자동으로 로드되어야 합니다.`,descriptionEn:`Implement infinite scroll using the Intersection Observer API. New data should auto-load when scrolling reaches the bottom.`,hint:`IntersectionObserver와 sentinel 요소를 활용하세요.`,hintEn:`Use IntersectionObserver with a sentinel element.`,solution:{html:`<div class="infinite-scroll">
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
loadMore();`},solutionExplanation:`IntersectionObserver로 sentinel 요소의 가시성을 감지하여 자동으로 다음 데이터를 로드합니다. 모든 데이터를 불러온 후 observer를 disconnect합니다.`,solutionExplanationEn:`Detects sentinel element visibility with IntersectionObserver to auto-load next data. Disconnects observer after all data is loaded.`},{id:`advanced-5`,number:5,title:`드래그 앤 드롭`,titleEn:`Drag and Drop`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`HTML5 Drag and Drop API를 사용하여 칸반 보드 스타일의 드래그 앤 드롭 인터페이스를 만드세요. 카드를 열 사이에서 이동할 수 있어야 합니다.`,descriptionEn:`Create a Kanban-board style drag and drop interface using the HTML5 Drag and Drop API. Cards should be movable between columns.`,hint:`draggable 속성과 dragstart, dragover, drop 이벤트를 활용하세요.`,hintEn:`Use the draggable attribute and dragstart, dragover, drop events.`,solution:{html:`<div class="kanban">
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
}`},solutionExplanation:`HTML5 Drag and Drop API의 dragstart, dragover, drop 이벤트를 사용합니다. getDragAfterElement로 마우스 위치에 따른 정확한 삽입 지점을 계산합니다.`,solutionExplanationEn:`Uses HTML5 Drag and Drop API events: dragstart, dragover, drop. getDragAfterElement calculates the precise insertion point based on mouse position.`},{id:`advanced-6`,number:6,title:`Virtual DOM 개념`,titleEn:`Virtual DOM Concept`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`간단한 Virtual DOM 시스템을 구현하세요. 가상 DOM 트리를 생성하고, diff 알고리즘으로 변경사항만 실제 DOM에 적용하는 패치 함수를 만드세요.`,descriptionEn:`Implement a simple Virtual DOM system. Create a virtual DOM tree, and build a patch function that applies only changes to the real DOM using a diff algorithm.`,hint:`createElement, diff, patch 세 함수를 구현하세요.`,hintEn:`Implement three functions: createElement, diff, and patch.`,solution:{html:`<div class="vdom-demo">
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
});`},solutionExplanation:`h() 함수로 가상 노드를 생성하고, diff()로 변경점을 찾고, patch()로 최소한의 DOM 조작만 수행합니다. CREATE, REMOVE, REPLACE, UPDATE 네 가지 패치 타입을 지원합니다.`,solutionExplanationEn:`Creates virtual nodes with h(), finds changes with diff(), and performs minimal DOM operations with patch(). Supports four patch types: CREATE, REMOVE, REPLACE, UPDATE.`},{id:`advanced-7`,number:7,title:`웹 컴포넌트`,titleEn:`Web Components`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`Custom Elements API를 사용하여 재사용 가능한 웹 컴포넌트를 만드세요. Shadow DOM으로 스타일을 캡슐화하고, 속성(attributes)을 통해 설정할 수 있어야 합니다.`,descriptionEn:`Create reusable web components using the Custom Elements API. Encapsulate styles with Shadow DOM and make them configurable via attributes.`,hint:`HTMLElement를 상속받는 클래스를 만들고 customElements.define()으로 등록하세요.`,hintEn:`Create a class extending HTMLElement and register it with customElements.define().`,solution:{html:`<div class="wc-demo">
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
customElements.define('alert-box', AlertBox);`},solutionExplanation:`Custom Elements API로 <user-card>와 <alert-box> 두 개의 웹 컴포넌트를 정의했습니다. Shadow DOM으로 스타일을 캡슐화하고, <slot>으로 콘텐츠를 삽입합니다.`,solutionExplanationEn:`Defined two web components <user-card> and <alert-box> with Custom Elements API. Encapsulated styles with Shadow DOM and used <slot> for content projection.`},{id:`advanced-8`,number:8,title:`WebSocket 채팅 UI`,titleEn:`WebSocket Chat UI`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`WebSocket을 시뮬레이션한 실시간 채팅 UI를 만드세요. 메시지 전송, 수신, 타이핑 인디케이터, 온라인 사용자 목록을 포함하세요.`,descriptionEn:`Create a real-time chat UI simulating WebSocket. Include message sending, receiving, typing indicator, and online user list.`,hint:`setTimeout으로 서버 응답을 시뮬레이션하세요.`,hintEn:`Simulate server responses with setTimeout.`,solution:{html:`<div class="chat-app">
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
}, 500);`},solutionExplanation:`setTimeout으로 서버 응답을 시뮬레이션하고, 타이핑 인디케이터 애니메이션으로 실시간 채팅 경험을 구현합니다. CSS 애니메이션으로 메시지 등장 효과를 추가했습니다.`,solutionExplanationEn:`Simulates server responses with setTimeout and implements real-time chat experience with typing indicator animation. Added message entrance effects with CSS animations.`},{id:`advanced-9`,number:9,title:`Service Worker 캐싱`,titleEn:`Service Worker Caching`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`Service Worker의 캐싱 전략을 시뮬레이션하는 데모를 만드세요. Cache First, Network First, Stale While Revalidate 전략을 시각적으로 보여주세요.`,descriptionEn:`Create a demo simulating Service Worker caching strategies. Visually demonstrate Cache First, Network First, and Stale While Revalidate strategies.`,hint:`각 전략의 요청/응답 흐름을 시각적으로 표현하세요.`,hintEn:`Visually represent the request/response flow of each strategy.`,solution:{html:`<div class="sw-demo">
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

updateView();`},solutionExplanation:`3가지 캐싱 전략(Cache First, Network First, SWR)의 요청 흐름을 시각적 애니메이션으로 보여줍니다. setTimeout 체인으로 단계별 시뮬레이션을 구현했습니다.`,solutionExplanationEn:`Visually animates the request flow of 3 caching strategies (Cache First, Network First, SWR). Implements step-by-step simulation with setTimeout chains.`},{id:`advanced-10`,number:10,title:`성능 최적화`,titleEn:`Performance Optimization`,category:`advanced`,topic:`javascript`,difficulty:`advanced`,description:`debounce, throttle, lazy loading, 메모이제이션 등 웹 성능 최적화 기법을 구현하고 시각적으로 비교하세요.`,descriptionEn:`Implement and visually compare web performance optimization techniques: debounce, throttle, lazy loading, and memoization.`,hint:`requestAnimationFrame과 closure를 활용하세요.`,hintEn:`Use requestAnimationFrame and closures.`,solution:{html:`<div class="perf-demo">
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
});`},solutionExplanation:`debounce는 마지막 호출 후 대기시간이 지나면 실행하고, throttle은 일정 간격으로 최대 1회 실행합니다. memoize는 함수 결과를 캐싱하여 동일 입력의 재계산을 방지합니다.`,solutionExplanationEn:`Debounce executes after a wait period from the last call, throttle executes at most once per interval. Memoize caches function results to prevent recalculation for the same input.`}],r=[{id:`practical-1`,number:1,title:`포트폴리오 웹사이트`,titleEn:`Portfolio Website`,category:`practical`,topic:`html`,difficulty:`practical`,description:`히어로 섹션, 소개, 프로젝트 갤러리, 기술 스택, 연락처가 포함된 개인 포트폴리오 원페이지 웹사이트를 만드세요.`,descriptionEn:`Create a one-page personal portfolio website with hero section, about, project gallery, tech stack, and contact sections.`,hint:`CSS Grid/Flexbox와 smooth scrolling을 활용하세요.`,hintEn:`Use CSS Grid/Flexbox and smooth scrolling.`,solution:{html:`<nav class="port-nav">
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
}`},solutionExplanation:`원페이지 포트폴리오를 fixed nav, 히어로, 프로젝트 그리드, 스킬 바, 연락처 섹션으로 구성했습니다. scroll-behavior: smooth로 부드러운 내비게이션을 구현합니다.`,solutionExplanationEn:`Built a one-page portfolio with fixed nav, hero, project grid, skill bars, and contact sections. smooth scrolling for seamless navigation.`},{id:`practical-2`,number:2,title:`날씨 대시보드`,titleEn:`Weather Dashboard`,category:`practical`,topic:`javascript`,difficulty:`practical`,description:`도시를 검색하면 현재 날씨, 기온, 습도, 풍속 등을 카드 형태로 보여주는 날씨 대시보드를 만드세요. (시뮬레이션 데이터 사용)`,descriptionEn:`Create a weather dashboard that shows current weather, temperature, humidity, and wind speed in card format when searching for a city. (Use simulated data)`,hint:`가상 날씨 데이터를 객체로 미리 정의하세요.`,hintEn:`Pre-define simulated weather data as objects.`,solution:{html:`<div class="weather-app">
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

showWeather('서울');`},solutionExplanation:`시뮬레이션 날씨 데이터를 객체로 저장하고, 도시 검색 시 해당 데이터를 그라데이션 카드 UI로 렌더링합니다. 시간에 따라 낮/밤 테마가 변경됩니다.`,solutionExplanationEn:`Stores simulated weather data as objects, rendering gradient card UI on city search. Theme changes between day/night based on time.`},{id:`practical-3`,number:3,title:`필터 기능 할 일 앱`,titleEn:`To-Do App with Filters`,category:`practical`,topic:`javascript`,difficulty:`practical`,description:`전체/활성/완료 필터, 완료 토글, 삭제, 진행률 표시가 있는 할 일 관리 앱을 만드세요. localStorage로 데이터를 영구 저장하세요.`,descriptionEn:`Create a to-do management app with all/active/completed filters, completion toggle, delete, and progress bar. Persist data with localStorage.`,hint:`filter 메서드로 필터링하고 checkbox로 완료 상태를 토글하세요.`,hintEn:`Use the filter method for filtering and checkboxes for toggling completion.`,solution:{html:`<div class="todo-pro">
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

render();`},solutionExplanation:`필터링, 우선순위, 진행률 표시, localStorage 영구저장을 모두 포함한 완전한 할 일 앱입니다. 체크박스로 완료 상태를 토글합니다.`,solutionExplanationEn:`A complete to-do app with filtering, priority levels, progress display, and localStorage persistence. Checkboxes toggle completion state.`},{id:`practical-4`,number:4,title:`블로그 포스트 에디터`,titleEn:`Blog Post Editor`,category:`practical`,topic:`javascript`,difficulty:`practical`,description:`제목, 본문(마크다운 미리보기), 태그 추가 기능이 있는 블로그 포스트 에디터를 만드세요. 실시간 미리보기를 지원하세요.`,descriptionEn:`Create a blog post editor with title, body (markdown preview), and tag management. Support real-time preview.`,hint:`contentEditable 또는 textarea와 실시간 HTML 변환을 활용하세요.`,hintEn:`Use contentEditable or textarea with real-time HTML conversion.`,solution:{html:`<div class="editor-app">
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
}`},solutionExplanation:`간단한 마크다운 파서로 실시간 미리보기를 구현하고, 태그 관리와 localStorage 임시 저장 기능을 포함한 블로그 에디터입니다.`,solutionExplanationEn:`A blog editor with real-time preview via a simple markdown parser, tag management, and localStorage draft saving.`},{id:`practical-5`,number:5,title:`퀴즈 앱`,titleEn:`Quiz App`,category:`practical`,topic:`javascript`,difficulty:`practical`,description:`객관식 퀴즈 앱을 만드세요. 문제 번호, 진행률, 타이머, 정답 확인, 결과 화면을 포함하세요.`,descriptionEn:`Create a multiple-choice quiz app. Include question number, progress bar, timer, answer checking, and results screen.`,hint:`문제 배열을 만들고 인덱스로 현재 문제를 추적하세요.`,hintEn:`Create a questions array and track the current question by index.`,solution:{html:`<div class="quiz-app" id="quizApp">
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

showQuestion();`},solutionExplanation:`문제 배열을 인덱스로 순회하며, 타이머와 정답 확인 후 해설을 보여줍니다. 모든 문제 완료 후 점수와 등급이 포함된 결과 화면을 표시합니다.`,solutionExplanationEn:`Iterates through questions array by index, shows explanation after timer and answer check. Displays results with score and grade after all questions.`},{id:`practical-6`,number:6,title:`계산기 앱`,titleEn:`Calculator App`,category:`practical`,topic:`javascript`,difficulty:`practical`,description:`사칙연산, 소수점, 퍼센트, 부호 변환, 백스페이스 기능이 있는 계산기를 만드세요. 키보드 입력도 지원하세요.`,descriptionEn:`Create a calculator with basic operations, decimal, percent, sign toggle, backspace, and keyboard input support.`,hint:`eval() 대신 직접 계산 로직을 구현하세요.`,hintEn:`Implement calculation logic directly instead of using eval().`,solution:{html:`<div class="calc">
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
});`},solutionExplanation:`CSS Grid로 계산기 버튼 레이아웃을 만들고, 상태 변수(current, prev, operator)로 계산 로직을 관리합니다. 키보드 이벤트로 물리 키보드 입력도 지원합니다.`,solutionExplanationEn:`Created calculator button layout with CSS Grid, managed calculation logic with state variables (current, prev, operator). Supports physical keyboard input via keydown events.`},{id:`practical-7`,number:7,title:`이커머스 상품 페이지`,titleEn:`E-Commerce Product Page`,category:`practical`,topic:`html`,difficulty:`practical`,description:`상품 이미지, 가격, 옵션 선택, 수량 조절, 장바구니 추가 기능이 있는 이커머스 상품 상세 페이지를 만드세요.`,descriptionEn:`Create an e-commerce product detail page with product image, price, option selection, quantity control, and add-to-cart functionality.`,hint:`옵션 선택에 따라 가격이 변경되도록 구현하세요.`,hintEn:`Implement price changes based on option selection.`,solution:{html:`<div class="product-page">
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
});`},solutionExplanation:`옵션 선택과 수량에 따라 총 금액을 동적으로 계산하고, 썸네일 클릭으로 메인 이미지를 변경합니다. Toast 알림으로 사용자 피드백을 제공합니다.`,solutionExplanationEn:`Dynamically calculates total based on options and quantity, changes main image on thumbnail click. Provides user feedback with toast notifications.`},{id:`practical-8`,number:8,title:`API 대시보드`,titleEn:`API Dashboard`,category:`practical`,topic:`javascript`,difficulty:`practical`,description:`여러 API 엔드포인트의 상태를 모니터링하는 대시보드를 만드세요. 상태 표시, 응답 시간, 자동 새로고침 기능을 포함하세요.`,descriptionEn:`Create a dashboard monitoring multiple API endpoint statuses. Include status indicators, response times, and auto-refresh functionality.`,hint:`시뮬레이션 데이터를 사용하여 실시간 모니터링 UI를 구현하세요.`,hintEn:`Implement real-time monitoring UI using simulated data.`,solution:{html:`<div class="api-dash">
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

refresh();`},solutionExplanation:`시뮬레이션 데이터로 API 상태를 모니터링하는 대시보드입니다. 통계 카드, 상태 인디케이터, 응답 시간 표시, 자동 새로고침을 포함합니다.`,solutionExplanationEn:`Dashboard monitoring API status with simulated data. Includes stats cards, status indicators, response time display, and auto-refresh.`},{id:`practical-9`,number:9,title:`소셜 미디어 피드`,titleEn:`Social Media Feed`,category:`practical`,topic:`javascript`,difficulty:`practical`,description:`프로필 이미지, 게시물 텍스트, 좋아요/댓글 기능, 게시물 작성이 포함된 소셜 미디어 피드 UI를 만드세요.`,descriptionEn:`Create a social media feed UI with profile images, post text, like/comment functionality, and post creation.`,hint:`게시물 데이터를 배열로 관리하고 좋아요/댓글 상태를 토글하세요.`,hintEn:`Manage post data as an array and toggle like/comment states.`,solution:{html:`<div class="social-feed">
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

renderFeed();`},solutionExplanation:`게시물 배열을 기반으로 피드를 렌더링하고, 좋아요 토글/댓글 추가/새 게시물 작성 기능을 구현합니다. 이벤트 바인딩으로 각 게시물에 독립적인 상호작용을 제공합니다.`,solutionExplanationEn:`Renders feed from posts array with like toggle, comment add, and new post creation. Event binding provides independent interaction per post.`},{id:`practical-10`,number:10,title:`풀스택 미니 프로젝트`,titleEn:`Full-Stack Mini Project`,category:`practical`,topic:`backend`,difficulty:`practical`,description:`프론트엔드(UI) + 백엔드(시뮬레이션 API) + 데이터 저장(localStorage)을 결합한 회원 관리 시스템을 만드세요. CRUD 기능, 검색, 페이지네이션을 포함하세요.`,descriptionEn:`Create a member management system combining frontend (UI) + backend (simulated API) + data storage (localStorage). Include CRUD, search, and pagination.`,hint:`Promise를 사용하여 API 호출을 시뮬레이션하세요.`,hintEn:`Use Promises to simulate API calls.`,solution:{html:`<div class="fullstack-app">
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

<a href="mailto:aebon@dreamitbiz.com">이메일 보내기</a>`,codeLanguage:`html`,livePreview:!0}]},{id:`02-forms`,chapter:2,titleKey:`html02`,sections:[{title:`폼(Form) 기초`,titleEn:`Form Basics`,content:`HTML 폼은 사용자로부터 데이터를 수집하는 데 사용됩니다. <form> 태그로 폼을 감싸고, <input>, <textarea>, <select> 등의 요소로 입력 필드를 구성합니다.`,contentEn:`HTML forms are used to collect data from users. Wrap the form with the <form> tag and compose input fields with <input>, <textarea>, <select> elements.`,code:`<form action="/submit" method="POST">
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
</table>`,codeLanguage:`html`,livePreview:!0}]}],a=[{id:`01-selectors`,chapter:1,titleKey:`css01`,sections:[{title:`CSS란?`,titleEn:`What is CSS?`,content:`CSS(Cascading Style Sheets)는 HTML 문서의 시각적 표현을 정의하는 스타일시트 언어입니다. 색상, 폰트, 레이아웃, 애니메이션 등을 제어합니다. CSS는 세 가지 방법으로 적용할 수 있습니다: 인라인, 내부(style 태그), 외부(.css 파일).`,contentEn:`CSS (Cascading Style Sheets) is a stylesheet language that defines the visual presentation of HTML documents. It controls colors, fonts, layout, animations, and more. CSS can be applied in three ways: inline, internal (style tag), and external (.css file).`,code:`<style>
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
<a href="#">마우스를 올려보세요 (hover)</a>`,codeLanguage:`html`,livePreview:!0}]},{id:`02-box-model`,chapter:2,titleKey:`css02`,sections:[{title:`박스 모델`,titleEn:`Box Model`,content:`모든 HTML 요소는 박스 모델을 따릅니다: content(콘텐츠) → padding(안쪽 여백) → border(테두리) → margin(바깥 여백). box-sizing: border-box를 설정하면 width/height에 padding과 border가 포함됩니다.`,contentEn:`Every HTML element follows the box model: content → padding → border → margin. Setting box-sizing: border-box includes padding and border in width/height.`,code:`<style>
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
</div>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`box-sizing: border-box의 효과는?`,questionEn:`What does box-sizing: border-box do?`,options:[`margin을 width에 포함`,`padding과 border를 width에 포함`,`content만 width로 계산`,`border를 제거`],optionsEn:[`Include margin in width`,`Include padding and border in width`,`Calculate only content as width`,`Remove border`],correctIndex:1,explanation:`border-box는 padding과 border를 width/height 안에 포함시킵니다.`,explanationEn:`border-box includes padding and border within the width/height.`}}]},{id:`03-flexbox`,chapter:3,titleKey:`css03`,sections:[{title:`Flexbox 레이아웃`,titleEn:`Flexbox Layout`,content:`Flexbox는 1차원 레이아웃 모델로, 행(row) 또는 열(column) 방향으로 아이템을 유연하게 배치합니다. display: flex를 부모에 설정하면 자식이 flex 아이템이 됩니다.`,contentEn:`Flexbox is a one-dimensional layout model that flexibly arranges items in row or column direction. Setting display: flex on the parent makes children flex items.`,code:`<style>
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
</div>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`Flexbox에서 주축 방향 정렬 속성은?`,questionEn:`Which Flexbox property aligns items along the main axis?`,options:[`align-items`,`justify-content`,`flex-direction`,`align-self`],optionsEn:[`align-items`,`justify-content`,`flex-direction`,`align-self`],correctIndex:1,explanation:`justify-content는 주축(기본: 가로) 방향 정렬, align-items는 교차축(기본: 세로) 정렬입니다.`,explanationEn:`justify-content aligns along the main axis (default: horizontal), align-items along the cross axis (default: vertical).`}}]}],o=[{id:`01-basics`,chapter:1,titleKey:`js01`,sections:[{title:`JavaScript 소개`,titleEn:`Introduction to JavaScript`,content:`JavaScript는 웹 페이지에 동적인 기능을 추가하는 프로그래밍 언어입니다. 변수 선언은 let(변경 가능), const(상수), var(구식)를 사용합니다. ES6+에서는 let과 const 사용을 권장합니다.`,contentEn:`JavaScript is a programming language that adds dynamic functionality to web pages. Variable declarations use let (mutable), const (constant), and var (legacy). ES6+ recommends using let and const.`,code:`<script>
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
<\/script>`,codeLanguage:`html`,livePreview:!0,quiz:{question:`async 함수 안에서 Promise를 기다리는 키워드는?`,questionEn:`What keyword waits for a Promise inside an async function?`,options:[`wait`,`await`,`then`,`resolve`],optionsEn:[`wait`,`await`,`then`,`resolve`],correctIndex:1,explanation:`await 키워드는 async 함수 안에서만 사용할 수 있으며, Promise가 해결될 때까지 실행을 일시 중지합니다.`,explanationEn:`The await keyword can only be used inside async functions and pauses execution until the Promise resolves.`}}]}],s=[{id:`01-jsx`,chapter:1,titleKey:`react01`,sections:[{title:`React와 JSX`,titleEn:`React and JSX`,content:`React는 UI를 컴포넌트 단위로 구성하는 JavaScript 라이브러리입니다. JSX는 JavaScript 안에서 HTML과 유사한 문법을 사용할 수 있게 해주는 확장 문법입니다. 중괄호 {}를 사용하여 JavaScript 표현식을 삽입합니다.`,contentEn:`React is a JavaScript library for building UIs with components. JSX is a syntax extension that allows HTML-like syntax in JavaScript. Use curly braces {} to embed JavaScript expressions.`,code:`// React 컴포넌트 예제
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
}`,codeLanguage:`javascript`}]},{id:`02-state`,chapter:2,titleKey:`react02`,sections:[{title:`useState Hook`,titleEn:`useState Hook`,content:`useState는 React 함수 컴포넌트에서 상태(state)를 관리하는 Hook입니다. const [state, setState] = useState(초기값) 형태로 사용하며, setState로 상태를 업데이트하면 컴포넌트가 다시 렌더링됩니다.`,contentEn:`useState is a Hook for managing state in React function components. Use const [state, setState] = useState(initialValue) format, and the component re-renders when state is updated with setState.`,code:`import { useState } from 'react';

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
}`,codeLanguage:`javascript`,quiz:{question:`useState의 반환값은?`,questionEn:`What does useState return?`,options:[`상태값만`,`업데이트 함수만`,`[상태값, 업데이트 함수] 배열`,`{상태값, 업데이트 함수} 객체`],optionsEn:[`Only state value`,`Only update function`,`[state, updater] array`,`{state, updater} object`],correctIndex:2,explanation:`useState는 [현재 상태값, 상태 업데이트 함수]를 담은 배열을 반환합니다.`,explanationEn:`useState returns an array containing [current state, state update function].`}}]},{id:`03-hooks`,chapter:3,titleKey:`react03`,sections:[{title:`useEffect Hook`,titleEn:`useEffect Hook`,content:`useEffect는 컴포넌트의 생명주기에 따라 부수 효과(side effect)를 수행합니다. API 호출, 이벤트 리스너 등록, 타이머 설정 등에 사용합니다. 의존성 배열로 실행 시점을 제어합니다.`,contentEn:`useEffect performs side effects based on component lifecycle. Used for API calls, event listeners, timers, etc. The dependency array controls when it runs.`,code:`import { useState, useEffect } from 'react';

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
}`,codeLanguage:`javascript`,quiz:{question:`useEffect의 빈 의존성 배열 []은 언제 실행되나요?`,questionEn:`When does useEffect with empty dependency array [] run?`,options:[`매 렌더링마다`,`컴포넌트 마운트 시 1회만`,`상태 변경 시마다`,`언마운트 시에만`],optionsEn:[`Every render`,`Only once on mount`,`Every state change`,`Only on unmount`],correctIndex:1,explanation:`빈 배열 []을 전달하면 컴포넌트가 처음 마운트될 때 한 번만 실행됩니다.`,explanationEn:`Passing an empty array [] makes it run only once when the component first mounts.`}}]}],c=[{id:`01-types`,chapter:1,titleKey:`ts01`,sections:[{title:`TypeScript 기초 타입`,titleEn:`TypeScript Basic Types`,content:`TypeScript는 JavaScript에 정적 타입을 추가한 언어입니다. 변수, 함수 매개변수, 반환값에 타입을 명시하여 코드의 안정성을 높입니다. 기본 타입: string, number, boolean, array, object, any, void, null, undefined.`,contentEn:`TypeScript adds static types to JavaScript. Specify types on variables, function parameters, and return values for better code reliability. Basic types: string, number, boolean, array, object, any, void, null, undefined.`,code:`// 기본 타입
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
let userStatus: Status = "active";`,codeLanguage:`javascript`,quiz:{question:`TypeScript에서 선택적 속성을 표시하는 기호는?`,questionEn:`What symbol marks optional properties in TypeScript?`,options:[`!`,`?`,`*`,`&`],optionsEn:[`!`,`?`,`*`,`&`],correctIndex:1,explanation:`속성명 뒤에 ?를 붙이면 해당 속성이 선택적(있어도 되고 없어도 됨)임을 나타냅니다.`,explanationEn:`Adding ? after a property name indicates it is optional (may or may not exist).`}}]},{id:`02-generics`,chapter:2,titleKey:`ts02`,sections:[{title:`제네릭(Generics)`,titleEn:`Generics`,content:`제네릭은 타입을 매개변수처럼 사용하여 재사용 가능한 코드를 작성합니다. 함수, 인터페이스, 클래스에 적용할 수 있으며, 타입 안전성을 유지하면서 유연한 코드를 만들 수 있습니다.`,contentEn:`Generics use types as parameters to write reusable code. They can be applied to functions, interfaces, and classes, creating flexible code while maintaining type safety.`,code:`// 제네릭 함수
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
getLength([1, 2, 3]);  // 3`,codeLanguage:`javascript`}]}],l=[{id:`01-basics`,chapter:1,titleKey:`git01`,sections:[{title:`Git 기초`,titleEn:`Git Basics`,content:`Git은 분산 버전 관리 시스템으로, 코드의 변경 이력을 추적하고 협업을 돕습니다. git init으로 저장소를 생성하고, add → commit → push 흐름으로 변경사항을 관리합니다.`,contentEn:`Git is a distributed version control system that tracks code changes and facilitates collaboration. Create a repository with git init, and manage changes with the add → commit → push workflow.`,code:`# Git 기본 명령어
git init                          # 저장소 초기화
git status                        # 상태 확인
git add index.html                # 파일 스테이징
git add .                         # 모든 변경 파일 스테이징
git commit -m "첫 번째 커밋"       # 커밋
git log --oneline                 # 커밋 로그

# 원격 저장소
git remote add origin https://github.com/user/repo.git
git push -u origin main           # 푸시
git pull origin main              # 풀

# 브랜치
git branch feature/login          # 브랜치 생성
git checkout feature/login        # 브랜치 전환
git checkout -b feature/signup    # 생성 + 전환`,codeLanguage:`javascript`}]},{id:`02-github`,chapter:2,titleKey:`git02`,sections:[{title:`GitHub & GitHub Pages`,titleEn:`GitHub & GitHub Pages`,content:`GitHub는 Git 저장소를 호스팅하는 플랫폼입니다. Pull Request로 코드 리뷰를 하고, GitHub Pages로 정적 웹사이트를 무료 배포할 수 있습니다. GitHub Actions로 CI/CD 자동화도 가능합니다.`,contentEn:`GitHub is a platform for hosting Git repositories. Review code with Pull Requests, deploy static websites for free with GitHub Pages, and automate CI/CD with GitHub Actions.`,code:`# GitHub Pages 배포 (gh-pages 패키지)
npm install -D gh-pages

# package.json에 추가
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# 배포 실행
npm run deploy

# CNAME 파일 (커스텀 도메인)
echo "web.dreamitbiz.com" > public/CNAME

# GitHub Actions 예시 (.github/workflows/deploy.yml)
# name: Deploy
# on:
#   push:
#     branches: [main]
# jobs:
#   deploy:
#     runs-on: ubuntu-latest
#     steps:
#       - uses: actions/checkout@v4
#       - run: npm ci && npm run build
#       - uses: peaceiris/actions-gh-pages@v3`,codeLanguage:`javascript`}]}],u=[{id:`01-nodejs`,chapter:1,titleKey:`backend01`,sections:[{title:`Node.js & Express 기초`,titleEn:`Node.js & Express Basics`,content:`Node.js는 브라우저 밖에서 JavaScript를 실행하는 런타임입니다. Express는 Node.js의 가장 인기 있는 웹 프레임워크로, REST API를 쉽게 구축할 수 있습니다.`,contentEn:`Node.js is a runtime that executes JavaScript outside the browser. Express is the most popular Node.js web framework for easily building REST APIs.`,code:`// Express 서버 예제
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

// PUT - 수정
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.json({ id: Number(id), name });
});

// DELETE - 삭제
app.delete('/api/users/:id', (req, res) => {
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('서버 실행: http://localhost:3000');
});`,codeLanguage:`javascript`}]},{id:`02-database`,chapter:2,titleKey:`backend02`,sections:[{title:`데이터베이스 기초 (Supabase)`,titleEn:`Database Basics (Supabase)`,content:`Supabase는 오픈소스 Firebase 대안으로, PostgreSQL 데이터베이스, 인증, 스토리지, Edge Functions를 제공합니다. SQL로 테이블을 정의하고 JavaScript SDK로 쉽게 CRUD 작업을 수행합니다.`,contentEn:`Supabase is an open-source Firebase alternative offering PostgreSQL database, auth, storage, and Edge Functions. Define tables with SQL and perform CRUD operations easily with the JavaScript SDK.`,code:`// Supabase 클라이언트 설정
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

// 데이터 수정 (UPDATE)
await supabase
  .from('users')
  .update({ name: '김길동' })
  .eq('id', 1);

// 데이터 삭제 (DELETE)
await supabase
  .from('users')
  .delete()
  .eq('id', 1);`,codeLanguage:`javascript`}]}],d=[{id:`01-vite`,chapter:1,titleKey:`devops01`,sections:[{title:`Vite 빌드 도구`,titleEn:`Vite Build Tool`,content:`Vite는 차세대 프론트엔드 빌드 도구로, 빠른 개발 서버와 최적화된 프로덕션 빌드를 제공합니다. HMR(Hot Module Replacement)으로 코드 변경 시 즉시 반영됩니다.`,contentEn:`Vite is a next-generation frontend build tool offering a fast dev server and optimized production builds. HMR (Hot Module Replacement) instantly reflects code changes.`,code:`# Vite 프로젝트 생성
npm create vite@latest my-app -- --template react-ts

# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# vite.config.ts 예시
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 5173,
    host: true
  }
});`,codeLanguage:`javascript`}]},{id:`02-cicd`,chapter:2,titleKey:`devops02`,sections:[{title:`CI/CD & 배포`,titleEn:`CI/CD & Deployment`,content:`CI/CD(Continuous Integration/Continuous Deployment)는 코드 변경 시 자동으로 빌드, 테스트, 배포하는 프로세스입니다. GitHub Actions, Vercel, Netlify, GitHub Pages 등 다양한 배포 옵션이 있습니다.`,contentEn:`CI/CD (Continuous Integration/Continuous Deployment) automatically builds, tests, and deploys on code changes. Various deployment options include GitHub Actions, Vercel, Netlify, and GitHub Pages.`,code:`# .github/workflows/deploy.yml
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
          publish_dir: ./dist`,codeLanguage:`javascript`}]}],f=[...e,...t,...n,...r],p={beginner:e,intermediate:t,advanced:n,practical:r};function m(e){return f.find(t=>t.id===e)}function h(e){return p[e]||[]}var g={html:{chapters:i,titleKey:`html`,color:`#E44D26`,icon:`html`},css:{chapters:a,titleKey:`css`,color:`#264DE4`,icon:`css`},javascript:{chapters:o,titleKey:`javascript`,color:`#F7DF1E`,icon:`js`},react:{chapters:s,titleKey:`react`,color:`#61DAFB`,icon:`react`},typescript:{chapters:c,titleKey:`typescript`,color:`#3178C6`,icon:`ts`},git:{chapters:l,titleKey:`git`,color:`#F05032`,icon:`git`},backend:{chapters:u,titleKey:`backend`,color:`#68A063`,icon:`backend`},devops:{chapters:d,titleKey:`devops`,color:`#2496ED`,icon:`devops`}},_=[`html`,`css`,`javascript`,`react`,`typescript`,`git`,`backend`,`devops`];export{g as a,p as i,m as n,_ as o,h as r,f as t};