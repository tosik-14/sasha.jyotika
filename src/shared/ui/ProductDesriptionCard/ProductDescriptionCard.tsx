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
        <div className={styles.activeCardDescrBlock}>
            <span className={styles.activeCardDescrBlockPicture}><Icon name={image as IconName}/></span>

            <div>
                <p className={styles.activeCardDescrBlockText}>
                    {title}
                </p>
                <p className={styles.activeCardDescrBlockText}>
                    {description}
                </p>
            </div>
            

            <div className={styles.activeCardDescrBlockButtons}>
                <a href="https://ig.me/m/sasha.jyotika" target="_blank" rel="noopener noreferrer">
                    <p>Message</p>
                    <Icon name={"instagram"} size={25}/>
                </a>
                <button onClick={() => navigate('/contact')}>Email</button>
            </div>

        </div>
    );
};