import { FC } from 'react';
import { ConnectBuyProps } from '../../buy';
interface ConnectCoinInfoItem {
    key: string | number;
    name: string;
    value: number;
}
export interface ConnectCoinInfoProps {
    price: number;
    info?: ConnectCoinInfoItem[];
    buy?: ConnectBuyProps;
    explorerHref?: string;
}
export interface Props extends ConnectCoinInfoProps {
    addToMetamaskCallback?: () => void;
}
export declare const ConnectCoinInfo: FC<Props>;
export {};
