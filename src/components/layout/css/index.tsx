import React, { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

/**
 * Default page wrapper that would set default colors and other settings
 */
export const LayoutCSS: FC<PropsWithChildren> = ({
    children,
}) => (
    <div className={styles.layout_css}>
        {children}
    </div>
);
