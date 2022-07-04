import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { BoxOutline } from '.';

type ComponentType = typeof BoxOutline;

const Template: ComponentStory<ComponentType> = (args) => (
    <BoxOutline
        {...args}
        style={{
            padding: '1rem',
        }}
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aut asperiores voluptatem minus illo consequatur necessitatibus in beatae,
        possimus minima molestias tempora consequuntur suscipit
        quaerat sunt nemo est explicabo molestiae aspernatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aut asperiores voluptatem minus illo consequatur necessitatibus in beatae,
        possimus minima molestias tempora consequuntur suscipit
        quaerat sunt nemo est explicabo molestiae aspernatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aut asperiores voluptatem minus illo consequatur necessitatibus in beatae,
        possimus minima molestias tempora consequuntur suscipit
        quaerat sunt nemo est explicabo molestiae aspernatur!
    </BoxOutline>
);

const component: ComponentMeta<ComponentType> = {
    title: 'Container/Outline',
    component: BoxOutline,
};
export default component;

export const Default = Template.bind({});
Default.args = {
    appearAnimation: true,
    appearAnimationOn: true,
    appearAnimationDuration: 1000,
};
