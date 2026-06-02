import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '04-workflow',
  chapter: 4,
  titleKey: 'git04',
  sections: [
    {
      title: '.gitignore와 저장소 관리',
      titleEn: '.gitignore and Repository Hygiene',
      content: '.gitignore는 버전 관리에서 제외할 파일을 지정합니다. node_modules, 빌드 산출물(dist), 환경 변수 파일(.env), OS 파일(.DS_Store) 등은 반드시 제외해야 합니다. 이미 추적 중인 파일은 git rm --cached로 추적에서 빼야 합니다.',
      contentEn: '.gitignore specifies files to exclude from version control. Always exclude node_modules, build output (dist), environment files (.env), and OS files (.DS_Store). For already-tracked files, remove them from tracking with git rm --cached.',
      code: `# .gitignore 예시
node_modules/
dist/
.env
.env.local
*.log
.DS_Store
.vscode/

# 이미 추적 중인 파일을 추적에서 제외
git rm --cached .env
git commit -m "chore: stop tracking .env"

# 무시 규칙이 잘 적용되는지 확인
git status --ignored`,
      codeLanguage: 'bash',
      quiz: {
        question: '.env 파일을 Git에서 반드시 제외해야 하는 이유는?',
        questionEn: 'Why must .env files be excluded from Git?',
        options: ['용량이 커서', 'API 키 등 민감 정보가 노출될 수 있어서', '문법 오류가 나서', '빌드가 느려져서'],
        optionsEn: ['They are large', 'They may expose sensitive info like API keys', 'They cause syntax errors', 'They slow the build'],
        correctIndex: 1,
        explanation: '.env에는 API 키·비밀번호 등 민감 정보가 들어가므로, 공개 저장소에 올라가면 보안 사고로 이어집니다.',
        explanationEn: '.env holds sensitive info like API keys and passwords; committing it to a public repo can cause a security breach.'
      }
    },
    {
      title: '커밋 컨벤션과 브랜치 전략',
      titleEn: 'Commit Conventions and Branch Strategy',
      content: 'Conventional Commits(feat, fix, docs, chore 등)는 커밋 메시지에 일관된 형식을 부여해 변경 이력을 읽기 쉽게 만듭니다. 브랜치 전략으로는 main/develop/feature를 나누는 Git Flow, main에서 짧은 브랜치를 따는 GitHub Flow 등이 있습니다.',
      contentEn: 'Conventional Commits (feat, fix, docs, chore, etc.) give commit messages a consistent format, making history easy to read. Branch strategies include Git Flow, which separates main/develop/feature, and GitHub Flow, which cuts short branches off main.',
      code: `# Conventional Commits 형식
#   <type>: <설명>
git commit -m "feat: 장바구니 기능 추가"
git commit -m "fix: 로그인 토큰 만료 버그 수정"
git commit -m "docs: README 설치 안내 보강"
git commit -m "refactor: API 호출 로직 분리"

# GitHub Flow (간단/권장)
# 1) main에서 기능 브랜치 생성
# 2) 작업 후 PR 생성 → 리뷰 → main 병합
# 3) main은 항상 배포 가능 상태 유지`,
      codeLanguage: 'bash',
      quiz: {
        question: 'Conventional Commits에서 새로운 기능 추가에 사용하는 타입은?',
        questionEn: 'In Conventional Commits, which type is used for adding a new feature?',
        options: ['fix', 'feat', 'docs', 'chore'],
        optionsEn: ['fix', 'feat', 'docs', 'chore'],
        correctIndex: 1,
        explanation: 'feat은 새로운 기능(feature) 추가를 의미합니다. fix는 버그 수정, docs는 문서, chore는 잡무성 변경입니다.',
        explanationEn: 'feat means adding a new feature. fix is a bug fix, docs is documentation, and chore is maintenance changes.'
      }
    },
    {
      title: 'Fork와 오픈소스 기여',
      titleEn: 'Forks and Open Source Contribution',
      content: '권한이 없는 저장소에 기여할 때는 Fork(내 계정으로 복제)한 뒤 작업하고, 원본 저장소로 Pull Request를 보냅니다. 원본의 최신 변경은 upstream 원격을 추가해 동기화합니다. 이것이 오픈소스 협업의 표준 흐름입니다.',
      contentEn: 'To contribute to a repository you don\'t have write access to, Fork it (clone to your account), work on it, and open a Pull Request to the original. Sync the latest upstream changes by adding an upstream remote. This is the standard open-source collaboration flow.',
      code: `# 1) GitHub에서 Fork 후 내 복제본 클론
git clone https://github.com/me/project.git
cd project

# 2) 원본 저장소를 upstream으로 추가
git remote add upstream https://github.com/original/project.git

# 3) 원본 최신 변경 동기화
git fetch upstream
git merge upstream/main

# 4) 기능 브랜치 작업 후 내 fork에 push → PR 생성
git switch -c fix/typo
git push origin fix/typo`,
      codeLanguage: 'bash',
      quiz: {
        question: '오픈소스에서 원본 저장소의 최신 변경을 가져오기 위해 추가하는 원격의 관례적 이름은?',
        questionEn: 'What is the conventional name of the remote added to fetch the original repo\'s latest changes in open source?',
        options: ['origin', 'upstream', 'master', 'source'],
        optionsEn: ['origin', 'upstream', 'master', 'source'],
        correctIndex: 1,
        explanation: '내 fork는 origin, 원본 저장소는 upstream으로 추가하는 것이 관례입니다. upstream에서 fetch/merge해 동기화합니다.',
        explanationEn: 'By convention, your fork is origin and the original repo is added as upstream. You sync by fetching/merging from upstream.'
      }
    }
  ]
};

export default chapter;
