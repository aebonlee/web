import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-types',
  chapter: 1,
  titleKey: 'ts01',
  sections: [
    {
      title: 'TypeScript 기초 타입',
      titleEn: 'TypeScript Basic Types',
      content: 'TypeScript는 JavaScript에 정적 타입을 추가한 언어입니다. 변수, 함수 매개변수, 반환값에 타입을 명시하여 코드의 안정성을 높입니다. 기본 타입: string, number, boolean, array, object, any, void, null, undefined.',
      contentEn: 'TypeScript adds static types to JavaScript. Specify types on variables, function parameters, and return values for better code reliability. Basic types: string, number, boolean, array, object, any, void, null, undefined.',
      code: `// 기본 타입
let name: string = "DreamIT";
let age: number = 25;
let isStudent: boolean = true;
let scores: number[] = [90, 85, 92];

// 함수 타입
function add(a: number, b: number): number {
  return a + b;
}

// 객체 타입
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // optional
}

const user: User = {
  id: 1,
  name: "홍길동",
  email: "hong@example.com"
};

// 유니온 타입
type Status = "pending" | "active" | "inactive";
let userStatus: Status = "active";`,
      codeLanguage: 'javascript',
      quiz: {
        question: 'TypeScript에서 선택적 속성을 표시하는 기호는?',
        questionEn: 'What symbol marks optional properties in TypeScript?',
        options: ['!', '?', '*', '&'],
        optionsEn: ['!', '?', '*', '&'],
        correctIndex: 1,
        explanation: '속성명 뒤에 ?를 붙이면 해당 속성이 선택적(있어도 되고 없어도 됨)임을 나타냅니다.',
        explanationEn: 'Adding ? after a property name indicates it is optional (may or may not exist).'
      }
    }
  ]
};

export default chapter;
