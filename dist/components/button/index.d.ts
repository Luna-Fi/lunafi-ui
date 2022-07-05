import React from 'react';
import { ButtonBaseProps } from './__base/Base';
export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'light' | 'dark';
}
export declare type Props = ButtonProps & ButtonBaseProps;
export declare const Button: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
