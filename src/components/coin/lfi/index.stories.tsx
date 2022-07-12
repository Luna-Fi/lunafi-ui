import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'src/store/context';
import { storeLorem } from 'src/store/lorem';
import { CoinLFI } from '.';

type ComponentType = typeof CoinLFI;

const component: ComponentMeta<ComponentType> = {
    title: 'Coin/LFI',
    component: CoinLFI,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => (
    <Provider value={storeLorem}>
        <CoinLFI {...args} />
    </Provider>
);

export const Default = Template.bind({});
