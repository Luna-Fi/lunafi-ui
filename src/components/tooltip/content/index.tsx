import React, { forwardRef } from 'react';
import { TooltipContainer, TooltipContainerHandle, TooltipContainerProps } from '../container';
import styles from './styles.module.scss';

export interface TooltipContentProps extends TooltipContainerProps {
    /**
     * @default true
     */
    usePadding?: boolean;
    /**
     * @default true
     */
    useBackground?: boolean;
}

export const TooltipContent = forwardRef<
TooltipContainerHandle,
TooltipContentProps
>(({
    usePadding = true,
    useBackground = true,
    ...tooltipProps
}, ref) => (
    <TooltipContainer
        ref={ref}
        {...tooltipProps}
        className={[
            tooltipProps.className,
            styles.tooltip_content,
            usePadding ? styles.use_padding : '',
            useBackground ? styles.use_background : '',
        ].join(' ')}
    />
));
