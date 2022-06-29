import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectBalanceBuy } from '.';
import { lorem } from './lorem';

type ComponentType = typeof ConnectBalanceBuy;

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Balance/Buy',
    component: ConnectBalanceBuy,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <ConnectBalanceBuy {...args} />;

export const Default = Template.bind({});
Default.args = {
    ...lorem,
};
