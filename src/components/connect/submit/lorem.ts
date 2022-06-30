import { ConnectSubmitProps } from '.';
import metamaskImg from '@/img/wallets/metamask.svg';
import coinbaseImg from '@/img/wallets/coinbase.svg';
import walletConnectImg from '@/img/wallets/wallet-connect.svg';
import magicImg from '@/img/wallets/magic.svg';

export const lorem: ConnectSubmitProps = {
    wallets: [
        {
            key: 0,
            name: 'MetaMask',
            img: metamaskImg,
        },
        {
            key: 1,
            name: 'Coinbase Wallet',
            img: coinbaseImg,
        },
        {
            key: 2,
            name: 'Wallet Connect',
            img: walletConnectImg,
        },
        {
            key: 3,
            name: 'Magic Link',
            img: magicImg,
        },
    ],
    onSelect: (wallet) => {
        // eslint-disable-next-line no-alert
        alert(wallet.name);
    },
};
