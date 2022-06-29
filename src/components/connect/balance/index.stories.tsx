import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectBalance } from '.';
import { ConnectBalanceBuy } from './buy';
import { lorem as buyLorem } from './buy/lorem';

type ComponentType = typeof ConnectBalance;

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Balance',
    component: ConnectBalance,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => (
    <ConnectBalance {...args}>
        <ConnectBalanceBuy
            {...buyLorem}
        />
    </ConnectBalance>
);

export const Default = Template.bind({});
Default.args = {
    balance: 0.079,
};
