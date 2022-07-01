import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectUser } from '.';
import { ConnectUserInfo } from './info';
import { lorem } from './info/lorem';

type ComponentType = typeof ConnectUser;

const Template: ComponentStory<ComponentType> = (args) => (
    <ConnectUser {...args}>
        <ConnectUserInfo
            {...lorem}
        />
    </ConnectUser>
);

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/User',
    component: ConnectUser,
};
export default component;

export const Default = Template.bind({});
Default.args = {
    address: '0xca7bf3c514d412ac12d10eff302301a81153f557',
};
