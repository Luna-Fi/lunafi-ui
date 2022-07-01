import { AnchorHTMLAttributes, FC } from 'react';
export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}
export declare const LinkExplore: FC<Props>;
