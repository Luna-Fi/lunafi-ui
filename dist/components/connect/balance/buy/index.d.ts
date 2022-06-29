import { FC } from 'react';
interface Item {
    name: string;
    href: string;
    iconSrc: string;
}
export interface ConnectBalanceBuyProps {
    items: Item[];
}
export declare const ConnectBalanceBuy: FC<ConnectBalanceBuyProps>;
export {};
