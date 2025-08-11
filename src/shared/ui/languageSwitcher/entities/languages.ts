import { LanguagesCodeEnums } from "@/shared/ui/languageSwitcher/entities/LanguagesCodeEnums";

export interface Language {
    code: LanguagesCodeEnums;
    label: string;
}

export const languages: Language[] = [
    { code: LanguagesCodeEnums.en, label: "English" },
    { code: LanguagesCodeEnums.ru, label: "Русский" },
];