'use client';

import Link from 'next/link';

import { socialNav } from '@/lib/links';
import { motion } from 'motion/react';

import Container from '@/components/container';
import Links from '@/components/links';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className='border-t border-white/30 bg-footer bg-footer/50 py-3 shadow-xl backdrop-blur-lg'>
            <Container>
                <div className='flex flex-col items-center justify-center gap-y-4 px-4'>
                    <motion.div
                        className='flex max-w-xl flex-col items-center justify-center gap-y-4'
                        initial={{ opacity: 0, y: 9 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.15,
                            delay: 0.1,
                        }}>
                        <Links links={socialNav} className='flex flex-wrap items-center justify-center gap-4 sm:gap-9' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 9 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.15,
                            delay: 0.2,
                        }}>
                        <Link href='https://github.com/neonsy' target='_blank' rel='noopener noreferrer' className='text-center text-base sm:text-lg'>
                            &copy; {new Date().getFullYear()} NeonSpace
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </motion.footer>
    );
}
