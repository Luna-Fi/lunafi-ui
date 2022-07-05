import { FC } from 'react';
export interface BoxBannerProps {
    header?: string;
    description?: string;
    href?: string;
    media?: {
        img?: string;
        mp4?: string;
    };
}
export declare const BoxBanner: FC<BoxBannerProps>;
