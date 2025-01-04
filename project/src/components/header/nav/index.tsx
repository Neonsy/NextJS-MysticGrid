import { primaryNav, repositoryNav } from '@/lib/links';

import Links from '@/components/links';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav className='flex items-center justify-evenly'>
            <Link
                href='/'
                className='neon-text bg-gradient-to-r from-cyan-500 via-indigo-400 to-pink-400 bg-clip-text text-2xl font-bold text-transparent'>
                MysticGrid
            </Link>
            <Links links={primaryNav} className='flex items-center gap-x-9' />
            <Links links={repositoryNav} className='flex items-center gap-x-9' />
        </nav>
    );
}
