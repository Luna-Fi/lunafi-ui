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
    username: '0xca7bf3c514d412ac12d10eff302301a81153f557',
};
