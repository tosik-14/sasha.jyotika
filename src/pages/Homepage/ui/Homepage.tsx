import styles from "@/pages/Homepage/ui/Homepage.module.css"
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from "@/shared/ui/languageSwitcher/LanguageSwitcher/LanguageSwitcher";
import { Icon } from "@/shared/ui/icons/Icon"
import {useHomepage} from "@/pages/Homepage/hook/useHomepage";
import {SocialMediaLinks} from "@/shared/ui/mediaLinks/SocialMediaLinks/SocialMediaLinks";
import {SocialMediaLinksVertical} from "@/shared/ui/mediaLinks/SocialMediaLinksVertical/SocialMediaLinksVertical";

export const Homepage = () => {
    const { t } = useTranslation();
    const { title, scrollToSection } = useHomepage();

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
                                <button onClick={() => {scrollToSection("services")}}>{t("explore")}</button>
                                <button onClick={() => {scrollToSection("contactMe")}}>{t("contact")}</button>
                            </div>
                        </div>

                    </div>

                </section>

                <div className={styles.navigationBoard}>
                    <Icon name={"navigationBarLogo1"} size={310}></Icon>
                        <p className={styles.navigationBoardTitle}>{title}</p>
                        <span className={styles.navigationBoardButtons}>
                            <button onClick={() => {scrollToSection("aboutMe")}}>About</button>
                            <button onClick={() => {scrollToSection("contactMe")}}>Contact</button>
                        </span>

                    <Icon name={"moon2"} size={[582, 396]}></Icon>

                </div>

                <section id="services" className={styles.section}>

                    <div className={styles.whatDoIOffer}>
                        <p className={styles.paragraphSomeText}>{t("whatDoIOdderShortDecr")}</p>
                        <div>
                            <div className={styles.myOffers}>
                                <Icon name={"astro"} size={[246, 316]} style={{borderRadius: 25}} />
                                <Icon name={"tarot"} size={[246, 316]} style={{borderRadius: 25}} />
                                <Icon name={"aroma"} size={[246, 316]} style={{borderRadius: 25}} />
                                <Icon name={"events"} size={[246, 316]} style={{borderRadius: 25}} />
                            </div>
                        </div>
                    </div>


                </section>

                <section id="aboutMe" className={styles.section}>
                    <div className={styles.contentContainer}>
                        <div className={styles.aboutMeContent}>
                            <Icon name={"sashaAboutMe"} size={[414, 532]}/>

                            <div className={styles.aboutMeText}>
                                <p className={styles.aboutMeGeneral}>{t("aboutMeGeneral")}</p>

                                <span className={styles.aboutMeDetailText}>
                                    <p className={styles.aboutMeDetail}>{t("aboutMeDetail-1")}</p>
                                    <p className={styles.aboutMeDetail}>{t("aboutMeDetail-2")}</p>
                                    <p className={styles.aboutMeDetail}>{t("aboutMeDetail-3")}</p>
                                </span>

                                <SocialMediaLinks/>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="contactMe" className={styles.section}>
                    <div className={styles.connectContent}>
                        <p className={styles.paragraphSomeText}>{t("lestConnectPhrase")}</p>
                        <div className={styles.connectBlock}>
                            <Icon name={"sashaConnect"} size={[342, 439]}/>
                        </div>
                    </div>
                </section>

                <footer className={styles.footer}>
                    <p>© A Star Consulting</p>
                </footer>

            </div>

        </div>
    )
}