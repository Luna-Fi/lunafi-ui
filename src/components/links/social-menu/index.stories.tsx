import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LinksSocialMenu } from '.';

type ComponentType = typeof LinksSocialMenu;

const Template: ComponentStory<ComponentType> = (args) => <LinksSocialMenu {...args} />;

const component: ComponentMeta<ComponentType> = {
    title: 'Links/SocialMenu',
    component: LinksSocialMenu,
};
export default component;

export const Default = Template.bind({});
Default.args = {
    appearAnimation: true,
    appearAnimationOn: true,
    twitter: 'https://twitter.com/LunaFi_Project',
    docs: 'https://docs.lunafi.io/',
    telegram: 'https://t.me/LunaFi_Official',
    discord: 'https://discord.gg/j2wDzZCshq',
    linkedin: 'https://www.linkedin.com/company/lunafi-project/',
};
