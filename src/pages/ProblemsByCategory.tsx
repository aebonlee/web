import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getProblemsByCategory } from '../data/index';
import site from '../config/site';
import ProblemCard from '../components/ProblemCard';

export default function ProblemsByCategory() {
  const { category } = useParams();
  const { t } = useLanguage();
  const problems = getProblemsByCategory(category || '');
  const catConfig = site.categories.find(c => c.id === category);

  return (
    <div className="problems-page">
      <section className="page-header">
        <div className="container">
          <h1>{catConfig ? t(catConfig.labelKey) : category}</h1>
          <p>{t('categoryOverview')}</p>
        </div>
      </section>
      <div className="container">
        {problems.length > 0 ? (
          <div className="problems-grid">{problems.map((p, i) => <ProblemCard key={p.id} problem={p} index={i} />)}</div>
        ) : (
          <div className="empty-state"><p className="empty-state-text">{t('noProblemsYet')}</p></div>
        )}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/problems" className="btn btn-secondary">{t('backToList')}</Link>
        </div>
      </div>
    </div>
  );
}
