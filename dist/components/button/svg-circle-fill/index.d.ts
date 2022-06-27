import React, { ButtonHTMLAttributes } from 'react';
export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    /**
     * Has static fill background
     * @default true
     */
    hasStaticFill?: boolean;
    /**
     * If the button should have a hover state
     * @default true
     */
    hasHover?: boolean;
    /**
     * When native hover should not be used, set true or false
     * Undefined means native hover
     */
    forceHover?: boolean;
    /**
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * @defaul false
     */
    fullWidth?: boolean;
    /**
     * @default 'primary'
     */
    colorVariant?: 'primary' | 'primary_unactive' | 'gradient';
}
export declare const ButtonSvgCircleFill: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
