import React, { AnchorHTMLAttributes, forwardRef } from 'react';
import styles from './styles.module.scss';

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

export const LinkExplore = forwardRef<
HTMLAnchorElement,
Props
>(({
    href,
    children,
    className,
    ...tagProps
}, ref) => (
    <a
        ref={ref}
        {...tagProps}
        href={href}
        className={[
            styles.link_explore,
            className,
        ].join(' ')}
    >
        {children}
        <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3346 13.3332H4.0013C3.64768 13.3332 3.30854 13.1927 3.05849 12.9426C2.80844 12.6926 2.66797 12.3535 2.66797 11.9998V4.6665C2.66797 4.31288 2.80844 3.97374 3.05849 3.72369C3.30854 3.47365 3.64768 3.33317 4.0013 3.33317H6.66797V4.6665H4.0013V11.9998H11.3346V9.33317H12.668V11.9998C12.668 12.3535 12.5275 12.6926 12.2774 12.9426C12.0274 13.1927 11.6883 13.3332 11.3346 13.3332ZM7.8013 9.13784L6.8613 8.19517L11.0566 3.99984H8.66797V2.6665H13.3346V7.33317H12.0013V4.94317L7.8013 9.13784Z" fill="#00FFF4" />
        </svg>
    </a>
));
