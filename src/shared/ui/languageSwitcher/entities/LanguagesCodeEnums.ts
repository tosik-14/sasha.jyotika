export const LanguagesCodeEnums = {
    en: 'en',
    ru: 'ru',
} as const;

export type LanguagesCodeEnums =
    (typeof LanguagesCodeEnums)[keyof typeof LanguagesCodeEnums];
