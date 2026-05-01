import type { WebProblem } from '../../types';
export const p8: WebProblem = {
  id: 'beginner-8', number: 8, title: '연락처 폼', titleEn: 'Contact Form',
  category: 'beginner', topic: 'html', difficulty: 'beginner',
  description: '이름, 이메일, 메시지 필드가 있는 연락처 폼을 만드세요. 각 필드에 적절한 label과 placeholder를 포함하세요.',
  descriptionEn: 'Create a contact form with name, email, and message fields. Include appropriate labels and placeholders for each field.',
  hint: '<form>, <label>, <input>, <textarea> 태그와 for 속성을 활용하세요.',
  hintEn: 'Use <form>, <label>, <input>, <textarea> tags with the for attribute.',
  solution: {
    html: `<form class="contact-form">\n  <h2>문의하기</h2>\n  <div class="form-group">\n    <label for="name">이름</label>\n    <input type="text" id="name" placeholder="이름을 입력하세요" required>\n  </div>\n  <div class="form-group">\n    <label for="email">이메일</label>\n    <input type="email" id="email" placeholder="example@email.com" required>\n  </div>\n  <div class="form-group">\n    <label for="subject">제목</label>\n    <input type="text" id="subject" placeholder="문의 제목">\n  </div>\n  <div class="form-group">\n    <label for="message">메시지</label>\n    <textarea id="message" rows="5" placeholder="메시지를 입력하세요..." required></textarea>\n  </div>\n  <button type="submit">보내기</button>\n</form>`,
    css: `.contact-form {\n  max-width: 480px;\n  margin: 20px auto;\n  padding: 32px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 16px rgba(0,0,0,0.08);\n  font-family: sans-serif;\n}\n.contact-form h2 {\n  color: #0046C8;\n  margin: 0 0 24px;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #333;\n}\n.form-group input,\n.form-group textarea {\n  width: 100%;\n  padding: 10px 14px;\n  border: 2px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 14px;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n.form-group input:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #0046C8;\n}\n.contact-form button {\n  width: 100%;\n  padding: 12px;\n  background: #0046C8;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 8px;\n}\n.contact-form button:hover {\n  background: #003399;\n}`
  },
  solutionExplanation: 'label의 for 속성과 input의 id를 연결하여 접근성을 확보했습니다. required 속성으로 필수 입력 검증을 추가했습니다.',
  solutionExplanationEn: 'Connected label for attribute with input id for accessibility. Added required attribute for mandatory field validation.'
};
