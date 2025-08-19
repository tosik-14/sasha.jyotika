import styles from '@/features/homepage/NavigationBoard/NavigationBoard.module.css';
import { Icon } from '@/shared/ui/icons/Icon';
import { scrollToElement } from '@/shared/lib/scrollToElement';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SocialMediaLinks } from '@/shared/ui/mediaLinks/SocialMediaLinks/SocialMediaLinks';

export const NavigationBoard = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className={styles.navigationBoard}>
            <button
                onClick={() => {
                    if (location.pathname === '/') {
                        window.scrollTo({top: 0, behavior: 'smooth'})
                    } else {
                        navigate('/', { state: { scrollTo: 'services' } });
                    }
                }}
            >
            <span className={styles.logoStack}>
                <Icon name={'moon4'} className={styles.logoBackground}/>
                <Icon name={'horizontalLogo'} size={310} className={styles.logoOverlay} />
            </span>
            </button>

            <span className={styles.socialMediaLinks}>
                <SocialMediaLinks />
            </span>

            <span className={styles.navigationBoardButtons}>
                <button
                    onClick={() => {
                        if (location.pathname === '/') {
                            scrollToElement('aboutMeForNavigation');
                        } else {
                            navigate('/', {
                                state: { scrollTo: 'aboutMeForNavigation' },
                            });
                        }
                    }}
                >
                    {t('aboutMe')}
                </button>
                <button
                    onClick={() => {
                        scrollToElement('contactMe');
                    }}
                >
                    {t('contact')}
                </button>
            </span>
        </div>
    );
};
