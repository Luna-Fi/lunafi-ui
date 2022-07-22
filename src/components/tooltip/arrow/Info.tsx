import React, { FC } from 'react';
import { TooltipArrow, TooltipArrowProps } from '.';
import { TooltipPosEnum } from '../general';
import styles from './Info.module.scss';

export const TooltipArrowInfo: FC<Omit<TooltipArrowProps, 'trigger' | 'pos'>> = ({
    className,
    children,
    ...props
}) => (
    <TooltipArrow
        className={[
            styles.tooltip,
            className,
        ].join(' ')}
        trigger={(
            <button
                type="button"
                className={styles.info}
                aria-label="More info"
            >
                <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                >
                    <path d="M7 0.5C3.13381 0.5 0 3.63404 0 7.5C0 11.366 3.13404 14.5 7 14.5C10.866 14.5 14 11.366 14 7.5C14 3.63404 10.866 0.5 7 0.5V0.5ZM7.67347 11.1503H6.32638L6.32653 5.93234H7.67361L7.67347 11.1503ZM6.98888 5.35041C6.52622 5.35041 6.22171 5.0234 6.22171 4.60588C6.22171 4.17727 6.53761 3.85012 7 3.85012C7.47393 3.85012 7.76717 4.17714 7.77829 4.60588C7.77829 5.02322 7.47393 5.35041 6.98888 5.35041V5.35041Z" />
                </svg>
            </button>
        )}
        pos={TooltipPosEnum.XCenter}
        showEvent="hover"
        {...props}
    >
        {children}
    </TooltipArrow>
);
