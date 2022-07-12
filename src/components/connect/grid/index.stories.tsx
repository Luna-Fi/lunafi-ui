import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'src/store/context';
import { storeLorem } from 'src/store/lorem';
import { ConnectGrid } from '.';
import { ConnectWallet } from '../wallet';

type ComponentType = typeof ConnectGrid;

const Template: ComponentStory<ComponentType> = (args) => (
    <Provider value={storeLorem}>
        <ConnectGrid {...args} />
        <ConnectWallet />
    </Provider>
);

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Grid',
    component: ConnectGrid,
};
export default component;

export const Default = Template.bind({});
