import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { PreviewDiscount } from 'src/components/preview/discount';
import { ConnectGrid } from 'src/components/connect/grid';
import { ConnectCoin } from 'src/components/connect/coin';
import { ConnectSubmit } from 'src/components/connect/submit';
import { ConnectCoinInfo } from 'src/components/connect/coin/info';
import { lorem as infoLorem } from 'src/components/connect/coin/info/lorem';
import { BoxBanner } from 'src/components/box/banner';
import { FarmItem } from 'src/components/farm/item';
import { BoxHeading } from 'src/components/box/heading';
import { LayoutContainer } from '.';
import { lorem } from './lorem';
import { lorem as discountPreviewLorem } from '../../preview/discount/lorem';
import { ConnectNetwork, IConnectNetworkItem } from '../../connect/network';
import { lorem as networkLorem } from '../../connect/network/lorem';
import { lorem as submitLorem } from '../../connect/submit/lorem';
import { lorem as farmLorem } from '../../farm/item/lorem';

type ComponentType = typeof LayoutContainer;

const Template: ComponentStory<ComponentType> = (args) => {
    const { appearAnimation, appearAnimationOn } = args;

    const [selectedNetworkKey, setSelectedNetworkKey] = useState<IConnectNetworkItem['key']>(networkLorem.networks[0].key);

    return (
        <LayoutContainer
            {...args}
            {...lorem}
            asideChildren={(
                <PreviewDiscount {...discountPreviewLorem} />
            )}
            topChildren={(
                <ConnectGrid
                    appearAnimation={appearAnimation}
                    appearAnimationOn={appearAnimationOn}
                    coin={(
                        <ConnectCoin price={0.079}>
                            <ConnectCoinInfo
                                {...infoLorem}
                            />
                        </ConnectCoin>
                    )}
                    network={(
                        <ConnectNetwork
                            appearAnimation={appearAnimation}
                            appearAnimationOn={appearAnimationOn}
                            {...networkLorem}
                            selectedKey={selectedNetworkKey}
                            onSelect={(network) => {
                                if (network) {
                                    setSelectedNetworkKey(network.key);
                                }
                            }}
                        />
                    )}
                    connect={<ConnectSubmit {...submitLorem} />}
                />
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
