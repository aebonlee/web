import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '04-react-ts',
  chapter: 4,
  titleKey: 'ts04',
  sections: [
    {
      title: '컴포넌트 Props 타입',
      titleEn: 'Typing Component Props',
      content: 'React 컴포넌트의 props는 interface나 type으로 정의합니다. 선택적 prop은 ?, 자식 요소는 React.ReactNode, 이벤트 핸들러는 적절한 이벤트 타입으로 명시합니다. 이렇게 하면 잘못된 prop 사용을 컴파일 단계에서 잡을 수 있습니다.',
      contentEn: 'Type a React component\'s props with interface or type. Mark optional props with ?, children with React.ReactNode, and event handlers with the appropriate event type. This catches incorrect prop usage at compile time.',
      code: `interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';   // 선택적
  disabled?: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

function Button({ label, variant = 'primary', onClick, children }: ButtonProps) {
  return (
    <button className={variant} onClick={onClick}>
      {label}{children}
    </button>
  );
}

// 사용 - label 누락 시 컴파일 에러
<Button label="저장" onClick={() => save()} />`,
      codeLanguage: 'tsx',
      quiz: {
        question: 'React에서 자식 요소(children)를 받을 때 적절한 타입은?',
        questionEn: 'What is the appropriate type for receiving children in React?',
        options: ['string', 'React.ReactNode', 'any[]', 'HTMLElement'],
        optionsEn: ['string', 'React.ReactNode', 'any[]', 'HTMLElement'],
        correctIndex: 1,
        explanation: 'React.ReactNode는 문자열·숫자·JSX·배열·null 등 렌더링 가능한 모든 자식을 포괄하는 타입입니다.',
        explanationEn: 'React.ReactNode covers all renderable children — strings, numbers, JSX, arrays, null, and more.'
      }
    },
    {
      title: 'Hook과 이벤트 타입',
      titleEn: 'Typing Hooks and Events',
      content: 'useState는 보통 초기값으로 타입이 추론되지만, 제네릭으로 명시할 수도 있습니다(useState<User | null>(null)). useRef는 요소 타입을 지정하고, 이벤트 핸들러는 React.ChangeEvent, React.MouseEvent 등으로 정확히 타이핑합니다.',
      contentEn: 'useState usually infers its type from the initial value, but you can specify it with a generic (useState<User | null>(null)). useRef specifies the element type, and event handlers are typed precisely with React.ChangeEvent, React.MouseEvent, etc.',
      code: `import { useState, useRef } from 'react';

interface User { id: number; name: string; }

function Form() {
  // 제네릭으로 타입 명시
  const [user, setUser] = useState<User | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 이벤트 타입 명시
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  function focusInput() {
    inputRef.current?.focus();
  }

  return <input ref={inputRef} onChange={handleChange} />;
}`,
      codeLanguage: 'tsx',
      quiz: {
        question: '초기값이 null인 상태에 User 객체도 담으려면 useState를 어떻게 선언하나요?',
        questionEn: 'How do you declare useState to hold a User object with an initial value of null?',
        options: ['useState(null)', 'useState<User | null>(null)', 'useState<User>(null)', 'useState(User)'],
        optionsEn: ['useState(null)', 'useState<User | null>(null)', 'useState<User>(null)', 'useState(User)'],
        correctIndex: 1,
        explanation: '초기값이 null이면 타입 추론이 null로 고정되므로, 제네릭 useState<User | null>(null)로 두 타입을 모두 허용해야 합니다.',
        explanationEn: 'With a null initial value, inference fixes the type to null, so use the generic useState<User | null>(null) to allow both types.'
      }
    },
    {
      title: 'API 응답과 제네릭 활용',
      titleEn: 'API Responses and Generics in Practice',
      content: 'fetch로 받은 데이터에 타입을 부여하면 자동완성과 오류 검출이 가능합니다. 제네릭 함수로 재사용 가능한 API 호출기를 만들고, 응답 형태를 interface로 정의해 타입 안전한 데이터 흐름을 구성합니다.',
      contentEn: 'Typing data fetched via fetch enables autocomplete and error detection. Build a reusable API caller with a generic function and define the response shape with an interface for a type-safe data flow.',
      code: `interface Post { id: number; title: string; body: string; }

// 제네릭 API 호출기
async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error('요청 실패: ' + res.status);
  return res.json() as Promise<T>;
}

// 사용 - posts는 Post[]로 추론됨
async function loadPosts() {
  const posts = await fetchJson<Post[]>('/api/posts');
  return posts.map(p => p.title);   // p.title 자동완성
}`,
      codeLanguage: 'tsx',
      quiz: {
        question: 'fetchJson<Post[]>(url)에서 제네릭 <Post[]>의 역할은?',
        questionEn: 'What is the role of the generic <Post[]> in fetchJson<Post[]>(url)?',
        options: ['URL을 검증한다', '반환되는 데이터의 타입을 Post[]로 지정한다', '요청을 반복한다', '에러를 무시한다'],
        optionsEn: ['Validates the URL', 'Specifies the returned data type as Post[]', 'Repeats the request', 'Ignores errors'],
        correctIndex: 1,
        explanation: '제네릭 인자로 반환 타입을 Post[]로 지정해, 호출 결과가 Post 배열로 추론되고 자동완성·타입 검사가 적용됩니다.',
        explanationEn: 'The generic argument sets the return type to Post[], so the result is inferred as an array of Post with autocomplete and type checking.'
      }
    },
    {
      title: '실습 예제: 제네릭 List 컴포넌트',
      titleEn: 'Practice: Generic List Component',
      content: '제네릭을 사용해 어떤 타입의 배열이든 렌더링할 수 있는 재사용 List 컴포넌트를 만들어 봅니다. renderItem과 keyOf를 props로 받아 타입 안전성을 유지하면서 유연하게 동작합니다.',
      contentEn: 'Use generics to build a reusable List component that can render an array of any type. It takes renderItem and keyOf as props, staying flexible while preserving type safety.',
      code: `interface ListProps<T> {
  items: T[];
  keyOf: (item: T) => string | number;
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, keyOf, renderItem }: ListProps<T>) {
  return <ul>{items.map(item => <li key={keyOf(item)}>{renderItem(item)}</li>)}</ul>;
}

interface User { id: number; name: string; }

function UserList({ users }: { users: User[] }) {
  return (
    <List
      items={users}
      keyOf={u => u.id}
      renderItem={u => <strong>{u.name}</strong>}  // u는 User로 추론됨
    />
  );
}`,
      codeLanguage: 'tsx'
    }
  ]
};

export default chapter;
