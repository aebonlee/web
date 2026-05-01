import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { topicOrder, topicMap } from '../data/index';

const TOPIC_ICONS: Record<string, string> = {
  html: 'HTML', css: 'CSS', javascript: 'JS', react: 'React',
  typescript: 'TS', git: 'Git', backend: 'BE', devops: 'DO'
};

const heroSlides = [
  { titleKey: 'heroTitle1', highlightKey: 'heroHighlight1', descKey: 'heroDesc1', btnKey: 'startLearning', btnLink: '/problems' },
  { titleKey: 'heroTitle2', highlightKey: 'heroHighlight2', descKey: 'heroDesc2', btnKey: 'startLearning', btnLink: '/html' },
  { titleKey: 'heroTitle3', highlightKey: 'heroHighlight3', descKey: 'heroDesc3', btnKey: 'viewProgress', btnLink: '/progress' }
];

function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${15 + Math.random() * 10}s`,
    delay: `${Math.random() * 5}s`
  }));
}

const particles = generateParticles(12);

export default function Home() {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = useCallback((idx: number) => { setActiveSlide(idx); }, []);
  const nextSlide = useCallback(() => { setActiveSlide(prev => (prev + 1) % heroSlides.length); }, []);
  const prevSlide = useCallback(() => { setActiveSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length); }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = heroSlides[activeSlide];

  return (
    <>
      <section className="hero">
        <div className="carousel-viewport">
          <div className="carousel-slide">
            <div className="hero-bg-effect">
              <div className="particles">
                {particles.map(p => (
                  <div key={p.id} className="particle"
                    style={{ left: p.left, top: p.top, '--duration': p.duration, animationDelay: p.delay } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-line">{t(slide.titleKey)}</span>
              <span className="title-line"><span className="highlight">{t(slide.highlightKey)}</span></span>
            </h1>
            <p className="hero-description">{t(slide.descKey)}</p>
            <div className="hero-buttons">
              <Link to={slide.btnLink} className="btn btn-primary">{t(slide.btnKey)}</Link>
              <Link to="/progress" className="btn btn-secondary">{t('viewProgress')}</Link>
            </div>
          </div>
        </div>
        <button className="carousel-arrow carousel-arrow--prev" onClick={prevSlide} aria-label="Previous">&#8249;</button>
        <button className="carousel-arrow carousel-arrow--next" onClick={nextSlide} aria-label="Next">&#8250;</button>
        <div className="carousel-dots">
          {heroSlides.map((_, idx) => (
            <button key={idx} className={`carousel-dot ${activeSlide === idx ? 'active' : ''}`} onClick={() => goToSlide(idx)} aria-label={`Slide ${idx + 1}`} />
          ))}
        </div>
        <div className="scroll-indicator"><div className="mouse"><div className="wheel" /></div></div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" data-aos="fade-up">{t('topicSection')}</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">{t('topicSectionDesc')}</p>
          </div>
          <div className="lang-card-grid">
            {topicOrder.map((key, idx) => {
              const topic = topicMap[key];
              return (
                <Link key={key} to={`/${key}`} className="lang-card" data-aos="fade-up" data-aos-delay={`${idx * 80}`}>
                  <div className="lang-card-accent" style={{ background: topic.color }} />
                  <div className="lang-card-body">
                    <div className="lang-card-icon" style={{ background: `${topic.color}18`, color: topic.color }}>
                      <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{TOPIC_ICONS[key]}</span>
                    </div>
                    <h3 className="lang-card-name">{t(topic.titleKey)}</h3>
                    <p className="lang-card-desc">{t(`${key}Desc`)}</p>
                    <span className="lang-card-chapters">{topic.chapters.length} {t('chapters')}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
