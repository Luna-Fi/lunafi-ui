import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TooltipContainer } from '.';

type ComponentType = typeof TooltipContainer;

const Template: ComponentStory<ComponentType> = (args) => (
    <>
        <br />
        <br />
        <br />
        <TooltipContainer
            {...args}
            trigger={(
                <button type="button">
                    Show tooltip
                </button>
            )}
            style={{ background: '#666' }}
            overflowMargin={10}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </TooltipContainer>
    </>
);

const components: ComponentMeta<ComponentType> = {
    title: 'Tooltip/Container',
    component: TooltipContainer,
};
export default components;

const parameters = {
    controls: {
        exclude: ['trigger'],
    },
};

export const PositionAuto = Template.bind({});
PositionAuto.args = {
    pos: undefined,
};
PositionAuto.parameters = parameters;
