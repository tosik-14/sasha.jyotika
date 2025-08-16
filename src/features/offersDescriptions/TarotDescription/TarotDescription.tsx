import { useTranslation } from 'react-i18next';
import styles from "@/features/offersDescriptions/styles/offersDescriptions.module.css";
import type { Product } from '@/features/offersDescriptions/AstroDescription/AstroDescription';
import { ProductDescriptionCard } from '@/shared/ui/ProductDesriptionCard/ProductDescriptionCard';

const tarotProducts: Product[] = [
    {
        id: 1,
        image: "tarotOfferDescr",
        title: "tarotProductTitle1",
        description: "tarotProductDescription1"
    },
    {
        id: 2,
        image: "tarotOfferDescr",
        title: "tarotProductTitle2",
        description: "tarotProductDescription2"
    }
]

export const TarotDescription = () => {
    const { t } = useTranslation();

    return(
        <div className={styles.container}>
            <div className={styles.productsGrid}>
                {tarotProducts.map((product) => (
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
}