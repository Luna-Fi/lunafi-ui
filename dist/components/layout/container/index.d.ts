import { FC, PropsWithChildren, ReactNode } from 'react';
import { StoreProps } from '../../../store/types';
import { NavigationMenuProps } from '../../navigation/menu';
import { LayoutFooterProps } from '../footer';
export interface LayoutContainerProps {
    storeProps: StoreProps;
    menuLinks: NavigationMenuProps['links'];
    pageTitle: string;
    footer?: LayoutFooterProps;
}
export interface Props extends LayoutContainerProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    asideChildren?: ReactNode;
}
export declare const LayoutContainer: FC<PropsWithChildren<Props>>;
