import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PreviewCoin, Props } from '.';

type ComponentType = typeof PreviewCoin;

const component: ComponentMeta<ComponentType> = {
    title: 'Preview/Coin',
    component: PreviewCoin,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => (
    <PreviewCoin
        {...args}
        style={{
            width: '300px',
        }}
    />
);

const defaultArgs: Props = {
    appearAnimation: false,
    appearAnimationOn: false,
    size: 'medium',
    useOverlayHover: true,

    img: '/img/coin/btc.svg',
    name: 'USDC',
    value: 4540630,
    earning: {
        percent: 1.6,
        lfiPercent: 23.51,
    },
    network: {
        name: 'Network',
        img: '/img/network-label/sx.svg',
        color: '#579FFF',
    },
};

export const Default = Template.bind({});
Default.args = {
    ...defaultArgs,
    onDepositClick: undefined,
};

export const Deposit = Template.bind({});
Deposit.args = {
    ...defaultArgs,
    onDepositClick: () => {
        // eslint-disable-next-line no-alert
        alert('deposit');
    },
};
