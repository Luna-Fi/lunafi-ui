import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NavigationMenuLink } from './Link';
import { lorem } from './lorem';

type ComponentType = typeof NavigationMenuLink;

const Template: ComponentStory<ComponentType> = (args) => (<NavigationMenuLink {...args} />);

const component: ComponentMeta<ComponentType> = {
    title: 'Navigation/Menu/Link',
    component: NavigationMenuLink,
};
export default component;

export const Default = Template.bind({});
Default.args = {
    ...lorem.links[0],
};
