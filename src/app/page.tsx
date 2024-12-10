import Feature from '@/components/pages/home/feature';
import Features from '@/components/pages/home/features';
import Hero from '@/components/pages/home/hero';
import Technologies from '@/components/pages/home/technologies';

import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { LuBrainCircuit, LuGrid3X3, LuPlay } from 'react-icons/lu';

export default function Home() {
    return (
        <>
            <Hero />
            <Features />

            <Feature
                type='play'
                heading='Play the Game'
                description='Challenge yourself with our mystical Sudoku puzzels. Each grid is imbued with acneint wisdom, waiting to be deciphered by your intellect.'
                cta='Start your Journey'
                icon={LuPlay}
            />
            <Feature
                type='generate'
                heading='Generate a Puzzle'
                description='Harness the power of our mystical algorithms to create unique Sudoku puzzles. Choose your difficulty and watch as the grid materializes before your eyes.'
                cta='Conjure a Puzzle'
                icon={LuGrid3X3}
                direction='rtl'
            />
            <Feature
                type='solve'
                heading='Solve a Grid'
                description='The mystical oracle will examine your provided Sudoku grid, revealing whether it aligns with the cosmos of numerology.'
                cta='Validate a Grid'
                icon={IoMdCheckmarkCircleOutline}
            />
            <Feature
                type='verify'
                heading='Verify a Grid'
                description='Invoke the wisdom of the ancient algorithm to unravel the most perplexing Sudoku puzzles. Watch in awe, as the solution manifests before your eyes.'
                cta='Unvail the Solution'
                icon={LuBrainCircuit}
                direction='rtl'
            />

            <Technologies />
        </>
    );
}
