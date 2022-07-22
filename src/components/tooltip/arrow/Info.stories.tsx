import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TooltipArrowInfo } from './Info';

type ComponentType = typeof TooltipArrowInfo;

const Template: ComponentStory<ComponentType> = (args) => (
    <TooltipArrowInfo
        {...args}
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
    </TooltipArrowInfo>
);

const components: ComponentMeta<ComponentType> = {
    title: 'Tooltip/Arrow/Info',
    component: TooltipArrowInfo,
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
