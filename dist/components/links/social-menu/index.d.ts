import { FC } from 'react';
import { SocialLinks } from '../types';
export interface LinksSocialMenuProps extends SocialLinks {
}
export interface Props extends LinksSocialMenuProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}
export declare const LinksSocialMenu: FC<Props>;
