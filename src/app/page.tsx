import Feature from '@/components/pages/home/feature';
import Features from '@/components/pages/home/features';
import Hero from '@/components/pages/home/hero';
import { LuPlay } from 'react-icons/lu';

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Feature
                type='play'
                description='Challenge yourself with our mystical Sudoku puzzels. Each grid is imbued with acneint wisdom, waiting to be deciphered by your intellect.'
                cta='Start your Journey'
                icon={LuPlay}
            />
        </>
    );
}
