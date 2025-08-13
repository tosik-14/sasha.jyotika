import styles from '@/features/homepage/NavigationBoard/NavigationBoard.module.css'
import {Icon} from "@/shared/ui/icons/Icon";
import {scrollToElement} from "@/shared/lib/scrollToElement";
import { useTranslation } from 'react-i18next';

interface titleProps {
    title: string
}

export const NavigationBoard = ({title} : titleProps) => {
    const { t } = useTranslation();

    return (
        <div className={styles.navigationBoard} /*id="servicesForNavigation"*/>
            <Icon name={"navigationBarLogo1"} size={310}></Icon>
            <p className={styles.navigationBoardTitle}>{title}</p>
            <span className={styles.navigationBoardButtons}>
                            <button onClick={() => {scrollToElement("aboutMeForNavigation")}}>{t("aboutMe")}</button>
                            <button onClick={() => {scrollToElement("contactMe")}}>{t("contact")}</button>
                        </span>
            <Icon name={"moon2"} size={[622, 425]}></Icon>{/*[582, 396]*/}
        </div>
    );
}