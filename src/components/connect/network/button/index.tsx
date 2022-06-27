import React, { forwardRef, HTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    iconSrc?: string;
}

export const ConnectNetworkButton = forwardRef<
HTMLButtonElement,
Props
>(({
    appearAnimation,
    appearAnimationOn,
    iconSrc,
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
        >
            <span className={styles.icon}>
                {iconSrc && <img src={iconSrc} alt="Network" />}
            </span>
        </button>
    );
});