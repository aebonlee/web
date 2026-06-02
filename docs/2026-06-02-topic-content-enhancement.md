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
