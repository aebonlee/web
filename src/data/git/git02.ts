import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-github',
  chapter: 2,
  titleKey: 'git02',
  sections: [
    {
      title: 'GitHub & GitHub Pages',
      titleEn: 'GitHub & GitHub Pages',
      content: 'GitHub는 Git 저장소를 호스팅하는 플랫폼입니다. Pull Request로 코드 리뷰를 하고, GitHub Pages로 정적 웹사이트를 무료 배포할 수 있습니다. GitHub Actions로 CI/CD 자동화도 가능합니다.',
      contentEn: 'GitHub is a platform for hosting Git repositories. Review code with Pull Requests, deploy static websites for free with GitHub Pages, and automate CI/CD with GitHub Actions.',
      code: `# GitHub Pages 배포 (gh-pages 패키지)
npm install -D gh-pages

# package.json에 추가
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# 배포 실행
npm run deploy

# CNAME 파일 (커스텀 도메인)
echo "web.dreamitbiz.com" > public/CNAME

# GitHub Actions 예시 (.github/workflows/deploy.yml)
# name: Deploy
# on:
#   push:
#     branches: [main]
# jobs:
#   deploy:
#     runs-on: ubuntu-latest
#     steps:
#       - uses: actions/checkout@v4
#       - run: npm ci && npm run build
#       - uses: peaceiris/actions-gh-pages@v3`,
      codeLanguage: 'javascript'
    }
  ]
};

export default chapter;
