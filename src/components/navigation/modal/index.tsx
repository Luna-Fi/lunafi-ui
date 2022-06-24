import React, { forwardRef, HTMLAttributes } from 'react';
import { NavigationMenu, NavigationMenuProps } from '../menu';
import styles from './styles.module.scss';

export interface NavigationModalProps {
    links: NavigationMenuProps['links'];
}

export interface Props extends NavigationModalProps, HTMLAttributes<HTMLDivElement> {
    show: boolean;
    handleCloseClick: () => void;
}

export const NavigationModal = forwardRef<
HTMLDivElement,
Props
>(({
    show,
    handleCloseClick,
    links,
    children,
    ...tagProps
}, ref) => {
    const classNames = [
        show && styles.show,
    ].join(' ');

    return (
        <div
            ref={ref}
            {...tagProps}
            className={[
                styles.navigation_modal,
                classNames,
                tagProps.className,
            ].join(' ')}
        >
            <div
                className={styles.overlay}
                aria-hidden
                onClick={handleCloseClick}
            />
            <div
                className={[
                    styles.container,
                    classNames,
                ].join(' ')}
            >
                <div className={styles.wrapper}>

                    <div className={styles.links}>
                        <NavigationMenu
                            links={links}
                        />
                    </div>

                    {children && (
                        <div className={styles.children}>
                            {children}
                        </div>
                    )}

                </div>
            </div>

            <button
                type="button"
                className={styles.close}
                aria-label="Close navigation"
                onClick={handleCloseClick}
            />

        </div>
    );
});
