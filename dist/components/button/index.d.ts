import React from 'react';
import { ButtonBaseProps } from './__base/Base';
export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'light';
}
export declare type Props = ButtonProps & ButtonBaseProps;
export declare const Button: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
