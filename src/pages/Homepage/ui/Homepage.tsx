import styles from "@/pages/Homepage/ui/Homepage.module.css"
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from "@/shared/ui/languageSwitcher/LanguageSwitcher/LanguageSwitcher";
import { Icon } from "@/shared/ui/icons/Icon"
import {useHomepage} from "@/pages/Homepage/hook/useHomepage";
import {SocialMediaLinksVertical} from "@/shared/ui/mediaLinks/SocialMediaLinksVertical/SocialMediaLinksVertical";
import {WhatDoIOffer} from "@/features/homepage/WhatDoIOffer/ui/WhatDoIOffer";
import {AboutMe} from "@/features/homepage/AboutMe/ui/AboutMe";
import {LetsConnect} from "@/features/homepage/LetsConnect/ui/LetsConnect";
import {scrollToElement} from "@/shared/lib/scrollToElement";

export const Homepage = () => {
    const { t } = useTranslation();
    const { title } = useHomepage();

    return (
        <div className={styles.container}>
            <SocialMediaLinksVertical />

            <div className={styles.languageSwitcher}><LanguageSwitcher/></div>

            <div className={styles.contentContainer}>
                <section id="home" className={styles.section}>

                    <div className={styles.homeScreen}>
                        <div className={styles.homeScreenContent}>
                            <Icon name={"logoHomeScreen"} size={[586, 549]} />

                            <div className={styles.homeScreenButtons}>
                                <button onClick={() => {scrollToElement("servicesForNavigation")}}>{t("explore")}</button>
                                <button onClick={() => {scrollToElement("contactMe")}}>{t("contact")}</button>
                            </div>
                        </div>

                    </div>

                </section>

                <div className={styles.navigationBoard} id="servicesForNavigation">
                    <Icon name={"navigationBarLogo1"} size={310}></Icon>
                        <p className={styles.navigationBoardTitle}>{title}</p>
                        <span className={styles.navigationBoardButtons}>
                            <button onClick={() => {scrollToElement("aboutMeForNavigation")}}>{t("aboutMe")}</button>
                            <button onClick={() => {scrollToElement("contactMe")}}>{t("contact")}</button>
                        </span>
                    <Icon name={"moon2"} size={[622, 425]}></Icon>{/*[582, 396]*/}
                </div>

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