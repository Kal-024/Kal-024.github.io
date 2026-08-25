import en from "./en";
import es from "./es";
import ja from "./ja";

export const locales = { en, es, ja };

export const defaultLocale = "en";

// El código se usa para el atributo lang del documento; la etiqueta es lo que
// ve la persona en el selector, siempre en su propio idioma.
export const languages = [
    { code: "en", label: "EN", name: "English" },
    { code: "es", label: "ES", name: "Español" },
    { code: "ja", label: "日本語", name: "日本語" },
];
