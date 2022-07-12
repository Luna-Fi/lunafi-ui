/* eslint-disable no-console */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { FormSelect } from '.';

type ComponentType = typeof FormSelect;

const component: ComponentMeta<ComponentType> = {
    title: 'Form/Select',
    component: FormSelect,
};
export default component;

const globalArgs = {
    label: 'Select',
    options: [
        {
            value: '1', name: 'One', img: '/img/network/sx_preview.svg',
        },
        {
            value: '2', name: 'Two', disabled: true, img: '/img/network/polygon_preview.svg',
        },
        {
            value: '3', name: 'Three', img: '/img/network/eth_preview.svg',
        },
    ],
};

const globalParameters = {
    controls: {
        exclude: ['options', 'className', 'defaultValue', 'value', 'onChange'],
    },
};

const Template: ComponentStory<ComponentType> = (args) => (
    <FormSelect
        {...globalArgs}
        {...args}
        onChange={(val) => {
            console.log(`onChange ${val}`);
        }}
    />
);

const TemplateControlled: ComponentStory<ComponentType> = (args) => {
    const [value, setValue] = useState<string>('3');
    return (
        <FormSelect
            {...globalArgs}
            {...args}
            onChange={(val) => {
                console.log(`onChange ${val}`);
                setValue(val as any);
            }}
            value={value}
        />
    );
};

export const Single = Template.bind({});
Single.args = {
    multiple: false,
    closeOnSelect: true,
};
Single.parameters = globalParameters;

export const SingleControlled = TemplateControlled.bind({});
SingleControlled.args = {
    multiple: false,
    closeOnSelect: true,
};
SingleControlled.parameters = globalParameters;

export const Multiple = Template.bind({});
Multiple.args = {
    multiple: true,
    closeOnSelect: true,
};
Multiple.parameters = globalParameters;

export const MultipleControlled = TemplateControlled.bind({});
MultipleControlled.args = {
    multiple: true,
    closeOnSelect: true,
};
MultipleControlled.parameters = globalParameters;
