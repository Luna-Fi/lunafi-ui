import React, { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, Props } from '.';

type ComponentType = typeof Button;

const component: ComponentMeta<ComponentType> = {
    title: 'Button/Simple',
    component: Button,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => (
    <Button {...args} />
);

const parameters = {
    controls: {
        exclude: ['tag', 'href'],
    },
};

const args: Props = {
    tag: 'button',
    size: 'medium',
    fullWidth: false,
    disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
    ...args,
    variant: 'primary',
    children: 'Primary button',
};
Primary.parameters = parameters;

export const Secondary = Template.bind({});
Secondary.args = {
    ...args,
    variant: 'secondary',
    children: 'Secondary button',
};
Secondary.parameters = parameters;

export const Success = Template.bind({});
Success.args = {
    ...args,
    variant: 'success',
    children: 'Success button',
};
Success.parameters = parameters;

export const Danger = Template.bind({});
Danger.args = {
    ...args,
    variant: 'danger',
    children: 'Danger button',
};
Danger.parameters = parameters;

export const Light = Template.bind({});
Light.args = {
    ...args,
    variant: 'light',
    children: 'Light button',
};
Light.parameters = parameters;

export const Dark = Template.bind({});
Dark.args = {
    ...args,
    variant: 'dark',
    children: 'Dark button',
};
Dark.parameters = parameters;
