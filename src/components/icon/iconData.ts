// 12px
import plus12LighterIcon from '../../assets/images/icons/plus-12-lighter.svg';
import plus12DarkerIcon from '../../assets/images/icons/plus-12-darker.svg';
import minus12DefaultIcon from '../../assets/images/icons/minus-12-default.svg';
// 16px
import home16DefaultIcon from '../../assets/images/icons/home-16-default.svg';
import home16DodgerIcon from '../../assets/images/icons/home-16-dodger.svg';
import upChevron16DefaultIcon from '../../assets/images/icons/up-chevron-16-default.svg';
import upChevron16WatermelonIcon from '../../assets/images/icons/up-chevron-16-watermelon.svg';
import upChevron16DisabledIcon from '../../assets/images/icons/up-chevron-16-disabled.svg';
import upChevronWhite16DefaultIcon from '../../assets/images/icons/up-chevron-white-16-default.svg';
import upChevronWhite16HoverIcon from '../../assets/images/icons/up-chevron-white-16-hover.svg';
import downChevron16DefaultIcon from '../../assets/images/icons/down-chevron-16-default.svg';
import downChevron16WatermelonIcon from '../../assets/images/icons/down-chevron-16-watermelon.svg';
import downChevron16DisabledIcon from '../../assets/images/icons/down-chevron-16-disabled.svg';
import downChevronWhite16DefaultIcon from '../../assets/images/icons/down-chevron-white-16-default.svg';
import downChevronWhite16HoverIcon from '../../assets/images/icons/down-chevron-white-16-hover.svg';
import leftChevron16DefaultIcon from '../../assets/images/icons/left-chevron-16-default.svg';
import leftChevron16WatermelonIcon from '../../assets/images/icons/left-chevron-16-watermelon.svg';
import rightChevron16DefaultIcon from '../../assets/images/icons/right-chevron-16-default.svg';
import rightChevron16WatermelonIcon from '../../assets/images/icons/right-chevron-16-watermelon.svg';
import close16DefaultIcon from '../../assets/images/icons/close-16-default.svg';
import close16WatermelonIcon from '../../assets/images/icons/close-16-watermelon.svg';
import close24DefaultIcon from '../../assets/images/icons/close-24-default.svg';
import close24HoverIcon from '../../assets/images/icons/close-24-hover.svg';
import checkDefaultIcon from '../../assets/images/icons/check-16-default.svg';
// 18px
import apple18Icon from '../../assets/images/icons/apple-18-default.svg';
import android18Icon from '../../assets/images/icons/android-18-default.svg';
// 24px
import search24DefaultIcon from '../../assets/images/icons/search-24-default.svg';
import search24WatermelonIcon from '../../assets/images/icons/search-24-watermelon.svg';
import facebook24OriginalIcon from '../../assets/images/icons/facebook-24-original.svg';
import facebook24WatermelonIcon from '../../assets/images/icons/facebook-24-watermelon.svg';
import twitter24OriginalIcon from '../../assets/images/icons/twitter-24-original.svg';
import twitter24WatermelonIcon from '../../assets/images/icons/twitter-24-watermelon.svg';
import instagram24OriginalIcon from '../../assets/images/icons/instagram-24-original.svg';
import instagram32SlateIcon from '../../assets/images/icons/instagram-32-slate.svg';
import linkedin24OriginalIcon from '../../assets/images/icons/linkedin-24-original.svg';
import linkedin24WatermelonIcon from '../../assets/images/icons/linkedin-24-watermelon.svg';
import whatsApp24DefaultIcon from '../../assets/images/icons/whatsapp-24-default.svg';
import whatsApp24WatermelonIcon from '../../assets/images/icons/whatsapp-24-watermelon.svg';
import mail24DefaultIcon from '../../assets/images/icons/mail-24-default.svg';
import mail4WatermelonIcon from '../../assets/images/icons/mail-24-watermelon.svg';
import link24DefaultIcon from '../../assets/images/icons/link-24-default.svg';
import link24WatermelonIcon from '../../assets/images/icons/link-24-watermelon.svg';
// 32px
import facebook32OriginalIcon from '../../assets/images/icons/facebook-32-original.svg';
import facebook32SlateIcon from '../../assets/images/icons/facebook-32-slate.svg';
import twitter32OriginalIcon from '../../assets/images/icons/twitter-32-original.svg';
import twitter32SlateIcon from '../../assets/images/icons/twitter-32-slate.svg';
import instagram24WatermelonIcon from '../../assets/images/icons/instagram-24-watermelon.svg';
import instagram32OriginalIcon from '../../assets/images/icons/instagram-32-original.svg';
import linkedin32OriginalIcon from '../../assets/images/icons/linkedin-32-original.svg';
import linkedin32SlateIcon from '../../assets/images/icons/linkedin-32-slate.svg';
// 128px
import googlePlay128Icon from '../../assets/images/icons/google-play.svg';
import appStore128Icon from '../../assets/images/icons/app-store.svg';
import menu24DefaultIcon from '../../assets/images/icons/menu-24-default.svg';
import menu24HoverIcon from '../../assets/images/icons/menu-24-hover.svg';
import menu24WatermelonIcon from '../../assets/images/icons/menu-24-watermelon.svg';
import menu24WatermelonHoverIcon from '../../assets/images/icons/menu-24-watermelon-hover.svg';
import rightArrowPink16DefaultIcon from '../../assets/images/icons/right-arrow-pink-16-default.svg';
import rightArrowPink16HoverIcon from '../../assets/images/icons/right-arrow-pink-16-hover.svg';

