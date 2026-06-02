import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '03-quality',
  chapter: 3,
  titleKey: 'devops03',
  sections: [
    {
      title: 'ESLint와 Prettier',
      titleEn: 'ESLint and Prettier',
      content: 'ESLint는 코드의 잠재적 오류와 안티패턴을 정적으로 검사하고, Prettier는 코드 포맷(들여쓰기·따옴표·줄바꿈)을 자동으로 통일합니다. 둘을 함께 쓰면 팀 전체가 일관된 스타일과 품질을 유지할 수 있습니다.',
      contentEn: 'ESLint statically checks code for potential errors and anti-patterns, while Prettier automatically unifies code formatting (indentation, quotes, line breaks). Used together, they keep an entire team consistent in style and quality.',
      code: `# 설치
npm install -D eslint prettier eslint-config-prettier

# 검사 / 자동 수정
npx eslint src --fix
npx prettier --write "src/**/*.{ts,tsx}"

// .prettierrc 예시
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}

# package.json scripts
#   "lint": "eslint src",
#   "format": "prettier --write src"`,
      codeLanguage: 'bash',
      quiz: {
        question: 'ESLint와 Prettier의 주된 역할 구분으로 올바른 것은?',
        questionEn: 'What correctly distinguishes the main roles of ESLint and Prettier?',
        options: ['둘 다 코드 포맷만 담당', 'ESLint는 코드 품질/오류 검사, Prettier는 포맷 정리', '둘 다 빌드 도구', 'Prettier가 버그를 잡는다'],
        optionsEn: ['Both only handle formatting', 'ESLint checks quality/errors, Prettier handles formatting', 'Both are build tools', 'Prettier catches bugs'],
        correctIndex: 1,
        explanation: 'ESLint는 잠재적 오류·안티패턴을 잡는 린터, Prettier는 스타일을 자동 정렬하는 포매터입니다. 역할이 다르므로 함께 사용합니다.',
        explanationEn: 'ESLint is a linter that catches potential errors/anti-patterns; Prettier is a formatter that auto-aligns style. Their roles differ, so they are used together.'
      }
    },
    {
      title: '자동화 테스트',
      titleEn: 'Automated Testing',
      content: 'Vitest·Jest 같은 도구로 단위 테스트를 작성해 코드가 의도대로 동작하는지 자동 검증합니다. 테스트는 리팩터링 시 안전망이 되고, CI에 연결하면 PR마다 자동 실행되어 회귀(regression)를 막습니다.',
      contentEn: 'Write unit tests with tools like Vitest or Jest to automatically verify that code behaves as intended. Tests act as a safety net during refactoring, and when wired into CI they run on every PR to prevent regressions.',
      code: `import { describe, it, expect } from 'vitest';

function add(a, b) { return a + b; }

describe('add', () => {
  it('두 수를 더한다', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('음수도 처리한다', () => {
    expect(add(-1, 1)).toBe(0);
  });
});

# 실행
# npx vitest          (watch 모드)
# npx vitest run      (1회 실행, CI용)`,
      codeLanguage: 'javascript',
      quiz: {
        question: '자동화 테스트를 CI에 연결했을 때의 주요 이점은?',
        questionEn: 'What is a key benefit of wiring automated tests into CI?',
        options: ['빌드 크기가 줄어든다', 'PR마다 자동 실행되어 회귀 버그를 조기에 잡는다', 'CSS가 예뻐진다', '서버 비용이 0이 된다'],
        optionsEn: ['Build size shrinks', 'They run on every PR, catching regressions early', 'CSS looks nicer', 'Server cost becomes zero'],
        correctIndex: 1,
        explanation: '테스트를 CI에 연결하면 코드 변경마다 자동 실행되어, 기존 기능이 깨지는 회귀를 병합 전에 발견할 수 있습니다.',
        explanationEn: 'Wiring tests into CI runs them on every change, catching regressions that break existing features before merge.'
      }
    },
    {
      title: 'Git Hooks와 자동화',
      titleEn: 'Git Hooks and Automation',
      content: 'Husky로 Git 훅을 설정하면 커밋·푸시 직전에 린트·포맷·테스트를 자동 실행할 수 있습니다. lint-staged와 결합하면 변경된 파일만 검사해 빠릅니다. 문제가 있는 코드가 저장소에 들어가는 것을 사전에 차단합니다.',
      contentEn: 'With Husky you can set up Git hooks to run lint/format/tests automatically right before commit or push. Combined with lint-staged, it checks only changed files for speed. This blocks problematic code from entering the repository up front.',
      code: `# Husky 설치 및 초기화
npm install -D husky lint-staged
npx husky init

# .husky/pre-commit
#   npx lint-staged

// package.json - 변경된 파일만 검사
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}`,
      codeLanguage: 'bash',
      quiz: {
        question: 'Husky로 설정하는 Git 훅의 목적은?',
        questionEn: 'What is the purpose of a Git hook set up with Husky?',
        options: ['브랜치를 자동 삭제', '커밋/푸시 전에 린트·테스트 등을 자동 실행', '커밋 메시지를 번역', '원격 저장소를 생성'],
        optionsEn: ['Auto-delete branches', 'Auto-run lint/tests before commit/push', 'Translate commit messages', 'Create a remote repo'],
        correctIndex: 1,
        explanation: 'Git 훅은 특정 Git 이벤트(예: pre-commit) 시 스크립트를 실행합니다. Husky로 커밋 전 린트·테스트를 강제해 품질을 보장합니다.',
        explanationEn: 'Git hooks run scripts on specific Git events (e.g., pre-commit). Husky enforces lint/tests before commit to ensure quality.'
      }
    }
  ]
};

export default chapter;
