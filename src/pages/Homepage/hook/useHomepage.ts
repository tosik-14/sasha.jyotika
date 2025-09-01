import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useHomepage() {
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
