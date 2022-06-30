import React, {
    FC, PropsWithChildren, useMemo, useRef, useState,
} from 'react';
import { Modal, ModalHandle } from 'src/components/modal';
import { TooltipContent } from 'src/components/tooltip/content';
import { useOnResize } from 'src/utils/resize';
import { vevetApp } from 'src/utils/vevet';
import { ConnectBalanceButton } from './button';
import styles from './styles.module.scss';

export interface Props {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    balance: number;
}

export const ConnectBalance: FC<PropsWithChildren<Props>> = ({
    appearAnimation,
    appearAnimationOn,
    balance,
    children,
}) => {
    const modalRef = useRef<ModalHandle>(null);
    const [useTooltip, setUseTooltip] = useState(false);

    useOnResize(() => {
        setUseTooltip(vevetApp.viewport.width > 1024);
    }, []);

    const button = useMemo(() => (
        <ConnectBalanceButton
            appearAnimation={appearAnimation}
            appearAnimationOn={appearAnimationOn}
            balance={balance}
            onClick={() => {
                modalRef.current?.show();
            }}
        />
    ), [appearAnimation, appearAnimationOn, balance]);

    if (useTooltip) {
        return (
            <TooltipContent
                className={styles.tooltip}
                useBackground={false}
                trigger={button}
            >
                {children}
            </TooltipContent>
        );
    }

    return (
        <>
            {button}
            <Modal
                ref={modalRef}
                className={styles.modal}
                hasPadding={false}
            >
                {children}
            </Modal>
        </>
    );
};
