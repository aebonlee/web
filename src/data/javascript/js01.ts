import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-basics',
  chapter: 1,
  titleKey: 'js01',
  sections: [
    {
      title: 'JavaScript 소개',
      titleEn: 'Introduction to JavaScript',
      content: 'JavaScript는 웹 페이지에 동적인 기능을 추가하는 프로그래밍 언어입니다. 변수 선언은 let(변경 가능), const(상수), var(구식)를 사용합니다. ES6+에서는 let과 const 사용을 권장합니다.',
      contentEn: 'JavaScript is a programming language that adds dynamic functionality to web pages. Variable declarations use let (mutable), const (constant), and var (legacy). ES6+ recommends using let and const.',
      code: `<script>
  // 변수 선언
  const name = "DreamIT";
  let count = 0;

  // 함수
  function greet(who) {
    return "안녕하세요, " + who + "!";
  }

  // 화면에 출력
  document.getElementById("output").textContent = greet(name);

  // 카운터
  document.getElementById("btn").addEventListener("click", function() {
    count++;
    document.getElementById("counter").textContent = count;
  });
</script>

<p id="output">로딩 중...</p>
<button id="btn" style="padding:8px 16px;cursor:pointer">클릭: <span id="counter">0</span></button>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: 'ES6+에서 권장하는 변수 선언 키워드 2가지는?',
        questionEn: 'What are the 2 recommended variable declaration keywords in ES6+?',
        options: ['var와 let', 'let과 const', 'var와 const', 'function과 let'],
        optionsEn: ['var and let', 'let and const', 'var and const', 'function and let'],
        correctIndex: 1,
        explanation: 'let은 재할당 가능한 변수, const는 재할당 불가능한 상수에 사용합니다.',
        explanationEn: 'let is for reassignable variables, const is for non-reassignable constants.'
      }
    },
    {
      title: '조건문과 반복문',
      titleEn: 'Conditionals and Loops',
      content: 'if/else 조건문으로 분기 처리하고, for/while/for...of 반복문으로 반복 작업을 수행합니다. 삼항 연산자(?:)는 간단한 조건 표현에 유용합니다.',
      contentEn: 'Use if/else for branching and for/while/for...of loops for repetitive tasks. The ternary operator (?:) is useful for simple conditional expressions.',
      code: `<div id="result"></div>
<script>
  const el = document.getElementById("result");
  let html = "";

  // 조건문
  const score = 85;
  const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
  html += "<p>점수: " + score + " → 등급: " + grade + "</p>";

  // for 반복문
  html += "<p>구구단 3단: ";
  for (let i = 1; i <= 9; i++) {
    html += "3×" + i + "=" + (3*i) + " ";
  }
  html += "</p>";

  // 배열 순회
  const fruits = ["사과", "바나나", "딸기"];
  html += "<ul>";
  for (const fruit of fruits) {
    html += "<li>" + fruit + "</li>";
  }
  html += "</ul>";

  el.innerHTML = html;
</script>`,
      codeLanguage: 'html',
      livePreview: true
    },
    {
      title: '실습 예제: 실시간 글자 수 카운터',
      titleEn: 'Practice: Live Character Counter',
      content: '변수·이벤트·조건문을 활용해 입력창의 글자 수를 실시간으로 세는 카운터를 만들어 봅니다. 100자를 넘으면 색이 빨갛게 바뀌도록 조건을 추가했습니다. 직접 입력해 보세요.',
      contentEn: 'Use variables, events, and conditionals to build a counter that counts characters in real time. A condition turns the color red when it exceeds 100 characters. Try typing.',
      code: `<textarea id="ta" rows="3" style="width:100%;box-sizing:border-box;padding:8px"
  placeholder="여기에 입력해 보세요..."></textarea>
<p id="count" style="font-family:sans-serif">0 / 100</p>
<script>
  const ta = document.getElementById("ta");
  const count = document.getElementById("count");
  const MAX = 100;

  ta.addEventListener("input", function() {
    const len = ta.value.length;
    count.textContent = len + " / " + MAX;
    count.style.color = len > MAX ? "#C8102E" : "#555";
  });
</script>`,
      codeLanguage: 'html',
      livePreview: true
    }
  ]
};

export default chapter;
