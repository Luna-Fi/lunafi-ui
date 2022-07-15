export interface ConnectWalletItem {
    key?: string | number;
    name: string;
    img: string;
}
export interface ConnectWalletProps {
    wallets: ConnectWalletItem[];
    onSelect: (wallet: ConnectWalletItem) => void;
}
