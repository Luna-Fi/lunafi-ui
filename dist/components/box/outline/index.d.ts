import React, { HTMLAttributes } from 'react';
export interface BoxOutlineProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    appearAnimationDuration?: number;
}
export interface Props extends HTMLAttributes<HTMLDivElement>, BoxOutlineProps {
}
export declare const BoxOutline: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
