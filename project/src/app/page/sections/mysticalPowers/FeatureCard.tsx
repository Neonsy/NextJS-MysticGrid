import type { IconName } from '@/lib/icons';

import Icon from '@/components/icons';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: IconName;
    color: string;
    iconColor: string;
}

export default function FeatureCard({ title, description, icon, color, iconColor }: FeatureCardProps) {
    return (
        <div className='rounded-lg bg-slate-800 bg-opacity-10 p-6 backdrop-blur-sm transition-all hover:bg-opacity-20'>
            <div className='flex items-start justify-between'>
                <div>
                    <h3 className={`mb-2 text-2xl font-semibold ${color}`}>{title}</h3>
                    <p className='text-slate-400'>{description}</p>
                </div>
                <Icon name={icon} className={`text-3xl ${iconColor} self-center`} />
            </div>
        </div>
    );
}
