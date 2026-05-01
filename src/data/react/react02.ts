import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-state',
  chapter: 2,
  titleKey: 'react02',
  sections: [
    {
      title: 'useState Hook',
      titleEn: 'useState Hook',
      content: 'useState는 React 함수 컴포넌트에서 상태(state)를 관리하는 Hook입니다. const [state, setState] = useState(초기값) 형태로 사용하며, setState로 상태를 업데이트하면 컴포넌트가 다시 렌더링됩니다.',
      contentEn: 'useState is a Hook for managing state in React function components. Use const [state, setState] = useState(initialValue) format, and the component re-renders when state is updated with setState.',
      code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div>
      <h3>카운터: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>리셋</button>

      <hr />
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="이름을 입력하세요"
      />
      <p>입력값: {name || '(비어있음)'}</p>
    </div>
  );
}`,
      codeLanguage: 'javascript',
      quiz: {
        question: 'useState의 반환값은?',
        questionEn: 'What does useState return?',
        options: ['상태값만', '업데이트 함수만', '[상태값, 업데이트 함수] 배열', '{상태값, 업데이트 함수} 객체'],
        optionsEn: ['Only state value', 'Only update function', '[state, updater] array', '{state, updater} object'],
        correctIndex: 2,
        explanation: 'useState는 [현재 상태값, 상태 업데이트 함수]를 담은 배열을 반환합니다.',
        explanationEn: 'useState returns an array containing [current state, state update function].'
      }
    }
  ]
};

export default chapter;
