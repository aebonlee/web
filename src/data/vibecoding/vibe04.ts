import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '04-troubleshooting',
  chapter: 4,
  titleKey: 'vibe04',
  sections: [
    {
      title: '권한 오류 — macOS(EACCES) & Windows(실행 정책)',
      titleEn: 'Permission Errors — macOS (EACCES) & Windows (Execution Policy)',
      content: '전역 설치·실행 시 권한 오류가 운영체제별로 다릅니다. macOS/Linux는 "EACCES: permission denied"가 흔한데, sudo로 강제하지 말고 nvm으로 Node를 홈에 두는 것이 근본 해결입니다. Windows는 PowerShell 실행 정책 때문에 스크립트가 막힐 수 있어, 현재 사용자에 한해 정책을 완화합니다(관리자 권한 불필요·안전).',
      contentEn: 'Permission errors differ by OS. On macOS/Linux, "EACCES: permission denied" is common — don\'t force it with sudo; the proper fix is nvm (Node in your home). On Windows, PowerShell\'s execution policy may block scripts, so relax it for the current user only (no admin needed, safe).',
      codeBlocks: [
        {
          label: '🍎 macOS / Linux — EACCES 해결 (sudo 금지)',
          code: `# nvm 설치 → Node를 홈에 두어 권한 문제 해결
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
# 터미널 재시작 후
nvm install --lts
npm install -g @anthropic-ai/claude-code`,
          codeLanguage: 'bash',
        },
        {
          label: '🪟 Windows (PowerShell) — 실행 정책',
          code: `# "스크립트를 실행할 수 없습니다" 오류 시
# 현재 사용자만 허용 (관리자 아님, 안전)
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

# 현재 정책 확인
Get-ExecutionPolicy -List`,
          codeLanguage: 'powershell',
        },
      ],
      quiz: {
        question: 'macOS에서 EACCES 권한 오류의 권장 해결책은?',
        questionEn: 'Recommended fix for EACCES on macOS?',
        options: ['항상 sudo로 설치', 'nvm으로 Node를 홈에 설치', '컴퓨터 재부팅', '파일 삭제'],
        optionsEn: ['Always install with sudo', 'Install Node in your home via nvm', 'Reboot', 'Delete files'],
        correctIndex: 1,
        explanation: 'sudo는 권한 문제를 키울 수 있습니다. nvm으로 사용자 홈에 Node를 두면 sudo 없이 전역 설치가 되어 EACCES가 사라집니다.',
        explanationEn: 'sudo can worsen things. nvm puts Node in your home so global installs work without sudo, eliminating EACCES.'
      }
    },
    {
      title: '"명령을 찾을 수 없음" — PATH 문제 (OS별)',
      titleEn: '"Command Not Found" — PATH Issues (per OS)',
      content: '설치는 됐는데 node·npm·claude가 "찾을 수 없음"으로 나오면 PATH 문제이거나 터미널을 다시 안 연 경우입니다. 먼저 새 터미널/PowerShell을 엽니다. Windows는 설치 시 "Add to PATH"가 빠졌을 수 있어 .msi 재설치가 가장 간단하고, macOS는 셸 설정(~/.zshrc)에 nvm 로딩 구문이 있는지 확인합니다.',
      contentEn: 'If installed but node/npm/claude shows "not found," it is a PATH issue or you didn\'t reopen the terminal. Open a new terminal/PowerShell first. On Windows, "Add to PATH" may have been missed (reinstalling the .msi is simplest); on macOS, check that ~/.zshrc loads nvm.',
      codeBlocks: [
        {
          label: '🪟 Windows (PowerShell)',
          code: `# 0) 먼저 새 PowerShell 창을 연다

# node 위치 확인 → 경로가 보이면 PATH 정상
where.exe node

# 안 보이면: nodejs.org 에서 .msi 재설치
#   설치 마법사에서 "Add to PATH" 체크 확인`,
          codeLanguage: 'powershell',
        },
        {
          label: '🍎 macOS / Linux (터미널)',
          code: `# 0) 먼저 새 터미널을 연다

# ~/.zshrc 에 nvm 로딩 구문이 있는지 확인/추가
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# 설정 적용 후 확인
source ~/.zshrc
which node
which claude`,
          codeLanguage: 'bash',
        },
      ],
      quiz: {
        question: '명령이 "찾을 수 없음"으로 나올 때 가장 먼저 시도할 것은?',
        questionEn: 'First thing to try when a command is "not found"?',
        options: ['OS 재설치', '새 터미널을 열고 PATH/셸 설정 확인', '코드 다시 작성', '인터넷 해지'],
        optionsEn: ['Reinstall the OS', 'Open a new terminal and check PATH/shell config', 'Rewrite the code', 'Cancel the internet'],
        correctIndex: 1,
        explanation: '대개 PATH 미갱신(터미널 재시작 필요)이나 셸 설정의 nvm 로딩 누락입니다. Windows는 재설치로 Add to PATH를 보장합니다.',
        explanationEn: 'Usually the PATH wasn\'t refreshed (reopen the terminal) or shell config lacks nvm loading. On Windows, reinstalling ensures Add to PATH.'
      }
    },
    {
      title: '폴더 실수 · 버전 · 네트워크 · 캐시',
      titleEn: 'Wrong Folder · Version · Network · Cache',
      content: '초보자가 가장 자주 겪는 실수는 "엉뚱한 폴더에서 실행"입니다. 항상 pwd로 위치를 확인하고, 아니면 올바른 폴더로 이동하세요(아래 OS별 창). 그 밖에 Node 버전이 낮으면 18 이상으로 올리고(nvm install --lts), 회사망·프록시면 레지스트리 접근을 확인하며, 설치가 꼬이면 캐시 정리 후 재설치합니다(npm cache clean --force → 재설치, npm doctor로 자가 진단).',
      contentEn: 'The most common beginner mistake is "running in the wrong folder" — always confirm with pwd and move to the right folder (OS panels below). Also upgrade Node to 18+ if too low (nvm install --lts), check registry access on corporate/proxy networks, and clear the cache then reinstall if tangled (npm cache clean --force → reinstall; npm doctor to self-check).',
      codeBlocks: [
        {
          label: '🪟 Windows (PowerShell)',
          code: `# 폴더 실수 방지: 실행 전 습관
pwd                          # 원하는 프로젝트 폴더가 맞나?
cd $HOME\\dev\\my-first-app    # 아니면 올바른 폴더로 이동

# 설치가 꼬였을 때: 캐시 정리 후 재설치
npm cache clean --force
npm install -g @anthropic-ai/claude-code`,
          codeLanguage: 'powershell',
        },
        {
          label: '🍎 macOS / Linux (터미널)',
          code: `# 폴더 실수 방지: 실행 전 습관
pwd                          # 원하는 프로젝트 폴더가 맞나?
cd ~/dev/my-first-app        # 아니면 올바른 폴더로 이동

# Node 버전이 낮으면 업그레이드
nvm install --lts && nvm use --lts

# 설치가 꼬였을 때: 캐시 정리 후 재설치
npm cache clean --force
npm install -g @anthropic-ai/claude-code`,
          codeLanguage: 'bash',
        },
      ],
      quiz: {
        question: '초보자가 가장 자주 하는 실수와 예방법으로 옳은 것은?',
        questionEn: 'Most common beginner mistake and its prevention?',
        options: ['타이핑이 느림 — 연습', '엉뚱한 폴더에서 실행 — 실행 전 pwd로 확인', '마우스 고장 — 교체', '모니터가 작음 — 확대'],
        optionsEn: ['Slow typing — practice', 'Running in the wrong folder — confirm with pwd first', 'Broken mouse — replace', 'Small monitor — zoom'],
        correctIndex: 1,
        explanation: 'Claude Code는 현재 폴더를 작업 대상으로 삼으므로, 실행 전 pwd로 올바른 프로젝트 폴더인지 확인하는 습관이 실수를 막습니다.',
        explanationEn: 'Claude Code uses the current folder as its workspace, so confirming the right folder with pwd before running prevents mistakes.'
      }
    }
  ]
};

export default chapter;
