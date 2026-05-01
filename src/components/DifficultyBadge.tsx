import { useLanguage } from '../contexts/LanguageContext';

const DIFFICULTY_MAP: Record<string, { ko: string; en: string; color: string; bg: string }> = {
  beginner: { ko: '초급', en: 'Beginner', color: '#00B894', bg: 'rgba(0, 184, 148, 0.12)' },
  intermediate: { ko: '중급', en: 'Intermediate', color: '#FDCB6E', bg: 'rgba(253, 203, 110, 0.12)' },
  advanced: { ko: '고급', en: 'Advanced', color: '#E17055', bg: 'rgba(225, 112, 85, 0.12)' },
  practical: { ko: '실전', en: 'Practical', color: '#6C5CE7', bg: 'rgba(108, 92, 231, 0.12)' }
};

export default function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const { language } = useLanguage();
  const config = DIFFICULTY_MAP[difficulty] || DIFFICULTY_MAP.beginner;

  return (
    <span
      className="badge"
      style={{ background: config.bg, color: config.color }}
    >
      {config[language as 'ko' | 'en'] || config.ko}
    </span>
  );
}
