import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { QuizItem } from '../data/types';

interface QuizQuestionProps {
  quiz: QuizItem;
}

export default function QuizQuestion({ quiz }: QuizQuestionProps) {
  const { language } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const question = language === 'en' ? quiz.questionEn : quiz.question;
  const options = language === 'en' ? quiz.optionsEn : quiz.options;
  const explanation = language === 'en' ? quiz.explanationEn : quiz.explanation;

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
  };

  const isCorrect = selected === quiz.correctIndex;

  return (
    <div className="quiz-section">
      <div className="quiz-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <span>{language === 'ko' ? '퀴즈' : 'Quiz'}</span>
      </div>
      <p className="quiz-question">{question}</p>
      <div className="quiz-options">
        {options.map((option, idx) => {
          let className = 'quiz-option';
          if (revealed) {
            if (idx === quiz.correctIndex) className += ' correct';
            else if (idx === selected) className += ' wrong';
          } else if (idx === selected) {
            className += ' selected';
          }
          return (
            <button
              key={idx}
              className={className}
              onClick={() => handleSelect(idx)}
              disabled={revealed}
            >
              <span className="quiz-option-letter">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="quiz-option-text">{option}</span>
            </button>
          );
        })}
      </div>
      {revealed && (
        <div className={`quiz-result ${isCorrect ? 'correct' : 'wrong'}`}>
          <strong>{isCorrect ? (language === 'ko' ? '정답!' : 'Correct!') : (language === 'ko' ? '오답!' : 'Wrong!')}</strong>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
}
