import React from 'react';
import { ButtonBaseProps } from '../__base/Base';
export interface ButtonSvgCircleFillProps {
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
     * @default 'primary'
     */
    colorVariant?: 'primary' | 'primary_unactive' | 'gradient';
}
declare type Props = ButtonSvgCircleFillProps & ButtonBaseProps;
export declare const ButtonSvgCircleFill: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export {};
