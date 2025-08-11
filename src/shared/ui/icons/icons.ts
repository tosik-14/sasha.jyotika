import globalPlanet from '@/shared/assets/icons/globalPlanet.svg';
import telegram from '@/shared/assets/icons/telegram.svg';
import instagram from '@/shared/assets/icons/instagram.svg';
import facebook from '@/shared/assets/icons/facebook.svg';
import logoHomeScreen from '@/shared/assets/images/logo_homeScreen.jpg';
import astro from '@/shared/assets/images/astro.jpg';
import tarot from '@/shared/assets/images/tarot.png';
import aroma from '@/shared/assets/images/aroma.png';
import events from '@/shared/assets/images/events.jpg';

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
} as const;

export type IconName = keyof typeof iconMap;
