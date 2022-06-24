import React, { HTMLAttributes } from 'react';
export interface ContainerOutlineProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    appearAnimationDuration?: number;
}
export interface Props extends HTMLAttributes<HTMLDivElement>, ContainerOutlineProps {
}
export declare const ContainerOutline: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
