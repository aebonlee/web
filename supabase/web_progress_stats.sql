-- ============================================================
-- web_progress_stats() — 커뮤니티 진행 집계 RPC (Progress 페이지 상단용)
-- web_user_progress 는 RLS로 본인 행만 보이므로, 집계 수치는 이 함수로 제공한다.
-- SECURITY DEFINER 로 RLS를 우회하되 "개인 식별 정보(user_id)는 반환하지 않고"
-- 합계/개수만 돌려주어 안전하다. anon·authenticated 모두 실행 허용.
-- Supabase SQL Editor(service_role)에서 1회 실행.
-- ============================================================

create or replace function public.web_progress_stats()
returns json
language sql
stable
security definer
set search_path = public
as $$
  select json_build_object(
    'uniqueUsers',       (select count(distinct user_id) from public.web_user_progress),
    'totalCompletions',  (select count(*) from public.web_user_progress),
    'problemCounts',     coalesce(
      (select json_object_agg(problem_id, c)
         from (select problem_id, count(*) as c
                 from public.web_user_progress
                group by problem_id) t),
      '{}'::json)
  );
$$;

grant execute on function public.web_progress_stats() to anon, authenticated;
