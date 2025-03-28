'use client';

import type { InternalNavLinkType } from '@/types/navLink';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

type InternalLinksProps = {
    link: InternalNavLinkType;
};

export default function InternalLinks({ link }: InternalLinksProps) {
    const path = usePathname();
    return (
        <Link href={link.href} target={link.target} rel={link.rel} className={`capitalize ${path === link.href ? 'font-bold' : 'hover:underline'}`}>
            {link.text}
        </Link>
    );
}
