import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectSubmit } from '.';
import { lorem } from './lorem';

type ComponentType = typeof ConnectSubmit;

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Submit',
    component: ConnectSubmit,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => (
    <ConnectSubmit
        {...args}
        {...lorem}
    />
);

export const Default = Template.bind({});
Default.parameters = {
    controls: {
        exclude: ['wallets', 'onSelect'],
    },
};
