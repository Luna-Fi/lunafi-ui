import { ConnectNetworkProps } from './types';

export const lorem: ConnectNetworkProps = {
    items: [
        {
            key: 0,
            name: 'Polygon',
            iconSrc: '/img/network/polygon_icon.svg',
            previewSrc: '/img/network/polygon_preview.svg',
            color: '#8247E5',
        },
        {
            key: 1,
            name: 'ETH',
            iconSrc: '/img/network/eth_icon.svg',
            previewSrc: '/img/network/eth_preview.svg',
            color: '#627eea',
        },
    ],
    onSelect: (network) => {
        // eslint-disable-next-line no-alert
        alert(network?.name);
    },
    selectedKey: 0,
};
