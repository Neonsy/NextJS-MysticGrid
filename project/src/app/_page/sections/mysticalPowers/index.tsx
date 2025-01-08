'use client';

import FeatureCard from '@/app/_page/sections/mysticalPowers/FeatureCard';
import { FaBrain, FaCheckCircle, FaMagic, FaPlay } from 'react-icons/fa';
import { motion } from 'motion/react';

export default function MysticalPowers() {
    const features = [
        {
            title: 'Play',
            description: 'Challenge yourself with enchanted Sudoku puzzles.',
            icon: FaPlay,
            variant: 'play',
        },
        {
            title: 'Generate',
            description: 'Conjure unique Sudoku grids with arcane algorithms.',
            icon: FaMagic,
            variant: 'generate',
        },
        {
            title: 'Verify',
            description: 'Validate your grid with mystical precision.',
            icon: FaCheckCircle,
            variant: 'verify',
        },
        {
            title: 'Solve',
            description: 'Witness our sorcerous solver tackle any grid.',
            icon: FaBrain,
            variant: 'solve',
        },
    ] as const;

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            id='explore'
            className='flex flex-col items-center justify-center bg-slate-900/75 backdrop-blur-sm ~py-12/32'>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='font-bold ~text-4xl/7xl ~mb-8/16'>
                Mystical Powers
            </motion.h2>
            <div className='grid max-w-6xl grid-cols-1 ~gap-4/8 ~px-6/16 md:grid-cols-2'>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.title} {...feature} animationDelay={index * 0.1} />
                ))}
            </div>
        </motion.section>
    );
}
