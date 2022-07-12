import { ConnectUserProps } from './types';

export const lorem: ConnectUserProps = {
    address: '0xca7bf3c514d412ac12d10eff302301a81153f557',
    network: 'MetaMask',
    explorerHref: 'https://google.com/',
    disconnectCallback() {
        // eslint-disable-next-line no-alert
        alert('Disconnect');
    },
};
