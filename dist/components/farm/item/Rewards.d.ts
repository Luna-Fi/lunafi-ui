import { FC } from 'react';
export interface FarmItemRewardsProps {
    value: number;
    onAddLiquidity: () => void;
    onRemoveLiquidity: () => void;
    onClaimRewards: () => void;
}
export interface FarmItemFormHandle {
    getInputValue: () => (number | undefined);
}
export declare const FarmItemRewards: FC<FarmItemRewardsProps>;
