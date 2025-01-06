import type { IconType } from 'react-icons';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: IconType;
    variant: 'play' | 'generate' | 'solve' | 'verify';
}

export default function FeatureCard({ title, description, icon: Icon, variant }: FeatureCardProps) {
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
        <div className='rounded-lg bg-slate-800 bg-opacity-10 p-6 backdrop-blur-sm transition-all hover:bg-opacity-20'>
            <div className='flex items-start justify-between gap-6'>
                <div>
                    <h3 className={`mb-2 text-2xl font-semibold ${variantStyles.text}`}>{title}</h3>
                    <p className='max-w-sm text-slate-400'>{description}</p>
                </div>
                <Icon className={`text-3xl ${variantStyles.icon} shrink-0 self-center`} />
            </div>
        </div>
    );
}
