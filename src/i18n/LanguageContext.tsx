import { createContext, useContext, useState, useEffect, ReactNode, useCallback, startTransition } from 'react';
import { Language, getTranslation } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const SUPPORTED: Language[] = ['es', 'en', 'pl', 'de', 'fr', 'pt', 'it', 'nl'];

function detectLanguage(): Language {
  const stored = localStorage.getItem('lang');
  if (stored && SUPPORTED.includes(stored as Language)) return stored as Language;

  const browserLang = navigator.language?.toLowerCase() || '';
  for (const lang of SUPPORTED) {
    if (browserLang.startsWith(lang)) return lang;
  }
  return 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  const setLanguage = useCallback((lang: Language) => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    startTransition(() => {
      setLanguageState(lang);
    });
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
