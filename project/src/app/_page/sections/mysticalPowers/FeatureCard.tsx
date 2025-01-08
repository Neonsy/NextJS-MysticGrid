'use client';

import type { IconType } from 'react-icons';
import { motion } from 'motion/react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: IconType;
    variant: 'play' | 'generate' | 'solve' | 'verify';
    animationDelay?: number;
}

export default function FeatureCard({ title, description, icon: Icon, variant, animationDelay = 0 }: FeatureCardProps) {
    const variantStyles = {
        play: {
            text: 'text-modes-play-text',
            icon: 'text-modes-play',
        },
        generate: {
            text: 'text-modes-generate-text',
            icon: 'text-modes-generate',
        },
        solve: {
            text: 'text-modes-solve-text',
            icon: 'text-modes-solve',
        },
        verify: {
            text: 'text-modes-verify-text',
            icon: 'text-modes-verify',
        },
    }[variant];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{
                opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: 0.2 + animationDelay,
                ease: 'easeOut',
            }}
            whileHover={{
                scale: 1.02,
                y: -5,
            }}
            className='rounded-lg bg-slate-800 bg-opacity-10 backdrop-blur-sm transition-all ~mb-4/8 ~p-4/8 hover:bg-opacity-20'>
            <div>
                <div className='flex items-center justify-between ~mb-4/8'>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3 + animationDelay,
                        }}
                        className={`font-semibold ${variantStyles.text} ~text-3xl/6xl`}>
                        {title}
                    </motion.h3>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3 + animationDelay,
                        }}>
                        <Icon className={`shrink-0 ${variantStyles.icon} ~text-3xl/5xl`} />
                    </motion.div>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: 0.4 + animationDelay,
                    }}
                    className='max-w-[75%] text-slate-400 ~text-base/lg lg:max-w-full'>
                    {description}
                </motion.p>
            </div>
        </motion.div>
    );
}
