import { FC, HTMLAttributes, PropsWithChildren } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
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
