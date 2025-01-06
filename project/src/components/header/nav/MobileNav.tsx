'use client';

import { primaryNav, repositoryNav } from '@/lib/links';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import Links from '@/components/links';

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='lg:hidden'>
            <button onClick={() => setIsOpen(!isOpen)} className='text-2xl focus:outline-none' aria-label='Toggle menu'>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {isOpen && (
                <div className='absolute left-0 right-0 top-[72px] bg-header/95 p-4 backdrop-blur-lg'>
                    <nav className='flex flex-col gap-4'>
                        <Links links={primaryNav} className='flex flex-col items-center gap-4' />
                        <div className='my-2 h-px w-full bg-white/20' />
                        <Links links={repositoryNav} className='flex items-center justify-center gap-4' />
                    </nav>
                </div>
            )}
        </div>
    );
}
