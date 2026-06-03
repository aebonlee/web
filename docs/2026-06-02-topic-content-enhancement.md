# 토픽 학습 콘텐츠 보강 (2026-06-02)

## 배경
초기 구현 후 개발이 중단되어, 후반 토픽 챕터들이 **섹션 1개짜리 스텁** 상태로 남아 있었다.
HTML/CSS/JavaScript는 다중 섹션·퀴즈로 충실했으나, 나머지 5개 토픽은 콘텐츠가 빈약했다.

## 작업 내용
빌드·타입체크·dev 서버는 모두 정상 동작함을 먼저 확인(기술적 결함 없음). 순수하게 데이터 콘텐츠만 보강.

다음 5개 토픽 11개 챕터를 각 **3섹션 + 3퀴즈**로 통일하여 HTML/CSS 수준으로 끌어올렸다.

| 토픽 | 챕터 | 추가된 섹션 |
|------|------|------------|
| React | react01 (JSX) | Props로 데이터 전달, 리스트 렌더링과 key |
| React | react02 (state) | 함수형 업데이트·불변성, 폼과 제어 컴포넌트 |
| React | react03 (hooks) | 데이터 페칭·정리, 커스텀 Hook |
| TypeScript | ts01 (타입) | interface vs type, 함수 타입 |
| TypeScript | ts02 (제네릭) | 유틸리티 타입, 타입 가드·좁히기 |
| Git | git01 (기초) | 브랜치·병합, 되돌리기·stash |
| Git | git02 (GitHub) | 협업 워크플로·충돌 해결, GitHub Actions |
| Backend | backend01 (Express) | 미들웨어·라우팅, 에러 처리·상태 코드 |
| Backend | backend02 (Supabase) | 필터·정렬·페이지네이션, 인증·RLS |
| DevOps | devops01 (Vite) | 환경 변수·빌드 최적화, 패키지 매니저 |
| DevOps | devops02 (CI/CD) | Docker, 배포 전략·모니터링 |

- 모든 섹션은 기존 포맷(한/영 이중 콘텐츠, `code`, `codeLanguage`, `quiz`)을 따름.
- `codeLanguage`를 내용에 맞게 지정(jsx / typescript / bash / yaml / dockerfile)하여 코드 블록 라벨 정확도 향상.
- 토픽 코드는 `<pre>` 평문 렌더링이며 LivePreview는 `codeLanguage === 'html'`일 때만 동작하므로, 실행 불가한 React/CLI 코드에는 프리뷰 대신 퀴즈로 학습 효과를 강화.

## 검증
- `npm run typecheck` ✅ 통과
- `npm run build` ✅ 통과 (data 청크 230KB → 277KB)
- 11개 챕터 전부 3섹션·3퀴즈 확인

## 후속 과제(아이디어)
- 각 토픽에 챕터 추가(현재 React 3 / 나머지 2)로 분량 확대
- HTML/CSS/JS 챕터에도 동일 기준(3섹션+퀴즈) 점검

---

# 메인페이지(Home) 디자인 개편 (2026-06-02)

## 배경
기존 Home은 히어로 캐러셀 + 토픽 카드 그리드 2개 섹션뿐이라 빈약했다.
방문자에게 플랫폼 규모·강점·진입 동선을 한눈에 보여주는 랜딩 구조가 필요했다.

## 작업 내용
`src/pages/Home.tsx`에 기존 섹션을 유지하면서 4개 섹션을 추가했다.

1. **통계 카운터 바** — `useCountUp` 훅으로 스크롤 진입 시 숫자 카운트업.
   데이터에서 동적 계산: 토픽 수(8), 전체 챕터 수(합산), 문제 수(40), 무료 100%.
2. **특징(Why) 카드 4종** — 체계적 커리큘럼 / 직접 풀며 배우기 / 실시간 미리보기 / 학습 현황 추적.
   `section-alt`(연회색) 배경으로 시각적 리듬 부여.
3. **난이도별 카테고리 카드** — `site.categories`(입문·중급·고급·실전)를 색상 바와 함께 노출,
   각 카드가 `/problems/:id`로 연결.
4. **CTA 배너** — 그라데이션 박스 + 학습 시작/가이드 버튼.

## 스타일 & 번역
- `src/styles/site.css` 끝에 `HOME — added sections` 블록 추가
  (stats / feature / category / CTA + 다크모드 + 768px 반응형).
