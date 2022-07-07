import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectGrid } from '.';
import { ConnectCoin } from '../coin';
import { ConnectBuy } from '../buy';
import { ConnectNetwork } from '../network';
import { lorem as networkLorem } from '../network/lorem';
import { ConnectSubmit } from '../submit';
import { lorem as submitLorem } from '../submit/lorem';
import { ConnectUser } from '../user';
import { lorem as buyLorem } from '../buy/lorem';
import { ConnectCoinInfo } from '../coin/info';
import { lorem as infoLorem } from '../coin/info/lorem';

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
    coin: (
        <ConnectCoin price={0.079}>
            <ConnectBuy
                {...buyLorem}
            />
        </ConnectCoin>),
    network: <ConnectNetwork {...networkLorem} />,
    connect: <ConnectSubmit {...submitLorem} />,
};
Default.parameters = {
    controls: {
        exclude: ['coin', 'network', 'connect'],
    },
};

export const Logged = Template.bind({});
Logged.args = {
    coin: (
        <ConnectCoin price={infoLorem.price}>
            <ConnectCoinInfo
                {...infoLorem}
            />
        </ConnectCoin>),
    network: <ConnectNetwork {...networkLorem} />,
    connect: <ConnectUser address="0xca7bf3c514d412ac12d10eff302301a81153f557" />,
};
Logged.parameters = {
    controls: {
        exclude: ['coin', 'network', 'connect'],
    },
};
