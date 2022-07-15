import React, { FC } from 'react';
import styles from './index.module.scss';
import { PoolsListItem, PoolsListItemProps } from './Item';

export interface PoolListProps {
    items: PoolsListItemProps[];
}

export const PoolsList: FC<PoolListProps> = ({
    items,
}) => (
    <div className={styles.pools_list}>

        <div className={`${styles.row} ${styles.head}`} aria-hidden>
            <div className={`${styles.col} ${styles.col_pool}`}>Pool</div>
            <div className={`${styles.col} ${styles.col_my_liquidity}`}>My Liquidity</div>
            <div className={`${styles.col} ${styles.col_liquidity}`}>Liquidity</div>
            <div className={`${styles.col} ${styles.col_apy}`}>APY</div>
            <div className={`${styles.col} ${styles.col_deposit}`} />
            <div className={`${styles.col} ${styles.col_nav}`} />
        </div>

        <section
            className={styles.body}
            aria-label="Pools"
        >
            {items.map((item) => (
                <PoolsListItem
                    {...item}
                    key={item.key}
                />
            ))}
        </section>

    </div>
);
