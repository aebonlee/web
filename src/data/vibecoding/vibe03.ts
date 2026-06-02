import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '03-troubleshooting',
  chapter: 3,
  titleKey: 'vibe03',
  sections: [
    {
      title: '권한 오류 (EACCES)',
      titleEn: 'Permission Error (EACCES)',
      content: '전역 설치 시 "EACCES: permission denied" 오류가 가장 흔합니다. macOS/Linux에서 시스템 경로에 설치하려다 권한이 막힌 경우입니다. sudo로 강제 설치하기보다, nvm으로 Node를 사용자 홈에 두고 설치하는 것이 근본 해결책입니다.',
      contentEn: 'The most common error on global install is "EACCES: permission denied." On macOS/Linux it happens when installing to a system path is blocked. Rather than forcing with sudo, the proper fix is to use nvm so Node lives in your home directory.',
      code: `# 증상
# npm error code EACCES
# npm error syscall mkdir ... permission denied

# 권장 해결: nvm 사용 (sudo 불필요)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install --lts
npm install -g @anthropic-ai/claude-code

# 대안: npm 전역 경로를 홈으로 변경
npm config set prefix ~/.npm-global
export PATH="$HOME/.npm-global/bin:$PATH"   # ~/.zshrc 또는 ~/.bashrc 에 추가`,
      codeLanguage: 'bash',
      quiz: {
        question: 'EACCES 권한 오류의 권장 해결 방법은?',
        questionEn: 'What is the recommended fix for the EACCES permission error?',
        options: ['항상 sudo로 설치', 'nvm을 사용하거나 npm 전역 경로를 홈으로 변경', '컴퓨터 재부팅', '파일 삭제'],
        optionsEn: ['Always install with sudo', 'Use nvm or set the npm global prefix to your home', 'Reboot the computer', 'Delete files'],
        correctIndex: 1,
        explanation: 'sudo는 권한 문제를 더 키울 수 있습니다. nvm으로 사용자 홈에 Node를 두거나 npm prefix를 홈 디렉터리로 바꾸면 sudo 없이 전역 설치가 됩니다.',
        explanationEn: 'sudo can make permission issues worse. Using nvm or setting the npm prefix to your home directory lets you install globally without sudo.'
      }
    },
    {
      title: '"command not found" / PATH 문제',
      titleEn: '"command not found" / PATH Issues',
      content: '설치는 됐는데 node, npm, claude 명령이 "command not found"로 나온다면 PATH 설정이나 터미널 재시작 문제입니다. 새 터미널을 열고, nvm을 쓴다면 셸 설정 파일에 nvm 로딩 구문이 있는지 확인합니다.',
      contentEn: 'If installation succeeded but node, npm, or claude shows "command not found," it is a PATH or terminal-restart issue. Open a new terminal, and if using nvm, check that the shell config loads nvm.',
      code: `# 1) 새 터미널을 열고 다시 시도
node -v
claude --version

# 2) nvm 사용 시: 셸 설정에 로딩 구문 확인 (~/.zshrc 또는 ~/.bashrc)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# 3) 설정 적용
source ~/.zshrc      # 또는  source ~/.bashrc

# 4) claude 위치 확인
which claude
npm root -g`,
      codeLanguage: 'bash',
      quiz: {
        question: '명령이 "command not found"로 나올 때 먼저 시도할 것은?',
        questionEn: 'What should you try first when a command shows "command not found"?',
        options: ['OS 재설치', '새 터미널을 열고 PATH/셸 설정(nvm 로딩) 확인', '코드를 다시 작성', '인터넷 해지'],
        optionsEn: ['Reinstall the OS', 'Open a new terminal and check PATH/shell config (nvm loading)', 'Rewrite the code', 'Cancel the internet'],
        correctIndex: 1,
        explanation: '대개 PATH가 갱신되지 않았거나 셸 설정에 nvm 로딩 구문이 없어서입니다. 새 터미널을 열고 ~/.zshrc 등에 nvm 로딩이 있는지 확인하세요.',
        explanationEn: 'Usually the PATH was not refreshed or the shell config lacks the nvm loading lines. Open a new terminal and verify nvm loading in ~/.zshrc, etc.'
      }
    },
    {
      title: '버전·네트워크·캐시 문제',
      titleEn: 'Version, Network, and Cache Issues',
      content: 'Node 버전이 너무 낮으면 설치/실행이 실패할 수 있으니 18 이상으로 올립니다. 회사망·프록시 환경에서는 npm 레지스트리 접근이 막힐 수 있어 프록시 설정이나 네트워크 확인이 필요합니다. 설치가 꼬이면 npm 캐시를 정리하고 재설치합니다.',
      contentEn: 'If the Node version is too low, install/run may fail, so upgrade to 18+. On corporate/proxy networks, access to the npm registry can be blocked, so check proxy settings or the network. If installation gets tangled, clear the npm cache and reinstall.',
      code: `# Node 버전이 낮으면 업그레이드 (nvm)
nvm install --lts && nvm use --lts

# 프록시 환경에서 레지스트리 접근 설정 (필요 시)
npm config set proxy http://proxy.company.com:8080
npm config set registry https://registry.npmjs.org/

# 설치가 꼬였을 때: 캐시 정리 후 재설치
npm cache clean --force
npm uninstall -g @anthropic-ai/claude-code
npm install -g @anthropic-ai/claude-code

# 진단 정보 출력
npm doctor`,
      codeLanguage: 'bash',
      quiz: {
        question: '설치가 꼬였을 때 시도할 수 있는 조치로 알맞은 것은?',
        questionEn: 'Which is an appropriate action when an installation gets tangled?',
        options: ['아무것도 하지 않는다', 'npm 캐시 정리 후 재설치', '브라우저 북마크 삭제', '모니터 교체'],
        optionsEn: ['Do nothing', 'Clear the npm cache and reinstall', 'Delete browser bookmarks', 'Replace the monitor'],
        correctIndex: 1,
        explanation: 'npm cache clean --force 로 캐시를 정리하고 제거 후 재설치하면 손상된 설치 상태를 초기화할 수 있습니다. npm doctor로 환경을 점검할 수도 있습니다.',
        explanationEn: 'Clearing the cache with npm cache clean --force, then uninstalling and reinstalling resets a corrupted install. You can also check the environment with npm doctor.'
      }
    }
  ]
};

export default chapter;
