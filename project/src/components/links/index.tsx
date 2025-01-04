'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/icons';
import type { NavLinkType } from '@/types/navLink';

export default function Links({ links }: { links: NavLinkType[] }) {
    const path = usePathname();
    return (
        <ul className='flex items-center gap-x-9'>
            {links.map((link) => (
                <li key={link.text}>
                    <Link
                        href={link.href}
                        target={link.target}
                        rel={link.rel}
                        className={`capitalize ${path === link.href ? 'font-bold' : 'hover:underline'}`}>
                        {link.iconName ? <Icon name={link.iconName} className='h-5 w-5' /> : link.text}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
