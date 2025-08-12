import styles from '@/features/homepage/WhatDoIOffer/ui/WhatDoIOffer.module.css'
import {Icon} from "@/shared/ui/icons/Icon";
import { useTranslation } from 'react-i18next';

export const WhatDoIOffer = () => {
    const { t } = useTranslation();

    return (
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
    );
}