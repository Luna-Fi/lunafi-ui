import { vevetApp } from './vevet';

export const media = {
    isXXL: () => vevetApp.viewport.width >= 1500,
    isXL: () => vevetApp.viewport.width >= 1200 && vevetApp.viewport.width <= 1499,
    isLG: () => vevetApp.viewport.width >= 1024 && vevetApp.viewport.width <= 1199,
    isMD: () => vevetApp.viewport.width >= 900 && vevetApp.viewport.width <= 1023,
    isSM: () => vevetApp.viewport.width >= 744 && vevetApp.viewport.width <= 899,
    isXS: () => vevetApp.viewport.width <= 743,
};
