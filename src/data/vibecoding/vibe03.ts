import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '03-install-claude-code',
  chapter: 3,
  titleKey: 'vibe03',
  sections: [
    {
      title: 'Claude Code 설치',
      titleEn: 'Installing Claude Code',
      content: 'Node.js가 준비되면 npm으로 Claude Code를 전역(-g) 설치합니다. 전역 설치는 어느 폴더에서든 claude 명령을 쓸 수 있게 해줍니다. macOS에서 nvm을 쓰면 sudo 없이 설치되어 권한 오류를 피할 수 있습니다(앞 챕터 권장 이유).',
      contentEn: 'Once Node.js is ready, install Claude Code globally (-g) with npm. A global install makes the claude command available in any folder. On macOS with nvm, it installs without sudo, avoiding permission errors (the reason nvm was recommended earlier).',
      code: `# 전역 설치 (Windows·macOS 공통)
npm install -g @anthropic-ai/claude-code

# 설치 확인
claude --version

# (선택) 최신으로 업데이트
npm update -g @anthropic-ai/claude-code

# ※ macOS에서 "permission denied / EACCES" 가 나오면
#    sudo 로 강제하지 말고 nvm 사용을 권장 (4챕터 참고)`,
      codeLanguage: 'bash',
      quiz: {
        question: 'Claude Code를 어디서든 실행 가능하게 설치하는 npm 옵션은?',
        questionEn: 'Which npm option installs Claude Code so it runs anywhere?',
        options: ['--save', '-g (전역 설치)', '-D', '--local'],
        optionsEn: ['--save', '-g (global install)', '-D', '--local'],
        correctIndex: 1,
        explanation: 'npm install -g 는 패키지를 전역으로 설치해, 특정 프로젝트가 아니라 시스템 어디서든 claude 명령을 쓸 수 있게 합니다.',
        explanationEn: 'npm install -g installs the package globally so the claude command works system-wide, not just in one project.'
      }
    },
    {
      title: '프로젝트 폴더에서 실행 & 로그인',
      titleEn: 'Run in Your Project Folder & Log In',
      content: '2챕터에서 만든 프로젝트 폴더로 이동(cd)한 뒤 claude를 실행하면 대화형 세션이 시작됩니다. ★실행 전 pwd로 "원하는 폴더에 있는지" 꼭 확인하세요(엉뚱한 폴더에서 실행하면 그 폴더를 작업 대상으로 삼습니다). 처음 실행하면 브라우저로 Anthropic 계정 로그인(인증)을 진행합니다.',
      contentEn: 'Move (cd) into the project folder you made in Chapter 2, then run claude to start an interactive session. ★Before running, confirm with pwd that you are in the intended folder (running in the wrong folder makes that folder the workspace). On first run, log in (authenticate) with your Anthropic account in the browser.',
      code: `# 1) 작업 폴더로 이동 후 위치 확인
cd ~/dev/my-first-app        # Windows: cd $HOME\\dev\\my-first-app
pwd                          # 원하는 폴더가 맞는지 확인!

# 2) Claude Code 실행
claude

# 3) 첫 실행 시 안내에 따라 브라우저로 로그인/인증
#    인증이 끝나면 자연어로 요청:
#    "이 폴더에 간단한 HTML 페이지를 만들어줘"
#    "방금 만든 파일을 설명해줘"`,
      codeLanguage: 'bash',
      quiz: {
        question: 'claude 실행 전에 pwd로 폴더를 확인해야 하는 이유는?',
        questionEn: 'Why check the folder with pwd before running claude?',
        options: ['속도를 높이려고', 'Claude Code가 실행한 폴더를 작업 대상으로 삼기 때문', '로그인을 건너뛰려고', '인터넷 연결 확인용'],
        optionsEn: ['To speed it up', 'Because Claude Code uses the folder it runs in as the workspace', 'To skip login', 'To check the internet'],
        correctIndex: 1,
        explanation: 'Claude Code는 실행 위치(현재 폴더)를 작업 컨텍스트로 삼습니다. 엉뚱한 폴더에서 실행하면 의도치 않은 파일을 다루게 되므로 pwd로 확인합니다.',
        explanationEn: 'Claude Code uses its launch location (current folder) as the working context. Running elsewhere touches unintended files, so confirm with pwd.'
      }
    },
    {
      title: '기본 사용법과 슬래시 명령',
      titleEn: 'Basics and Slash Commands',
      content: '세션 안에서는 평소 말하듯 요청하면 됩니다. /로 시작하는 슬래시 명령으로 기능을 빠르게 씁니다(/help 도움말, /clear 대화 초기화, /init 프로젝트 안내 파일 생성). 코드 변경은 사용자의 승인을 거쳐 적용되므로 안전하게 진행됩니다. 세션을 끝내려면 /exit 또는 Ctrl+C 두 번.',
      contentEn: 'Inside a session, just ask in plain language. Slash commands starting with / give quick access to features (/help, /clear to reset, /init to create a project guide file). Code changes apply after your approval, so it proceeds safely. To end a session, use /exit or press Ctrl+C twice.',
      code: `# 세션 안에서 쓰는 대표 슬래시 명령
/help        # 사용 가능한 명령 보기
/clear       # 대화 컨텍스트 초기화
/init        # 프로젝트에 CLAUDE.md(안내 파일) 생성
/exit        # 세션 종료

# 자연어 요청 예시
#   "README에 설치 방법 섹션을 추가해줘"
#   "테스트를 실행하고 실패하면 원인을 설명해줘"`,
      codeLanguage: 'bash',
      quiz: {
        question: 'Claude Code 세션에서 / 로 시작하는 입력은?',
        questionEn: 'What is an input starting with / in a Claude Code session?',
        options: ['파일 경로', '슬래시 명령(기능 단축)', '주석', '에러 메시지'],
        optionsEn: ['A file path', 'A slash command (feature shortcut)', 'A comment', 'An error message'],
        correctIndex: 1,
        explanation: '/help, /clear 처럼 / 로 시작하는 입력은 슬래시 명령으로, 도구 기능을 빠르게 호출합니다.',
        explanationEn: 'Inputs starting with / like /help and /clear are slash commands that quickly invoke tool features.'
      }
    }
  ]
};

export default chapter;
