import styles from '@/pages/Homepage/ui/Homepage.module.css';
import { LanguageSwitcher } from '@/shared/ui/languageSwitcher/LanguageSwitcher/LanguageSwitcher';
//import { useHomepage } from '@/pages/Homepage/hook/useHomepage';
import { SocialMediaLinksVertical } from '@/shared/ui/mediaLinks/SocialMediaLinksVertical/SocialMediaLinksVertical';
//import { HomeScreen } from '@/features/homepage/HomeScreen/ui/HomeScreen';
import { WhatDoIOffer } from '@/features/homepage/WhatDoIOffer/ui/WhatDoIOffer';
import { AboutMe } from '@/features/homepage/AboutMe/ui/AboutMe';
import { LetsConnect } from '@/features/homepage/LetsConnect/ui/LetsConnect';
import { NavigationBoard } from '@/features/homepage/NavigationBoard/NavigationBoard';
import { Footer } from '@/features/Footer/ui/Footer';
import { Icon } from '@/shared/ui/icons/Icon';
import { HomeScreen } from '@/features/homepage/HomeScreen/ui/HomeScreen';

export const Homepage = () => {
    // TODO: clean up
    //const { title } = useHomepage();

    return (
        <div className={styles.container}>
            <SocialMediaLinksVertical />

            <div className={styles.languageSwitcher}>
                <LanguageSwitcher />
            </div>

            
            <div className={styles.contentContainer}>
                {/* <section id="home" className={styles.section}>
                    <HomeScreen />
                </section> */} 
                <NavigationBoard />
                <section id="banner" className={styles.section}>
                    <HomeScreen  />
                </section>
                
                <div className={styles.moonPattern2}>
                        <Icon name={'moon4'} size={800} />
                </div>
                

                <section id="services" className={styles.section}>
                    <WhatDoIOffer />

                    <div className={styles.moonPattern1}>
                        <Icon name={'moon1'} size={250} />
                    </div>
                    
                </section>

                <section
                    id="aboutMeForNavigation"
                    className={styles.section}
                ></section>

                <section id="aboutMe" className={styles.section}>
                    <AboutMe />

                    <div className={styles.moonPattern3}>
                        <Icon name={'moon3'} size={300} />
                    </div>
                </section>

                <section id="contactMe" className={styles.section}>
                    <LetsConnect />

                    <div className={styles.moonPattern5}>
                        <Icon name={'moon2'} size={230} />
                    </div>
                    <div className={styles.moonPattern6}>
                        <Icon name={'moon1'} size={240} />
                    </div>
                    <div className={styles.moonPattern7}>
                        <Icon name={'moon3'} size={350} />
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};
