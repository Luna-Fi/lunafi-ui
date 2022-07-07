import { InputNumberProps } from 'rc-input-number';
import React from 'react';
export declare type FormInputNumberProps = InputNumberProps & {
    label: string;
    icon?: string;
    onMax?: (max: number) => void;
};
export declare const FormInputNumber: React.ForwardRefExoticComponent<InputNumberProps<import("rc-input-number/lib/utils/MiniDecimal").ValueType> & {
    label: string;
    icon?: string | undefined;
    onMax?: ((max: number) => void) | undefined;
} & React.RefAttributes<HTMLInputElement>>;
