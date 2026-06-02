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
