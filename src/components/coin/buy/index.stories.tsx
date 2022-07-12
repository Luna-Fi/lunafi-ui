import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'src/store/context';
import { storeLorem } from 'src/store/lorem';
import { CoinBuy } from '.';

type ComponentType = typeof CoinBuy;

const component: ComponentMeta<ComponentType> = {
    title: 'Coin/Buy',
    component: CoinBuy,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => (
    <Provider value={storeLorem}>
        <CoinBuy {...args} />
    </Provider>
);

export const Default = Template.bind({});
