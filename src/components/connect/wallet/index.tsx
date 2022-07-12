import React, {
    FC, useContext, useEffect, useId, useState,
} from 'react';
import { Modal } from 'src/components/modal';
import { Context } from 'src/store/context';
import styles from './styles.module.scss';
import { ConnectWalletItem } from './types';

export interface Props {
    forceShow?: boolean;
}

export const ConnectWallet: FC<Props> = ({
    forceShow,
}) => {
    const ctx = useContext(Context);
    const { wallets, onSelect } = ctx.connectWallet;
    const { shown, setShown } = ctx.system.connectWallet;
    const id = useId();

    const [acceptPolicy, setAcceptPolicy] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState<ConnectWalletItem | null>(null);

    // on select
    useEffect(() => {
        if (selectedWallet) {
            onSelect(selectedWallet);
        }
    }, [onSelect, selectedWallet]);

    return (
        <Modal
            show={!!(shown || forceShow)}
            onRequestClose={() => {
                setShown(false);
            }}
        >
            <div className={styles.header}>Connect Wallet</div>
            <div className={styles.steps}>

                <div className={styles.step}>
                    <div className={styles.step__num}>1</div>
                    <div className={styles.step__content}>
                        Accept the
                        {' '}
                        <a
                            href="https://google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Terms & Conditions
                        </a>
                        {' '}
                        and
                        {' '}
                        <a
                            href="https://google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Privacy Policy
                        </a>
                        <br />
                        <label
                            className={styles.accept_checkbox}
                            htmlFor={`${id}-accept`}
                        >
                            <input
                                type="checkbox"
                                id={`${id}-accept`}
                                checked={acceptPolicy}
                                onChange={(e) => {
                                    setAcceptPolicy(e.target.checked);
                                }}
                            />
                            <i />
                            <span>I read and accept</span>
                        </label>
                    </div>
                </div>

                <div
                    className={[
                        styles.step,
                        !acceptPolicy ? styles.disabled : '',
                    ].join(' ')}
                >
                    <div className={styles.step__num}>2</div>
                    <div className={styles.step__content}>
                        Choose Wallet

                        <div className={styles.wallets}>
                            {wallets?.map((wallet) => (
                                <label
                                    key={wallet.key}
                                    className={[
                                        styles.wallet,
                                        selectedWallet?.key === wallet.key ? styles.selected : '',
                                    ].join(' ')}
                                    htmlFor={`${id}-wallet-${wallet.key}`}
                                >
                                    <input
                                        type="radio"
                                        name={`${id}-wallet`}
                                        id={`${id}-wallet-${wallet.key}`}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedWallet(wallet);
                                            }
                                        }}
                                    />
                                    <div className={styles.wallet__img}>
                                        {wallet.img && (
                                            <img
                                                src={wallet.img}
                                                alt={wallet.name}
                                            />
                                        )}
                                    </div>
                                    <div className={styles.wallet__name}>{wallet.name}</div>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </Modal>
    );
};
