import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FormInput } from '.';

type ComponentType = typeof FormInput;

const component: ComponentMeta<ComponentType> = {
    title: 'Form/Input',
    component: FormInput,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <FormInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Type Some Text',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: 'Type Some Text',
    icon: '/img/form/eth-luna.svg',
};
