import gsap from 'gsap';
import React, {
    cloneElement, forwardRef, HTMLAttributes, ReactNode,
    useCallback,
    useEffect, useId, useImperativeHandle, useRef, useState,
} from 'react';
import { vevetApp } from 'src/utils/vevet';
import { addEventListener, childOf } from 'vevet-dom';
import { TooltipPos } from '../types';
import styles from './styles.module.scss';

export interface TooltipContainerHandle {
    close: () => void;
}

export interface TooltipContainerProps extends HTMLAttributes<HTMLDivElement> {
    trigger: ReactNode;
    forceShow?: boolean;
    /**
     * @default true
     */
    useMargin?: boolean;
    pos?: TooltipPos;
}

export const TooltipContainer = forwardRef<
TooltipContainerHandle,
TooltipContainerProps
>(({
    trigger,
    forceShow,
    useMargin = true,
    pos,
    children,
    ...tagProps
}, ref) => {
    const dynamicID = useId();
    const id = tagProps.id || dynamicID;

    // elements
    const parentRef = useRef<HTMLDivElement>(null);
    const [modalRef, setModalRef] = useState<HTMLDivElement | null>(null);

    // states
    const [allowRender, setAllowRender] = useState(false);
    const [position, setPosition] = useState<TooltipPos | null>(null);
    const [isActive, setIsActive] = useState<boolean | undefined>(undefined);

    // pass ref
    useImperativeHandle(ref, () => ({
        close() {
            setIsActive(false);
        },
    }));

    // render on first show
    useEffect(() => {
        if (isActive) {
            setAllowRender(true);
        }
    }, [isActive]);

    // force show
    useEffect(() => {
        setIsActive(forceShow);
    }, [forceShow]);

    // set outslide click
    useEffect(() => {
        if (!isActive) {
            return undefined;
        }
        const outsiteClick = addEventListener(window, 'click', (e) => {
            if (childOf(e.target as any, parentRef.current!)) {
                return;
            }
            if (!forceShow) {
                setIsActive(false);
            }
        });
        return () => {
            outsiteClick.remove();
        };
    }, [isActive, forceShow]);

    /**
     * Get modal position
     */
    const getPosition = useCallback(() => {
        if (pos) {
            return pos;
        }
        if (!parentRef.current || !modalRef) {
            return null;
        }

        // get modal bounding
        modalRef.style.left = '0';
        modalRef.style.right = 'auto';
        const modalBounding = modalRef.getBoundingClientRect();
        modalRef.style.left = '';
        modalRef.style.right = '';

        // get parent bounding
        const parentBounding = parentRef.current.getBoundingClientRect();
        const parentCenterY = parentBounding.top + parentBounding.height / 2;

        // get position
        const isLeft = modalBounding.left < vevetApp.viewport.width - modalBounding.width;
        const isTop = parentCenterY < vevetApp.viewport.height / 2;

        if (isTop) {
            if (isLeft) {
                return TooltipPos.TopLeft;
            }
            return TooltipPos.TopRight;
        }
        if (isLeft) {
            return TooltipPos.BottomLeft;
        }
        return TooltipPos.BottomRight;
    }, [pos, modalRef]);

    // animate modal
    useEffect(() => {
        if (typeof isActive === 'undefined' || !modalRef) {
            return;
        }
        const toBeShown = isActive;
        const currentPos = getPosition();
        const ySpace = currentPos === TooltipPos.TopLeft || currentPos === TooltipPos.TopRight
            ? 40 : -40;
        gsap.to(modalRef, {
            duration: 0.35,
            opacity: toBeShown ? 1 : 0,
            y: toBeShown ? 0 : ySpace,
            onStart: () => {
                modalRef.style.visibility = 'visible';
            },
            onComplete: () => {
                modalRef.style.visibility = toBeShown ? 'visible' : 'hidden';
            },
        });
        if (isActive) {
            setPosition(currentPos);
        }
    }, [isActive, getPosition, modalRef]);

    // copy trigger
    const triggerChild = cloneElement(trigger as any, {
        onClick: () => {
            if (!forceShow) {
                setIsActive((val) => !val);
            }
        },
        id: `${id}-trigger`,
        'aria-controls': `${id}-content`,
    });

    return (
        <div
            ref={parentRef}
            className={[
                styles.tooltip_container,
                isActive ? 'tooltip_active' : '',
            ].join(' ')}
        >
            {triggerChild}
            {allowRender && (
                <div
                    ref={setModalRef}
                    {...tagProps}
                    id={`${id}-content`}
                    className={[
                        styles.modal,
                        tagProps.className,
                        position,
                        isActive ? styles.active : '',
                        useMargin ? styles.use_margin : '',
                    ].join(' ')}
                    role="dialog"
                    aria-hidden={!isActive}
                    aria-labelledby={`${id}-trigger`}
                >
                    {children}
                </div>
            ) }
        </div>
    );
});
