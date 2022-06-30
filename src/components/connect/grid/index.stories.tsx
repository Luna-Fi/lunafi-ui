import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ConnectGrid } from '.';
import { ConnectBalance } from '../balance';
import { ConnectBalanceBuy } from '../balance/buy';
import { ConnectNetwork } from '../network';
import { lorem as networkLorem } from '../network/lorem';
import { ConnectSubmit } from '../submit';
import { lorem as submitLorem } from '../submit/lorem';
import { ConnectUser } from '../user';
import { lorem as buyLorem } from '../balance/buy/lorem';
import { ConnectBalanceInfo } from '../balance/info';
import { lorem as infoLorem } from '../balance/info/lorem';

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
    balance: (
        <ConnectBalance balance={0.079}>
            <ConnectBalanceBuy
                {...buyLorem}
            />
        </ConnectBalance>),
    network: <ConnectNetwork {...networkLorem} />,
    connect: <ConnectSubmit {...submitLorem} />,
};
Default.parameters = {
    controls: {
        exclude: ['balance', 'network', 'connect'],
    },
};

export const Logged = Template.bind({});
Logged.args = {
    balance: (
        <ConnectBalance balance={infoLorem.balance}>
            <ConnectBalanceInfo
                {...infoLorem}
            />
        </ConnectBalance>),
    network: <ConnectNetwork {...networkLorem} />,
    connect: <ConnectUser username="0xca7bf3c514d412ac12d10eff302301a81153f557" />,
};
Logged.parameters = {
    controls: {
        exclude: ['balance', 'network', 'connect'],
    },
};
