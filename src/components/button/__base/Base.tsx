import React, {
    AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef,
} from 'react';
import styles from './Base.module.scss';

type Props = {
    /**
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large' | false;
    /**
     * @default false
     */
    fullWidth?: boolean;
};

export type ButtonBaseProps = ({
    tag: 'a';
    href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement> & Props)
| ({
    tag: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement> & Props);

export const ButtonBase = forwardRef<
HTMLAnchorElement | HTMLButtonElement,
ButtonBaseProps
>(({
    tag,
    size = 'medium',
    fullWidth = false,
    children,
    ...tagProps
}, ref) => {
    const classNames = [
        styles.button,

        size === 'small' ? `${styles.small} small` : '',
        size === 'medium' ? `${styles.medium} medium` : '',
        size === 'large' ? `${styles.large} large` : '',

        fullWidth ? styles.fullwidth : '',

        tagProps.className,
    ].join(' ');

    if (tag === 'a') {
        return (
            <a
                ref={ref as any}
                {...tagProps as any}
                className={classNames}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            ref={ref as any}
            type="button"
            {...tagProps as any}
            className={classNames}
        >
            {children}
        </button>
    );
});