import { ComponentState } from '../../utils/componentState';

export enum GlobalIconName {
    plus12 = 'plus12',
    minus12 = 'minus12',
    home16 = 'home16',
    upChevron16 = 'upChevron16',
    upChevronWhite16 = 'upChevronWhite16',
    downChevron16 = 'downChevron16',
    downChevronWhite16 = 'downChevronWhite16',
    leftChevron16 = 'leftChevron16',
    rightChevron16 = 'rightChevron16',
    check16 = 'check16',
    close16 = 'close16',
    close24 = 'close24',
    apple18 = 'apple18',
    android18 = 'android18',
    search24 = 'search24',
    facebook24 = 'facebook24',
    twitter24 = 'twitter24',
    instagram24 = 'instagram24',
    linkedin24 = 'linkedin24',
    whatsApp24 = 'whatsApp24',
    mail24 = 'mail24',
    link24 = 'link24',
    facebook32 = 'facebook32',
    twitter32 = 'twitter32',
    instagram32 = 'instagram32',
    linkedin32 = 'linkedin32',
    googlePlay128 = 'googlePlay128',
    appStore128 = 'appStore128',
    menu24 = 'menu24',
    menuWatermelon24 = 'menuWatermelon24',
    rightArrowPink16 = 'rightArrowPink16',
}

type IconConfig = Record<ComponentState, string>;
type IconConfigData = Record<GlobalIconName, IconConfig>;

