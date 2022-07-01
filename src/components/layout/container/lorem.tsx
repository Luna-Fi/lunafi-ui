import { LayoutContainerProps } from '.';
import { lorem as menuLorem } from '../../navigation/menu/lorem';
import { lorem as footerLorem } from '../footer/lorem';

export const lorem: LayoutContainerProps = {
    menuLinks: menuLorem.links,
    pageTitle: 'Home',
    footer: footerLorem,
    addToMetamaskCallback() {
        // eslint-disable-next-line no-alert
        alert('Add to Metamask');
    },
};
