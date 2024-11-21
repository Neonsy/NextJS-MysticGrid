import Container from '@/components/container';
import Icons from '@/components/icons';
import FeatureBoard from '@/components/pages/home/featureBoard';
import Link from 'next/link';
import { IconType } from 'react-icons';

type FeatureProps = {
    type: 'play' | 'generate' | 'verify' | 'solve';
    description: string;
    cta: string;
    icon: IconType;
    direction?: 'ltr' | 'rtl';
};

export default function Feature({ type, direction = 'ltr', description, cta, icon }: FeatureProps) {
    const { heading, gradient, text, cellBg, ctaBg } = {
        play: {
            heading: 'Play the Game',
            text: 'text-primary',
            cellBg: 'bg-board-primary',
            gradient: 'bg-gradient-to-r from-primary-l to-primary-r',
            ctaBg: 'bg-primary',
        },
        generate: { heading: 'Generate your own Grid' },
        verify: { heading: 'Verify a Grid' },
        solve: { heading: 'Solve a Grid' },
    }[type];

    const featureBoard = <FeatureBoard cellBg={cellBg!} className='ml-36' />;
    const content = (
        <div className='flex flex-col justify-center gap-y-9 px-24'>
            <p className='text-lg'>{description}</p>

            <Link
                href={`/${type}`}
                className={`flex w-fit items-center justify-center rounded-xl text-lg text-inverted ${ctaBg} gap-x-1 px-6 py-3 font-bold`}>
                <Icons icon={icon} className='text-3xl' />
                {cta}
            </Link>
        </div>
    );

    return (
        <section id={type} className={`${gradient}`}>
            <Container className='flex flex-col items-center justify-center gap-y-12 py-16'>
                <h2 className={`${text} text-3xl font-bold`}>{heading}</h2>

                <div className={`grid ${direction === 'ltr' ? 'grid-cols-[auto,1fr]' : 'grid-cols-[1fr,auto]'} gap-x-12 text-default`}>
                    {direction === 'ltr' ? (
                        <>
                            {featureBoard} {content}
                        </>
                    ) : (
                        <>
                            {content} {featureBoard}
                        </>
                    )}
                </div>
            </Container>
        </section>
    );
}
