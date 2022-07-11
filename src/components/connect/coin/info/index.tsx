import React, { FC } from 'react';
import { NumberFormat } from 'src/components/number/format';
import { LinkExplore } from 'src/components/links/explore';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import { IconMetamask } from 'src/components/icons/Metamask';
import { IconLunaFi } from 'src/components/icons/LunaFi';
import { ConnectBuy, ConnectBuyProps } from '../../buy';
import styles from './styles.module.scss';

interface ConnectCoinInfoItem {
    key: string | number;
    name: string;
    value: number;
}

export interface ConnectCoinInfoProps {
    price: number;
    info?: ConnectCoinInfoItem[];
    buy?: ConnectBuyProps;
    explorerHref?: string;
}

export interface Props extends ConnectCoinInfoProps {
    addToMetamaskCallback?: () => void;
}

export const ConnectCoinInfo: FC<Props> = ({
    price,
    info,
    buy,
    explorerHref,
    addToMetamaskCallback,
}) => (
    <div className={styles.connect_coin_info}>
        <div className={styles.wrap}>

            <div className={styles.title}>LFI Tokens</div>

            <div className={styles.head}>
                <div className={styles.token}>
                    <IconLunaFi
                        className={styles.token__img}
                    />
                    <div className={styles.token__info}>
                        <div>
                            <div className={styles.token__name}>LFI</div>
                            <div className={styles.token__price}>
                                <NumberFormat value={price} prefix="$" />
                            </div>
                        </div>
                        <div>
                            {explorerHref && (
                                <LinkExplore
                                    href={explorerHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.token__explore}
                                >
                                    View on Explorer
                                </LinkExplore>
                            )}
                        </div>
                    </div>
                </div>
                <span>
                    {addToMetamaskCallback && (
                        <ButtonSvgCircleFill
                            tag="button"
                            hasStaticFill={false}
                            size="small"
                            colorVariant="gradient"
                            className={styles.add_to_metamask}
                            onClick={() => {
                                addToMetamaskCallback?.();
                            }}
                        >
                            <IconMetamask className={styles.add_to_metamask__icon} />
                            Add LFI
                        </ButtonSvgCircleFill>
                    )}
                </span>
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
                                    prefix="$"
                                />
                            </span>
                        </div>
                    ))}
                </div>
            )}

        </div>

        {buy && (
            <div className={styles.buy}>
                <ConnectBuy {...buy} />
            </div>
        )}
    </div>
);
