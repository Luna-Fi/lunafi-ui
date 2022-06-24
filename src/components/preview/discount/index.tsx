import React, { FC } from 'react';
import styles from './styles.module.scss';

export interface PreviewDiscountProps {
    name?: string;
    items?: {
        key?: string;
        value?: string;
    }[];
}

export interface Props extends PreviewDiscountProps { }

export const PreviewDiscount: FC<Props> = ({
    name,
    items,
}) => (
    <div className={styles.preview_discount}>
        <div className={styles.img}>
            <div />
        </div>
        <div className={styles.container}>
            <div className={styles.name}>
                <span>{name}</span>
            </div>
            <div className={styles.items}>
                {items?.map((item) => (
                    <div className={styles.item} key={item.key}>
                        <span className={styles.key}>
                            {item.key}
                        </span>
                        <span className={styles.value}>
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
