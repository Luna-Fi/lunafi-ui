import React, {
    forwardRef, useCallback, useImperativeHandle, useRef, useState,
} from 'react';
import { vevetApp } from 'src/utils/vevet';
import styles from './styles.module.scss';
import { ButtonBase, ButtonBaseProps } from './__base/Base';

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'light' | 'dark';
}

export type Props = ButtonProps & ButtonBaseProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>((
    {
        variant = 'primary',
        children,
        ...tagProps
    },
    ref,
) => {
    const domRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    useImperativeHandle(ref, () => domRef.current!);

    // states
    const [isHovered, setIsHovered] = useState<boolean | undefined>(undefined);
    const isDisabled = (tagProps as any).disabled;

    // classes
    const classNames = [
        variant === 'primary' ? styles.primary : '',
        variant === 'secondary' ? styles.secondary : '',
        variant === 'success' ? styles.success : '',
        variant === 'danger' ? styles.danger : '',
        variant === 'light' ? styles.light : '',
        variant === 'dark' ? styles.dark : '',

        isHovered === true ? styles.is_hovered : '',
        isDisabled ? styles.is_disabled : '',
    ].join(' ');

    /**
     * Check if hover available
     */
    const hoverAvailable = useCallback(() => !vevetApp.isMobile, []);

    return (
        <ButtonBase
            ref={domRef}
            {...tagProps}
            className={[
                styles.button,
                classNames,
                tagProps.className,
            ].join(' ')}
            onMouseEnter={(evt: React.MouseEvent<any, MouseEvent>) => {
                if (tagProps.onMouseEnter) {
                    tagProps.onMouseEnter(evt);
                }
                if (hoverAvailable()) {
                    setIsHovered(true);
                }
            }}
            onMouseLeave={(evt: React.MouseEvent<any, MouseEvent>) => {
                if (tagProps.onMouseLeave) {
                    tagProps.onMouseLeave(evt);
                }
                if (hoverAvailable()) {
                    setIsHovered(false);
                }
            }}
        >
            <span
                className={[
                    styles.bg,
                    classNames,
                ].join(' ')}
            />
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
