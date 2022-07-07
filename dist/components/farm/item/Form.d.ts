import React, { ReactNode } from 'react';
interface Props {
    label: string;
    balance: number;
    max: number;
    icon: string;
    renderButton: (value: number | undefined) => ReactNode;
}
export interface FarmItemFormHandle {
    getInputValue: () => (number | undefined);
}
export declare const FarmItemForm: React.ForwardRefExoticComponent<Props & React.RefAttributes<FarmItemFormHandle>>;
export {};
