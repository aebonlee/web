import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-basics',
  chapter: 1,
  titleKey: 'git01',
  sections: [
    {
      title: 'Git 기초',
      titleEn: 'Git Basics',
      content: 'Git은 분산 버전 관리 시스템으로, 코드의 변경 이력을 추적하고 협업을 돕습니다. git init으로 저장소를 생성하고, add → commit → push 흐름으로 변경사항을 관리합니다.',
      contentEn: 'Git is a distributed version control system that tracks code changes and facilitates collaboration. Create a repository with git init, and manage changes with the add → commit → push workflow.',
      code: `# Git 기본 명령어
git init                          # 저장소 초기화
git status                        # 상태 확인
git add index.html                # 파일 스테이징
git add .                         # 모든 변경 파일 스테이징
git commit -m "첫 번째 커밋"       # 커밋
git log --oneline                 # 커밋 로그

# 원격 저장소
git remote add origin https://github.com/user/repo.git
git push -u origin main           # 푸시
git pull origin main              # 풀

# 브랜치
git branch feature/login          # 브랜치 생성
git checkout feature/login        # 브랜치 전환
git checkout -b feature/signup    # 생성 + 전환`,
      codeLanguage: 'javascript'
    }
  ]
};

export default chapter;
