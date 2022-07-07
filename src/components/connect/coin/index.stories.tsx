import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectCoin } from '.';
import { ConnectBuy } from '../buy';
import { lorem as buyLorem } from '../buy/lorem';
import { ConnectCoinInfo } from './info';
import { lorem as infoLorem } from './info/lorem';

type ComponentType = typeof ConnectCoin;

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Coin',
    component: ConnectCoin,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => (
    <ConnectCoin {...args} />
);

export const Default = Template.bind({});
Default.args = {
    price: 0.079,
    children: <ConnectBuy
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
    price: 0.079,
    children: <ConnectCoinInfo
        {...infoLorem}
    />,
};
Logged.parameters = {
    controls: {
        exclude: ['children'],
    },
};
