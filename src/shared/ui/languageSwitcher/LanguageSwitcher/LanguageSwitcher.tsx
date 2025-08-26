import { useTranslation } from 'react-i18next';
import styles from '@/shared/ui/languageSwitcher/LanguageSwitcher/LanguageSwitcher.module.css';
import { useLanguageSwitcher } from '@/shared/ui/languageSwitcher/LanguageSwitcher/useLanguageSwitcher';
import { languages } from '@/shared/ui/languageSwitcher/entities/languages';
import { Icon } from '@/shared/ui/icons/Icon';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const { changeLanguage, setOpen, open, switcherRef } =
        useLanguageSwitcher();

    return (
        <div ref={switcherRef} className={styles.langSwitcher}>
            <button
                onClick={() => setOpen(!open)}
                className={styles.langSwitcherButton}
            >
                <Icon name={'GlobalPlanet'} size={36} />
            </button>

            {open && (
                <ul className={styles.langList}>
                    {languages.map(({ code, label }) => (
                        <li key={code}>
                            <button
                                onClick={() => changeLanguage(code)}
                                className={styles.langListLiButton}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
