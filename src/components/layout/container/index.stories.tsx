import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PreviewDiscount } from 'src/components/preview/discount';
import { LayoutContainer } from '.';
import { lorem } from './lorem';
import { lorem as discountPreviewLorem } from '../../preview/discount/lorem';

type ComponentType = typeof LayoutContainer;

const Template: ComponentStory<ComponentType> = (args) => (
    <LayoutContainer
        {...args}
        {...lorem}
        asideChildren={(
            <>
                <PreviewDiscount {...discountPreviewLorem} />
                <div>Add to metamask</div>
            </>
        )}
    >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </LayoutContainer>
);

const component: ComponentMeta<ComponentType> = {
    title: 'Layout/Container',
    component: LayoutContainer,
};
export default component;

export const Default = Template.bind({});
Default.args = {
    appearAnimation: false,
    appearAnimationOn: false,
};
Default.parameters = {
    layout: 'fullscreen',
    controls: {
        exclude: [
            'menuLinks',
            'pageTitle',
            'asideChildren',
        ],
    },
};
