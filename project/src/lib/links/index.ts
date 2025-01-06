import type { NavLinkType } from '@/types/navLink';

import { AiFillInstagram } from 'react-icons/ai';
import { FaDiscord, FaGithub } from 'react-icons/fa';

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
        iconName: AiFillInstagram,
    },
    {
        text: 'github',
        href: 'https://github.com/neonsy',
        target: '_blank',
        rel: 'noopener noreferrer',
        iconName: FaGithub,
    },
    {
        text: 'discord',
        href: 'https://discord.gg/aK3B9QyGU4',
        target: '_blank',
        rel: 'noopener noreferrer',
        iconName: FaDiscord,
    },
];

export const repositoryNav: NavLinkType[] = [
    {
        text: 'repository',
        href: 'https://github.com/Neonsy/NextJS-MysticGrid',
        target: '_blank',
        rel: 'noopener noreferrer',
        iconName: FaGithub,
    },
];
