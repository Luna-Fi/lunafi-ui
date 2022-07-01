import { Props } from '.';
import { lorem as buyLorem } from '../../balance/buy/lorem';

export const lorem: Props = {
    address: '0xca7bf3c514d412ac12d10eff302301a81153f557',
    network: 'MetaMask',
    explorerHref: 'https://google.com/',
    buy: buyLorem,
    disconnectCallback() {
        // eslint-disable-next-line no-alert
        alert('Disconnect');
    },
};
