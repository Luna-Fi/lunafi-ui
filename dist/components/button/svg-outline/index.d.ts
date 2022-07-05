import React from 'react';
import { ButtonBaseProps } from '../__base/Base';
export declare type ButtonSvgOutlineProps = {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    /**
     * @default 'medium'
     */
    spacing?: 'small' | 'medium' | 'large';
    /**
     * @default true
     */
    hasBg?: boolean;
};
export declare type Props = ButtonSvgOutlineProps & ButtonBaseProps;
export declare const ButtonSvgOutline: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
