import { InputNumberProps } from 'rc-input-number';
import React from 'react';
export declare type FormInputNumberProps = InputNumberProps & {
    label: string;
    icon?: string;
};
export declare const FormInputNumber: React.ForwardRefExoticComponent<InputNumberProps<import("rc-input-number/lib/utils/MiniDecimal").ValueType> & {
    label: string;
    icon?: string | undefined;
} & React.RefAttributes<HTMLInputElement>>;
