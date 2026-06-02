import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '03-hooks',
  chapter: 3,
  titleKey: 'react03',
  sections: [
    {
      title: 'useEffect Hook',
      titleEn: 'useEffect Hook',
      content: 'useEffect는 컴포넌트의 생명주기에 따라 부수 효과(side effect)를 수행합니다. API 호출, 이벤트 리스너 등록, 타이머 설정 등에 사용합니다. 의존성 배열로 실행 시점을 제어하며, 반환하는 함수는 정리(cleanup) 작업에 사용됩니다.',
      contentEn: 'useEffect performs side effects based on component lifecycle. Used for API calls, event listeners, timers, etc. The dependency array controls when it runs, and the returned function is used for cleanup.',
      code: `import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // 클린업 함수 (언마운트 또는 의존성 변경 시)
    return () => clearInterval(interval);
  }, [isRunning]); // isRunning이 변경될 때만 실행

  return (
    <div>
      <h3>타이머: {seconds}초</h3>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? '정지' : '시작'}
      </button>
      <button onClick={() => { setIsRunning(false); setSeconds(0); }}>
        리셋
      </button>
    </div>
  );
}`,
      codeLanguage: 'jsx',
      quiz: {
        question: 'useEffect의 빈 의존성 배열 []은 언제 실행되나요?',
        questionEn: 'When does useEffect with empty dependency array [] run?',
        options: ['매 렌더링마다', '컴포넌트 마운트 시 1회만', '상태 변경 시마다', '언마운트 시에만'],
        optionsEn: ['Every render', 'Only once on mount', 'Every state change', 'Only on unmount'],
        correctIndex: 1,
        explanation: '빈 배열 []을 전달하면 컴포넌트가 처음 마운트될 때 한 번만 실행됩니다.',
        explanationEn: 'Passing an empty array [] makes it run only once when the component first mounts.'
      }
    },
    {
      title: '데이터 페칭과 정리',
      titleEn: 'Data Fetching and Cleanup',
      content: 'useEffect 안에서 API를 호출해 데이터를 불러오는 것이 일반적인 패턴입니다. 로딩 상태와 에러 상태를 함께 관리하고, 컴포넌트가 언마운트되었을 때 상태 업데이트를 막기 위해 정리 함수로 플래그를 관리하는 것이 좋습니다.',
      contentEn: 'Fetching data by calling an API inside useEffect is a common pattern. Manage loading and error states together, and use a cleanup function with a flag to prevent state updates after the component unmounts.',
      code: `import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        if (active) {        // 언마운트 후 setState 방지
          setUsers(data);
          setLoading(false);
        }
      });

    return () => { active = false; };
  }, []);

  if (loading) return <p>불러오는 중...</p>;
  return (
    <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
  );
}`,
      codeLanguage: 'jsx',
      quiz: {
        question: 'useEffect의 정리(cleanup) 함수를 사용하는 대표적인 이유는?',
        questionEn: 'What is a typical reason to use a useEffect cleanup function?',
        options: ['컴포넌트를 더 빨리 렌더링하기 위해', '타이머·구독·리스너를 해제하고 메모리 누수를 막기 위해', 'state를 초기화하기 위해', 'props를 변경하기 위해'],
        optionsEn: ['To render the component faster', 'To clear timers/subscriptions/listeners and prevent memory leaks', 'To reset state', 'To change props'],
        correctIndex: 1,
        explanation: '정리 함수는 setInterval, 이벤트 리스너, 구독 등을 해제하여 메모리 누수와 잘못된 상태 업데이트를 방지합니다.',
        explanationEn: 'The cleanup function releases setInterval, event listeners, subscriptions, etc., preventing memory leaks and stale state updates.'
      }
    },
    {
      title: '커스텀 Hook 만들기',
      titleEn: 'Creating Custom Hooks',
      content: '반복되는 상태 로직을 use로 시작하는 함수로 추출하면 커스텀 Hook이 됩니다. 여러 컴포넌트에서 동일한 로직을 재사용할 수 있어 코드가 깔끔해집니다. 예를 들어 localStorage와 동기화되는 상태를 Hook으로 만들 수 있습니다.',
      contentEn: 'Extracting repeated state logic into a function that starts with "use" creates a custom Hook. The same logic can be reused across multiple components, keeping code clean. For example, you can make a Hook for state synced with localStorage.',
      code: `import { useState } from 'react';

// 커스텀 Hook - localStorage 동기화
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initial;
  });

  function update(newValue) {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  return [value, update];
}

// 사용
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      현재 테마: {theme}
    </button>
  );
}`,
      codeLanguage: 'jsx',
      quiz: {
        question: '커스텀 Hook의 이름이 따라야 하는 규칙은?',
        questionEn: 'What naming convention must a custom Hook follow?',
        options: ['get으로 시작', 'use로 시작', 'Hook으로 끝남', '대문자로 시작'],
        optionsEn: ['Start with get', 'Start with use', 'End with Hook', 'Start with uppercase'],
        correctIndex: 1,
        explanation: '커스텀 Hook은 반드시 use로 시작해야 React가 Hook 규칙을 적용하고 린터가 올바르게 검사할 수 있습니다.',
        explanationEn: 'A custom Hook must start with "use" so React applies the Rules of Hooks and the linter can check it correctly.'
      }
    }
  ]
};

export default chapter;
