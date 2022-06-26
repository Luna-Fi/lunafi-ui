import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LinksSocialIcons } from '.';

type ComponentType = typeof LinksSocialIcons;

const Template: ComponentStory<ComponentType> = (args) => <LinksSocialIcons {...args} />;

const component: ComponentMeta<ComponentType> = {
    title: 'Links/Social Icons',
    component: LinksSocialIcons,
};
export default component;

export const Default = Template.bind({});
