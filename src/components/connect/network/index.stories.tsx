import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'src/store/context';
import { storeLorem } from 'src/store/lorem';
import { ConnectNetwork } from '.';

type ComponentType = typeof ConnectNetwork;

const Template: ComponentStory<ComponentType> = (args) => (
    <Provider value={storeLorem}>
        <ConnectNetwork {...args} />
    </Provider>
);

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Network',
    component: ConnectNetwork,
};
export default component;

export const Default = Template.bind({});
Default.parameters = {
    controls: {
        exclude: ['onSelect'],
    },
};
