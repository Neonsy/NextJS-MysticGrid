import Feature from '@/components/pages/home/feature';
import Features from '@/components/pages/home/features';
import Hero from '@/components/pages/home/hero';

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Feature type='play' />
        </>
    );
}
