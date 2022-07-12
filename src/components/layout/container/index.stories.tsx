import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PreviewDiscount } from 'src/components/preview/discount';
import { BoxBanner } from 'src/components/box/banner';
import { FarmItem } from 'src/components/farm/item';
import { BoxHeading } from 'src/components/box/heading';
import { LayoutContainer } from '.';
import { lorem } from './lorem';
import { lorem as discountPreviewLorem } from '../../preview/discount/lorem';
import { lorem as farmLorem } from '../../farm/item/lorem';

type ComponentType = typeof LayoutContainer;

const Template: ComponentStory<ComponentType> = (args) => (
    <LayoutContainer
        {...args}
        asideChildren={(
            <PreviewDiscount {...discountPreviewLorem} />
        )}
    >

        <BoxBanner
            header="Stake LP, earn rewards"
            description="You can withdraw your LP tokens at anytime "
            href="https://google.com/"
            media={{
                img: '/img/general/banner.jpg',
            }}
        />

        <br />

        <BoxHeading heading="Farm ETH / LFI">
            <FarmItem
                {...farmLorem}
            />
        </BoxHeading>

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
    ...lorem,
};
Default.parameters = {
    layout: 'fullscreen',
    controls: {
        exclude: [
            'menuLinks',
            'pageTitle',
            'topChildren',
            'asideChildren',
        ],
    },
};
