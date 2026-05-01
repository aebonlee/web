import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { allProblems } from '../data/index';
import site from '../config/site';
import ProblemCard from '../components/ProblemCard';

export default function Problems() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const searchLower = search.trim().toLowerCase();
  const baseFiltered = filter === 'all' ? allProblems : allProblems.filter(p => p.category === filter);
  const filtered = searchLower
    ? baseFiltered.filter(p =>
        p.title.toLowerCase().includes(searchLower) ||
        (p.titleEn && p.titleEn.toLowerCase().includes(searchLower)) ||
        p.description.toLowerCase().includes(searchLower) ||
        String(p.number).padStart(2, '0').includes(searchLower)
      )
    : baseFiltered;

  return (
    <div className="problems-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('allProblems')}</h1>
          <p>{allProblems.length > 0 ? `${allProblems.length} ${t('totalProblems')}` : t('noProblemsYet')}</p>
        </div>
      </section>
      <div className="container">
        <div className="problems-toolbar" data-aos="fade-up">
          <div className="filter-bar">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>{t('allProblems')} ({allProblems.length})</button>
            {site.categories.map(cat => {
              const count = allProblems.filter(p => p.category === cat.id).length;
              return <button key={cat.id} className={`filter-btn ${filter === cat.id ? 'active' : ''}`} onClick={() => setFilter(cat.id)}>{t(cat.labelKey)} ({count})</button>;
            })}
          </div>
          <div className="problems-search">
            <svg className="problems-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" className="problems-search-input" placeholder={language === 'ko' ? '문제 검색...' : 'Search problems...'} value={search} onChange={e => setSearch(e.target.value)} />
            {search && <button className="problems-search-clear" onClick={() => setSearch('')}>&times;</button>}
          </div>
        </div>
        {filtered.length > 0 ? (
          filter === 'all' && !searchLower ? (
            site.categories.map(cat => {
              const catProblems = allProblems.filter(p => p.category === cat.id);
              if (catProblems.length === 0) return null;
              return (
                <div key={cat.id} className={`problems-category-section category-${cat.id}`}>
                  <div className="problems-category-header">
                    <span className="problems-category-dot" style={{ background: cat.color }} />
                    <h2 className="problems-category-title">{t(cat.labelKey)}</h2>
                    <span className="problems-category-count">{catProblems.length}</span>
                  </div>
                  <div className="problems-grid">
                    {catProblems.map((problem, idx) => <ProblemCard key={problem.id} problem={problem} index={idx} />)}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="problems-grid">{filtered.map((problem, idx) => <ProblemCard key={problem.id} problem={problem} index={idx} />)}</div>
          )
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
            <p className="empty-state-text">{t('noProblemsYet')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
