import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-start',
  chapter: 1,
  titleKey: 'django01',
  sections: [
    {
      title: 'Django 시작하기',
      titleEn: 'Getting Started with Django',
      content: 'Django는 파이썬으로 작성된 풀스택 웹 프레임워크로, "배터리 포함(batteries included)" 철학에 따라 ORM·인증·관리자 페이지 등을 기본 제공합니다. 가상환경을 만들고 pip로 설치한 뒤, 프로젝트와 앱을 생성하는 것으로 시작합니다.',
      contentEn: 'Django is a full-stack web framework written in Python. Following the "batteries included" philosophy, it provides an ORM, authentication, an admin page, and more out of the box. You start by creating a virtual environment, installing it with pip, then creating a project and an app.',
      codeBlocks: [
        {
          label: '🪟 Windows (PowerShell)',
          code: `# 가상환경 생성 + 활성화 (Windows)
python -m venv venv
venv\\Scripts\\activate
pip install django

# 프로젝트와 앱 생성
django-admin startproject config .
python manage.py startapp blog

# 개발 서버 실행 → http://127.0.0.1:8000
python manage.py runserver`,
          codeLanguage: 'powershell',
        },
        {
          label: '🍎 macOS / Linux (터미널)',
          code: `# 가상환경 생성 + 활성화 (macOS / Linux)
python3 -m venv venv
source venv/bin/activate
pip install django

# 프로젝트와 앱 생성
django-admin startproject config .
python manage.py startapp blog

# 개발 서버 실행 → http://127.0.0.1:8000
python manage.py runserver`,
          codeLanguage: 'bash',
        },
      ],
      quiz: {
        question: 'Django 개발 서버를 실행하는 명령은?',
        questionEn: 'Which command runs the Django development server?',
        options: ['django-admin serve', 'python manage.py runserver', 'pip start', 'django run'],
        optionsEn: ['django-admin serve', 'python manage.py runserver', 'pip start', 'django run'],
        correctIndex: 1,
        explanation: 'python manage.py runserver 가 개발용 서버를 띄우며 기본 주소는 http://127.0.0.1:8000 입니다.',
        explanationEn: 'python manage.py runserver starts the development server, defaulting to http://127.0.0.1:8000.'
      }
    },
    {
      title: 'MTV 구조',
      titleEn: 'The MTV Pattern',
      content: 'Django는 MTV(Model-Template-View) 패턴을 따릅니다. Model은 데이터(데이터베이스), Template은 화면(HTML), View는 요청을 처리해 둘을 연결하는 로직입니다. 일반적인 MVC의 Controller 역할을 Django에서는 View가, View(화면) 역할을 Template이 담당합니다.',
      contentEn: 'Django follows the MTV (Model-Template-View) pattern. The Model is data (database), the Template is the screen (HTML), and the View is the logic that handles requests and connects the two. The Controller role of typical MVC is handled by the View in Django, and the View(screen) role by the Template.',
      code: `# views.py - 요청을 받아 응답을 만든다 (MTV의 V)
from django.http import HttpResponse
from django.shortcuts import render

def hello(request):
    return HttpResponse("안녕하세요, Django!")

def post_list(request):
    posts = ["첫 글", "둘째 글"]          # 실제로는 Model에서 조회
    return render(request, "blog/list.html", {"posts": posts})`,
      codeLanguage: 'python',
      quiz: {
        question: 'Django의 MTV에서 요청을 처리하는 로직을 담당하는 것은?',
        questionEn: 'In Django\'s MTV, which part handles request-processing logic?',
        options: ['Model', 'Template', 'View', 'Migration'],
        optionsEn: ['Model', 'Template', 'View', 'Migration'],
        correctIndex: 2,
        explanation: 'View가 요청을 받아 Model에서 데이터를 가져오고 Template으로 렌더링하는 로직을 담당합니다.',
        explanationEn: 'The View handles the logic of receiving a request, fetching data from the Model, and rendering with a Template.'
      }
    },
    {
      title: '실습 예제: 첫 페이지 띄우기',
      titleEn: 'Practice: Serving Your First Page',
      content: '뷰 함수를 만들고 URL에 연결해 브라우저에 메시지를 띄우는 전체 흐름을 따라 해 봅니다. URLConf(urls.py)가 어떤 주소를 어떤 뷰에 연결하는지 이해하는 것이 핵심입니다.',
      contentEn: 'Follow the full flow of creating a view function, wiring it to a URL, and showing a message in the browser. The key is understanding how the URLConf (urls.py) maps an address to a view.',
      code: `# blog/views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Web AtoZ - Django 첫 페이지</h1>")

# config/urls.py
from django.urls import path
from blog.views import home

urlpatterns = [
    path("", home),            # http://127.0.0.1:8000/  → home 뷰
]

# 실행
# python manage.py runserver`,
      codeLanguage: 'python'
    }
  ]
};

export default chapter;
