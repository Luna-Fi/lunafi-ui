import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Link {
    name: string;
    href: string;
    isExternal?: boolean;
}

interface LinkGroup {
    name: string;
    links: Link[];
}

export interface LayoutFooterMenuProps {
    linkGroups: LinkGroup[];
}

export const LayoutFooterMenu: FC<LayoutFooterMenuProps> = ({
    linkGroups,
}) => (
    <ul
        className={styles.menu}
        aria-label="Footer Menu"
    >

        {linkGroups.map((group) => (
            <li
                key={group.name}
                className={styles.menu__group}
            >
                <span className={styles.menu__title}>{group.name}</span>
                <ul className={styles.menu__links}>
                    {group.links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                target={link.isExternal ? '_blank' : ''}
                                rel="noreferrer"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </li>
        ))}

    </ul>
);
