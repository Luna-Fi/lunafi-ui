import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NumberFormat } from '.';

type ComponentType = typeof NumberFormat;

const Template: ComponentStory<ComponentType> = (args) => <NumberFormat {...args} />;

const component: ComponentMeta<ComponentType> = {
    title: 'Number/Format',
    component: NumberFormat,
};
export default component;

export const Default = Template.bind({});
Default.args = {
    value: 135681.52,
};
