import { useLanguage } from '@/i18n/LanguageContext';
import { Language, languageFlags } from '@/i18n/translations';

const langs: Language[] = ['es', 'en', 'pl'];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {langs.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`text-base leading-none px-1.5 py-1 rounded transition-all ${
            language === lang
              ? 'bg-primary/10 scale-110'
              : 'opacity-60 hover:opacity-100 hover:scale-105'
          }`}
          aria-label={lang.toUpperCase()}
          title={lang.toUpperCase()}
        >
          {languageFlags[lang]}
        </button>
      ))}
    </div>
  );
}
