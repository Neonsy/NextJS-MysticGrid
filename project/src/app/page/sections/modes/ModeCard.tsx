import Number from '@/app/page/sections/modes/NumberGrid';
import Link from 'next/link';

type ModeCardProps = {
    title: string;
    description: string;
    ctaText: string;
    href: string;
    direction?: 'ltr' | 'rtl';
    variant: 'play' | 'generate' | 'solve' | 'verify';
};

export default function ModeCard({ title, description, ctaText, href, direction = 'ltr', variant }: ModeCardProps) {
    const variantStyles = {
        play: {
            container: 'bg-slate-900/90',
            title: 'text-modes-play-text',
            button: 'bg-modes-play-text hover:bg-modes-play/90',
        },
        generate: {
            container: 'bg-slate-900/75',
            title: 'text-modes-generate-text',
            button: 'bg-modes-generate-text hover:bg-modes-generate/90',
        },
        solve: {
            container: 'bg-slate-900/90',
            title: 'text-modes-solve-text',
            button: 'bg-modes-solve-text hover:bg-modes-solve/90',
        },
        verify: {
            container: 'bg-slate-900/75',
            title: 'text-modes-verify-text',
            button: 'bg-modes-verify-text hover:bg-modes-verify/90',
        },
    }[variant];

    return (
        <div className={`${variantStyles.container} px-24 py-8`}>
            <div className={`flex w-full items-center justify-center gap-x-64 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <Number variant={variant} direction={direction} />
                <div>
                    <h2 className={`mb-4 text-3xl font-bold ${variantStyles.title}`}>{title}</h2>
                    <p className='mb-6 max-w-lg text-slate-400'>{description}</p>
                    <Link href={href} className={`${variantStyles.button} inline-block rounded-lg px-6 py-2 font-medium transition-colors`}>
                        {ctaText} →
                    </Link>
                </div>
            </div>
        </div>
    );
}
