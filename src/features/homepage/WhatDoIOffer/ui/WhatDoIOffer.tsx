import styles from '@/features/homepage/WhatDoIOffer/ui/WhatDoIOffer.module.css';
import { Icon } from '@/shared/ui/icons/Icon';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const WhatDoIOffer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className={styles.whatDoIOffer}>
            <p className={styles.sectionTitle}>{t('whatDoIOffer')}</p>
            <div className={styles.myOffersExploreText}>
                <p className={styles.paragraphSomeText}>
                    {t('whatDoIOfferExplore')}
                </p>
            </div>
            <div className={styles.myOffers}>
                <button
                    className={styles.offerCard}
                    onClick={() => {
                        console.log('ASSAAASASSSTROOOO');
                        navigate('/offerDescription/astro');
                    }}
                >
                    <Icon name={'astro'} size={[246, 316]} />
                    <div className={styles.offerCardCover}>
                        <span>
                            <label>Vedic</label>
                            <label>Astrology</label>
                        </span>
                    </div>
                </button>

                <button
                    className={styles.offerCard}
                    onClick={() => {
                        navigate('/offerDescription/tarot');
                    }}
                >
                    <Icon name={'tarot'} size={[246, 316]} />
                    <div className={styles.offerCardCover}>
                        <span>
                            <label>Tarot</label>
                        </span>
                    </div>
                </button>

                <button
                    className={styles.offerCard}
                    onClick={() => {
                        navigate('/offerDescription/aroma');
                    }}
                >
                    <Icon name={'aroma'} size={[246, 316]} />
                    <div className={styles.offerCardCover}>
                        <span>
                            <label>Aroma</label>
                            <label>diagnostics</label>
                        </span>
                    </div>
                </button>

                <button
                    className={styles.offerCard}
                    onClick={() => {
                        navigate('/offerDescription/events');
                    }}
                >
                    <Icon name={'events'} size={[246, 316]} />
                    <div className={styles.offerCardCover}>
                        <span>
                            <label>Events</label>
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};
