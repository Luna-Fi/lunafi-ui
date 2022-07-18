import { ConnectUserProps } from '../components/connect/user/types';
import { ConnectWalletProps } from '../components/connect/wallet/types';
import { CoinBuyProps } from '../components/coin/buy/types';
import { CoinLFIProps } from '../components/coin/lfi/types';
import { ConnectNetworkProps } from '../components/connect/network/types';
export interface StoreProps {
    authorized: boolean;
    connectNetwork: ConnectNetworkProps;
    connectWallet: ConnectWalletProps;
    lfi: CoinLFIProps;
    buy: CoinBuyProps;
    user: ConnectUserProps;
    addToMetamaskCallback: () => void;
    links: {
        privacy: string;
        terms: string;
    };
}
export interface StoreData extends StoreProps {
    system: {
        connectWallet: {
            shown: boolean;
            setShown: (shown: boolean) => void;
        };
    };
}
