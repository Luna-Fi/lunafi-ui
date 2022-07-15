import { FC, PropsWithChildren } from 'react';
export interface Props {
    className?: string;
    /**
     * @defaul true
     */
    hasPadding?: boolean;
    /**
     * @defaul true
     */
    hasCloseButton?: boolean;
    show: boolean;
    onRequestClose: () => void;
}
export declare const Modal: FC<PropsWithChildren<Props>>;
