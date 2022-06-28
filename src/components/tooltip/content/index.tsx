import gsap from 'gsap';
import React, {
    cloneElement, FC, HTMLAttributes, PropsWithChildren, ReactNode,
    useCallback,
    useEffect, useRef, useState,
} from 'react';
import { vevetApp } from 'src/utils/vevet';
import { addEventListener, childOf } from 'vevet-dom';
import { TooltipPos } from '../types';
import styles from './styles.module.scss';

export interface Props extends HTMLAttributes<HTMLDivElement> {
    trigger: ReactNode;
    forceShow?: boolean;
    /**
     * @default true
     */
    useBackground?: boolean;
    /**
     * @default true
     */
    useMargin?: boolean;
    pos?: TooltipPos;
}

export const TooltipContent: FC<PropsWithChildren<Props>> = ({
    trigger,
    forceShow,
    useBackground = true,
    useMargin = true,
    pos,
    children,
    ...tagProps
}) => {
    // elements
    const parentRef = useRef<HTMLDivElement>(null);
    const [modalRef, setModalRef] = useState<HTMLDivElement | null>(null);

    // states
    const [allowRender, setAllowRender] = useState(false);
    const [position, setPosition] = useState<TooltipPos | null>(null);
    const [isActive, setIsActive] = useState<boolean | undefined>(undefined);

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
                return TooltipPos.topLeft;
            }
            return TooltipPos.topRight;
        }
        if (isLeft) {
            return TooltipPos.bottomLeft;
        }
        return TooltipPos.bottomRight;
    }, [pos, modalRef]);

    // animate modal
    useEffect(() => {
        if (typeof isActive === 'undefined' || !modalRef) {
            return;
        }
        const toBeShown = isActive;
        const currentPos = getPosition();
        const ySpace = currentPos === TooltipPos.topLeft || currentPos === TooltipPos.topRight
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
                setIsActive(true);
            }
        },
    });

    return (
        <div
            ref={parentRef}
            className={[
                styles.tooltip_content,
                isActive ? 'tooltip_active' : '',
            ].join(' ')}
        >
            {triggerChild}
            {allowRender && (
                <div
                    ref={setModalRef}
                    {...tagProps}
                    className={[
                        styles.modal,
                        tagProps.className,
                        position,
                        isActive ? styles.active : '',
                        useBackground ? styles.use_background : '',
                        useMargin ? styles.use_margin : '',
                    ].join(' ')}
                >
                    {children}
                </div>
            ) }
        </div>
    );
};
