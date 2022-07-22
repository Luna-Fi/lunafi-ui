import gsap from 'gsap';
import React, {
    cloneElement, forwardRef, HTMLAttributes, ReactNode,
    useCallback,
    useEffect, useId, useImperativeHandle, useRef, useState,
} from 'react';
import { addEventListener, childOf, IAddEventListener } from 'vevet-dom';
import {
    getTooltipNormalizedPos, getTooltipProgressStyles, TooltipPosEnum, TooltipPosStrictEnum,
} from '../general';
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
    /**
     * @default true
     */
    useMaxWidth?: boolean;
    overflowMargin?: number | 'auto';
    /**
     * @default 'click'
     */
    showEvent?: 'hover' | 'click';
    pos?: TooltipPosEnum;
}

export const TooltipContainer = forwardRef<
TooltipContainerHandle,
TooltipContainerProps
>(({
    trigger,
    forceShow,
    useMargin = true,
    useMaxWidth = true,
    overflowMargin = 'auto',
    showEvent = 'click',
    pos,
    children,
    ...tagProps
}, ref) => {
    const dynamicID = useId();
    const id = tagProps.id || dynamicID;

    // elements
    const parentRef = useRef<HTMLDivElement>(null);
    const [triggerRef, setTriggerRef] = useState<HTMLElement | null>(null);
    const [modalRef, setModalRef] = useState<HTMLDivElement | null>(null);

    // states
    const [allowRender, setAllowRender] = useState(false);
    const [isActive, setIsActive] = useState<boolean | undefined>(undefined);
    const maxWidth = useRef<number | undefined>(undefined);
    const showProgress = useRef(0);
    const curentPosition = useRef<TooltipPosStrictEnum | undefined>(undefined);
    const [positionClassName, setPositionClassName] = useState<TooltipPosStrictEnum | null>(null);

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
        if (!triggerRef) {
            return undefined;
        }
        const listeners: IAddEventListener[] = [];

        if (showEvent === 'click') {
            listeners.push(addEventListener(window, 'click', (e) => {
                if (!isActive) {
                    return;
                }
                if (childOf(e.target as any, parentRef.current!)) {
                    return;
                }
                if (!forceShow) {
                    setIsActive(false);
                }
            }));
            listeners.push(addEventListener(triggerRef, 'click', () => {
                if (!forceShow) {
                    setIsActive((val) => !val);
                }
            }));
        }

        if (showEvent === 'hover') {
            listeners.push(addEventListener(triggerRef, 'mouseenter', () => {
                if (!forceShow) {
                    setIsActive(true);
                }
            }));
            listeners.push(addEventListener(triggerRef, 'focus', () => {
                if (!forceShow) {
                    setIsActive(true);
                }
            }));
            listeners.push(addEventListener(triggerRef, 'mouseleave', () => {
                if (!forceShow) {
                    setIsActive(false);
                }
            }));
            listeners.push(addEventListener(triggerRef, 'blur', () => {
                if (!forceShow) {
                    setIsActive(false);
                }
            }));
        }

        return () => {
            listeners.forEach((listener) => listener.remove());
        };
    }, [isActive, forceShow, showEvent, triggerRef]);

    /**
     * Render the modal
     */
    const render = useCallback((
        position: TooltipPosStrictEnum,
        progress: number,
        direction: boolean,
    ) => {
        if (!modalRef || !position) {
            return;
        }

        // calculate position
        const margin = useMargin ? 10 : 0;
        const tooltipStyles = getTooltipProgressStyles({
            progress,
            position,
            parent: parentRef.current!,
            tooltip: modalRef,
            margin,
            overflowMargin,
        });
        if (direction && !!tooltipStyles.maxWidth) {
            maxWidth.current = tooltipStyles.maxWidth;
        }

        // set position
        modalRef.style.opacity = `${tooltipStyles.opacity}`;
        modalRef.style.visibility = tooltipStyles.visibility;
        modalRef.style.top = tooltipStyles.top !== null ? `${tooltipStyles.top}px` : 'auto';
        modalRef.style.right = tooltipStyles.right !== null ? `${tooltipStyles.right}px` : 'auto';
        modalRef.style.bottom = tooltipStyles.bottom !== null ? `${tooltipStyles.bottom}px` : 'auto';
        modalRef.style.left = tooltipStyles.left !== null ? `${tooltipStyles.left}px` : 'auto';
        modalRef.style.transform = `translate(${tooltipStyles.x}px, ${tooltipStyles.y}px)`;
        modalRef.style.maxWidth = useMaxWidth ? `${maxWidth.current}px` : '';
    }, [modalRef, overflowMargin, useMargin, useMaxWidth]);

    // animate modal
    useEffect(() => {
        if (typeof isActive === 'undefined' || !modalRef) {
            return undefined;
        }
        const toBeShown = isActive;
        if (toBeShown) {
            curentPosition.current = getTooltipNormalizedPos({
                position: pos,
                parent: parentRef.current!,
            });
            setPositionClassName(curentPosition.current);
        }
        const tm = gsap.to(showProgress, {
            current: toBeShown ? 1 : 0,
            duration: 0.35,
            onUpdate: () => {
                const progress = showProgress.current;
                render(curentPosition.current!, progress, toBeShown);
            },
        });
        return () => {
            tm.pause();
        };
    }, [isActive, modalRef, pos, render]);

    // copy trigger
    const triggerChild = cloneElement(trigger as any, {
        ref: setTriggerRef,
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
                        positionClassName,
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
