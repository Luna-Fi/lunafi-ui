import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { BoxBanner, BoxBannerProps } from '.';

type ComponentType = typeof BoxBanner;

const Template: ComponentStory<ComponentType> = (args) => <BoxBanner {...args} />;

const component: ComponentMeta<ComponentType> = {
    title: 'Box/Banner',
    component: BoxBanner,
};
export default component;

const args: BoxBannerProps = {
    header: 'Stake LP, earn rewards',
    description: 'You can withdraw your LP tokens at anytime ',
    href: 'https://google.com/',
};

const parameters = {
    controls: {
        exclude: ['media'],
    },
};

export const Image = Template.bind({});
Image.args = {
    ...args,
    media: {
        img: '/img/general/banner.jpg',
    },
};
Image.parameters = parameters;

export const Video = Template.bind({});
Video.args = {
    ...args,
    media: {
        mp4: '/lorem/test.mp4',
    },
};
Video.parameters = parameters;
