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
    }
  ]
};

export default chapter;
