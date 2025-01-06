import type { IconName } from '@/lib/icons';

import FeatureCard from '@/app/page/sections/mysticalPowers/FeatureCard';

export default function MysticalPowers() {
    const features = [
        {
            title: 'Play',
            description: 'Challenge yourself with enchanted Sudoku puzzles.',
            icon: 'play' as IconName,
            color: 'text-play-text',
            iconColor: 'text-play',
        },
        {
            title: 'Generate',
            description: 'Conjure unique Sudoku grids with arcane algorithms.',
            icon: 'generate' as IconName,
            color: 'text-generate-text',
            iconColor: 'text-generate',
        },
        {
            title: 'Verify',
            description: 'Validate your grid with mystical precision.',
            icon: 'verify' as IconName,
            color: 'text-verify-text',
            iconColor: 'text-verify',
        },
        {
            title: 'Solve',
            description: 'Witness our sorcerous solver tackle any grid.',
            icon: 'solve' as IconName,
            color: 'text-solve-text',
            iconColor: 'text-solve',
        },
    ];

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
