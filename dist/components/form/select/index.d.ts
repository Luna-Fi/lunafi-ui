import { SelectHTMLAttributes } from 'react';
export interface FormSelectOptionProps {
    value: string;
    name: string;
    disabled?: boolean;
    img?: string;
}
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className' | 'onChange'> {
}
export interface Props<Multiple extends boolean> extends SelectProps {
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
export declare const FormSelect: <T extends boolean = false>({ options, label, className, id: propId, value, defaultValue, onChange, multiple, closeOnSelect, ...selectProps }: Props<T>) => JSX.Element;
export {};
