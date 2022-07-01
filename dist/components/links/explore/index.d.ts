import React, { AnchorHTMLAttributes } from 'react';
export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}
export declare const LinkExplore: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLAnchorElement>>;
