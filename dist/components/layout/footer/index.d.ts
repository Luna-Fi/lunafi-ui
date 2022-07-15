import { FC } from 'react';
import { LinksSocialIconsProps } from '../../links/social-icons';
import { LayoutFooterMenuProps } from './Menu';
export interface LayoutFooterProps {
    menu?: LayoutFooterMenuProps['linkGroups'];
    social?: LinksSocialIconsProps;
}
export declare const LayoutFooter: FC<LayoutFooterProps>;
