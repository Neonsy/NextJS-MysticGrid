import FeatureCard from '@/app/page/sections/mysticalPowers/FeatureCard';
import { FaBrain, FaCheckCircle, FaMagic, FaPlay } from 'react-icons/fa';

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
        <section className='bg-slate-900/75 py-16'>
            <h2 className='mb-12 text-center text-4xl font-bold'>Mystical Powers</h2>
            <div className='mx-auto grid max-w-6xl grid-cols-2 gap-6'>
                {features.map((feature) => (
                    <FeatureCard key={feature.title} {...feature} />
                ))}
            </div>
        </section>
    );
}
