import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '03-templates-structure',
  chapter: 3,
  titleKey: 'flask03',
  sections: [
    {
      title: 'Jinja2 템플릿',
      titleEn: 'Jinja2 Templates',
      content: 'Flask는 Jinja2 템플릿 엔진으로 HTML을 렌더링합니다. render_template으로 templates 폴더의 파일을 불러오고, {{ }}로 값을 출력, {% %}로 반복·분기합니다. 템플릿 상속(extends/block)으로 공통 레이아웃을 재사용합니다.',
      contentEn: 'Flask renders HTML with the Jinja2 template engine. Load files from the templates folder with render_template, output values with {{ }}, and loop/branch with {% %}. Reuse common layouts via template inheritance (extends/block).',
      code: `from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    posts = [{"title": "첫 글"}, {"title": "둘째 글"}]
    return render_template("index.html", posts=posts)

# templates/index.html
# <h1>글 목록</h1>
# <ul>
#   {% for post in posts %}
#     <li>{{ post.title }}</li>
#   {% endfor %}
# </ul>`,
      codeLanguage: 'python',
      quiz: {
        question: 'Flask에서 templates 폴더의 HTML을 렌더링하는 함수는?',
        questionEn: 'Which function renders HTML from the templates folder in Flask?',
        options: ['render()', 'render_template()', 'template()', 'html()'],
        optionsEn: ['render()', 'render_template()', 'template()', 'html()'],
        correctIndex: 1,
        explanation: 'render_template("파일.html", 변수=값) 으로 Jinja2 템플릿을 렌더링하고 데이터를 전달합니다.',
        explanationEn: 'render_template("file.html", var=value) renders a Jinja2 template and passes data to it.'
      }
    },
    {
      title: 'Blueprint로 구조화',
      titleEn: 'Structuring with Blueprints',
      content: '앱이 커지면 Blueprint로 기능을 모듈로 분리합니다. 관련 라우트를 Blueprint에 모으고 app.register_blueprint로 등록하면, 하나의 거대한 app.py 대신 깔끔한 폴더 구조를 유지할 수 있습니다.',
      contentEn: 'As an app grows, split features into modules with Blueprints. Group related routes in a Blueprint and register it with app.register_blueprint to keep a clean folder structure instead of one giant app.py.',
      code: `# blog/routes.py
from flask import Blueprint

blog = Blueprint("blog", __name__, url_prefix="/blog")

@blog.route("/")
def index():
    return "블로그 홈"

# app.py
from flask import Flask
from blog.routes import blog

app = Flask(__name__)
app.register_blueprint(blog)   # /blog/ 로 접근`,
      codeLanguage: 'python',
      quiz: {
        question: 'Flask 앱을 기능별 모듈로 분리할 때 사용하는 것은?',
        questionEn: 'What is used to split a Flask app into feature modules?',
        options: ['Module', 'Blueprint', 'Package', 'Router'],
        optionsEn: ['Module', 'Blueprint', 'Package', 'Router'],
        correctIndex: 1,
        explanation: 'Blueprint는 라우트 묶음을 모듈화하고, app.register_blueprint로 앱에 연결해 구조를 깔끔하게 유지합니다.',
        explanationEn: 'A Blueprint modularizes a set of routes and is attached to the app via app.register_blueprint to keep structure clean.'
      }
    },
    {
      title: '실습 예제: 폼 처리 페이지',
      titleEn: 'Practice: A Form-Handling Page',
      content: 'GET으로 폼을 보여주고 POST로 제출을 처리하는 한 라우트를 만들어 봅니다. 같은 경로에서 메서드로 분기하는 전형적인 패턴으로, 제출 후 결과를 다시 렌더링합니다.',
      contentEn: 'Build a single route that shows a form on GET and handles submission on POST. It is the typical pattern of branching by method on the same path, re-rendering the result after submit.',
      code: `from flask import Flask, request, render_template_string
app = Flask(__name__)

FORM = """
<form method="post">
  <input name="msg" placeholder="메시지">
  <button>보내기</button>
</form>
{% if sent %}<p>받은 메시지: {{ sent }}</p>{% endif %}
"""

@app.route("/contact", methods=["GET", "POST"])
def contact():
    sent = None
    if request.method == "POST":
        sent = request.form.get("msg")
    return render_template_string(FORM, sent=sent)

if __name__ == "__main__":
    app.run(debug=True)`,
      codeLanguage: 'python'
    }
  ]
};

export default chapter;
