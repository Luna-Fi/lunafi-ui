import React, {
    FC, PropsWithChildren, useMemo, useRef, useState,
} from 'react';
import { Modal, ModalHandle } from 'src/components/modal';
import { TooltipContent } from 'src/components/tooltip/content';
import { useOnResize } from 'src/utils/resize';
import { vevetApp } from 'src/utils/vevet';
import { ConnectUserButton } from './button';
import styles from './styles.module.scss';

export interface ConnectUserProps {
    address: string;
}

export interface Props extends ConnectUserProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}

export const ConnectUser: FC<PropsWithChildren<Props>> = ({
    appearAnimation,
    appearAnimationOn,
    address,
    children,
}) => {
    const modalRef = useRef<ModalHandle>(null);
    const [useTooltip, setUseTooltip] = useState(false);

    useOnResize(() => {
        setUseTooltip(vevetApp.viewport.width > 1024);
    }, []);

    const button = useMemo(() => (
        <ConnectUserButton
            appearAnimation={appearAnimation}
            appearAnimationOn={appearAnimationOn}
            address={address}
            onClick={() => {
                modalRef.current?.show();
            }}
        />
    ), [appearAnimation, appearAnimationOn, address]);

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
