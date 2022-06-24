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
            icon: 'home',
            iconActive: 'home_active',
            isActive: false,
        },
        {
            key: 2,
            name: 'DEX Farm',
            href: '/farms',
            icon: 'home',
            iconActive: 'home_active',
            isActive: false,
        },
        {
            key: 3,
            name: 'Staking',
            href: '/staking',
            icon: 'home',
            iconActive: 'home_active',
            isActive: false,
        },
        {
            key: 4,
            name: 'IDO Game',
            href: 'https://www.lunabets.io/',
            icon: 'home',
            iconActive: 'home_active',
            isActive: false,
        },
    ],
};
