import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-cicd',
  chapter: 2,
  titleKey: 'devops02',
  sections: [
    {
      title: 'CI/CD & 배포',
      titleEn: 'CI/CD & Deployment',
      content: 'CI/CD(Continuous Integration/Continuous Deployment)는 코드 변경 시 자동으로 빌드, 테스트, 배포하는 프로세스입니다. GitHub Actions, Vercel, Netlify, GitHub Pages 등 다양한 배포 옵션이 있습니다.',
      contentEn: 'CI/CD (Continuous Integration/Continuous Deployment) automatically builds, tests, and deploys on code changes. Various deployment options include GitHub Actions, Vercel, Netlify, and GitHub Pages.',
      code: `# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`,
      codeLanguage: 'javascript'
    }
  ]
};

export default chapter;
