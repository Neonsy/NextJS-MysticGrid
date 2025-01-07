'use client';

import Link from 'next/link';

import { socialNav } from '@/lib/links';
import { motion } from 'motion/react';

import Container from '@/components/container';
import Links from '@/components/links';

export default function Footer() {
    return (
        <footer className='border-t border-white/30 bg-footer bg-footer/50 py-3 shadow-xl backdrop-blur-lg'>
            <Container>
                <motion.div
                    className='flex flex-col items-center justify-center gap-y-4 px-4'
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        opacity: { delay: 0.36 },
                        x: { delay: 0.3 },
                    }}
                    viewport={{ once: true }}>
                    <div className='flex max-w-xl flex-col items-center justify-center gap-y-4'>
                        <Links links={socialNav} className='flex flex-wrap items-center justify-center gap-4 sm:gap-9' />
                    </div>
                    <Link href='https://github.com/neonsy' target='_blank' rel='noopener noreferrer' className='text-center text-base sm:text-lg'>
                        &copy; {new Date().getFullYear()} NeonSpace
                    </Link>
                </motion.div>
            </Container>
        </footer>
    );
}
