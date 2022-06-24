import React, {
    FC, PropsWithChildren, ReactNode, useEffect, useState,
} from 'react';
import { Portal } from 'react-portal';
import { NavigationModal } from 'src/components/navigation/modal';
import { vevetApp } from 'src/utils/vevet';
import { ScrollBar } from 'vevet';
import { NavigationMenu, NavigationMenuProps } from '../../navigation/menu';
import styles from './styles.module.scss';

export interface LayoutContainerProps {
    menuLinks: NavigationMenuProps['links'];
    pageTitle: string;
}

export interface Props extends LayoutContainerProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    asideChildren?: ReactNode;
}

export const LayoutContainer: FC<PropsWithChildren<Props>> = ({
    appearAnimation,
    appearAnimationOn,
    asideChildren,
    menuLinks,
    pageTitle,
    children,
}) => {
    const classNames = [
        appearAnimation ? styles.has_appear_animation : '',
        appearAnimationOn ? styles.show : '',
    ].join(' ');

    const [navigationModalShown, setNavigationModalShown] = useState(false);

    // add scrollbar
    useEffect(() => {
        if (vevetApp.isMobile) {
            return undefined;
        }
        const scrollbar = new ScrollBar({
            container: window,
        });
        return () => {
            scrollbar.destroy();
        };
    }, []);

    return (
        <div className={styles.layout_container}>

            {/* top  */}
            <div className={styles.top}>
                <a
                    href="/"
                    className={[
                        styles.top__logo,
                        classNames,
                    ].join(' ')}
                >
                    <span>
                        Home
                    </span>
                </a>
                <div
                    className={[
                        styles.top__content,
                        classNames,
                    ].join(' ')}
                >
                    <h1 className={styles.top__title}>
                        {pageTitle}
                    </h1>
                    <div className={styles.top__wallet}>
                        Wallet
                    </div>
                </div>
                <button
                    type="button"
                    className={styles.top__menu_button}
                    aria-label="Show navigation"
                    onClick={() => setNavigationModalShown(true)}
                />
            </div>

            {/* aside */}
            <div className={styles.aside}>
                <div className={styles.aside__menu}>
                    <NavigationMenu
                        isAdaptive
                        appearAnimation={appearAnimation}
                        appearAnimationOn={appearAnimationOn}
                        links={menuLinks}
                    />
                </div>
                <div
                    className={[
                        styles.aside__content,
                        classNames,
                    ].join(' ')}
                >
                    {asideChildren}
                </div>
            </div>

            {/* main */}
            <div
                className={[
                    styles.content,
                    classNames,
                ].join(' ')}
            >
                {children}
            </div>

            {/* menu */}
            <Portal>
                <NavigationModal
                    links={menuLinks}
                    show={navigationModalShown}
                    handleCloseClick={() => setNavigationModalShown(false)}
                    className={styles.navigation_modal}
                />
            </Portal>

        </div>
    );
};
