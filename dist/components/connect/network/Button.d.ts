import React, { HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLButtonElement> {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    iconSrc?: string;
    color?: string;
}
export declare const ConnectNetworkButton: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
export {};
