import React, {
    FC, PropsWithChildren, useMemo, useRef, useState,
} from 'react';
import { Modal, ModalHandle } from 'src/components/modal';
import { TooltipContent } from 'src/components/tooltip/content';
import { useOnResize } from 'src/utils/resize';
import { vevetApp } from 'src/utils/vevet';
import { ConnectCoinButton } from './button';
import styles from './styles.module.scss';

export interface Props {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    price: number;
}

export const ConnectCoin: FC<PropsWithChildren<Props>> = ({
    appearAnimation,
    appearAnimationOn,
    price,
    children,
}) => {
    const modalRef = useRef<ModalHandle>(null);
    const [useTooltip, setUseTooltip] = useState(false);

    useOnResize(() => {
        setUseTooltip(vevetApp.viewport.width > 1024);
    }, []);

    const button = useMemo(() => (
        <ConnectCoinButton
            appearAnimation={appearAnimation}
            appearAnimationOn={appearAnimationOn}
            price={price}
            onClick={() => {
                modalRef.current?.show();
            }}
        />
    ), [appearAnimation, appearAnimationOn, price]);

    if (!children) {
        return button;
    }

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
