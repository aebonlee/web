import { useLanguage } from '../contexts/LanguageContext';

const ICONS: Record<string, React.ReactNode> = {
  star: <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>,
  zap: <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" stroke="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10"/></svg>,
  flame: <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" stroke="none"><path d="M12 23c-3.866 0-7-3.134-7-7 0-3 2-5.5 4-7.5.667 2.167 2.333 3.5 5 4-1-4 1-8 3-10 0 3 2.5 5.5 3 8.5S22 16 22 16c0 3.866-3.134 7-7 7h-3z"/></svg>,
  target: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  footprints: <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" stroke="none"><path d="M4 16.5C4 18.43 5.57 20 7.5 20s3.5-1.57 3.5-3.5V14H7.5C5.57 14 4 15.57 4 16.5zM7.5 6C5.57 6 4 7.57 4 9.5S5.57 13 7.5 13H11V9.5C11 7.57 9.43 6 7.5 6zM16.5 4c-1.93 0-3.5 1.57-3.5 3.5V11h3.5c1.93 0 3.5-1.57 3.5-3.5S18.43 4 16.5 4zM13 14v2.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5H13z"/></svg>,
  compass: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88" fill="currentColor"/></svg>,
  sword: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 17.5L3 6V3h3l11.5 11.5"/><path d="M13 19l6-6"/><path d="M16 16l4 4"/><path d="M19 21l2-2"/></svg>,
  crown: <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" stroke="none"><path d="M2 20h20v2H2v-2zm1-7l4 4 5-6 5 6 4-4-1-9H4L3 13z"/></svg>,
  trophy: <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" stroke="none"><path d="M7 2v2H4c0 3 2 5 4 6v2c-2 0-4 1-4 3h16c0-2-2-3-4-3v-2c2-1 4-3 4-6h-3V2H7zm-1 4H5c0 1.5.8 2.8 2 3.5L7 6h-1zm12 0h-1l.01 3.5c1.2-.7 2-2 2-3.5h-1zM8 20h8v2H8v-2z"/></svg>,
  globe: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  code: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  layers: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  rocket: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>,
  atom: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>,
  server: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
};

interface BadgeCardProps {
  badge: {
    id: string;
    name: string;
    nameKo: string;
    description: string;
    descriptionKo: string;
    icon: string;
    earned: boolean;
  };
}

export default function BadgeCard({ badge }: BadgeCardProps) {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <div className={`badge-card ${badge.earned ? 'earned' : 'locked'}`}>
      {badge.earned && <div className="badge-check">&#10003;</div>}
      <div
        className="badge-icon"
        style={{ color: badge.earned ? 'var(--primary)' : undefined }}
      >
        {ICONS[badge.icon]}
      </div>
      <h4 className="badge-title">{isKo ? badge.nameKo : badge.name}</h4>
      <p className="badge-desc">{isKo ? badge.descriptionKo : badge.description}</p>
      <span className={`badge-status ${badge.earned ? 'earned' : 'locked'}`}>
        {badge.earned ? (isKo ? '획득' : 'Earned') : (isKo ? '미획득' : 'Locked')}
      </span>
    </div>
  );
}
