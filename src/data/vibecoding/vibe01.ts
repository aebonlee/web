import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-nodejs',
  chapter: 1,
  titleKey: 'vibe01',
  sections: [
    {
      title: '바이브코딩과 Node.js',
      titleEn: 'Vibe Coding and Node.js',
      content: '바이브코딩(Vibe Coding)은 AI에게 자연어로 의도를 전달해 코드를 만들고 다듬는 새로운 개발 방식입니다. Claude Code 같은 AI 코딩 도구는 대부분 Node.js 위에서 동작하므로, 가장 먼저 Node.js를 설치해야 합니다. Node.js를 설치하면 패키지 매니저 npm도 함께 설치됩니다. Claude Code는 Node.js 18 이상을 권장합니다.',
      contentEn: 'Vibe coding is a new development style where you express intent to an AI in natural language to generate and refine code. AI coding tools like Claude Code mostly run on Node.js, so installing Node.js comes first. Installing Node.js also installs the npm package manager. Claude Code recommends Node.js 18 or higher.',
      code: `# 이미 설치되어 있는지 먼저 확인
node -v     # 예: v20.11.0  (18 이상 권장)
npm -v      # 예: 10.2.4

# 위 명령에서 "command not found"가 나오면 아직 설치되지 않은 것`,
      codeLanguage: 'bash',
      quiz: {
        question: 'Claude Code를 사용하기 위해 가장 먼저 설치해야 하는 것은?',
        questionEn: 'What must be installed first to use Claude Code?',
        options: ['Python', 'Node.js', 'Docker', 'Java'],
        optionsEn: ['Python', 'Node.js', 'Docker', 'Java'],
        correctIndex: 1,
        explanation: 'Claude Code는 Node.js 기반 CLI 도구로, Node.js(및 함께 설치되는 npm)가 먼저 필요합니다. 권장 버전은 18 이상입니다.',
        explanationEn: 'Claude Code is a Node.js-based CLI tool, so Node.js (and npm that comes with it) is required first. The recommended version is 18 or higher.'
      }
    },
    {
      title: '운영체제별 Node.js 설치',
      titleEn: 'Installing Node.js by OS',
      content: 'Windows는 공식 사이트(nodejs.org)의 LTS 설치 파일(.msi)을 받아 설치하는 것이 가장 쉽습니다. macOS는 Homebrew로 설치하거나 공식 설치 파일을 사용합니다. 설치 후 터미널(Windows는 PowerShell, macOS는 터미널)을 새로 열어야 명령이 인식됩니다.',
      contentEn: 'On Windows, the easiest way is to download the LTS installer (.msi) from the official site (nodejs.org). On macOS, install via Homebrew or the official installer. After installing, open a new terminal (PowerShell on Windows, Terminal on macOS) so the commands are recognized.',
      code: `# ── Windows ──
# 1) https://nodejs.org 에서 LTS 버전 .msi 다운로드 후 설치
# 2) 새 PowerShell 창에서 확인
node -v

# ── macOS (Homebrew) ──
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
node -v

# ── macOS / Linux 공식 설치 ──
# https://nodejs.org 의 macOS Installer(.pkg) 또는 패키지 매니저 사용`,
      codeLanguage: 'bash',
      quiz: {
        question: 'Node.js 설치 후 가장 먼저 해야 할 일은?',
        questionEn: 'What should you do right after installing Node.js?',
        options: ['컴퓨터를 포맷한다', '터미널을 새로 열고 node -v로 설치를 확인한다', 'Python을 설치한다', '브라우저를 바꾼다'],
        optionsEn: ['Format the computer', 'Open a new terminal and verify with node -v', 'Install Python', 'Switch browsers'],
        correctIndex: 1,
        explanation: '설치 직후에는 새 터미널을 열어야 PATH가 갱신되어 node/npm 명령이 인식됩니다. node -v로 버전을 확인하세요.',
        explanationEn: 'Right after installing, open a new terminal so the PATH refreshes and node/npm are recognized. Verify with node -v.'
      }
    },
    {
      title: 'nvm으로 버전 관리하기 (권장)',
      titleEn: 'Managing Versions with nvm (Recommended)',
      content: 'nvm(Node Version Manager)을 사용하면 여러 Node 버전을 설치하고 자유롭게 전환할 수 있습니다. 전역 설치 권한 문제(EACCES)도 예방되어 Claude Code 설치 시 특히 권장됩니다. macOS/Linux는 nvm, Windows는 nvm-windows를 사용합니다.',
      contentEn: 'With nvm (Node Version Manager) you can install multiple Node versions and switch freely. It also prevents global-install permission issues (EACCES), so it is especially recommended for installing Claude Code. Use nvm on macOS/Linux and nvm-windows on Windows.',
      code: `# nvm 설치 (macOS / Linux)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# 터미널 재시작 후 최신 LTS 설치 및 사용
nvm install --lts
nvm use --lts
nvm alias default lts/*    # 기본 버전 고정

# 설치된 버전 목록 / 전환
nvm ls
nvm use 20

# Windows 는 nvm-windows 사용: https://github.com/coreybutler/nvm-windows`,
      codeLanguage: 'bash',
      quiz: {
        question: 'nvm을 사용하면 좋은 이유로 가장 적절한 것은?',
        questionEn: 'What is the best reason to use nvm?',
        options: ['인터넷이 빨라진다', '여러 Node 버전을 전환하고 전역 설치 권한 문제를 예방한다', 'CSS가 예뻐진다', '코드를 자동 작성한다'],
        optionsEn: ['It speeds up the internet', 'Switch between Node versions and avoid global-install permission issues', 'It beautifies CSS', 'It writes code automatically'],
        correctIndex: 1,
        explanation: 'nvm은 프로젝트별로 다른 Node 버전을 쓰게 해주고, 사용자 홈에 설치되어 sudo 없이 전역 패키지를 설치할 수 있어 EACCES 권한 오류를 예방합니다.',
        explanationEn: 'nvm lets you use different Node versions per project and installs in your home directory, so you can install global packages without sudo, preventing EACCES permission errors.'
      }
    }
  ]
};

export default chapter;
