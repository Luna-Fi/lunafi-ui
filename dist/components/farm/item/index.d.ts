import { FC } from 'react';
import { FarmItemInfoProps } from './Info';
import { FarmItemRewardsProps } from './Rewards';
export interface FarmItemProps extends FarmItemInfoProps {
    balance: number;
    form: {
        max: number;
        onSubmit: (amount: number | undefined) => void;
        disabled: boolean;
        submitText: string;
    };
    withdraw: {
        max: number;
        onWithdraw: (amount: number | undefined) => void;
        onWithdrawAll: () => void;
    };
    rewards: FarmItemRewardsProps;
}
export declare const FarmItem: FC<FarmItemProps>;
