export interface CoinLFIProps {
    price: number;
    info?: {
        key: string | number;
        name: string;
        value: number;
    }[];
    explorerHref?: string;
}
