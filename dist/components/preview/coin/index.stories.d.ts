import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PreviewCoin, Props } from '.';
declare type ComponentType = typeof PreviewCoin;
declare const component: ComponentMeta<ComponentType>;
export default component;
export declare const Default: ComponentStory<React.FC<Props>>;
export declare const Deposit: ComponentStory<React.FC<Props>>;
