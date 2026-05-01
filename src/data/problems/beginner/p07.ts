import type { WebProblem } from '../../types';
export const p7: WebProblem = {
  id: 'beginner-p07', number: 7, title: '할 일 목록', titleEn: 'To-Do List',
  category: 'beginner', topic: 'javascript', difficulty: 'beginner',
  description: '입력창에 텍스트를 입력하고 추가 버튼을 누르면 할 일 목록에 항목이 추가되는 프로그램을 만드세요. 각 항목에 삭제 버튼도 포함하세요.',
  descriptionEn: 'Create a program where typing text and clicking Add adds items to a to-do list. Include a delete button for each item.',
  hint: 'createElement, appendChild, remove() 메서드를 활용하세요.',
  hintEn: 'Use createElement, appendChild, and remove() methods.',
  solution: {
    html: `<div class="todo-app">\n  <h2>할 일 목록</h2>\n  <div class="input-group">\n    <input type="text" id="todoInput" placeholder="할 일을 입력하세요...">\n    <button id="addBtn">추가</button>\n  </div>\n  <ul id="todoList"></ul>\n</div>`,
    css: `.todo-app {\n  max-width: 400px;\n  margin: 20px auto;\n  font-family: sans-serif;\n}\n.todo-app h2 { color: #0046C8; }\n.input-group {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.input-group input {\n  flex: 1;\n  padding: 10px;\n  border: 2px solid #ddd;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.input-group input:focus {\n  outline: none;\n  border-color: #0046C8;\n}\n.input-group button {\n  padding: 10px 20px;\n  background: #0046C8;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}\n#todoList {\n  list-style: none;\n  padding: 0;\n}\n#todoList li {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  margin-bottom: 8px;\n  background: #f5f5f5;\n  border-radius: 6px;\n}\n#todoList li .delete-btn {\n  background: #e74c3c;\n  color: white;\n  border: none;\n  padding: 4px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n}`,
    js: `document.getElementById('addBtn').addEventListener('click', addTodo);\ndocument.getElementById('todoInput').addEventListener('keypress', function(e) {\n  if (e.key === 'Enter') addTodo();\n});\n\nfunction addTodo() {\n  const input = document.getElementById('todoInput');\n  const text = input.value.trim();\n  if (!text) return;\n\n  const li = document.createElement('li');\n  li.innerHTML = '<span>' + text + '</span><button class=\"delete-btn\">삭제</button>';\n  li.querySelector('.delete-btn').addEventListener('click', function() {\n    li.remove();\n  });\n\n  document.getElementById('todoList').appendChild(li);\n  input.value = '';\n  input.focus();\n}`
  },
  solutionExplanation: 'DOM 조작 메서드(createElement, appendChild, remove)를 사용하여 동적으로 목록 항목을 추가/삭제합니다. Enter 키 입력도 지원합니다.',
  solutionExplanationEn: 'Uses DOM manipulation methods (createElement, appendChild, remove) to dynamically add/delete list items. Also supports Enter key input.'
};
