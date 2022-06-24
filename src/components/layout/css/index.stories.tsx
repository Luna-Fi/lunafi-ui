import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LayoutCSS } from '.';

type ComponentType = typeof LayoutCSS;

const Template: ComponentStory<ComponentType> = () => (
    <LayoutCSS>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque ab accusantium maxime laborum perferendis cupiditate iure reiciendis in,
            eaque aliquid nulla distinctio. Voluptatibus officiis quae nihil, fugit alias beatae ab.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque ab accusantium maxime laborum perferendis cupiditate iure reiciendis in,
            eaque aliquid nulla distinctio. Voluptatibus officiis quae nihil, fugit alias beatae ab.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque ab accusantium maxime laborum perferendis cupiditate iure reiciendis in,
            eaque aliquid nulla distinctio. Voluptatibus officiis quae nihil, fugit alias beatae ab.
        </p>
    </LayoutCSS>
);

const component: ComponentMeta<ComponentType> = {
    title: 'Layout/CSS',
    component: LayoutCSS,
};
export default component;

export const Default = Template.bind({});
