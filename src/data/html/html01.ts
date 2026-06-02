import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-elements',
  chapter: 1,
  titleKey: 'html01',
  sections: [
    {
      title: 'HTML이란?',
      titleEn: 'What is HTML?',
      content: 'HTML(HyperText Markup Language)은 웹 페이지의 구조를 정의하는 마크업 언어입니다. 웹 브라우저는 HTML 문서를 읽어 화면에 콘텐츠를 표시합니다. HTML은 태그(tag)를 사용하여 제목, 단락, 이미지, 링크 등 다양한 요소를 구성합니다.',
      contentEn: 'HTML (HyperText Markup Language) is a markup language that defines the structure of web pages. Web browsers read HTML documents and display content on screen. HTML uses tags to compose various elements such as headings, paragraphs, images, and links.',
      code: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>나의 첫 웹페이지</title>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>HTML을 배워봅시다.</p>
</body>
</html>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: 'HTML에서 문서의 제목을 정의하는 태그는?',
        questionEn: 'Which HTML tag defines the document title?',
        options: ['<head>', '<title>', '<h1>', '<meta>'],
        optionsEn: ['<head>', '<title>', '<h1>', '<meta>'],
        correctIndex: 1,
        explanation: '<title> 태그는 브라우저 탭에 표시되는 문서의 제목을 정의합니다.',
        explanationEn: 'The <title> tag defines the document title displayed in the browser tab.'
      }
    },
    {
      title: '기본 태그들',
      titleEn: 'Basic Tags',
      content: 'HTML의 가장 기본적인 태그들을 알아봅시다. <h1>~<h6>는 제목, <p>는 단락, <br>은 줄바꿈, <hr>은 수평선, <strong>은 굵게, <em>은 기울임을 나타냅니다.',
      contentEn: 'Let\'s learn the most basic HTML tags. <h1>~<h6> for headings, <p> for paragraphs, <br> for line breaks, <hr> for horizontal rules, <strong> for bold, and <em> for italics.',
      code: `<h1>제목 1 (가장 큰 제목)</h1>
<h2>제목 2</h2>
<h3>제목 3</h3>
<p>이것은 <strong>굵은 텍스트</strong>와 <em>기울임 텍스트</em>입니다.</p>
<hr>
<p>수평선 아래의 단락입니다.<br>줄바꿈도 됩니다.</p>`,
      codeLanguage: 'html',
      livePreview: true
    },
    {
      title: '링크와 이미지',
      titleEn: 'Links and Images',
      content: '<a> 태그는 하이퍼링크를 만들고, <img> 태그는 이미지를 삽입합니다. href 속성은 링크 대상을, src 속성은 이미지 경로를, alt 속성은 대체 텍스트를 지정합니다.',
      contentEn: 'The <a> tag creates hyperlinks and the <img> tag inserts images. The href attribute specifies the link target, src specifies the image path, and alt specifies alternative text.',
      code: `<a href="https://www.dreamitbiz.com" target="_blank">
  DreamIT Biz 방문하기
</a>

<img src="https://via.placeholder.com/300x200"
     alt="예시 이미지"
     width="300" height="200">

<a href="mailto:aebon@dreamitbiz.com">이메일 보내기</a>`,
      codeLanguage: 'html',
      livePreview: true
    },
    {
      title: '실습 예제: 자기소개 카드',
      titleEn: 'Practice: Self-Introduction Card',
      content: '지금까지 배운 제목·단락·링크·이미지를 모두 사용해 간단한 자기소개 카드를 만들어 봅니다. Preview로 결과를 확인하고, 이름·소개 문구·링크를 자유롭게 바꿔 보세요.',
      contentEn: 'Use everything you learned — headings, paragraphs, links, and images — to build a simple self-introduction card. Check the result in Preview and freely change the name, intro text, and links.',
      code: `<div style="max-width:320px;border:1px solid #e5e7eb;border-radius:12px;padding:20px;font-family:sans-serif">
  <img src="https://picsum.photos/80" alt="프로필 사진"
       style="width:80px;height:80px;border-radius:50%">
  <h2>이애본</h2>
  <p><strong>웹 개발 학습자</strong> · 서울</p>
  <p>HTML을 배우며 첫 웹페이지를 만들고 있습니다. <em>꾸준함</em>이 무기!</p>
  <hr>
  <p>
    <a href="https://www.dreamitbiz.com" target="_blank">포트폴리오</a> ·
    <a href="mailto:aebon@dreamitbiz.com">이메일</a>
  </p>
</div>`,
      codeLanguage: 'html',
      livePreview: true
    }
  ]
};

export default chapter;
