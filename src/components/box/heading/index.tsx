import React, { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export interface Props {
    heading: string;
}

export const BoxHeading: FC<PropsWithChildren<Props>> = ({
    heading,
    children,
}) => (
    <section>
        <h2 className={styles.heading}>{heading}</h2>
        {children}
    </section>
);
