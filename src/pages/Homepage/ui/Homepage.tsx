import styles from "@/pages/Homepage/ui/Homepage.module.css"
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from "@/shared/ui/languageSwitcher/LanguageSwitcher/LanguageSwitcher";
import { Icon } from "@/shared/ui/icons/Icon"

export const Homepage = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.socialMediaLinks}>
                <span className={styles.instagramNickName}><p>jyotika</p><p>sasha.</p></span>
                <Icon name={"instagram"} size={30}/>
                <Icon name={"facebook"} size={30}/>
                <Icon name={"telegram"} size={30}/>
            </div>

            <div className={styles.languageSwitcher}><LanguageSwitcher/></div>

            <div className={styles.contentContainer}>
                <section id="home" className={styles.section}>

                    <div className={styles.homeScreen}>
                        <div className={styles.homeScreenContent}>
                            <Icon name={"logoHomeScreen"} size={[586, 549]} />

                            <div className={styles.homeScreenButtons}>
                                <button>{t("explore")}</button>
                                <button>{t("contact")}</button>
                            </div>
                        </div>

                    </div>

                </section>

                <div className={styles.navigationBoard}>

                </div>

                <section id="services" className={styles.section}>

                    <div className={styles.whatDoIOffer}>
                        <p className={styles.paragraphSomeText}>
                            Helping find Clarity. Insight. Empowerment. through defining moments.
                        </p>
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

                <section id="services" className={styles.section}>
                    <h1>Who am I</h1>
                </section>

                <section id="services" className={styles.section}>
                    <h1>Contact</h1>
                </section>

                <footer className={styles.footer}>
                    <p>© A Star Consulting</p>
                </footer>

            </div>

        </div>
    )
}