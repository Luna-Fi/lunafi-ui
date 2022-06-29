import { ConnectBalanceBuyProps } from '.';
import sharkswapLogo from '@/img/general/sharkswap.png';
import quickswapLogo from '@/img/general/quickswap.png';

export const lorem: ConnectBalanceBuyProps = {
    items: [
        {
            name: 'Buy LFI on Sharkswap',
            href: 'https://www.sharkswap.xyz/analytics/pairs/0xb251c9b8712bd2253aefc422fbd370b236f7abde',
            iconSrc: sharkswapLogo,
        },
        {
            name: 'Buy LFI on Quickswap',
            href: 'https://quickswap.exchange/#/swap?inputCurrency=0xca7bf3c514d412ac12d10eff302301a81153f557',
            iconSrc: quickswapLogo,
        },
    ],
};
