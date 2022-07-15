import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PoolsList } from '.';
import { lorem } from './lorem';

type ComponentType = typeof PoolsList;

const component: ComponentMeta<ComponentType> = {
    title: 'Pools/List',
    component: PoolsList,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <PoolsList {...args} />;

export const Default = Template.bind({});
Default.args = {
    ...lorem,
};
