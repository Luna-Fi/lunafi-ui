import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
export declare type ButtonAnchorProps = ({
    tag: 'a';
    href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>) | ({
    tag: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>);
export declare const ButtonAnchor: React.ForwardRefExoticComponent<ButtonAnchorProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
