import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LinkExplore } from '.';

type ComponentType = typeof LinkExplore;

const component: ComponentMeta<ComponentType> = {
    title: 'Links/Explore',
    component: LinkExplore,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <LinkExplore {...args} />;

export const Default = Template.bind({});
Default.args = {
    href: 'https://google.com/',
    target: '_blank',
    children: 'Explore',
};
