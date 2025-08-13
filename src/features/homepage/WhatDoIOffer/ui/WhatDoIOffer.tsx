import styles from '@/features/homepage/WhatDoIOffer/ui/WhatDoIOffer.module.css'
import {Icon} from "@/shared/ui/icons/Icon";
import { useTranslation } from 'react-i18next';
import {useWhatDoIOffer} from "@/features/homepage/WhatDoIOffer/hook/useWhatDoIOffer";
import {scrollToElement} from "@/shared/lib/scrollToElement";

export const WhatDoIOffer = () => {
    const { t } = useTranslation();
    const { activeId, activeOffer, toggleOffer } = useWhatDoIOffer();

    return (
        <div className={styles.whatDoIOffer}>
            <p className={styles.paragraphSomeText}>{t("whatDoIOfferShortDecr")}</p>
                <div className={styles.myOffers}>

                    <button className={styles.offerCard} onClick={() => {toggleOffer("astro")}}>
                        <Icon name={"astro"} size={[246, 316]} style={{borderRadius: 25}} />
                        <div className={styles.offerCardCover}>
                                        <span>
                                            <label>Vedic</label>
                                            <label>Astrology</label>
                                        </span>
                        </div>
                    </button>

                    <button className={styles.offerCard} onClick={() => {toggleOffer("tarot")}}>
                        <Icon name={"tarot"} size={[246, 316]} style={{borderRadius: 25}} />
                        <div className={styles.offerCardCover}>
                                        <span>
                                            <label>Tarot</label>
                                        </span>
                        </div>
                    </button>

                    <button className={styles.offerCard} onClick={() => {toggleOffer("aroma")}}>
                        <Icon name={"aroma"} size={[246, 316]} style={{borderRadius: 25}} />
                        <div className={styles.offerCardCover}>
                                        <span>
                                            <label>Aroma</label>
                                            <label>diagnostics</label>
                                        </span>
                        </div>
                    </button>

                    <button className={styles.offerCard} onClick={() => {toggleOffer("events")}}>
                        <Icon name={"events"} size={[246, 316]} style={{borderRadius: 25}} />
                        <div className={styles.offerCardCover}>
                                        <span>
                                            <label>Events</label>
                                        </span>
                        </div>
                    </button>

                </div>

            {!activeId && (
                <div className={styles.noActiveCardsExploreText}>
                    <p className={styles.paragraphSomeText}>{t("whatDoIOfferExplore")}</p>
                </div>
            )}

            {activeId && (
                <div className={styles.activeCardDescrBlock}>
                    <span className={styles.activeCardDescrBlockPicture}><Icon name={activeOffer.picture}/></span>

                    <p className={styles.activeCardDescrBlockText}>
                        {t(activeOffer.description)}
                    </p>

                    <div className={styles.activeCardDescrBlockButtons}>
                        <a href="https://www.instagram.com/sasha.jyotika/" target="_blank" rel="noopener noreferrer">
                            <p>Message</p>
                            <Icon name={"instagram"} size={25}/>
                        </a>
                        <button onClick={() => {scrollToElement("contactMe")}}>Email</button>
                    </div>

                </div>
            )}

        </div>
    );
}