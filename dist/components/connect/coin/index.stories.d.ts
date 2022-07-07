import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectCoin } from '.';
declare type ComponentType = typeof ConnectCoin;
declare const component: ComponentMeta<ComponentType>;
export default component;
export declare const Default: ComponentStory<React.FC<React.PropsWithChildren<import(".").Props>>>;
export declare const Logged: ComponentStory<React.FC<React.PropsWithChildren<import(".").Props>>>;
