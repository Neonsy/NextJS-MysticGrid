import NumberGrid from '@/app/_page/sections/modes/NumberGrid';
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
            button: 'bg-modes-play-text hover:bg-modes-play-text/90 shadow-lg shadow-modes-play-text/20',
        },
        generate: {
            container: 'bg-slate-900/75',
            title: 'text-modes-generate-text',
            button: 'bg-modes-generate-text hover:bg-modes-generate-text/90 shadow-lg shadow-modes-generate-text/20',
        },
        solve: {
            container: 'bg-slate-900/90',
            title: 'text-modes-solve-text',
            button: 'bg-modes-solve-text hover:bg-modes-solve-text/90 shadow-lg shadow-modes-solve-text/20',
        },
        verify: {
            container: 'bg-slate-900/75',
            title: 'text-modes-verify-text',
            button: 'bg-modes-verify-text hover:bg-modes-verify-text/90 shadow-lg shadow-modes-verify-text/20',
        },
    }[variant];

    return (
        <div className={`${variantStyles.container} ~px-6/32 ~py-16/32`}>
            <div
                className={`flex w-full flex-col items-center justify-center ~gap-8/16 lg:flex-row lg:~gap-32/64 ${
                    direction === 'rtl' ? 'lg:flex-row-reverse' : ''
                }`}>
                <NumberGrid variant={variant} direction={direction} />
                <div className='text-center lg:text-left'>
                    <h2 className={`font-bold ~text-2xl/4xl ~mb-4/8 ${variantStyles.title}`}>{title}</h2>
                    <p className='max-w-lg text-slate-400 ~text-base/lg ~mb-6/12'>{description}</p>
                    <Link
                        href={href}
                        className={`${variantStyles.button} group relative inline-flex items-center justify-center rounded-lg font-semibold tracking-wide transition-all duration-300 ~text-base/lg ~px-6/10 ~py-3/4 before:absolute before:inset-0 before:origin-left before:scale-x-0 before:rounded-lg before:bg-white/10 before:transition-transform before:duration-300 hover:scale-105 hover:before:scale-x-100 active:scale-95`}>
                        {ctaText}
                    </Link>
                </div>
            </div>
        </div>
    );
}
