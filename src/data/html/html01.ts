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
    }
  ]
};

export default chapter;
