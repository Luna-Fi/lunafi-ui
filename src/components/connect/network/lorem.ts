import { ConnectNetworkProps } from '.';

export const lorem: ConnectNetworkProps = {
    networks: [
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
    onSelect: () => {},
};
