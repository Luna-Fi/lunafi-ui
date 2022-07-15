import { DeepRequired } from 'ts-essentials';
import { PoolListProps } from '.';

export const lorem: DeepRequired<PoolListProps> = {
    items: [
        {
            key: 0,
            href: 'https://www.google.com',
            icon: '/img/coin/lfi.svg',
            name: 'WETH',
            label: 'LFIETHLP',
            network: {
                name: 'Matic',
                img: '/img/network-label/matic.svg',
                color: '#A26FF8',
            },
            myLiquidity: 420.1,
            liquidity: 2692.98,
            apy: {
                value: 1.26,
                lfiValue: 0.28,
            },
        },
        {
            key: 1,
            href: 'https://www.google.com',
            icon: '/img/coin/btc.svg',
            name: 'USDC',
            label: 'LFIETHLP',
            network: {
                name: 'Matic',
                img: '/img/network-label/matic.svg',
                color: '#A26FF8',
            },
            myLiquidity: 420.1,
            liquidity: 2692.98,
            apy: {
                value: 1.26,
                lfiValue: 0.28,
            },
        },
        {
            key: 2,
            href: 'https://www.google.com',
            icon: '/img/coin/eth.svg',
            name: 'USDC',
            label: 'LFIETHLP',
            network: {
                name: 'Matic',
                img: '/img/network-label/matic.svg',
                color: '#A26FF8',
            },
            myLiquidity: 420.1,
            liquidity: 2692.98,
            apy: {
                value: 1.26,
                lfiValue: 0.28,
            },
        },
    ],
};
