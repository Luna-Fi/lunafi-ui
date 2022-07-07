import React from 'react';
import { ButtonBaseProps } from '../__base/Base';
export interface ButtonOutlineProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'light' | 'dark';
}
export declare type Props = ButtonOutlineProps & ButtonBaseProps;
export declare const ButtonOutline: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
