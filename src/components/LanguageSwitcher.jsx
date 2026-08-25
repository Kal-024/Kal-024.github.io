import { languages } from "../constants/locales";
import useLanguage from "../hooks/useLanguage";

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className='flex items-center gap-1 rounded-full bg-white/70 p-1 shadow-card'
      role='group'
      aria-label='Language'
    >
      {languages.map((language) => (
        <button
          key={language.code}
          type='button'
          onClick={() => setLocale(language.code)}
          aria-label={language.name}
          aria-pressed={locale === language.code}
          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
            locale === language.code
              ? "bg-blue-500 text-white"
              : "text-slate-500 hover:text-blue-500"
          }`}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
