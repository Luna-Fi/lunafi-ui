import { FC } from 'react';
import { ConnectBuyProps } from '../../buy';
export interface ConnectUserInfoProps {
    address: string;
    network: string;
    explorerHref?: string;
    buy?: ConnectBuyProps;
}
export interface Props extends ConnectUserInfoProps {
    disconnectCallback?: () => void;
}
export declare const ConnectUserInfo: FC<Props>;
