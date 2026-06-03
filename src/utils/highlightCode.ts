// 코드 표시용 경량 주석 하이라이터.
// 전체 구문 강조 대신, "주석"만 녹색으로 감싸 의미를 알 수 있게 한다.
// 보안: 먼저 HTML을 이스케이프한 뒤 우리가 만든 <span>만 주입한다.

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const HASH_LANGS = new Set(['python', 'bash', 'shell', 'sh', 'yaml', 'yml', 'dockerfile', 'ruby', 'toml', 'ini', 'powershell', 'ps1']);

/**
 * 주석을 <span class="code-comment">로 감싼 HTML 문자열을 반환한다.
 * dangerouslySetInnerHTML 로 <pre> 안에 넣어 사용한다.
 */
export function highlightComments(code: string, language?: string): string {
  let html = escapeHtml(code);
  const wrap = (m: string) => `<span class="code-comment">${m}</span>`;
  const lang = (language || '').toLowerCase();

  if (HASH_LANGS.has(lang)) {
    // 줄 시작 또는 공백 뒤의 # 부터 줄 끝까지 (토큰 중간의 # 오탐 방지)
    html = html.replace(/(^|\s)(#[^\n]*)/g, (_full, pre, c) => pre + wrap(c));
  } else if (lang === 'html') {
    // <!-- --> 주석, <style> 내 /* */, <script> 내 // 모두 처리 (한 번에 교차 매칭)
    html = html.replace(
      /(&lt;!--[\s\S]*?--&gt;)|(\/\*[\s\S]*?\*\/)|((?<!:)\/\/[^\n]*)/g,
      m => wrap(m)
    );
  } else if (lang === 'css') {
    html = html.replace(/\/\*[\s\S]*?\*\//g, wrap);
  } else {
    // javascript / jsx / typescript / tsx 등: /* */ 와 // (단, http:// 같은 :// 는 제외)
    html = html.replace(
      /(\/\*[\s\S]*?\*\/)|((?<!:)\/\/[^\n]*)/g,
      m => wrap(m)
    );
  }

  return html;
}
