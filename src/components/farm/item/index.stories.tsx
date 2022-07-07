import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FarmItem } from '.';
import { lorem } from './lorem';

type ComponentType = typeof FarmItem;

const component: ComponentMeta<ComponentType> = {
    title: 'Farm/Item',
    component: FarmItem,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <FarmItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    ...lorem,
};
