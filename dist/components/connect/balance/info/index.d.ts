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
export declare const ConnectBalanceInfo: FC<ConnectBalanceInfoProps>;
export {};
