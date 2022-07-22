import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TooltipArrow } from '.';

type ComponentType = typeof TooltipArrow;

const Template: ComponentStory<ComponentType> = (args) => (
    <TooltipArrow
        {...args}
        trigger={<button type="button">Show tooltip</button>}
    >
        <p>
            <mark>APY</mark>
        </p>
        <p>
            7 day: 3.85%
            {' '}
            <i>+ 0.25% LFI</i>
        </p>
        <p>
            30 day: 3.32% +
            {' '}
            <i>0.25% LFI</i>
        </p>
    </TooltipArrow>
);

const components: ComponentMeta<ComponentType> = {
    title: 'Tooltip/Arrow',
    component: TooltipArrow,
};
export default components;

export const Default = Template.bind({});
Default.args = {
    useMaxWidth: false,
};
Default.parameters = {
    controls: {
        exclude: ['trigger'],
    },
};
