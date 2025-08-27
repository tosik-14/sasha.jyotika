import logoHomeScreen from '@/shared/assets/images/logo_homeScreen.jpg';
import navigationBarLogo from '@/shared/assets/images/navigationBarLogo.png';
import navigationBarLogo1 from '@/shared/assets/images/navigationBarLogo1.png';
import astro from '@/shared/assets/images/astro.jpg';
import astroOfferDescr from '@/shared/assets/images/astroOfferDescr.png';
import tarotOfferDescr from '@/shared/assets/images/tarotOfferDescr.png';
import aromaOfferDescr from '@/shared/assets/images/aromaOfferDescr.png';
import eventsOfferDescr from '@/shared/assets/images/eventsOfferDescr.png';
import tarot from '@/shared/assets/images/tarot.png';
import aroma from '@/shared/assets/images/aroma.png';
import events from '@/shared/assets/images/events.jpg';
import moon1 from '@/shared/assets/patterns/moon1.png';
import moon2 from '@/shared/assets/patterns/moon2.png';
import moon3 from '@/shared/assets/patterns/moon3.png';
import moon4 from '@/shared/assets/patterns/moon4.png';
import moon6 from '@/shared/assets/patterns/moon6.png';
import sashaAboutMe from '@/shared/assets/images/sasha_first.png';
import sashaConnect from '@/shared/assets/images/sasha_second.png';
import horizontalLogo from '@/shared/assets/images/horizontal_logo.png';
import bannerImage from '@/shared/assets/images/banner.png';

import TelegramIcon from '@/shared/assets/icons/TelegramIcon';
import InstagramIcon from '@/shared/assets/icons/InstagramIcon';
import FacebookIcon from '@/shared/assets/icons/FacebookIcon';
import GlobalPlanet from '@/shared/assets/icons/GlobalPlanet';

import astroCategory from '@/shared/assets/images/astrology_category.png'
import eventsCategory from '@/shared/assets/images/events_category.png'
import astroBirthChart from '@/shared/assets/images/astro_birth_chart.png'
import astroYearForecast from '@/shared/assets/images/astro_year_forecast.png'
import astroYourQuestion from '@/shared/assets/images/astro_your_question.png'
import astroSolar from '@/shared/assets/images/astro_solar.png'
import astroPrashna from '@/shared/assets/images/astro_prashna.png'
import astroStringArt from '@/shared/assets/images/astro_stringart.jpg'

export const iconMap = {
    GlobalPlanet,
    TelegramIcon,
    InstagramIcon,
    FacebookIcon,
    logoHomeScreen,
    navigationBarLogo,
    navigationBarLogo1,
    astro,
    astroOfferDescr,
    tarotOfferDescr,
    aromaOfferDescr,
    eventsOfferDescr,
    tarot,
    aroma,
    events,
    moon1,
    moon2,
    moon3,
    moon4,
    moon6,
    sashaAboutMe,
    sashaConnect,
    horizontalLogo,
    bannerImage,
    astroCategory,
    eventsCategory,
    astroBirthChart,
    astroYearForecast,
    astroYourQuestion,
    astroSolar,
    astroPrashna,
    astroStringArt,
} as const;

export type IconName = keyof typeof iconMap;
