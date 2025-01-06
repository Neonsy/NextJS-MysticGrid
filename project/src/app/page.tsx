import Hero from '@/app/page/sections/hero';
import Container from '@/components/container';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: 'Mystic Grid | %s',
        default: 'Mystic Grid | Placeholder',
        absolute: 'Mystic Grid | Home',
    },
};

export default function Home() {
    return (
        <Container className='backdrop-blur-lg'>
            <Hero />
        </Container>
    );
}
