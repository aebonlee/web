import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { topicMap, topicOrder } from '../data/index';

export default function TopicList() {
  const { topic } = useParams();
  const { language, t } = useLanguage();

  const config = topic ? topicMap[topic] : undefined;

  if (!config) {
    return (
      <div className="chapter-list-page">
        <div className="container">
          <div className="empty-state">
            <p className="empty-state-text">{t('notFound')}</p>
            <Link to="/" className="btn btn-primary">{t('goHome')}</Link>
          </div>
        </div>
      </div>
    );
  }

  const { chapters, titleKey } = config;
  const currentIdx = topicOrder.indexOf(topic!);
  const prevTopic = currentIdx > 0 ? topicOrder[currentIdx - 1] : null;
  const nextTopic = currentIdx < topicOrder.length - 1 ? topicOrder[currentIdx + 1] : null;

  return (
    <div className="chapter-list-page">
      <section className="page-header">
        <div className="container">
          <h1>{t(titleKey)}</h1>
          <p>{t('chapterOverview')}</p>
        </div>
      </section>

      <div className="container">
        <div className="lang-nav">
          {prevTopic ? (
            <Link to={`/${prevTopic}`} className="chapter-nav-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              {t(topicMap[prevTopic].titleKey)}
            </Link>
          ) : <span />}
          {nextTopic ? (
            <Link to={`/${nextTopic}`} className="chapter-nav-btn">
              {t(topicMap[nextTopic].titleKey)}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          ) : <span />}
        </div>

        <div className="chapter-list">
          {chapters.map((ch, idx) => (
            <Link key={ch.id} to={`/${topic}/${ch.id}`} className="chapter-card" data-aos="fade-up" data-aos-delay={idx * 50}>
              <div className="chapter-card-number">{String(ch.chapter).padStart(2, '0')}</div>
              <div className="chapter-card-info">
                <h3>{t(ch.titleKey)}</h3>
                <p>{ch.sections.length} {language === 'ko' ? '개 섹션' : 'sections'}</p>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/" className="btn btn-secondary">{t('backToList')}</Link>
        </div>
      </div>
    </div>
  );
}
