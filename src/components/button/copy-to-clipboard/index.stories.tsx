import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ButtonCopyToClipboard } from '.';

type ComponentType = typeof ButtonCopyToClipboard;

const component: ComponentMeta<ComponentType> = {
    title: 'Button/Copy',
    component: ButtonCopyToClipboard,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <ButtonCopyToClipboard {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'copied text',
    children: 'Copy to clipboard',
};
