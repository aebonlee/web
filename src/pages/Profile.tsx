import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';
import { getBadges } from '../config/badges';
import BadgeCard from '../components/BadgeCard';
import Certificate from '../components/Certificate';
import { problemsByCategory } from '../data';
import site from '../config/site';
import { updateProfile } from '../utils/auth';

export default function Profile() {
  const { user, profile, isLoggedIn, loading, signOut, refreshProfile } = useAuth();
  const { t } = useLanguage();
  const { completedProblems, syncing } = useProgress();
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState('');

  if (loading) return null;
  if (!isLoggedIn) return <Navigate to="/login" replace />;

  const badges = getBadges(completedProblems);
  const earnedCount = badges.filter(b => b.earned).length;
  const displayName = profile?.display_name || user?.user_metadata?.display_name || user?.email?.split('@')[0] || '';
  const hasAnyCategoryComplete = Object.values(problemsByCategory).some(problems => problems.every(p => completedProblems.includes(p.id)));

  const totalProblems = Object.values(problemsByCategory).reduce((s, arr) => s + arr.length, 0);
  const overallPct = totalProblems ? Math.round((completedProblems.length / totalProblems) * 100) : 0;
  const categoryProgress = site.categories.map(cat => {
    const list = problemsByCategory[cat.id] || [];
    const done = list.filter(p => completedProblems.includes(p.id)).length;
    return { id: cat.id, label: t(cat.labelKey), color: cat.color, done, total: list.length, pct: list.length ? Math.round((done / list.length) * 100) : 0 };
  });

  const handleSaveName = async () => {
    if (nameInput.trim() && user) {
      await updateProfile(user.id, { display_name: nameInput.trim() });
      await refreshProfile();
    }
    setEditingName(false);
  };

  return (
    <div className="profile-page">
      <section className="page-header"><div className="container"><h1>{t('profile')}</h1></div></section>
      <div className="container">
        <div className="profile-header">
          <div className="profile-avatar">
            {profile?.avatar_url ? <img src={profile.avatar_url} alt="" className="profile-avatar-img" /> : <div className="profile-avatar-placeholder">{displayName.charAt(0).toUpperCase()}</div>}
          </div>
          <div className="profile-info">
            <div className="profile-name-row">
              {editingName ? (
                <div className="profile-name-edit">
                  <input type="text" value={nameInput} onChange={e => setNameInput(e.target.value)} autoFocus />
                  <button onClick={handleSaveName} className="profile-name-save">{t('saveName')}</button>
                  <button onClick={() => setEditingName(false)} className="profile-name-cancel">{t('cancelEdit')}</button>
                </div>
              ) : (
                <><h2 className="profile-display-name">{displayName}</h2><button className="profile-edit-btn" onClick={() => { setNameInput(displayName); setEditingName(true); }}>{t('editName')}</button></>
              )}
            </div>
            <p className="profile-email">{user?.email}</p>
            <div className="profile-stats">
              <span className="profile-stat">{t('completedProblems')}: <strong>{completedProblems.length}/40</strong></span>
              <span className="profile-stat">{t('badgesTitle')}: <strong>{earnedCount}/{badges.length}</strong></span>
              {syncing && <span className="profile-syncing">{t('syncing')}</span>}
            </div>
          </div>
          <button className="profile-logout-btn" onClick={signOut}>{t('logout')}</button>
        </div>
        <div className="profile-section">
          <h3 className="profile-section-title">{t('progress')}</h3>
          <div className="mypage-progress-overall">
            <div className="mypage-progress-top">
              <strong>{t('completedProblems')} {completedProblems.length}/{totalProblems}</strong>
              <span className="mypage-progress-pct">{overallPct}%</span>
            </div>
            <div className="mypage-progress-track">
              <div className="mypage-progress-fill" style={{ width: `${overallPct}%` }} />
            </div>
          </div>
          <div className="mypage-progress-cats">
            {categoryProgress.map(c => (
              <div key={c.id} className="mypage-progress-cat">
                <div className="mypage-progress-cat-top">
                  <span style={{ color: c.color, fontWeight: 700 }}>{c.label}</span>
                  <span className="mypage-progress-cat-count">{c.done}/{c.total}</span>
                </div>
                <div className="mypage-progress-track sm">
                  <div className="mypage-progress-fill" style={{ width: `${c.pct}%`, background: c.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="profile-section">
          <h3 className="profile-section-title">{t('badgesTitle')}</h3>
          <div className="badges-grid">{badges.map(badge => <BadgeCard key={badge.id} badge={badge} />)}</div>
        </div>
        <div className="profile-section">
          <h3 className="profile-section-title">{t('certificateTitle')}</h3>
          <p className="profile-section-desc">{t('certificateSubtitle')}</p>
          {hasAnyCategoryComplete ? <Certificate displayName={displayName} completedCount={completedProblems.length} totalCount={40} /> : (
            <div className="certificate-locked"><svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg><p>{t('certificateLocked')}</p></div>
          )}
        </div>
      </div>
    </div>
  );
}
