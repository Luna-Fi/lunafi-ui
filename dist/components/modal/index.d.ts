import React from 'react';
export interface ModalHandle {
    show: () => void;
    hide: () => void;
}
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
}
export declare const Modal: React.ForwardRefExoticComponent<Props & {
    children?: React.ReactNode;
} & React.RefAttributes<ModalHandle>>;
