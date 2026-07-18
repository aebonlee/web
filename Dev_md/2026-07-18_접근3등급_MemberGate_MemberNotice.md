# 2026-07-18 접근 3등급 체계 — MemberGate·MemberNotice (재사용 표준 추가)

## 한 일
- 접근 3등급(공개 / 회원=로그인+is_complete / 관리자=www_admins, §3.3 확정) 사이트 쪽 구현 2종:
  - `src/auth/MemberGate.tsx` — 회원 전용 페이지·섹션 래퍼. 비로그인→안내문+LoginButtons, 로그인+미완성→OnboardingGate 위임, 완성→children. 화면 차단은 3겹 잠금(화면+RLS+Storage)의 1겹임을 주석 명시.
  - `src/auth/MemberNotice.tsx` — 전 사이트 공통 안내 레이어 팝업. 비로그인(로그인·정확한 기본 정보 안내+LoginButtons) / 미완성([정보 입력하기]→OnboardingGate 폼 즉시 표시, CompletionProbe로 완성 시점 감지) / 완성(렌더 안 함). "오늘 하루 보지 않기" localStorage 날짜 키. 팝업 닫아도 차단은 MemberGate·RLS 유지(역할 분리) 주석 명시. 문구는 상단 MSG 상수, 워드랩 §6 표준(keep-all+overflow-wrap).
- `docs/auth-onboarding-guide.md` 갱신: 복사 파일 5개로 확대, 3등급 체계 설명, MemberNotice(App 최상단 1회)·MemberGate(회원 페이지만) 배치 예시.
- DB 쪽은 www 리포 `react-source/sql/www_member_access.sql`로 별도 작성(www_is_member() 함수 + 접두어_ RLS/Storage 정책 템플릿) — 실행은 대표가 SQL Editor에서 직접.

## 검증
- `npm run build`(tsc -b strict + vite build) 통과 — 신규 2파일 포함 오류 0건. www_profiles 스키마 변경 없음.

## 이유
- 로그인만으로 회원 간주 금지(§3.3): 프로필 미완성자는 www 총괄에서 식별 불가. 안내(팝업)와 차단(게이트) 역할 분리로 UX·보안 결합 방지.

## 남은 일
- www_member_access.sql의 www_is_member() 함수는 대표 실행 대기. 실행 후 회원 전용 테이블·버킷 생기는 사이트부터 템플릿 정책 적용.
- 각 사이트 적용은 사이트별 작업 시 개별 진행(일괄 적용 금지).
