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
    },
    {
      title: '실습 예제: 정보 카드 만들기',
      titleEn: 'Practice: Building an Info Card',
      content: 'padding·border·margin·border-radius·box-shadow를 조합해 깔끔한 정보 카드를 만들어 봅니다. 여백이 박스 모델 안에서 어떻게 작동하는지 Preview로 확인하세요.',
      contentEn: 'Combine padding, border, margin, border-radius, and box-shadow to build a clean info card. Check in Preview how spacing works within the box model.',
      code: `<style>
  .info-card {
    box-sizing: border-box;
    width: 280px;
    padding: 24px;
    margin: 16px auto;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    font-family: sans-serif;
  }
  .info-card h3 { margin: 0 0 8px; color: #0046C8; }
  .info-card p { margin: 0; color: #555; line-height: 1.6; }
  .info-card .tag {
    display: inline-block; margin-top: 12px; padding: 4px 10px;
    background: #E8F4FD; color: #0046C8; border-radius: 6px; font-size: 0.8rem;
  }
</style>

<div class="info-card">
  <h3>박스 모델</h3>
  <p>content → padding → border → margin 순서로 공간이 쌓입니다.</p>
  <span class="tag">CSS 기초</span>
</div>`,
      codeLanguage: 'html',
      livePreview: true
    }
  ]
};

export default chapter;
