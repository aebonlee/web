import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-install-claude-code',
  chapter: 2,
  titleKey: 'vibe02',
  sections: [
    {
      title: 'Claude Code 설치',
      titleEn: 'Installing Claude Code',
      content: 'Node.js가 준비되면 npm으로 Claude Code를 전역(-g) 설치합니다. 설치가 끝나면 어느 폴더에서든 claude 명령을 사용할 수 있습니다. nvm을 쓰면 sudo 없이 설치되어 권한 오류를 피할 수 있습니다.',
      contentEn: 'Once Node.js is ready, install Claude Code globally (-g) with npm. After installation, the claude command is available in any folder. With nvm, it installs without sudo, avoiding permission errors.',
      code: `# 전역 설치
npm install -g @anthropic-ai/claude-code

# 설치 확인
claude --version

# (선택) 최신으로 업데이트
npm update -g @anthropic-ai/claude-code`,
      codeLanguage: 'bash',
      quiz: {
        question: 'Claude Code를 어디서든 실행 가능하도록 설치하는 npm 옵션은?',
        questionEn: 'Which npm option installs Claude Code so it runs anywhere?',
        options: ['--save', '-g (전역 설치)', '-D', '--local'],
        optionsEn: ['--save', '-g (global install)', '-D', '--local'],
        correctIndex: 1,
        explanation: 'npm install -g 는 패키지를 전역(global)으로 설치해, 특정 프로젝트가 아니라 시스템 어디서든 claude 명령을 쓸 수 있게 합니다.',
        explanationEn: 'npm install -g installs the package globally so the claude command works system-wide, not just in one project.'
      }
    },
    {
      title: '실행과 로그인',
      titleEn: 'Running and Logging In',
      content: '작업할 프로젝트 폴더로 이동한 뒤 claude를 실행하면 대화형 세션이 시작됩니다. 처음 실행하면 로그인(인증) 절차가 진행되며, 브라우저로 Anthropic 계정에 인증합니다. 인증 후에는 그 폴더의 코드를 이해하고 작업을 도와줍니다.',
      contentEn: 'Move into the project folder you want to work in and run claude to start an interactive session. On first run, a login (authentication) flow opens to authenticate with your Anthropic account in the browser. After that, it understands the folder\'s code and assists with tasks.',
      code: `# 프로젝트 폴더로 이동 후 실행
cd my-project
claude

# 첫 실행 시 안내에 따라 브라우저로 로그인/인증
# 인증이 끝나면 자연어로 요청하면 됩니다:
#   "이 프로젝트에 로그인 폼을 만들어줘"
#   "이 버그 원인을 찾아서 고쳐줘"`,
      codeLanguage: 'bash',
      quiz: {
        question: 'Claude Code로 특정 프로젝트를 작업하려면 어떻게 시작하나요?',
        questionEn: 'How do you start working on a specific project with Claude Code?',
        options: ['아무 폴더에서나 한 번만 실행', '프로젝트 폴더로 이동(cd) 후 claude 실행', '브라우저에서만 사용', 'node 명령으로 실행'],
        optionsEn: ['Run once from any folder', 'cd into the project folder then run claude', 'Use only in a browser', 'Run with the node command'],
        correctIndex: 1,
        explanation: 'Claude Code는 실행한 폴더를 작업 컨텍스트로 삼습니다. 작업할 프로젝트 폴더로 cd 한 뒤 claude를 실행하세요.',
        explanationEn: 'Claude Code uses the folder it runs in as its working context. cd into the target project folder, then run claude.'
      }
    },
    {
      title: '기본 사용법과 슬래시 명령',
      titleEn: 'Basics and Slash Commands',
      content: '세션 안에서는 평소 말하듯 요청하면 됩니다. /로 시작하는 슬래시 명령으로 도구 기능을 빠르게 쓸 수 있습니다(예: /help 도움말, /clear 대화 초기화). 코드 변경은 사용자의 승인을 거쳐 적용되므로 안전하게 진행됩니다.',
      contentEn: 'Inside a session, just ask in plain language. Slash commands that start with / quickly access tool features (e.g., /help for help, /clear to reset the conversation). Code changes are applied after your approval, so it proceeds safely.',
      code: `# 세션 안에서 쓰는 대표 슬래시 명령
/help        # 사용 가능한 명령 보기
/clear       # 대화 컨텍스트 초기화
/init        # 프로젝트에 CLAUDE.md(안내 파일) 생성

# 자연어 요청 예시
#   "README에 설치 방법 섹션을 추가해줘"
#   "테스트를 실행하고 실패하면 원인을 설명해줘"`,
      codeLanguage: 'bash',
      quiz: {
        question: 'Claude Code 세션에서 / 로 시작하는 입력은 무엇인가요?',
        questionEn: 'What is an input starting with / in a Claude Code session?',
        options: ['파일 경로', '슬래시 명령(도구 기능 단축)', '주석', '에러 메시지'],
        optionsEn: ['A file path', 'A slash command (shortcut to tool features)', 'A comment', 'An error message'],
        correctIndex: 1,
        explanation: '/help, /clear 처럼 / 로 시작하는 입력은 슬래시 명령으로, 도구의 기능을 빠르게 호출합니다.',
        explanationEn: 'Inputs starting with / like /help and /clear are slash commands that quickly invoke tool features.'
      }
    }
  ]
};

export default chapter;
