import { FC } from 'react';
interface WalletItem {
    key?: string | number;
    name: string;
    img: string;
}
export interface ConnectSubmitProps {
    wallets: WalletItem[];
}
export interface Props extends ConnectSubmitProps {
    onSelect?: (wallet: WalletItem) => void;
}
export declare const ConnectSubmit: FC<Props>;
export {};
