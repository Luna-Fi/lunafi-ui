import React, {
    forwardRef, HTMLAttributes, useRef,
} from 'react';
import { childOf } from 'vevet-dom';
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
    const containerRef = useRef<HTMLDivElement>(null);

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
            onClick={(e) => {
                if (!childOf(e.target as any, containerRef.current!)) {
                    handleCloseClick();
                }
            }}
            aria-hidden
        >
            <div className={styles.scroll}>
                <div
                    ref={containerRef}
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
