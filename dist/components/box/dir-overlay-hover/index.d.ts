import React, { HTMLAttributes } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    parentNode?: HTMLElement;
    /**
     * @default true
     */
    enableHover?: boolean;
}
export declare const BoxDirOverlayHover: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
