import { FC } from 'react';
import { PreviewNetworkLabelProps } from 'src/components/preview/network-label';
export interface PoolsListItemProps {
    key: string | number;
    href: string;
    icon: string;
    name: string;
    label: string;
    network?: PreviewNetworkLabelProps;
    liquidity?: number;
    myLiquidity?: number;
    apy?: {
        value: number;
        lfiValue: number;
    };
}
export declare const PoolsListItem: FC<PoolsListItemProps>;
