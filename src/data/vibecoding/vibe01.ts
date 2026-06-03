import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-nodejs',
  chapter: 1,
  titleKey: 'vibe01',
  sections: [
    {
      title: '바이브코딩 준비 & 내 운영체제 확인',
      titleEn: 'Preparing for Vibe Coding & Checking Your OS',
      content: '바이브코딩(Vibe Coding)은 AI에게 자연어로 의도를 전달해 코드를 만드는 개발 방식입니다. Claude Code 같은 도구는 Node.js 위에서 동작하므로 가장 먼저 Node.js를 설치합니다. 시작 전, 내 컴퓨터의 운영체제(Windows / macOS)와 "터미널"을 알아둡니다. Windows는 PowerShell(시작 메뉴에서 "PowerShell" 검색), macOS는 터미널(Spotlight에서 "터미널" 검색)을 엽니다.',
      contentEn: 'Vibe coding is a way of building software by expressing intent to an AI in natural language. Tools like Claude Code run on Node.js, so install Node.js first. Before starting, know your OS (Windows / macOS) and its "terminal." On Windows use PowerShell (search "PowerShell" in the Start menu); on macOS use Terminal (search "Terminal" in Spotlight).',
      code: `# ── 공통: 이미 설치돼 있는지 확인 ──
node -v      # 예: v20.11.0  (18 이상 권장)
npm -v       # 예: 10.2.4

# 위에서 "command not found"(macOS) 또는
# "'node'은(는) ... 인식되지 않습니다"(Windows) 가 나오면
# 아직 설치되지 않은 것 → 다음 섹션에서 설치합니다.

# 내 운영체제에서 터미널 여는 법
#  · Windows : 시작 메뉴 → "PowerShell" 검색 → 실행
#  · macOS   : Spotlight(⌘+Space) → "터미널" 입력 → 실행`,
      codeLanguage: 'bash',
      quiz: {
        question: 'Claude Code를 쓰기 위해 가장 먼저 설치해야 하는 것은?',
        questionEn: 'What must be installed first to use Claude Code?',
        options: ['Python', 'Node.js', 'Docker', 'Java'],
        optionsEn: ['Python', 'Node.js', 'Docker', 'Java'],
        correctIndex: 1,
        explanation: 'Claude Code는 Node.js 기반 CLI 도구입니다. Node.js(및 함께 설치되는 npm)가 먼저 필요하며 권장 버전은 18 이상입니다.',
        explanationEn: 'Claude Code is a Node.js-based CLI tool. Node.js (and the npm that comes with it) is required first, with version 18+ recommended.'
      }
    },
    {
      title: 'Windows에 Node.js 설치하기',
      titleEn: 'Installing Node.js on Windows',
      content: 'Windows는 공식 사이트에서 LTS 설치 파일(.msi)을 받아 설치하는 것이 가장 쉽습니다. 설치 중 옵션은 기본값 그대로 두고 "Next"만 누르면 됩니다("Add to PATH"는 기본 체크됨). 설치가 끝나면 반드시 PowerShell 창을 새로 열어야 명령이 인식됩니다(기존 창은 인식 못 함).',
      contentEn: 'On Windows, the easiest path is to download the LTS installer (.msi) from the official site. Keep the defaults and just click "Next" ("Add to PATH" is checked by default). After installation, open a NEW PowerShell window so commands are recognized (the old window won\'t see it).',
      code: `# 1) 브라우저로 https://nodejs.org 접속
#    → 왼쪽 "LTS" 버튼의 Windows Installer(.msi) 다운로드
# 2) 받은 .msi 더블클릭 → Next만 눌러 설치 (기본값 유지)
# 3) ★ 새 PowerShell 창을 연다 (시작 메뉴 → PowerShell)
# 4) 설치 확인
node -v
npm -v

# (참고) winget 패키지 매니저가 있다면 명령으로도 가능
winget install OpenJS.NodeJS.LTS`,
      codeLanguage: 'bash',
      quiz: {
        question: 'Windows에서 Node.js 설치 직후 꼭 해야 할 일은?',
        questionEn: 'What must you do right after installing Node.js on Windows?',
        options: ['컴퓨터를 포맷한다', '새 PowerShell 창을 열고 node -v로 확인한다', '브라우저를 바꾼다', 'Python을 설치한다'],
        optionsEn: ['Format the PC', 'Open a NEW PowerShell window and verify with node -v', 'Switch browsers', 'Install Python'],
        correctIndex: 1,
        explanation: '설치 직후에는 PATH가 갱신되어야 하므로, 기존 창이 아닌 새 PowerShell 창을 열어 node -v로 확인합니다.',
        explanationEn: 'The PATH must refresh, so open a NEW PowerShell window (not the old one) and verify with node -v.'
      }
    },
    {
      title: 'macOS에 Node.js 설치하기 (nvm 권장)',
      titleEn: 'Installing Node.js on macOS (nvm Recommended)',
      content: 'macOS는 nvm(Node Version Manager)으로 설치하는 것을 권장합니다. nvm은 Node를 사용자 홈에 설치해 뒤에서 다룰 권한 오류(EACCES)를 예방하고, 여러 버전을 쉽게 바꿀 수 있습니다. 간단히 쓰려면 공식 설치 파일(.pkg)이나 Homebrew도 됩니다.',
      contentEn: 'On macOS, installing via nvm (Node Version Manager) is recommended. nvm installs Node in your home directory, preventing the permission errors (EACCES) covered later, and lets you switch versions easily. For simplicity, the official installer (.pkg) or Homebrew also work.',
      code: `# ── 권장: nvm 사용 (터미널에 붙여넣기) ──
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
# 터미널을 완전히 닫았다가 다시 연 뒤:
nvm install --lts        # 최신 LTS 설치
nvm use --lts
nvm alias default lts/*   # 기본 버전 고정
node -v

# ── 또는: Homebrew 사용 ──
brew install node

# ── 또는: 공식 설치 파일 ──
# https://nodejs.org 에서 macOS Installer(.pkg) 다운로드 후 실행`,
      codeLanguage: 'bash',
      quiz: {
        question: 'macOS에서 nvm으로 Node를 설치하면 좋은 점은?',
        questionEn: 'What is the benefit of installing Node via nvm on macOS?',
        options: ['인터넷이 빨라진다', '사용자 홈에 설치돼 권한 오류를 예방하고 버전 전환이 쉽다', '코드를 자동 작성한다', 'CSS가 예뻐진다'],
        optionsEn: ['Faster internet', 'Installs in your home dir, preventing permission errors and easing version switching', 'Auto-writes code', 'Nicer CSS'],
        correctIndex: 1,
        explanation: 'nvm은 Node를 홈 디렉터리에 두어 sudo 없이 전역 설치가 가능하고(EACCES 예방), 여러 버전을 자유롭게 전환합니다.',
        explanationEn: 'nvm keeps Node in your home directory so global installs work without sudo (preventing EACCES) and lets you switch versions freely.'
      }
    }
  ]
};

export default chapter;
