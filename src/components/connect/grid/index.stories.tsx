import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ButtonSvgCircleFill } from 'src/components/button/svg-circle-fill';
import { ConnectGrid } from '.';
import { ConnectBalance } from '../balance';
import { ConnectNetwork } from '../network';
import { lorem as networkLorem } from '../network/lorem';
import { ConnectUser } from '../user';

type ComponentType = typeof ConnectGrid;

const Template: ComponentStory<ComponentType> = (args) => (
    <ConnectGrid {...args} />
);

const component: ComponentMeta<ComponentType> = {
    title: 'Connect/Grid',
    component: ConnectGrid,
};
export default component;

export const Default = Template.bind({});
Default.args = {
    balance: <ConnectBalance balance={0.079} />,
    network: <ConnectNetwork {...networkLorem} />,
    connect: <ButtonSvgCircleFill tag="button">Connect</ButtonSvgCircleFill>,
};
Default.parameters = {
    controls: {
        exclude: ['balance', 'network', 'connect'],
    },
};

export const Logged = Template.bind({});
Logged.args = {
    balance: <ConnectBalance balance={0.079} />,
    network: <ConnectNetwork {...networkLorem} />,
    connect: <ConnectUser username="0x8959..ddE4" />,
};
Logged.parameters = {
    controls: {
        exclude: ['balance', 'network', 'connect'],
    },
};
