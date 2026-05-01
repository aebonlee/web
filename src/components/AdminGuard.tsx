import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ADMIN_EMAILS = [
  'aebon@kakao.com',
  'aebon@kyonggi.ac.kr',
  'radical8566@gmail.com'
];

export default function AdminGuard({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user || !ADMIN_EMAILS.includes(user.email || '')) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
