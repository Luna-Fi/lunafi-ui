import React, { HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLButtonElement> {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    address: string;
}
export declare const ConnectUserButton: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
export {};
