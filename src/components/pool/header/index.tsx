import React, { FC } from 'react';
import styles from './styles.module.scss';

export interface PoolHeaderProps {
    img?: string;
    name: string;
    label?: string;
}

export const PoolHeader: FC<PoolHeaderProps> = ({
    img,
    name,
    label,
}) => (
    <div className={styles.pool_header}>
        {img && (
            <img src={img} className={styles.img} alt={name} />
        )}
        <h2 className={styles.name}>{name}</h2>
        {label && (
            <span className={styles.label}>{label}</span>
        )}
    </div>
);
