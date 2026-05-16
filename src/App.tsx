import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AdminGuard from './components/AdminGuard';

function lazyLoad(importFn: () => Promise<{ default: React.ComponentType }>) {
  return lazy(() =>
    importFn().catch(() => {
      const key = 'chunk_reload';
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, '1');
        window.location.reload();
        return new Promise(() => {});
      }
      sessionStorage.removeItem(key);
      throw new Error('페이지를 불러올 수 없습니다.');
    })
  );
}

const Home = lazyLoad(() => import('./pages/Home'));
const Problems = lazyLoad(() => import('./pages/Problems'));
const ProblemsByCategory = lazyLoad(() => import('./pages/ProblemsByCategory'));
const ProblemDetail = lazyLoad(() => import('./pages/ProblemDetail'));
const Guide = lazyLoad(() => import('./pages/Guide'));
const Progress = lazyLoad(() => import('./pages/Progress'));
const TopicList = lazyLoad(() => import('./pages/TopicList'));
const TopicDetail = lazyLoad(() => import('./pages/TopicDetail'));
const Login = lazyLoad(() => import('./pages/Login'));
const Register = lazyLoad(() => import('./pages/Register'));
const ForgotPassword = lazyLoad(() => import('./pages/ForgotPassword'));
const Profile = lazyLoad(() => import('./pages/Profile'));
const Playground = lazyLoad(() => import('./pages/Playground'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const NotFound = lazyLoad(() => import('./pages/NotFound'));
const About = lazyLoad(() => import('./pages/About'));

function LoadingFallback() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', color: 'var(--text-secondary)' }}>
      <div style={{ textAlign: 'center' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite', opacity: 0.5 }}>
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
        <p style={{ marginTop: '0.75rem' }}>Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="problems" element={<Problems />} />
          <Route path="problems/:category" element={<ProblemsByCategory />} />
          <Route path="problems/:category/:id" element={<ProblemDetail />} />
          <Route path="playground" element={<Playground />} />
          <Route path="guide" element={<Guide />} />
          <Route path="progress" element={<Progress />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="profile" element={<Profile />} />
          <Route path="admin/dashboard/*" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
          <Route path=":topic" element={<TopicList />} />
          <Route path=":topic/:chapterId" element={<TopicDetail />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
