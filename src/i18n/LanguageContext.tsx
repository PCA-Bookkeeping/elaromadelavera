import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Language, getTranslation } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function detectLanguage(): Language {
  // Check localStorage first
  const stored = localStorage.getItem('lang');
  if (stored && ['es', 'en', 'pl'].includes(stored)) return stored as Language;

  // Auto-detect from browser
  const browserLang = navigator.language?.toLowerCase() || '';
  if (browserLang.startsWith('pl')) return 'pl';
  if (browserLang.startsWith('es')) return 'es';
  // Default to Spanish for Spain-region, English for everything else
  if (browserLang.startsWith('en')) return 'en';
  return 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback((key: string) => getTranslation(key, language), [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
