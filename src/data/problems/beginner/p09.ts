import type { WebProblem } from '../../types';
export const p9: WebProblem = {
  id: 'beginner-9', number: 9, title: '타이포그래피 스타일', titleEn: 'Typography Styles',
  category: 'beginner', topic: 'css', difficulty: 'beginner',
  description: 'CSS를 사용하여 다양한 타이포그래피 스타일을 적용한 텍스트 페이지를 만드세요. 제목, 본문, 인용문, 강조 등을 포함하세요.',
  descriptionEn: 'Create a text page with various typography styles using CSS. Include headings, body text, blockquotes, and emphasis.',
  hint: 'font-size, font-weight, line-height, letter-spacing 속성을 활용하세요.',
  hintEn: 'Use font-size, font-weight, line-height, and letter-spacing properties.',
  solution: {
    html: `<article class="typography">\n  <h1>웹 타이포그래피의 기초</h1>\n  <p class="subtitle">아름다운 텍스트 디자인의 시작</p>\n  <p class="lead">타이포그래피는 웹 디자인에서 가장 중요한 요소 중 하나입니다. 적절한 글꼴, 크기, 간격을 사용하면 가독성이 크게 향상됩니다.</p>\n  <h2>주요 원칙</h2>\n  <p>좋은 타이포그래피는 <strong>가독성</strong>과 <em>심미성</em>의 균형을 추구합니다. 줄 간격, 글자 간격, 단락 간격 모두 중요한 역할을 합니다.</p>\n  <blockquote>\n    "좋은 타이포그래피는 보이지 않는다. 나쁜 타이포그래피는 어디에나 보인다."\n    <cite>— Oliver Reichenstein</cite>\n  </blockquote>\n  <h3>실전 팁</h3>\n  <p>본문 텍스트는 <code>16px</code> 이상, 줄 간격은 <code>1.6</code> 이상을 유지하세요.</p>\n</article>`,
    css: `.typography {\n  max-width: 680px;\n  margin: 0 auto;\n  padding: 40px 24px;\n  font-family: 'Pretendard', sans-serif;\n  color: #222;\n}\n.typography h1 {\n  font-size: 2.5rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n  margin-bottom: 8px;\n}\n.typography .subtitle {\n  font-size: 1.2rem;\n  color: #0046C8;\n  margin-bottom: 32px;\n}\n.typography .lead {\n  font-size: 1.15rem;\n  line-height: 1.8;\n  color: #444;\n}\n.typography h2 {\n  font-size: 1.6rem;\n  margin-top: 40px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #0046C8;\n}\n.typography h3 {\n  font-size: 1.3rem;\n  color: #0046C8;\n}\n.typography p {\n  font-size: 1rem;\n  line-height: 1.75;\n  margin-bottom: 16px;\n}\n.typography blockquote {\n  border-left: 4px solid #0046C8;\n  margin: 24px 0;\n  padding: 16px 24px;\n  background: #f0f4ff;\n  border-radius: 0 8px 8px 0;\n  font-style: italic;\n  color: #555;\n}\n.typography blockquote cite {\n  display: block;\n  margin-top: 8px;\n  font-size: 0.9rem;\n  color: #888;\n}\n.typography code {\n  background: #f0f0f0;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 0.9em;\n  color: #e74c3c;\n}`
  },
  solutionExplanation: '다양한 CSS 타이포그래피 속성(font-size, line-height, letter-spacing)을 사용하여 계층적 텍스트 디자인을 구현했습니다.',
  solutionExplanationEn: 'Implemented hierarchical text design using various CSS typography properties (font-size, line-height, letter-spacing).'
};
