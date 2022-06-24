import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PreviewDiscount } from '.';
import { lorem } from './lorem';

type ComponentType = typeof PreviewDiscount;

const Template: ComponentStory<ComponentType> = (args) => (
    <div style={{ width: '176px' }}>
        <PreviewDiscount {...args} />
    </div>
);

const component: ComponentMeta<ComponentType> = {
    title: 'Preview/Discount',
    component: PreviewDiscount,
};
export default component;

export const Defalt = Template.bind({});
Defalt.args = {
    ...lorem,
};
