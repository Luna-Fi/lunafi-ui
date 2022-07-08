import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ChartLinear, ChartLinearProps } from '.';
import { lorem } from './lorem';

type ComponentType = typeof ChartLinear;

const Template: ComponentStory<ComponentType> = (args) => (
    <div
        style={{
            position: 'relative',
            width: '100%',
            height: '350px',
            backgroundColor: '#000',
        }}
    >
        <ChartLinear {...args} />
    </div>
);

const component: ComponentMeta<ComponentType> = {
    title: 'Chart/Linear',
    component: ChartLinear,
};
export default component;

const args: ChartLinearProps = {
    onActive(data) {
        // eslint-disable-next-line no-console
        console.log(data);
    },
    data: lorem,
    tooltipText: 'LFI',
    grid: {
        x: true,
        y: false,
    },
    axis: {
        x: true,
        y: true,
    },
};

export const Default = Template.bind({});
Default.args = {
    appearAnimation: false,
    appearAnimationOn: false,
    appearAnimationDuration: 1000,
    ...args,
    bg: {
        colorStart: '#00FFF4',
        colorStartAlpha: 1,
        colorEnd: '#00FFF4',
        colorEndAlpha: 0.1,
    },
    line: {
        colorStart: '#00FFF4',
        colorStartAlpha: 1,
        colorEnd: '#00FFF4',
        colorEndAlpha: 1,
    },
    dot: {
        r: 6,
        fill: '#00FFF4',
        stroke: '#fff',
        strokeWidth: 2,
    },
};

export const Red = Template.bind({});
Red.args = {
    appearAnimation: false,
    appearAnimationOn: false,
    appearAnimationDuration: 1000,
    ...args,
    bg: {
        colorStart: '#FF0A6C',
        colorStartAlpha: 1,
        colorEnd: '#2D27FF',
        colorEndAlpha: 0.1,
    },
    line: {
        colorStart: '#FF0A6C',
        colorStartAlpha: 1,
        colorEnd: '#2D27FF',
        colorEndAlpha: 1,
    },
    dot: {
        r: 6,
        fill: '#fff',
        stroke: '#2D27FF',
        strokeWidth: 4,
    },
    axis: {
        x: false,
        y: false,
    },
};
