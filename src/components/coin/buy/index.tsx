import React, { FC, useContext } from 'react';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import { Context } from 'src/store/context';
import styles from './styles.module.scss';

export const CoinBuy: FC = () => {
    const { buy } = useContext(Context);

    return (
        <ul className={styles.coin_buy} aria-label="Buy LFI">
            {buy.items.map((item) => (
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
};
