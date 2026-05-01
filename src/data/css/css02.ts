import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-box-model',
  chapter: 2,
  titleKey: 'css02',
  sections: [
    {
      title: '박스 모델',
      titleEn: 'Box Model',
      content: '모든 HTML 요소는 박스 모델을 따릅니다: content(콘텐츠) → padding(안쪽 여백) → border(테두리) → margin(바깥 여백). box-sizing: border-box를 설정하면 width/height에 padding과 border가 포함됩니다.',
      contentEn: 'Every HTML element follows the box model: content → padding → border → margin. Setting box-sizing: border-box includes padding and border in width/height.',
      code: `<style>
  .box {
    width: 200px;
    padding: 20px;
    border: 3px solid #0046C8;
    margin: 16px;
    background: #E8F4FD;
    box-sizing: border-box;
  }
  .box-content { width: 200px; padding: 20px; border: 3px solid #E17055; margin: 16px; background: #FFF3CD; box-sizing: content-box; }
</style>

<div class="box">
  <strong>border-box</strong><br>
  width: 200px (패딩+보더 포함)
</div>
<div class="box-content">
  <strong>content-box</strong><br>
  width: 200px (콘텐츠만)
</div>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: 'box-sizing: border-box의 효과는?',
        questionEn: 'What does box-sizing: border-box do?',
        options: ['margin을 width에 포함', 'padding과 border를 width에 포함', 'content만 width로 계산', 'border를 제거'],
        optionsEn: ['Include margin in width', 'Include padding and border in width', 'Calculate only content as width', 'Remove border'],
        correctIndex: 1,
        explanation: 'border-box는 padding과 border를 width/height 안에 포함시킵니다.',
        explanationEn: 'border-box includes padding and border within the width/height.'
      }
    }
  ]
};

export default chapter;
