import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PreviewDiscount } from 'src/components/preview/discount';
import { BoxBanner } from 'src/components/box/banner';
import { FarmItem } from 'src/components/farm/item';
import { BoxHeading } from 'src/components/box/heading';
import { FormSelect } from 'src/components/form/select';
import { BoxInfo } from 'src/components/box/info';
import { ConnectSubmit } from 'src/components/connect/submit';
import { TooltipContent } from 'src/components/tooltip/content';
import { Button } from 'src/components/button';
import { CoinBuy } from 'src/components/coin/buy';
import { PreviewCoin } from 'src/components/preview/coin';
import { SliderSwiperScroll } from 'src/components/slider/swiper-scroll';
import { PoolsListBox } from 'src/components/pool/list-box';
import { lorem as poolsListLorem } from 'src/components/pool/list/lorem';
import { PoolsList } from 'src/components/pool/list';
import { LayoutContainer } from '.';
import { lorem } from './lorem';
import { lorem as discountPreviewLorem } from '../../preview/discount/lorem';
import { lorem as farmLorem } from '../../farm/item/lorem';

type ComponentType = typeof LayoutContainer;

const CoinSlide = () => (
    <PreviewCoin
        size="small"
        img="/img/coin/btc.svg"
        name="USDC"
        value={4540630}
        earning={{
            percent: 1.6,
            lfiPercent: 23.51,
        }}
        network={{
            name: 'Network',
            img: '/img/network-label/sx.svg',
            color: '#579FFF',
        }}
        style={{
            width: '225px',
        }}
    />
);

const Template: ComponentStory<ComponentType> = (args) => (
    <LayoutContainer
        {...args}
        asideChildren={(
            <PreviewDiscount {...discountPreviewLorem} />
        )}
    >

        <BoxInfo
            text="Your wallet is not connected"
            button={(
                <ConnectSubmit
                    size="small"
                    text="Connect Wallet"
                />
            )}
        />
        <br />

        <div
            style={{
                position: 'relative',
                zIndex: 10,
            }}
        >
            <BoxInfo
                text="No assets available to stake"
                button={(
                    <TooltipContent
                        usePadding={false}
                        useBackground={false}
                        trigger={(
                            <Button
                                tag="button"
                                size="small"
                                variant="light"
                            >
                                Buy Now
                            </Button>
                        )}
                    >
                        <CoinBuy />
                    </TooltipContent>
                )}
            />
        </div>
        <br />

        <SliderSwiperScroll>
            <CoinSlide />
            <CoinSlide />
            <CoinSlide />
            <CoinSlide />
            <CoinSlide />
            <CoinSlide />
            <CoinSlide />
        </SliderSwiperScroll>

        <br />

        <PoolsListBox
            heading="All Pools"
            filters={(
                <>
                    <FormSelect
                        label="Network"
                        multiple
                        options={[
                            {
                                value: 'sx', name: 'SX Network', img: '/img/network/sx_preview.svg',
                            },
                            {
                                value: 'matic', name: 'Matic', img: '/img/network/polygon_preview.svg',
                            },
                        ]}
                        onChange={(val) => {
                            // eslint-disable-next-line no-console
                            console.log(val);
                        }}
                    />
                    <FormSelect
                        label="Tokens"
                        multiple
                        options={[
                            {
                                value: 'lfi', name: 'LFI',
                            },
                            {
                                value: 'btc', name: 'BTC',
                            },
                        ]}
                        onChange={(val) => {
                            // eslint-disable-next-line no-console
                            console.log(val);
                        }}
                    />
                </>
            )}
        >
            <PoolsList
                {...poolsListLorem}
            />
        </PoolsListBox>

        <br />
        <br />
        <br />

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
