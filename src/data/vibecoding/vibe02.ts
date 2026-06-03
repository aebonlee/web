import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-folder',
  chapter: 2,
  titleKey: 'vibe02',
  sections: [
    {
      title: '작업 폴더를 어디에 만들까?',
      titleEn: 'Where to Create Your Project Folder',
      content: 'Claude Code는 "실행한 폴더"를 작업 대상으로 삼으므로, 먼저 프로젝트를 담을 폴더를 정합니다. 한글·공백·특수문자가 없는 영문 경로를 권장합니다(오류가 적습니다). 권장 위치는 Windows는 C:\\Users\\사용자\\dev, macOS는 ~/dev 입니다. 아래는 운영체제별 명령이 다르니 본인 OS의 창만 따라 하세요. (Windows는 PowerShell 기준이며, CMD에서는 mkdir 대신 md 를 써도 됩니다.)',
      contentEn: 'Claude Code uses the folder it runs in as its workspace, so first decide where your project lives. Prefer an English path without spaces/special characters (fewer errors). Recommended: C:\\Users\\you\\dev on Windows and ~/dev on macOS. Commands differ by OS — follow only your OS panel. (Windows is shown for PowerShell; in CMD you can use md instead of mkdir.)',
      codeBlocks: [
        {
          label: '🪟 Windows (PowerShell)',
          code: `# 사용자 폴더로 이동 (C:\\Users\\사용자)
cd $HOME

# dev 폴더 생성  (CMD에서는: md dev)
mkdir dev

# dev 폴더로 이동
cd dev

# 현재 위치 확인
pwd`,
          codeLanguage: 'powershell',
        },
        {
          label: '🍎 macOS / Linux (터미널)',
          code: `# 홈 폴더로 이동 (/Users/사용자)
cd ~

# dev 폴더 생성  (-p: 이미 있어도 오류 없음)
mkdir -p dev

# dev 폴더로 이동
cd dev

# 현재 위치 확인
pwd`,
          codeLanguage: 'bash',
        },
      ],
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
      titleEn: 'Working with Folders (cd · pwd · listing)',
      content: '터미널의 기본은 "지금 어느 폴더에 있는지"를 늘 확인하는 것입니다. pwd로 현재 위치, cd로 이동, 목록 보기는 명령이 OS마다 다릅니다(Windows는 dir, macOS는 ls). cd ..는 상위 폴더, cd 폴더명은 하위 폴더로 들어갑니다. 절대경로 구분자는 Windows가 역슬래시(\\), macOS가 슬래시(/)입니다.',
      contentEn: 'The basics: always know "which folder am I in." pwd shows location, cd moves, and listing differs by OS (dir on Windows, ls on macOS). cd .. goes up, cd name enters a subfolder. Absolute-path separators are backslash (\\) on Windows and slash (/) on macOS.',
      codeBlocks: [
        {
          label: '🪟 Windows (PowerShell)',
          code: `pwd                  # 현재 위치
dir                  # 폴더 목록  (ls 도 동작)
cd dev               # 하위 폴더로 들어가기
cd ..                # 한 단계 위로
cd $HOME             # 홈 폴더로

mkdir my-first-app   # 프로젝트 폴더 생성 (CMD: md my-first-app)
cd my-first-app
pwd                  # 여기가 Claude Code 실행 폴더!`,
          codeLanguage: 'powershell',
        },
        {
          label: '🍎 macOS / Linux (터미널)',
          code: `pwd                  # 현재 위치
ls -al               # 폴더 목록
cd dev               # 하위 폴더로 들어가기
cd ..                # 한 단계 위로
cd ~                 # 홈 폴더로

mkdir -p my-first-app   # 프로젝트 폴더 생성
cd my-first-app
pwd                  # 여기가 Claude Code 실행 폴더!`,
          codeLanguage: 'bash',
        },
      ],
      quiz: {
        question: '현재 내가 어느 폴더에 있는지 확인하는 명령은?',
        questionEn: 'Which command shows which folder you are in?',
        options: ['cd', 'pwd', 'mkdir', 'node'],
        optionsEn: ['cd', 'pwd', 'mkdir', 'node'],
        correctIndex: 1,
        explanation: 'pwd(print working directory)는 현재 작업 폴더 경로를 출력합니다. cd는 이동, mkdir(Windows CMD는 md)는 폴더 생성입니다.',
        explanationEn: 'pwd (print working directory) prints the current folder path. cd moves; mkdir (md in Windows CMD) creates a folder.'
      }
    },
    {
      title: '실습: 프로젝트 폴더 만들고 준비 끝내기',
      titleEn: 'Practice: Create a Project Folder and Finish Setup',
      content: 'Claude Code를 실행할 폴더를 직접 만들어 봅니다. dev 안에 프로젝트 폴더를 만들고 그 안으로 들어가 pwd로 위치를 확인하면 준비 끝입니다. 본인 OS의 창만 그대로 복사해 실행하세요.',
      contentEn: 'Create the folder where you will run Claude Code. Make a project folder inside dev, move into it, and confirm with pwd. Copy and run only your OS panel.',
      codeBlocks: [
        {
          label: '🪟 Windows (PowerShell)',
          code: `cd $HOME
mkdir dev            # 이미 있으면 이 줄은 건너뛰기
cd dev
mkdir my-first-app
cd my-first-app
pwd                  # C:\\Users\\사용자\\dev\\my-first-app`,
          codeLanguage: 'powershell',
        },
        {
          label: '🍎 macOS / Linux (터미널)',
          code: `mkdir -p ~/dev/my-first-app
cd ~/dev/my-first-app
pwd                  # /Users/사용자/dev/my-first-app`,
          codeLanguage: 'bash',
        },
      ],
    }
  ]
};

export default chapter;
