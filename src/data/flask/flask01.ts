import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-start',
  chapter: 1,
  titleKey: 'flask01',
  sections: [
    {
      title: 'Flask 시작하기',
      titleEn: 'Getting Started with Flask',
      content: 'Flask는 가볍고 유연한 파이썬 마이크로 웹 프레임워크입니다. 최소한의 핵심만 제공하고 필요한 기능은 확장으로 추가하는 방식이라, 작은 API나 프로토타입을 빠르게 만들기에 좋습니다. pip로 설치하고 몇 줄로 서버를 띄울 수 있습니다.',
      contentEn: 'Flask is a lightweight, flexible Python micro web framework. It provides a minimal core and adds features via extensions, making it great for quickly building small APIs or prototypes. Install with pip and start a server in just a few lines.',
      codeBlocks: [
        {
          label: '🪟 Windows (PowerShell) — 가상환경 + 설치',
          code: `python -m venv venv
venv\\Scripts\\activate
pip install flask`,
          codeLanguage: 'powershell',
        },
        {
          label: '🍎 macOS / Linux — 가상환경 + 설치',
          code: `python3 -m venv venv
source venv/bin/activate
pip install flask`,
          codeLanguage: 'bash',
        },
      ],
      code: `# app.py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "안녕하세요, Flask!"

if __name__ == "__main__":
    app.run(debug=True)   # http://127.0.0.1:5000`,
      codeLanguage: 'python',
      quiz: {
        question: 'Flask를 가장 잘 설명한 것은?',
        questionEn: 'Which best describes Flask?',
        options: ['풀스택 프레임워크', '가볍고 유연한 마이크로 프레임워크', '데이터베이스', '프론트엔드 라이브러리'],
        optionsEn: ['A full-stack framework', 'A lightweight, flexible micro framework', 'A database', 'A frontend library'],
        correctIndex: 1,
        explanation: 'Flask는 최소 핵심만 제공하고 확장으로 기능을 더하는 마이크로 프레임워크입니다. Django와 달리 구성요소를 직접 선택합니다.',
        explanationEn: 'Flask is a micro framework that provides a minimal core and adds features via extensions. Unlike Django, you choose components yourself.'
      }
    },
    {
      title: '라우팅과 동적 URL',
      titleEn: 'Routing and Dynamic URLs',
      content: '@app.route 데코레이터로 URL과 함수를 연결합니다. <name>처럼 꺾쇠를 쓰면 URL의 일부를 함수 인자로 받고, <int:id>로 타입을 지정할 수 있습니다. methods 인자로 GET/POST 등 허용 메서드를 정합니다.',
      contentEn: 'The @app.route decorator maps a URL to a function. Use angle brackets like <name> to capture part of the URL as a function argument, and <int:id> to set its type. The methods argument sets allowed methods like GET/POST.',
      code: `from flask import Flask
app = Flask(__name__)

@app.route("/user/<name>")
def greet(name):
    return f"안녕하세요, {name}님!"

@app.route("/post/<int:id>")
def post(id):
    return f"{id}번 글"

@app.route("/submit", methods=["POST"])
def submit():
    return "제출 완료", 201`,
      codeLanguage: 'python',
      quiz: {
        question: 'Flask에서 URL과 함수를 연결하는 것은?',
        questionEn: 'What connects a URL to a function in Flask?',
        options: ['@app.route 데코레이터', 'app.connect()', 'url() 함수', 'route.py 파일'],
        optionsEn: ['The @app.route decorator', 'app.connect()', 'The url() function', 'A route.py file'],
        correctIndex: 0,
        explanation: '@app.route("/경로") 데코레이터를 함수 위에 붙여 해당 URL 요청을 그 함수가 처리하게 합니다.',
        explanationEn: 'Placing the @app.route("/path") decorator above a function makes that function handle requests to the URL.'
      }
    },
    {
      title: '실습 예제: 간단한 인사 앱',
      titleEn: 'Practice: A Simple Greeting App',
      content: '쿼리스트링과 경로 변수를 모두 받아 인사 메시지를 만드는 작은 앱을 구현해 봅니다. request.args로 ?name= 값을 읽고, 기본값 처리도 해봅니다.',
      contentEn: 'Build a small app that creates a greeting from both a query string and a path variable. Read ?name= via request.args and handle defaults.',
      code: `from flask import Flask, request
app = Flask(__name__)

# /hello?name=애본  →  쿼리스트링 사용
@app.route("/hello")
def hello():
    name = request.args.get("name", "방문자")   # 기본값 방문자
    return f"<h2>안녕하세요, {name}님! 👋</h2>"

# /hello/애본  →  경로 변수 사용
@app.route("/hello/<name>")
def hello_path(name):
    return f"<h2>반가워요, {name}님!</h2>"

if __name__ == "__main__":
    app.run(debug=True)`,
      codeLanguage: 'python'
    }
  ]
};

export default chapter;
