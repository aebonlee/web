import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-folder',
  chapter: 2,
  titleKey: 'vibe02',
  sections: [
    {
      title: '작업 폴더를 어디에 만들까?',
      titleEn: 'Where to Create Your Project Folder',
      content: 'Claude Code는 "실행한 폴더"를 작업 대상으로 삼습니다. 그래서 먼저 내 프로젝트를 담을 폴더를 정해야 합니다. 한글·공백·특수문자가 없는 영문 경로를 권장합니다(오류가 적습니다). 권장 위치는 Windows는 C:\\Users\\사용자\\dev, macOS는 ~/dev(홈 폴더 아래 dev) 입니다. 바탕화면이나 다운로드 폴더는 경로가 길고 한글이 섞이기 쉬워 피하는 게 좋습니다.',
      contentEn: 'Claude Code treats the folder it runs in as its workspace, so first decide where to keep your project. Prefer an English path without spaces or special characters (fewer errors). Recommended locations are C:\\Users\\you\\dev on Windows and ~/dev (a dev folder under home) on macOS. Avoid the Desktop or Downloads folder — long paths that often contain non-English characters.',
      code: `# ── Windows (PowerShell) ──
cd $HOME            # 내 사용자 폴더로 이동 (C:\\Users\\사용자)
mkdir dev           # 작업용 dev 폴더 생성 (한 번만)
cd dev              # dev 폴더로 이동

# ── macOS / Linux (터미널) ──
cd ~                # 홈 폴더로 이동 (/Users/사용자)
mkdir -p dev        # dev 폴더 생성 (이미 있으면 그냥 통과)
cd dev              # dev 폴더로 이동

# 지금 어디에 있는지 확인 (공통)
pwd                 # 현재 폴더 경로 출력`,
      codeLanguage: 'bash',
      quiz: {
        question: '작업 폴더 경로로 가장 권장되는 것은?',
        questionEn: 'Which project folder path is most recommended?',
        options: ['바탕화면\\새 폴더 (한글·공백 포함)', '영문·공백 없는 경로 (예: ~/dev, C:\\Users\\you\\dev)', '아무 곳이나 상관없다', '시스템 폴더(C:\\Windows)'],
        optionsEn: ['Desktop\\New Folder (Korean/spaces)', 'English path without spaces (e.g., ~/dev, C:\\Users\\you\\dev)', 'Anywhere is fine', 'A system folder (C:\\Windows)'],
        correctIndex: 1,
        explanation: '한글·공백·특수문자가 없는 영문 경로가 도구 오류를 줄입니다. 홈 폴더 아래 dev 같은 짧은 경로가 안전합니다.',
        explanationEn: 'An English path without spaces/special characters reduces tooling errors. A short path like dev under your home folder is safe.'
      }
    },
    {
      title: '터미널에서 폴더 다루기 (cd · pwd · 목록)',
      titleEn: 'Working with Folders in the Terminal (cd · pwd · listing)',
      content: '터미널의 기본은 "지금 어느 폴더에 있는지"를 늘 확인하는 것입니다. pwd로 현재 위치를 보고, cd로 폴더를 이동하고, 목록을 봅니다(Windows는 dir, macOS는 ls). cd ..는 상위 폴더로, cd 폴더명은 하위 폴더로 들어갑니다. 경로 구분자는 Windows가 역슬래시(\\), macOS가 슬래시(/)입니다.',
      contentEn: 'The basics of the terminal are always knowing "which folder am I in." Use pwd to see your location, cd to move, and list contents (dir on Windows, ls on macOS). cd .. goes up one level; cd foldername enters a subfolder. Path separators are backslash (\\) on Windows and slash (/) on macOS.',
      code: `# 현재 위치 확인 (공통)
pwd

# 폴더 목록 보기
dir                 # ── Windows
ls -al              # ── macOS / Linux

# 폴더 이동
cd dev              # dev 폴더로 들어가기
cd ..               # 한 단계 위로
cd ~                # (macOS) 홈으로 / Windows는: cd $HOME

# 새 프로젝트 폴더 만들고 들어가기 (공통)
mkdir my-first-app
cd my-first-app
pwd                 # 여기가 Claude Code를 실행할 폴더!`,
      codeLanguage: 'bash',
      quiz: {
        question: '현재 내가 어느 폴더에 있는지 확인하는 명령은?',
        questionEn: 'Which command shows which folder you are currently in?',
        options: ['cd', 'pwd', 'mkdir', 'node'],
        optionsEn: ['cd', 'pwd', 'mkdir', 'node'],
        correctIndex: 1,
        explanation: 'pwd(print working directory)는 현재 작업 폴더의 경로를 출력합니다. cd는 이동, mkdir는 폴더 생성입니다.',
        explanationEn: 'pwd (print working directory) prints the current folder path. cd moves, and mkdir creates a folder.'
      }
    },
    {
      title: '실습: 프로젝트 폴더 만들고 준비 끝내기',
      titleEn: 'Practice: Create a Project Folder and Finish Setup',
      content: '이제 Claude Code를 실행할 폴더를 직접 만들어 봅니다. dev 폴더 안에 프로젝트 폴더를 만들고, 그 안으로 들어가 pwd로 위치를 확인하면 준비 끝입니다. 다음 챕터에서 바로 이 폴더에서 Claude Code를 실행합니다.',
      contentEn: 'Now create the folder where you will run Claude Code. Make a project folder inside dev, move into it, and confirm with pwd — setup done. In the next chapter you will run Claude Code right in this folder.',
      code: `# ── Windows (PowerShell) ──
cd $HOME
mkdir dev -Force        # dev 없으면 생성
cd dev
mkdir my-first-app
cd my-first-app
pwd                     # C:\\Users\\사용자\\dev\\my-first-app

# ── macOS / Linux (터미널) ──
mkdir -p ~/dev/my-first-app
cd ~/dev/my-first-app
pwd                     # /Users/사용자/dev/my-first-app

# 여기까지 됐으면 이 폴더 안에서 다음 챕터(Claude Code 실행)로!`,
      codeLanguage: 'bash'
    }
  ]
};

export default chapter;
