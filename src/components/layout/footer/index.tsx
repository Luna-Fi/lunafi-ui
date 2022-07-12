import React, {
    FC, useCallback, useEffect, useRef,
} from 'react';
import { useOnResize } from 'src/utils/resize';
import { vevetApp } from 'src/utils/vevet';
import { LinksSocialIcons, LinksSocialIconsProps } from '../../links/social-icons';
import { LayoutFooterMenu, LayoutFooterMenuProps } from './Menu';
import styles from './styles.module.scss';

export interface LayoutFooterProps {
    menu?: LayoutFooterMenuProps['linkGroups'];
    social?: LinksSocialIconsProps;
}

export const LayoutFooter: FC<LayoutFooterProps> = ({
    menu,
    social,
}) => {
    const parentRef = useRef<HTMLElement>(null);

    /**
     * Resize the scene
     */
    const resize = useCallback(() => {
        if (!parentRef.current) {
            return;
        }
        document.documentElement.style.setProperty('--footer-height', `${parentRef.current.clientHeight}px`);
    }, [parentRef]);

    // set resize events
    useEffect(() => {
        const promise = vevetApp.onPageLoaded();
        promise.then(() => {
            resize();
        }).catch(() => {});
        return () => {
            promise.cancel();
        };
    }, [resize]);
    useOnResize(() => {
        resize();
    }, [resize]);

    return (
        <footer
            ref={parentRef}
            className={styles.layout_footer}
            id="footer"
        >

            <div className={styles.info}>
                <svg
                    className={styles.info__logo}
                    width="94"
                    height="24"
                    viewBox="0 0 94 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5755 19.4799C14.1407 18.1954 15.9142 15.4397 15.9142 12.2474C15.9142 9.055 14.1406 6.2992 11.5754 5.01479C9.01012 6.2992 7.23657 9.055 7.23657 12.2474C7.23657 15.4397 9.01 18.1954 11.5751 19.4798C10.5889 19.9736 9.48563 20.2499 8.32112 20.2499C4.12765 20.2499 0.728149 16.6669 0.728149 12.2471C0.728149 7.82733 4.12765 4.24438 8.32112 4.24438C9.48581 4.24438 10.5892 4.52074 11.5755 5.01464C12.5619 4.52083 13.6652 4.24452 14.8297 4.24452C19.0232 4.24452 22.4227 7.82747 22.4227 12.2473C22.4227 16.667 19.0232 20.25 14.8297 20.25C13.6652 20.25 12.5619 19.9737 11.5755 19.4799Z" fill="#00FFFF" />
                    <path d="M33.0642 19.6307H42.4956V17.3194H35.5225V4.37131H33.0642V19.6307Z" fill="white" />
                    <path d="M53.348 8.59622H50.9842V15.8531C50.7242 16.9466 49.826 17.6177 48.8096 17.6177C47.4622 17.6177 46.8477 16.723 46.8477 15.356V8.59622H44.4839V15.7786C44.4839 18.2141 45.784 19.8792 48.1713 19.8792C49.4005 19.8792 50.4169 19.2827 50.9842 18.5869V19.6307H53.348V8.59622Z" fill="white" />
                    <path d="M56.283 19.6307H58.6467V12.3738C58.9067 11.2803 59.8285 10.6092 60.845 10.6092C62.1926 10.6092 62.8305 11.5039 62.8305 12.8708V19.6307H65.1945V12.4483C65.1945 10.0128 63.8705 8.34769 61.4829 8.34769C60.2542 8.34769 59.214 8.94415 58.6467 9.64001V8.59621H56.283V19.6307Z" fill="white" />
                    <path d="M76.07 19.6307V12.3986C76.07 9.88853 74.5102 8.34769 71.8627 8.34769C69.7115 8.34769 68.0571 9.76427 67.7496 11.6531H70.019C70.2789 10.8826 70.8697 10.4601 71.8157 10.4601C73.1627 10.4601 73.8247 11.33 73.8247 12.4483V13.343C73.399 13.02 72.3354 12.672 71.3901 12.672C69.0736 12.672 67.3004 14.1383 67.3004 16.2259C67.3004 18.4875 69.0736 19.8295 71.2243 19.8295C72.4066 19.8295 73.4701 19.3822 73.8247 19.0094V19.6307H76.07ZM73.8247 16.6981C73.5648 17.3939 72.6194 17.8165 71.6734 17.8165C70.6099 17.8165 69.4993 17.3443 69.4993 16.2259C69.4993 15.1324 70.6099 14.6602 71.6734 14.6602C72.6194 14.6602 73.5648 15.0827 73.8247 15.7786V16.6981Z" fill="white" />
                    <path d="M81.459 19.6307V13.4424H87.8174V11.1809H81.459V6.65773H88.266V4.37131H79.0002V19.6307H81.459Z" fill="white" />
                    <path d="M92.9259 8.59622H90.5618V19.6307H92.9259V8.59622ZM93.2093 5.266C93.2093 4.42101 92.5237 3.75 91.7436 3.75C90.964 3.75 90.2784 4.42101 90.2784 5.266C90.2784 6.11098 90.964 6.782 91.7436 6.782C92.5237 6.782 93.2093 6.11098 93.2093 5.266Z" fill="white" />
                </svg>
                <div className={styles.info__desc}>
                    Our community is building a comprehensive decentralized betting
                    platform for the future of finance.
                    Join us!
                </div>
                <LinksSocialIcons
                    {...social}
                />
            </div>

            {menu && (
                <LayoutFooterMenu
                    linkGroups={menu}
                />
            )}

        </footer>
    );
};
