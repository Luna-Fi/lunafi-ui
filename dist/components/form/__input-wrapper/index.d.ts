import { FC, PropsWithChildren } from 'react';
export interface FormInputWrapperProps {
    isFocused?: boolean;
    isFilled?: boolean;
    label: string;
    icon?: string;
    className?: string;
    id?: string;
}
export declare const FormInputWrapper: FC<PropsWithChildren<FormInputWrapperProps>>;
