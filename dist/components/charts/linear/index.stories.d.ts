import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ChartLinear } from '.';
declare type ComponentType = typeof ChartLinear;
declare const component: ComponentMeta<ComponentType>;
export default component;
export declare const Default: ComponentStory<React.FC<import(".").Props>>;
export declare const Red: ComponentStory<React.FC<import(".").Props>>;
