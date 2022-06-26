import { FC, PropsWithChildren, ReactNode } from 'react';
import { NavigationMenuProps } from '../../navigation/menu';
import { LayoutFooterProps } from '../footer';
export interface LayoutContainerProps {
    menuLinks: NavigationMenuProps['links'];
    pageTitle: string;
    footer?: LayoutFooterProps;
}
export interface Props extends LayoutContainerProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    asideChildren?: ReactNode;
    topChildren?: ReactNode;
}
export declare const LayoutContainer: FC<PropsWithChildren<Props>>;
