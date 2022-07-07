import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { BoxHeading } from '.';

type ComponentType = typeof BoxHeading;

const component: ComponentMeta<ComponentType> = {
    title: 'Box/Heading',
    component: BoxHeading,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <BoxHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
    heading: 'Heading',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
