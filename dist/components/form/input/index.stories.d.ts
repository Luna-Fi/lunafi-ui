import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FormInput } from '.';
declare type ComponentType = typeof FormInput;
declare const component: ComponentMeta<ComponentType>;
export default component;
export declare const Default: ComponentStory<React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    icon?: string | undefined;
} & React.RefAttributes<HTMLInputElement>>>;
export declare const WithIcon: ComponentStory<React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    icon?: string | undefined;
} & React.RefAttributes<HTMLInputElement>>>;
