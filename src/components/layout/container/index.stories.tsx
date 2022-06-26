import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PreviewDiscount } from 'src/components/preview/discount';
import { ButtonSvgOutline } from 'src/components/button/svg-outline';
import { LayoutContainer } from '.';
import { lorem } from './lorem';
import { lorem as discountPreviewLorem } from '../../preview/discount/lorem';
import { ConnectNetwork } from '../../connect/network';
import { lorem as networkLorem } from '../../connect/network/lorem';
import metamaskSVG from '@/img/general/metamask.svg';

type ComponentType = typeof LayoutContainer;

const Template: ComponentStory<ComponentType> = (args) => {
    const { appearAnimation, appearAnimationOn } = args;

    return (
        <LayoutContainer
            {...args}
            {...lorem}
            asideChildren={(
                <>
                    <PreviewDiscount {...discountPreviewLorem} />
                    <ButtonSvgOutline size="small" fullWidth hasBg={false}>
                        <img src={metamaskSVG} alt="Metamask" />
                        <span>Add LFI to Metamask</span>
                    </ButtonSvgOutline>
                </>
            )}
            topChildren={(
                <ConnectNetwork
                    appearAnimation={appearAnimation}
                    appearAnimationOn={appearAnimationOn}
                    {...networkLorem}
                />
            )}
        >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </LayoutContainer>
    );
};

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
