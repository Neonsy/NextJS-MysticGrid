import Link from 'next/link';
import { motion } from 'motion/react';

import { primaryNav, repositoryNav } from '@/lib/links';

import Links from '@/components/links';
import MobileNav from '@/components/header/nav/MobileNav';

export default function Nav() {
    return (
        <nav className='flex items-center justify-between px-4 sm:px-8'>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                    href='/'
                    className='bg-gradient-to-r from-gradient-logo-start via-gradient-logo-middle to-gradient-logo-end bg-clip-text text-2xl font-bold text-transparent'>
                    MysticGrid
                </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <Links links={primaryNav} className='hidden items-center gap-x-9 lg:flex' />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: [5, -5, 5],
                }}
                transition={{
                    opacity: { delay: 0.3 },
                    x: { delay: 0.3 },
                    y: {
                        delay: 0.3,
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        times: [0, 0.5, 1],
                    },
                }}>
                <Links links={repositoryNav} className='hidden items-center gap-x-9 lg:flex' />
            </motion.div>

            <MobileNav />
        </nav>
    );
}
