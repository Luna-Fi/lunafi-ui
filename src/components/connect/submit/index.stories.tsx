import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'src/store/context';
import { storeLorem } from 'src/store/lorem';
import { ConnectSubmit } from '.';
import { ConnectWallet } from '../wallet';

type ComponentType = typeof ConnectSubmit;

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Submit',
    component: ConnectSubmit,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => (
    <Provider value={storeLorem}>
        <ConnectSubmit
            {...args}
        />
        <ConnectWallet />
    </Provider>
);

export const Default = Template.bind({});
