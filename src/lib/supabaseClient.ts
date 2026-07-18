/**
 * supabaseClient.ts — 공용 Supabase 클라이언트 + 사이트 식별 (재사용 표준)
 *
 * 신규 사이트 사용법: 이 파일을 복사한 뒤 아래 SITE_ID 한 곳만 수정.
 * 사용 절차 전체는 04-templates/web/docs/auth-onboarding-guide.md 참고.
 */
import { createClient } from '@supabase/supabase-js';

// [수정] 사이트 id 한 곳만 교체 — 가입 출처(www_profiles.signup_site) 기록 키.
// 예: 'mju', 'skala', 'www'. 미교체 시 www 관리 화면 통계에 '[사이트id]'로 노출되어 바로 발견됨.
export const SITE_ID = '[사이트id]';

// env 우선, 누락 시 공용 프로젝트 fallback 하드코딩.
// 이유: 클린 빌드(gh-pages)에서 env 누락 시 "Supabase not configured"로
// 로그인이 통째로 깨진 사고 반복 (전역 CLAUDE.md §3.2). anon key는 RLS로 보호되는 공개 키.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://hcmgdztsgjvzcyxyayaj.supabase.co';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbWdkenRzZ2p2emN5eHlheWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MzU4ODcsImV4cCI6MjA4NzAxMTg4N30.gznaPzY1l8qDAPsEyYNR9KS7f7VqS3xaw-_2HTSwSZw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/** 전 사이트 공용 회원 프로필 행 (www_profiles — 스키마 확정본, 변경 금지) */
export interface WwwProfile {
  user_id: string;
  name: string | null;
  phone: string | null;
  email: string | null;
  org: string | null;
  course: string | null;
  signup_site: string | null;
  signup_at: string;
  updated_at: string;
  is_complete: boolean;
}
