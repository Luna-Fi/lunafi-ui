import { FarmItemProps } from '.';

export const lorem: FarmItemProps = {
    icon: '/img/form/eth-luna.svg',
    name: 'ETH / LFI',
    label: 'LFIETHLP',
    network: {
        name: 'Matic',
        img: '/img/network-label/matic.svg',
        color: '#A26FF8',
    },
    deposited: 420000,
    tvl: 6000000,
    dailyRewards: 9000,
    apy: 80.5,
    form: {
        balance: 1.57,
        max: 100.79,
        onSubmit: (arg) => {
            // eslint-disable-next-line no-alert
            alert(arg);
        },
        disabled: false,
        submitText: 'Approve',
    },
    withdraw: {
        balance: 2.57,
        max: 50.68,
        onWithdraw: (arg) => {
            // eslint-disable-next-line no-alert
            alert(arg);
        },
        onWithdrawAll: () => {
            // eslint-disable-next-line no-alert
            alert('All');
        },
    },
    rewards: {
        value: 420,
        onAddLiquidity: () => {
            // eslint-disable-next-line no-alert
            alert('Add Liquidity');
        },
        onRemoveLiquidity: () => {
            // eslint-disable-next-line no-alert
            alert('Remove Liquidity');
        },
        onClaimRewards: () => {
            // eslint-disable-next-line no-alert
            alert('Claim Rewards');
        },
    },
};
