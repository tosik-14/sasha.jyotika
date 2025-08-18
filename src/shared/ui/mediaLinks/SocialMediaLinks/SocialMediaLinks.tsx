import styles from '@/shared/ui/mediaLinks/SocialMediaLinks/SocialMediaLinks.module.css'
import {Icon} from "@/shared/ui/icons/Icon";

export const SocialMediaLinks = () => {
    return (
        <div className={styles.container}>
            <a href="https://t.me/alexandramikh" target="_blank" rel="noopener noreferrer">
                <Icon name={"telegram"} size={30} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61575674236195" target="_blank" rel="noopener noreferrer">
                <Icon name={"facebook"} size={30} />
            </a>
            <a href="https://ig.me/m/sasha.jyotika" target="_blank" rel="noopener noreferrer">
                <Icon name={"instagram"} size={30} />
            </a>
            <a href="https://ig.me/m/sasha.jyotika" target="_blank" rel="noopener noreferrer">
                <span className={styles.instagramNickName}><p>sasha.</p><p>jyotika</p></span>
            </a>
        </div>
    )
}