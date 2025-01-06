import type { ExternalNavLinkType } from '@/types/navLink';

import Link from 'next/link';

type ExternalLinksProps = {
    link: ExternalNavLinkType;
};

export default function ExternalLinks({ link }: ExternalLinksProps) {
    return (
        <Link href={link.href} target={link.target} rel={link.rel}>
            <link.iconName className='h-5 w-5' />
        </Link>
    );
}
