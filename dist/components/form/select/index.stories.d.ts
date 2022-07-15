/// <reference types="react" />
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormSelect } from '.';
declare type ComponentType = typeof FormSelect;
declare const component: ComponentMeta<ComponentType>;
export default component;
export declare const Single: ComponentStory<(<T extends boolean = false>({ options, label, className, id: propId, value, defaultValue, onChange, multiple, closeOnSelect, ...selectProps }: import(".").Props<T>) => JSX.Element)>;
export declare const SingleControlled: ComponentStory<(<T extends boolean = false>({ options, label, className, id: propId, value, defaultValue, onChange, multiple, closeOnSelect, ...selectProps }: import(".").Props<T>) => JSX.Element)>;
export declare const Multiple: ComponentStory<(<T extends boolean = false>({ options, label, className, id: propId, value, defaultValue, onChange, multiple, closeOnSelect, ...selectProps }: import(".").Props<T>) => JSX.Element)>;
export declare const MultipleControlled: ComponentStory<(<T extends boolean = false>({ options, label, className, id: propId, value, defaultValue, onChange, multiple, closeOnSelect, ...selectProps }: import(".").Props<T>) => JSX.Element)>;
