import { FC } from 'react';
export interface IConnectNetworkItem {
    key: string | number;
    name: string;
    previewSrc?: string;
    iconSrc?: string;
    color?: string;
}
export interface ConnectNetworkProps {
    networks: IConnectNetworkItem[];
    onSelect: (network?: IConnectNetworkItem) => void;
}
export interface Props extends ConnectNetworkProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}
export declare const ConnectNetwork: FC<Props>;
