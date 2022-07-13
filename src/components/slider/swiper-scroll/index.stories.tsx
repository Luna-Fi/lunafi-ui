import React, { ComponentMeta, ComponentStory } from '@storybook/react';
import { FC } from 'react';
import { BoxOutline } from 'src/components/box/outline';
import { SliderSwiperScroll } from '.';

type ComponentType = typeof SliderSwiperScroll;

const component: ComponentMeta<ComponentType> = {
    title: 'Slider/SwiperScroll',
    component: SliderSwiperScroll,
};
export default component;

const Box: FC = () => (
    <BoxOutline
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '200px',
            height: '200px',
        }}
    >
        Box
    </BoxOutline>
);

const Template: ComponentStory<ComponentType> = (args) => (
    <div
        style={{
            overflow: 'hidden',
            padding: '40px 36px',
            background: '#000',
        }}
    >
        <SliderSwiperScroll {...args}>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
        </SliderSwiperScroll>
    </div>
);

export const Default = Template.bind({});
