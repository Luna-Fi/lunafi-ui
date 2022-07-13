import React, { forwardRef, HTMLAttributes } from 'react';
import styles from './styles.module.scss';

export interface PreviewNetworkLabelProps {
    name: string;
    img: string;
    color?: string;
}

export interface Props extends HTMLAttributes<HTMLDivElement>, PreviewNetworkLabelProps {
    /**
     * @default 'medium'
     */
    size?: 'large' | 'medium' | 'small';
}

export const PreviewNetworkLabel = forwardRef<
HTMLDivElement,
Props
>(({
    name,
    img,
    color,
    size = 'medium',
    className,
    ...tagProps
}, ref) => {
    const classNames = [
        size === 'large' ? styles.large : '',
        size === 'medium' ? styles.medium : '',
        size === 'small' ? styles.small : '',
    ].join(' ');

    return (
        <div
            ref={ref}
            {...tagProps}
            className={[
                styles.preview_network_label,
                classNames,
                className,
            ].join(' ')}
            style={{
                ...tagProps.style,
                backgroundColor: color,
            }}
        >
            {img && <img src={img} alt={name} className={classNames} />}
            <span>
                {name}
            </span>
        </div>
    );
});
