import styles from '@/shared/ui/ProductDesriptionCard/ProductDecsriptionCard.module.css';
import { Icon } from '@/shared/ui/icons/Icon';
import { useNavigate } from 'react-router-dom';
import { scrollToElement } from '@/shared/lib/scrollToElement';
import { useState } from 'react';

interface ProductDescriptionProps {
    image: string;
    title: string;
    description: string;
}

export const ProductDescriptionCard: React.FC<ProductDescriptionProps> = ({
    image,
    title,
    description,
}) => {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className={`${styles.activeCardDescrBlock} ${isExpanded ? styles.expanded : styles.collapsed}`}>
                <div className={styles.activeCardDescrText}>
                    <p className={styles.activeCardDescrTitle}>{title}</p>
                    <p className={`${styles.activeCardDescrDescription} ${isExpanded ? styles.descriptionExpanded : styles.descriptionCollapsed}`}>
                        {description}
                    </p>
                    <button 
                        className={styles.expandButton}
                        onClick={toggleExpanded}
                    >
                        {isExpanded ? 'Show Less' : 'Read More'}
                    </button>
                </div>

                <div className={styles.activeCardDescrRight}>
                    <span className={styles.activeCardDescrBlockPicture}>
                        <Icon name={image as IconName} />
                    </span>

                    <div className={styles.activeCardDescrBlockButtons}>
                        <a
                            href="https://ig.me/m/sasha.jyotika"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p>Message</p>
                            <Icon name={'instagram'} size={25} />
                        </a>
                        <button
                            onClick={() => {
                                scrollToElement('contactMe');
                            }}
                        >
                            Email
                        </button>
                    </div>
                </div>
            </div>

            <hr className={styles.activeCardDivider} />
        </>
    );
};