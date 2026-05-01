import { Link } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import DifficultyBadge from './DifficultyBadge';

interface Problem {
  id: string;
  category: string;
  number?: number;
  title: string;
  description: string;
  topic?: string;
}

export default function ProblemCard({ problem, index }: { problem: Problem; index: number }) {
  const { isCompleted } = useProgress();
  const completed = isCompleted(problem.id);

  return (
    <Link
      to={`/problems/${problem.category}/${problem.id}`}
      className="problem-card"
      data-aos="fade-up"
      data-aos-delay={`${(index % 6) * 100}`}
    >
      <div className="problem-card-header">
        <span className="problem-number">#{String(problem.number || index + 1).padStart(2, '0')}</span>
        <DifficultyBadge difficulty={problem.category} />
      </div>

      <h3 className="problem-card-title">{problem.title}</h3>
      <p className="problem-card-desc">{problem.description}</p>

      <div className="problem-card-footer">
        {problem.topic && (
          <span className={`problem-lang-tag ${problem.topic}`}>
            {problem.topic.toUpperCase()}
          </span>
        )}
        {completed && (
          <span className="problem-completed-check">&#10003;</span>
        )}
      </div>
    </Link>
  );
}
