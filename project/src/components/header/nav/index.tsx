import Link from 'next/link';

import { primaryNav, repositoryNav } from '@/lib/links';

import Links from '@/components/links';
import MobileNav from '@/components/header/nav/MobileNav';

export default function Nav() {
    return (
        <nav className='flex items-center justify-between px-4 sm:px-8'>
            <Link
                href='/'
                className='bg-gradient-to-r from-gradient-logo-start via-gradient-logo-middle to-gradient-logo-end bg-clip-text text-2xl font-bold text-transparent'>
                MysticGrid
            </Link>

            <Links links={primaryNav} className='hidden items-center gap-x-9 lg:flex' />
            <Links links={repositoryNav} className='hidden items-center gap-x-9 lg:flex' />

            <MobileNav />
        </nav>
    );
}
