import React, { ButtonHTMLAttributes } from 'react';
export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    /**
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * @default 'medium'
     */
    spacing?: 'small' | 'medium' | 'large';
    /**
     * @defaul false
     */
    fullWidth?: boolean;
    /**
     * @default true
     */
    hasBg?: boolean;
}
export declare const ButtonSvgOutline: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
