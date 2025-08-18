import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {scrollToElement} from "@/shared/lib/scrollToElement";
import { useTranslation } from 'react-i18next';

export function useHomepage () {
    const { t } = useTranslation();
    const [title, setTitle] = useState<string>(t("whatDoIOffer"));
    const location = useLocation();

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    switch (entry.target.id) {
                        case "services":
                            //setTitle("What do I offer?"); //t("explore")
                            setTitle(t("whatDoIOffer"));
                            break;
                        case "aboutMe":
                            setTitle(t("whoAmI"));
                            break;
                        case "contactMe":
                            setTitle(t("letsConnect"));
                            break;
                        default:
                            break;
                    }
                }
            });
        }, {threshold: 0.5}, );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if(el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location.state]);

    return {
        title,
    };

}