import globalPlanet from '@/shared/assets/icons/globalPlanet.svg';
import telegram from '@/shared/assets/icons/telegram.svg';
import instagram from '@/shared/assets/icons/instagram.svg';
import facebook from '@/shared/assets/icons/facebook.svg';
import logoHomeScreen from '@/shared/assets/images/logo_homeScreen.jpg';
import astro from '@/shared/assets/images/astro.jpg';
import tarot from '@/shared/assets/images/tarot.png';
import aroma from '@/shared/assets/images/aroma.png';
import events from '@/shared/assets/images/events.jpg';
import moon1 from '@/shared/assets/patterns/moon1.png';
import moon2 from '@/shared/assets/patterns/moon2.png';
import moon3 from '@/shared/assets/patterns/moon3.png';
import moon4 from '@/shared/assets/patterns/moon4.png';
import moon6 from '@/shared/assets/patterns/moon6.png';


export const iconMap = {
    globalPlanet,
    telegram,
    instagram,
    facebook,
    logoHomeScreen,
    astro,
    tarot,
    aroma,
    events,
    moon1,
    moon2,
    moon3,
    moon4,
    moon6,
} as const;

export type IconName = keyof typeof iconMap;
