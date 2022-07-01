import React, { FC } from 'react';
import { LinkExplore } from 'src/components/links/explore';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import { ButtonCopyToClipboard } from 'src/components/button/copy-to-clipboard';
import styles from './styles.module.scss';
import { ConnectBalanceBuy, ConnectBalanceBuyProps } from '../../balance/buy';

export interface ConnectUserInfoProps {
    address: string;
    network: string;
    explorerHref?: string;
    buy?: ConnectBalanceBuyProps;
}

export interface Props extends ConnectUserInfoProps {
    disconnectCallback?: () => void;
}

export const ConnectUserInfo: FC<Props> = ({
    address,
    network,
    explorerHref,
    buy,
    disconnectCallback,
}) => {
    const shortAddress = address.length > 10 ? `${address.slice(0, 6)}..${address.slice(-4)}` : address;

    return (
        <div className={styles.connect_balance_info}>
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

            {buy && (
                <div className={styles.buy}>
                    <ConnectBalanceBuy {...buy} />
                </div>
            )}
        </div>
    );
};
