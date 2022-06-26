import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ButtonSvgOutline } from '.';

type ComponentType = typeof ButtonSvgOutline;

const Template: ComponentStory<ComponentType> = (args) => (
    <ButtonSvgOutline
        {...args}
    >
        SVG Outline Button
    </ButtonSvgOutline>
);

const component: ComponentMeta<ComponentType> = {
    title: 'Button/SvgOutline',
    component: ButtonSvgOutline,
};
export default component;

export const Default = Template.bind({});
