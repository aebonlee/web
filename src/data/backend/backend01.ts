import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-nodejs',
  chapter: 1,
  titleKey: 'backend01',
  sections: [
    {
      title: 'Node.js & Express 기초',
      titleEn: 'Node.js & Express Basics',
      content: 'Node.js는 브라우저 밖에서 JavaScript를 실행하는 런타임입니다. Express는 Node.js의 가장 인기 있는 웹 프레임워크로, REST API를 쉽게 구축할 수 있습니다.',
      contentEn: 'Node.js is a runtime that executes JavaScript outside the browser. Express is the most popular Node.js web framework for easily building REST APIs.',
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

// PUT - 수정
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.json({ id: Number(id), name });
});

// DELETE - 삭제
app.delete('/api/users/:id', (req, res) => {
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('서버 실행: http://localhost:3000');
});`,
      codeLanguage: 'javascript'
    }
  ]
};

export default chapter;
