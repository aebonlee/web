import{l as e,u as t}from"./index-D6boZUkF.js";import{t as n}from"./WebCodeEditor-DnblnOFJ.js";var r=t(),i=`<h1>Hello, Web!</h1>
<p>여기에 HTML을 작성하세요.</p>
<button id="myBtn">클릭!</button>`,a=`body { font-family: sans-serif; padding: 20px; }
h1 { color: #0046C8; }
button { padding: 8px 16px; background: #0046C8; color: white; border: none; border-radius: 6px; cursor: pointer; }
button:hover { background: #003399; }`,o=`document.getElementById('myBtn').addEventListener('click', function() {
  alert('안녕하세요! 버튼이 클릭되었습니다.');
});`;function s(){let{t}=e();return(0,r.jsxs)(`div`,{className:`playground-page`,children:[(0,r.jsx)(`section`,{className:`page-header`,children:(0,r.jsxs)(`div`,{className:`container`,children:[(0,r.jsx)(`h1`,{children:t(`playground`)}),(0,r.jsx)(`p`,{children:t(`playgroundDesc`)})]})}),(0,r.jsx)(`div`,{className:`container`,children:(0,r.jsx)(`div`,{className:`playground-content`,children:(0,r.jsx)(n,{initialHtml:i,initialCss:a,initialJs:o,previewHeight:400})})})]})}export{s as default};