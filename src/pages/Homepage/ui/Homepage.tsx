import styles from "@/pages/Homepage/ui/Homepage.module.css"
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from "@/shared/ui/languageSwitcher/LanguageSwitcher/LanguageSwitcher";
import {useHomepage} from "@/pages/Homepage/hook/useHomepage";
import {SocialMediaLinksVertical} from "@/shared/ui/mediaLinks/SocialMediaLinksVertical/SocialMediaLinksVertical";
import {HomeScreen} from "@/features/homepage/HomeScreen/ui/HomeScreen";
import {WhatDoIOffer} from "@/features/homepage/WhatDoIOffer/ui/WhatDoIOffer";
import {AboutMe} from "@/features/homepage/AboutMe/ui/AboutMe";
import {LetsConnect} from "@/features/homepage/LetsConnect/ui/LetsConnect";
import {NavigationBoard} from "@/features/homepage/NavigationBoard/NavigationBoard";


export const Homepage = () => {
    const { t } = useTranslation();
    const { title } = useHomepage();

    return (
        <div className={styles.container}>
            <SocialMediaLinksVertical />

            <div className={styles.languageSwitcher}><LanguageSwitcher/></div>

            <div className={styles.contentContainer}>
                <section id="home" className={styles.section}>
                    <HomeScreen />
                </section>

                <span id="servicesForNavigation"></span>
                <NavigationBoard title={title} />

                <section id="services" className={styles.section}>
                    <WhatDoIOffer />
                </section>

                <section id="aboutMeForNavigation" className={styles.section}></section>

                <section id="aboutMe" className={styles.section}>
                    <AboutMe />
                </section>

                <section id="contactMe" className={styles.section}>
                    <LetsConnect />
                </section>

                <footer className={styles.footer}>
                    <div className={styles.footerContent}>
                        <p>© A Star Consulting</p>
                    </div>
                </footer>

            </div>

        </div>
    )
}