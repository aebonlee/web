import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '04-es6',
  chapter: 4,
  titleKey: 'js04',
  sections: [
    {
      title: '구조 분해와 전개 구문',
      titleEn: 'Destructuring and Spread',
      content: '구조 분해 할당(destructuring)으로 배열·객체에서 값을 간결하게 꺼냅니다. 전개 구문(...)은 배열/객체를 펼쳐 복사하거나 병합할 때 사용하고, 나머지 매개변수(rest)로 가변 인자를 받습니다.',
      contentEn: 'Destructuring extracts values from arrays/objects concisely. The spread syntax (...) copies or merges arrays/objects, and rest parameters capture variadic arguments.',
      code: `<div id="out"></div>
<script>
  // 객체 구조 분해
  const user = { name: '홍길동', age: 30, city: '서울' };
  const { name, age } = user;

  // 배열 구조 분해
  const [first, second] = ['A', 'B', 'C'];

  // 전개 구문 - 병합
  const merged = { ...user, job: '개발자' };

  // 나머지 매개변수
  const sum = (...nums) => nums.reduce((a, b) => a + b, 0);

  document.getElementById('out').innerHTML =
    '<p>' + name + ', ' + age + '세 / ' + first + second + '</p>' +
    '<p>job: ' + merged.job + ' / sum: ' + sum(1, 2, 3, 4) + '</p>';
</script>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: 'const { name } = user; 가 하는 일은?',
        questionEn: 'What does const { name } = user; do?',
        options: ['user를 name으로 이름 변경', 'user 객체의 name 속성을 꺼내 변수 name에 할당', 'name이라는 새 객체 생성', '오류 발생'],
        optionsEn: ['Renames user to name', 'Extracts the name property of user into a variable name', 'Creates a new object name', 'Throws an error'],
        correctIndex: 1,
        explanation: '객체 구조 분해로, user.name 값을 동일한 이름의 변수 name에 할당합니다.',
        explanationEn: 'This is object destructuring; it assigns user.name to a variable named name.'
      }
    },
    {
      title: '배열 고차 함수',
      titleEn: 'Array Higher-Order Functions',
      content: 'map(변환), filter(걸러내기), reduce(누적), find(찾기), some/every(조건 검사)는 반복문 없이 데이터를 선언적으로 처리하는 핵심 메서드입니다. 메서드 체이닝으로 여러 단계를 연결할 수 있습니다.',
      contentEn: 'map (transform), filter (select), reduce (accumulate), find (search), and some/every (condition checks) are core methods for processing data declaratively without loops. They can be chained across multiple steps.',
      code: `<div id="out"></div>
<script>
  const products = [
    { name: '키보드', price: 89000 },
    { name: '마우스', price: 32000 },
    { name: '모니터', price: 210000 }
  ];

  // 5만원 이상 상품명만, 가격 합계
  const expensive = products
    .filter(p => p.price >= 50000)
    .map(p => p.name);

  const total = products.reduce((sum, p) => sum + p.price, 0);

  document.getElementById('out').innerHTML =
    '<p>5만원 이상: ' + expensive.join(', ') + '</p>' +
    '<p>총합: ' + total.toLocaleString() + '원</p>';
</script>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: '배열의 각 요소를 변환해 같은 길이의 새 배열을 반환하는 메서드는?',
        questionEn: 'Which method transforms each element and returns a new array of the same length?',
        options: ['filter()', 'map()', 'reduce()', 'forEach()'],
        optionsEn: ['filter()', 'map()', 'reduce()', 'forEach()'],
        correctIndex: 1,
        explanation: 'map()은 각 요소에 콜백을 적용한 결과로 같은 길이의 새 배열을 만듭니다. filter는 조건에 맞는 일부만, reduce는 단일 값으로 누적합니다.',
        explanationEn: 'map() builds a new array of the same length from the callback result for each element. filter selects a subset and reduce accumulates to a single value.'
      }
    },
    {
      title: '템플릿 리터럴과 단축 문법',
      titleEn: 'Template Literals and Shorthand',
      content: '백틱(`)으로 감싼 템플릿 리터럴은 ${} 안에 표현식을 넣고 여러 줄 문자열을 만듭니다. 옵셔널 체이닝(?.)과 널 병합(??)으로 안전하게 값에 접근하고, 단축 속성·화살표 함수로 코드를 간결하게 작성합니다.',
      contentEn: 'Template literals wrapped in backticks embed expressions in ${} and create multi-line strings. Optional chaining (?.) and nullish coalescing (??) access values safely, and shorthand properties and arrow functions keep code concise.',
      code: `<div id="out"></div>
<script>
  const user = { name: '지은', address: null };

  // 템플릿 리터럴
  const greeting = \`안녕하세요, \${user.name}님!\`;

  // 옵셔널 체이닝 + 널 병합
  const city = user.address?.city ?? '주소 미등록';

  document.getElementById('out').innerHTML =
    '<p>' + greeting + '</p><p>도시: ' + city + '</p>';
</script>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: 'user.address?.city 에서 ?. (옵셔널 체이닝)의 역할은?',
        questionEn: 'What does ?. (optional chaining) do in user.address?.city?',
        options: ['항상 에러를 던진다', 'address가 null/undefined면 에러 없이 undefined를 반환', 'city를 강제로 생성', '비동기로 동작'],
        optionsEn: ['Always throws an error', 'Returns undefined without error if address is null/undefined', 'Forcibly creates city', 'Runs asynchronously'],
        correctIndex: 1,
        explanation: '옵셔널 체이닝은 앞 값이 null/undefined일 때 에러를 던지지 않고 undefined를 반환하여 안전하게 중첩 속성에 접근합니다.',
        explanationEn: 'Optional chaining returns undefined instead of throwing when the preceding value is null/undefined, safely accessing nested properties.'
      }
    },
    {
      title: '실습 예제: 장바구니 합계 계산기',
      titleEn: 'Practice: Cart Total Calculator',
      content: 'map·filter·reduce 등 배열 메서드와 구조 분해를 종합해, 체크된 상품의 합계를 실시간으로 계산하는 장바구니를 만들어 봅니다. 체크박스를 켜고 끄며 합계 변화를 확인하세요.',
      contentEn: 'Combine array methods (map, filter, reduce) and destructuring to build a cart that calculates the total of checked items in real time. Toggle the checkboxes and watch the total change.',
      code: `<div id="cart" style="font-family:sans-serif;max-width:320px"></div>
<h3 id="total" style="font-family:sans-serif"></h3>
<script>
  const products = [
    { id: 1, name: '키보드', price: 89000, checked: true },
    { id: 2, name: '마우스', price: 32000, checked: true },
    { id: 3, name: '모니터', price: 210000, checked: false }
  ];

  const cart = document.getElementById('cart');
  const totalEl = document.getElementById('total');

  function render() {
    cart.innerHTML = products.map(({ id, name, price, checked }) =>
      '<label style="display:block;margin:4px 0">' +
      '<input type="checkbox" data-id="' + id + '"' + (checked ? ' checked' : '') + '> ' +
      name + ' — ' + price.toLocaleString() + '원</label>'
    ).join('');

    const total = products
      .filter(p => p.checked)
      .reduce((sum, p) => sum + p.price, 0);
    totalEl.textContent = '합계: ' + total.toLocaleString() + '원';

    cart.querySelectorAll('input').forEach(box => {
      box.addEventListener('change', e => {
        const id = Number(e.target.dataset.id);
        const item = products.find(p => p.id === id);
        item.checked = e.target.checked;
        render();
      });
    });
  }

  render();
</script>`,
      codeLanguage: 'html',
      livePreview: true
    }
  ]
};

export default chapter;
