/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import gsap from 'gsap';
import React, {
    forwardRef, PropsWithChildren, useEffect, useImperativeHandle, useRef, useState,
} from 'react';
import { Portal } from 'react-portal';
import { addEventListener, childOf } from 'vevet-dom';
import styles from './styles.module.scss';

export interface ModalHandle {
    show: () => void;
    hide: () => void;
}

export interface Props {
    className?: string;
    /**
     * @defaul true
     */
    hasPadding?: boolean;
    /**
     * @defaul true
     */
    hasCloseButton?: boolean;
}

export const Modal = forwardRef<
ModalHandle,
PropsWithChildren<Props>
>(({
    hasPadding = true,
    hasCloseButton = true,
    className,
    children,
}, ref) => {
    // elements
    const parentRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // states
    const [isActive, setIsActive] = useState<undefined | boolean>(undefined);
    const [allowRender, setAllowRender] = useState(false);

    useImperativeHandle(ref, () => ({
        show: () => {
            setIsActive(true);
        },
        hide: () => {
            setIsActive(false);
        },
    }));

    // class names
    const classNames = [
        hasPadding ? styles.has_padding : '',
    ].join(' ');

    // hide events
    useEffect(() => {
        const escapeListener = addEventListener(window, 'keydown', (evt) => {
            let bool: boolean | undefined = false;
            setIsActive((val) => {
                bool = val;
                return val;
            });
            if (evt.keyCode === 27 && bool) {
                setIsActive(false);
            }
        });
        return () => {
            escapeListener.remove();
        };
    }, []);

    // animate the popup
    const animationProgress = useRef(isActive ? 1 : 0);
    useEffect(() => {
        if (typeof isActive === 'undefined') {
            return;
        }
        const toShow = isActive;
        setAllowRender(true);

        gsap.to(animationProgress, {
            current: toShow ? 1 : 0,
            duration: 0.35,
            onUpdate: () => {
                const progress = animationProgress.current;
                const parent = parentRef.current;
                const content = contentRef.current;
                if (parent) {
                    parent.style.opacity = `${progress}`;
                    parent.style.visibility = progress > 0 ? 'visible' : 'hidden';
                }
                if (content) {
                    content.style.transform = `scale(${0.1 * progress + 0.9})`;
                }
                if (progress === 0 && !toShow) {
                    setAllowRender(false);
                }
            },
        });
    }, [isActive]);

    return (
        allowRender ? (
            <Portal>
                <div
                    ref={parentRef}
                    className={[
                        styles.modal,
                        className,
                    ].join(' ')}
                    onClick={(e) => {
                        if (!childOf(e.target as any, contentRef.current!)) {
                            setIsActive(false);
                        }
                    }}
                >
                    <div
                        className={[
                            styles.container,
                            'modal-container',
                        ].join(' ')}
                    >
                        <div
                            className={[
                                styles.scroll,
                                'modal-scroll',
                            ].join(' ')}
                        >
                            <div
                                ref={contentRef}
                                className={[
                                    styles.content,
                                    classNames,
                                    'modal-content',
                                ].join(' ')}
                            >
                                {hasCloseButton && (
                                    <button
                                        type="button"
                                        className={[
                                            styles.close,
                                            classNames,
                                            'modal-close',
                                        ].join(' ')}
                                        onClick={() => {
                                            setIsActive(false);
                                        }}
                                        aria-label="Close"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.865615 0.881611C1.09979 0.647272 1.41735 0.515627 1.74848 0.515627C2.0796 0.515627 2.39716 0.647272 2.63134 0.881611L7.99219 6.24786L13.353 0.881611C13.4682 0.762223 13.606 0.666995 13.7584 0.601484C13.9107 0.535972 14.0746 0.501489 14.2404 0.500047C14.4062 0.498605 14.5706 0.530232 14.7241 0.593083C14.8776 0.655934 15.017 0.74875 15.1343 0.866116C15.2515 0.983482 15.3442 1.12305 15.407 1.27667C15.4698 1.43029 15.5014 1.59489 15.5 1.76086C15.4985 1.92684 15.4641 2.09086 15.3986 2.24337C15.3332 2.39587 15.238 2.5338 15.1188 2.64911L9.75792 8.01536L15.1188 13.3816C15.3462 13.6174 15.4721 13.9331 15.4693 14.2609C15.4664 14.5886 15.3351 14.9021 15.1036 15.1339C14.872 15.3656 14.5588 15.4971 14.2314 15.5C13.904 15.5028 13.5886 15.3768 13.353 15.1491L7.99219 9.78286L2.63134 15.1491C2.39582 15.3768 2.08039 15.5028 1.75297 15.5C1.42555 15.4971 1.11235 15.3656 0.880827 15.1339C0.649299 14.9021 0.51797 14.5886 0.515125 14.2609C0.51228 13.9331 0.638147 13.6174 0.865615 13.3816L6.22647 8.01536L0.865615 2.64911C0.631512 2.4147 0.5 2.09682 0.5 1.76536C0.5 1.43391 0.631512 1.11602 0.865615 0.881611V0.881611Z" fill="#E2E2E2" />
                                        </svg>
                                    </button>
                                )}
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </Portal>
        ) : null
    );
});
