import React, {
    FC, useMemo, useState,
} from 'react';
import { Modal } from 'src/components/modal';
import { TooltipContent } from 'src/components/tooltip/content';
import { useOnResize } from 'src/utils/resize';
import { vevetApp } from 'src/utils/vevet';
import { ConnectUserButton } from './Button';
import styles from './index.module.scss';
import { ConnectUserInfo } from './Info';

export interface Props {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}

export const ConnectUser: FC<Props> = ({
    appearAnimation,
    appearAnimationOn,
}) => {
    const [useTooltip, setUseTooltip] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useOnResize(() => {
        setUseTooltip(vevetApp.viewport.width > 1024);
    }, []);

    const button = useMemo(() => (
        <ConnectUserButton
            appearAnimation={appearAnimation}
            appearAnimationOn={appearAnimationOn}
            onClick={() => {
                setShowModal(true);
            }}
        />
    ), [appearAnimation, appearAnimationOn]);

    if (useTooltip) {
        return (
            <TooltipContent
                className={styles.tooltip}
                useBackground={false}
                usePadding={false}
                trigger={button}
            >
                <ConnectUserInfo />
            </TooltipContent>
        );
    }

    return (
        <>
            {button}
            <Modal
                show={showModal}
                onRequestClose={() => {
                    setShowModal(false);
                }}
                className={styles.modal}
                hasPadding={false}
            >
                <ConnectUserInfo />
            </Modal>
        </>
    );
};
