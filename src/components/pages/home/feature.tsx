import Container from '@/components/container';

type FeatureProps = {
    type: 'play' | 'generate' | 'verify' | 'solve';
};

export default function Feature({ type }: FeatureProps) {
    const { heading, gradient, color, bg } = {
        play: { heading: 'Play the Game', color: 'text-primary', bg: 'bg-primary', gradient: 'bg-gradient-to-r from-primaryL to-primaryR' },
        generate: { heading: 'Generate your own Grid' },
        verify: { heading: 'Verify a Grid' },
        solve: { heading: 'Solve a Grid' },
    }[type];

    return (
        <section id={type} className={`${gradient}`}>
            <Container className='flex flex-col items-center justify-center gap-y-12 py-16'>
                <h2 className={`${color} text-3xl font-bold`}>{heading}</h2>
                
                <div></div>
                <div></div>
            </Container>
        </section>
    );
}
