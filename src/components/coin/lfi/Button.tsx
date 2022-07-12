import React, { forwardRef, HTMLAttributes, useContext } from 'react';
import { ButtonSvgOutline } from 'src/components/button/svg-outline';
import { IconLunaFi } from 'src/components/icons/LunaFi';
import { NumberCounter } from 'src/components/number/counter';
import { NumberFormat } from 'src/components/number/format';
import { Context } from 'src/store/context';
import styles from './Button.module.scss';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}

export const CoinLFIButton = forwardRef<
HTMLButtonElement,
Props
>(({
    appearAnimation,
    appearAnimationOn,
    ...tagProps
}, ref) => {
    const { price } = useContext(Context).lfi;
    const priceValue = Math.round(price * 1000) / 1000;

    const classNames = [
        appearAnimation ? styles.has_appear_animation : '',
        appearAnimationOn ? styles.show : '',
    ].join(' ');

    return (
        <ButtonSvgOutline
            ref={ref}
            tag="button"
            {...tagProps}
            className={[
                styles.coin_lfi_button,
                tagProps.className,
            ].join(' ')}
            appearAnimation={appearAnimation}
            appearAnimationOn={appearAnimationOn}
            spacing="small"
        >
            <span className={styles.wrap}>
                <span className={styles.icon}>
                    <span className={classNames}>
                        <IconLunaFi />
                    </span>
                </span>
                {appearAnimation ? (
                    <NumberCounter
                        animation={appearAnimationOn}
                        value={priceValue}
                        prefix="$"
                    />
                ) : (
                    <NumberFormat
                        value={priceValue}
                        prefix="$"
                    />
                )}
                <svg className={styles.arrow} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.92999 7.29296C6.11752 7.10549 6.37183 7.00017 6.63699 7.00017C6.90216 7.00017 7.15647 7.10549 7.34399 7.29296L10.637 10.586L13.93 7.29296C14.0222 7.19745 14.1326 7.12127 14.2546 7.06886C14.3766 7.01645 14.5078 6.98886 14.6406 6.98771C14.7734 6.98655 14.9051 7.01186 15.0279 7.06214C15.1508 7.11242 15.2625 7.18667 15.3564 7.28056C15.4503 7.37446 15.5245 7.48611 15.5748 7.60901C15.6251 7.7319 15.6504 7.86358 15.6492 7.99636C15.6481 8.12914 15.6205 8.26036 15.5681 8.38236C15.5157 8.50437 15.4395 8.61471 15.344 8.70696L11.344 12.707C11.1565 12.8944 10.9022 12.9997 10.637 12.9997C10.3718 12.9997 10.1175 12.8944 9.92999 12.707L5.92999 8.70696C5.74252 8.51943 5.63721 8.26512 5.63721 7.99996C5.63721 7.73479 5.74252 7.48049 5.92999 7.29296Z" fill="#ADB5BD" />
                </svg>
            </span>
        </ButtonSvgOutline>
    );
});
