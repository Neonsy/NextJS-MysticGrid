'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className='flex min-h-[97dvh] flex-col items-center justify-center bg-slate-950/75 backdrop-blur-sm ~px-8/16 ~py-16/32'>
            <div className='flex flex-col items-center justify-center'>
                <motion.h1
                    initial={{ opacity: 0, y: 9 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.15,
                        delay: 0.2,
                    }}
                    className='bg-clip-text text-center font-bold ~text-5xl/8xl'>
                    Welcome to the MysticGrid
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        delay: 0.3,
                    }}
                    className='max-w-2xl text-center text-gray-300/90 ~text-base/xl ~mt-8/32 ~px-4/8'>
                    Discover the ancient art of Sudoku reimagined - where numbers meet mysticism in an enchanting puzzle experience.
                </motion.p>
            </div>
            <div className='flex flex-col items-center ~mt-6/16 ~gap-4/16'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -4, 0],
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                        scale: 1.05,
                        y: -8,
                    }}
                    whileFocus={{
                        scale: 1.05,
                        y: -8,
                    }}
                    whileTap={{ scale: 0.95 }}
                    tabIndex={-1}
                    transition={{
                        opacity: { duration: 0.2, delay: 0.4 },
                        scale: { duration: 0.2 },
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 0.5,
                        },
                    }}>
                    <Link
                        href='/play'
                        className='group relative inline-block overflow-hidden rounded-lg border border-white/20 bg-slate-900/40 font-semibold text-white/90 shadow-[0_4px_12px_rgba(255,255,255,0.08)] backdrop-blur-sm transition-all duration-300 ~text-base/lg ~mt-8/16 ~p-3/6 before:absolute before:inset-0 before:-z-10 before:translate-y-[100%] before:bg-white/10 before:transition-transform before:duration-300 hover:border-white/30 hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)] hover:before:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950 active:translate-y-[1px]'>
                        Begin Your Quest
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -4, 0],
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                        scale: 1.05,
                        y: -8,
                    }}
                    whileFocus={{
                        scale: 1.05,
                        y: -8,
                    }}
                    whileTap={{ scale: 0.95 }}
                    tabIndex={-1}
                    transition={{
                        opacity: { duration: 0.2, delay: 0.5 },
                        scale: { duration: 0.2 },
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 1.2,
                        },
                    }}>
                    <Link
                        href='#explore'
                        className='group relative inline-block overflow-hidden rounded-lg border border-white/20 bg-slate-900/40 font-semibold text-white/90 shadow-[0_4px_12px_rgba(255,255,255,0.08)] backdrop-blur-sm transition-all duration-300 ~text-base/lg ~mt-8/16 ~p-3/6 before:absolute before:inset-0 before:-z-10 before:translate-y-[100%] before:bg-white/10 before:transition-transform before:duration-300 hover:border-white/30 hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)] hover:before:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950 active:translate-y-[1px]'>
                        Explore Possibilities
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
}
