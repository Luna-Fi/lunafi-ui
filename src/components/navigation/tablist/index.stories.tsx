/* eslint-disable no-alert */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { NavigationTablist } from '.';

type ComponentType = typeof NavigationTablist;

const component: ComponentMeta<ComponentType> = {
    title: 'Navigation/Tablist',
    component: NavigationTablist,
};
export default component;

const DefaultTemplate: ComponentStory<ComponentType> = (args) => (
    <NavigationTablist
        {...args}
        tablist={[
            { key: 0, name: 'Tab 0' },
            { key: 1, name: 'Tab 1' },
        ]}
        onSelect={(key) => alert(key)}
    />
);
export const Default = DefaultTemplate.bind({});

const ControlledTemplate: ComponentStory<ComponentType> = (args) => {
    const tablist = [
        { key: 0, name: 'Tab 0' },
        { key: 1, name: 'Tab 1' },
    ];
    const [selected, setSelected] = useState<string | number>(tablist[0].key);

    return (
        <NavigationTablist
            {...args}
            tablist={tablist}
            selectedKey={selected}
            onSelect={(key) => {
                setSelected(key);
                alert(key);
            }}
        />
    );
};
export const Controlled = ControlledTemplate.bind({});
