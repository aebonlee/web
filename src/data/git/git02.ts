import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-github',
  chapter: 2,
  titleKey: 'git02',
  sections: [
    {
      title: 'GitHub & GitHub Pages',
      titleEn: 'GitHub & GitHub Pages',
      content: 'GitHub는 Git 저장소를 호스팅하는 플랫폼입니다. Pull Request로 코드 리뷰를 하고, GitHub Pages로 정적 웹사이트를 무료 배포할 수 있습니다. CNAME 파일로 커스텀 도메인을 연결할 수도 있습니다.',
      contentEn: 'GitHub is a platform for hosting Git repositories. Review code with Pull Requests and deploy static websites for free with GitHub Pages. You can also connect a custom domain with a CNAME file.',
      code: `# GitHub Pages 배포 (gh-pages 패키지)
npm install -D gh-pages

# package.json에 추가
#   "scripts": {
#     "predeploy": "npm run build",
#     "deploy": "gh-pages -d dist"
#   }

# 배포 실행
npm run deploy

# CNAME 파일 (커스텀 도메인)
echo "web.dreamitbiz.com" > public/CNAME`,
      codeLanguage: 'bash',
      quiz: {
        question: 'GitHub Pages에서 커스텀 도메인을 연결할 때 필요한 파일은?',
        questionEn: 'Which file is needed to connect a custom domain on GitHub Pages?',
        options: ['robots.txt', 'CNAME', 'sitemap.xml', '.gitignore'],
        optionsEn: ['robots.txt', 'CNAME', 'sitemap.xml', '.gitignore'],
        correctIndex: 1,
        explanation: 'CNAME 파일에 도메인을 적어 두면 GitHub Pages가 해당 커스텀 도메인으로 사이트를 서비스합니다.',
        explanationEn: 'Writing the domain in a CNAME file makes GitHub Pages serve the site on that custom domain.'
      }
    },
    {
      title: '협업 워크플로 (PR & 충돌 해결)',
      titleEn: 'Collaboration Workflow (PR & Conflicts)',
      content: '팀 협업에서는 기능 브랜치를 만들어 작업한 뒤 Pull Request로 리뷰를 요청합니다. 여러 사람이 같은 파일을 수정하면 병합 충돌(merge conflict)이 발생하는데, 충돌 표시를 직접 정리하고 커밋하여 해결합니다.',
      contentEn: 'In team collaboration, create a feature branch, work on it, then open a Pull Request to request review. When multiple people edit the same file, a merge conflict occurs — resolve it by manually cleaning up the conflict markers and committing.',
      code: `# 일반적인 협업 흐름
git switch -c feature/cart        # 기능 브랜치 생성
# ... 작업 후 ...
git add .
git commit -m "feat: 장바구니 추가"
git push -u origin feature/cart   # 원격에 푸시 후 GitHub에서 PR 생성

# 최신 main 반영 중 충돌 발생 시
git switch feature/cart
git merge main
# <<<<<<< HEAD ... ======= ... >>>>>>> main 표시를
# 직접 정리한 뒤
git add .
git commit -m "merge: 충돌 해결"`,
      codeLanguage: 'bash',
      quiz: {
        question: '병합 충돌(merge conflict)이 발생하는 상황은?',
        questionEn: 'When does a merge conflict occur?',
        options: ['브랜치를 새로 만들 때', '서로 다른 브랜치가 같은 부분을 다르게 수정했을 때', '커밋 메시지가 비었을 때', 'push 할 때마다'],
        optionsEn: ['When creating a new branch', 'When different branches modify the same part differently', 'When the commit message is empty', 'Every time you push'],
        correctIndex: 1,
        explanation: '두 브랜치가 같은 파일의 같은 영역을 서로 다르게 변경하면 Git이 자동 병합하지 못하고 충돌을 표시합니다. 사람이 직접 정리해야 합니다.',
        explanationEn: 'When two branches change the same region of the same file differently, Git cannot auto-merge and marks a conflict that a human must resolve.'
      }
    },
    {
      title: 'GitHub Actions 자동 배포',
      titleEn: 'Automated Deployment with GitHub Actions',
      content: 'GitHub Actions는 코드를 push할 때마다 자동으로 빌드와 배포를 수행하는 CI/CD 기능입니다. .github/workflows/ 폴더에 YAML 파일을 만들면 워크플로가 정의됩니다. 이 사이트도 main 브랜치 push 시 자동 배포됩니다.',
      contentEn: 'GitHub Actions is a CI/CD feature that automatically builds and deploys every time you push code. Defining a workflow is as simple as creating a YAML file in the .github/workflows/ folder. This site also deploys automatically on push to main.',
      code: `# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`,
      codeLanguage: 'yaml',
      quiz: {
        question: 'GitHub Actions 워크플로 파일은 어느 폴더에 두어야 하나요?',
        questionEn: 'Which folder must GitHub Actions workflow files be placed in?',
        options: ['/actions', '/.github/workflows', '/workflows', '/ci'],
        optionsEn: ['/actions', '/.github/workflows', '/workflows', '/ci'],
        correctIndex: 1,
        explanation: 'GitHub는 .github/workflows/ 폴더 안의 YAML 파일을 자동으로 워크플로로 인식하여 실행합니다.',
        explanationEn: 'GitHub automatically recognizes and runs YAML files inside the .github/workflows/ folder as workflows.'
      }
    },
    {
      title: '실습 예제: 로컬 프로젝트를 GitHub에 올리고 배포하기',
      titleEn: 'Practice: Push a Local Project to GitHub and Deploy',
      content: '로컬 저장소를 GitHub 원격에 연결하고, gh-pages로 정적 사이트를 배포하는 전체 과정을 따라 해 봅니다. 이 학습 사이트(web.dreamitbiz.com)도 동일한 방식으로 운영됩니다.',
      contentEn: 'Follow the full process of connecting a local repo to a GitHub remote and deploying a static site with gh-pages. This learning site (web.dreamitbiz.com) is operated the same way.',
      code: `# 1) GitHub에서 빈 저장소 생성 후 원격 연결
git remote add origin https://github.com/me/my-site.git
git push -u origin main

# 2) 배포 도구 설치 및 스크립트 등록
npm install -D gh-pages
#   package.json
#   "scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d dist" }

# 3) 커스텀 도메인 + 배포
echo "my-site.example.com" > public/CNAME
npm run deploy        # 빌드 후 gh-pages 브랜치로 발행

# 4) GitHub 저장소 Settings > Pages 에서 gh-pages 브랜치 확인`,
      codeLanguage: 'bash'
    }
  ]
};

export default chapter;
