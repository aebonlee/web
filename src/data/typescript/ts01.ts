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
      codeLanguage: 'typescript',
      quiz: {
        question: 'TypeScript에서 선택적 속성을 표시하는 기호는?',
        questionEn: 'What symbol marks optional properties in TypeScript?',
        options: ['!', '?', '*', '&'],
        optionsEn: ['!', '?', '*', '&'],
        correctIndex: 1,
        explanation: '속성명 뒤에 ?를 붙이면 해당 속성이 선택적(있어도 되고 없어도 됨)임을 나타냅니다.',
        explanationEn: 'Adding ? after a property name indicates it is optional (may or may not exist).'
      }
    },
    {
      title: 'interface와 type',
      titleEn: 'interface and type',
      content: '객체의 형태를 정의할 때 interface와 type 별칭을 모두 사용할 수 있습니다. interface는 extends로 확장하거나 같은 이름으로 선언을 병합할 수 있고, type은 유니온·교차·튜플 등 더 다양한 형태를 표현할 수 있습니다. 객체 구조에는 주로 interface, 그 외에는 type을 권장합니다.',
      contentEn: 'You can define the shape of an object with both interface and type aliases. interface can be extended with extends or merged across declarations of the same name, while type can express more varied shapes such as unions, intersections, and tuples. interface is preferred for object structures, type for the rest.',
      code: `// interface - 확장 가능
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = { name: '바둑이', breed: '진돗개' };

// type - 유니온, 교차, 튜플
type ID = string | number;          // 유니온
type Point = [number, number];      // 튜플

type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged;          // 교차(intersection)

const p: Person = { name: '홍길동', age: 30 };`,
      codeLanguage: 'typescript',
      quiz: {
        question: 'interface와 type의 차이로 올바른 것은?',
        questionEn: 'Which is a correct difference between interface and type?',
        options: ['type만 객체를 정의할 수 있다', 'interface는 같은 이름으로 선언 병합이 가능하다', 'interface는 유니온 타입을 만들 수 있다', '둘은 완전히 동일하다'],
        optionsEn: ['Only type can define objects', 'interface supports declaration merging with the same name', 'interface can create union types', 'They are completely identical'],
        correctIndex: 1,
        explanation: 'interface는 같은 이름으로 여러 번 선언하면 자동으로 병합되며 extends로 확장됩니다. 유니온·튜플 표현은 type이 더 적합합니다.',
        explanationEn: 'interface merges automatically when declared multiple times with the same name and extends with extends. type is more suitable for unions and tuples.'
      }
    },
    {
      title: '함수 타입과 제네릭 미리보기',
      titleEn: 'Function Types and Generics Preview',
      content: '함수의 매개변수와 반환 타입을 명시할 수 있으며, 선택적 매개변수(?)와 기본값을 지정할 수 있습니다. 화살표 함수에도 타입을 붙일 수 있고, 함수 타입 자체를 type으로 정의해 콜백에 활용합니다.',
      contentEn: 'You can specify a function\'s parameter and return types, with optional parameters (?) and default values. Arrow functions can be typed too, and you can define a function type itself with type for use in callbacks.',
      code: `// 선택적 매개변수와 기본값
function greet(name: string, greeting: string = "안녕"): string {
  return \`\${greeting}, \${name}님!\`;
}

// 화살표 함수 타입
const multiply = (a: number, b: number): number => a * b;

// 함수 타입 별칭 (콜백)
type Comparator = (a: number, b: number) => number;

const numbers = [3, 1, 2];
const asc: Comparator = (a, b) => a - b;
numbers.sort(asc); // [1, 2, 3]

// 반환값이 없으면 void
function log(message: string): void {
  console.log(message);
}`,
      codeLanguage: 'typescript',
      quiz: {
        question: '반환값이 없는 함수의 반환 타입으로 적절한 것은?',
        questionEn: 'What is the appropriate return type for a function that returns nothing?',
        options: ['null', 'void', 'never', 'undefined만 가능'],
        optionsEn: ['null', 'void', 'never', 'only undefined'],
        correctIndex: 1,
        explanation: '명시적으로 값을 반환하지 않는 함수의 반환 타입은 void로 표기합니다.',
        explanationEn: 'A function that does not explicitly return a value has the return type void.'
      }
    }
  ]
};

export default chapter;
