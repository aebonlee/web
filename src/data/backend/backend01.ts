import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-nodejs',
  chapter: 1,
  titleKey: 'backend01',
  sections: [
    {
      title: 'Node.js & Express 기초',
      titleEn: 'Node.js & Express Basics',
      content: 'Node.js는 브라우저 밖에서 JavaScript를 실행하는 런타임입니다. Express는 Node.js의 가장 인기 있는 웹 프레임워크로, REST API를 쉽게 구축할 수 있습니다. HTTP 메서드(GET/POST/PUT/DELETE)를 경로(route)에 매핑해 CRUD API를 만듭니다.',
      contentEn: 'Node.js is a runtime that executes JavaScript outside the browser. Express is the most popular Node.js web framework for easily building REST APIs. Map HTTP methods (GET/POST/PUT/DELETE) to routes to build CRUD APIs.',
      code: `// Express 서버 예제
const express = require('express');
const app = express();

app.use(express.json());

// GET - 목록 조회
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: '홍길동' },
    { id: 2, name: '김철수' }
  ]);
});

// POST - 생성
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ id: 3, name });
});

// PUT - 수정 / DELETE - 삭제
app.put('/api/users/:id', (req, res) => {
  res.json({ id: Number(req.params.id), name: req.body.name });
});
app.delete('/api/users/:id', (req, res) => {
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('서버 실행: http://localhost:3000');
});`,
      codeLanguage: 'javascript',
      quiz: {
        question: '새 리소스를 생성하는 데 일반적으로 사용하는 HTTP 메서드는?',
        questionEn: 'Which HTTP method is typically used to create a new resource?',
        options: ['GET', 'POST', 'DELETE', 'HEAD'],
        optionsEn: ['GET', 'POST', 'DELETE', 'HEAD'],
        correctIndex: 1,
        explanation: 'POST는 서버에 새 리소스를 생성할 때 사용하며, 성공 시 보통 201 Created 상태 코드를 반환합니다.',
        explanationEn: 'POST is used to create a new resource on the server and typically returns a 201 Created status on success.'
      }
    },
    {
      title: '미들웨어와 라우팅',
      titleEn: 'Middleware and Routing',
      content: '미들웨어는 요청(req)과 응답(res) 사이에서 실행되는 함수로, 로깅·인증·body 파싱 등을 처리합니다. next()를 호출해 다음 미들웨어로 넘깁니다. 라우터를 분리하면 기능별로 코드를 깔끔하게 모듈화할 수 있습니다.',
      contentEn: 'Middleware are functions that run between the request (req) and response (res), handling logging, authentication, body parsing, and more. Call next() to pass to the next middleware. Splitting routers lets you modularize code cleanly by feature.',
      code: `const express = require('express');
const app = express();

// 전역 미들웨어 - 모든 요청에 실행
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();   // 다음 미들웨어로 진행
});

// 인증 미들웨어
function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: '인증 필요' });
  next();
}

// 특정 라우트에만 미들웨어 적용
app.get('/api/profile', auth, (req, res) => {
  res.json({ name: '홍길동' });
});`,
      codeLanguage: 'javascript',
      quiz: {
        question: 'Express 미들웨어에서 다음 단계로 제어를 넘기기 위해 호출하는 함수는?',
        questionEn: 'Which function is called in Express middleware to pass control to the next step?',
        options: ['continue()', 'next()', 'res.send()', 'pass()'],
        optionsEn: ['continue()', 'next()', 'res.send()', 'pass()'],
        correctIndex: 1,
        explanation: 'next()를 호출하면 다음 미들웨어나 라우트 핸들러로 제어가 넘어갑니다. 호출하지 않으면 요청이 멈춥니다.',
        explanationEn: 'Calling next() passes control to the next middleware or route handler. Without it, the request hangs.'
      }
    },
    {
      title: '에러 처리와 상태 코드',
      titleEn: 'Error Handling and Status Codes',
      content: 'REST API는 적절한 HTTP 상태 코드로 결과를 알립니다. 200(성공), 201(생성), 400(잘못된 요청), 401(인증 필요), 404(없음), 500(서버 오류)이 대표적입니다. Express에서는 인자가 4개인 (err, req, res, next) 미들웨어로 에러를 한곳에서 처리합니다.',
      contentEn: 'A REST API signals results with appropriate HTTP status codes. Common ones are 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), and 500 (Server Error). In Express, a 4-argument (err, req, res, next) middleware handles errors in one place.',
      code: `app.get('/api/users/:id', (req, res, next) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: '잘못된 ID' });
  }
  const user = findUser(id);
  if (!user) {
    return res.status(404).json({ error: '사용자 없음' });
  }
  res.json(user);
});

// 에러 처리 미들웨어 (인자 4개) - 맨 마지막에 등록
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: '서버 오류가 발생했습니다.' });
});`,
      codeLanguage: 'javascript',
      quiz: {
        question: '요청한 리소스를 찾을 수 없을 때 반환하는 HTTP 상태 코드는?',
        questionEn: 'Which HTTP status code is returned when the requested resource is not found?',
        options: ['200', '400', '404', '500'],
        optionsEn: ['200', '400', '404', '500'],
        correctIndex: 2,
        explanation: '404 Not Found는 요청한 리소스가 서버에 존재하지 않음을 의미합니다. 400은 잘못된 요청, 500은 서버 내부 오류입니다.',
        explanationEn: '404 Not Found means the requested resource does not exist on the server. 400 is a bad request and 500 is an internal server error.'
      }
    },
    {
      title: '실습 예제: 메모 CRUD API',
      titleEn: 'Practice: Memo CRUD API',
      content: '메모리 배열을 데이터 저장소로 삼아, 메모를 조회·생성·삭제하는 완전한 미니 REST API를 만들어 봅니다. 라우팅·상태 코드·입력 검증을 한 번에 연습하는 예제입니다.',
      contentEn: 'Using an in-memory array as the data store, build a complete mini REST API to read, create, and delete memos. This example practices routing, status codes, and input validation together.',
      code: `const express = require('express');
const app = express();
app.use(express.json());

let memos = [{ id: 1, text: '첫 메모' }];
let nextId = 2;

// 목록
app.get('/api/memos', (req, res) => res.json(memos));

// 생성 (검증 포함)
app.post('/api/memos', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'text는 필수입니다' });
  const memo = { id: nextId++, text };
  memos.push(memo);
  res.status(201).json(memo);
});

// 삭제
app.delete('/api/memos/:id', (req, res) => {
  const id = Number(req.params.id);
  const before = memos.length;
  memos = memos.filter(m => m.id !== id);
  if (memos.length === before) return res.status(404).json({ error: '없음' });
  res.status(204).send();
});

app.listen(3000, () => console.log('http://localhost:3000'));`,
      codeLanguage: 'javascript'
    }
  ]
};

export default chapter;
