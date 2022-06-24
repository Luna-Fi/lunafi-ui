import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NumberCounter } from '.';

type ComponentType = typeof NumberCounter;

const Template: ComponentStory<ComponentType> = (args) => <NumberCounter {...args} />;

const component: ComponentMeta<ComponentType> = {
    title: 'Number/Counter',
    component: NumberCounter,
};
export default component;

export const Default = Template.bind({});
Default.args = {
    value: 135879.15,
    animation: true,
    animationDuration: 1000,
};
