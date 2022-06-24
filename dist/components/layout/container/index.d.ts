import { FC, PropsWithChildren, ReactNode } from 'react';
import { NavigationMenuProps } from '../../navigation/menu';
export interface LayoutContainerProps {
    menuLinks: NavigationMenuProps['links'];
    pageTitle: string;
}
export interface Props extends LayoutContainerProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    asideChildren?: ReactNode;
}
export declare const LayoutContainer: FC<PropsWithChildren<Props>>;
