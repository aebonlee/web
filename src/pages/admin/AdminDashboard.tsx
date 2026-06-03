import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { supabase } from '../../lib/supabase';
import site from '../../config/site';
import { problemsByCategory } from '../../data';

const WEB_HOSTNAME = new URL(site.url).hostname;

interface ProfileRow {
  id: string;
  email?: string;
  name?: string;
  display_name?: string;
  signup_domain?: string;
}

interface MemberResult {
  id: string;
  name: string;
  email: string;
  total: number;
  pct: number;
  perCategory: Record<string, number>;
}

const TOTAL_PROBLEMS = Object.values(problemsByCategory).reduce((s, arr) => s + arr.length, 0);
// problem_id → category 매핑
const PROBLEM_CATEGORY: Record<string, string> = {};
Object.entries(problemsByCategory).forEach(([cat, list]) => {
  (list as { id: string }[]).forEach(p => { PROBLEM_CATEGORY[p.id] = cat; });
});

export default function AdminDashboard() {
  const { t, language } = useLanguage();
  const ko = language === 'ko';
  const [results, setResults] = useState<MemberResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      if (!supabase) { setError(ko ? 'Supabase가 설정되지 않았습니다.' : 'Supabase is not configured.'); setLoading(false); return; }
      try {
        // 1) 본 사이트 회원 프로필
        const { data: profs } = await supabase
          .from('user_profiles')
          .select('id, email, name, display_name, signup_domain')
          .or(`signup_domain.eq.${WEB_HOSTNAME},visited_sites.cs.{${WEB_HOSTNAME}}`);
        // 2) 전체 진행 기록
        const { data: prog } = await supabase
          .from('web_user_progress')
          .select('user_id, problem_id');

        const progRows = (prog || []) as { user_id: string; problem_id: string }[];
        const byUser = new Map<string, string[]>();
        progRows.forEach(r => {
          const arr = byUser.get(r.user_id) || [];
          arr.push(r.problem_id);
          byUser.set(r.user_id, arr);
        });

        const profList = (profs || []) as ProfileRow[];
        const profIds = new Set(profList.map(p => p.id));
        const extraIds = [...byUser.keys()].filter(id => !profIds.has(id));

        const rows: MemberResult[] = [];
        const build = (id: string, p?: ProfileRow) => {
          const done = byUser.get(id) || [];
          const perCategory: Record<string, number> = {};
          done.forEach(pid => {
            const cat = PROBLEM_CATEGORY[pid];
            if (cat) perCategory[cat] = (perCategory[cat] || 0) + 1;
          });
          rows.push({
            id,
            name: p?.display_name || p?.name || p?.email || id.slice(0, 8),
            email: p?.email || '-',
            total: done.length,
            pct: TOTAL_PROBLEMS ? Math.round((done.length / TOTAL_PROBLEMS) * 100) : 0,
            perCategory,
          });
        };
        profList.forEach(p => build(p.id, p));
        extraIds.forEach(id => build(id));

        rows.sort((a, b) => b.total - a.total);
        setResults(rows);
      } catch {
        setError(ko ? '데이터를 불러오지 못했습니다. (관리자 권한/RLS 확인 필요)' : 'Failed to load data. (Check admin permissions/RLS)');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [ko]);

  const summary = useMemo(() => {
    const members = results.length;
    const active = results.filter(r => r.total > 0).length;
    const avg = members ? Math.round(results.reduce((s, r) => s + r.pct, 0) / members) : 0;
    const finishers = results.filter(r => r.total >= TOTAL_PROBLEMS).length;
    return { members, active, avg, finishers };
  }, [results]);

  return (
    <div className="admin-page">
      <section className="page-header">
        <div className="container"><h1>{ko ? '관리자 대시보드' : 'Admin Dashboard'}</h1></div>
      </section>
      <div className="container" style={{ paddingBottom: '60px' }}>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          {ko ? '본 사이트 회원들의 학습 진행 결과입니다.' : "Members' learning progress on this site."}
        </p>

        <div className="admin-stat-grid">
          {[
            { label: ko ? '회원 수' : 'Members', val: summary.members },
            { label: ko ? '학습 시작' : 'Active', val: summary.active },
            { label: ko ? '평균 진행률' : 'Avg progress', val: `${summary.avg}%` },
            { label: ko ? '전체 완료' : 'Finishers', val: summary.finishers },
          ].map(c => (
            <div key={c.label} className="admin-stat-card">
              <div className="admin-stat-val">{c.val}</div>
              <div className="admin-stat-label">{c.label}</div>
            </div>
          ))}
        </div>

        {loading ? (
          <p style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>{ko ? '불러오는 중...' : 'Loading...'}</p>
        ) : error ? (
          <p className="admin-empty">{error}</p>
        ) : results.length === 0 ? (
          <p className="admin-empty">{ko ? '아직 진행 데이터가 없습니다.' : 'No progress data yet.'}</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-result-table">
              <thead>
                <tr>
                  <th>{ko ? '이름' : 'Name'}</th>
                  <th>{ko ? '이메일' : 'Email'}</th>
                  <th>{ko ? '진행률' : 'Progress'}</th>
                  <th>{ko ? '완료' : 'Done'}</th>
                  {site.categories.map(cat => <th key={cat.id}>{t(cat.labelKey)}</th>)}
                </tr>
              </thead>
              <tbody>
                {results.map(r => (
                  <tr key={r.id}>
                    <td>{r.name}</td>
                    <td className="admin-cell-muted">{r.email}</td>
                    <td>
                      <div className="admin-mini-track"><div className="admin-mini-fill" style={{ width: `${r.pct}%` }} /></div>
                      <span className="admin-pct">{r.pct}%</span>
                    </td>
                    <td><strong>{r.total}</strong>/{TOTAL_PROBLEMS}</td>
                    {site.categories.map(cat => (
                      <td key={cat.id} style={{ color: cat.color, fontWeight: 700 }}>
                        {r.perCategory[cat.id] || 0}/{(problemsByCategory[cat.id] || []).length}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
