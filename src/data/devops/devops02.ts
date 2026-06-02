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
      codeLanguage: 'yaml',
      quiz: {
        question: 'CI/CD에서 CD가 의미하는 것은?',
        questionEn: 'What does CD stand for in CI/CD?',
        options: ['Code Debugging', 'Continuous Deployment(Delivery)', 'Central Database', 'Container Docker'],
        optionsEn: ['Code Debugging', 'Continuous Deployment(Delivery)', 'Central Database', 'Container Docker'],
        correctIndex: 1,
        explanation: 'CD는 Continuous Deployment(또는 Delivery)로, 통합·테스트를 통과한 코드를 자동으로 배포하는 과정을 뜻합니다.',
        explanationEn: 'CD stands for Continuous Deployment (or Delivery), the process of automatically deploying code that passed integration and testing.'
      }
    },
    {
      title: 'Docker로 환경 통일',
      titleEn: 'Standardizing Environments with Docker',
      content: 'Docker는 애플리케이션과 실행 환경을 컨테이너로 묶어 "내 컴퓨터에서는 되는데" 문제를 없앱니다. Dockerfile에 빌드 과정을 정의하고 이미지를 만들면, 어디서든 동일하게 실행됩니다. 멀티 스테이지 빌드로 최종 이미지 크기를 줄일 수 있습니다.',
      contentEn: 'Docker packages an application and its runtime into a container, eliminating the "works on my machine" problem. Define the build process in a Dockerfile and build an image, and it runs identically anywhere. Multi-stage builds reduce the final image size.',
      code: `# Dockerfile - 멀티 스테이지 빌드
# 1단계: 빌드
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2단계: 정적 파일 서빙 (가벼운 nginx)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

# 빌드 & 실행
# docker build -t my-web .
# docker run -p 8080:80 my-web`,
      codeLanguage: 'dockerfile',
      quiz: {
        question: 'Docker를 사용하는 주된 이점은?',
        questionEn: 'What is the main benefit of using Docker?',
        options: ['코드를 자동으로 작성해 준다', '실행 환경을 컨테이너로 통일해 어디서든 동일하게 동작한다', 'CSS를 최적화한다', '데이터베이스를 대체한다'],
        optionsEn: ['It writes code automatically', 'It standardizes the runtime in a container so it behaves the same anywhere', 'It optimizes CSS', 'It replaces databases'],
        correctIndex: 1,
        explanation: 'Docker는 앱과 의존성·환경을 컨테이너로 묶어 개발/스테이징/운영 어디서든 동일하게 실행되도록 보장합니다.',
        explanationEn: 'Docker packages the app, dependencies, and environment into a container so it runs identically across dev, staging, and production.'
      }
    },
    {
      title: '배포 전략과 모니터링',
      titleEn: 'Deployment Strategies and Monitoring',
      content: '안정적인 서비스 운영을 위해 배포 전략을 선택합니다. 롤링 배포는 인스턴스를 순차 교체하고, 블루-그린은 새 버전을 별도로 띄운 뒤 트래픽을 전환하며, 카나리는 일부 사용자에게만 먼저 노출합니다. 배포 후에는 로그와 지표를 모니터링해 문제를 빠르게 감지합니다.',
      contentEn: 'Choose a deployment strategy for stable operations. Rolling deployment replaces instances sequentially, blue-green spins up the new version separately then switches traffic, and canary exposes it to a subset of users first. After deployment, monitor logs and metrics to detect issues quickly.',
      code: `# 주요 배포 전략 비교
# 1) 롤링(Rolling)   : 인스턴스를 조금씩 새 버전으로 교체
# 2) 블루-그린(Blue-Green): 새(green) 환경 준비 후 트래픽 일괄 전환
# 3) 카나리(Canary)  : 트래픽 5% → 25% → 100% 점진 확대

# 헬스 체크 엔드포인트 (배포 검증용)
# GET /health  ->  { "status": "ok", "uptime": 12345 }

# 문제 발생 시 즉시 롤백
# 블루-그린: 트래픽을 다시 blue(이전 버전)로 전환
# git revert 후 재배포로 코드 롤백`,
      codeLanguage: 'bash',
      quiz: {
        question: '새 버전을 일부 사용자에게만 먼저 노출하고 점진적으로 확대하는 배포 전략은?',
        questionEn: 'Which deployment strategy exposes a new version to a subset of users first and expands gradually?',
        options: ['롤링(Rolling)', '블루-그린(Blue-Green)', '카나리(Canary)', '빅뱅(Big Bang)'],
        optionsEn: ['Rolling', 'Blue-Green', 'Canary', 'Big Bang'],
        correctIndex: 2,
        explanation: '카나리 배포는 소수 사용자에게 먼저 새 버전을 노출해 위험을 줄이고, 문제가 없으면 점진적으로 비율을 높입니다.',
        explanationEn: 'Canary deployment exposes the new version to a few users first to reduce risk, then gradually increases the rollout if no issues arise.'
      }
    },
    {
      title: '실습 예제: 테스트 후 자동 배포 워크플로',
      titleEn: 'Practice: Test-then-Deploy Workflow',
      content: 'main에 push되면 의존성 설치 → 린트 → 테스트 → 빌드 → 배포 순서로 자동 실행되는 GitHub Actions 워크플로를 작성해 봅니다. 테스트가 실패하면 배포가 중단되는 안전장치가 핵심입니다.',
      contentEn: 'Write a GitHub Actions workflow that, on push to main, runs install → lint → test → build → deploy in order. The key safeguard is that deployment stops if tests fail.',
      code: `# .github/workflows/ci-cd.yml
name: CI/CD
on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run lint           # 실패 시 이후 단계 중단
      - run: npm run test -- --run   # 테스트 통과해야 배포
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`,
      codeLanguage: 'yaml'
    }
  ]
};

export default chapter;
