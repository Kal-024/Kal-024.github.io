import { createContext, useCallback, useEffect, useMemo, useState } from "react";

import { defaultLocale, locales } from "../constants/locales";

const STORAGE_KEY = "portfolio-lang";

// Si el navegador está en un idioma que soportamos, arrancamos con ese.
// La elección explícita de la persona siempre gana sobre la detección.
const resolveInitialLocale = () => {
  if (typeof window === "undefined") return defaultLocale;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && locales[stored]) return stored;

  const browser = window.navigator.language?.slice(0, 2);
  return locales[browser] ? browser : defaultLocale;
};

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(resolveInitialLocale);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const changeLocale = useCallback((next) => {
    if (locales[next]) setLocale(next);
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale: changeLocale, t: locales[locale] }),
    [locale, changeLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
