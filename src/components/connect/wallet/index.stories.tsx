import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'src/store/context';
import { ConnectWallet } from '.';
import { storeLorem } from '../../../store/lorem';

type ComponentType = typeof ConnectWallet;

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Wallet',
    component: ConnectWallet,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => (
    <Provider value={storeLorem}>
        <ConnectWallet
            {...args}
        />
    </Provider>
);

export const Default = Template.bind({});
Default.args = {
    forceShow: true,
};
