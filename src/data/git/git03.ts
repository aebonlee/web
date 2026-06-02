import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '03-rebase',
  chapter: 3,
  titleKey: 'git03',
  sections: [
    {
      title: 'Rebase로 이력 정리',
      titleEn: 'Cleaning History with Rebase',
      content: 'rebase는 브랜치의 기준점을 다른 커밋으로 옮겨 이력을 선형으로 만듭니다. merge가 병합 커밋을 남기는 것과 달리 rebase는 깔끔한 일직선 히스토리를 만듭니다. 단, 이미 공유된(push된) 커밋을 rebase하면 이력이 바뀌어 위험하므로 로컬 브랜치에만 사용합니다.',
      contentEn: 'rebase moves a branch\'s base onto another commit, making history linear. Unlike merge, which leaves a merge commit, rebase produces a clean straight-line history. However, rebasing already-shared (pushed) commits rewrites history and is risky, so use it only on local branches.',
      code: `# feature 브랜치를 최신 main 위로 재배치
git switch feature
git rebase main

# 충돌 해결 후 진행
git add .
git rebase --continue

# rebase 중단(원상복구)
git rebase --abort

# 인터랙티브 rebase - 커밋 합치기/수정
git rebase -i HEAD~3
# pick/squash/reword 등으로 최근 3개 커밋 정리`,
      codeLanguage: 'bash',
      quiz: {
        question: 'rebase를 사용하면 안 되는 상황은?',
        questionEn: 'When should you avoid using rebase?',
        options: ['로컬 브랜치를 정리할 때', '이미 push되어 공유된 커밋을 다시 정리할 때', '커밋 메시지를 수정할 때', '최신 main을 반영할 때'],
        optionsEn: ['Cleaning up a local branch', 'Reworking commits already pushed and shared', 'Editing a commit message', 'Incorporating the latest main'],
        correctIndex: 1,
        explanation: 'rebase는 커밋 해시를 바꾸므로, 이미 공유된 커밋에 적용하면 다른 사람의 이력과 충돌합니다. 공유 전 로컬에서만 사용하세요.',
        explanationEn: 'rebase changes commit hashes, so applying it to shared commits conflicts with others\' history. Use it only locally before sharing.'
      }
    },
    {
      title: 'cherry-pick과 tag',
      titleEn: 'cherry-pick and tag',
      content: 'cherry-pick은 다른 브랜치의 특정 커밋 하나만 골라 현재 브랜치에 적용합니다. tag는 특정 커밋에 버전 이름(v1.0.0 등)을 붙여 릴리스 지점을 표시합니다. 주로 시맨틱 버저닝과 함께 배포 버전을 관리하는 데 씁니다.',
      contentEn: 'cherry-pick picks a single commit from another branch and applies it to the current branch. tag attaches a version name (e.g., v1.0.0) to a specific commit to mark a release point. It is typically used with semantic versioning to manage release versions.',
      code: `# 특정 커밋만 현재 브랜치로 가져오기
git cherry-pick <commit-hash>

# 태그 생성 (릴리스 표시)
git tag v1.0.0                       # 가벼운 태그
git tag -a v1.0.0 -m "첫 정식 릴리스" # 주석 태그

# 태그 목록 / 원격에 푸시
git tag
git push origin v1.0.0
git push origin --tags               # 모든 태그 푸시`,
      codeLanguage: 'bash',
      quiz: {
        question: '다른 브랜치의 커밋 "하나만" 골라 현재 브랜치에 적용하는 명령은?',
        questionEn: 'Which command applies just "one" commit from another branch to the current branch?',
        options: ['git merge', 'git cherry-pick', 'git rebase', 'git tag'],
        optionsEn: ['git merge', 'git cherry-pick', 'git rebase', 'git tag'],
        correctIndex: 1,
        explanation: 'git cherry-pick <hash>는 지정한 커밋 하나만 골라 현재 브랜치에 새 커밋으로 적용합니다.',
        explanationEn: 'git cherry-pick <hash> applies just the specified commit as a new commit on the current branch.'
      }
    },
    {
      title: '이력 탐색 (diff, blame, bisect)',
      titleEn: 'Exploring History (diff, blame, bisect)',
      content: 'git diff로 변경 내용을 비교하고, git blame으로 각 줄을 누가 언제 바꿨는지 추적합니다. git bisect는 이진 탐색으로 버그가 처음 들어온 커밋을 빠르게 찾아줍니다. 디버깅과 코드 리뷰에 유용한 도구들입니다.',
      contentEn: 'Use git diff to compare changes, git blame to trace who changed each line and when, and git bisect to quickly find the commit that introduced a bug via binary search. These are useful tools for debugging and code review.',
      code: `# 변경 비교
git diff                    # 작업 디렉터리 vs 스테이징
git diff main feature       # 두 브랜치 비교

# 각 줄의 마지막 수정자 추적
git blame index.html

# 버그가 처음 생긴 커밋 이진 탐색
git bisect start
git bisect bad              # 현재(버그 있음)
git bisect good v1.0.0      # 정상이던 시점
# Git이 중간 커밋으로 이동 → 테스트 후 good/bad 반복
git bisect reset           # 탐색 종료`,
      codeLanguage: 'bash',
      quiz: {
        question: '버그가 처음 들어온 커밋을 이진 탐색으로 찾는 Git 명령은?',
        questionEn: 'Which Git command finds the commit that introduced a bug using binary search?',
        options: ['git blame', 'git bisect', 'git diff', 'git log'],
        optionsEn: ['git blame', 'git bisect', 'git diff', 'git log'],
        correctIndex: 1,
        explanation: 'git bisect는 good/bad 지점을 표시하면 이진 탐색으로 문제가 처음 발생한 커밋을 효율적으로 찾아줍니다.',
        explanationEn: 'git bisect efficiently finds the first faulty commit via binary search once you mark good/bad points.'
      }
    },
    {
      title: '실습 예제: 커밋 이력 정리하기',
      titleEn: 'Practice: Tidying Up Commit History',
      content: '"오타 수정", "다시 수정" 같은 지저분한 커밋들을 interactive rebase로 하나로 합쳐(squash) 깔끔한 이력을 만들어 봅니다. PR을 올리기 전 자주 쓰는 정리 작업입니다.',
      contentEn: 'Use interactive rebase to squash messy commits like "fix typo" and "fix again" into one for a clean history. This is common cleanup done before opening a PR.',
      code: `# 최근 3개 커밋을 정리 대상으로 열기
git rebase -i HEAD~3

# 편집기에서 (위가 과거, 아래가 최신):
#   pick   a1b2c3  feat: 로그인 폼 추가
#   squash d4e5f6  fix: 오타 수정       ← 위 커밋에 합침
#   squash 7g8h9i  fix: 다시 수정       ← 위 커밋에 합침
# 저장하면 합쳐진 커밋 메시지를 새로 작성

# 정리된 이력 확인
git log --oneline

# 이미 push한 브랜치라면 (주의: 본인 기능 브랜치에서만)
git push --force-with-lease`,
      codeLanguage: 'bash'
    }
  ]
};

export default chapter;
