import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function useHomepage() {
    const { t } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location, location.state]);

    return {};
}
