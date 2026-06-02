import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '03-async',
  chapter: 3,
  titleKey: 'js03',
  sections: [
    {
      title: '비동기 프로그래밍',
      titleEn: 'Asynchronous Programming',
      content: 'JavaScript는 싱글 스레드이지만 비동기 처리로 효율적인 작업이 가능합니다. Promise, async/await, fetch API를 사용하여 네트워크 요청, 타이머 등을 처리합니다.',
      contentEn: 'JavaScript is single-threaded but handles tasks efficiently with asynchronous processing. Use Promise, async/await, and fetch API for network requests, timers, etc.',
      code: `<div id="async-demo"></div>
<button id="fetchBtn" style="padding:8px 16px;cursor:pointer;margin:8px 0">데이터 가져오기</button>
<script>
  const el = document.getElementById("async-demo");

  // Promise 예제
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // async/await
  async function fetchData() {
    el.innerHTML = "<p>로딩 중...</p>";
    await delay(1000);

    // 시뮬레이션된 API 응답
    const data = [
      { name: "HTML", level: "기초" },
      { name: "CSS", level: "기초" },
      { name: "JavaScript", level: "중급" }
    ];

    let html = "<table border='1' cellpadding='8'>";
    html += "<tr><th>기술</th><th>레벨</th></tr>";
    data.forEach(item => {
      html += "<tr><td>" + item.name + "</td><td>" + item.level + "</td></tr>";
    });
    html += "</table>";
    el.innerHTML = html;
  }

  document.getElementById("fetchBtn").addEventListener("click", fetchData);
  el.innerHTML = "<p>버튼을 클릭하여 데이터를 가져오세요.</p>";
</script>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: 'async 함수 안에서 Promise를 기다리는 키워드는?',
        questionEn: 'What keyword waits for a Promise inside an async function?',
        options: ['wait', 'await', 'then', 'resolve'],
        optionsEn: ['wait', 'await', 'then', 'resolve'],
        correctIndex: 1,
        explanation: 'await 키워드는 async 함수 안에서만 사용할 수 있으며, Promise가 해결될 때까지 실행을 일시 중지합니다.',
        explanationEn: 'The await keyword can only be used inside async functions and pauses execution until the Promise resolves.'
      }
    },
    {
      title: '실습 예제: 실제 API 호출',
      titleEn: 'Practice: Calling a Real API',
      content: 'fetch와 async/await로 실제 공개 API에서 데이터를 받아 화면에 표시해 봅니다. try/catch로 에러도 처리합니다. 버튼을 눌러 무작위 사용자 정보를 불러오세요.',
      contentEn: 'Use fetch and async/await to retrieve data from a real public API and display it. Errors are handled with try/catch. Press the button to load random user info.',
      code: `<button id="load" style="padding:8px 16px;cursor:pointer;margin-bottom:8px">사용자 불러오기</button>
<div id="result" style="font-family:sans-serif"></div>
<script>
  const result = document.getElementById("result");

  async function loadUser() {
    result.innerHTML = "불러오는 중...";
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/" +
        (Math.floor(Math.random() * 10) + 1));
      if (!res.ok) throw new Error("HTTP " + res.status);
      const user = await res.json();
      result.innerHTML =
        "<strong>" + user.name + "</strong><br>" +
        "✉ " + user.email + "<br>🏢 " + user.company.name;
    } catch (err) {
      result.innerHTML = "<span style='color:#C8102E'>에러: " + err.message + "</span>";
    }
  }

  document.getElementById("load").addEventListener("click", loadUser);
</script>`,
      codeLanguage: 'html',
      livePreview: true
    }
  ]
};

export default chapter;
