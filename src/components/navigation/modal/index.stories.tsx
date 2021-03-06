import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NavigationModal } from '.';
import { lorem } from '../menu/lorem';

type ComponentType = typeof NavigationModal;

const Template: ComponentStory<ComponentType> = (args) => (
    <NavigationModal
        {...args}
        links={lorem.links}
    />
);

const component: ComponentMeta<ComponentType> = {
    title: 'Navigation/Modal',
    component: NavigationModal,
};
export default component;

export const Default = Template.bind({});
Default.args = {
    show: true,
};
