import React, { FC, useContext } from 'react';
import { LinkExplore } from 'src/components/links/explore';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import { ButtonCopyToClipboard } from 'src/components/button/copy-to-clipboard';
import { Context } from 'src/store/context';
import { CoinBuy } from 'src/components/coin/buy';
import styles from './Info.module.scss';

export const ConnectUserInfo: FC = () => {
    const {
        address, network, disconnectCallback, explorerHref,
    } = useContext(Context).user;

    const shortAddress = address.length > 10 ? `${address.slice(0, 6)}..${address.slice(-4)}` : address;

    return (
        <div className={styles.connect_user_info}>
            <div className={styles.wrap}>

                <div className={styles.title}>Account</div>

                <div className={styles.user}>
                    <div className={styles.user__row}>
                        <div className={styles.user__img} />
                        <div className={styles.user__info}>
                            <div className={styles.user__address}>{shortAddress}</div>
                            <div className={styles.user__network}>{network}</div>
                        </div>
                    </div>
                    {disconnectCallback && (
                        <ButtonSvgCircleFill
                            className={styles.user__disconnect}
                            tag="button"
                            hasStaticFill={false}
                            colorVariant="gradient"
                            size="small"
                            onClick={() => disconnectCallback()}
                        >
                            Disconnect
                        </ButtonSvgCircleFill>
                    )}
                </div>

                <div className={styles.links}>
                    {explorerHref && (
                        <LinkExplore
                            href={explorerHref}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on Explorer
                        </LinkExplore>
                    )}
                    <ButtonCopyToClipboard text={address}>Copy Address</ButtonCopyToClipboard>
                </div>

            </div>

            <div className={styles.buy}>
                <CoinBuy />
            </div>
        </div>
    );
};
