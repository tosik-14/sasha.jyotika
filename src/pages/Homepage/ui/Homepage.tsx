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
                                <button onClick={() => {scrollToSection("servicesForNavigation")}}>{t("explore")}</button>
                                <button onClick={() => {scrollToSection("contactMe")}}>{t("contact")}</button>
                            </div>
                        </div>

                    </div>

                </section>

                <div className={styles.navigationBoard} id="servicesForNavigation">
                    <Icon name={"navigationBarLogo1"} size={310}></Icon>
                        <p className={styles.navigationBoardTitle}>{title}</p>
                        <span className={styles.navigationBoardButtons}>
                            <button onClick={() => {scrollToSection("aboutMeForNavigation")}}>{t("aboutMe")}</button>
                            <button onClick={() => {scrollToSection("contactMe")}}>{t("contact")}</button>
                        </span>

                    <Icon name={"moon2"} size={[622, 425]}></Icon>{/*[582, 396]*/}

                </div>

                {/*<section id="servicesForNavigation" className={styles.section}></section>*/}

                <section id="services" className={styles.section}>

                    <div className={styles.whatDoIOffer}>
                        <p className={styles.paragraphSomeText}>{t("whatDoIOdderShortDecr")}</p>
                        <div>
                            <div className={styles.myOffers}>

                                <button className={styles.offerCard}>
                                    <Icon name={"astro"} size={[246, 316]} style={{borderRadius: 25}} />
                                    <div className={styles.offerCardCover}>
                                        <span>
                                            <label>Vedic</label>
                                            <label>Astrology</label>
                                        </span>
                                    </div>
                                </button>

                                <button className={styles.offerCard}>
                                    <Icon name={"tarot"} size={[246, 316]} style={{borderRadius: 25}} />
                                    <div className={styles.offerCardCover}>
                                        <span>
                                            <label>Tarot</label>
                                        </span>
                                    </div>
                                </button>

                                <button className={styles.offerCard}>
                                    <Icon name={"aroma"} size={[246, 316]} style={{borderRadius: 25}} />
                                    <div className={styles.offerCardCover}>
                                        <span>
                                            <label>Aroma</label>
                                            <label>diagnostics</label>
                                        </span>
                                    </div>
                                </button>

                                <button className={styles.offerCard}>
                                    <Icon name={"events"} size={[246, 316]} style={{borderRadius: 25}} />
                                    <div className={styles.offerCardCover}>
                                        <span>
                                            <label>Events</label>
                                        </span>
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>

                </section>

                <section id="aboutMeForNavigation" className={styles.section}></section>

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

                            <form className={styles.connectForm} onSubmit={(e) => {e.preventDefault();}}>
                                <div className={styles.inputGroup}>
                                    <input type="text" name="name" required />
                                    <label>{t("name")}</label>
                                </div>
                                <div className={styles.inputGroup}>
                                    <input type="text" name="email" required />
                                    <label>{t("email")}</label>
                                </div>
                                <div className={styles.inputGroupTextarea}>
                                    <textarea className={styles.messageTextarea} name="message" required ></textarea>
                                    <label>{t("message")}</label>
                                </div>

                                <span className={styles.sendButtonAndLinks}>
                                    <button type="submit">{t("send")}</button>
                                    <SocialMediaLinks />
                                </span>

                            </form>

                        </div>
                    </div>
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