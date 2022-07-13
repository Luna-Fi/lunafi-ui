import React, {
    forwardRef,
    HTMLAttributes,
    useCallback, useEffect, useRef,
} from 'react';
import gsap from 'gsap';
import { addEventListener } from 'vevet-dom';
import { vevetApp } from 'src/utils/vevet';
import styles from './styles.module.scss';

enum HoverDirection {
    TB,
    BT,
    LR,
    RL,
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
    parentNode?: HTMLElement;
    /**
     * @default true
     */
    enableHover?: boolean;
}

export const BoxDirOverlayHover = forwardRef<
HTMLDivElement,
Props
>(({
    parentNode,
    enableHover = true,
    children,
    ...tagProps
}, ref) => {
    const domRef = useRef<HTMLDivElement>(null);

    /**
     * Get hover direction
     */
    const getHoverDirection = useCallback((
        element: HTMLElement,
        evt: MouseEvent,
    ) => {
        const {
            width, height, top, left,
        } = element.getBoundingClientRect();
        const mouseX = evt.clientX - left;
        const mouseY = evt.clientY - top;
        // calculate angle
        const x = (mouseX - width / 2) * (width > height ? (height / width) : 1);
        const y = (height / 2 - mouseY) * (height > width ? (width / height) : 1);
        const thi = Math.atan2(y, x);
        const partThi = thi + Math.PI / 4;
        const partAngle = (partThi * 180) / Math.PI;
        // return direction
        if (partAngle >= 0 && partAngle <= 90) {
            return HoverDirection.RL;
        }
        if (partAngle < 0 && partAngle >= -90) {
            return HoverDirection.BT;
        }
        if (partAngle > 90 && partAngle <= 180) {
            return HoverDirection.TB;
        }
        return HoverDirection.LR;
    }, []);

    /**
     * Animate the scene
     */
    const animate = useCallback((
        dir: HoverDirection,
        bool: boolean,
    ) => {
        const x = {
            from: 0,
            to: 0,
        };
        const y = {
            from: 0,
            to: 0,
        };
        const coords = {
            x: 0,
            y: 0,
        };

        switch (dir) {
            case HoverDirection.BT:
                if (bool) {
                    y.from = 1;
                } else {
                    y.to = 1;
                }
                break;
            case HoverDirection.TB:
                if (bool) {
                    y.from = -1;
                } else {
                    y.to = -1;
                }
                break;
            case HoverDirection.RL:
                if (bool) {
                    x.from = 1;
                } else {
                    x.to = 1;
                }
                break;
            case HoverDirection.LR:
                if (bool) {
                    x.from = -1;
                } else {
                    x.to = -1;
                }
                break;
            default:
                break;
        }

        gsap.fromTo(coords, {
            x: x.from,
            y: y.from,
        }, {
            x: x.to,
            y: y.to,
            duration: 0.5,
            onUpdate: () => {
                if (domRef.current) {
                    domRef.current.style.transform = `translate(${coords.x * 105}%, ${coords.y * 105}%)`;
                }
            },
        });
    }, []);

    /**
     * Animate the element on hover
     */
    useEffect(() => {
        const parent = parentNode || domRef.current!.parentElement;
        if (!parent || !enableHover) {
            return undefined;
        }
        const mouseenterListener = addEventListener(parent, 'mouseenter', (evt: MouseEvent) => {
            if (vevetApp.isMobile) {
                return;
            }
            const dir = getHoverDirection(parent, evt);
            animate(dir, true);
        });
        const mouseleaveListener = addEventListener(parent, 'mouseleave', (evt: MouseEvent) => {
            if (vevetApp.isMobile) {
                return;
            }
            const dir = getHoverDirection(parent, evt);
            animate(dir, false);
        });
        return () => {
            mouseenterListener.remove();
            mouseleaveListener.remove();
        };
    }, [animate, getHoverDirection, parentNode, enableHover]);

    return (
        <div
            ref={ref}
            {...tagProps}
            className={[
                styles.box_dir_overlay_hover,
                tagProps.className,
            ].join(' ')}
        >
            <div ref={domRef} className={styles.overlay} />
            {children && (
                <div className={styles.children}>{children}</div>
            )}
        </div>
    );
});
