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
        <div className='rounded-lg bg-slate-800 bg-opacity-10 backdrop-blur-sm transition-all ~p-4/8 hover:bg-opacity-20'>
            <div>
                <div className='flex items-center justify-between ~mb-4/8'>
                    <h3 className={`font-semibold ${variantStyles.text} ~text-3xl/6xl`}>{title}</h3>
                    <Icon className={`shrink-0 ${variantStyles.icon} ~text-3xl/5xl`} />
                </div>
                <p className='max-w-md text-slate-400 ~text-base/lg md:max-w-lg'>{description}</p>
            </div>
        </div>
    );
}
