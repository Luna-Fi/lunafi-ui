import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FormSelect } from 'src/components/form/select';
import { PoolsListBox } from '.';

type ComponentType = typeof PoolsListBox;

const component: ComponentMeta<ComponentType> = {
    title: 'Pool/ListBox',
    component: PoolsListBox,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => <PoolsListBox {...args} />;

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
                        value: '1', name: 'SX Network', img: '/img/network/sx_preview.svg',
                    },
                    {
                        value: '2', name: 'Matic', img: '/img/network/polygon_preview.svg',
                    },
                ]}
            />
            <FormSelect
                label="Tokens"
                multiple
                options={[
                    {
                        value: '1', name: 'LFI',
                    },
                    {
                        value: '2', name: 'BTC',
                    },
                ]}
            />
        </>
    ),
};
