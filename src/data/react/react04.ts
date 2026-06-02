import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '04-context',
  chapter: 4,
  titleKey: 'react04',
  sections: [
    {
      title: 'Context로 전역 상태 공유',
      titleEn: 'Sharing Global State with Context',
      content: 'props를 여러 단계로 내려보내는 prop drilling을 피하려면 Context를 사용합니다. createContext로 컨텍스트를 만들고 Provider로 값을 공급하면, 하위 컴포넌트는 useContext로 어디서든 그 값을 읽을 수 있습니다. 테마·로그인 정보 등 전역 데이터에 적합합니다.',
      contentEn: 'To avoid prop drilling — passing props down many levels — use Context. Create a context with createContext and supply a value with Provider; descendant components can read it anywhere with useContext. It suits global data like theme and auth info.',
      code: `import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        토글
      </button>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  // 중간 컴포넌트가 props를 전달하지 않아도 됨
  const theme = useContext(ThemeContext);
  return <p>현재 테마: {theme}</p>;
}`,
      codeLanguage: 'jsx',
      quiz: {
        question: 'Context를 사용하는 주된 이유는?',
        questionEn: 'What is the main reason to use Context?',
        options: ['렌더링 속도를 높이려고', 'prop drilling 없이 전역 값을 하위에 공유하려고', 'CSS를 적용하려고', '서버와 통신하려고'],
        optionsEn: ['To speed up rendering', 'To share global values to descendants without prop drilling', 'To apply CSS', 'To communicate with a server'],
        correctIndex: 1,
        explanation: 'Context는 중간 컴포넌트들을 거쳐 props를 일일이 전달하지 않고도 트리 하위에 값을 공급합니다.',
        explanationEn: 'Context supplies values to descendants without manually passing props through intermediate components.'
      }
    },
    {
      title: 'useReducer로 복잡한 상태 관리',
      titleEn: 'Managing Complex State with useReducer',
      content: '여러 값이 함께 바뀌거나 상태 전이가 복잡할 때는 useReducer가 useState보다 적합합니다. (state, action) => newState 형태의 리듀서 함수로 상태 변경 로직을 한곳에 모으고, dispatch로 액션을 보냅니다.',
      contentEn: 'When multiple values change together or state transitions are complex, useReducer fits better than useState. A reducer function of the form (state, action) => newState centralizes update logic, and you send actions with dispatch.',
      code: `import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'inc': return { count: state.count + 1 };
    case 'dec': return { count: state.count - 1 };
    case 'reset': return { count: 0 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: 'dec' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>리셋</button>
      <button onClick={() => dispatch({ type: 'inc' })}>+1</button>
    </div>
  );
}`,
      codeLanguage: 'jsx',
      quiz: {
        question: 'useReducer의 리듀서 함수 시그니처로 올바른 것은?',
        questionEn: 'What is the correct reducer function signature for useReducer?',
        options: ['(action) => state', '(state, action) => newState', '(props) => state', '() => dispatch'],
        optionsEn: ['(action) => state', '(state, action) => newState', '(props) => state', '() => dispatch'],
        correctIndex: 1,
        explanation: '리듀서는 현재 state와 action을 받아 새로운 state를 반환하는 순수 함수 (state, action) => newState입니다.',
        explanationEn: 'A reducer is a pure function (state, action) => newState that takes the current state and an action and returns the next state.'
      }
    },
    {
      title: '성능 최적화 (memo, useMemo, useCallback)',
      titleEn: 'Performance Optimization (memo, useMemo, useCallback)',
      content: 'React.memo는 props가 같으면 컴포넌트 재렌더링을 건너뜁니다. useMemo는 비싼 계산 결과를, useCallback은 함수 참조를 메모이제이션해 불필요한 재계산·재생성을 막습니다. 단, 과도한 최적화는 오히려 복잡도를 키우므로 병목이 확인될 때 적용합니다.',
      contentEn: 'React.memo skips re-rendering a component when its props are unchanged. useMemo memoizes an expensive computation result and useCallback memoizes a function reference, preventing unnecessary recomputation/recreation. Apply them when a bottleneck is confirmed, since over-optimizing adds complexity.',
      code: `import { memo, useMemo, useCallback, useState } from 'react';

const Child = memo(function Child({ onClick }) {
  return <button onClick={onClick}>자식 버튼</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  // 비싼 계산 메모이제이션
  const doubled = useMemo(() => count * 2, [count]);

  // 함수 참조 고정 → Child 불필요한 재렌더 방지
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);

  return (
    <div>
      <p>{count} × 2 = {doubled}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
      <Child onClick={handleClick} />
    </div>
  );
}`,
      codeLanguage: 'jsx',
      quiz: {
        question: '함수의 참조를 고정(메모이제이션)해 자식의 불필요한 재렌더링을 막는 Hook은?',
        questionEn: 'Which Hook memoizes a function reference to prevent unnecessary child re-renders?',
        options: ['useMemo', 'useCallback', 'useEffect', 'useRef'],
        optionsEn: ['useMemo', 'useCallback', 'useEffect', 'useRef'],
        correctIndex: 1,
        explanation: 'useCallback은 의존성이 바뀌지 않는 한 동일한 함수 참조를 유지합니다. useMemo는 값(계산 결과)을 메모이제이션합니다.',
        explanationEn: 'useCallback keeps the same function reference as long as dependencies are unchanged. useMemo memoizes a value (computation result).'
      }
    }
  ]
};

export default chapter;
