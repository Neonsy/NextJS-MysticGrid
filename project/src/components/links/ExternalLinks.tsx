import type { ExternalNavLinkType } from '@/types/navLink';

import Link from 'next/link';

type ExternalLinksProps = {
    link: ExternalNavLinkType;
};

export default function ExternalLinks({ link }: ExternalLinksProps) {
    return (
        <Link
            href={link.href}
            target={link.target}
            rel={link.rel}
            className='hover:text-primary-500 block transition-all duration-300 hover:scale-125'
            aria-label={`Visit ${link.text}`}>
            <link.iconName className='text-2xl' />
            <span className='sr-only'>{link.text}</span>
        </Link>
    );
}
