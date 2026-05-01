import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-generics',
  chapter: 2,
  titleKey: 'ts02',
  sections: [
    {
      title: '제네릭(Generics)',
      titleEn: 'Generics',
      content: '제네릭은 타입을 매개변수처럼 사용하여 재사용 가능한 코드를 작성합니다. 함수, 인터페이스, 클래스에 적용할 수 있으며, 타입 안전성을 유지하면서 유연한 코드를 만들 수 있습니다.',
      contentEn: 'Generics use types as parameters to write reusable code. They can be applied to functions, interfaces, and classes, creating flexible code while maintaining type safety.',
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
      codeLanguage: 'javascript'
    }
  ]
};

export default chapter;
