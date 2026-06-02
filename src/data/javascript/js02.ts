import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-dom',
  chapter: 2,
  titleKey: 'js02',
  sections: [
    {
      title: 'DOM 조작',
      titleEn: 'DOM Manipulation',
      content: 'DOM(Document Object Model)은 HTML 문서를 트리 구조의 객체로 표현합니다. JavaScript로 DOM 요소를 선택하고, 속성을 변경하고, 새 요소를 추가/삭제할 수 있습니다.',
      contentEn: 'The DOM (Document Object Model) represents HTML documents as a tree of objects. JavaScript can select DOM elements, modify attributes, and add/remove elements.',
      code: `<div id="app">
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
</script>`,
      codeLanguage: 'html',
      livePreview: true
    },
    {
      title: '실습 예제: 할 일 목록',
      titleEn: 'Practice: To-Do List',
      content: 'DOM 생성(createElement)·이벤트·삭제(remove)를 종합해 동작하는 할 일 목록을 만들어 봅니다. 입력 후 추가 버튼을 누르고, 각 항목의 삭제 버튼도 눌러 보세요.',
      contentEn: 'Combine DOM creation (createElement), events, and removal (remove) to build a working to-do list. Add items and try the delete button on each item.',
      code: `<div style="font-family:sans-serif;max-width:320px">
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
</script>`,
      codeLanguage: 'html',
      livePreview: true
    }
  ]
};

export default chapter;
