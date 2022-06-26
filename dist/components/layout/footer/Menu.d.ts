import { FC } from 'react';
interface Link {
    name: string;
    href: string;
    isExternal?: boolean;
}
interface LinkGroup {
    name: string;
    links: Link[];
}
export interface LayoutFooterMenuProps {
    linkGroups: LinkGroup[];
}
export declare const LayoutFooterMenu: FC<LayoutFooterMenuProps>;
export {};
