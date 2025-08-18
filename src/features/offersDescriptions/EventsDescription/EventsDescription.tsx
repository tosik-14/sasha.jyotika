import styles from '@/features/offersDescriptions/styles/offersDescriptions.module.css';
import { useTranslation } from 'react-i18next';
import type { Product } from '@/features/offersDescriptions/AstroDescription/AstroDescription';
import { ProductDescriptionCard } from '@/shared/ui/ProductDesriptionCard/ProductDescriptionCard';

const eventsProducts: Product[] = [
    {
        id: 1,
        image: 'eventsOfferDescr',
        title: 'eventsProductTitle1',
        description: 'eventsProductDescription1',
    },
    {
        id: 2,
        image: 'eventsOfferDescr',
        title: 'eventsProductTitle2',
        description: 'eventsProductDescription2',
    },
];

export const EventsDescription = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.productsGrid}>
                {eventsProducts.map((product) => (
                    <ProductDescriptionCard
                        key={product.id}
                        image={product.image}
                        title={t(product.title)}
                        description={t(product.description)}
                    />
                ))}
            </div>
        </div>
    );
};
