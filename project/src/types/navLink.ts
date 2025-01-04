import type { IconName } from '@/lib/icons';

export type NavLinkType = {
    text: string;
    href: string;
    target?: string;
    rel?: string;
    iconName?: IconName;
};
