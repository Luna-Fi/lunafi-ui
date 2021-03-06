import React, {
    FC, useMemo, useState,
} from 'react';
import { Modal } from 'src/components/modal';
import { useOnResize } from 'src/utils/resize';
import { vevetApp } from 'src/utils/vevet';
import { TooltipContent } from 'src/components/tooltip/content';
import { TooltipPosEnum } from 'src/components/tooltip/general';
import { CoinLFIButton } from './Button';
import { CoinLFIInfo } from './Info';
import styles from './index.module.scss';

export interface Props {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}

export const CoinLFI: FC<Props> = ({
    appearAnimation,
    appearAnimationOn,
}) => {
    const id = 'myid';

    const [useTooltip, setUseTooltip] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useOnResize(() => {
        setUseTooltip(vevetApp.viewport.width > 1024);
    }, []);

    const button = useMemo(() => (
        <CoinLFIButton
            appearAnimation={appearAnimation}
            appearAnimationOn={appearAnimationOn}
            onClick={() => {
                setShowModal(true);
            }}
            id={`${id}-button`}
            aria-controls={`${id}-modal`}
        />
    ), [appearAnimation, appearAnimationOn]);

    if (useTooltip) {
        return (
            <TooltipContent
                className={styles.tooltip}
                trigger={button}
                id={id}
                usePadding={false}
                useBackground={false}
                pos={TooltipPosEnum.BottomLeft}
            >
                <CoinLFIInfo />
            </TooltipContent>
        );
    }

    return (
        <>
            {button}
            <Modal
                id={`${id}-modal`}
                show={showModal}
                onRequestClose={() => {
                    setShowModal(false);
                }}
                className={styles.modal}
                hasPadding={false}
            >
                <CoinLFIInfo />
            </Modal>
        </>
    );
};
