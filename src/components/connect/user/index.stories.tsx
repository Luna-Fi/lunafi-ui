import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectUser } from '.';

type ComponentType = typeof ConnectUser;

const Template: ComponentStory<ComponentType> = (args) => <ConnectUser {...args} />;

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/User',
    component: ConnectUser,
};
export default component;

export const Default = Template.bind({});
Default.args = {
    username: '0x8959..ddE4',
};
