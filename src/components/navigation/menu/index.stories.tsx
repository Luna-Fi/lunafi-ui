import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NavigationMenu } from '.';
import { lorem } from './lorem';

type ComponentType = typeof NavigationMenu;

const Template: ComponentStory<ComponentType> = (args) => (<NavigationMenu {...args} />);

const component: ComponentMeta<ComponentType> = {
    title: 'Navigation/Menu',
    component: NavigationMenu,
};
export default component;

export const Default = Template.bind({});
Default.args = { ...lorem };
