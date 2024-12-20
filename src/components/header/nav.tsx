'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { headerLinks } from '@/lib/utils/links';

import { FaGithub } from 'react-icons/fa6';
import { LuSun } from 'react-icons/lu';
import { LuMoon } from 'react-icons/lu';

export default function Nav() {
    const currentPath = usePathname();

    return (
        <nav className='flex items-center justify-between py-5'>
            <Link href='/' className='text-5xl font-bold text-primary'>
                Mystic Grid
            </Link>

            <ul className='flex gap-x-5 text-lg'>
                {headerLinks.map((link) => (
                    <li key={link.name}>
                        <a href={link.href} className={`text-default ${currentPath === link.href ? 'font-bold' : ''}`}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='flex items-center justify-center gap-x-6'>
                <Link href='https://github.com/Neonsy/NextJS-MysticGrid' target='_blank' rel='noopener noreferrer' className='text-3xl text-default'>
                    <FaGithub className='text-default' />
                </Link>
                <button className='rounded-full bg-inverted p-2.5 text-3xl'>
                    <LuSun className='text-default' />
                    <LuMoon className='hidden text-default' />
                </button>
            </div>
        </nav>
    );
}
