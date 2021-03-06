import { LayoutFooterProps } from '.';

export const lorem: LayoutFooterProps = {
    menu: [
        {
            name: 'Product',
            links: [
                {
                    name: 'Home',
                    href: '/',
                },
                {
                    name: 'Pools',
                    href: '/pools',
                },
                {
                    name: 'Farms',
                    href: '/farms',
                },
                {
                    name: 'Governance',
                    href: '/governance',
                },
            ],
        },
        {
            name: 'Follow us',
            links: [
                {
                    name: 'Telegram',
                    href: 'https://t.me/LunaFi_Official',
                    isExternal: true,
                },
                {
                    name: 'Twitter',
                    href: 'https://twitter.com/LunaFi_Project',
                    isExternal: true,
                },
                {
                    name: 'Discord',
                    href: 'https://discord.gg/j2wDzZCshq',
                    isExternal: true,
                },
                {
                    name: 'LinkedIn',
                    href: 'https://www.linkedin.com/company/lunafi-project/',
                    isExternal: true,
                },
            ],
        },
        {
            name: 'Support',
            links: [
                {
                    name: 'Docs',
                    href: 'https://docs.lunafi.io/lunafi/',
                    isExternal: true,
                },
                {
                    name: 'FAQ\'s',
                    href: 'https://lunafi.io/#home-faq',
                    isExternal: true,
                },
            ],
        },
    ],
    social: {
        twitter: 'https://twitter.com/LunaFi_Project',
        docs: 'https://docs.lunafi.io/',
        telegram: 'https://t.me/LunaFi_Official',
        discord: 'https://discord.gg/j2wDzZCshq',
        linkedin: 'https://www.linkedin.com/company/lunafi-project/',
    },
};
