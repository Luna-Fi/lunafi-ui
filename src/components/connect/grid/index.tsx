import React, { cloneElement, FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface Props {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    balance: ReactNode;
    network: ReactNode;
    connect: ReactNode;
}

export const ConnectGrid: FC<Props> = ({
    appearAnimation,
    appearAnimationOn,
    balance,
    network,
    connect,
}: Props) => {
    const balanceChild = balance && cloneElement(balance as any, {
        appearAnimation,
        appearAnimationOn,
    });
    const networkChild = network && cloneElement(network as any, {
        appearAnimation,
        appearAnimationOn,
    });
    const connectChild = connect && cloneElement(connect as any, {
        appearAnimation,
        appearAnimationOn,
    });

    return (
        <div className={styles.connect_grid}>
            <div className={styles.row}>
                <div className={styles.balance}>{balanceChild}</div>
                <div className={styles.network}>{networkChild}</div>
            </div>
            <div className={styles.user}>{connectChild}</div>
        </div>
    );
};
