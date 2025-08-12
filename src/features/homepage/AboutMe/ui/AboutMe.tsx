import styles from '@/features/homepage/AboutMe/ui/AboutMe.module.css';
import { useTranslation } from 'react-i18next';
import {Icon} from "@/shared/ui/icons/Icon";
import {SocialMediaLinks} from "@/shared/ui/mediaLinks/SocialMediaLinks/SocialMediaLinks";

export const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.aboutMeContent}>
            <Icon name={"sashaAboutMe"} size={[414, 532]}/>

            <div className={styles.aboutMeText}>
                <p className={styles.aboutMeGeneral}>{t("aboutMeGeneral")}</p>

                <span className={styles.aboutMeDetailText}>
                                    <p className={styles.aboutMeDetail}>{t("aboutMeDetail-1")}</p>
                                    <p className={styles.aboutMeDetail}>{t("aboutMeDetail-2")}</p>
                                    <p className={styles.aboutMeDetail}>{t("aboutMeDetail-3")}</p>
                                </span>

                <SocialMediaLinks/>
            </div>

        </div>
    );
}