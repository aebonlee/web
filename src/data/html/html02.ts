import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-forms',
  chapter: 2,
  titleKey: 'html02',
  sections: [
    {
      title: '폼(Form) 기초',
      titleEn: 'Form Basics',
      content: 'HTML 폼은 사용자로부터 데이터를 수집하는 데 사용됩니다. <form> 태그로 폼을 감싸고, <input>, <textarea>, <select> 등의 요소로 입력 필드를 구성합니다.',
      contentEn: 'HTML forms are used to collect data from users. Wrap the form with the <form> tag and compose input fields with <input>, <textarea>, <select> elements.',
      code: `<form action="/submit" method="POST">
  <label for="name">이름:</label>
  <input type="text" id="name" name="name" placeholder="이름 입력">

  <label for="email">이메일:</label>
  <input type="email" id="email" name="email" placeholder="이메일 입력">

  <label for="msg">메시지:</label>
  <textarea id="msg" name="message" rows="4" placeholder="내용을 입력하세요"></textarea>

  <button type="submit">제출하기</button>
</form>`,
      codeLanguage: 'html',
      livePreview: true,
      quiz: {
        question: '사용자 이메일을 입력받기 위한 input type은?',
        questionEn: 'What input type is used for email input?',
        options: ['text', 'email', 'mail', 'address'],
        optionsEn: ['text', 'email', 'mail', 'address'],
        correctIndex: 1,
        explanation: 'type="email"은 이메일 형식 검증을 자동으로 수행합니다.',
        explanationEn: 'type="email" automatically validates email format.'
      }
    },
    {
      title: '다양한 Input 타입',
      titleEn: 'Various Input Types',
      content: 'HTML5는 다양한 입력 타입을 제공합니다: text, password, number, date, color, range, checkbox, radio 등이 있습니다.',
      contentEn: 'HTML5 provides various input types: text, password, number, date, color, range, checkbox, radio, and more.',
      code: `<form>
  <input type="text" placeholder="텍스트"><br>
  <input type="password" placeholder="비밀번호"><br>
  <input type="number" min="0" max="100" value="50"><br>
  <input type="date"><br>
  <input type="color" value="#0046C8"><br>
  <input type="range" min="0" max="100"><br>

  <label><input type="checkbox"> 동의합니다</label><br>
  <label><input type="radio" name="gender"> 남성</label>
  <label><input type="radio" name="gender"> 여성</label>
</form>`,
      codeLanguage: 'html',
      livePreview: true
    }
  ]
};

export default chapter;
