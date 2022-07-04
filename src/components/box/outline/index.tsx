import gsap from 'gsap';
import React, {
    forwardRef, HTMLAttributes, useCallback, useEffect, useImperativeHandle, useRef, useState,
} from 'react';
import { utils } from 'vevet';
import { useOnResize } from 'src/utils/resize';
import styles from './styles.module.scss';

export interface BoxOutlineProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    appearAnimationDuration?: number;
}

export interface Props extends HTMLAttributes<HTMLDivElement>, BoxOutlineProps { }

export const BoxOutline = forwardRef<HTMLDivElement, Props>(({
    appearAnimation,
    appearAnimationOn,
    appearAnimationDuration = 1000,
    children,
    ...tagProps
}, ref) => {
    const domRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => domRef.current!);

    // animation elements
    const [strokeRef, setStrokeRef] = useState<SVGRectElement | null>(null);
    const [bgRef, setBgRef] = useState<SVGRectElement | null>(null);
    const [wrapperRef, setWrapperRef] = useState<HTMLDivElement | null>(null);

    // rect sizes
    // states are used for html
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    /**
     * Current progress
     */
    const progressRef = useRef(0);

    /**
     * Render stroke scene
     */
    const render = useCallback(() => {
        const progress = progressRef.current;
        if (progress === undefined) {
            return;
        }

        if (strokeRef) {
            const totalLength = strokeRef.getTotalLength();
            const dashArrayStart = 0;
            const dashArrayEnd = totalLength;
            strokeRef.style.strokeDasharray = `
                ${gsap.utils.interpolate(dashArrayStart, dashArrayEnd, progress)}
                ${gsap.utils.interpolate(dashArrayEnd, dashArrayStart, progress)}
            `;
            strokeRef.style.strokeDashoffset = `${(totalLength * -0.75) * progress}`;
        }

        if (bgRef) {
            bgRef.style.opacity = `${progress}`;
        }

        if (wrapperRef) {
            wrapperRef.style.opacity = `${progress}`;
        }
    }, [bgRef, strokeRef, wrapperRef]);

    // set resize event listener
    useOnResize(() => {
        if (!appearAnimation) {
            return;
        }
        const { width: w, height: h } = domRef.current!.getBoundingClientRect();
        setWidth(w);
        setHeight(h);
        render();
    }, [render]);

    // set animation
    useEffect(() => {
        if (!appearAnimation) {
            return undefined;
        }
        if (!appearAnimationOn) {
            progressRef.current = 0;
            render();
            return undefined;
        }
        const timeline = gsap.timeline({
            duration: appearAnimationDuration / 1000,
            onUpdate: () => {
                progressRef.current = timeline.progress();
                render();
            },
        });
        return () => {
            timeline.kill();
        };
    }, [appearAnimation, appearAnimationDuration, appearAnimationOn, render]);

    return (
        <div
            ref={domRef}
            {...tagProps}
            className={[
                styles.box_outline,
                !appearAnimation && styles.is_static,
                tagProps.className,
            ].join(' ')}
        >
            {appearAnimation && (
                <svg
                    className={styles.svg}
                    width={width}
                    height={height}
                    viewBox={`0 0 ${width} ${height}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    aria-hidden
                >
                    <rect
                        className={styles.stroke}
                        ref={setStrokeRef}
                        x="0.5"
                        y="0.5"
                        width={utils.math.clamp(width - 1, [0, Infinity])}
                        height={utils.math.clamp(height - 1, [0, Infinity])}
                        rx={8}
                    />
                    <rect
                        className={styles.bg}
                        ref={setBgRef}
                        x="0.5"
                        y="0.5"
                        width={utils.math.clamp(width - 1, [0, Infinity])}
                        height={utils.math.clamp(height - 1, [0, Infinity])}
                        rx={8}
                    />
                </svg>
            )}
            <div
                ref={setWrapperRef}
                className={[
                    styles.wrapper,
                    !appearAnimation && styles.is_static,
                ].join(' ')}
            >
                {children}
            </div>
        </div>
    );
});
