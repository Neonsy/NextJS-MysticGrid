import type { IconType } from 'react-icons';

export interface InternalNavLinkType {
    text: string;
    href: string;
    prefetch?: boolean;
    target?: string;
    rel?: string;
}

export interface ExternalNavLinkType extends InternalNavLinkType {
    iconName: IconType;
}

export type NavLinkType = InternalNavLinkType | ExternalNavLinkType;
