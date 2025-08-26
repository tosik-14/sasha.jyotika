import styles from '@/shared/ui/mediaLinks/SocialMediaLinks/SocialMediaLinks.module.css';
import { Icon } from '@/shared/ui/icons/Icon';

interface SocialMediaLinksProps {
    iconColor?: string;
    textColor?: string;
}

export const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
    iconColor = 'var(--color-beige)',
    textColor = 'var(--color-beige)',
}) => {
    return (
        <div className={styles.container}>
            <a
                href="https://t.me/alexandramikh"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon name={'TelegramIcon'} size={30} color={iconColor} />
            </a>
            <a
                href="https://www.facebook.com/profile.php?id=61575674236195"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon name={'FacebookIcon'} size={30} color={iconColor} />
            </a>
            <a
                href="https://www.instagram.com/sasha.jyotika"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon name={'InstagramIcon'} size={30} color={iconColor} />
            </a>
            <a
                href="https://www.instagram.com/sasha.jyotika"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className={styles.instagramNickName}>
                    <p style={{ color: textColor }}>sasha.</p>
                    <p style={{ color: textColor }}>jyotika</p>
                </span>
            </a>
        </div>
    );
};
