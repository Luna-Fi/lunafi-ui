import React, { HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLButtonElement> {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    balance: number;
}
export declare const ConnectBalanceButton: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
export {};
