import{n as e}from"./chunk-CaILmz35.js";import{_ as t,d as n}from"./index-BG4Cxbuu.js";var r=e(t(),1),i=n();function a({html:e=``,css:t=``,js:n=``,height:a=300}){let o=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let r=o.current;if(!r)return;let i=`<!DOCTYPE html>
<html>
<head>
<style>
body { font-family: 'Noto Sans KR', sans-serif; padding: 16px; margin: 0; }
${t}
</style>
</head>
<body>
${e}
<script>${n}<\/script>
</body>
</html>`,a=new Blob([i],{type:`text/html`});return r.src=URL.createObjectURL(a),()=>{r.src.startsWith(`blob:`)&&URL.revokeObjectURL(r.src)}},[e,t,n]),(0,i.jsxs)(`div`,{className:`live-preview`,children:[(0,i.jsxs)(`div`,{className:`live-preview-header`,children:[(0,i.jsx)(`span`,{className:`live-preview-dot red`}),(0,i.jsx)(`span`,{className:`live-preview-dot yellow`}),(0,i.jsx)(`span`,{className:`live-preview-dot green`}),(0,i.jsx)(`span`,{className:`live-preview-label`,children:`Preview`})]}),(0,i.jsx)(`iframe`,{ref:o,title:`Live Preview`,sandbox:`allow-scripts`,style:{width:`100%`,height:a,border:`none`,background:`#fff`}})]})}export{a as t};