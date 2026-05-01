import { useState, useCallback } from 'react';
import LivePreview from './LivePreview';

interface WebCodeEditorProps {
  initialHtml?: string;
  initialCss?: string;
  initialJs?: string;
  previewHeight?: number;
}

type TabKey = 'html' | 'css' | 'js';

export default function WebCodeEditor({
  initialHtml = '',
  initialCss = '',
  initialJs = '',
  previewHeight = 300
}: WebCodeEditorProps) {
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);
  const [activeTab, setActiveTab] = useState<TabKey>('html');

  const tabs: { key: TabKey; label: string; value: string; setter: (v: string) => void }[] = [
    { key: 'html', label: 'HTML', value: html, setter: setHtml },
    { key: 'css', label: 'CSS', value: css, setter: setCss },
    { key: 'js', label: 'JS', value: js, setter: setJs }
  ];

  const activeConfig = tabs.find(t => t.key === activeTab)!;

  const handleReset = useCallback(() => {
    setHtml(initialHtml);
    setCss(initialCss);
    setJs(initialJs);
  }, [initialHtml, initialCss, initialJs]);

  return (
    <div className="web-code-editor">
      <div className="editor-section">
        <div className="editor-tabs">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`editor-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
              {tab.value.trim() && <span className="editor-tab-dot" />}
            </button>
          ))}
          <button className="editor-reset-btn" onClick={handleReset} title="초기화">
            ↺
          </button>
        </div>
        <textarea
          className="editor-textarea"
          value={activeConfig.value}
          onChange={e => activeConfig.setter(e.target.value)}
          spellCheck={false}
          placeholder={`${activeConfig.label} 코드를 입력하세요...`}
        />
      </div>
      <LivePreview html={html} css={css} js={js} height={previewHeight} />
    </div>
  );
}
