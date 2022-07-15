import React, { FC, useContext } from 'react';
import { NumberFormat } from 'src/components/number/format';
import { LinkExplore } from 'src/components/links/explore';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import { IconMetamask } from 'src/components/icons/Metamask';
import { IconLunaFi } from 'src/components/icons/LunaFi';
import { Context } from 'src/store/context';
import styles from './Info.module.scss';
import { CoinBuy } from '../buy';

export const CoinLFIInfo: FC = () => {
    const {
        price, explorerHref, info,
    } = useContext(Context).lfi;
    const { addToMetamaskCallback } = useContext(Context);
    const priceValue = Math.round(price * 100000) / 100000;

    return (
        <div className={styles.coin_lfi_info}>
            <div className={styles.wrap}>

                <div className={styles.title}>LFI Tokens</div>

                <div className={styles.head}>
                    <div className={styles.token}>
                        <IconLunaFi
                            className={styles.token__img}
                            aria-hidden
                        />
                        <div className={styles.token__info}>
                            <div>
                                <div className={styles.token__name} aria-hidden>LFI</div>
                                <div className={styles.token__price} aria-label="Price">
                                    <NumberFormat value={priceValue} prefix="$" />
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
                                <IconMetamask
                                    className={styles.add_to_metamask__icon}
                                    aria-hidden
                                />
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
                                aria-label={item.name}
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

            <div className={styles.buy}>
                <CoinBuy />
            </div>
        </div>
    );
};
