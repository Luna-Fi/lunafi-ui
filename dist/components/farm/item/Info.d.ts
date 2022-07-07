import { FC } from 'react';
import { PreviewNetworkLabelProps } from 'src/components/preview/network-label';
export interface FarmItemInfoProps {
    icon: string;
    name: string;
    label: string;
    network?: PreviewNetworkLabelProps;
    deposited?: number;
    tvl?: number;
    dailyRewards?: number;
    apy?: number;
}
export declare const FarmItemInfo: FC<FarmItemInfoProps>;
