import type { WebProblem } from '../../types';
export const p5: WebProblem = {
  id: 'beginner-5', number: 5, title: '이미지 갤러리', titleEn: 'Image Gallery',
  category: 'beginner', topic: 'html', difficulty: 'beginner',
  description: 'HTML과 CSS를 사용하여 3열 이미지 갤러리를 만드세요. figure와 figcaption 태그를 활용하세요.',
  descriptionEn: 'Create a 3-column image gallery using HTML and CSS. Use figure and figcaption tags.',
  hint: 'CSS Grid의 grid-template-columns: repeat(3, 1fr)을 활용하세요.',
  hintEn: 'Use CSS Grid with grid-template-columns: repeat(3, 1fr).',
  solution: {
    html: `<div class="gallery">\n  <figure>\n    <img src="https://picsum.photos/300/200?random=1" alt="사진 1">\n    <figcaption>풍경 사진 1</figcaption>\n  </figure>\n  <figure>\n    <img src="https://picsum.photos/300/200?random=2" alt="사진 2">\n    <figcaption>풍경 사진 2</figcaption>\n  </figure>\n  <figure>\n    <img src="https://picsum.photos/300/200?random=3" alt="사진 3">\n    <figcaption>풍경 사진 3</figcaption>\n  </figure>\n  <figure>\n    <img src="https://picsum.photos/300/200?random=4" alt="사진 4">\n    <figcaption>풍경 사진 4</figcaption>\n  </figure>\n  <figure>\n    <img src="https://picsum.photos/300/200?random=5" alt="사진 5">\n    <figcaption>풍경 사진 5</figcaption>\n  </figure>\n  <figure>\n    <img src="https://picsum.photos/300/200?random=6" alt="사진 6">\n    <figcaption>풍경 사진 6</figcaption>\n  </figure>\n</div>`,
    css: `.gallery {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 20px;\n}\n.gallery figure {\n  margin: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n.gallery img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  display: block;\n}\n.gallery figcaption {\n  padding: 8px 12px;\n  text-align: center;\n  font-size: 14px;\n  color: #555;\n  background: #f9f9f9;\n}`
  },
  solutionExplanation: 'CSS Grid로 3열 레이아웃을 만들고, figure/figcaption으로 시맨틱 마크업을 적용했습니다. object-fit: cover로 이미지 비율을 유지합니다.',
  solutionExplanationEn: 'Used CSS Grid for 3-column layout with semantic figure/figcaption markup. object-fit: cover maintains image aspect ratio.'
};
