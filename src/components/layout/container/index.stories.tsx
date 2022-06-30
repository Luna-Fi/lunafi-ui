import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PreviewDiscount } from 'src/components/preview/discount';
import { ButtonSvgOutline } from 'src/components/button/svg-outline';
import { ConnectGrid } from 'src/components/connect/grid';
import { ConnectBalance } from 'src/components/connect/balance';
import { ConnectBalanceBuy } from 'src/components/connect/balance/buy';
import { lorem as buyLorem } from 'src/components/connect/balance/buy/lorem';
import { ConnectSubmit } from 'src/components/connect/submit';
import { LayoutContainer } from '.';
import { lorem } from './lorem';
import { lorem as discountPreviewLorem } from '../../preview/discount/lorem';
import { ConnectNetwork } from '../../connect/network';
import { lorem as networkLorem } from '../../connect/network/lorem';
import { lorem as submitLorem } from '../../connect/submit/lorem';
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
                    <ButtonSvgOutline size="small" fullWidth hasBg={false} spacing="small">
                        <img src={metamaskSVG} alt="Metamask" />
                        <span>Add LFI to Metamask</span>
                    </ButtonSvgOutline>
                </>
            )}
            topChildren={(
                <ConnectGrid
                    appearAnimation={appearAnimation}
                    appearAnimationOn={appearAnimationOn}
                    balance={(
                        <ConnectBalance balance={0.079}>
                            <ConnectBalanceBuy
                                {...buyLorem}
                            />
                        </ConnectBalance>
                    )}
                    network={(
                        <ConnectNetwork
                            appearAnimation={appearAnimation}
                            appearAnimationOn={appearAnimationOn}
                            {...networkLorem}
                        />
                    )}
                    connect={<ConnectSubmit {...submitLorem} />}
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
