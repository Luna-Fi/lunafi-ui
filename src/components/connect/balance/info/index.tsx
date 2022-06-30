import React, { FC } from 'react';
import { NumberFormat } from 'src/components/number/format';
import { LinkExplore } from 'src/components/links/explore';
import { ConnectBalanceBuy, ConnectBalanceBuyProps } from '../buy';
import styles from './styles.module.scss';
import logo from './logo.svg';

interface ConnectBalanceInfoItem {
    key: string | number;
    name: string;
    value: number;
}

export interface ConnectBalanceInfoProps {
    balance: number;
    info?: ConnectBalanceInfoItem[];
    buy?: ConnectBalanceBuyProps;
    explorerHref?: string;
}

export const ConnectBalanceInfo: FC<ConnectBalanceInfoProps> = ({
    balance,
    info,
    buy,
    explorerHref,
}) => (
    <div className={styles.connect_balance_info}>
        <div className={styles.wrap}>

            <div className={styles.title}>LFI Tokens</div>

            <div className={styles.head}>
                <div className={styles.token}>
                    <img src={logo} className={styles.token__img} alt="LFI" />
                    <div className={styles.token__info}>
                        <div>
                            <div className={styles.token__name}>LFI</div>
                            <div className={styles.token__balance}>
                                <NumberFormat value={balance} prefix="$" />
                            </div>
                        </div>
                        <div>
                            {explorerHref && (
                                <LinkExplore
                                    href={explorerHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on Explorer
                                </LinkExplore>
                            )}
                        </div>
                    </div>
                </div>
                <span>Add LFI </span>
            </div>

            {info && (
                <div className={styles.info}>
                    {info.map((item) => (
                        <div
                            key={item.key}
                            className={styles.info__item}
                        >
                            {item.name}
                            <span>
                                <NumberFormat
                                    value={item.value}
                                    rightFixed={0}
                                />
                            </span>
                        </div>
                    ))}
                </div>
            )}

        </div>

        {buy && (
            <div className={styles.buy}>
                <ConnectBalanceBuy {...buy} />
            </div>
        )}
    </div>
);
