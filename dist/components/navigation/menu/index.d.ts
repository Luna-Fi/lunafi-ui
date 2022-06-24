import { FC } from 'react';
import { NavigationMenuLinkProps } from './Link';
interface Link extends NavigationMenuLinkProps {
    key?: number | string;
}
export interface NavigationMenuProps {
    links: Link[];
}
export interface Props extends NavigationMenuProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    isAdaptive?: boolean;
}
export declare const NavigationMenu: FC<Props>;
export {};
