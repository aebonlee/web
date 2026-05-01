import { createContext, useContext, useState, type ReactElement } from 'react';
import { translations } from '../utils/translations';
import type { Language } from '../types';

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps): ReactElement => {
  const [language, setLanguage] = useState<Language>('ko');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko');
  };

  const t = (key: string): string => {
    const lang = translations[language] as Record<string, unknown>;
    // Try flat key first (e.g., 'nav.home' as literal key name)
    if (key in lang && typeof lang[key] === 'string') {
      return lang[key] as string;
    }
    // Then try nested traversal (e.g., 'auth.loginTitle' => auth -> loginTitle)
    const keys = key.split('.');
    let value: unknown = lang;
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    return (typeof value === 'string' ? value : key);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
