import { ConnectBalanceInfoProps } from '.';
import { lorem as buyLorem } from '../buy/lorem';

export const lorem: ConnectBalanceInfoProps = {
    balance: 0.079,
    info: [
        {
            key: 0,
            name: 'Fully diluted supply',
            value: 9000212,
        },
        {
            key: 1,
            name: 'Burnt Supply',
            value: 9000212,
        },
        {
            key: 2,
            name: 'Circulating Supply',
            value: 9000212,
        },
        {
            key: 3,
            name: 'Market Cap',
            value: 9000212,
        },
    ],
    buy: buyLorem,
    explorerHref: 'https://google.com/',
};