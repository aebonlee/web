import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-models-orm',
  chapter: 2,
  titleKey: 'django02',
  sections: [
    {
      title: '모델 정의하기',
      titleEn: 'Defining Models',
      content: '모델은 데이터베이스 테이블을 파이썬 클래스로 표현합니다. models.Model을 상속하고 필드(CharField, TextField, DateTimeField 등)를 선언하면, Django가 SQL 테이블로 매핑해 줍니다. SQL을 직접 쓰지 않아도 됩니다.',
      contentEn: 'A model represents a database table as a Python class. Inherit from models.Model and declare fields (CharField, TextField, DateTimeField, etc.), and Django maps it to a SQL table — no raw SQL needed.',
      code: `# blog/models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    published = models.BooleanField(default=False)

    def __str__(self):
        return self.title`,
      codeLanguage: 'python',
      quiz: {
        question: 'Django 모델 클래스가 상속해야 하는 것은?',
        questionEn: 'What must a Django model class inherit from?',
        options: ['models.Table', 'models.Model', 'django.DB', 'object'],
        optionsEn: ['models.Table', 'models.Model', 'django.DB', 'object'],
        correctIndex: 1,
        explanation: 'models.Model 을 상속하면 Django ORM이 해당 클래스를 데이터베이스 테이블로 매핑합니다.',
        explanationEn: 'Inheriting from models.Model lets the Django ORM map the class to a database table.'
      }
    },
    {
      title: '마이그레이션과 ORM 쿼리',
      titleEn: 'Migrations and ORM Queries',
      content: '모델을 만들거나 바꾸면 makemigrations로 변경 계획을 만들고 migrate로 실제 DB에 반영합니다. 이후에는 QuerySet API(all, filter, get, create 등)로 SQL 없이 데이터를 다룹니다.',
      contentEn: 'After creating or changing a model, run makemigrations to generate a change plan and migrate to apply it to the DB. Then you manipulate data without SQL using the QuerySet API (all, filter, get, create, etc.).',
      code: `# 마이그레이션 생성 & 적용
# python manage.py makemigrations
# python manage.py migrate

# ORM 쿼리 (python manage.py shell)
from blog.models import Post

Post.objects.create(title="첫 글", content="내용")   # 생성
Post.objects.all()                                    # 전체 조회
Post.objects.filter(published=True)                   # 조건 조회
post = Post.objects.get(id=1)                          # 단건 조회
post.title = "수정"; post.save()                       # 수정`,
      codeLanguage: 'python',
      quiz: {
        question: '모델 변경을 실제 데이터베이스에 반영하는 명령은?',
        questionEn: 'Which command applies model changes to the actual database?',
        options: ['python manage.py runserver', 'python manage.py migrate', 'pip install', 'python manage.py shell'],
        optionsEn: ['python manage.py runserver', 'python manage.py migrate', 'pip install', 'python manage.py shell'],
        correctIndex: 1,
        explanation: 'makemigrations로 변경 계획을 만들고, migrate로 그 계획을 실제 DB 스키마에 적용합니다.',
        explanationEn: 'makemigrations creates the change plan, and migrate applies that plan to the actual DB schema.'
      }
    },
    {
      title: '실습 예제: 관리자 페이지로 데이터 관리',
      titleEn: 'Practice: Managing Data with the Admin',
      content: 'Django의 강력한 기본 기능인 관리자(admin) 페이지로, 코드 없이 모델 데이터를 추가·수정·삭제해 봅니다. 모델을 admin에 등록하고 슈퍼유저를 만들면 바로 사용할 수 있습니다.',
      contentEn: 'Use Django\'s powerful built-in admin to add, edit, and delete model data without code. Register the model in admin and create a superuser to start using it right away.',
      code: `# blog/admin.py
from django.contrib import admin
from blog.models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "published", "created_at")
    list_filter = ("published",)
    search_fields = ("title",)

# 슈퍼유저 생성 후 /admin 접속
# python manage.py createsuperuser
# python manage.py runserver  →  http://127.0.0.1:8000/admin`,
      codeLanguage: 'python'
    }
  ]
};

export default chapter;
