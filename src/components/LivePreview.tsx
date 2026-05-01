import { useEffect, useRef } from 'react';

interface LivePreviewProps {
  html?: string;
  css?: string;
  js?: string;
  height?: number;
}

export default function LivePreview({ html = '', css = '', js = '', height = 300 }: LivePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = `<!DOCTYPE html>
<html>
<head>
<style>
body { font-family: 'Noto Sans KR', sans-serif; padding: 16px; margin: 0; }
${css}
</style>
</head>
<body>
${html}
<script>${js}<\/script>
</body>
</html>`;

    const blob = new Blob([doc], { type: 'text/html' });
    iframe.src = URL.createObjectURL(blob);

    return () => {
      if (iframe.src.startsWith('blob:')) {
        URL.revokeObjectURL(iframe.src);
      }
    };
  }, [html, css, js]);

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
        style={{ width: '100%', height, border: 'none', background: '#fff' }}
      />
    </div>
  );
}
