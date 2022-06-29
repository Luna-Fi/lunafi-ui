import React, {
    forwardRef, useCallback,
    useEffect, useId, useImperativeHandle, useMemo, useRef, useState,
} from 'react';
import gsap from 'gsap';
import { utils } from 'vevet';
import { useOnResize } from 'src/utils/resize';
import styles from './styles.module.scss';
import { ButtonAnchor, ButtonAnchorProps } from '../ButtonAnchor';

export interface ButtonSvgCircleFillProps {
    appearAnimation?: boolean;
    appearAnimationOn?: boolean;
    /**
     * Has static fill background
     * @default true
     */
    hasStaticFill?: boolean;
    /**
     * If the button should have a hover state
     * @default true
     */
    hasHover?: boolean;
    /**
     * When native hover should not be used, set true or false
     * Undefined means native hover
     */
    forceHover?: boolean;
    /**
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * @defaul false
     */
    fullWidth?: boolean;
    /**
     * @default 'primary'
     */
    colorVariant?: 'primary' | 'primary_unactive' | 'gradient';
}

type Props = ButtonSvgCircleFillProps & ButtonAnchorProps;

export const ButtonSvgCircleFill = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>((
    {
        appearAnimation,
        appearAnimationOn,
        hasStaticFill = true,
        hasHover = true,
        forceHover,
        size = 'medium',
        fullWidth = false,
        colorVariant = 'primary',
        children,
        ...tagProps
    },
    ref,
) => {
    const domRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    useImperativeHandle(ref, () => domRef.current!);
    const id = useId();

    // elements
    const svgRef = useRef<SVGSVGElement>(null);
    const outlineRef = useRef<SVGRectElement>(null);
    const bgPlaneRef = useRef<SVGRectElement>(null);
    const contentRef = useRef<HTMLSpanElement>(null);
    const leftHoverPlaneRef = useRef<SVGRectElement>(null);
    const rightHoverPlaneRef = useRef<SVGRectElement>(null);

    // current progress
    const showProgressRef = useRef(0);
    const hoverProgressRef = useRef(0);

    // hover state
    const [isHovered, setIsHovered] = useState<boolean | undefined>(undefined);

    // classes
    const classNames = [
        appearAnimation ? styles.has_appear_animation : '',
        appearAnimationOn ? styles.show : '',
        size === 'small' ? styles.small : '',
        size === 'medium' ? styles.medium : '',
        size === 'large' ? styles.large : '',
        fullWidth ? styles.full_width : '',
        isHovered === true ? styles.is_hovered : '',
    ].join(' ');

    /**
     * Check if hover available
     */
    const hoverAvailable = useCallback(() => {
        if (!hasHover) {
            return false;
        }
        return showProgressRef.current === 1;
    }, [hasHover]);

    // set hover state
    useEffect(() => {
        if (typeof forceHover === 'boolean' && hoverAvailable()) {
            setIsHovered(forceHover);
        }
    }, [forceHover, hoverAvailable]);

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
        const outline = outlineRef.current;
        const bgPlane = bgPlaneRef.current;
        const leftHoverPlane = leftHoverPlaneRef.current;
        const rightHoverPlane = rightHoverPlaneRef.current;
        const content = contentRef.current;

        // render outline
        if (outline) {
            let totalLength = 0;
            try {
                totalLength = outline?.getTotalLength() || 0;
            } catch (e) {
                totalLength = 0;
            }
            const dashArrayStart = 0;
            const dashArrayEnd = totalLength;
            const showOffset = (heightRef.current * 2 + widthRef.current)
                - totalLength * showProgress;
            outline.style.strokeDasharray = `
                ${gsap.utils.interpolate(dashArrayStart, dashArrayEnd, showProgress)}
                ${gsap.utils.interpolate(dashArrayEnd, dashArrayStart, showProgress)}
            `;
            outline.style.strokeDashoffset = `${showOffset}`;
        }

        // render content
        if (content) {
            content.style.opacity = `${showProgress}`;
        }

        // render bg plane
        if (bgPlane) {
            const bgProgress = utils.math.clampScope(showProgress, [0.25, 0.75]);
            bgPlane.style.transform = `translate3d(0, ${(1 - bgProgress) * 100}%, 0)`;
        }

        // render hover planes
        if (leftHoverPlane) {
            leftHoverPlane.setAttribute('x', `${gsap.utils.interpolate(
                -(widthRef.current / 2 + heightRef.current),
                -(heightRef.current / 2),
                hoverProgress,
            )}`);
        }
        if (rightHoverPlane) {
            rightHoverPlane.setAttribute('x', `${gsap.utils.interpolate(
                widthRef.current,
                (widthRef.current / 2 - heightRef.current / 2),
                hoverProgress,
            )}`);
        }
    }, []);

    /**
     * Resize the scene
     */
    const resize = useCallback(() => {
        if (!svgRef.current) {
            return;
        }
        const clientRect = svgRef.current.getBoundingClientRect();
        const w = utils.math.clamp(clientRect.width, [4, Infinity]);
        const h = utils.math.clamp(clientRect.height, [4, Infinity]);
        widthRef.current = w;
        heightRef.current = h;
        setWidth(w);
        setHeight(h);
        render();
    }, [render]);

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

    // set up hover animation
    useEffect(() => {
        if (typeof isHovered === 'undefined') {
            return;
        }
        gsap.to(hoverProgressRef, {
            current: isHovered ? 1 : 0,
            duration: 0.5,
            onUpdate: () => {
                render();
            },
        });
    }, [isHovered, render]);

    // get colors
    const colors = useMemo(() => {
        if (colorVariant === 'primary') {
            return {
                staticColor1: '#00FFF4',
                staticColor2: '#00FFF4',
                hoverColor1: hasStaticFill ? '#14161A' : '#00FFF4',
                hoverColor2: hasStaticFill ? '#14161A' : '#00FFF4',
                contentColor: hasStaticFill ? '#000' : '#fff',
                contentColorHover: hasStaticFill ? '#fff' : '#000',
            };
        }
        if (colorVariant === 'primary_unactive') {
            return {
                staticColor1: '#114444',
                staticColor2: '#114444',
                hoverColor1: hasStaticFill ? '#14161A' : '#114444',
                hoverColor2: hasStaticFill ? '#14161A' : '#114444',
                contentColor: '#fff',
                contentColorHover: '#fff',
            };
        }
        return {
            staticColor1: '#008983',
            staticColor2: '#2A85FF',
            hoverColor1: hasStaticFill ? '#14161A' : '#008983',
            hoverColor2: hasStaticFill ? '#14161A' : '#2A85FF',
            contentColor: hasStaticFill ? '#000' : '#fff',
            contentColorHover: hasStaticFill ? '#fff' : '#000',
        };
    }, [colorVariant, hasStaticFill]);

    // set colors
    useEffect(() => {
        if (domRef.current) {
            domRef.current.style.setProperty('--content-color', colors.contentColor);
            domRef.current.style.setProperty('--content-color-hover', colors.contentColorHover);
        }
    }, [colors]);

    return (
        <ButtonAnchor
            ref={domRef}
            {...tagProps}
            className={[
                styles.button_svg_circle_fill,
                classNames,
                tagProps.className,
            ].join(' ')}
            onMouseEnter={(evt: React.MouseEvent<any, MouseEvent>) => {
                if (tagProps.onMouseEnter) {
                    tagProps.onMouseEnter(evt);
                }
                if (!forceHover && hoverAvailable()) {
                    setIsHovered(true);
                }
            }}
            onMouseLeave={(evt: React.MouseEvent<any, MouseEvent>) => {
                if (tagProps.onMouseLeave) {
                    tagProps.onMouseLeave(evt);
                }
                if (!forceHover && hoverAvailable()) {
                    setIsHovered(false);
                }
            }}
        >

            <svg
                ref={svgRef}
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
                    ref={outlineRef}
                    className={styles.outline}
                    x="1"
                    y="1"
                    width={width - 2}
                    height={height - 2}
                    rx={7}
                    strokeWidth={2}
                    stroke={`url(#${id}-gradient-static)`}
                />

                {/* masked elements */}
                <g mask={`url(#${id}-mask)`}>
                    {hasStaticFill && (
                        <rect
                            ref={bgPlaneRef}
                            className={styles.bg}
                            x="0"
                            y="0"
                            width={width}
                            height={height}
                            rx={8}
                            fill={`url(#${id}-gradient-static)`}
                        />
                    )}
                    <rect
                        ref={leftHoverPlaneRef}
                        className={[
                            styles.hover_plane,
                            styles.hover_plane_left,
                        ].join(' ')}
                        x={-(width / 2 + height)}
                        y="0"
                        width={width / 2 + height}
                        height={height}
                        rx={height / 2}
                        fill={`url(#${id}-gradient-hover)`}
                    />
                    <rect
                        ref={rightHoverPlaneRef}
                        className={[
                            styles.hover_plane,
                            styles.hover_plane_right,
                        ].join(' ')}
                        x={width}
                        y="0"
                        width={width / 2 + height}
                        height={height}
                        rx={height / 2}
                        fill={`url(#${id}-gradient-hover)`}
                    />
                </g>

                <defs>
                    <mask id={`${id}-mask`}>
                        <rect
                            x="1"
                            y="1"
                            width={width - 2}
                            height={height - 2}
                            rx={7}
                            fill="#fff"
                        />
                    </mask>
                    <linearGradient
                        id={`${id}-gradient-static`}
                        x1={width * 0}
                        y1={height * 0}
                        x2={width * 1}
                        y2={height * 2}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor={colors.staticColor1} />
                        <stop offset="1" stopColor={colors.staticColor2} />
                    </linearGradient>
                    <linearGradient
                        id={`${id}-gradient-hover`}
                        x1={width * 0}
                        y1={height * 0}
                        x2={width * 1}
                        y2={height * 2}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor={colors.hoverColor1} />
                        <stop offset="1" stopColor={colors.hoverColor2} />
                    </linearGradient>
                </defs>
            </svg>

            <span
                ref={contentRef}
                className={`${styles.content} ${classNames}`}
            >
                {children}
            </span>
        </ButtonAnchor>
    );
});
