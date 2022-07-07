import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectCoinInfo } from '.';
import { lorem } from './lorem';

type ComponentType = typeof ConnectCoinInfo;

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Coin/Info',
    component: ConnectCoinInfo,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <ConnectCoinInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
    ...lorem,
};
