import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectBalance } from '.';

type ComponentType = typeof ConnectBalance;

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Balance',
    component: ConnectBalance,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <ConnectBalance {...args} />;

export const Default = Template.bind({});
Default.args = {
    balance: 0.079,
};
