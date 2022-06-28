import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectNetwork } from '.';
import { lorem } from './lorem';

type ComponentType = typeof ConnectNetwork;

const Template: ComponentStory<ComponentType> = (args) => <ConnectNetwork {...args} />;

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Network',
    component: ConnectNetwork,
};
export default component;

export const Default = Template.bind({});
Default.parameters = {
    controls: {
        exclude: ['onSelect'],
    },
};

Default.args = {
    ...lorem,
};
