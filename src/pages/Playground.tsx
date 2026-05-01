import { useLanguage } from '../contexts/LanguageContext';
import WebCodeEditor from '../components/WebCodeEditor';

const DEFAULT_HTML = `<h1>Hello, Web!</h1>
<p>여기에 HTML을 작성하세요.</p>
<button id="myBtn">클릭!</button>`;

const DEFAULT_CSS = `body { font-family: sans-serif; padding: 20px; }
h1 { color: #0046C8; }
button { padding: 8px 16px; background: #0046C8; color: white; border: none; border-radius: 6px; cursor: pointer; }
button:hover { background: #003399; }`;

const DEFAULT_JS = `document.getElementById('myBtn').addEventListener('click', function() {
  alert('안녕하세요! 버튼이 클릭되었습니다.');
});`;

export default function Playground() {
  const { t } = useLanguage();

  return (
    <div className="playground-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('playground')}</h1>
          <p>{t('playgroundDesc')}</p>
        </div>
      </section>
      <div className="container">
        <div className="playground-content">
          <WebCodeEditor
            initialHtml={DEFAULT_HTML}
            initialCss={DEFAULT_CSS}
            initialJs={DEFAULT_JS}
            previewHeight={400}
          />
        </div>
      </div>
    </div>
  );
}
