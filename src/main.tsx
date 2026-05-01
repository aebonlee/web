import { StrictMode, Component, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { ToastProvider } from './contexts/ToastContext';
import { ProgressProvider } from './contexts/ProgressContext';
import App from './App';
import './index.css';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorCount: number;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null, errorCount: 0 };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch() {
    this.setState(prev => ({ errorCount: prev.errorCount + 1 }));
  }
  handleReload = () => {
    sessionStorage.removeItem('chunk_reload');
    window.location.reload();
  };
  handleReset = () => {
    sessionStorage.removeItem('chunk_reload');
    window.location.href = '/';
  };
  render() {
    if (this.state.hasError) {
      const showReset = this.state.errorCount >= 3;
      return (
        <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h1 style={{ color: '#E17055' }}>Something went wrong</h1>
          <pre style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', textAlign: 'left', overflow: 'auto', maxWidth: '600px', margin: '20px auto' }}>
            {this.state.error?.message || 'Unknown error'}
          </pre>
          {showReset ? (
            <button onClick={this.handleReset} style={{ padding: '10px 24px', background: '#E17055', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>
              홈으로 이동
            </button>
          ) : (
            <button onClick={this.handleReload} style={{ padding: '10px 24px', background: '#0046C8', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>
              Reload
            </button>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <LanguageProvider>
            <ToastProvider>
              <AuthProvider>
                <CartProvider>
                  <ProgressProvider>
                    <App />
                  </ProgressProvider>
                </CartProvider>
              </AuthProvider>
            </ToastProvider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
