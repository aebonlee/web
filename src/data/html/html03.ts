import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '03-semantic',
  chapter: 3,
  titleKey: 'html03',
  sections: [
    {
      title: '시맨틱 HTML',
      titleEn: 'Semantic HTML',
      content: '시맨틱 태그는 콘텐츠의 의미를 명확하게 전달합니다. <header>, <nav>, <main>, <section>, <article>, <aside>, <footer> 등을 사용하면 검색 엔진과 스크린 리더가 페이지 구조를 더 잘 이해할 수 있습니다.',
      contentEn: 'Semantic tags clearly convey the meaning of content. Using <header>, <nav>, <main>, <section>, <article>, <aside>, <footer> helps search engines and screen readers better understand page structure.',
      code: `<header>
  <nav>
    <a href="/">홈</a>
    <a href="/about">소개</a>
    <a href="/contact">연락처</a>
  </nav>
</header>

<main>
  <article>
    <h2>블로그 포스트 제목</h2>
    <p>포스트 내용이 여기에 옵니다.</p>
  </article>

  <aside>
    <h3>관련 링크</h3>
    <ul>
      <li><a href="#">링크 1</a></li>
      <li><a href="#">링크 2</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2026 DreamIT Biz</p>
</footer>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: '페이지의 주요 콘텐츠를 감싸는 시맨틱 태그는?',
        questionEn: 'Which semantic tag wraps the main content of a page?',
        options: ['<div>', '<section>', '<main>', '<article>'],
        optionsEn: ['<div>', '<section>', '<main>', '<article>'],
        correctIndex: 2,
        explanation: '<main> 태그는 문서의 주요 콘텐츠를 나타내며, 페이지당 하나만 사용합니다.',
        explanationEn: 'The <main> tag represents the main content of the document and should be used only once per page.'
      }
    },
    {
      title: '리스트와 테이블',
      titleEn: 'Lists and Tables',
      content: '순서 있는 목록은 <ol>, 순서 없는 목록은 <ul>, 정의 목록은 <dl>을 사용합니다. 테이블은 <table>, <thead>, <tbody>, <tr>, <th>, <td> 태그로 구성합니다.',
      contentEn: 'Use <ol> for ordered lists, <ul> for unordered lists, and <dl> for definition lists. Tables are composed of <table>, <thead>, <tbody>, <tr>, <th>, <td> tags.',
      code: `<h3>순서 없는 목록</h3>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h3>순서 있는 목록</h3>
<ol>
  <li>기초 배우기</li>
  <li>프로젝트 만들기</li>
  <li>배포하기</li>
</ol>

<h3>성적표</h3>
<table border="1" cellpadding="8">
  <thead>
    <tr><th>과목</th><th>점수</th></tr>
  </thead>
  <tbody>
    <tr><td>HTML</td><td>95</td></tr>
    <tr><td>CSS</td><td>88</td></tr>
    <tr><td>JavaScript</td><td>92</td></tr>
  </tbody>
</table>`,
      codeLanguage: 'html',
      livePreview: true
    },
    {
      title: '실습 예제: 시맨틱 프로필 페이지',
      titleEn: 'Practice: Semantic Profile Page',
      content: '시맨틱 태그(header·main·section·footer)와 리스트·테이블을 함께 사용해 작은 프로필 페이지를 구성해 봅니다. <div> 대신 의미 있는 태그를 쓰는 연습이 핵심입니다.',
      contentEn: 'Build a small profile page using semantic tags (header, main, section, footer) together with lists and a table. The key is practicing meaningful tags instead of <div>.',
      code: `<article style="max-width:380px;font-family:sans-serif;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
  <header style="background:#0046C8;color:#fff;padding:16px">
    <h2 style="margin:0">이애본</h2>
    <p style="margin:4px 0 0">프론트엔드 학습자</p>
  </header>
  <main style="padding:16px">
    <section>
      <h3>보유 기술</h3>
      <ul>
        <li>HTML / CSS</li>
        <li>JavaScript</li>
      </ul>
    </section>
    <section>
      <h3>학습 현황</h3>
      <table border="1" cellpadding="6" style="border-collapse:collapse;width:100%">
        <thead><tr><th>토픽</th><th>진도</th></tr></thead>
        <tbody>
          <tr><td>HTML</td><td>100%</td></tr>
          <tr><td>CSS</td><td>60%</td></tr>
        </tbody>
      </table>
    </section>
  </main>
  <footer style="padding:12px 16px;color:#666;font-size:0.85rem">
    &copy; 2026 DreamIT Biz
  </footer>
</article>`,
      codeLanguage: 'html',
      livePreview: true
    }
  ]
};

export default chapter;
