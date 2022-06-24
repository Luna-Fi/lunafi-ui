import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LayoutCSS } from '.';
declare type ComponentType = typeof LayoutCSS;
declare const component: ComponentMeta<ComponentType>;
export default component;
export declare const Default: ComponentStory<React.FC<{
    children?: React.ReactNode;
}>>;
