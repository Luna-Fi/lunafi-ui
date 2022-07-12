import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export interface Props {
    text: string;
    button?: ReactNode;
}

export const BoxInfo: FC<Props> = ({
    text,
    button,
}) => (
    <div className={styles.box_info}>
        <div className={styles.info}>
            <span className={styles.text}>
                {text}
            </span>
        </div>
        {button && (
            <div className={styles.button}>
                {button}
            </div>
        )}
    </div>
);
