import React, { ComponentMeta, ComponentStory } from '@storybook/react';
import { PreviewNetworkLabel } from '.';

type ComponentType = typeof PreviewNetworkLabel;

const component: ComponentMeta<ComponentType> = {
    title: 'Preview/NetworkLabel',
    component: PreviewNetworkLabel,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => (
    <PreviewNetworkLabel {...args} />
);

export const Matic = Template.bind({});
Matic.args = {
    name: 'Matic',
    img: '/img/network-label/matic.svg',
    color: '#A26FF8',
    size: 'medium',
};

export const SX = Template.bind({});
SX.args = {
    name: 'Network',
    img: '/img/network-label/sx.svg',
    color: '#579FFF',
    size: 'medium',
};