- 기존 디자인 토큰(`--accent-gradient`, `--hero-bg`, `--radius-*`, `--shadow-*`) 재사용으로 일관성 유지.
- `translations.ts` ko/en에 `home.stats.free`, `home.why.*`, `home.cat.*`, `home.cta.*` 키 추가.
  (기존 `home.stats.topics/chapters/problems` 키는 재사용하여 중복 제거)

## 검증
- `npm run typecheck` ✅ / `npm run build` ✅ / `npm run preview` HTTP 200 ✅
- 빌드 번들에 home-stat-value·home-feature-card·home-cta-box 클래스 포함 확인

---

# 토픽별 챕터 확장 — 전 토픽 4챕터 통일 (2026-06-02)

## 배경
챕터 수가 토픽마다 달랐다(HTML/CSS/JS/React=3, TS/Git/Backend/DevOps=2).
학습 분량의 균형과 커리큘럼 완성도를 위해 **모든 토픽을 4챕터로 통일**했다.

## 추가한 신규 챕터 (12개, 각 3섹션 + 3퀴즈)
| 토픽 | 신규 챕터 | 주제 |
|------|-----------|------|
| HTML | html04 | 멀티미디어와 임베드 (img/figure, audio/video, iframe) |
| CSS | css04 | Grid와 반응형 (Grid, 미디어쿼리, CSS 변수/transition) |
| JavaScript | js04 | ES6+ 핵심 (구조분해·전개, 배열 고차함수, 템플릿 리터럴·옵셔널체이닝) |
| React | react04 | Context·useReducer·성능 최적화(memo/useMemo/useCallback) |
| TypeScript | ts03 | 고급 타입 (enum·리터럴, 맵드·조건부 타입, unknown/never) |
| TypeScript | ts04 | React와 TypeScript (Props·Hook·이벤트·제네릭 API) |
| Git | git03 | Rebase·cherry-pick·tag·diff/blame/bisect |
| Git | git04 | .gitignore·커밋 컨벤션·브랜치 전략·Fork 기여 |
| Backend | backend03 | 인증 (bcrypt 해싱, JWT, CORS·보안) |
| Backend | backend04 | 환경 변수, 파일 업로드(multer), 서버 배포(PM2) |
| DevOps | devops03 | ESLint·Prettier, 자동화 테스트(Vitest), Git Hooks(Husky) |
| DevOps | devops04 | 성능 최적화, 모니터링·로깅(Sentry/web-vitals), HTTPS·캐싱 |

- HTML/CSS/JS 신규 챕터는 `codeLanguage: 'html'` + `livePreview: true`로 실시간 미리보기 지원.
- React/TS는 jsx/tsx, Git/DevOps는 bash, Backend는 javascript로 라벨 지정.
- 8개 `index.ts`에 신규 챕터 import 추가, `translations.ts` ko/en에 챕터 titleKey 12개씩 추가.

## 결과
- 전 토픽 4챕터 = **총 32챕터**(이전 20). 코딩 도전문제 40개와 함께 콘텐츠 대폭 확충.
- `npm run typecheck` ✅ / `npm run build` ✅ (data 청크 277KB → 341KB)

---

# 학습 화면 좌측 메뉴(사이드바) 추가 (2026-06-02)

## 배경
챕터 학습 화면(TopicDetail)이 단일 컬럼이라, 현재 토픽의 다른 챕터·섹션 구조가
한눈에 보이지 않아 탐색이 불편했다. "콘텐츠 영역에 좌측 메뉴 + 학습 내용 노출" 요청.

## 작업 내용
`.chapter-layout`을 `260px + 1fr` 2단 그리드로 개편하고 좌측 사이드바를 추가했다.

