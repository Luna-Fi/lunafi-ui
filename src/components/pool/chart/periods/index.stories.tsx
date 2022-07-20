import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PoolChartPeriods } from '.';
import { lorem as chartLorem } from '../../../charts/linear/lorem';

type ComponentType = typeof PoolChartPeriods;

const component: ComponentMeta<ComponentType> = {
    title: 'Pool/Chart/Periods',
    component: PoolChartPeriods,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <PoolChartPeriods {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: 432000,
    title: 'Pool LIquidity',
    periods: [
        { key: 'day', name: '1D', data: chartLorem },
        { key: 'week', name: '1W', data: [...chartLorem].sort(() => Math.random() - 0.5) },
        { key: 'month', name: '1M', data: [...chartLorem].sort(() => Math.random() - 0.5) },
        { key: 'year', name: '1Y', data: [...chartLorem].sort(() => Math.random() - 0.5) },
    ],
};
