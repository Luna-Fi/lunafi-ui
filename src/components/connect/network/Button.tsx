import React, { forwardRef, HTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    iconSrc?: string;
    color?: string;
}

export const ConnectNetworkButton = forwardRef<
HTMLButtonElement,
Props
>(({
    appearAnimation,
    appearAnimationOn,
    iconSrc,
    color,
    ...tagProps
}, ref) => {
    const classNames = [
        appearAnimation ? styles.has_appear_animation : '',
        appearAnimationOn ? styles.show : '',
    ].join(' ');

    return (
        <button
            ref={ref}
            {...tagProps}
            type="button"
            className={[
                styles.connect_network_button,
                classNames,
                tagProps.className,
            ].join(' ')}
            style={{
                backgroundColor: color || '',
            }}
            aria-label="Choose Network"
        >
            <span className={styles.icon}>
                {iconSrc && <img src={iconSrc} alt="Network" aria-hidden />}
            </span>
        </button>
    );
});
