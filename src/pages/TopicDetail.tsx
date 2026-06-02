import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCodeCopy } from '../hooks/useCodeCopy';
import { topicMap, topicOrder } from '../data/index';
import LivePreview from '../components/LivePreview';
import QuizQuestion from '../components/QuizQuestion';

export default function TopicDetail() {
  const { topic, chapterId } = useParams();
  const { language, t } = useLanguage();
  const { copiedId, copyCode } = useCodeCopy();
  const [_expandedCode, setExpandedCode] = useState<string | null>(null);

  const config = topic ? topicMap[topic] : undefined;
  if (!config) {
    return <div className="chapter-detail-page"><div className="container"><div className="empty-state"><p className="empty-state-text">{t('notFound')}</p><Link to="/" className="btn btn-primary">{t('goHome')}</Link></div></div></div>;
  }

  const { chapters } = config;
  const chapterIndex = chapters.findIndex(ch => ch.id === chapterId);
  const chapter = chapters[chapterIndex];

  if (!chapter) {
    return <div className="chapter-detail-page"><div className="container"><div className="empty-state"><p className="empty-state-text">{t('notFound')}</p><Link to={`/${topic}`} className="btn btn-primary">{t('chapterList')}</Link></div></div></div>;
  }

  const prevChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null;

  return (
    <div className="chapter-detail-page">
      <section className="page-header">
        <div className="container">
          <h1>
            <span className="chapter-lang-badge-inline" style={{ background: config.color }}>{t(config.titleKey)}</span>
            {t(chapter.titleKey)}
          </h1>
        </div>
      </section>

      <div className="container">
        <div className="chapter-top-nav">
          <Link to={`/${topic}`} className="chapter-nav-btn chapter-nav-home">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            {t('chapterList')}
          </Link>
          <div className="chapter-top-nav-arrows">
            {prevChapter ? <Link to={`/${topic}/${prevChapter.id}`} className="chapter-nav-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>{t('chapterPrev')}</Link> : <span />}
            {nextChapter ? <Link to={`/${topic}/${nextChapter.id}`} className="chapter-nav-btn">{t('chapterNext')}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></Link> : <span />}
          </div>
        </div>

        <div className="chapter-layout">
          <aside className="chapter-sidebar">
            <div className="chapter-sidebar-inner">
              <Link to={`/${topic}`} className="chapter-sidebar-topic" style={{ borderColor: config.color }}>
                <span className="chapter-sidebar-topic-badge" style={{ background: config.color }}>{t(config.titleKey)}</span>
                <span className="chapter-sidebar-topic-label">{chapters.length} {t('chapters')}</span>
              </Link>

              <nav className="chapter-sidebar-nav" aria-label={t('chapterList')}>
                {chapters.map(ch => {
                  const isActive = ch.id === chapterId;
                  return (
                    <div key={ch.id} className="chapter-sidebar-item">
                      <Link
                        to={`/${topic}/${ch.id}`}
                        className={`chapter-sidebar-link ${isActive ? 'active' : ''}`}
                        style={isActive ? { color: config.color } : undefined}
                      >
                        <span
                          className="chapter-sidebar-num"
                          style={isActive ? { background: config.color, color: '#fff', borderColor: config.color } : undefined}
                        >
                          {String(ch.chapter).padStart(2, '0')}
                        </span>
                        <span className="chapter-sidebar-text">{t(ch.titleKey)}</span>
                      </Link>
                      {isActive && (
                        <div className="chapter-sidebar-sections">
                          {chapter.sections.map((section, si) => (
                            <a key={si} href={`#sec-${si}`} className="chapter-sidebar-section-link">
                              {language === 'ko' ? section.title : section.titleEn}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="chapter-sidebar-topics">
                <div className="chapter-sidebar-topics-label">{t('topicSection')}</div>
                <div className="chapter-sidebar-topics-list">
                  {topicOrder.map(key => (
                    <Link
                      key={key}
                      to={`/${key}`}
                      className={`chapter-sidebar-topic-chip ${key === topic ? 'active' : ''}`}
                      style={key === topic ? { background: topicMap[key].color, color: '#fff', borderColor: topicMap[key].color } : undefined}
                    >
                      {t(topicMap[key].titleKey)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="chapter-content">
            {chapter.sections.map((section, idx) => {
              const copyId = `${topic}-${chapterId}-${idx}`;
              return (
                <div key={idx} id={`sec-${idx}`} className="chapter-section" data-aos="fade-up" data-aos-delay={idx * 80}>
                  <h3>{language === 'ko' ? section.title : section.titleEn}</h3>
                  <div className="chapter-section-content">{language === 'ko' ? section.content : section.contentEn}</div>

                  {section.code && (
                    <div className="chapter-code-block">
                      <div className="chapter-code-header">
                        <span>{section.codeLanguage?.toUpperCase() || 'CODE'}</span>
                        <div className="chapter-code-actions">
                          <button className={`chapter-copy-btn ${copiedId === copyId ? 'copied' : ''}`} onClick={() => copyCode(section.code!, copyId)}>
                            {copiedId === copyId ? t('copied') : t('copy')}
                          </button>
                          {section.livePreview && (
                            <button className="chapter-practice-btn" onClick={() => setExpandedCode(section.code!)}>
                              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                              Preview
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="chapter-code-content"><pre>{section.code}</pre></div>
                    </div>
                  )}

                  {section.livePreview && section.code && (
                    <LivePreview
                      html={section.codeLanguage === 'html' ? section.code : ''}
                      css=""
                      js=""
                      height={200}
                    />
                  )}

                  {section.output && (
                    <div className="chapter-output">
                      <div className="chapter-output-header">{t('outputResult')}</div>
                      <div className="chapter-output-content"><pre>{section.output}</pre></div>
                    </div>
                  )}

                  {section.quiz && <QuizQuestion quiz={section.quiz} />}
                </div>
              );
            })}

            <div className="chapter-nav">
              {prevChapter ? <Link to={`/${topic}/${prevChapter.id}`} className="chapter-nav-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>{t('chapterPrev')}</Link> : <div />}
              <div className="chapter-nav-center"><Link to={`/${topic}`}>{t('chapterList')}</Link></div>
              {nextChapter ? <Link to={`/${topic}/${nextChapter.id}`} className="chapter-nav-btn">{t('chapterNext')}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></Link> : <div />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
