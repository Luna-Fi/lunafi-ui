import React, {
    Children,
    FC, PropsWithChildren, useEffect, useState,
} from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import SwiperClass, { Scrollbar, Navigation } from 'swiper';
import { vevetApp } from 'src/utils/vevet';
import styles from './styles.module.scss';

export interface Props extends SwiperProps {
    className?: string;
    /**
     * @default true
     */
    scrollbar?: boolean;
}

export const SliderSwiperScroll: FC<PropsWithChildren<Props>> = ({
    children,
    className,
    scrollbar = true,
    ...swiperProps
}) => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        if (vevetApp.isMobile) {
            setShowNav(true);
        }
    }, []);

    const slides = Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return (
                <SwiperSlide
                    className={styles.slide}
                >
                    {child}
                </SwiperSlide>
            );
        }
        return null;
    });

    return (
        <div
            className={[
                styles.slider_swiper_scroll,
                swiper ? styles.ready : '',
                showNav ? styles.show_nav : '',
            ].join(' ')}
            onMouseEnter={() => !vevetApp.isMobile && setShowNav(true)}
            onMouseLeave={() => !vevetApp.isMobile && setShowNav(false)}
        >
            <Swiper
                modules={[Scrollbar, Navigation]}
                {...swiperProps}
                onSwiper={(val) => {
                    setSwiper(val);
                }}
                className={[
                    styles.swiper,
                    className,
                ].join(' ')}
                slidesPerView="auto"
                spaceBetween={18}
                speed={400}
                scrollbar={scrollbar ? {
                    draggable: true,
                    dragSize: 20,
                } : undefined}
                navigation={{
                    nextEl: `.${styles.nav_button_next}`,
                    prevEl: `.${styles.nav_button_prev}`,
                }}
            >
                {slides}
            </Swiper>

            <button
                className={`${styles.nav_button} ${styles.nav_button_prev}`}
                type="button"
                aria-label="Previous slide"
            />
            <button
                className={`${styles.nav_button} ${styles.nav_button_next}`}
                type="button"
                aria-label="Next slide"
            />
        </div>
    );
};
