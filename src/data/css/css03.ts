import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '03-flexbox',
  chapter: 3,
  titleKey: 'css03',
  sections: [
    {
      title: 'Flexbox 레이아웃',
      titleEn: 'Flexbox Layout',
      content: 'Flexbox는 1차원 레이아웃 모델로, 행(row) 또는 열(column) 방향으로 아이템을 유연하게 배치합니다. display: flex를 부모에 설정하면 자식이 flex 아이템이 됩니다.',
      contentEn: 'Flexbox is a one-dimensional layout model that flexibly arranges items in row or column direction. Setting display: flex on the parent makes children flex items.',
      code: `<style>
  .flex-demo { display: flex; gap: 12px; padding: 16px; background: #f5f5f5; border-radius: 8px; margin: 8px 0; }
  .flex-demo .item { padding: 16px 24px; background: #0046C8; color: white; border-radius: 4px; font-weight: bold; }
  .flex-center { display: flex; justify-content: center; align-items: center; height: 100px; background: #E8F4FD; border-radius: 8px; margin: 8px 0; }
  .flex-between { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #FFF3CD; border-radius: 8px; margin: 8px 0; }
  .flex-between .item { padding: 8px 16px; background: #E17055; color: white; border-radius: 4px; }
</style>

<h4>기본 flex (행 방향)</h4>
<div class="flex-demo">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<h4>justify-content: center + align-items: center</h4>
<div class="flex-center">
  <strong>가운데 정렬!</strong>
</div>

<h4>justify-content: space-between</h4>
<div class="flex-between">
  <div class="item">왼쪽</div>
  <div class="item">가운데</div>
  <div class="item">오른쪽</div>
</div>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: 'Flexbox에서 주축 방향 정렬 속성은?',
        questionEn: 'Which Flexbox property aligns items along the main axis?',
        options: ['align-items', 'justify-content', 'flex-direction', 'align-self'],
        optionsEn: ['align-items', 'justify-content', 'flex-direction', 'align-self'],
        correctIndex: 1,
        explanation: 'justify-content는 주축(기본: 가로) 방향 정렬, align-items는 교차축(기본: 세로) 정렬입니다.',
        explanationEn: 'justify-content aligns along the main axis (default: horizontal), align-items along the cross axis (default: vertical).'
      }
    }
  ]
};

export default chapter;
