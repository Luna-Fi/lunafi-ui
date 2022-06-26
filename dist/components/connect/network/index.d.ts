import { FC } from 'react';
export interface IConnectNetworkItem {
    name: string;
    previewSrc?: string;
    iconSrc?: string;
}
export interface ConnectNetworkProps {
    networks: IConnectNetworkItem[];
    onSelect: (network: IConnectNetworkItem) => void;
}
export interface Props extends ConnectNetworkProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}
export declare const ConnectNetwork: FC<Props>;
