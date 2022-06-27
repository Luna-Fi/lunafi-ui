import React, { FC } from 'react';
import { ConnectBalanceButton } from './button';

export interface Props {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    balance: number;
}

export const ConnectBalance: FC<Props> = ({
    appearAnimation,
    appearAnimationOn,
    balance,
}) => (
    <ConnectBalanceButton
        appearAnimation={appearAnimation}
        appearAnimationOn={appearAnimationOn}
        balance={balance}
    />
);
