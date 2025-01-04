'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { InternalNavLinkType } from '@/types/navLink';

type Props = {
    link: InternalNavLinkType;
};

export default function InternalLinks({ link }: Props) {
    const path = usePathname();
    return (
        <Link href={link.href} target={link.target} rel={link.rel} className={`capitalize ${path === link.href ? 'font-bold' : 'hover:underline'}`}>
            {link.text}
        </Link>
    );
}
