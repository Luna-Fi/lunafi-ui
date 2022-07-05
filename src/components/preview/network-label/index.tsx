import React, { forwardRef, HTMLAttributes } from 'react';
import styles from './styles.module.scss';

export interface PreviewNetworkLabelProps {
    name: string;
    img: string;
    color?: string;
}

export interface Props extends HTMLAttributes<HTMLDivElement>, PreviewNetworkLabelProps { }

export const PreviewNetworkLabel = forwardRef<
HTMLDivElement,
Props
>(({
    name,
    img,
    color,
    className,
    ...tagProps
}, ref) => (
    <div
        ref={ref}
        {...tagProps}
        className={[
            styles.preview_network_label,
            className,
        ].join(' ')}
        style={{
            ...tagProps.style,
            backgroundColor: color,
        }}
    >
        {img && <img src={img} alt={name} />}
        <span>
            {name}
        </span>
    </div>
));
