import ethPreview from 'src/img/network/eth_preview.svg';
import polygonPreview from 'src/img/network/polygon_preview.svg';
import ethIcon from 'src/img/network/eth_icon.svg';
import polygonIcon from 'src/img/network/polygon_icon.svg';
import { ConnectNetworkProps } from '.';

export const lorem: ConnectNetworkProps = {
    networks: [
        {
            key: 0,
            name: 'Polygon',
            iconSrc: polygonIcon,
            previewSrc: polygonPreview,
        },
        {
            key: 1,
            name: 'ETH',
            iconSrc: ethIcon,
            previewSrc: ethPreview,
        },
    ],
    onSelect: () => {},
};
