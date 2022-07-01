import React, { FC } from 'react';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import styles from './styles.module.scss';

interface Item {
    name: string;
    href: string;
    iconSrc: string;
}

export interface ConnectBuyProps {
    items: Item[];
}

export const ConnectBuy: FC<ConnectBuyProps> = ({
    items,
}) => (
    <ul className={styles.connect_buy}>
        {items.map((item) => (
            <li
                key={item.name}
            >
                <ButtonSvgCircleFill
                    className={styles.button}
                    tag="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    hasStaticFill={false}
                >
                    <img
                        className={styles.icon}
                        src={item.iconSrc}
                        alt={item.name}
                    />
                    {item.name}
                </ButtonSvgCircleFill>
            </li>
        ))}
    </ul>
);
