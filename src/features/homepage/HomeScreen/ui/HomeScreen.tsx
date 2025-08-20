import styles from '@/features/homepage/HomeScreen/ui/HomeScreen.module.css';
import { Icon } from '@/shared/ui/icons/Icon';
//import { scrollToElement } from '@/shared/lib/scrollToElement';
import { useTranslation } from 'react-i18next';

export const HomeScreen = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.bannerSection}>
            <div className={styles.bannerContent}>
                <Icon name={'bannerImage'} className={styles.bannerImageContainer} />
                <div className={styles.bannerTextBlock}> 
                    <p className={styles.bannerTextPrimary}> {t('welcomeText')} </p>
                    <p className={styles.bannerTextSecondary}> {t('whatDoIOfferShortDecr')} </p>
                </div>
                
            </div>
        </div>
    );
};

/*
<div className={styles.homeScreen}>
            <div className={styles.homeScreenContent}>
                <Icon name={'logoHomeScreen'} size={[586, 549]} />

                <div className={styles.homeScreenButtons}>
                    <button
                        onClick={() => {
                            scrollToElement('servicesForNavigation');
                        }}
                    >
                        {t('explore')}
                    </button>
                    <button
                        onClick={() => {
                            scrollToElement('contactMe');
                        }}
                    >
                        {t('contact')}
                    </button>
                </div>
            </div>
        </div>
*/