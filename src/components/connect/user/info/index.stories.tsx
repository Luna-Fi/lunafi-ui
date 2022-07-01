import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectUserInfo } from '.';
import { lorem } from './lorem';

type ComponentType = typeof ConnectUserInfo;

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/User/Info',
    component: ConnectUserInfo,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <ConnectUserInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
    ...lorem,
};
