import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function useLanguageSwitcher() {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const switcherRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                switcherRef.current &&
                !switcherRef.current?.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeLanguage = (code: string) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    return {
        changeLanguage,
        setOpen,
        open,
        switcherRef,
    };
}
