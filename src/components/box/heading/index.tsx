import React, { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface Props {
    heading: string;
    nav?: ReactNode;
}

export const BoxHeading: FC<PropsWithChildren<Props>> = ({
    heading,
    nav,
    children,
}) => (
    <section>
        <div className={styles.head}>
            <h2 className={styles.heading}>{heading}</h2>
            {nav && <div className={styles.nav}>{nav}</div>}
        </div>
        {children}
    </section>
);
