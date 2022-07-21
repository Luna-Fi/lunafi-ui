import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TooltipContent } from '.';

type ComponentType = typeof TooltipContent;

const Template: ComponentStory<ComponentType> = (args) => (
    <TooltipContent
        {...args}
        trigger={<button type="button">Show tooltip</button>}
        overflowMargin={10}
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </TooltipContent>
);

const components: ComponentMeta<ComponentType> = {
    title: 'Tooltip/Content',
    component: TooltipContent,
};
export default components;

export const Default = Template.bind({});
Default.parameters = {
    controls: {
        exclude: ['trigger'],
    },
};
