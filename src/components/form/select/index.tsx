import React, {
    SelectHTMLAttributes, useCallback, useEffect, useId, useRef, useState,
} from 'react';
import { addEventListener, childOf } from 'vevet-dom';
import styles from './styles.module.scss';

export interface FormSelectOptionProps {
    value: string;
    name: string;
    disabled?: boolean;
    img?: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className' | 'onChange'> { }

export interface Props<
    Multiple extends boolean,
> extends SelectProps {
    label: string;
    options: FormSelectOptionProps[];
    className?: string;
    value?: Multiple extends true ? string[] : string;
    defaultValue?: Multiple extends true ? string[] : string;
    onChange?: (value: Multiple extends true ? string[] : string) => void;
    multiple?: Multiple;
    /**
     * @default true
     */
    closeOnSelect?: boolean;
}

export const FormSelect = <T extends boolean = false>({
    options,
    label,
    className,
    id: propId,
    value,
    defaultValue,
    onChange,
    multiple,
    closeOnSelect = true,
    ...selectProps
}: Props<T>) => {
    const dynamicId = useId();
    const id = propId || dynamicId;

    // states
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || defaultValue);
    useEffect(() => {
        if (typeof value !== 'undefined' && value !== null) {
            setSelectedValue(value);
        }
    }, [value]);
    const noneSelected = selectedValue === undefined || (multiple && selectedValue.length === 0);

    // shared classnames
    const sharedClassName = [
        isExpanded ? styles.expanded : styles.collapsed,
    ].join(' ');

    // generate name
    const [name, setName] = useState<string>();
    useEffect(() => {
        if (multiple) {
            const names = options.filter(
                (option) => selectedValue?.includes(option.value),
            )
                .map((option) => option.name).join(', ');
            setName(names);
        } else {
            setName(
                options.find((option) => option.value === selectedValue)?.name,
            );
        }
    }, [multiple, options, selectedValue]);

    // elements
    const parentRef = useRef<HTMLDivElement>(null);

    // outside click
    useEffect(() => {
        if (isExpanded) {
            const listener = addEventListener(window, 'click', (e) => {
                if (e.target instanceof Element) {
                    const isChild = childOf(e.target, parentRef.current!);
                    if (!isChild) {
                        setIsExpanded(false);
                    }
                }
            });
            return () => listener.remove();
        }
        return undefined;
    }, [isExpanded]);

    /**
     * Toggle an option
     */
    const toggleOption = useCallback((optionValue: string, selected: boolean) => {
        if (multiple) {
            const currentValues = new Set(selectedValue as string[]);
            if (selected) {
                currentValues.add(optionValue);
            } else {
                currentValues.delete(optionValue);
            }
            const newValues = Array.from(currentValues) as any;
            if (onChange) {
                onChange(newValues);
            }
            if (value === undefined || value === null) {
                setSelectedValue(newValues);
            }
        } else {
            if (onChange) {
                onChange(optionValue as any);
            }
            if (value === undefined || value === null) {
                setSelectedValue(optionValue as any);
            }
        }
    }, [multiple, onChange, selectedValue, value]);

    return (
        <div
            ref={parentRef}
            className={[
                styles.form_select,
                sharedClassName,
                className,
            ].join(' ')}
        >

            {/* native select */}
            <select
                {...selectProps}
                className={styles.native_select}
                id={id}
                value={selectedValue}
                multiple={multiple}
                onChange={(evt) => {
                    const selectedValues = Array.from(evt.target.options)
                        .filter((option) => option.selected).map((option) => option.value);
                    const val = (multiple ? selectedValues : (selectedValues[0] || '')) as any;
                    if (onChange) {
                        onChange(val);
                    }
                    if (value === undefined || value === null) {
                        setSelectedValue(val);
                    }
                }}
            >
                {options ? options.map((optionData) => (
                    <option
                        key={optionData.value}
                        value={optionData.value}
                        disabled={optionData.disabled}
                    >
                        {optionData.name}
                    </option>
                )) : ''}
            </select>

            {/* needle */}
            <div
                className={[
                    styles.needle,
                    sharedClassName,
                ].join(' ')}
                aria-label={label}
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded={isExpanded}
                aria-controls={`${id}-list`}
                onClick={() => {
                    setIsExpanded((val) => !val);
                }}
                onKeyDown={(evt) => {
                    if (evt.keyCode === 13) {
                        setIsExpanded((val) => !val);
                    }
                }}
                tabIndex={0}
            >
                <span className={styles.needle__label}>{name || label}</span>
                <span className={styles.needle__helper}>
                    {noneSelected && (
                        <span className={styles.needle__all}>All</span>
                    )}
                    <svg className={styles.needle__arrow} width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M2.5 7.78845L6 4.28845L9.5 7.78845" stroke="#A0A6B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.5 12.7885L6 16.2885L9.5 12.7885" stroke="#A0A6B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>

            {/* options */}
            <ul
                className={[
                    styles.list,
                    sharedClassName,
                ].join(' ')}
                role="listbox"
                aria-multiselectable={multiple}
                id={`${id}-list`}
            >
                {options ? options.map((option) => {
                    let isActive = false;
                    if (Array.isArray(selectedValue)) {
                        isActive = selectedValue.includes(option.value);
                    } else {
                        isActive = selectedValue === option.value;
                    }

                    return (
                        <li
                            key={option.value}
                            className={[
                                styles.option,
                                option.disabled ? styles.disabled : '',
                                isActive ? styles.selected : '',
                            ].join(' ')}
                            tabIndex={option.disabled ? -1 : 0}
                            role="option"
                            aria-selected={isActive}
                            aria-disabled={option.disabled}
                            onClick={() => {
                                if (option.disabled) {
                                    return;
                                }
                                toggleOption(option.value, multiple ? !isActive : true);
                                if (closeOnSelect) {
                                    setIsExpanded(false);
                                }
                            }}
                            onKeyUp={(evt) => {
                                if (option.disabled) {
                                    return;
                                }
                                if (evt.keyCode === 13) {
                                    toggleOption(option.value, multiple ? !isActive : true);
                                    if (closeOnSelect) {
                                        setIsExpanded(false);
                                    }
                                }
                            }}
                        >
                            <span className={styles.option__text}>
                                {option.name}
                            </span>
                            {option.img && (
                                <img
                                    className={styles.option__img}
                                    src={option.img}
                                    alt={option.name}
                                    aria-hidden
                                />
                            )}
                        </li>
                    );
                }) : ''}
            </ul>

        </div>
    );
};
