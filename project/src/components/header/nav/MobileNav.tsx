'use client';

import { primaryNav, repositoryNav } from '@/lib/links';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Links from '@/components/links';
import { motion, AnimatePresence } from 'motion/react';

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isOpen && !target.closest('#mobile-nav') && !target.closest('#nav-toggle')) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <div className='lg:hidden'>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                id='nav-toggle'
                className='text-2xl focus:outline-none'
                aria-label='Toggle menu'>
                {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id='mobile-nav'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className='fixed left-0 top-[80.1px] w-full bg-header backdrop-blur-lg'>
                        <div className='flex flex-col p-6'>
                            <motion.div
                                className='flex flex-col items-center'
                                initial={{ opacity: 0, y: 9 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.15,
                                    delay: 0.1,
                                }}>
                                <Links links={primaryNav} className='flex flex-col items-center gap-12 py-12 text-lg' />
                            </motion.div>
                            <motion.div
                                className='flex flex-col items-center gap-4 border-t border-white/10 pt-6'
                                initial={{ opacity: 0, y: 9 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.15,
                                    delay: 0.2,
                                }}>
                                <p className='text-sm text-white/60'>Project Repository</p>
                                <Links links={repositoryNav} className='flex items-center justify-center gap-4 text-2xl' />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
