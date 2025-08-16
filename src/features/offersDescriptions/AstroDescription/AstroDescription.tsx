import { useTranslation } from 'react-i18next';
import { ProductDescriptionCard } from "@/shared/ui/ProductDesriptionCard/ProductDescriptionCard";

export const AstroDescription = () => {
    const { t } = useTranslation();

    return(

        <ProductDescriptionCard image={"astroOfferDescr"} title={t("astroOfferDescr")} description={t("astroOfferDescr")}/>
    );
}