import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FormInputNumber } from '.';
declare type ComponentType = typeof FormInputNumber;
declare const component: ComponentMeta<ComponentType>;
export default component;
export declare const Default: ComponentStory<React.ForwardRefExoticComponent<import("rc-input-number").InputNumberProps<import("rc-input-number/lib/utils/MiniDecimal").ValueType> & {
    label: string;
    icon?: string | undefined;
    onMax?: ((max: number) => void) | undefined;
} & React.RefAttributes<HTMLInputElement>>>;
export declare const WithIcon: ComponentStory<React.ForwardRefExoticComponent<import("rc-input-number").InputNumberProps<import("rc-input-number/lib/utils/MiniDecimal").ValueType> & {
    label: string;
    icon?: string | undefined;
    onMax?: ((max: number) => void) | undefined;
} & React.RefAttributes<HTMLInputElement>>>;
