import React, { FC, useState } from 'react';
import { vevetApp } from 'src/utils/vevet';
import { NavigationMenuLink, NavigationMenuLinkProps } from './Link';
import styles from './styles.module.scss';

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

export const NavigationMenu: FC<Props> = ({
    links,
    appearAnimation,
    appearAnimationOn,
    isAdaptive,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const classNames = [
        appearAnimation ? styles.has_appear_animation : '',
        appearAnimationOn ? styles.show : '',
    ].join(' ');

    return (
        <ul
            className={styles.navigation_menu}
            onMouseEnter={() => {
                if (!vevetApp.isMobile) {
                    setIsHovered(true);
                }
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
        >
            {links.map((link, index) => (
                <li
                    className={classNames}
                    key={link.key}
                    style={{
                        transitionDelay: `${appearAnimation && appearAnimationOn ? index * 0.1 : 0}s`,
                    }}
                >
                    <NavigationMenuLink
                        {...link}
                        isUnactive={isHovered}
                        isAdaptive={isAdaptive}
                    />
                </li>
            ))}
        </ul>
    );
};
