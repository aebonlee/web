import { useState } from 'react';
import { useCodeCopy } from '../hooks/useCodeCopy';
import { useLanguage } from '../contexts/LanguageContext';

interface CodeViewerProps {
  code: string;
  language?: string;
  showCopy?: boolean;
}

export default function CodeViewer({ code, language = 'html', showCopy = true }: CodeViewerProps) {
  const { copiedId, copyCode } = useCodeCopy();
  const { t } = useLanguage();
  const [copyId] = useState(() => `cv-${Math.random().toString(36).slice(2, 8)}`);

  return (
    <div className="code-viewer">
      <div className="code-block">
        <div className="code-header">
          <span className="code-filename">{language.toUpperCase()}</span>
          {showCopy && (
            <button
              className={`code-copy-btn ${copiedId === copyId ? 'copied' : ''}`}
              onClick={() => copyCode(code, copyId)}
            >
              {copiedId === copyId ? t('copied') : t('copy')}
            </button>
          )}
        </div>
        <div className="code-content">
          <pre>{code}</pre>
        </div>
      </div>
    </div>
  );
}
