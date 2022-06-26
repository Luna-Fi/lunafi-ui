import { FC } from 'react';
import { LayoutFooterMenuProps } from './Menu';
export interface LayoutFooterProps {
    menu?: LayoutFooterMenuProps['linkGroups'];
}
export declare const LayoutFooter: FC<LayoutFooterProps>;