const iconConfigData: IconConfigData = {
    plus12: {
        normal: plus12LighterIcon,
        hover: plus12DarkerIcon,
        selected: plus12DarkerIcon,
        disabled: '',
    },
    minus12: {
        normal: minus12DefaultIcon,
        hover: minus12DefaultIcon,
        selected: minus12DefaultIcon,
        disabled: '',
    },
    home16: {
        normal: home16DefaultIcon,
        hover: home16DodgerIcon,
        selected: home16DodgerIcon,
        disabled: '',
    },
    upChevron16: {
        normal: upChevron16DefaultIcon,
        hover: upChevron16WatermelonIcon,
        selected: upChevron16WatermelonIcon,
        disabled: upChevron16DisabledIcon,
    },
    upChevronWhite16: {
        normal: upChevronWhite16DefaultIcon,
        hover: upChevronWhite16HoverIcon,
        selected: upChevronWhite16HoverIcon,
        disabled: '',
    },
    downChevron16: {
        normal: downChevron16DefaultIcon,
        hover: downChevron16WatermelonIcon,
        selected: downChevron16WatermelonIcon,
        disabled: downChevron16DisabledIcon,
    },
    downChevronWhite16: {
        normal: downChevronWhite16DefaultIcon,
        hover: downChevronWhite16HoverIcon,
        selected: downChevronWhite16HoverIcon,
        disabled: '',
    },
    leftChevron16: {
        normal: leftChevron16DefaultIcon,
        hover: leftChevron16WatermelonIcon,
        selected: leftChevron16WatermelonIcon,
        disabled: '',
    },
    rightChevron16: {
        normal: rightChevron16DefaultIcon,
        hover: rightChevron16WatermelonIcon,
        selected: rightChevron16WatermelonIcon,
        disabled: '',
    },
    close16: {
        normal: close16DefaultIcon,
        hover: close16WatermelonIcon,
        selected: '',
        disabled: '',
    },
    close24: {
        normal: close24DefaultIcon,
        hover: close24HoverIcon,
        selected: '',
        disabled: '',
    },
    check16: {
        normal: checkDefaultIcon,
        hover: '',
        selected: '',
        disabled: '',
    },
    apple18: {
        normal: apple18Icon,
        hover: apple18Icon,
        selected: apple18Icon,
        disabled: '',
    },
    android18: {
        normal: android18Icon,
        hover: android18Icon,
        selected: android18Icon,
        disabled: '',
    },
    search24: {
        normal: search24DefaultIcon,
        hover: search24WatermelonIcon,
        selected: search24DefaultIcon,
        disabled: '',
    },
    facebook24: {
        normal: facebook24OriginalIcon,
        hover: facebook24WatermelonIcon,
        selected: facebook24WatermelonIcon,
        disabled: '',
    },
    twitter24: {
        normal: twitter24OriginalIcon,
        hover: twitter24WatermelonIcon,
        selected: twitter24WatermelonIcon,
        disabled: '',
    },
    instagram24: {
        normal: instagram24OriginalIcon,
        hover: instagram24WatermelonIcon,
        selected: instagram24WatermelonIcon,
        disabled: '',
    },
    linkedin24: {
        normal: linkedin24OriginalIcon,
        hover: linkedin24WatermelonIcon,
        selected: linkedin24WatermelonIcon,
        disabled: '',
    },
    whatsApp24: {
        normal: whatsApp24DefaultIcon,
        hover: whatsApp24WatermelonIcon,
        selected: whatsApp24WatermelonIcon,
        disabled: '',
    },
    mail24: {
        normal: mail24DefaultIcon,
        hover: mail4WatermelonIcon,
        selected: mail4WatermelonIcon,
        disabled: '',
    },
    link24: {
        normal: link24DefaultIcon,
        hover: link24WatermelonIcon,
        selected: link24WatermelonIcon,
        disabled: '',
    },
    facebook32: {
        normal: facebook32SlateIcon,
        hover: facebook32OriginalIcon,
        selected: facebook32OriginalIcon,
        disabled: '',
    },
    instagram32: {
        normal: instagram32SlateIcon,
        hover: instagram32OriginalIcon,
        selected: instagram32OriginalIcon,
        disabled: '',
    },
    twitter32: {
        normal: twitter32SlateIcon,
        hover: twitter32OriginalIcon,
        selected: twitter32OriginalIcon,
        disabled: '',
    },
    linkedin32: {
        normal: linkedin32SlateIcon,
        hover: linkedin32OriginalIcon,
        selected: linkedin32OriginalIcon,
        disabled: '',
    },
    googlePlay128: {
        normal: googlePlay128Icon,
        hover: googlePlay128Icon,
        selected: googlePlay128Icon,
        disabled: '',
    },
    appStore128: {
        normal: appStore128Icon,
        hover: appStore128Icon,
        selected: appStore128Icon,
        disabled: '',
    },
    menu24: {
        normal: menu24DefaultIcon,
        hover: menu24HoverIcon,
        selected: '',
        disabled: '',
    },
    menuWatermelon24: {
        normal: menu24WatermelonIcon,
        hover: menu24WatermelonHoverIcon,
        selected: '',
        disabled: '',
    },
    rightArrowPink16: {
        normal: rightArrowPink16DefaultIcon,
        hover: rightArrowPink16HoverIcon,
        selected: '',
        disabled: '',
    },
};

function getAltAndClassFromName(name: GlobalIconName) {
    const matches = name.match(/\d{0,3}$/);
    if (matches) {
        const size = matches[0];
        if (size && ['12', '16', '18', '24', '32', '128'].includes(size)) {
            return { alt: name.substring(0, name.indexOf(size)), style: `icon-${size}` };
        }
    }
    return { alt: name, style: '' };
}

export function getIconData(name: GlobalIconName, state: ComponentState) {
    const path = iconConfigData[name][state];
    const data = getAltAndClassFromName(name);
    return {
        path,
        alt: data.alt,
        style: data.style,
    };
}
