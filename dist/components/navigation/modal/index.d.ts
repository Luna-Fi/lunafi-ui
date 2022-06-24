import React, { HTMLAttributes } from 'react';
import { NavigationMenuProps } from '../menu';
export interface NavigationModalProps {
    links: NavigationMenuProps['links'];
}
export interface Props extends NavigationModalProps, HTMLAttributes<HTMLDivElement> {
    show: boolean;
    handleCloseClick: () => void;
}
export declare const NavigationModal: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