- **사이드바 구성**
  - 상단: 현재 토픽 배지(클릭 시 챕터 목록) + 챕터 수
  - 챕터 내비게이션: 현재 토픽의 전체 챕터 링크, 현재 챕터는 토픽 색상으로 강조
  - 현재 챕터 아래에 **섹션 앵커 링크**(#sec-N) 표시 → 클릭 시 해당 섹션으로 스크롤
  - 하단: 8개 토픽 빠른 이동 칩(현재 토픽 강조)
- 본문 각 섹션에 `id="sec-N"` 부여, `scroll-margin-top`으로 고정 네비 가림 방지
- 사이드바는 `position: sticky`로 스크롤 시 고정, 900px 이하에서는 상단으로 쌓이는 반응형 처리
- 다크모드 대응 스타일 추가

## 검증
- `npm run typecheck` ✅ / `npm run build` ✅ / `npm run preview` 학습 라우트 HTTP 200 ✅
- 빌드 번들에 chapter-sidebar-nav·chapter-sidebar-section-link 클래스 포함 확인

---

# 전 챕터 실습 예제 추가 (2026-06-02)

## 배경
각 챕터가 개념 설명 위주여서, 배운 내용을 직접 해보는 "실습 예제"가 부족했다.
**32개 챕터 전부에 실습 예제 섹션을 1개씩 추가**해 학습-실습 흐름을 완성했다.

## 작업 내용 (총 32개 실습 섹션 추가)
- **HTML/CSS/JavaScript (12챕터)** — `codeLanguage: 'html'` + `livePreview: true`로
  실제로 동작하는 인터랙티브 실습 (자기소개 카드, 설문 폼, 시맨틱 프로필, 미디어 갤러리,
  알림 배지, 정보 카드, 네비게이션 바, 반응형 가격표, 글자 수 카운터, 할 일 목록,
  실제 API 호출, 장바구니 합계 계산기 등).
- **React/TypeScript (8챕터)** — 완성형 워크드 예제 (별점 컴포넌트, 좋아요 토글,
  창 크기 추적 Hook, 테마 Context / 장바구니 합계 타이핑, 제네릭 페이지네이션 타입,
  판별 유니온 상태 처리, 제네릭 List 컴포넌트).
- **Git/Backend/DevOps (12챕터)** — 실전 시나리오 (첫 저장소·배포·rebase 정리·PR 보내기 /
  메모 CRUD API·게시글 조회·보호 라우트·배포용 서버 / Vite 셋업·테스트 후 배포 워크플로·
  품질 도구 셋업·성능 점검 루틴).

## 결과
- 챕터당 섹션 +1 → **총 실습 예제 32개 추가**. HTML/CSS/JS 실습은 Preview로 즉시 실행 확인 가능.
- `npm run typecheck` ✅ / `npm run build` ✅ (data 청크 341KB → 381KB)

---

# 🐛 버그 수정: 콘텐츠가 보이지 않던 문제 (2026-06-02)

## 증상
배포된 사이트에서 **네비게이션 메뉴만 보이고 본문 콘텐츠가 비어 있음**.

## 원인
- `[data-aos]` 요소는 CSS에서 `opacity: 0`으로 숨겨지고, 스크롤 진입 시 `.aos-animate`
  클래스가 붙어야 보이는 구조(`animations.css`).
- 그런데 `.aos-animate`를 부여하는 `useAOS` 훅이 **Cart/Checkout/OrderConfirmation(비활성 페이지)에서만**
  호출되고, 실제 사용 중인 Home·TopicList·TopicDetail·PublicLayout에서는 호출되지 않았음.
- 초기 구현부터 존재한 잠재 버그로, `data-aos`가 붙은 모든 본문 콘텐츠가 영구히 `opacity:0` 상태였음.
  (사이드바·네비는 `data-aos`가 없어 보였기 때문에 "메뉴만 존재"하는 것처럼 나타남)

## 해결
- `PublicLayout`에서 `useAOS()`를 호출 → 모든 라우트 페이지에 IntersectionObserver가 적용되어
  본문이 정상적으로 표시됨. MutationObserver가 SPA 라우트 전환 시 새로 마운트된 콘텐츠도 처리.

## 검증
- `npm run typecheck` ✅ / `npm run build` ✅

---

# 🐛 버그 수정: 라이브 프리뷰 한글 깨짐 (2026-06-02)

## 증상
챕터/실습의 **라이브 프리뷰(iframe) 안에서 한글이 깨져(모지바케) 표시**됨.
(예: 자기소개 카드의 "이애본 · 웹 개발 학습자" 등)

## 원인
- `LivePreview`가 Blob URL로 iframe에 띄우는 HTML 문서에 `<meta charset>`이 없었고,
  `new Blob([doc], { type: 'text/html' })`에도 charset이 지정되지 않음.
- 부모 페이지는 UTF-8이지만, charset 선언이 없는 Blob 문서는 브라우저가 인코딩을 추정 →
  UTF-8 한글이 EUC-KR 등으로 잘못 해석되어 깨짐.
- 본문(앱 셸)은 정상 UTF-8이며, 깨짐은 프리뷰 iframe 내부에 한정됨.

## 해결
- 프리뷰 문서 `<head>`에 `<meta charset="UTF-8">` 추가, Blob 타입도 `text/html;charset=utf-8`로 지정.
- 앱 내 iframe 생성처는 `LivePreview` 한 곳뿐이라 단일 수정으로 모든 프리뷰(챕터·실습·Playground·문제풀이)에 적용.
- 추가 보강: `index.html`에 `http-equiv` charset 메타 중복 선언.
- 참고: 소스·빌드·라이브 번들·HTTP 헤더가 전 계층 정상 UTF-8임을 바이트 단위로 확인(이중 인코딩 아님).
  본문까지 깨져 보일 경우 브라우저의 강제 인코딩 설정/캐시 문제이므로 강력 새로고침 권장.

## 검증 (charset 수정)
- `npm run typecheck` ✅ / `npm run build` ✅ / 번들에 `meta charset="UTF-8"` 포함 확인

---

# ✨ 바이브코딩 토픽 추가 (Claude Code 설치 가이드) (2026-06-02)

## 요청
상단 메뉴 "웹 기초" 다음에 "바이브코딩" 메뉴를 추가하고, Claude Code 설치를 위한
Node.js 설치 및 오류 해결 방안을 콘텐츠로 작성.

## 작업 내용
- 신규 토픽 `vibecoding`(바이브코딩) 추가 — 색상 #CC785C(Claude 테라코타), 3개 챕터:
  - **vibe01 — Node.js 설치**: 바이브코딩/Node 개념, OS별 설치(Windows·macOS), nvm 버전관리
  - **vibe02 — Claude Code 설치와 시작**: `npm i -g @anthropic-ai/claude-code`, 실행/로그인, 슬래시 명령
  - **vibe03 — 자주 발생하는 오류 해결**: EACCES 권한, command not found/PATH, 버전·프록시·캐시
  - 각 3섹션 + 3퀴즈, codeLanguage `bash`.
- `data/index.ts`의 `topicMap`·`topicOrder`(웹기초 다음 위치)에 등록.
- `site.ts` 상단 메뉴에 `웹 기초` 다음 `바이브코딩`(/vibecoding) 항목 추가.
- `translations.ts` ko/en에 메뉴 라벨(vibeCoding)·토픽명(vibecoding)·설명·챕터 제목(vibe01~03) 추가.
- `Home.tsx` 토픽 아이콘에 `vibecoding: 'AI'` 추가.

## 검증
- `npm run typecheck` ✅ / `npm run build` ✅ / `preview` `/vibecoding` HTTP 200, 콘텐츠 번들 포함 확인

---

# 라이브 프리뷰 높이 자동 확장 (스크롤 제거) (2026-06-02)

## 요청
소스코드/실행 결과가 길면 세로 영역을 넉넉히 배정해 내부 스크롤 없이 전체가 보이게.

## 작업 내용
- 챕터 코드 블록(`.chapter-code-content pre`)은 이미 `white-space: pre-wrap` + 높이 제한 없음 →
  세로 스크롤 없이 전체 표시됨(확인). 별도 수정 불필요.
- 문제는 `LivePreview` iframe이 고정 높이(TopicDetail 200px)라 렌더 결과가 길면 내부 스크롤 발생.
- `LivePreview`를 **콘텐츠 높이 자동 확장**으로 개선:
  - iframe 내부에 측정 스크립트 주입 → `scrollHeight`를 `postMessage`로 부모에 전달
    (sandbox `allow-scripts` 유지, `allow-same-origin` 불필요 → 보안 유지).
  - 부모가 메시지를 받아 iframe 높이를 콘텐츠 높이로 설정(+여유 4px), 기존 height는 최소 높이로 사용.
  - `load`/`resize`/`ResizeObserver` 및 타이머로 재측정 → 비동기 렌더 후에도 정확.
  - iframe `scrolling="no"`로 내부 스크롤 제거.

## 검증
- `npm run typecheck` ✅ / `npm run build` ✅ / 번들에 `__livePreviewHeight` 포함 확인

---

# 로고 변경 + 푸터 바로가기 메뉴 정비 (2026-06-02)

## 작업 내용
- **로고를 "Web A to Z"로 변경** (`site.ts` brand.parts):
  - "Web "(brand-it, 기본색) + "A to Z"(brand-dream, 포인트 블루) 2조각으로 렌더.
  - Navbar·Footer 모두 `site.brand.parts`를 사용하므로 동시 반영됨.
- **푸터 바로가기(quick links) 메뉴 정비** (`site.ts` footerLinks):
  - 기존: 가이드/문제/실습장/학습현황 4개.
  - 변경: 소개·가이드·웹 기초·바이브코딩·도장깨기·실습장·학습현황 7개로 확장하여
    현재 상단 메뉴 구조 및 신규 바이브코딩 토픽과 일치시킴.
  - 모든 경로는 유효 라우트, 라벨 키(ko/en) 존재 확인.

## 현재 콘텐츠 규모(누적)
- 학습 토픽 10개(HTML·CSS·JS·바이브코딩·React·TS·Git·Backend·DevOps),
  토픽 챕터 37개(웹/프로그래밍 9토픽 × 4 + 바이브코딩 3), 코딩 도전문제 40개.
- 각 챕터 다중 섹션·퀴즈·실습 예제, HTML/CSS/JS 실습은 라이브 프리뷰 자동 높이 지원.

## 검증
- `npm run typecheck` ✅ / `npm run build` ✅ / 푸터 라벨 키(ko·en) 존재 확인

---

# Python 프레임워크 토픽 + About 개편 + 주석 녹색 (2026-06-02)

## 1) Python 상단 메뉴 + 4개 토픽 추가
- 신규 상단 메뉴 **"Python"**(드롭다운)을 "프레임워크"(React/TS) 다음에 추가.
- 신규 토픽 4개(각 3챕터, 개념 2 + 실습 1, 코드 `python`):
  - **Django**(#44B78B): 시작·MTV / 모델·ORM·admin / URL·뷰·템플릿
  - **Flask**(#6366F1): 시작·라우팅 / JSON REST API·에러처리 / Jinja2·Blueprint·폼
  - **Gradio**(#FF7C00): Interface·컴포넌트 / Blocks·State·챗봇 / 공유·이미지·Dataframe
  - **Streamlit**(#FF4B4B): 시작·차트 / 위젯·session_state·캐시 / 레이아웃·배포·CSV
- `data/index.ts` topicMap·topicOrder 등록, `site.ts` Python 드롭다운, translations ko/en(메뉴·토픽명·설명·챕터 12개), Home 아이콘(Dj·Fl·Gr·St) 연결.

## 2) About 페이지 개편 (이모지 누락 수정)
- 원인: About이 Font Awesome 아이콘(`fa-*`)을 썼는데 프로젝트에 FA가 로드되지 않아 아이콘이 전부 미표시.
- 해결: **이모지 기반**으로 교체(🌐🤖⚛️🐍🔧🥋⚡📈), 통계·CTA 추가, 현재 플랫폼 범위(바이브코딩·Python 포함)로 콘텐츠 갱신, 실제 CSS 변수 사용.

## 3) 소스 코드 주석 녹색 표시
- 챕터 코드/`CodeViewer`가 평문 `<pre>`라 주석 구분이 안 됨.
- `utils/highlightComments`로 언어별 주석(`#`, `//`, `/* */`, `<!-- -->`; `://` 오탐 제외)을
  `<span class="code-comment">`로 감싸 **녹색(#6A9955)** 표시. HTML 이스케이프 후 주입(보안).

## 검증
- `npm run typecheck` ✅ / `npm run build` ✅ (data 청크 445KB)
- `preview`에서 /django·/flask·/gradio·/streamlit·/django/01-start HTTP 200, 주석 하이라이트·콘텐츠 번들 포함 확인

---

# 토픽 첫 진입 페이지(오버뷰) 전문 개편 (2026-06-03)

## 배경
각 메뉴의 첫 클릭 페이지(TopicList)가 챕터만 나열돼 밋밋하고 학습 동기·로드맵이 보이지 않음.
"학습 내용·로드맵·학습 기초를 알려주는, 더 기술적이고 상세한 전문 페이지"로 재구성 요청.

## 작업 내용
- 신규 `data/topicMeta.ts` — 토픽별 큐레이션 메타(태그라인·학습성과·선수지식) ko/en, 13개 토픽.
- `pages/TopicList.tsx` 전면 재설계 → **오버뷰 페이지**:
  - **히어로**: 토픽 색상 배지·제목·태그라인·설명 + 메타 칩(챕터·섹션·퀴즈 수·라이브 실습·선수지식) + CTA.
  - **이런 걸 배워요**: 전 챕터 섹션 제목을 자동 수집해 체크리스트 그리드로 노출(실습 예제 제외) → 데이터 기반이라 구체적·기술적.
  - **이 과정을 마치면**: 학습 성과 콜아웃(토픽 색상 강조).
  - **학습 로드맵**: 챕터를 번호 카드 경로로, 각 챕터의 섹션 제목을 칩으로 미리보기 + 섹션/퀴즈 수.
  - 토픽 간 이동(prev/next) 유지.
- `styles/site.css`에 오버뷰 전용 스타일(히어로·메타칩·learn 그리드·outcome·roadmap) + 다크모드 + 반응형 추가.
- 로드맵/학습항목은 챕터·섹션 데이터에서 자동 도출 → 토픽이 늘어도 자동 반영.

## 검증
- `npm run typecheck` ✅ / `npm run build` ✅ / `preview` /html·/react·/django·/vibecoding HTTP 200, 오버뷰 클래스 번들 포함 확인

---

# SEO 정비: sitemap.xml / robots.txt (2026-06-03)

## 배경
`public/sitemap.xml`이 다른 템플릿 잔재 상태였음 — 도메인이 `templete.dreamitbiz.com`,
존재하지 않는 경로(`/books`, `/shop`, `/cart`, `/books/it` 등)만 나열, 실제 토픽/챕터 누락.
`robots.txt`의 Sitemap URL도 잘못된 도메인.

## 작업 내용
- `public/sitemap.xml` 전면 재생성 (도메인 `https://web.dreamitbiz.com`, lastmod 2026-06-03):
  - 정적: `/`, `/about`, `/guide`, `/problems`, `/playground`, `/progress`
  - 문제 카테고리: `/problems/{beginner,intermediate,advanced,practical}`
  - 13개 토픽 오버뷰 `/{topic}` + 각 챕터 `/{topic}/{chapterId}` (챕터 id는 데이터 파일에서 추출)
  - 총 **70개 URL**, 우선순위/changefreq 차등 부여.
- `public/robots.txt` Sitemap URL을 `https://web.dreamitbiz.com/sitemap.xml`로 정정.

## 검증
- 잘못된 도메인(templete) 잔존 0건, `<loc>` 70개 확인.
- `npm run build`로 dist에 반영(빌드가 public/ 복사).

---

# 바이브코딩 초보자용 상세화 (운영체제별 + 폴더 지정) (2026-06-03)

## 배경
"자주 발생하는 오류 해결"까지는 좋으나, **운영체제(Windows/macOS)에 맞춘 오류·폴더 지정**까지 다뤄
초보자가 한 번에 따라할 수 있도록 더 상세한 단계별 안내가 필요.

## 작업 내용
- 바이브코딩 토픽 3챕터 → **4챕터**로 확장(운영체제별·폴더 중심):
  - **vibe01 Node.js 설치 (운영체제별)** — OS·터미널 확인 / Windows .msi·winget / macOS nvm·Homebrew·pkg.
  - **vibe02 작업 폴더와 터미널 (신규)** — 권장 경로(C:\\Users\\you\\dev, ~/dev), 한글·공백 경로 회피,
    cd·pwd·dir/ls, OS별 경로 구분자, 프로젝트 폴더 생성·이동 실습.
  - **vibe03 Claude Code 설치와 시작** — 전역 설치, 프로젝트 폴더에서 실행(실행 전 pwd 강조)·로그인, 슬래시 명령.
  - **vibe04 자주 발생하는 오류 해결** — macOS EACCES + Windows 실행정책(ExecutionPolicy),
    PATH 문제(OS별), 폴더 실수·버전·프록시·캐시.
- 각 챕터 코드 블록을 `# ── Windows ──` / `# ── macOS / Linux ──`로 명시 구분.
- `index.ts` 4챕터 등록, 번역 키(vibe01~04 ko/en) 갱신, sitemap 재생성(71 URL, vibecoding 4챕터 포함).

## 검증
- `npm run typecheck` ✅ / `npm run build` ✅ / `preview` /vibecoding·/vibecoding/02-folder·/04-troubleshooting HTTP 200.

---

# 바이브코딩: OS별 코드 창 분리 + 명령어 정확화 (2026-06-03)

## 배경
"운영체제별로 정확한 명령어를, 명령어 소스 창도 구분해서" 요청.
기존엔 한 코드 블록에 Windows/macOS를 주석으로 섞어 초보자가 혼동할 수 있었음.

## 작업 내용
- 데이터 모델 확장: `TopicSection.codeBlocks?: CodeBlock[]`(라벨+코드+언어) 추가(`data/types.ts`).
- `TopicDetail` 렌더러: `codeBlocks`를 **라벨이 붙은 개별 코드 창**으로 렌더(데스크톱 2열·모바일 1열, 각 창 복사 버튼).
- `styles/site.css`에 `.chapter-code-os-grid` 추가.
- 바이브코딩 챕터(vibe02·03·04) 재작성 → OS 분기 단계를 **🪟 Windows (PowerShell) / 🍎 macOS·Linux** 두 창으로 분리.
- 명령어 정확화: Windows는 PowerShell 기준(`cd $HOME`, `mkdir`(CMD는 `md` 병기), `pwd`, `dir`, `where.exe`,
  `Set-ExecutionPolicy -Scope CurrentUser`), macOS는 `mkdir -p`, `ls -al`, nvm/zshrc.
- `highlightCode`의 주석 녹색 처리 대상에 `powershell` 추가.

## 검증
- `npm run typecheck` ✅ / `npm run build` ✅ / preview 200, OS 코드 창 클래스 번들 포함 확인.

---

# 다른 토픽으로 OS별 코드 창 확대 적용 (2026-06-03)

## 배경
바이브코딩에 적용한 OS별 코드 창(codeBlocks)을 OS가 갈리는 다른 토픽에도 적용.

## 작업 내용
- 렌더 순서 조정: `codeBlocks`(설치/설정)를 본문 `code`(앱 코드)보다 **먼저** 표시 → "설정 후 코드" 자연스러운 흐름.
- **Python 가상환경 활성화 OS 분리** (대표적 OS 분기점):
  - `django01`: venv 생성·활성화(`venv\\Scripts\\activate` vs `source venv/bin/activate`)부터 runserver까지 OS별 창.
  - `flask01`·`gradio01`·`streamlit01`: 가상환경+설치 창을 🪟Windows/🍎macOS로 분리, 앱 코드는 그 뒤에 표시.
- **devops01** 환경변수 파일 생성: PowerShell `Set-Content .env ...` vs bash `echo ... > .env` 로 분리(npm 단계는 공통).
- Git/Backend는 명령이 OS 무관(git·node·npm 동일)이라 적용 대상 아님.

## 검증
- `npm run typecheck` ✅ / `npm run build` ✅ / preview /django·/flask·/streamlit/01-start·/devops/01-vite 200.

---

# Git 토픽에 OS별 설치 섹션 추가 (2026-06-03)

## 작업 내용
- `git01` 첫 섹션으로 **"Git 설치와 초기 설정"** 추가:
  - OS별 설치 창 3종 — 🪟Windows(git-scm/winget), 🍎macOS(Homebrew/xcode-select), 🐧Linux(apt/dnf).
  - 공통: `git --version` 확인 + 최초 1회 전역 설정(`git config --global user.name/email`, `init.defaultBranch main`).
- 오버뷰의 "이런 걸 배워요"·로드맵에 자동 반영(섹션 데이터 기반).

## 검증
- `npm run typecheck` ✅ / `npm run build` ✅ / preview /git/01-basics 200, 설치 콘텐츠 번들 포함 확인.

---

# Backend 토픽에 OS별 설치 섹션 추가 (2026-06-03)

## 작업 내용
- `backend01` 첫 섹션으로 **"Node.js 설치 & Express 프로젝트 준비"** 추가:
  - OS별 설치 창 3종 — 🪟Windows(nodejs.org/winget)·🍎macOS(brew/nvm)·🐧Linux(nvm/apt).
  - 공통: `node -v`/`npm -v` 확인 + `mkdir`·`npm init -y`·`npm install express` 프로젝트 준비.
- 오버뷰의 "이런 걸 배워요"·로드맵에 자동 반영.

## 검증
- `npm run typecheck` ✅ / `npm run build` ✅ / preview /backend/01-nodejs 200, 설치 콘텐츠 번들 포함 확인.

---

# DevOps 토픽에 OS별 설치 섹션 추가 (2026-06-03)

## 작업 내용
- `devops01` 첫 섹션 **"개발 환경 준비 — Node.js 설치"** 추가:
  - OS별 Node 설치 창 3종(🪟Windows winget·🍎macOS brew/nvm·🐧Linux nvm/apt). Vite·ESLint·Vitest의 공통 전제.
- `devops02` Docker 섹션에 **Docker 설치(OS별)** 창 추가:
  - 🪟Windows·🍎macOS Docker Desktop(winget/brew cask), 🐧Linux Docker Engine(get.docker.com + usermod). 설치 창이 Dockerfile 앞에 표시.

## 검증
- `npm run typecheck` ✅ / `npm run build` ✅ / preview /devops/01-vite·/devops/02-cicd 200, 설치 콘텐츠 번들 포함 확인.

## 정리 — OS별 설치/설정 코드 창 적용 현황
바이브코딩 · Python(django/flask/gradio/streamlit) · Git · Backend · DevOps 전부 OS별 설치 창 적용 완료.

---

# React/TS 설치 섹션 + 🐛 로그인 에러(Supabase env) 수정 (2026-06-03)

## 1) React·TypeScript 설치 섹션 추가
- `react01` 첫 섹션 **"React 프로젝트 시작 (Vite)"**: OS별 Node 설치 창 + 공통 `npm create vite ... --template react`·`npm run dev`.
- `ts01` 첫 섹션 **"TypeScript 설치 & 프로젝트 설정"**: OS별 Node 설치 + Vite react-ts 템플릿 / `npm i -D typescript`·`npx tsc --init`.

## 2) 🐛 로그인 에러 — 원인/해결
- **증상**: 로그인(이메일·OAuth) 동작 안 함.
- **원인**: `lib/supabase.ts`·`utils/supabase.ts`가 Supabase URL/KEY를 `import.meta.env.VITE_SUPABASE_*`에서만 읽는데,
  이 clone에는 `.env`가 없어(.env.example만 존재) **빌드 시 Supabase가 비활성(null)** → 배포 번들에 Supabase 설정이 빠짐.
  (라이브 번들에 supabase URL 부재 확인 / 정상인 rest 번들과 대조.)
- **해결**: 84개 사이트가 공유하는 동일 Supabase 프로젝트의 공개 anon key를 형제 리포(rest)의 `.env`에서 복사해
  `web/.env`(gitignore 대상, 커밋 안 함) 생성 → 재빌드 시 번들에 URL/KEY 포함 → 재배포.
- 참고: anon key는 공개키로 클라이언트 번들 노출이 설계상 정상(RLS로 보호). 향후 web 배포 시 `.env` 필요.

## 검증
- `npm run build` 후 dist 번들에 supabase URL 포함 확인 → 배포 후 라이브 번들에도 포함 확인.

---

# GitHub Actions 자동 배포 워크플로 추가 (로그인 env 회귀 방지) (2026-06-03)

## 배경
web만 자동 배포 워크플로가 없어 수동 `npm run deploy`(로컬 .env 의존)에 의존 → 로컬 .env 부재 시
Supabase 설정이 빠진 빌드가 배포되어 로그인이 깨지는 회귀가 발생. 형제 리포(coding·joongang·ax-study)는
이미 `.github/workflows/deploy.yml`로 Actions 자동 배포를 사용 중.

## 작업 내용
- 형제 리포의 deploy 워크플로를 가져와 `web/.github/workflows/deploy.yml` 생성:
  - push(main)/수동(workflow_dispatch) 트리거 → `npm ci` → `npm run build` → peaceiris/actions-gh-pages@v4로 gh-pages 배포(cname web.dreamitbiz.com).
  - 빌드 env에 `VITE_SUPABASE_URL/ANON_KEY`를 **repo secret 우선, 없으면 공개 anon 값으로 폴백** 주입
    → (repo Secrets에 Supabase 키 등록 완료되어, 공개값 폴백 제거하고 secrets.* 만 사용하도록 정리.)
- 이후 web 배포는 main push 시 Actions가 처리(로컬 .env 의존 제거).

## 검증
- 워크플로 push 후 Actions 빌드·배포 성공 및 라이브 번들에 Supabase 포함 확인.
