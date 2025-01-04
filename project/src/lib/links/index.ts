import type { NavLinkType } from '@/types/navLink';
import { IconName } from '@/lib/icons';

export const primaryNav: NavLinkType[] = [
    {
        text: 'home',
        href: '/',
    },
    {
        text: 'play',
        href: '/play',
    },
    {
        text: 'generate',
        href: '/generate',
    },
    {
        text: 'solve',
        href: '/solve',
    },
    {
        text: 'verify',
        href: '/verify',
    },
];

export const socialNav: NavLinkType[] = [
    {
        text: 'instagram',
        href: 'https://www.instagram.com/neonsy01/',
        target: '_blank',
        rel: 'noopener noreferrer',
    },
    {
        text: 'github',
        href: 'https://github.com/neonsy',
        target: '_blank',
        rel: 'noopener noreferrer',
    },
    {
        text: 'discord',
        href: 'https://discord.gg/aK3B9QyGU4',
        target: '_blank',
        rel: 'noopener noreferrer',
    },
];

export const repositoryNav: NavLinkType[] = [
    {
        text: 'repository',
        href: 'https://github.com/Neonsy/NextJS-MysticGrid',
        target: '_blank',
        rel: 'noopener noreferrer',
        iconName: 'github' as IconName,
    },
];
