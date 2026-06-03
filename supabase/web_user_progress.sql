-- ============================================================
-- web_user_progress — web.dreamitbiz.com 학습 진행률 저장 테이블
-- (84개 사이트가 공유하는 Supabase에서 web_ 접두어로 사이트 격리)
-- Supabase SQL Editor(service_role)에서 1회 실행하면 테이블+RLS가 생성됩니다.
-- ============================================================

-- 1) 테이블 생성
--    upsert가 onConflict 미지정으로 동작하므로 (user_id, problem_id)를 복합 PK로 두어
--    동일 (회원, 문제) 중복을 막고 upsert가 PK 충돌로 갱신되게 한다.
create table if not exists public.web_user_progress (
  user_id      uuid        not null references auth.users(id) on delete cascade,
  problem_id   text        not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, problem_id)
);

create index if not exists web_user_progress_user_idx
  on public.web_user_progress (user_id);

-- 2) 행 수준 보안(RLS)
alter table public.web_user_progress enable row level security;

-- 2-1) 본인 진행기록 전체 권한(읽기/쓰기/삭제)
drop policy if exists "wup_self" on public.web_user_progress;
create policy "wup_self" on public.web_user_progress
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- 2-2) 관리자(글로벌 운영자 이메일) 전체 읽기 — 관리자 대시보드용
drop policy if exists "wup_admin_read" on public.web_user_progress;
create policy "wup_admin_read" on public.web_user_progress
  for select
  using (
    (auth.jwt() ->> 'email') in (
      'aebon@kakao.com', 'radical8566@gmail.com', 'aebon@kyonggi.ac.kr', 'aebonlee@gmail.com'
    )
  );

-- 참고: user_profiles 는 전 사이트 공유 테이블이며 관리자 전체 조회 정책이 이미 있어야 함.
