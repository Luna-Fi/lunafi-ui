import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectBalanceInfo } from '.';
import { lorem } from './lorem';

type ComponentType = typeof ConnectBalanceInfo;

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Balance/Info',
    component: ConnectBalanceInfo,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <ConnectBalanceInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
    ...lorem,
};
