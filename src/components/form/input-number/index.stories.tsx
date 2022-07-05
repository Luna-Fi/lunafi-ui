import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FormInputNumber } from '.';

type ComponentType = typeof FormInputNumber;

const component: ComponentMeta<ComponentType> = {
    title: 'Form/InputNumber',
    component: FormInputNumber,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <FormInputNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Enter Amount',
    min: 0,
    max: 1538,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: 'Enter Amount',
    icon: '/img/form/eth-luna.svg',
    min: 0,
    max: 1538,
    name: 'num',
};
