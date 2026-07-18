# www 회원 총괄 — 사이트 쪽 재사용 컴포넌트 사용법

> 전역 CLAUDE.md 규칙 구현체: §3.2 Supabase fallback 하드코딩, §3.3 구글+카카오 2종 로그인·
> 가입 출처(signup_site) 기록·www 총괄 관리, §3.4 재사용 유틸 표준.
> DB(www_profiles·가입 트리거·RLS)는 이미 운영 중.

## 복사할 파일 3개 (원본: 04-templates/web/src/)

| 파일 | 역할 |
|---|---|
| `lib/supabaseClient.ts` | 공용 클라이언트 + `SITE_ID` 상수 + `WwwProfile` 타입. env 우선, 누락 시 공용 fallback |
| `auth/LoginButtons.tsx` | 구글+카카오 로그인 버튼 2종. OAuth 시작 전 `localStorage['signup_site'] = SITE_ID` 기록 |
| `auth/OnboardingGate.tsx` | `www_profiles.is_complete=false`면 온보딩 폼으로 전 화면 차단. 저장 시 signup_site 채움 |

## 적용 절차 (신규 사이트)

1. 위 3개 파일을 같은 상대 경로(`src/lib/`, `src/auth/`)로 복사.
2. **`lib/supabaseClient.ts`의 `SITE_ID` 한 곳만 사이트 id로 수정** (예: `'mju'`).
   미수정 시 www 관리 화면 통계에 `'[사이트id]'`로 노출되어 바로 발견된다.
3. App 라우팅 전체를 OnboardingGate로 감싸기:
   ```tsx
   import OnboardingGate from './auth/OnboardingGate';

   <OnboardingGate>
     {/* 기존 Router/Routes 전체 */}
   </OnboardingGate>
   ```
4. 로그인 화면에 LoginButtons 배치:
   ```tsx
   import LoginButtons from './auth/LoginButtons';
   <LoginButtons />
   ```

## 동작 흐름

- 이메일 가입 사이트라면: `signUp({ options: { data: { signup_site: SITE_ID } } })`로 심으면
  가입 트리거가 즉시 기록 (OAuth만 쓰는 사이트는 불필요).
- OAuth 가입: 트리거가 signup_site=null로 행 생성 → OnboardingGate 저장 시
  localStorage 값으로 채우고 키 삭제.
- 필수 3종(이름·연락처·이메일) 검증: 연락처 `010-0000-0000` 형식, 이름·이메일 공백 불가.
  선택 2종: 소속 기관·수강 과정.
- 행 생성은 가입 트리거 전담(정책상 클라이언트 insert 불가) — 게이트는 update만 한다.
  www_profiles 스키마는 확정본이므로 변경 금지.

## 확인 방법

- 가입 후 www.dreamitbiz.com `/admin/members`(회원 총괄)에서 signup_site별 집계·목록 확인.
