import styles from "@/features/offersDescriptions/styles/offersDescriptions.module.css";
import {Icon} from "@/shared/ui/icons/Icon";
import {scrollToElement} from "@/shared/lib/scrollToElement";
import { useTranslation } from 'react-i18next';;

export const EventsDescription = () => {
    const { t } = useTranslation();

    return(
        <div className={styles.activeCardDescrBlock}>
            <span className={styles.activeCardDescrBlockPicture}><Icon name={"eventsOfferDescr"}/></span>

            <p className={styles.activeCardDescrBlockText}>
                {t("eventsOfferDescr")}
            </p>

            <div className={styles.activeCardDescrBlockButtons}>
                <a href="https://ig.me/m/sasha.jyotika" target="_blank" rel="noopener noreferrer">
                    <p>Message</p>
                    <Icon name={"instagram"} size={25}/>
                </a>
                <button onClick={() => {scrollToElement("contactMe")}}>Email</button>
            </div>

        </div>
    );
}