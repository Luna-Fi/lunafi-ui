import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LinksSocialIcons } from '.';

type ComponentType = typeof LinksSocialIcons;

const Template: ComponentStory<ComponentType> = (args) => <LinksSocialIcons {...args} />;

const component: ComponentMeta<ComponentType> = {
    title: 'Links/Social Icons',
    component: LinksSocialIcons,
};
export default component;

export const Default = Template.bind({});
Default.args = {
    twitter: 'https://twitter.com/LunaFi_Project',
    docs: 'https://docs.lunafi.io/',
    telegram: 'https://t.me/LunaFi_Official',
    discord: 'https://discord.gg/j2wDzZCshq',
    linkedin: 'https://www.linkedin.com/company/lunafi-project/',
};
