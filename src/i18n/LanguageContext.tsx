import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo, type Context } from 'react';
import { Language, getTranslation } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

declare global {
  var __EL_AROMA_LANGUAGE_CONTEXT__: Context<LanguageContextType | null> | undefined;
}

const LanguageContext =
  globalThis.__EL_AROMA_LANGUAGE_CONTEXT__ ??
  createContext<LanguageContextType | null>(null);

if (import.meta.env.DEV) {
  globalThis.__EL_AROMA_LANGUAGE_CONTEXT__ = LanguageContext;
}

LanguageContext.displayName = 'LanguageContext';

const SUPPORTED: Language[] = ['es', 'en', 'pl', 'de', 'fr', 'pt', 'it', 'nl'];

function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'es';

  try {
    const stored = window.localStorage.getItem('lang');
    if (stored && SUPPORTED.includes(stored as Language)) return stored as Language;

    const browserLang = window.navigator.language?.toLowerCase() || '';
    for (const lang of SUPPORTED) {
      if (browserLang.startsWith(lang)) return lang;
    }
  } catch {
    return 'es';
  }

  return 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  const setLanguage = useCallback((lang: Language) => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('lang', lang);
      } catch {
        // Ignore storage issues and keep the app usable.
      }
      window.document.documentElement.lang = lang;
    }
    setLanguageState(lang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback((key: string) => getTranslation(key, language), [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
