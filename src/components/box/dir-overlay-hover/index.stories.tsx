import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { BoxDirOverlayHover } from '.';

type ComponentType = typeof BoxDirOverlayHover;

const component: ComponentMeta<ComponentType> = {
    title: 'Box/DirOverlayHover',
    component: BoxDirOverlayHover,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => (
    <BoxDirOverlayHover
        {...args}
        style={{
            width: '300px',
            height: '300px',
            backgroundColor: '#333',
        }}
    />
);

export const Default = Template.bind({});
