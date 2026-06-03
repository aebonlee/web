-- web_user_progress 행 수준 보안(RLS)
-- 목적: 본인은 자기 진행기록을 읽고/쓰고, 관리자는 전 회원 진행기록을 조회(대시보드).
-- Supabase SQL Editor(service_role)에서 1회 실행.

alter table public.web_user_progress enable row level security;

-- 본인 진행기록 전체 권한(읽기/쓰기/삭제)
drop policy if exists "wup_self" on public.web_user_progress;
create policy "wup_self" on public.web_user_progress
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- 관리자(글로벌 운영자 이메일) 전체 읽기 — 관리자 대시보드용
drop policy if exists "wup_admin_read" on public.web_user_progress;
create policy "wup_admin_read" on public.web_user_progress
  for select
  using (
    (auth.jwt() ->> 'email') in (
      'aebon@kakao.com', 'radical8566@gmail.com', 'aebon@kyonggi.ac.kr', 'aebonlee@gmail.com'
    )
  );

-- 참고: user_profiles 는 이미 관리자 전체 조회가 허용되어 있어야 함
-- (rest/openclaw 등에서 설정한 user_profiles_select_self_or_admin 정책 공유).
