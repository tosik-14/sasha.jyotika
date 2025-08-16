import { useTranslation } from 'react-i18next';
import styles from "@/features/offersDescriptions/styles/offersDescriptions.module.css";
import { ProductDescriptionCard } from '@/shared/ui/ProductDesriptionCard/ProductDescriptionCard';
import type { Product } from '@/features/offersDescriptions/AstroDescription/AstroDescription';

const aromadiagnosticsProducts: Product[] = [
    {
        id: 1,
        image: "aromaOfferDescr",
        title: "aromaProductTitle1",
        description: "aromaProductDescription1"
    },
    {
        id: 2,
        image: "aromaOfferDescr",
        title: "aromaProductTitle2",
        description: "aromaProductDescription2"
    }
]

export const AromaDescription = () => {
    const { t } = useTranslation();

    return(
        <div className={styles.container}>
            <div className={styles.productsGrid}>
                {aromadiagnosticsProducts.map((product) => (
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