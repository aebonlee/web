import { useLanguage } from '../../contexts/LanguageContext';

export default function AdminDashboard() {
  const { t } = useLanguage();
  return (
    <div className="admin-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('home') === '홈' ? '관리자 대시보드' : 'Admin Dashboard'}</h1>
        </div>
      </section>
      <div className="container">
        <p>{t('home') === '홈' ? '관리자 기능은 준비 중입니다.' : 'Admin features are coming soon.'}</p>
      </div>
    </div>
  );
}
