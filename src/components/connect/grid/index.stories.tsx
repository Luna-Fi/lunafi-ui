import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import { ConnectGrid } from '.';
import { ConnectBalance } from '../balance';
import { ConnectNetwork } from '../network';
import { lorem as networkLorem } from '../network/lorem';

type ComponentType = typeof ConnectGrid;

const Template: ComponentStory<ComponentType> = (args) => (
    <ConnectGrid
        {...args}
        balance={<ConnectBalance balance={0.079} />}
        network={<ConnectNetwork {...networkLorem} />}
        connect={<ButtonSvgCircleFill>Connect</ButtonSvgCircleFill>}
    />
);

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Grid',
    component: ConnectGrid,
};
export default component;

export const Default = Template.bind({});
