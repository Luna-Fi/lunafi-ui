import React, {
    FC, useEffect, useId, useRef, useState,
} from 'react';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import { Modal, ModalHandle } from 'src/components/modal';
import styles from './styles.module.scss';

interface WalletItem {
    key?: string | number;
    name: string;
    img: string;
}

export interface ConnectSubmitProps {
    wallets: WalletItem[];
    onSelect?: (wallet: WalletItem) => void;
}

export const ConnectSubmit: FC<ConnectSubmitProps> = ({
    wallets,
    onSelect,
}) => {
    const modalRef = useRef<ModalHandle>(null);
    const id = useId();
    const [acceptPolicy, setAcceptPolicy] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState<WalletItem | null>(null);

    useEffect(() => {
        if (selectedWallet) {
            onSelect?.(selectedWallet);
        }
    }, [onSelect, selectedWallet]);

    return (
        <>
            <ButtonSvgCircleFill
                tag="button"
                onClick={() => {
                    modalRef.current?.show();
                }}
            >
                Connect
            </ButtonSvgCircleFill>
            <Modal ref={modalRef}>
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
        </>
    );
};
