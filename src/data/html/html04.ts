import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '04-media',
  chapter: 4,
  titleKey: 'html04',
  sections: [
    {
      title: '이미지와 figure',
      titleEn: 'Images and figure',
      content: '<img>의 alt 속성은 접근성과 SEO에 중요합니다. <figure>와 <figcaption>으로 이미지에 설명을 붙이고, srcset/sizes로 화면 크기에 맞는 이미지를 제공해 반응형 이미지를 구현할 수 있습니다.',
      contentEn: 'The alt attribute of <img> is important for accessibility and SEO. Use <figure> and <figcaption> to caption images, and srcset/sizes to serve appropriately sized images for responsive design.',
      code: `<figure style="margin:0;text-align:center">
  <img src="https://picsum.photos/320/180"
       alt="랜덤 풍경 사진"
       style="max-width:100%;border-radius:8px">
  <figcaption style="color:#666;font-size:0.85rem;margin-top:6px">
    그림 1. figcaption으로 붙인 이미지 설명
  </figcaption>
</figure>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: '이미지에 설명(캡션)을 의미적으로 붙일 때 사용하는 태그는?',
        questionEn: 'Which tag semantically adds a caption to an image?',
        options: ['<caption>', '<figcaption>', '<label>', '<alt>'],
        optionsEn: ['<caption>', '<figcaption>', '<label>', '<alt>'],
        correctIndex: 1,
        explanation: '<figure> 안의 <figcaption>이 이미지/도표의 캡션을 의미적으로 표현합니다. <caption>은 표(table)용입니다.',
        explanationEn: '<figcaption> inside <figure> semantically represents a caption for an image/diagram. <caption> is for tables.'
      }
    },
    {
      title: '오디오와 비디오',
      titleEn: 'Audio and Video',
      content: '<audio>와 <video> 태그로 미디어를 삽입합니다. controls 속성으로 재생 컨트롤을 표시하고, 여러 <source>를 제공해 브라우저 호환성을 높입니다. poster, autoplay, loop, muted 등의 속성으로 동작을 제어합니다.',
      contentEn: 'Use <audio> and <video> tags to embed media. The controls attribute shows playback controls, and multiple <source> elements improve browser compatibility. Control behavior with poster, autoplay, loop, muted, and more.',
      code: `<video controls width="320" poster="https://picsum.photos/320/180"
       style="border-radius:8px;max-width:100%">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  브라우저가 video 태그를 지원하지 않습니다.
</video>

<audio controls style="display:block;margin-top:12px;width:100%">
  <source src="audio.mp3" type="audio/mpeg">
</audio>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: '<video>에 재생/정지 등 기본 컨트롤을 표시하는 속성은?',
        questionEn: 'Which attribute shows default playback controls on <video>?',
        options: ['autoplay', 'controls', 'preload', 'poster'],
        optionsEn: ['autoplay', 'controls', 'preload', 'poster'],
        correctIndex: 1,
        explanation: 'controls 속성을 추가하면 브라우저 기본 재생 컨트롤(재생/정지/볼륨 등)이 표시됩니다.',
        explanationEn: 'Adding the controls attribute displays the browser\'s default playback controls (play/pause/volume, etc.).'
      }
    },
    {
      title: 'iframe과 임베드',
      titleEn: 'iframe and Embedding',
      content: '<iframe>은 다른 HTML 문서를 현재 페이지에 삽입합니다. YouTube 영상, 지도, 외부 위젯 등을 임베드할 때 사용합니다. 보안을 위해 sandbox 속성으로 권한을 제한하고, loading="lazy"로 성능을 개선할 수 있습니다.',
      contentEn: '<iframe> embeds another HTML document into the current page. Use it to embed YouTube videos, maps, external widgets, and more. For security, restrict permissions with the sandbox attribute, and improve performance with loading="lazy".',
      code: `<!-- YouTube 영상 임베드 -->
<iframe width="320" height="180"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video"
  loading="lazy"
  allowfullscreen
  style="border:0;border-radius:8px;max-width:100%">
</iframe>

<!-- 보안 제한이 걸린 iframe -->
<iframe src="widget.html"
  sandbox="allow-scripts allow-same-origin">
</iframe>`,
      codeLanguage: 'html',
      quiz: {
        question: 'iframe의 권한을 제한해 보안을 강화하는 속성은?',
        questionEn: 'Which attribute restricts an iframe\'s permissions for security?',
        options: ['secure', 'sandbox', 'restrict', 'safe'],
        optionsEn: ['secure', 'sandbox', 'restrict', 'safe'],
        correctIndex: 1,
        explanation: 'sandbox 속성은 iframe 내부의 스크립트 실행·폼 제출 등 기능을 기본 차단하고, allow-* 토큰으로 필요한 권한만 허용합니다.',
        explanationEn: 'The sandbox attribute blocks features like script execution and form submission inside the iframe by default, allowing only needed permissions via allow-* tokens.'
      }
    },
    {
      title: '실습 예제: 미디어 갤러리',
      titleEn: 'Practice: Media Gallery',
      content: 'figure와 figcaption으로 이미지 카드를 나열하고, video를 함께 배치해 작은 미디어 갤러리를 만들어 봅니다. 반응형으로 보이도록 max-width를 사용하는 점에 주목하세요.',
      contentEn: 'Lay out image cards with figure and figcaption and place a video alongside to build a small media gallery. Note the use of max-width so it stays responsive.',
      code: `<div style="display:flex;gap:12px;flex-wrap:wrap;font-family:sans-serif">
  <figure style="margin:0;width:150px">
    <img src="https://picsum.photos/id/10/150/100" alt="자연 사진"
         style="width:100%;border-radius:8px">
    <figcaption style="font-size:0.8rem;color:#666">자연 풍경</figcaption>
  </figure>
  <figure style="margin:0;width:150px">
    <img src="https://picsum.photos/id/20/150/100" alt="도시 사진"
         style="width:100%;border-radius:8px">
    <figcaption style="font-size:0.8rem;color:#666">도시 야경</figcaption>
  </figure>
  <figure style="margin:0;width:150px">
    <video controls poster="https://picsum.photos/id/30/150/100"
           style="width:100%;border-radius:8px">
      <source src="clip.mp4" type="video/mp4">
    </video>
    <figcaption style="font-size:0.8rem;color:#666">소개 영상</figcaption>
  </figure>
</div>`,
      codeLanguage: 'html',
      livePreview: true
    }
  ]
};

export default chapter;
