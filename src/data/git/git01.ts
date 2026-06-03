import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-basics',
  chapter: 1,
  titleKey: 'git01',
  sections: [
    {
      title: 'Git 설치와 초기 설정',
      titleEn: 'Installing Git & First-Time Setup',
      content: 'Git 명령을 쓰려면 먼저 Git을 설치해야 합니다. 설치 방법은 운영체제마다 다르니 본인 OS의 창만 따라 하세요(아래). 설치 후 새 터미널에서 git --version으로 확인합니다. 그다음 모든 커밋에 기록될 이름·이메일을 한 번만 설정하면(전역 설정) 준비가 끝납니다. 이름·이메일은 GitHub 계정과 같게 맞추는 것을 권장합니다.',
      contentEn: 'To use Git commands, install Git first. The method differs by OS — follow only your OS panel below. After installing, verify with git --version in a new terminal. Then set the name/email recorded on every commit once (global config) and you are ready. It is recommended to match them to your GitHub account.',
      codeBlocks: [
        {
          label: '🪟 Windows',
          code: `# 방법 1) 공식 설치 파일: https://git-scm.com 에서 다운로드 후 설치
#         (설치 옵션은 기본값으로 Next)

# 방법 2) winget 패키지 매니저
winget install Git.Git

# ★ 설치 후 새 PowerShell 창을 열고 확인
git --version`,
          codeLanguage: 'powershell',
        },
        {
          label: '🍎 macOS',
          code: `# 방법 1) Homebrew (권장)
brew install git

# 방법 2) Xcode 명령줄 도구에 포함된 git 설치
xcode-select --install

# 확인
git --version`,
          codeLanguage: 'bash',
        },
        {
          label: '🐧 Linux',
          code: `# Debian / Ubuntu
sudo apt update && sudo apt install git

# Fedora / RHEL
sudo dnf install git

# 확인
git --version`,
          codeLanguage: 'bash',
        },
      ],
      code: `# 최초 1회: 커밋에 기록될 이름·이메일 설정 (전역)
git config --global user.name "Hong Gildong"
git config --global user.email "you@example.com"

# 기본 브랜치 이름을 main으로
git config --global init.defaultBranch main

# 설정 확인
git config --list`,
      codeLanguage: 'bash',
      quiz: {
        question: 'Git 설치 후 가장 먼저 해야 할 전역 설정은?',
        questionEn: 'What global setup should you do right after installing Git?',
        options: ['브랜치 삭제', 'user.name과 user.email 설정', '저장소 푸시', '파일 삭제'],
        optionsEn: ['Delete a branch', 'Set user.name and user.email', 'Push a repository', 'Delete files'],
        correctIndex: 1,
        explanation: 'git config --global로 이름·이메일을 한 번 설정해 두면 이후 모든 커밋에 작성자 정보로 기록됩니다.',
        explanationEn: 'Setting name/email once with git config --global records them as the author on all future commits.'
      }
    },
    {
      title: 'Git 기초',
      titleEn: 'Git Basics',
      content: 'Git은 분산 버전 관리 시스템으로, 코드의 변경 이력을 추적하고 협업을 돕습니다. git init으로 저장소를 생성하고, add → commit → push 흐름으로 변경사항을 관리합니다. 작업 디렉터리 → 스테이징 영역 → 저장소의 3단계 구조를 이해하는 것이 핵심입니다.',
      contentEn: 'Git is a distributed version control system that tracks code changes and facilitates collaboration. Create a repository with git init, and manage changes with the add → commit → push workflow. Understanding the three-stage structure — working directory → staging area → repository — is key.',
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
git pull origin main              # 풀`,
      codeLanguage: 'bash',
      quiz: {
        question: 'git add 명령이 하는 일은?',
        questionEn: 'What does the git add command do?',
        options: ['변경사항을 원격 저장소에 올린다', '변경사항을 스테이징 영역에 추가한다', '커밋을 되돌린다', '새 브랜치를 만든다'],
        optionsEn: ['Pushes changes to the remote', 'Adds changes to the staging area', 'Reverts a commit', 'Creates a new branch'],
        correctIndex: 1,
        explanation: 'git add는 작업 디렉터리의 변경사항을 스테이징 영역에 올립니다. 이후 git commit으로 저장소에 기록됩니다.',
        explanationEn: 'git add stages changes from the working directory. They are then recorded into the repository with git commit.'
      }
    },
    {
      title: '브랜치와 병합',
      titleEn: 'Branches and Merging',
      content: '브랜치는 독립적인 작업 공간으로, 메인 코드에 영향을 주지 않고 새 기능을 개발할 수 있습니다. 작업이 끝나면 merge로 변경사항을 합칩니다. 기능별로 브랜치를 나누는 것이 협업의 기본입니다.',
      contentEn: 'A branch is an independent workspace where you can develop new features without affecting the main code. When done, merge combines the changes. Splitting branches by feature is the basis of collaboration.',
      code: `# 브랜치 생성 및 전환
git branch feature/login          # 브랜치 생성
git switch feature/login          # 브랜치 전환 (또는 git checkout)
git switch -c feature/signup      # 생성 + 전환

# 브랜치 목록과 병합
git branch                        # 브랜치 목록
git switch main                   # main으로 이동
git merge feature/login           # feature/login을 main에 병합

# 병합 완료 후 브랜치 삭제
git branch -d feature/login`,
      codeLanguage: 'bash',
      quiz: {
        question: '새 브랜치를 만들면서 동시에 전환하는 명령은?',
        questionEn: 'Which command creates a new branch and switches to it at once?',
        options: ['git branch -c name', 'git switch -c name', 'git merge name', 'git checkout name'],
        optionsEn: ['git branch -c name', 'git switch -c name', 'git merge name', 'git checkout name'],
        correctIndex: 1,
        explanation: 'git switch -c name (또는 git checkout -b name)은 브랜치를 생성하면서 바로 그 브랜치로 전환합니다.',
        explanationEn: 'git switch -c name (or git checkout -b name) creates a branch and immediately switches to it.'
      }
    },
    {
      title: '되돌리기와 임시 저장',
      titleEn: 'Undoing and Stashing',
      content: '실수한 변경사항을 되돌릴 때는 상황에 맞는 명령을 사용합니다. git restore는 작업 디렉터리 변경을 취소하고, git reset은 스테이징/커밋을 되돌리며, git revert는 기존 커밋을 취소하는 새 커밋을 만듭니다. git stash는 작업을 임시로 치워둘 때 유용합니다.',
      contentEn: 'Use the right command for the situation when undoing mistakes. git restore discards working directory changes, git reset undoes staging/commits, and git revert creates a new commit that undoes a previous one. git stash is useful for temporarily setting work aside.',
      code: `# 작업 디렉터리 변경 취소
git restore index.html            # 파일 변경 되돌리기
git restore --staged index.html   # 스테이징 취소

# 커밋 되돌리기
git reset --soft HEAD~1           # 커밋만 취소(변경 유지)
git reset --hard HEAD~1           # 커밋+변경 모두 취소(주의!)
git revert <commit-hash>          # 안전하게 취소 커밋 생성

# 작업 임시 저장
git stash                         # 현재 변경 임시 저장
git stash pop                     # 임시 저장 복원`,
      codeLanguage: 'bash',
      quiz: {
        question: '이미 공유된(push된) 커밋을 안전하게 되돌리는 방법은?',
        questionEn: 'How do you safely undo an already shared (pushed) commit?',
        options: ['git reset --hard', 'git revert', 'git restore', 'git stash'],
        optionsEn: ['git reset --hard', 'git revert', 'git restore', 'git stash'],
        correctIndex: 1,
        explanation: 'git revert는 기존 이력을 지우지 않고 변경을 취소하는 새 커밋을 만들어, 공유된 브랜치에서도 안전합니다. reset --hard는 이력을 바꿔 협업 시 위험합니다.',
        explanationEn: 'git revert creates a new commit that undoes changes without deleting history, making it safe on shared branches. reset --hard rewrites history and is risky in collaboration.'
      }
    },
    {
      title: '실습 예제: 첫 저장소 만들고 커밋하기',
      titleEn: 'Practice: Create Your First Repo and Commit',
      content: '빈 폴더에서 시작해 저장소를 만들고 첫 커밋을 남긴 뒤, 기능 브랜치를 만들어 작업하는 전체 흐름을 따라 해 봅니다. 가장 기본이 되는 일상 워크플로입니다.',
      contentEn: 'Follow the full flow of starting from an empty folder, creating a repo, making your first commit, then creating a feature branch to work on. This is the most basic daily workflow.',
      code: `# 1) 새 프로젝트 폴더에서 저장소 시작
mkdir my-site && cd my-site
git init

# 2) 파일 만들고 첫 커밋
echo "# My Site" > README.md
git add README.md
git commit -m "chore: 프로젝트 초기화"

# 3) 기능 브랜치에서 작업
git switch -c feature/hello
echo "<h1>Hello</h1>" > index.html
git add index.html
git commit -m "feat: 첫 페이지 추가"

# 4) main에 병합
git switch main
git merge feature/hello
git log --oneline    # 이력 확인`,
      codeLanguage: 'bash'
    }
  ]
};

export default chapter;
