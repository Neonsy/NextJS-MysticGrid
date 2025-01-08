'use client';

import ModeCard from '@/app/_page/sections/modes/ModeCard';
import { motion } from 'motion/react';

export default function Modes() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='backdrop-blur-sm'>
            <ModeCard
                title='Play Mode'
                description='Challenge yourself in our mystical Sudoku chambers, where puzzles of varying difficulties await. From gentle whispers to mind bending enigmas, test your skills and grow stronger with each solved grid.'
                ctaText='Enter Play Realm'
                href='/play'
                direction='ltr'
                variant='play'
            />

            <ModeCard
                title='Generate Mode'
                description='Channel the arcane energies to forge custom Sudoku grids. Create puzzles for practice, share with friends, or craft challenging scenarios. The power of puzzle creation lies in your hands.'
                ctaText='Enter Generate Realm'
                href='/generate'
                direction='rtl'
                variant='generate'
            />

            <ModeCard
                title='Solve Mode'
                description='Stuck on a challenging puzzle? Let our mystical algorithms illuminate the path to solution. Whether seeking guidance or validation, our ancient solving techniques will reveal the hidden patterns.'
                ctaText='Enter Solve Realm'
                href='/solve'
                direction='ltr'
                variant='solve'
            />

            <ModeCard
                title='Verify Mode'
                description='Ensure the authenticity of any Sudoku puzzle. Our sacred verification rituals will determine if a grid is properly constructed, solvable, and worthy of the true Sudoku tradition.'
                ctaText='Enter Verify Realm'
                href='/verify'
                direction='rtl'
                variant='verify'
            />
        </motion.section>
    );
}
