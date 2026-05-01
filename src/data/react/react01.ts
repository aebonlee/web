import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-jsx',
  chapter: 1,
  titleKey: 'react01',
  sections: [
    {
      title: 'React와 JSX',
      titleEn: 'React and JSX',
      content: 'React는 UI를 컴포넌트 단위로 구성하는 JavaScript 라이브러리입니다. JSX는 JavaScript 안에서 HTML과 유사한 문법을 사용할 수 있게 해주는 확장 문법입니다. 중괄호 {}를 사용하여 JavaScript 표현식을 삽입합니다.',
      contentEn: 'React is a JavaScript library for building UIs with components. JSX is a syntax extension that allows HTML-like syntax in JavaScript. Use curly braces {} to embed JavaScript expressions.',
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
      codeLanguage: 'javascript'
    }
  ]
};

export default chapter;
