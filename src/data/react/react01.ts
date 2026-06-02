import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-jsx',
  chapter: 1,
  titleKey: 'react01',
  sections: [
    {
      title: 'React와 JSX',
      titleEn: 'React and JSX',
      content: 'React는 UI를 컴포넌트 단위로 구성하는 JavaScript 라이브러리입니다. JSX는 JavaScript 안에서 HTML과 유사한 문법을 사용할 수 있게 해주는 확장 문법입니다. 중괄호 {}를 사용하여 JavaScript 표현식을 삽입하며, 컴포넌트는 반드시 하나의 부모 요소(또는 <>...</> 프래그먼트)를 반환해야 합니다.',
      contentEn: 'React is a JavaScript library for building UIs with components. JSX is a syntax extension that allows HTML-like syntax in JavaScript. Use curly braces {} to embed JavaScript expressions, and a component must return a single parent element (or a <>...</> fragment).',
      code: `// React 컴포넌트 예제
function Welcome({ name }) {
  const greeting = \`안녕하세요, \${name}님!\`;
  const isLoggedIn = true;

  return (
    <div>
      <h2>{greeting}</h2>
      {isLoggedIn ? (
        <p style={{ color: '#00B894' }}>로그인 상태입니다.</p>
      ) : (
        <p style={{ color: '#E17055' }}>로그인이 필요합니다.</p>
      )}
      <ul>
        {['HTML', 'CSS', 'JS'].map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}`,
      codeLanguage: 'jsx',
      quiz: {
        question: 'JSX에서 JavaScript 표현식을 삽입할 때 사용하는 기호는?',
        questionEn: 'What symbol is used to embed JavaScript expressions in JSX?',
        options: ['소괄호 ()', '중괄호 {}', '대괄호 []', '꺾쇠 <>'],
        optionsEn: ['Parentheses ()', 'Curly braces {}', 'Brackets []', 'Angle brackets <>'],
        correctIndex: 1,
        explanation: 'JSX 안에서는 중괄호 {} 안에 변수, 함수 호출, 삼항 연산자 등 JavaScript 표현식을 넣을 수 있습니다.',
        explanationEn: 'Inside JSX, you can place JavaScript expressions such as variables, function calls, and ternary operators within curly braces {}.'
      }
    },
    {
      title: 'Props로 데이터 전달',
      titleEn: 'Passing Data with Props',
      content: 'Props(properties)는 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달하는 방법입니다. 자식은 props를 읽기 전용으로 받으며 직접 수정할 수 없습니다. 구조 분해 할당으로 필요한 값만 꺼내 쓰고, 매개변수에 기본값을 지정할 수도 있습니다.',
      contentEn: 'Props (properties) are how a parent component passes data to a child component. The child receives props as read-only and cannot modify them directly. Use destructuring to extract only the needed values, and you can set default values on parameters.',
      code: `// 자식 컴포넌트 - props로 데이터 받기
function ProductCard({ name, price, sale = false }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{price.toLocaleString()}원</p>
      {sale && <span className="badge">세일!</span>}
    </div>
  );
}

// 부모 컴포넌트 - props로 데이터 전달
function Shop() {
  return (
    <div>
      <ProductCard name="키보드" price={89000} sale={true} />
      <ProductCard name="마우스" price={32000} />
    </div>
  );
}`,
      codeLanguage: 'jsx',
      quiz: {
        question: 'React에서 props의 특징으로 올바른 것은?',
        questionEn: 'Which is correct about props in React?',
        options: ['자식이 자유롭게 수정할 수 있다', '읽기 전용이며 직접 수정할 수 없다', '부모에게만 전달된다', '숫자만 전달할 수 있다'],
        optionsEn: ['The child can freely modify them', 'Read-only and cannot be modified directly', 'Only passed to parents', 'Only numbers can be passed'],
        correctIndex: 1,
        explanation: 'props는 읽기 전용(immutable)입니다. 자식 컴포넌트는 받은 props를 직접 변경할 수 없습니다.',
        explanationEn: 'props are read-only (immutable). A child component cannot directly modify the props it receives.'
      }
    },
    {
      title: '리스트 렌더링과 key',
      titleEn: 'List Rendering and key',
      content: '배열 데이터를 화면에 표시할 때는 map() 메서드로 각 항목을 JSX로 변환합니다. 이때 각 요소에 고유한 key 속성을 지정해야 React가 변경된 항목을 효율적으로 추적할 수 있습니다. 배열 인덱스보다는 고유 id를 key로 사용하는 것이 권장됩니다.',
      contentEn: 'To render array data, use the map() method to transform each item into JSX. Each element needs a unique key attribute so React can efficiently track changes. Using a unique id as the key is preferred over the array index.',
      code: `function TodoList() {
  const todos = [
    { id: 1, text: 'React 배우기', done: true },
    { id: 2, text: 'TypeScript 배우기', done: false },
    { id: 3, text: '프로젝트 만들기', done: false }
  ];

  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.done ? 'line-through' : 'none'
          }}
        >
          {todo.done ? '✅' : '⬜'} {todo.text}
        </li>
      ))}
    </ul>
  );
}`,
      codeLanguage: 'jsx',
      quiz: {
        question: '리스트를 map()으로 렌더링할 때 각 항목에 key를 지정하는 이유는?',
        questionEn: 'Why specify a key for each item when rendering a list with map()?',
        options: ['CSS 스타일링을 위해', 'React가 변경된 항목을 효율적으로 추적하기 위해', '항목을 정렬하기 위해', 'key는 선택 사항이라 필요 없다'],
        optionsEn: ['For CSS styling', 'So React can efficiently track changed items', 'To sort items', 'key is optional and unnecessary'],
        correctIndex: 1,
        explanation: 'key는 React가 어떤 항목이 추가/변경/삭제되었는지 식별하여 렌더링 성능을 높이는 데 사용됩니다.',
        explanationEn: 'key helps React identify which items were added/changed/removed, improving rendering performance.'
      }
    },
    {
      title: '실습 예제: 별점 표시 컴포넌트',
      titleEn: 'Practice: Star Rating Component',
      content: 'props로 받은 점수를 기반으로 별(★)을 채워 표시하는 컴포넌트를 만들어 봅니다. 배열 생성과 map, 조건부 스타일을 종합한 연습입니다. rating 값을 바꿔 재사용해 보세요.',
      contentEn: 'Build a component that fills stars (★) based on a score passed via props. It combines array creation, map, and conditional styling. Reuse it by changing the rating value.',
      code: `function StarRating({ rating, max = 5 }) {
  // 0..max-1 인덱스 배열을 만들어 채움 여부 판단
  return (
    <div aria-label={\`\${rating} / \${max}\`}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} style={{ color: i < rating ? '#FDCB6E' : '#ddd', fontSize: 24 }}>
          ★
        </span>
      ))}
      <span style={{ marginLeft: 8, color: '#666' }}>{rating}/{max}</span>
    </div>
  );
}

function Reviews() {
  return (
    <div>
      <StarRating rating={5} />
      <StarRating rating={3} />
      <StarRating rating={4} max={5} />
    </div>
  );
}`,
      codeLanguage: 'jsx'
    }
  ]
};

export default chapter;
