import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-selectors',
  chapter: 1,
  titleKey: 'css01',
  sections: [
    {
      title: 'CSS란?',
      titleEn: 'What is CSS?',
      content: 'CSS(Cascading Style Sheets)는 HTML 문서의 시각적 표현을 정의하는 스타일시트 언어입니다. 색상, 폰트, 레이아웃, 애니메이션 등을 제어합니다. CSS는 세 가지 방법으로 적용할 수 있습니다: 인라인, 내부(style 태그), 외부(.css 파일).',
      contentEn: 'CSS (Cascading Style Sheets) is a stylesheet language that defines the visual presentation of HTML documents. It controls colors, fonts, layout, animations, and more. CSS can be applied in three ways: inline, internal (style tag), and external (.css file).',
      code: `<style>
  h1 { color: #0046C8; font-size: 2rem; }
  p { color: #555; line-height: 1.6; }
  .highlight { background: #FFF3CD; padding: 8px 12px; border-radius: 4px; }
</style>

<h1>CSS 스타일링</h1>
<p>CSS로 웹 페이지를 아름답게 꾸밀 수 있습니다.</p>
<p class="highlight">이 문단은 하이라이트 스타일이 적용되었습니다.</p>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: 'CSS에서 클래스 선택자의 기호는?',
        questionEn: 'What symbol is used for class selectors in CSS?',
        options: ['#', '.', '@', '&'],
        optionsEn: ['#', '.', '@', '&'],
        correctIndex: 1,
        explanation: '점(.)은 클래스 선택자, 샵(#)은 ID 선택자입니다.',
        explanationEn: 'Dot (.) is for class selectors, hash (#) is for ID selectors.'
      }
    },
    {
      title: '선택자 종류',
      titleEn: 'Types of Selectors',
      content: 'CSS 선택자는 스타일을 적용할 요소를 지정합니다. 요소 선택자, 클래스 선택자(.class), ID 선택자(#id), 자손 선택자, 가상 클래스(:hover, :first-child) 등이 있습니다.',
      contentEn: 'CSS selectors specify which elements to style. There are element selectors, class selectors (.class), ID selectors (#id), descendant selectors, pseudo-classes (:hover, :first-child), and more.',
      code: `<style>
  /* 요소 선택자 */
  p { margin: 8px 0; }

  /* 클래스 선택자 */
  .primary { color: #0046C8; }
  .danger { color: #E17055; }

  /* ID 선택자 */
  #special { font-weight: bold; font-size: 1.2rem; }

  /* 자손 선택자 */
  .card p { padding-left: 12px; }

  /* 가상 클래스 */
  a:hover { color: #E17055; }
</style>

<p class="primary">클래스: primary</p>
<p class="danger">클래스: danger</p>
<p id="special">ID: special</p>
<div class="card">
  <p>카드 안의 단락 (자손 선택자)</p>
</div>
<a href="#">마우스를 올려보세요 (hover)</a>`,
      codeLanguage: 'html',
      livePreview: true
    },
    {
      title: '실습 예제: 알림 배지 스타일링',
      titleEn: 'Practice: Styling Notification Badges',
      content: '클래스 선택자와 가상 클래스(:hover)를 활용해 상태별 배지(성공·경고·위험)를 만들어 봅니다. 같은 구조에 클래스만 바꿔 다른 색을 적용하는 패턴을 익혀 보세요.',
      contentEn: 'Use class selectors and the :hover pseudo-class to build status badges (success, warning, danger). Learn the pattern of applying different colors by swapping only the class on the same structure.',
      code: `<style>
  .badge {
    display: inline-block; padding: 6px 14px; border-radius: 9999px;
    font-family: sans-serif; font-weight: 700; color: #fff;
    cursor: pointer; transition: opacity 0.2s;
  }
  .badge:hover { opacity: 0.8; }
  .badge.success { background: #00855A; }
  .badge.warning { background: #C87200; }
  .badge.danger  { background: #C8102E; }
</style>

<span class="badge success">완료</span>
<span class="badge warning">대기중</span>
<span class="badge danger">실패</span>`,
      codeLanguage: 'html',
      livePreview: true
    }
  ]
};

export default chapter;
