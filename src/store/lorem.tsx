import { lorem as connectWalletLorem } from '../components/connect/wallet/lorem';
import { lorem as coinLFILorem } from '../components/coin/lfi/lorem';
import { lorem as coinBuyLorem } from '../components/coin/buy/lorem';
import { lorem as connectUserLorem } from '../components/connect/user/lorem';
import { lorem as connectNetworkLorem } from '../components/connect/network/lorem';
import { StoreProps } from './types';

export const storeLorem: StoreProps = {
    authorized: false,
    connectNetwork: connectNetworkLorem,
    connectWallet: connectWalletLorem,
    lfi: coinLFILorem,
    buy: coinBuyLorem,
    user: connectUserLorem,
    addToMetamaskCallback() {
        // eslint-disable-next-line no-alert
        alert('Add to Metamask');
    },
    links: {
        privacy: 'https://google.com/privacy',
        terms: 'https://google.com/terms',
    },
};
