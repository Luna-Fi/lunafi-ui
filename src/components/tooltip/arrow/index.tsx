import React, { forwardRef } from 'react';
import { TooltipContainer, TooltipContainerHandle, TooltipContainerProps } from '../container';
import { TooltipPosEnum } from '../general';
import styles from './index.module.scss';

export interface TooltipArrowProps extends Omit<TooltipContainerProps, 'useMargin'> { }

export const TooltipArrow = forwardRef<
TooltipContainerHandle,
TooltipArrowProps
>(({
    children,
    ...tooltipProps
}, ref) => (
    <TooltipContainer
        ref={ref}
        pos={TooltipPosEnum.XCenter}
        overflowMargin={8}
        useMargin
        {...tooltipProps}
        className={[
            tooltipProps.className,
            styles.tooltip_arrow,
        ].join(' ')}
    >
        <div className={styles.content}>
            {children}
        </div>
    </TooltipContainer>
));
