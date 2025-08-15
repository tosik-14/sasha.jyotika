import styles from '@/shared/ui/mediaLinks/SocialMediaLinksVertical/SocialMediaLinksVertical.module.css'
import {Icon} from "@/shared/ui/icons/Icon";

export const SocialMediaLinksVertical = () => {
    return (
      <div>
          <div className={styles.socialMediaLinks}>
              <a href="https://ig.me/m/sasha.jyotika" target="_blank" rel="noopener noreferrer">
                  <span className={styles.instagramNickName}><p>jyotika</p><p>sasha.</p></span>
              </a>
              <a href="https://ig.me/m/sasha.jyotika" target="_blank" rel="noopener noreferrer">
                  <Icon name={"instagram"} size={30}/>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61575674236195" target="_blank" rel="noopener noreferrer">
                  <Icon name={"facebook"} size={30}/>
              </a>
              <a href="https://t.me/alexandramikh" target="_blank" rel="noopener noreferrer">
                  <Icon name={"telegram"} size={30}/>
              </a>
          </div>
      </div>
    );
}