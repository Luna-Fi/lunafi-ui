import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Item {
    name: string;
    href: string;
}

export interface NavigationBreadcrumbsProps {
    items: Item[];
}

export const NavigationBreadcrumbs: FC<NavigationBreadcrumbsProps> = ({
    items,
}) => (
    <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol className={styles.list}>
            {items.map((item, index) => {
                const isCurrent = index === items.length - 1;

                return (
                    <li
                        key={item.name}
                        className={[
                            styles.item,
                            isCurrent ? styles.current : '',
                        ].join(' ')}
                    >
                        <a
                            href={item.href}
                            aria-current={isCurrent ? 'page' : undefined}
                            className={[
                                styles.link,
                                isCurrent ? styles.current : undefined,
                            ].join(' ')}
                        >
                            {item.name}
                        </a>
                    </li>
                );
            })}
        </ol>
    </nav>
);
