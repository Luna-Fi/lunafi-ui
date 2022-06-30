import { NavigationMenuProps } from '.';

export const lorem: NavigationMenuProps = {
    links: [
        {
            key: 0,
            name: 'Home',
            href: '/',
            icon: 'home',
            iconActive: 'home_active',
            isActive: true,
        },
        {
            key: 1,
            name: 'Pools',
            href: '/pools',
            icon: 'pools',
            iconActive: 'pools_active',
            isActive: false,
        },
        {
            key: 2,
            name: 'DEX Farm',
            href: '/farms',
            icon: 'farms',
            iconActive: 'farms_active',
            isActive: false,
        },
        {
            key: 3,
            name: 'Staking',
            href: '/staking',
            icon: 'staking',
            iconActive: 'staking_active',
            isActive: false,
        },
        {
            key: 4,
            name: 'IDO Game',
            href: 'https://www.lunabets.io/',
            icon: 'ido',
            iconActive: 'ido_active',
            isActive: false,
        },
    ],
};
