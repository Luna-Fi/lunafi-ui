import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NumberCounter } from '.';
declare type ComponentType = typeof NumberCounter;
declare const component: ComponentMeta<ComponentType>;
export default component;
export declare const Default: ComponentStory<React.FC<import(".").NumberCounterProps>>;
