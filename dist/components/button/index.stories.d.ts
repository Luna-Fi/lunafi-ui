/// <reference types="react" />
import React, { ComponentMeta } from '@storybook/react';
import { Button } from '.';
declare type ComponentType = typeof Button;
declare const component: ComponentMeta<ComponentType>;
export default component;
export declare const Primary: React.ComponentStory<import("react").ForwardRefExoticComponent<(import(".").ButtonProps & import("./ButtonAnchor").ButtonAnchorProps) & import("react").RefAttributes<HTMLAnchorElement | HTMLButtonElement>>>;
