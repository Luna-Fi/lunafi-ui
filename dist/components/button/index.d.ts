import React from 'react';
import { ButtonAnchorProps } from './ButtonAnchor';
export interface ButtonProps {
    /**
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * @default 'primary'
     */
    variant?: 'primary' | 'success' | 'danger';
    /**
     * @default false
     */
    fullWidth?: boolean;
}
declare type Props = ButtonProps & ButtonAnchorProps;
export declare const Button: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export {};
