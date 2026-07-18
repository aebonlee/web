import{n as e}from"./chunk-CaILmz35.js";import{_ as t,d as n}from"./index-DJyNO7U3.js";var r=e(t(),1),i=n();function a({html:e=``,css:t=``,js:n=``,height:a=300}){let o=(0,r.useRef)(null),[s,c]=(0,r.useState)(a);return(0,r.useEffect)(()=>{let r=o.current;if(!r)return;c(a);let i=`<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<style>
html, body { margin: 0; }
body { font-family: 'Noto Sans KR', sans-serif; padding: 16px; }
${t}
</style>
</head>
<body>
${e}
<script>${n}<\/script>

<script>
(function () {
  function post() {
    var h = Math.max(
      document.body ? document.body.scrollHeight : 0,
      document.documentElement ? document.documentElement.scrollHeight : 0
    );
    parent.postMessage({ __livePreviewHeight: h }, '*');
  }
  window.addEventListener('load', post);
  window.addEventListener('resize', post);
  if (window.ResizeObserver) { try { new ResizeObserver(post).observe(document.documentElement); } catch (e) {} }
  setTimeout(post, 50);
  setTimeout(post, 300);
})();
<\/script>
</body>
</html>`,s=new Blob([i],{type:`text/html;charset=utf-8`});r.src=URL.createObjectURL(s);let l=e=>{if(e.source!==r.contentWindow)return;let t=e.data;t&&typeof t.__livePreviewHeight==`number`&&t.__livePreviewHeight>0&&c(Math.max(a,Math.ceil(t.__livePreviewHeight)+4))};return window.addEventListener(`message`,l),()=>{window.removeEventListener(`message`,l),r.src.startsWith(`blob:`)&&URL.revokeObjectURL(r.src)}},[e,t,n,a]),(0,i.jsxs)(`div`,{className:`live-preview`,children:[(0,i.jsxs)(`div`,{className:`live-preview-header`,children:[(0,i.jsx)(`span`,{className:`live-preview-dot red`}),(0,i.jsx)(`span`,{className:`live-preview-dot yellow`}),(0,i.jsx)(`span`,{className:`live-preview-dot green`}),(0,i.jsx)(`span`,{className:`live-preview-label`,children:`Preview`})]}),(0,i.jsx)(`iframe`,{ref:o,title:`Live Preview`,sandbox:`allow-scripts`,scrolling:`no`,style:{width:`100%`,height:s,border:`none`,background:`#fff`,display:`block`}})]})}export{a as t};