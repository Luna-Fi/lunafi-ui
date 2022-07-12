import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { BoxInfo } from '.';

type ComponentType = typeof BoxInfo;

const component: ComponentMeta<ComponentType> = {
    title: 'Box/Info',
    component: BoxInfo,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => (<BoxInfo {...args} />);

export const Default = Template.bind({});
Default.args = {
    text: 'Your wallet is not connected',
};
