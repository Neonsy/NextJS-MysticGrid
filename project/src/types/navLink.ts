import type { IconName } from '@/lib/icons';

export interface InternalNavLinkType {
    text: string;
    href: string;
    prefetch?: boolean;
    target?: string;
    rel?: string;
}

export interface ExternalNavLinkType extends InternalNavLinkType {
    iconName: IconName;
}

export type NavLinkType = InternalNavLinkType | ExternalNavLinkType;
