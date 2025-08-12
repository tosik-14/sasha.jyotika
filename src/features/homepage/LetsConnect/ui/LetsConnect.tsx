import styles from '@/features/homepage/LetsConnect/ui/LetsConnect.module.css'
import {Icon} from "@/shared/ui/icons/Icon";
import { useTranslation } from 'react-i18next';
import {SocialMediaLinks} from "@/shared/ui/mediaLinks/SocialMediaLinks/SocialMediaLinks";

export const LetsConnect = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.connectContent}>
            <p className={styles.paragraphSomeText}>{t("lestConnectPhrase")}</p>
            <div className={styles.connectBlock}>
                <Icon name={"sashaConnect"} size={[342, 439]}/>

                <form className={styles.connectForm} onSubmit={(e) => {e.preventDefault();}}>
                    <div className={styles.inputGroup}>
                        <input type="text" name="name" required />
                        <label>{t("name")}</label>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="text" name="email" required />
                        <label>{t("email")}</label>
                    </div>
                    <div className={styles.inputGroupTextarea}>
                        <textarea className={styles.messageTextarea} name="message" required ></textarea>
                        <label>{t("message")}</label>
                    </div>

                    <span className={styles.sendButtonAndLinks}>
                                    <button type="submit">{t("send")}</button>
                                    <SocialMediaLinks />
                                </span>

                </form>

            </div>
        </div>
    );
}