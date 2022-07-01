import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectBuy } from '.';
import { lorem } from './lorem';

type ComponentType = typeof ConnectBuy;

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Buy',
    component: ConnectBuy,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <ConnectBuy {...args} />;

export const Default = Template.bind({});
Default.args = {
    ...lorem,
};
