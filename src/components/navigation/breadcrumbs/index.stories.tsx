import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NavigationBreadcrumbs } from '.';

type ComponentType = typeof NavigationBreadcrumbs;

const component: ComponentMeta<ComponentType> = {
    title: 'Navigation/Breadcrumbs',
    component: NavigationBreadcrumbs,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <NavigationBreadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: [
        { name: 'Pools', href: '/pools/' },
        { name: 'USDC', href: '/pools/usdc/' },
    ],
};
