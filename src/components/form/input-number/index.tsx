import InputNumber, { InputNumberProps } from 'rc-input-number';
import React, {
    forwardRef, useEffect, useId,
    useImperativeHandle, useRef, useState,
} from 'react';
import { Button } from 'src/components/button';
import { FormInputWrapper } from '../__input-wrapper';
import styles from './styles.module.scss';

export type FormInputNumberProps = InputNumberProps & {
    label: string;
    icon?: string;
    onMax?: (max: number) => void;
};

export const FormInputNumber = forwardRef<
HTMLInputElement,
FormInputNumberProps
>(({
    label,
    icon,
    onMax,
    ...tagProps
}, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!);

    const dynamicId = useId();
    const id = tagProps.id || dynamicId;

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [value, setValue] = useState(tagProps.value);

    useEffect(() => {
        setIsFilled(!!value);
    }, [value]);

    return (
        <FormInputWrapper
            className={styles.wrapper}
            isFilled={isFilled}
            isFocused={isFocused}
            label={label}
            icon={icon}
            id={id}
        >
            <InputNumber
                ref={inputRef}
                {...tagProps}
                id={id}
                onFocus={(e) => {
                    tagProps.onFocus?.(e);
                    setIsFocused(true);
                }}
                onBlur={(e) => {
                    tagProps.onBlur?.(e);
                    setIsFocused(false);
                }}
                onChange={(e) => {
                    tagProps.onChange?.(e);
                    setValue(e);
                }}
                value={value}
            />
            {typeof tagProps.max === 'number' && (
                <Button
                    tag="button"
                    variant="secondary"
                    size={false}
                    className={styles.max}
                    aria-hidden
                    onClick={() => {
                        setValue(tagProps.max);
                        onMax?.(parseFloat(`${tagProps.max}` || '0'));
                    }}
                >
                    Max
                </Button>
            )}
        </FormInputWrapper>
    );
});
