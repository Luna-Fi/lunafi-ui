import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { BoxBanner } from '.';

type ComponentType = typeof BoxBanner;

const Template: ComponentStory<ComponentType> = (args) => <BoxBanner {...args} />;

const component: ComponentMeta<ComponentType> = {
    title: 'Box/Banner',
    component: BoxBanner,
};
export default component;

export const Default = Template.bind({});
Default.args = {
    header: 'Stake LP, earn rewards',
    description: 'You can withdraw your LP tokens at anytime ',
    href: 'https://google.com/',
    media: {
        img: '/img/general/banner.jpg',
    },
};
