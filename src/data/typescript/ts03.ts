import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '03-advanced-types',
  chapter: 3,
  titleKey: 'ts03',
  sections: [
    {
      title: 'enum과 리터럴 타입',
      titleEn: 'Enums and Literal Types',
      content: 'enum은 이름이 있는 상수 집합을 정의합니다. 다만 번들 크기와 트리셰이킹 측면에서, 유니온 리터럴 타입(as const)이 더 가볍고 권장되는 경우가 많습니다. 두 방식의 차이를 이해하고 상황에 맞게 선택합니다.',
      contentEn: 'enum defines a named set of constants. However, for bundle size and tree-shaking, union literal types (as const) are often lighter and recommended. Understand the difference and choose appropriately.',
      code: `// enum
enum Role { Admin = 'ADMIN', User = 'USER', Guest = 'GUEST' }
const r: Role = Role.Admin;

// 유니온 리터럴 (더 가벼움)
type Status = 'pending' | 'active' | 'done';
const s: Status = 'active';

// as const 객체 → 리터럴 유니온 추출
const COLORS = { red: '#f00', blue: '#00f' } as const;
type ColorKey = keyof typeof COLORS;   // 'red' | 'blue'
type ColorValue = typeof COLORS[ColorKey]; // '#f00' | '#00f'`,
      codeLanguage: 'typescript',
      quiz: {
        question: "type Status = 'pending' | 'active' | 'done' 는 어떤 타입인가요?",
        questionEn: "What kind of type is type Status = 'pending' | 'active' | 'done'?",
        options: ['enum 타입', '문자열 리터럴 유니온 타입', '제네릭 타입', '튜플 타입'],
        optionsEn: ['An enum type', 'A string literal union type', 'A generic type', 'A tuple type'],
        correctIndex: 1,
        explanation: '특정 문자열 값들을 |로 결합한 문자열 리터럴 유니온 타입으로, 해당 값들만 허용합니다.',
        explanationEn: 'It is a string literal union type combining specific string values with |, allowing only those values.'
      }
    },
    {
      title: '맵드 타입과 조건부 타입',
      titleEn: 'Mapped and Conditional Types',
      content: '맵드 타입은 [K in keyof T] 문법으로 기존 타입의 속성을 순회하며 새 타입을 만듭니다. 조건부 타입(T extends U ? X : Y)은 타입에 따라 분기합니다. 유틸리티 타입(Partial, Readonly 등)도 내부적으로 이 기능으로 구현됩니다.',
      contentEn: 'Mapped types iterate over an existing type\'s properties with the [K in keyof T] syntax to build new types. Conditional types (T extends U ? X : Y) branch based on a type. Utility types (Partial, Readonly, etc.) are built on these internally.',
      code: `interface User { id: number; name: string; }

// 맵드 타입 - 모든 속성을 읽기 전용으로
type ReadonlyUser = { readonly [K in keyof User]: User[K] };

// 맵드 타입 - 모든 속성을 선택적으로 (Partial 구현)
type MyPartial<T> = { [K in keyof T]?: T[K] };

// 조건부 타입
type IsString<T> = T extends string ? 'yes' : 'no';
type A = IsString<string>;  // 'yes'
type B = IsString<number>;  // 'no'`,
      codeLanguage: 'typescript',
      quiz: {
        question: '조건부 타입 T extends U ? X : Y 에서 T가 U에 할당 가능하면 결과는?',
        questionEn: 'In the conditional type T extends U ? X : Y, what is the result if T is assignable to U?',
        options: ['Y', 'X', 'never', 'unknown'],
        optionsEn: ['Y', 'X', 'never', 'unknown'],
        correctIndex: 1,
        explanation: 'T가 U에 할당 가능(조건 참)하면 X, 아니면 Y가 됩니다. 삼항 연산자와 동일한 구조입니다.',
        explanationEn: 'If T is assignable to U (condition true) the result is X, otherwise Y — the same structure as a ternary operator.'
      }
    },
    {
      title: 'unknown, never와 타입 단언',
      titleEn: 'unknown, never, and Type Assertions',
      content: 'unknown은 any보다 안전한 최상위 타입으로, 사용 전 타입 검사를 강제합니다. never는 절대 발생하지 않는 값을 의미해 완전성 검사에 쓰입니다. as로 타입을 단언할 수 있지만 남용하면 타입 안전성을 해치므로 주의합니다.',
      contentEn: 'unknown is a safer top type than any, forcing a type check before use. never represents a value that never occurs, used in exhaustiveness checks. You can assert a type with as, but overuse undermines type safety, so be careful.',
      code: `// unknown - 검사 후 사용
function handle(value: unknown) {
  if (typeof value === 'string') {
    return value.toUpperCase();   // 여기서 string으로 좁혀짐
  }
  return String(value);
}

// never - 완전성 검사
type Shape = 'circle' | 'square';
function area(s: Shape): number {
  switch (s) {
    case 'circle': return 3.14;
    case 'square': return 4;
    default:
      const _exhaustive: never = s;  // 누락된 케이스가 있으면 컴파일 에러
      return _exhaustive;
  }
}`,
      codeLanguage: 'typescript',
      quiz: {
        question: 'any 대신 unknown을 쓰는 이유는?',
        questionEn: 'Why use unknown instead of any?',
        options: ['더 빠르게 동작해서', '사용 전에 타입 검사를 강제해 더 안전해서', '문자열만 담을 수 있어서', '차이가 없어서'],
        optionsEn: ['It runs faster', 'It is safer by forcing a type check before use', 'It can only hold strings', 'There is no difference'],
        correctIndex: 1,
        explanation: 'unknown은 어떤 값이든 받지만, 좁히기(narrowing) 없이는 사용할 수 없어 any보다 타입 안전합니다.',
        explanationEn: 'unknown accepts any value but cannot be used without narrowing, making it type-safer than any.'
      }
    },
    {
      title: '실습 예제: 판별 유니온으로 상태 처리',
      titleEn: 'Practice: Handling State with a Discriminated Union',
      content: '공통 필드(status)를 판별자로 갖는 유니온 타입을 만들어, switch로 각 상태를 안전하게 처리해 봅니다. API 로딩 상태를 표현하는 실전 패턴으로, 빠진 케이스를 never로 잡아낼 수 있습니다.',
      contentEn: 'Build a union type with a common discriminant field (status) and handle each state safely with switch. This is a real-world pattern for representing API loading states, where missing cases are caught with never.',
      code: `type Fetch<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

function render(state: Fetch<string[]>): string {
  switch (state.status) {
    case 'loading':
      return '불러오는 중...';
    case 'success':
      return state.data.join(', ');   // 여기서만 data 접근 가능
    case 'error':
      return '에러: ' + state.message; // 여기서만 message 접근 가능
    default:
      const _exhaustive: never = state;
      return _exhaustive;
  }
}

render({ status: 'success', data: ['A', 'B'] });`,
      codeLanguage: 'typescript'
    }
  ]
};

export default chapter;
