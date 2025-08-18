import styles from '@/shared/ui/ProductDesriptionCard/ProductDecsriptionCard.module.css'
import {Icon} from "@/shared/ui/icons/Icon";
import {useNavigate} from "react-router-dom";

interface ProductDescriptionProps {
    image: string;
    title: string;
    description: string;
}

export const ProductDescriptionCard: React.FC<ProductDescriptionProps> = ({ image, title, description }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.activeCardDescrBlock}>
                <div className={styles.activeCardDescrText}>
                    <p className={styles.activeCardDescrTitle}>{title}</p>
                    <p className={styles.activeCardDescrDescription}>{description}</p>
                </div>

                <div className={styles.activeCardDescrRight}>
                    <span className={styles.activeCardDescrBlockPicture}>
                        <Icon name={image as IconName}/>
                    </span>

                    <div className={styles.activeCardDescrBlockButtons}>
                        <a href="https://ig.me/m/sasha.jyotika" target="_blank" rel="noopener noreferrer">
                            <p>Message</p>
                            <Icon name={"instagram"} size={25}/>
                        </a>
                        <button onClick={() => navigate('/contact')}>Email</button>
                    </div>
                </div>


            </div>

            <hr className={styles.activeCardDivider}/>
        </>



    );
};