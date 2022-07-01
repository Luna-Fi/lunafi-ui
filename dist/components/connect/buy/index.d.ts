import { FC } from 'react';
interface Item {
    name: string;
    href: string;
    iconSrc: string;
}
export interface ConnectBuyProps {
    items: Item[];
}
export declare const ConnectBuy: FC<ConnectBuyProps>;
export {};
