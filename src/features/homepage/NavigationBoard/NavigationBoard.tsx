import styles from '@/features/homepage/NavigationBoard/NavigationBoard.module.css'
import {Icon} from "@/shared/ui/icons/Icon";
import {scrollToElement} from "@/shared/lib/scrollToElement";
import { useTranslation } from 'react-i18next';
import {useNavigate} from "react-router-dom";
import {SocialMediaLinks} from "@/shared/ui/mediaLinks/SocialMediaLinks/SocialMediaLinks";

interface titleProps {
    title: string
}

export const NavigationBoard = ({title} : titleProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className={styles.navigationBoard} /*id="servicesForNavigation"*/>
            <button onClick={() => {scrollToElement("home") || navigate('/')}}>
                <Icon name={"navigationBarLogo1"} size={310}></Icon>
            </button>
            <p className={styles.navigationBoardTitle}>{title}</p>
            <span className={styles.socialMediaLinks}>
                <SocialMediaLinks/>
            </span>
            <span className={styles.navigationBoardButtons}>
                            <button onClick={() => {scrollToElement("aboutMeForNavigation")}}>{t("aboutMe")}</button>
                            <button onClick={() => {scrollToElement("contactMe")}}>{t("contact")}</button>
                        </span>
            <Icon name={"moon2"} size={350}></Icon>{/*[582, 396]*/}

        </div>
    );
}