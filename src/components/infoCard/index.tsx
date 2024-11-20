import Icons from '@/components/icons';
import { IconType } from 'react-icons';

type InfoCardProps = {
    icon?: IconType;
    title: string;
    description?: string;
    type?: 'primary' | 'generate' | 'verify' | 'solve';
};

export default function InfoCard({ icon, title, description, type = 'primary' }: InfoCardProps) {
    const { text, border, bg } = {
        primary: {
            text: 'text-primary',
            border: 'border-primary',
            bg: 'bg-primary/15',
        },
        generate: {
            text: 'text-generate',
            border: 'border-generate',
            bg: 'bg-generate/15',
        },
        verify: {
            text: 'text-verify',
            border: 'border-verify',
            bg: 'bg-verify/15',
        },
        solve: {
            text: 'text-solve',
            border: 'border-solve',
            bg: 'bg-solve/15',
        },
    }[type];

    return (
        <div className={`${border} relative flex flex-col gap-y-2 rounded-3xl border ${bg ? 'bg-slate-900/50' : ''} px-5 py-9`}>
            {icon ? <Icons icon={icon} className={`mb-3 text-3xl ${text}`} /> : null}

            <p className='text-xl font-bold'>{title}</p>
            <p className='opacity-75'>{description}</p>

            <div className={`info-card-blob $ absolute right-0 top-0 ${bg}`}></div>
        </div>
    );
}
