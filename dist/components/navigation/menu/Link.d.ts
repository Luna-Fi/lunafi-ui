import { FC } from 'react';
export interface NavigationMenuLinkProps {
    href: string;
    name: string;
    /**
     * Name or src
     */
    icon?: string;
    /**
     * Name or src
     */
    iconActive?: string;
    isActive?: boolean;
}
export interface Props extends NavigationMenuLinkProps {
    isUnactive?: boolean;
    isAdaptive?: boolean;
}
export declare const NavigationMenuLink: FC<Props>;
