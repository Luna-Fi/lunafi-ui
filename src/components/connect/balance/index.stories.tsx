import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectBalance } from '.';
import { ConnectBalanceBuy } from './buy';
import { lorem as buyLorem } from './buy/lorem';
import { ConnectBalanceInfo } from './info';
import { lorem as infoLorem } from './info/lorem';

type ComponentType = typeof ConnectBalance;

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Balance',
    component: ConnectBalance,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => (
    <ConnectBalance {...args} />
);

export const Default = Template.bind({});
Default.args = {
    balance: 0.079,
    children: <ConnectBalanceBuy
        {...buyLorem}
    />,
};
Default.parameters = {
    controls: {
        exclude: ['children'],
    },
};

export const Logged = Template.bind({});
Logged.args = {
    balance: 0.079,
    children: <ConnectBalanceInfo
        {...infoLorem}
    />,
};
Logged.parameters = {
    controls: {
        exclude: ['children'],
    },
};
