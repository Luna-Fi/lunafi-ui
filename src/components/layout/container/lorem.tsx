import { storeLorem } from 'src/store/lorem';
import { LayoutContainerProps } from '.';
import { lorem as menuLorem } from '../../navigation/menu/lorem';
import { lorem as footerLorem } from '../footer/lorem';

export const lorem: LayoutContainerProps = {
    storeProps: storeLorem,
    menuLinks: menuLorem.links,
    pageTitle: 'Home',
    footer: footerLorem,
};
