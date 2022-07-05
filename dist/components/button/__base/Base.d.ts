import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
declare type Props = {
    /**
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large' | false;
    /**
     * @default false
     */
    fullWidth?: boolean;
};
export declare type ButtonBaseProps = ({
    tag: 'a';
    href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement> & Props) | ({
    tag: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement> & Props);
export declare const ButtonBase: React.ForwardRefExoticComponent<ButtonBaseProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export {};
