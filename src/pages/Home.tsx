import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { topicOrder, topicMap, allProblems } from '../data/index';
import site from '../config/site';
import useCountUp from '../hooks/useCountUp';

const TOPIC_ICONS: Record<string, string> = {
  html: 'HTML', css: 'CSS', javascript: 'JS', react: 'React',
  typescript: 'TS', git: 'Git', backend: 'BE', devops: 'DO'
};

const heroSlides = [
  { titleKey: 'heroTitle1', highlightKey: 'heroHighlight1', descKey: 'heroDesc1', btnKey: 'startLearning', btnLink: '/problems' },
  { titleKey: 'heroTitle2', highlightKey: 'heroHighlight2', descKey: 'heroDesc2', btnKey: 'startLearning', btnLink: '/html' },
  { titleKey: 'heroTitle3', highlightKey: 'heroHighlight3', descKey: 'heroDesc3', btnKey: 'viewProgress', btnLink: '/progress' }
];

const FEATURES = [
  { icon: '🧭', titleKey: 'home.why.f1.title', descKey: 'home.why.f1.desc' },
  { icon: '⌨️', titleKey: 'home.why.f2.title', descKey: 'home.why.f2.desc' },
  { icon: '⚡', titleKey: 'home.why.f3.title', descKey: 'home.why.f3.desc' },
  { icon: '📈', titleKey: 'home.why.f4.title', descKey: 'home.why.f4.desc' }
];

const totalChapters = topicOrder.reduce((sum, key) => sum + topicMap[key].chapters.length, 0);

const STATS = [
  { value: topicOrder.length, suffix: '', labelKey: 'home.stats.topics' },
  { value: totalChapters, suffix: '', labelKey: 'home.stats.chapters' },
  { value: allProblems.length, suffix: '', labelKey: 'home.stats.problems' },
  { value: 100, suffix: '%', labelKey: 'home.stats.free' }
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

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 1600);
  return (
    <div className="home-stat" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="home-stat-value">{count}{suffix}</div>
      <div className="home-stat-label">{label}</div>
    </div>
  );
}

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

      {/* Stats */}
      <section className="home-stats-section">
        <div className="container">
          <div className="home-stats-grid">
            {STATS.map(s => (
              <StatItem key={s.labelKey} value={s.value} suffix={s.suffix} label={t(s.labelKey)} />
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
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

      {/* Why / Features */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" data-aos="fade-up">{t('home.why.title')}</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">{t('home.why.subtitle')}</p>
          </div>
          <div className="home-feature-grid">
            {FEATURES.map((f, idx) => (
              <div key={f.titleKey} className="home-feature-card" data-aos="fade-up" data-aos-delay={`${idx * 80}`}>
                <div className="home-feature-icon">{f.icon}</div>
                <h3 className="home-feature-title">{t(f.titleKey)}</h3>
                <p className="home-feature-desc">{t(f.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difficulty categories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" data-aos="fade-up">{t('home.cat.title')}</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">{t('home.cat.subtitle')}</p>
          </div>
          <div className="home-cat-grid">
            {site.categories.map((cat, idx) => (
              <Link key={cat.id} to={`/problems/${cat.id}`} className="home-cat-card" data-aos="fade-up" data-aos-delay={`${idx * 80}`}>
                <span className="home-cat-bar" style={{ background: cat.color }} />
                <span className="home-cat-step" style={{ color: cat.color }}>{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="home-cat-name">{t(cat.labelKey)}</h3>
                <p className="home-cat-desc">{t(cat.descriptionKey)}</p>
                <span className="home-cat-link">{t('startLearning')} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-box" data-aos="zoom-in">
            <h2 className="home-cta-title">{t('home.cta.title')}</h2>
            <p className="home-cta-desc">{t('home.cta.desc')}</p>
            <div className="home-cta-buttons">
              <Link to="/problems" className="btn btn-primary">{t('home.cta.btn')}</Link>
              <Link to="/guide" className="btn btn-secondary">{t('guide')}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
