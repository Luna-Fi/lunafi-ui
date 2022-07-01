import React, { ButtonHTMLAttributes } from 'react';
export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}
export declare const ButtonCopyToClipboard: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
