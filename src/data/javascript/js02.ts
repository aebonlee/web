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
    }
  ]
};

export default chapter;
