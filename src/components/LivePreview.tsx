import { useEffect, useRef, useState } from 'react';

interface LivePreviewProps {
  html?: string;
  css?: string;
  js?: string;
  height?: number;
}

export default function LivePreview({ html = '', css = '', js = '', height = 300 }: LivePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // height를 최소 높이로 쓰고, 콘텐츠 높이에 맞춰 자동으로 늘림 → 내부 스크롤 없이 전체 표시
  const [autoHeight, setAutoHeight] = useState(height);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    setAutoHeight(height); // 입력이 바뀌면 최소 높이부터 다시 측정

    // iframe 내부에서 콘텐츠 높이를 부모로 전달(postMessage) — sandbox(allow-scripts) 유지
    const resizeScript = `
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
<\/script>`;

    const doc = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<style>
html, body { margin: 0; }
body { font-family: 'Noto Sans KR', sans-serif; padding: 16px; }
${css}
</style>
</head>
<body>
${html}
<script>${js}<\/script>
${resizeScript}
</body>
</html>`;

    const blob = new Blob([doc], { type: 'text/html;charset=utf-8' });
    iframe.src = URL.createObjectURL(blob);

    const onMessage = (e: MessageEvent) => {
      if (e.source !== iframe.contentWindow) return;
      const data = e.data as { __livePreviewHeight?: number };
      if (data && typeof data.__livePreviewHeight === 'number' && data.__livePreviewHeight > 0) {
        // 스크롤바가 생기지 않도록 약간의 여유(buffer)를 더하고 최소 높이를 보장
        setAutoHeight(Math.max(height, Math.ceil(data.__livePreviewHeight) + 4));
      }
    };
    window.addEventListener('message', onMessage);

    return () => {
      window.removeEventListener('message', onMessage);
      if (iframe.src.startsWith('blob:')) {
        URL.revokeObjectURL(iframe.src);
      }
    };
  }, [html, css, js, height]);

  return (
    <div className="live-preview">
      <div className="live-preview-header">
        <span className="live-preview-dot red" />
        <span className="live-preview-dot yellow" />
        <span className="live-preview-dot green" />
        <span className="live-preview-label">Preview</span>
      </div>
      <iframe
        ref={iframeRef}
        title="Live Preview"
        sandbox="allow-scripts"
        scrolling="no"
        style={{ width: '100%', height: autoHeight, border: 'none', background: '#fff', display: 'block' }}
      />
    </div>
  );
}
