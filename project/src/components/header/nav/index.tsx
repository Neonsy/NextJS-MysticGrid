import { primaryNav, repositoryNav } from '@/lib/links';

import Links from '@/components/links';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav className='flex items-center justify-between'>
            <Link
                href='/'
                className='from-gradient-logo-start via-gradient-logo-middle to-gradient-logo-end bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent'>
                MysticGrid
            </Link>
            <Links links={primaryNav} className='flex items-center gap-x-9' />
            <Links links={repositoryNav} className='flex items-center gap-x-9' />
        </nav>
    );
}
