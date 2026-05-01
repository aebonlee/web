import { Link } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';

interface Problem {
  id: string;
  category: string;
  title: string;
  number?: number;
}

interface StampGridProps {
  problems: Problem[];
  communityCounts?: Record<string, number>;
}

export default function StampGrid({ problems, communityCounts }: StampGridProps) {
  const { isCompleted } = useProgress();

  if (!problems || problems.length === 0) return null;

  return (
    <div className="stamp-grid">
      {problems.map((problem) => {
        const completed = isCompleted(problem.id);
        const count = communityCounts ? communityCounts[problem.id] : null;
        return (
          <Link
            key={problem.id}
            to={`/problems/${problem.category}/${problem.id}`}
            className={`stamp-cell ${completed ? 'completed' : ''}`}
          >
            <span className="stamp-icon">
              {completed ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-blue)' }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--border-medium)' }}>
                  <rect x="3" y="3" width="18" height="18" rx="4"/>
                </svg>
              )}
            </span>
            <span className="stamp-number">#{String(problem.number || 1).padStart(2, '0')}</span>
            <span className="stamp-title">{problem.title}</span>
            {count != null && (
              <span className="stamp-community-count">{count}명</span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
