import React, { FC, useState } from 'react';
import { vevetApp } from 'src/utils/vevet';
import styles from './Link.module.scss';

import iconHome from '@/img/menu/home.svg';
import iconHomeActive from '@/img/menu/home_active.svg';

const iconSrcMap = new Map();
iconSrcMap.set('home', iconHome);
iconSrcMap.set('home_active', iconHomeActive);

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

export const NavigationMenuLink: FC<Props> = ({
    href,
    name,
    icon,
    iconActive,
    isUnactive,
    isActive,
    isAdaptive,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const classNames = [
        isUnactive ? styles.unactive : '',
        isActive ? styles.active : '',
        isHovered ? styles.hover : '',
        isAdaptive ? styles.adaptive : '',
    ].join(' ');

    const iconSrc = iconSrcMap.get(icon) || icon || '';
    const iconActiveSrc = iconSrcMap.get(iconActive) || icon || '';

    return (
        <a
            href={href}
            className={[
                styles.link,
                classNames,
            ].join(' ')}
            aria-label={name}
            onMouseEnter={() => {
                if (!vevetApp.isMobile) {
                    setIsHovered(true);
                }
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
        >
            <span
                className={[
                    styles.icon,
                    classNames,
                ].join(' ')}
            >
                {iconSrc && (
                    <img
                        src={iconSrc}
                        alt={name}
                        className={styles.img_static}
                    />
                )}
                {iconActiveSrc && (
                    <img
                        src={iconActiveSrc}
                        alt={name}
                        className={styles.img_active}
                    />
                )}
            </span>
            <span className={`${styles.name} ${classNames}`}>{name}</span>
        </a>
    );
};
