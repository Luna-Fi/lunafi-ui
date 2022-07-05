import React, {
    forwardRef, InputHTMLAttributes, useEffect, useId,
    useImperativeHandle, useRef, useState,
} from 'react';
import { FormInputWrapper } from '../__input-wrapper';

export type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    icon?: string;
};

export const FormInput = forwardRef<
HTMLInputElement,
FormInputProps
>(({
    label,
    icon,
    ...tagProps
}, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!);

    const dynamicId = useId();
    const id = tagProps.id || dynamicId;

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [value, setValue] = useState(tagProps.value || '');

    useEffect(() => {
        setIsFilled(!!value);
    }, [value]);

    return (
        <FormInputWrapper
            isFilled={isFilled}
            isFocused={isFocused}
            label={label}
            icon={icon}
        >
            <input
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
                    setValue(e.target.value);
                }}
                value={value}
            />
        </FormInputWrapper>
    );
});
