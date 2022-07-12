import React, { forwardRef, HTMLAttributes, useContext } from 'react';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import { Context } from 'src/store/context';
import styles from './Button.module.scss';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
}

export const ConnectUserButton = forwardRef<
HTMLButtonElement,
Props
>(({
    appearAnimation,
    appearAnimationOn,
    ...tagProps
}, ref) => {
    const { address } = useContext(Context).user;

    const shortAddress = address.length > 10 ? `${address.slice(0, 6)}..${address.slice(-4)}` : address;

    return (
        <ButtonSvgCircleFill
            ref={ref}
            tag="button"
            {...tagProps}
            className={[
                styles.connect_user_button,
                tagProps.className,
            ].join(' ')}
            appearAnimation={appearAnimation}
            appearAnimationOn={appearAnimationOn}
            colorVariant="primary_unactive"
        >
            <svg className={styles.icon} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.83602 14.2501C1.86987 13.9975 1.89591 13.7423 1.94019 13.4923C2.28133 11.6563 3.23967 10.2213 4.76045 9.14059C5.81255 10.138 7.05214 10.664 8.50001 10.6614C9.94273 10.6614 11.1798 10.1406 12.2422 9.13538C12.4531 9.30204 12.6745 9.4609 12.8776 9.64059C14.1589 10.7786 14.9141 12.198 15.1198 13.9037C15.1328 14.0183 15.1511 14.1355 15.1667 14.2501V14.6668H1.83325C1.83586 14.5287 1.83586 14.3881 1.83586 14.2501L1.83602 14.2501Z" fill="white" />
                <path d="M8.81539 1.33337C9.07842 1.38546 9.34664 1.41931 9.60185 1.49223C11.1644 1.92714 12.3207 3.30996 12.4821 4.92726C12.7061 7.16947 11.0602 9.13825 8.80756 9.32301C6.7789 9.49228 4.91181 8.04695 4.568 6.03917C4.19821 3.89332 5.53936 1.89342 7.66707 1.42199C7.83895 1.38293 8.01603 1.3621 8.19051 1.33345H8.81551L8.81539 1.33337Z" fill="white" />
            </svg>
            {shortAddress}
        </ButtonSvgCircleFill>
    );
});
