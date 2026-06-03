import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';
import { allProblems, problemsByCategory } from '../data/index';
import { supabase } from '../lib/supabase';
import site from '../config/site';
import StampGrid from '../components/StampGrid';

export default function Progress() {
  const { t } = useLanguage();
  const { getCompletedCount } = useProgress();

  interface CommunityStats { uniqueUsers: number; totalCompletions: number; problemCounts: Record<string, number>; popularProblem: (typeof allProblems)[number] | null; popularProblemCount: number; }

  const [communityStats, setCommunityStats] = useState<CommunityStats | null>(null);
  const [loading, setLoading] = useState(true);

  const totalProblems = allProblems.length;
  const completedCount = getCompletedCount(allProblems.map(p => p.id));
  const remainingCount = totalProblems - completedCount;
  const completionRate = totalProblems > 0 ? Math.round((completedCount / totalProblems) * 100) : 0;

  useEffect(() => {
    if (!supabase) { setLoading(false); return; }
    // RLS로 raw 행은 본인 것만 보이므로, 집계는 SECURITY DEFINER RPC로 조회 (개인정보 비노출)
    supabase.rpc('web_progress_stats').then(({ data, error }) => {
      if (error || !data) { setLoading(false); return; }
      const uniqueUsers = Number(data.uniqueUsers) || 0;
      const totalCompletions = Number(data.totalCompletions) || 0;
      const problemCounts: Record<string, number> = (data.problemCounts || {}) as Record<string, number>;
      let popularProblemId: string | null = null; let maxCount = 0;
      Object.entries(problemCounts).forEach(([id, cnt]) => { if (cnt > maxCount) { maxCount = cnt; popularProblemId = id; } });
      const popularProblem = popularProblemId ? allProblems.find(p => p.id === popularProblemId) ?? null : null;
      setCommunityStats({ uniqueUsers, totalCompletions, problemCounts, popularProblem, popularProblemCount: maxCount });
      setLoading(false);
    });
  }, []);

  const getCategorySolves = (categoryId: string) => {
    if (!communityStats) return 0;
    const problems = problemsByCategory[categoryId] || [];
    return problems.reduce((sum, p) => sum + (communityStats.problemCounts[p.id] || 0), 0);
  };

  const totalCommunitySolves = communityStats ? communityStats.totalCompletions : 0;

  return (
    <div className="progress-page">
      <section className="page-header"><div className="container"><h1>{t('progressTitle')}</h1><p>{t('communitySubtitle')}</p></div></section>
      <div className="container">
        {loading ? (
          <div className="progress-loading" data-aos="fade-up"><div className="progress-stat-card" style={{ maxWidth: '400px', margin: '0 auto' }}><div className="progress-stat-value" style={{ fontSize: '1rem' }}>{t('loadingStats')}</div></div></div>
        ) : communityStats ? (
          <>
            <div className="progress-stats" data-aos="fade-up" data-aos-delay="200">
              <div className="progress-stat-card"><div className="progress-stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div className="progress-stat-value">{communityStats.uniqueUsers}</div><div className="progress-stat-label">{t('participants')}</div></div>
              <div className="progress-stat-card"><div className="progress-stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg></div><div className="progress-stat-value">{communityStats.totalCompletions}</div><div className="progress-stat-label">{t('totalSolves')}</div></div>
              <div className="progress-stat-card"><div className="progress-stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div><div className="progress-stat-value" style={{ fontSize: '1.2rem' }}>{communityStats.popularProblem ? communityStats.popularProblem.title : '-'}</div><div className="progress-stat-label">{t('popularProblem')}</div></div>
              <div className="progress-stat-card"><div className="progress-stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div className="progress-stat-value">{totalProblems}</div><div className="progress-stat-label">{t('totalProblems')}</div></div>
            </div>
            <h3 className="stamp-section-title" data-aos="fade-up" data-aos-delay="300">{t('communityCategoryProgress')}</h3>
            <div className="category-progress" data-aos="fade-up" data-aos-delay="300">
              {site.categories.map(cat => {
                const catSolves = getCategorySolves(cat.id);
                const catPercent = totalCommunitySolves > 0 ? Math.round((catSolves / totalCommunitySolves) * 100) : 0;
                return (<div key={cat.id} className="category-progress-card"><div className="category-progress-header"><span className="category-progress-name">{t(cat.labelKey)}</span><span className="category-progress-count">{catSolves}{t('solveCount')}</span></div><div className="progress-track"><div className="progress-fill" style={{ width: `${catPercent}%` }} /></div></div>);
              })}
            </div>
            {site.categories.map(cat => {
              const problems = problemsByCategory[cat.id] || [];
              if (problems.length === 0) return null;
              return (<div key={cat.id} className="stamp-section" data-aos="fade-up"><h3 className="stamp-section-title">{t(cat.labelKey)} {t('communityStampCollection')}</h3><StampGrid problems={problems} communityCounts={communityStats.problemCounts} /></div>);
            })}
          </>
        ) : (
          <div className="progress-loading" data-aos="fade-up"><div className="progress-stat-card" style={{ maxWidth: '400px', margin: '0 auto' }}><div className="progress-stat-value" style={{ fontSize: '1rem' }}>{t('statsLoadFailed')}</div></div></div>
        )}
        <hr style={{ margin: '3rem 0 2rem', border: 'none', borderTop: '1px solid var(--border-light)' }} />
        <h2 className="stamp-section-title" data-aos="fade-up" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{t('myProgress')}</h2>
        <div className="progress-stats" data-aos="fade-up" data-aos-delay="200">
          <div className="progress-stat-card"><div className="progress-stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg></div><div className="progress-stat-value">{completedCount}</div><div className="progress-stat-label">{t('totalCompleted')}</div></div>
          <div className="progress-stat-card"><div className="progress-stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div className="progress-stat-value">{remainingCount}</div><div className="progress-stat-label">{t('totalRemaining')}</div></div>
          <div className="progress-stat-card"><div className="progress-stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div><div className="progress-stat-value">{completionRate}%</div><div className="progress-stat-label">{t('completionRate')}</div></div>
          <div className="progress-stat-card"><div className="progress-stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div><div className="progress-stat-value">{totalProblems}</div><div className="progress-stat-label">{t('totalProblems')}</div></div>
        </div>
        <div className="progress-bar-section" data-aos="fade-up" data-aos-delay="300"><div className="progress-bar-header"><span className="progress-bar-title">{t('overallProgress')}</span><span className="progress-bar-percent">{completionRate}%</span></div><div className="progress-track"><div className="progress-fill" style={{ width: `${completionRate}%` }} /></div></div>
        <div className="category-progress" data-aos="fade-up" data-aos-delay="400">
          {site.categories.map(cat => {
            const problems = problemsByCategory[cat.id] || [];
            const catCompleted = getCompletedCount(problems.map(p => p.id));
            const catTotal = problems.length;
            const catPercent = catTotal > 0 ? Math.round((catCompleted / catTotal) * 100) : 0;
            return (<div key={cat.id} className="category-progress-card"><div className="category-progress-header"><span className="category-progress-name">{t(cat.labelKey)}</span><span className="category-progress-count">{catCompleted}/{catTotal}</span></div><div className="progress-track"><div className="progress-fill" style={{ width: `${catPercent}%` }} /></div></div>);
          })}
        </div>
        {site.categories.map(cat => {
          const problems = problemsByCategory[cat.id] || [];
          if (problems.length === 0) return null;
          return (<div key={cat.id} className="stamp-section" data-aos="fade-up"><h3 className="stamp-section-title">{t(cat.labelKey)} {t('stampCollection')}</h3><StampGrid problems={problems} /></div>);
        })}
      </div>
    </div>
  );
}
