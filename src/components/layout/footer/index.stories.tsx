import { ComponentStory } from '@storybook/react';
import React from 'react';
import { LayoutFooter } from '.';
import { lorem } from './lorem';

type ComponentType = typeof LayoutFooter;

const Template: ComponentStory<ComponentType> = (args) => (
    <LayoutFooter
        {...args}
    />
);

export default {
    title: 'Layout/Footer',
    component: LayoutFooter,
    parameters: {
        layout: 'fullscreen',
        previewTabs: {
            code: {
                hidden: false,
            },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    ...lorem,
};
