import React, { HTMLAttributes } from 'react';
export interface PreviewNetworkLabelProps {
    name: string;
    img: string;
    color?: string;
}
export interface Props extends HTMLAttributes<HTMLDivElement>, PreviewNetworkLabelProps {
}
export declare const PreviewNetworkLabel: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
