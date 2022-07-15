import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FormSelect } from 'src/components/form/select';
import { PoolsListBox } from '.';
import { PoolsList } from '../list';
import { lorem as poolsLorem } from '../list/lorem';

type ComponentType = typeof PoolsListBox;

const component: ComponentMeta<ComponentType> = {
    title: 'Pools/ListBox',
    component: PoolsListBox,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => (
    <PoolsListBox {...args}>
        <PoolsList
            {...poolsLorem}
        />
    </PoolsListBox>
);

export const Default = Template.bind({});
Default.args = {
    heading: 'All Pools',
    filters: (
        <>
            <FormSelect
                label="Network"
                multiple
                options={[
                    {
                        value: 'sx', name: 'SX Network', img: '/img/network/sx_preview.svg',
                    },
                    {
                        value: 'matic', name: 'Matic', img: '/img/network/polygon_preview.svg',
                    },
                ]}
                onChange={(val) => {
                    // eslint-disable-next-line no-console
                    console.log(val);
                }}
            />
            <FormSelect
                label="Tokens"
                multiple
                options={[
                    {
                        value: 'lfi', name: 'LFI',
                    },
                    {
                        value: 'btc', name: 'BTC',
                    },
                ]}
                onChange={(val) => {
                    // eslint-disable-next-line no-console
                    console.log(val);
                }}
            />
        </>
    ),
};
