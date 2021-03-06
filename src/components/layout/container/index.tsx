import React, {
    FC, PropsWithChildren, ReactNode, useEffect, useState,
} from 'react';
import { Portal } from 'react-portal';
import { ButtonSvgOutline } from 'src/components/button/svg-outline';
import { ConnectGrid } from 'src/components/connect/grid';
import { ConnectWallet } from 'src/components/connect/wallet';
import { IconMetamask } from 'src/components/icons/Metamask';
import { LinksSocialMenu } from 'src/components/links/social-menu';
import { NavigationModal } from 'src/components/navigation/modal';
import { Provider } from 'src/store/context';
import { vevetApp } from 'src/utils/vevet';
import { ScrollBar } from 'vevet';
import { StoreProps } from '../../../store/types';
import { NavigationMenu, NavigationMenuProps } from '../../navigation/menu';
import { LayoutFooter, LayoutFooterProps } from '../footer';
import styles from './styles.module.scss';

export interface LayoutContainerProps {
    storeProps: StoreProps;
    menuLinks: NavigationMenuProps['links'];
    pageTitle: string;
    footer?: LayoutFooterProps;
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
    storeProps,
    menuLinks,
    pageTitle,
    footer,
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
        <Provider value={storeProps}>
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
                        <div className={styles.top__children}>
                            <ConnectGrid
                                appearAnimation={appearAnimation}
                                appearAnimationOn={appearAnimationOn}
                            />
                            {footer && footer.social && (
                                <LinksSocialMenu
                                    appearAnimation={appearAnimation}
                                    appearAnimationOn={appearAnimationOn}
                                    {...footer.social}
                                />
                            )}
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
                        <ButtonSvgOutline
                            tag="button"
                            className={styles.metamask_button}
                            size="small"
                            fullWidth
                            hasBg={false}
                            spacing="small"
                            onClick={() => {
                                storeProps.addToMetamaskCallback?.();
                            }}
                        >
                            <IconMetamask className={styles.metamask_button__icon} aria-hidden />
                            <span>Add LFI to Metamask</span>
                        </ButtonSvgOutline>
                    </div>
                </div>

                {/* main */}
                <div
                    className={[
                        styles.content,
                        classNames,
                    ].join(' ')}
                >
                    <div className={styles.content__wrapper}>
                        {children}
                    </div>
                    {footer && <LayoutFooter {...footer} />}
                </div>

                {/* menu */}
                <Portal>
                    <NavigationModal
                        links={menuLinks}
                        show={navigationModalShown}
                        handleCloseClick={() => setNavigationModalShown(false)}
                        className={styles.navigation_modal}
                    >
                        {asideChildren}
                        <ConnectGrid />
                    </NavigationModal>
                </Portal>

                {/* connect wallet modal */}
                <ConnectWallet />

            </div>
        </Provider>
    );
};
