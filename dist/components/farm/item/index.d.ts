import { FC } from 'react';
import { FarmItemInfoProps } from './Info';
import { FarmItemRewardsProps } from './Rewards';
export interface FarmItemProps extends FarmItemInfoProps {
    form: {
        balance: number;
        max: number;
        onSubmit: (amount: number | undefined) => void;
        disabled: boolean;
        submitText: string;
    };
    withdraw: {
        balance: number;
        max: number;
        onWithdraw: (amount: number | undefined) => void;
        onWithdrawAll: () => void;
    };
    rewards: FarmItemRewardsProps;
}
export declare const FarmItem: FC<FarmItemProps>;
