import gsap from 'gsap';
import React, {
    forwardRef, ForwardRefExoticComponent, InputHTMLAttributes, useCallback, useEffect, useId,
    useImperativeHandle, useRef, useState,
} from 'react';
import { useOnResize } from 'src/utils/resize';
import { utils } from 'vevet';
import styles from './styles.module.scss';

export interface FormInputProps {
    label: string;
    icon?: string;
    InputElement?: ForwardRefExoticComponent<any>;
}

type HTMLAttr = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>;

export interface Props extends HTMLAttr, FormInputProps { }

const borderRadius = 8;

export const FormInput = forwardRef<
HTMLInputElement,
Props
>(({
    label,
    icon,
    InputElement,
    ...tagProps
}, ref) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!);

    const dynamicId = useId();
    const id = tagProps.id || dynamicId;

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const classNames = [
        isFocused ? styles.focused : '',
        isFilled ? styles.filled : '',
        icon ? styles.has_icon : '',
    ].join(' ');

    // elements
    const focusRectRef = useRef<SVGRectElement>(null);
    const focusBgRef = useRef<HTMLDivElement>(null);

    // states
    const [svgWidth, setSvgWidth] = useState(4);
    const [svgHeight, setSvgHeight] = useState(4);

    /**
     * Resize the input
     */
    const resize = useCallback(() => {
        const parent = parentRef.current as HTMLElement;
        if (!parent) {
            return;
        }
        const parentBounding = parent.getBoundingClientRect();
        //
        const w = parentBounding.width;
        setSvgWidth(w);
        //
        const h = parentBounding.height;
        setSvgHeight(h);
    }, []);

    // resize event
    useOnResize(() => {
        resize();
    }, [resize]);

    // focus animation
    const focusProgress = useRef(isFocused ? 1 : 0);
    useEffect(() => {
        const focusRect = focusRectRef.current;
        const focusBg = focusBgRef.current;
        if (!focusRect || !focusBg) {
            return;
        }

        const direction = isFocused;
        resize();

        gsap.to(focusProgress, {
            current: direction ? 1 : 0,
            duration: 1,
            onUpdate: () => {
                const progress = focusProgress.current;

                // render rect
                let rectLength = 0;
                try {
                    rectLength = focusRect.getTotalLength();
                } catch (e) {
                    rectLength = 0;
                }
                const offset = rectLength * -0.5 - (rectLength * progress);
                focusRect.style.opacity = '1';
                focusRect.style.strokeDasharray = `${rectLength * progress} ${rectLength * (1 - progress)}`;
                focusRect.style.strokeDashoffset = `${offset}`;

                // render bg
                const bgProgress = utils.math.clampScope(progress, [0.3, 1]);
                focusBg.style.transform = `scale(${bgProgress}, 1)`;
                focusBg.style.borderRadius = `${utils.math.lerp(100, borderRadius, bgProgress)}px`;
            },
        });
    }, [isFocused, resize]);

    const inputProps: InputHTMLAttributes<HTMLInputElement> = {
        ...tagProps,
        id,
        onFocus: (e) => {
            tagProps.onFocus?.(e);
            setIsFocused(true);
        },
        onBlur: (e) => {
            tagProps.onBlur?.(e);
            setIsFocused(false);
        },
        onChange: (e) => {
            tagProps.onChange?.(e);
            setIsFilled(!!inputRef.current!.value);
        },
    };

    return (
        <div
            ref={parentRef}
            className={`${styles.form_input} ${classNames}`}
        >
            <div
                ref={focusBgRef}
                className={styles.focus_bg}
            />
            <svg
                className={styles.svg}
                width={svgWidth}
                height={svgHeight}
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
            >
                <rect
                    ref={focusRectRef}
                    x="0"
                    y="0"
                    width={svgWidth}
                    height={svgHeight}
                    rx={borderRadius}
                    strokeWidth={2}
                    className={styles.rect_focus}
                    stroke={id ? `url('#${id}_gradient')` : undefined}
                />
                <defs>
                    <linearGradient
                        id={id ? `${id}_gradient` : undefined}
                        x1="34.7143"
                        y1="10.3704"
                        x2="288.141"
                        y2="165.513"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#00FFFF" />
                        <stop offset="1" stopColor="#00A3FF" />
                    </linearGradient>
                </defs>
            </svg>
            <label
                htmlFor={id}
                className={styles.label}
            >
                <div className={styles.input}>
                    {InputElement ? (
                        <InputElement
                            ref={inputRef}
                            {...inputProps}
                        />
                    ) : (
                        <input
                            ref={inputRef}
                            {...inputProps}
                        />
                    )}
                </div>
                <span
                    className={`${styles.label__text} ${classNames}`}
                >
                    {label}
                </span>
            </label>
            {icon && (
                <img
                    src={icon}
                    className={styles.icon}
                    alt="icon"
                    aria-hidden
                />
            )}
        </div>
    );
});
