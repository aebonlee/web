import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-generics',
  chapter: 2,
  titleKey: 'ts02',
  sections: [
    {
      title: '제네릭(Generics)',
      titleEn: 'Generics',
      content: '제네릭은 타입을 매개변수처럼 사용하여 재사용 가능한 코드를 작성합니다. 함수, 인터페이스, 클래스에 적용할 수 있으며, 타입 안전성을 유지하면서 유연한 코드를 만들 수 있습니다. extends로 타입에 제약을 걸 수도 있습니다.',
      contentEn: 'Generics use types as parameters to write reusable code. They can be applied to functions, interfaces, and classes, creating flexible code while maintaining type safety. You can also constrain types with extends.',
      code: `// 제네릭 함수
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNum = getFirst([1, 2, 3]);      // number
const firstStr = getFirst(["a", "b"]);     // string

// 제네릭 인터페이스
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User { id: number; name: string; }

const response: ApiResponse<User> = {
  data: { id: 1, name: "홍길동" },
  status: 200,
  message: "성공"
};

// 제네릭 제약 (extends)
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
getLength("hello");    // 5
getLength([1, 2, 3]);  // 3`,
      codeLanguage: 'typescript',
      quiz: {
        question: '제네릭에서 <T extends { length: number }>가 의미하는 것은?',
        questionEn: 'What does <T extends { length: number }> mean in generics?',
        options: ['T는 항상 number여야 한다', 'T는 length 속성을 가진 타입으로 제한된다', 'T는 배열만 가능하다', 'T는 무시된다'],
        optionsEn: ['T must always be number', 'T is constrained to types having a length property', 'T can only be an array', 'T is ignored'],
        correctIndex: 1,
        explanation: 'extends는 제네릭 타입에 제약을 거는 문법으로, 여기서는 length 속성을 가진 타입(문자열, 배열 등)만 허용합니다.',
        explanationEn: 'extends constrains a generic type; here it allows only types with a length property (strings, arrays, etc.).'
      }
    },
    {
      title: '유틸리티 타입',
      titleEn: 'Utility Types',
      content: 'TypeScript는 기존 타입을 변형해 새 타입을 만드는 유틸리티 타입을 내장하고 있습니다. Partial<T>는 모든 속성을 선택적으로, Required<T>는 모두 필수로, Pick<T, K>는 일부 속성만, Omit<T, K>는 특정 속성을 제외하여 타입을 만듭니다.',
      contentEn: 'TypeScript provides built-in utility types that transform existing types. Partial<T> makes all properties optional, Required<T> makes all required, Pick<T, K> selects some properties, and Omit<T, K> excludes specific properties.',
      code: `interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Partial - 모든 속성 선택적 (수정 시 유용)
function updateUser(id: number, changes: Partial<User>) {
  // changes는 일부 속성만 있어도 됨
}
updateUser(1, { name: '새이름' });

// Pick - 일부 속성만 추출
type UserPreview = Pick<User, 'id' | 'name'>;
const preview: UserPreview = { id: 1, name: '홍길동' };

// Omit - 특정 속성 제외 (비밀번호 숨기기)
type PublicUser = Omit<User, 'password'>;
const pub: PublicUser = { id: 1, name: '홍길동', email: 'a@b.com' };`,
      codeLanguage: 'typescript',
      quiz: {
        question: 'User 타입에서 password를 제외한 타입을 만드는 유틸리티 타입은?',
        questionEn: 'Which utility type creates a type excluding password from User?',
        options: ['Pick<User, "password">', 'Omit<User, "password">', 'Partial<User>', 'Required<User>'],
        optionsEn: ['Pick<User, "password">', 'Omit<User, "password">', 'Partial<User>', 'Required<User>'],
        correctIndex: 1,
        explanation: 'Omit<T, K>는 타입 T에서 지정한 속성 K를 제외한 새 타입을 만듭니다. 반대로 Pick은 지정한 속성만 추출합니다.',
        explanationEn: 'Omit<T, K> creates a new type from T excluding the specified property K. Conversely, Pick extracts only the specified properties.'
      }
    },
    {
      title: '타입 가드와 좁히기',
      titleEn: 'Type Guards and Narrowing',
      content: '유니온 타입을 다룰 때 typeof, instanceof, in 연산자 등으로 타입을 좁히면(narrowing) TypeScript가 각 분기에서 정확한 타입을 추론합니다. 사용자 정의 타입 가드(value is Type)로 더 복잡한 검사도 만들 수 있습니다.',
      contentEn: 'When handling union types, narrowing with typeof, instanceof, or the in operator lets TypeScript infer the exact type in each branch. You can also create more complex checks with user-defined type guards (value is Type).',
      code: `// typeof로 좁히기
function formatValue(value: string | number): string {
  if (typeof value === 'number') {
    return value.toFixed(2);   // 여기서 value는 number
  }
  return value.toUpperCase();  // 여기서 value는 string
}

// in 연산자로 좁히기
type Cat = { meow: () => void };
type Dog = { bark: () => void };

function speak(animal: Cat | Dog) {
  if ('meow' in animal) {
    animal.meow();   // Cat으로 좁혀짐
  } else {
    animal.bark();   // Dog로 좁혀짐
  }
}

// 사용자 정의 타입 가드
function isString(v: unknown): v is string {
  return typeof v === 'string';
}`,
      codeLanguage: 'typescript',
      quiz: {
        question: 'string | number 유니온에서 number 분기로 타입을 좁히는 방법은?',
        questionEn: 'How do you narrow to the number branch in a string | number union?',
        options: ['value === number', 'typeof value === "number"', 'value instanceof Number', 'value as number'],
        optionsEn: ['value === number', 'typeof value === "number"', 'value instanceof Number', 'value as number'],
        correctIndex: 1,
        explanation: 'typeof value === "number" 검사를 통과한 분기에서는 TypeScript가 value를 number로 좁혀 추론합니다.',
        explanationEn: 'In the branch passing the typeof value === "number" check, TypeScript narrows value to number.'
      }
    },
    {
      title: '실습 예제: 제네릭 페이지네이션 타입',
      titleEn: 'Practice: Generic Pagination Type',
      content: '제네릭과 유틸리티 타입을 조합해 어떤 데이터든 담을 수 있는 페이지네이션 응답 타입을 만들어 봅니다. 실제 API 설계에서 자주 쓰는 재사용 가능한 패턴입니다.',
      contentEn: 'Combine generics and utility types to build a pagination response type that can hold any data. It is a reusable pattern frequently used in real API design.',
      code: `// 어떤 항목 타입이든 담는 페이지네이션 응답
interface Paginated<T> {
  items: T[];
  page: number;
  total: number;
}

interface Product { id: number; name: string; price: number; }

// 목록에는 가격을 뺀 요약 타입만 노출
type ProductSummary = Omit<Product, 'price'>;

const res: Paginated<ProductSummary> = {
  items: [{ id: 1, name: '키보드' }, { id: 2, name: '마우스' }],
  page: 1,
  total: 42
};

function firstName(r: Paginated<ProductSummary>): string | undefined {
  return r.items[0]?.name;
}`,
      codeLanguage: 'typescript'
    }
  ]
};

export default chapter;
