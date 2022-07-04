import { FC } from 'react';
export interface BoxBannerProps {
    header?: string;
    description?: string;
    href?: string;
    media?: {
        img?: string;
    };
}
export declare const BoxBanner: FC<BoxBannerProps>;
