import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '03-views-templates',
  chapter: 3,
  titleKey: 'django03',
  sections: [
    {
      title: 'URL과 뷰 연결',
      titleEn: 'Connecting URLs and Views',
      content: 'URLConf(urls.py)는 요청 주소를 뷰에 연결합니다. path()로 경로 패턴과 뷰를 매핑하고, <int:id> 같은 경로 변환자로 URL의 값을 뷰 인자로 전달받습니다. 앱별 urls.py를 include로 묶으면 구조가 깔끔해집니다.',
      contentEn: 'A URLConf (urls.py) maps request addresses to views. Use path() to map a path pattern to a view, and path converters like <int:id> to pass URL values as view arguments. Grouping per-app urls.py with include keeps structure clean.',
      code: `# config/urls.py
from django.urls import path, include

urlpatterns = [
    path("", include("blog.urls")),
]

# blog/urls.py
from django.urls import path
from blog import views

urlpatterns = [
    path("", views.post_list, name="post_list"),
    path("post/<int:id>/", views.post_detail, name="post_detail"),
]`,
      codeLanguage: 'python',
      quiz: {
        question: 'URL <int:id> 의 역할은?',
        questionEn: 'What does the URL pattern <int:id> do?',
        options: ['정수 id 값을 뷰 인자로 전달', '문자열만 허용', '관리자 전용 경로', 'id를 숨긴다'],
        optionsEn: ['Passes an integer id as a view argument', 'Allows only strings', 'Admin-only path', 'Hides the id'],
        correctIndex: 0,
        explanation: '<int:id>는 URL의 해당 부분을 정수로 변환해 뷰 함수의 id 인자로 전달하는 경로 변환자입니다.',
        explanationEn: '<int:id> is a path converter that captures that URL segment as an integer and passes it as the view\'s id argument.'
      }
    },
    {
      title: '템플릿 렌더링',
      titleEn: 'Template Rendering',
      content: '템플릿은 HTML에 Django 템플릿 언어(DTL)를 섞어 동적 화면을 만듭니다. {{ 변수 }}로 값을 출력하고 {% for %}·{% if %} 태그로 반복·분기합니다. 뷰에서 render()로 컨텍스트(데이터)를 템플릿에 전달합니다.',
      contentEn: 'Templates mix HTML with the Django Template Language (DTL) to build dynamic screens. Output values with {{ variable }} and loop/branch with {% for %} / {% if %} tags. The view passes context (data) to the template via render().',
      code: `# blog/views.py
from django.shortcuts import render
from blog.models import Post

def post_list(request):
    posts = Post.objects.filter(published=True)
    return render(request, "blog/list.html", {"posts": posts})

# templates/blog/list.html
# <h1>글 목록</h1>
# <ul>
#   {% for post in posts %}
#     <li>{{ post.title }} - {{ post.created_at|date:"Y-m-d" }}</li>
#   {% empty %}
#     <li>아직 글이 없습니다.</li>
#   {% endfor %}
# </ul>`,
      codeLanguage: 'python',
      quiz: {
        question: 'Django 템플릿에서 변수 값을 출력하는 문법은?',
        questionEn: 'What is the syntax to output a variable value in a Django template?',
        options: ['{% variable %}', '{{ variable }}', '${variable}', '<%= variable %>'],
        optionsEn: ['{% variable %}', '{{ variable }}', '${variable}', '<%= variable %>'],
        correctIndex: 1,
        explanation: '{{ }} 는 값 출력, {% %} 는 for/if 같은 템플릿 태그(로직)에 사용합니다.',
        explanationEn: '{{ }} outputs values, while {% %} is for template tags (logic) like for/if.'
      }
    },
    {
      title: '실습 예제: 목록 → 상세 페이지',
      titleEn: 'Practice: List to Detail Page',
      content: '목록 뷰와 상세 뷰를 만들어 글을 클릭하면 상세로 이동하는 흐름을 구현해 봅니다. get_object_or_404로 없는 글은 안전하게 404 처리하고, 템플릿에서 url 태그로 링크를 만듭니다.',
      contentEn: 'Build a list view and a detail view so clicking a post navigates to its detail. Use get_object_or_404 to safely return 404 for missing posts, and build links with the url tag in the template.',
      code: `# blog/views.py
from django.shortcuts import render, get_object_or_404
from blog.models import Post

def post_detail(request, id):
    post = get_object_or_404(Post, id=id)
    return render(request, "blog/detail.html", {"post": post})

# templates/blog/list.html (링크)
# {% for post in posts %}
#   <a href="{% url 'post_detail' post.id %}">{{ post.title }}</a>
# {% endfor %}

# templates/blog/detail.html
# <h1>{{ post.title }}</h1>
# <p>{{ post.content }}</p>`,
      codeLanguage: 'python'
    }
  ]
};

export default chapter;
