import { FC } from 'react';
export interface PreviewDiscountProps {
    href: string;
    name: string;
    items?: {
        key?: string;
        value?: string;
    }[];
}
export interface Props extends PreviewDiscountProps {
}
export declare const PreviewDiscount: FC<Props>;
