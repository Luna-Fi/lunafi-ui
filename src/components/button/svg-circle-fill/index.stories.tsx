import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ButtonSvgCircleFill } from '.';

type ComponentType = typeof ButtonSvgCircleFill;

const Template: ComponentStory<ComponentType> = (args) => (
    <ButtonSvgCircleFill
        {...args}
    >
        SVG Circle Fill Button
    </ButtonSvgCircleFill>
);

const component: ComponentMeta<ComponentType> = {
    title: 'Button/SvgCircleFill',
    component: ButtonSvgCircleFill,
};
export default component;

export const Default = Template.bind({});
Default.parameters = {
    controls: {
        exclude: ['tag', 'href'],
    },
};
Default.args = {
    tag: 'button',
    hasStaticFill: true,
    hasHover: true,
    size: 'medium',
    fullWidth: false,
    colorVariant: 'primary',
};
