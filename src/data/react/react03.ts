import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '03-hooks',
  chapter: 3,
  titleKey: 'react03',
  sections: [
    {
      title: 'useEffect Hook',
      titleEn: 'useEffect Hook',
      content: 'useEffect는 컴포넌트의 생명주기에 따라 부수 효과(side effect)를 수행합니다. API 호출, 이벤트 리스너 등록, 타이머 설정 등에 사용합니다. 의존성 배열로 실행 시점을 제어합니다.',
      contentEn: 'useEffect performs side effects based on component lifecycle. Used for API calls, event listeners, timers, etc. The dependency array controls when it runs.',
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
      codeLanguage: 'javascript',
      quiz: {
        question: 'useEffect의 빈 의존성 배열 []은 언제 실행되나요?',
        questionEn: 'When does useEffect with empty dependency array [] run?',
        options: ['매 렌더링마다', '컴포넌트 마운트 시 1회만', '상태 변경 시마다', '언마운트 시에만'],
        optionsEn: ['Every render', 'Only once on mount', 'Every state change', 'Only on unmount'],
        correctIndex: 1,
        explanation: '빈 배열 []을 전달하면 컴포넌트가 처음 마운트될 때 한 번만 실행됩니다.',
        explanationEn: 'Passing an empty array [] makes it run only once when the component first mounts.'
      }
    }
  ]
};

export default chapter;
