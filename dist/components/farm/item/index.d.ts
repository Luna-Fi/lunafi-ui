import { FC } from 'react';
import { FarmItemInfoProps } from './Info';
import { FarmItemRewardsProps } from './Rewards';
export interface FarmItemProps extends FarmItemInfoProps {
    balance: number;
    approve: {
        max: number;
        onApprove: (amount: number | undefined) => void;
    };
    withdraw: {
        max: number;
        onWithdraw: (amount: number | undefined) => void;
        onWithdrawAll: () => void;
    };
    rewards: FarmItemRewardsProps;
}
export declare const FarmItem: FC<FarmItemProps>;
