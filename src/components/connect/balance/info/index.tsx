import React, { FC } from 'react';
import { NumberFormat } from 'src/components/number/format';
import { LinkExplore } from 'src/components/links/explore';
import { ConnectBalanceBuy, ConnectBalanceBuyProps } from '../buy';
import styles from './styles.module.scss';

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
                    <svg className={styles.token__img} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="black" />
                        <ellipse cx="12.8011" cy="15.9998" rx="7.68" ry="7.68" fill="#00FFFF" />
                        <ellipse cx="19.3841" cy="15.9998" rx="7.68" ry="7.68" fill="#00FFFF" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.0926 22.941C18.6872 21.7084 20.4811 19.0637 20.4811 16.0001C20.4811 12.9365 18.6872 10.2918 16.0926 9.0592C13.4979 10.2918 11.7041 12.9365 11.7041 16.0001C11.7041 19.0637 13.4979 21.7084 16.0926 22.941Z" fill="#141416" />
                    </svg>
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
