import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { topicMap, topicOrder } from '../data/index';
import topicMeta from '../data/topicMeta';

const TOPIC_LABEL: Record<string, string> = {
  html: 'HTML', css: 'CSS', javascript: 'JS', react: 'React',
  typescript: 'TS', git: 'Git', backend: 'BE', devops: 'DO',
  vibecoding: 'AI', django: 'Dj', flask: 'Fl', gradio: 'Gr', streamlit: 'St',
};

export default function TopicList() {
  const { topic } = useParams();
  const { language, t } = useLanguage();
  const ko = language === 'ko';

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

  const { chapters, titleKey, color } = config;
  const meta = topic ? topicMeta[topic] : undefined;
  const currentIdx = topicOrder.indexOf(topic!);
  const prevTopic = currentIdx > 0 ? topicOrder[currentIdx - 1] : null;
  const nextTopic = currentIdx < topicOrder.length - 1 ? topicOrder[currentIdx + 1] : null;

  const totalSections = chapters.reduce((sum, ch) => sum + ch.sections.length, 0);
  const totalQuiz = chapters.reduce((sum, ch) => sum + ch.sections.filter((s) => s.quiz).length, 0);
  const hasPreview = chapters.some((ch) => ch.sections.some((s) => s.livePreview));
  const firstChapter = chapters[0];

  // 학습 항목: 전 챕터의 섹션 제목을 모아 "이런 걸 배워요"로 노출 (실습 예제 섹션 제외)
  const learnItems = chapters
    .flatMap((ch) => ch.sections)
    .map((s) => (ko ? s.title : s.titleEn))
    .filter((title) => !/^실습 예제|^Practice/.test(title));

  return (
    <div className="topic-overview-page">
      {/* Hero */}
      <section className="topic-hero" style={{ background: `linear-gradient(135deg, ${color}14 0%, ${color}05 60%, transparent 100%)`, borderTop: `4px solid ${color}` }}>
        <div className="container">
          <div className="topic-hero-badge" style={{ background: color }}>
            {TOPIC_LABEL[topic!] || t(titleKey)}
          </div>
          <h1 className="topic-hero-title">{t(titleKey)}</h1>
          {meta && <p className="topic-hero-tagline">{ko ? meta.tagline : meta.taglineEn}</p>}
          <p className="topic-hero-desc">{t(`${topic}Desc`)}</p>

          <div className="topic-hero-meta">
            <span className="topic-meta-chip"><strong>{chapters.length}</strong> {t('chapters')}</span>
            <span className="topic-meta-chip"><strong>{totalSections}</strong> {ko ? '섹션' : 'sections'}</span>
            {totalQuiz > 0 && <span className="topic-meta-chip"><strong>{totalQuiz}</strong> {ko ? '퀴즈' : 'quizzes'}</span>}
            {hasPreview && <span className="topic-meta-chip">⚡ {ko ? '라이브 실습' : 'Live practice'}</span>}
            {meta && <span className="topic-meta-chip topic-meta-prereq">🎯 {ko ? meta.prereq : meta.prereqEn}</span>}
          </div>

          <div className="topic-hero-actions">
            {firstChapter && (
              <Link to={`/${topic}/${firstChapter.id}`} className="btn btn-primary">
                {ko ? '학습 시작하기' : 'Start learning'} →
              </Link>
            )}
            <Link to="/problems" className="btn btn-secondary">{t('problems')}</Link>
          </div>
        </div>
      </section>

      <div className="container topic-overview-body">
        {/* 토픽 이동 */}
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

        {/* 이런 걸 배워요 */}
        <section className="topic-block">
          <h2 className="topic-block-title">{ko ? '이런 걸 배워요' : "What you'll learn"}</h2>
          <div className="topic-learn-grid">
            {learnItems.map((item, i) => (
              <div key={i} className="topic-learn-item" data-aos="fade-up" data-aos-delay={`${(i % 6) * 40}`}>
                <svg className="topic-learn-check" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 학습 성과 */}
        {meta && (
          <div className="topic-outcome" style={{ borderLeftColor: color }}>
            <span className="topic-outcome-label" style={{ color }}>{ko ? '이 과정을 마치면' : 'By the end'}</span>
            <p className="topic-outcome-text">{ko ? meta.outcome : meta.outcomeEn}</p>
          </div>
        )}

        {/* 학습 로드맵 */}
        <section className="topic-block">
          <h2 className="topic-block-title">{ko ? '학습 로드맵' : 'Learning roadmap'}</h2>
          <p className="topic-block-sub">{ko ? '챕터를 순서대로 따라가며 단계별로 완성하세요.' : 'Follow the chapters in order and master it step by step.'}</p>
          <div className="topic-roadmap">
            {chapters.map((ch, i) => (
              <Link key={ch.id} to={`/${topic}/${ch.id}`} className="roadmap-step" data-aos="fade-up" data-aos-delay={`${i * 60}`}>
                <div className="roadmap-num" style={{ background: color }}>{String(ch.chapter).padStart(2, '0')}</div>
                <div className="roadmap-body">
                  <h3 className="roadmap-title">{t(ch.titleKey)}</h3>
                  <div className="roadmap-sections">
                    {ch.sections.map((s, si) => (
                      <span key={si} className="roadmap-section-chip">{ko ? s.title : s.titleEn}</span>
                    ))}
                  </div>
                  <span className="roadmap-count">
                    {ch.sections.length} {ko ? '섹션' : 'sections'}
                    {ch.sections.some((s) => s.quiz) && ` · ${ko ? '퀴즈 포함' : 'with quizzes'}`}
                  </span>
                </div>
                <svg className="roadmap-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </Link>
            ))}
          </div>
        </section>

        <div style={{ textAlign: 'center', margin: '8px 0 56px' }}>
          {firstChapter && (
            <Link to={`/${topic}/${firstChapter.id}`} className="btn btn-primary">
              {ko ? `1챕터부터 시작하기` : 'Start from Chapter 1'} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
