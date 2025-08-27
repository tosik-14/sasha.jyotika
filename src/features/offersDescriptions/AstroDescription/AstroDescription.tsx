import { useTranslation } from 'react-i18next';
import { ProductDescriptionCard } from '@/shared/ui/ProductDesriptionCard/ProductDescriptionCard';
import styles from '@/features/offersDescriptions/styles/offersDescriptions.module.css';

export interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
}

const astroProducts: Product[] = [
    {
        id: 1,
        image: 'astroBirthChart',
        title: 'astroProductTitle1',
        description: 'astroProductDescription1',
    },
    {
        id: 2,
        image: 'astroYearForecast',
        title: 'astroProductTitle2',
        description: 'astroProductDescription2',
    },
    {
        id: 3,
        image: 'astroYourQuestion',
        title: 'astroProductTitle3',
        description: 'astroProductDescription3',
    },
    {
        id: 4,
        image: 'astroSolar',
        title: 'astroProductTitle4',
        description: 'astroProductDescription4',
    },
    {
        id: 5,
        image: 'astroPrashna',
        title: 'astroProductTitle5',
        description: 'astroProductDescription5',
    },
    {
        id: 6,
        image: 'astroStringArt',
        title: 'astroProductTitle6',
        description: 'astroProductDescription6',
    },
];

export const AstroDescription = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.productsGrid}>
                {astroProducts.map((product) => (
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
