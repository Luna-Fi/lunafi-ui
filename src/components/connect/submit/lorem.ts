import { Props } from '.';

export const lorem: Props = {
    wallets: [
        {
            key: 0,
            name: 'MetaMask',
            img: '/img/wallets/metamask.svg',
        },
        {
            key: 1,
            name: 'Coinbase Wallet',
            img: '/img/wallets/coinbase.svg',
        },
        {
            key: 2,
            name: 'Wallet Connect',
            img: '/img/wallets/wallet-connect.svg',
        },
        {
            key: 3,
            name: 'Magic Link',
            img: '/img/wallets/magic.svg',
        },
    ],
    onSelect: (wallet) => {
        // eslint-disable-next-line no-alert
        alert(wallet.name);
    },
};
