import styles from "@/features/offersDescriptions/styles/offersDescriptions.module.css";
import {Icon} from "@/shared/ui/icons/Icon";
import {SocialMediaLinks} from "@/shared/ui/mediaLinks/SocialMediaLinks/SocialMediaLinks";
import { useTranslation } from 'react-i18next';
import {scrollToElement} from "@/shared/lib/scrollToElement";

export const AstroDescription = () => {
    const { t } = useTranslation();

    return(
        <div className={styles.activeCardDescrBlock}>
            <span className={styles.activeCardDescrBlockPicture}><Icon name={"astroOfferDescr"}/></span>

            <p className={styles.activeCardDescrBlockText}>
                {t("astroOfferDescr")}
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