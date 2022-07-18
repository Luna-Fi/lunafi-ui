import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PoolHeader } from '.';

type ComponentType = typeof PoolHeader;

const component: ComponentMeta<ComponentType> = {
    title: 'Pool/Header',
    component: PoolHeader,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <PoolHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'USDC',
    label: 'LFUSDLP',
    img: '/img/coin/btc.svg',
};
