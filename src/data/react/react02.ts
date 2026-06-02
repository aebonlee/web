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
      codeLanguage: 'jsx',
      quiz: {
        question: 'useState의 반환값은?',
        questionEn: 'What does useState return?',
        options: ['상태값만', '업데이트 함수만', '[상태값, 업데이트 함수] 배열', '{상태값, 업데이트 함수} 객체'],
        optionsEn: ['Only state value', 'Only update function', '[state, updater] array', '{state, updater} object'],
        correctIndex: 2,
        explanation: 'useState는 [현재 상태값, 상태 업데이트 함수]를 담은 배열을 반환합니다.',
        explanationEn: 'useState returns an array containing [current state, state update function].'
      }
    },
    {
      title: '함수형 업데이트와 불변성',
      titleEn: 'Functional Updates and Immutability',
      content: '이전 상태를 기반으로 업데이트할 때는 setState(prev => ...) 형태의 함수형 업데이트를 사용하면 안전합니다. 객체나 배열 상태를 변경할 때는 직접 수정하지 말고, 전개 구문(...)으로 새 객체/배열을 만들어 불변성을 유지해야 React가 변경을 감지합니다.',
      contentEn: 'When updating based on previous state, the functional update form setState(prev => ...) is safe. When changing object or array state, never mutate directly — create a new object/array with the spread syntax (...) to maintain immutability so React detects the change.',
      code: `import { useState } from 'react';

function Cart() {
  const [items, setItems] = useState([]);

  // 함수형 업데이트 - 이전 상태 기반
  function addItem(name) {
    setItems(prev => [...prev, { id: Date.now(), name }]);
  }

  function removeItem(id) {
    // 불변성 유지 - filter로 새 배열 생성
    setItems(prev => prev.filter(item => item.id !== id));
  }

  return (
    <div>
      <button onClick={() => addItem('상품')}>담기</button>
      <p>장바구니: {items.length}개</p>
      {items.map(item => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => removeItem(item.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
}`,
      codeLanguage: 'jsx',
      quiz: {
        question: '배열 상태에 항목을 추가할 때 올바른 방법은?',
        questionEn: 'What is the correct way to add an item to array state?',
        options: ['items.push(newItem)', 'setItems([...items, newItem])', 'items[items.length] = newItem', 'items.length++'],
        optionsEn: ['items.push(newItem)', 'setItems([...items, newItem])', 'items[items.length] = newItem', 'items.length++'],
        correctIndex: 1,
        explanation: '기존 배열을 직접 수정하면 안 됩니다. 전개 구문으로 새 배열을 만들어 setState에 전달해야 불변성이 유지됩니다.',
        explanationEn: 'Never mutate the existing array directly. Create a new array with the spread syntax and pass it to setState to maintain immutability.'
      }
    },
    {
      title: '폼과 제어 컴포넌트',
      titleEn: 'Forms and Controlled Components',
      content: '입력 요소의 value를 state와 연결하고 onChange로 상태를 갱신하는 방식을 제어 컴포넌트(controlled component)라고 합니다. 여러 입력을 하나의 객체 상태로 관리하면 폼을 깔끔하게 다룰 수 있습니다.',
      contentEn: 'Binding an input element\'s value to state and updating it via onChange is called a controlled component. Managing multiple inputs as a single object state keeps form handling clean.',
      code: `import { useState } from 'react';

function SignupForm() {
  const [form, setForm] = useState({ email: '', password: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(\`가입: \${form.email}\`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={form.email}
        onChange={handleChange} placeholder="이메일" />
      <input name="password" type="password" value={form.password}
        onChange={handleChange} placeholder="비밀번호" />
      <button type="submit">가입하기</button>
    </form>
  );
}`,
      codeLanguage: 'jsx',
      quiz: {
        question: '제어 컴포넌트(controlled component)의 핵심 특징은?',
        questionEn: 'What is the key characteristic of a controlled component?',
        options: ['DOM이 입력값을 직접 관리한다', 'input의 value를 React state가 관리한다', 'ref로만 값을 읽는다', 'onChange가 필요 없다'],
        optionsEn: ['The DOM manages the input value directly', 'React state manages the input\'s value', 'Values are read only via ref', 'onChange is not needed'],
        correctIndex: 1,
        explanation: '제어 컴포넌트는 input의 value를 React state와 연결하고 onChange로 갱신하여, state가 입력값의 단일 출처가 됩니다.',
        explanationEn: 'A controlled component binds the input\'s value to React state and updates it via onChange, making state the single source of truth.'
      }
    },
    {
      title: '실습 예제: 좋아요 토글 버튼',
      titleEn: 'Practice: Like Toggle Button',
      content: 'boolean 상태와 숫자 상태를 함께 다뤄, 누를 때마다 좋아요가 켜지고/꺼지며 카운트가 증감하는 버튼을 만들어 봅니다. 함수형 업데이트로 안전하게 카운트를 갱신합니다.',
      contentEn: 'Manage a boolean state and a number state together to build a button that toggles a like on/off and increments/decrements the count on each press. Update the count safely with a functional update.',
      code: `import { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(12);

  function toggle() {
    setLiked(prev => !prev);
    setCount(prev => prev + (liked ? -1 : 1));
  }

  return (
    <button
      onClick={toggle}
      style={{
        padding: '8px 16px',
        border: '1px solid ' + (liked ? '#C8102E' : '#ccc'),
        background: liked ? '#FDECEE' : '#fff',
        color: liked ? '#C8102E' : '#333',
        borderRadius: 8, cursor: 'pointer'
      }}
    >
      {liked ? '♥' : '♡'} 좋아요 {count}
    </button>
  );
}`,
      codeLanguage: 'jsx'
    }
  ]
};

export default chapter;
