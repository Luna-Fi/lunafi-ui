import { FC } from 'react';
import { ConnectBalanceBuyProps } from '../buy';
interface ConnectBalanceInfoItem {
    key: string | number;
    name: string;
    value: number;
}
export interface ConnectBalanceInfoProps {
    balance: number;
    info?: ConnectBalanceInfoItem[];
    buy?: ConnectBalanceBuyProps;
    explorerHref?: string;
}
export interface Props extends ConnectBalanceInfoProps {
    addToMetamaskCallback?: () => void;
}
export declare const ConnectBalanceInfo: FC<Props>;
export {};
