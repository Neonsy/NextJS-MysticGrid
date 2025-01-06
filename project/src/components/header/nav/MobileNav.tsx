import { primaryNav, repositoryNav } from '@/lib/links';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Links from '@/components/links';
import { motion, AnimatePresence } from 'motion/react';

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='lg:hidden'>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className='text-2xl focus:outline-none'
                aria-label='Toggle menu'>
                {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className='bg-header/95 absolute left-0 right-0 top-[72px] overflow-hidden backdrop-blur-lg'>
                        <motion.nav initial={{ y: -20 }} animate={{ y: 0 }} exit={{ y: -20 }} className='flex flex-col gap-4 p-4'>
                            <Links links={primaryNav} className='flex flex-col items-center gap-4' />
                            <div className='my-2 h-px w-full bg-white/20' />
                            <Links links={repositoryNav} className='flex items-center justify-center gap-4' />
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
