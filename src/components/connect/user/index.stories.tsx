import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'src/store/context';
import { storeLorem } from 'src/store/lorem';
import { ConnectUser } from '.';

type ComponentType = typeof ConnectUser;

const Template: ComponentStory<ComponentType> = (args) => (
    <Provider value={storeLorem}>
        <ConnectUser {...args} />
    </Provider>
);

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/User',
    component: ConnectUser,
};
export default component;

export const Default = Template.bind({});
