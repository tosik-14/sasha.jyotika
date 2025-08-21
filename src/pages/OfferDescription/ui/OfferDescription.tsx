import styles from '@/pages/OfferDescription/ui/OfferDescription.module.css';
import { useParams } from 'react-router-dom';
import { AstroDescription } from '@/features/offersDescriptions/AstroDescription/AstroDescription';
import { TarotDescription } from '@/features/offersDescriptions/TarotDescription/TarotDescription';
import { AromaDescription } from '@/features/offersDescriptions/AromaDescription/AromaDescription';
import { EventsDescription } from '@/features/offersDescriptions/EventsDescription/EventsDescription';
import { NavigationBoard } from '@/features/homepage/NavigationBoard/NavigationBoard';
import { LetsConnect } from '@/features/homepage/LetsConnect/ui/LetsConnect';
import { Footer } from '@/features/Footer/ui/Footer';
import { SocialMediaLinksVertical } from '@/shared/ui/mediaLinks/SocialMediaLinksVertical/SocialMediaLinksVertical';

export const OfferDescription = () => {
    const offerName = useParams<{ offerName: string }>();

    return (
        <div className={styles.container}>
            <SocialMediaLinksVertical />
            <div className={styles.contentContainer}>
                {offerName.offerName === 'astro' && (
                    <>
                        <NavigationBoard />
                        <AstroDescription />
                    </>
                )}
                {offerName.offerName === 'tarot' && (
                    <>
                        <NavigationBoard />
                        <TarotDescription />
                    </>
                )}
                {offerName.offerName === 'aroma' && (
                    <>
                        <NavigationBoard />
                        <AromaDescription />
                    </>
                )}
                {offerName.offerName === 'events' && (
                    <>
                        <NavigationBoard />
                        <EventsDescription />
                    </>
                )}

                <section id={'contactMe'}>
                    <LetsConnect />
                </section>

                <Footer />
            </div>
        </div>
    );
};