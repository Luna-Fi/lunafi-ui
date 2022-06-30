import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Modal, ModalHandle } from '.';
declare type ComponentType = typeof Modal;
declare const component: ComponentMeta<ComponentType>;
export default component;
export declare const Default: ComponentStory<React.ForwardRefExoticComponent<import(".").Props & {
    children?: React.ReactNode;
} & React.RefAttributes<ModalHandle>>>;
