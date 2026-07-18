# web
web

## 재사용 표준 (신규 사이트에 파일 복사만으로 사용)

- 회원/온보딩: `src/lib/supabaseClient.ts` + `src/auth/LoginButtons.tsx` + `src/auth/OnboardingGate.tsx`
  — 절차는 [docs/auth-onboarding-guide.md](docs/auth-onboarding-guide.md) (SITE_ID 한 곳만 수정)
- 알림: `src/utils/notifications.ts` (sendEmail/sendSMS/sendBoth/buildEmailHtml)
- 다국어: `src/utils/translations.ts`
