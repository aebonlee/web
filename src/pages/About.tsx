import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

const FEATURES = [
  { emoji: '🌐', title: '웹 기초', desc: 'HTML·CSS·JavaScript로 웹 페이지의 구조·스타일·동작을 처음부터 익힙니다.' },
  { emoji: '🤖', title: '바이브코딩', desc: 'Claude Code 설치·Node.js 설정·오류 해결까지, AI와 함께하는 개발을 시작합니다.' },
  { emoji: '⚛️', title: '프레임워크', desc: 'React와 TypeScript로 타입 안전한 모던 프론트엔드 앱을 만듭니다.' },
  { emoji: '🐍', title: 'Python', desc: 'Django·Flask·Gradio·Streamlit으로 웹과 데이터/AI 앱을 다룹니다.' },
  { emoji: '🔧', title: '개발 도구', desc: 'Git·백엔드(Node/Express·Supabase)·DevOps(CI/CD·배포)를 실무 중심으로 배웁니다.' },
  { emoji: '🥋', title: '도장깨기', desc: '난이도별 40개 실전 문제를 직접 풀며 실력을 검증합니다.' },
  { emoji: '⚡', title: '라이브 프리뷰', desc: '작성한 코드를 즉시 화면으로 확인하며 손으로 익힙니다.' },
  { emoji: '📈', title: '학습 현황', desc: '진도와 성취를 한눈에 추적하며 끝까지 완주합니다.' },
];

const STATS = [
  { emoji: '📚', value: '10+', label: '학습 토픽' },
  { emoji: '📖', value: '37+', label: '챕터' },
  { emoji: '🧩', value: '40', label: '실전 문제' },
  { emoji: '🆓', value: '100%', label: '무료 학습' },
];

export default function About(): ReactElement {
  return (
    <>
      <SEOHead title="About | Web AtoZ" description="웹 개발의 모든 것 — HTML·CSS·JS부터 React·TypeScript·Python·바이브코딩까지 도장깨기로 마스터" />
      <section className="page-header">
        <div className="container">
          <h1>About</h1>
          <p>웹 개발 A to Z 학습 플랫폼</p>
        </div>
      </section>

      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container">
          {/* 제작 의도 */}
          <div style={{
            background: 'var(--bg-light-gray, #f5f7fa)',
            borderLeft: '4px solid var(--primary-blue, #0046C8)',
            padding: '28px 32px',
            borderRadius: '0 12px 12px 0',
            marginBottom: '48px',
            lineHeight: 1.8,
            fontSize: '15px',
            color: 'var(--text-primary, #111827)',
          }}>
            <strong style={{ fontSize: '17px', display: 'block', marginBottom: '12px' }}>
              🎯 웹 개발의 모든 것을 도장깨기로 마스터하는 학습 플랫폼입니다.
            </strong>
            <p style={{ margin: 0, color: 'var(--text-secondary, #4B5563)' }}>
              드림아이티비즈(DreamIT Biz)는 기업과 개인의 실제 니즈를 반영한 맞춤형 교육 플랫폼을 만듭니다.
              HTML·CSS·JavaScript부터 React·TypeScript, Python(Django·Flask·Gradio·Streamlit),
              그리고 Claude Code 바이브코딩까지 — 한 곳에서 단계별로 학습하고 직접 실습할 수 있습니다.
            </p>
          </div>

          {/* 통계 */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '16px', marginBottom: '48px',
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                textAlign: 'center', padding: '24px 16px',
                background: 'var(--bg-white, #fff)', border: '1px solid var(--border-light, #e5e7eb)',
                borderRadius: '12px',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '6px' }}>{s.emoji}</div>
                <div style={{ fontSize: '26px', fontWeight: 800, color: 'var(--primary-blue, #0046C8)' }}>{s.value}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary, #6b7280)', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* 주요 특징 */}
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--text-primary, #111827)' }}>
            ✨ 주요 특징
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '48px' }}>
            {FEATURES.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '16px',
                padding: '24px',
                background: 'var(--bg-white, #fff)',
                border: '1px solid var(--border-light, #e5e7eb)',
                borderRadius: '12px',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--bg-light-gray, #f0f4ff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '24px',
                }}>
                  {item.emoji}
                </div>
                <div>
                  <strong style={{ fontSize: '15px', color: 'var(--text-primary, #111827)' }}>{item.title}</strong>
                  <p style={{ margin: '6px 0 0', fontSize: '14px', color: 'var(--text-secondary, #6b7280)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Link to="/problems" className="btn btn-primary">🚀 학습 시작하기</Link>
          </div>

          {/* 개발사 정보 */}
          <div style={{
            padding: '32px',
            background: 'var(--bg-light-gray, #f5f7fa)',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-blue, #0046C8)', marginBottom: '8px', letterSpacing: '0.05em' }}>DEVELOPED BY</p>
            <p style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary, #111827)' }}>🏢 드림아이티비즈 (DreamIT Biz)</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary, #6b7280)', lineHeight: 1.6, marginBottom: '16px' }}>
              실무 중심 교육 사이트를 운영하는 에듀테크 전문 기업
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--text-secondary, #6b7280)' }}>
              <span>✉️ aebon@dreamitbiz.com</span>
              <span>🌐 www.dreamitbiz.com</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
