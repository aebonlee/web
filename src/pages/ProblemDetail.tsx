import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';
import { getProblemById } from '../data/index';
import DifficultyBadge from '../components/DifficultyBadge';
import WebCodeEditor from '../components/WebCodeEditor';

export default function ProblemDetail() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const { isCompleted, toggleProblem } = useProgress();
  const [showSolution, setShowSolution] = useState(false);

  const problem = getProblemById(id!);
  if (!problem) {
    return <div className="problem-detail"><div className="container"><div className="empty-state"><p className="empty-state-text">{t('noProblem')}</p><Link to="/problems" className="btn btn-primary">{t('backToList')}</Link></div></div></div>;
  }

  const completed = isCompleted(problem.id);
  const title = language === 'en' && problem.titleEn ? problem.titleEn : problem.title;
  const description = language === 'en' && problem.descriptionEn ? problem.descriptionEn : problem.description;
  const hint = language === 'en' && problem.hintEn ? problem.hintEn : problem.hint;
  const explanation = language === 'en' && problem.solutionExplanationEn ? problem.solutionExplanationEn : problem.solutionExplanation;

  return (
    <div className="problem-detail">
      <section className="page-header">
        <div className="container">
          <div className="problem-detail-meta-header">
            <span className="problem-number-header">#{String(problem.number).padStart(2, '0')}</span>
            <DifficultyBadge difficulty={problem.category} />
            {problem.topic && <span className="problem-topic-tag">{problem.topic.toUpperCase()}</span>}
            {completed && <span className="problem-completed-check-header">&#10003;</span>}
          </div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
      <div className="container">
        <div className="problem-detail-content">
          {hint && (
            <div className="problem-hint-section" data-aos="fade-up">
              <h3>{language === 'ko' ? '힌트' : 'Hint'}</h3>
              <p className="problem-hint-text">{hint}</p>
            </div>
          )}

          <div className="problem-solution-section" data-aos="fade-up" data-aos-delay="100">
            <button className="solution-toggle-btn" onClick={() => setShowSolution(!showSolution)}>
              {showSolution ? (language === 'ko' ? '솔루션 숨기기' : 'Hide Solution') : (language === 'ko' ? '솔루션 보기' : 'Show Solution')}
            </button>
            {showSolution && (
              <>
                <WebCodeEditor
                  initialHtml={problem.solution.html || ''}
                  initialCss={problem.solution.css || ''}
                  initialJs={problem.solution.js || ''}
                  previewHeight={300}
                />
                {explanation && (
                  <div className="problem-explanation">
                    <h4>{language === 'ko' ? '풀이 설명' : 'Explanation'}</h4>
                    <p>{explanation}</p>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="problem-complete-section" data-aos="fade-up" data-aos-delay="200">
            <button className={`complete-toggle-btn ${completed ? 'completed' : 'not-completed'}`} onClick={() => toggleProblem(problem.id)}>
              {completed ? `${t('completed')} - ${t('markIncomplete')}` : t('markComplete')}
            </button>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to={`/problems/${problem.category}`} className="btn btn-secondary">{t('backToList')}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
