import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { BoxHeading } from 'src/components/box/heading';
import styles from './styles.module.scss';

export interface Props {
    heading: string;
    filters: ReactNode;
}

export const PoolsListBox: FC<PropsWithChildren<Props>> = ({
    heading,
    filters,
    children,
}) => (
    <BoxHeading
        heading={heading}
        nav={(
            <div className={styles.filters}>
                {filters}
            </div>
        )}
    >
        {children}
    </BoxHeading>
);
