import { FC } from 'react';
interface WalletItem {
    key?: string | number;
    name: string;
    img: string;
}
export interface ConnectSubmitProps {
    wallets: WalletItem[];
    onSelect?: (wallet: WalletItem) => void;
}
export declare const ConnectSubmit: FC<ConnectSubmitProps>;
export {};
