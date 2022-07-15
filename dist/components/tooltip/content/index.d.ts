import React, { HTMLAttributes, ReactNode } from 'react';
import { TooltipPos } from '../types';
export interface TooltipContentHandle {
    close: () => void;
}
export interface Props extends HTMLAttributes<HTMLDivElement> {
    trigger: ReactNode;
    forceShow?: boolean;
    /**
     * @default true
     */
    useBackground?: boolean;
    /**
     * @default true
     */
    usePadding?: boolean;
    /**
     * @default true
     */
    useMargin?: boolean;
    pos?: TooltipPos;
}
export declare const TooltipContent: React.ForwardRefExoticComponent<Props & React.RefAttributes<TooltipContentHandle>>;
