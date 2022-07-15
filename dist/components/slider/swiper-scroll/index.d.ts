import { FC, PropsWithChildren } from 'react';
import { SwiperProps } from 'swiper/react';
export interface Props extends SwiperProps {
    className?: string;
    /**
     * @default true
     */
    scrollbar?: boolean;
}
export declare const SliderSwiperScroll: FC<PropsWithChildren<Props>>;
