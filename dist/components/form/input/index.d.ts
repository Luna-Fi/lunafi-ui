import React, { InputHTMLAttributes } from 'react';
export declare type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    icon?: string;
};
export declare const FormInput: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    icon?: string | undefined;
} & React.RefAttributes<HTMLInputElement>>;
