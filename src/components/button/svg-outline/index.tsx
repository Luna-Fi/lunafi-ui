import React, {
    forwardRef,
    useCallback, useEffect, useId, useImperativeHandle, useRef, useState,
} from 'react';
import gsap from 'gsap';
import { vevetApp } from 'src/utils/vevet';
import { useOnResize } from 'src/utils/resize';
import { utils } from 'vevet';
import styles from './styles.module.scss';
import { ButtonBase, ButtonBaseProps } from '../__base/Base';

export type ButtonSvgOutlineProps = {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    /**
     * @default 'medium'
     */
    spacing?: 'small' | 'medium' | 'large';
    /**
     * @default true
     */
    hasBg?: boolean;
};

export type Props = ButtonSvgOutlineProps & ButtonBaseProps;

export const ButtonSvgOutline = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>((
    {
        appearAnimation,
        appearAnimationOn,
        spacing = 'medium',
        hasBg = true,
        children,
        ...tagProps
    },
    ref,
) => {
    const domRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    useImperativeHandle(ref, () => domRef.current!);
    const id = useId();

    // classes
    const classNames = [
        appearAnimation ? styles.has_appear_animation : '',
        appearAnimationOn ? styles.show : '',
        spacing === 'small' ? styles.spacing_small : '',
        spacing === 'medium' ? styles.spacing_medium : '',
        spacing === 'large' ? styles.spacing_large : '',
    ].join(' ');

    // elements
    const [svgElement, setSvgElement] = useState<SVGSVGElement | null>(null);
    const staticOutlineRef = useRef<SVGRectElement>(null);
    const hoverOutlineRef = useRef<SVGRectElement>(null);
    const bgPlaneRef = useRef<SVGRectElement>(null);

    // current progress
    const showProgressRef = useRef(0);
    const hoverProgressRef = useRef(0);

    // rect sizes
    // states are used for html
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    // and refs are used in callbacks for better performance
    // to avoid multiple re-renders
    const widthRef = useRef(100);
    const heightRef = useRef(100);

    /**
     * Render the scene
     */
    const render = useCallback(() => {
        const showProgress = showProgressRef.current;
        const hoverProgress = hoverProgressRef.current;

        // elements
        const staticOutline = staticOutlineRef.current;
        const hoverOutline = hoverOutlineRef.current;
        const bgPlane = bgPlaneRef.current;

        let totalLength = 0;
        try {
            totalLength = staticOutline?.getTotalLength() || 0;
        } catch (e) {
            totalLength = 0;
        }
        const dashArrayStart = 0;
        const dashArrayEnd = totalLength;

        // render static stroke
        if (staticOutline) {
            const showOffset = (heightRef.current * 2 + widthRef.current)
                - totalLength * showProgress;
            staticOutline.style.strokeDasharray = `
                ${gsap.utils.interpolate(dashArrayStart, dashArrayEnd, showProgress)}
                ${gsap.utils.interpolate(dashArrayEnd, dashArrayStart, showProgress)}
            `;
            staticOutline.style.strokeDashoffset = `${showOffset}`;
        }

        // render background
        if (bgPlane) {
            const bgProgress = utils.math.clampScope(showProgress, [0.25, 0.75]);
            bgPlane.style.transform = `translate3d(0, ${(1 - bgProgress) * 100}%, 0)`;
        }

        // render hover stroke
        if (hoverOutline) {
            const hoverOffset = (heightRef.current * 2 + widthRef.current)
                - totalLength * hoverProgress;
            hoverOutline.style.strokeDasharray = `
                ${gsap.utils.interpolate(dashArrayStart, dashArrayEnd, hoverProgress)}
                ${gsap.utils.interpolate(dashArrayEnd, dashArrayStart, hoverProgress)}
            `;
            hoverOutline.style.strokeDashoffset = `${hoverOffset}`;
            hoverOutline.style.opacity = hoverProgress > 0 ? '1' : '0';
        }
    }, []);

    /**
     * Resize the scene
     */
    const resize = useCallback(() => {
        if (!svgElement) {
            return;
        }
        const clientRect = svgElement.getBoundingClientRect();
        const w = utils.math.clamp(clientRect.width, [4, Infinity]);
        const h = utils.math.clamp(clientRect.height, [4, Infinity]);
        widthRef.current = w;
        heightRef.current = h;
        setWidth(w);
        setHeight(h);
        render();
    }, [svgElement, render]);

    // set resize event listener
    useOnResize(() => {
        resize();
    });

    // set up show animation
    useEffect(() => {
        if (!appearAnimation) {
            showProgressRef.current = 1;
            render();
            return undefined;
        }
        if (!appearAnimationOn) {
            showProgressRef.current = 0;
            render();
            return undefined;
        }
        const timeline = gsap.timeline({
            duration: 1,
            onUpdate: () => {
                showProgressRef.current = timeline.progress();
                render();
            },
        });
        return () => {
            timeline.kill();
        };
    }, [appearAnimation, appearAnimationOn, render]);

    return (
        <ButtonBase
            ref={domRef}
            {...tagProps}
            className={[
                styles.button_svg_outline,
                classNames,
                tagProps.className,
            ].join(' ')}
            onMouseEnter={(evt: React.MouseEvent<any, MouseEvent>) => {
                if (tagProps.onMouseEnter) {
                    tagProps.onMouseEnter(evt);
                }
                if (!vevetApp.isMobile) {
                    gsap.to(hoverProgressRef, {
                        current: 1,
                        duration: 0.75,
                        onUpdate: () => {
                            render();
                        },
                    });
                }
            }}
            onMouseLeave={(evt: React.MouseEvent<any, MouseEvent>) => {
                if (tagProps.onMouseLeave) {
                    tagProps.onMouseLeave(evt);
                }
                if (!vevetApp.isMobile) {
                    gsap.to(hoverProgressRef, {
                        current: 0,
                        duration: 0.75,
                        onUpdate: () => {
                            render();
                        },
                    });
                }
            }}
        >

            <svg
                ref={setSvgElement}
                className={styles.svg}
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden
            >

                {/* static outline */}
                <rect
                    ref={staticOutlineRef}
                    className={[
                        styles.static_outline,
                        classNames,
                    ].join(' ')}
                    x="2"
                    y="2"
                    width={width - 4}
                    height={height - 4}
                    rx={7}
                    strokeWidth={2}
                />

                {/* background */}
                {hasBg && (
                    <g mask={`url(#${id}-bg-mask)`}>
                        <rect
                            ref={bgPlaneRef}
                            className={[
                                styles.bg_plane,
                                classNames,
                            ].join(' ')}
                            x="2"
                            y="2"
                            width={width - 4}
                            height={height - 4}
                            rx={7}
                            strokeWidth={2}
                        />
                    </g>
                )}

                {/* hover outline */}
                <rect
                    ref={hoverOutlineRef}
                    className={[
                        styles.hover_outline,
                        classNames,
                    ].join(' ')}
                    x="2"
                    y="2"
                    width={width - 4}
                    height={height - 4}
                    rx={7}
                    strokeWidth={2}
                />

                <defs>
                    {hasBg && (
                        <mask id={`${id}-bg-mask`}>
                            <rect
                                x="2"
                                y="2"
                                width={width - 4}
                                height={height - 4}
                                rx={7}
                                fill="#fff"
                            />
                        </mask>
                    )}
                </defs>

            </svg>

            <span
                className={[
                    styles.content,
                    classNames,
                ].join(' ')}
            >
                {children}
            </span>

        </ButtonBase>
    );
});
