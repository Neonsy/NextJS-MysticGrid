import type { Metadata } from 'next';

import Hero from '@/app/page/sections/hero';
import Container from '@/components/container';
import MysticalPowers from '@/app/page/sections/mysticalPowers';

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
            <MysticalPowers />
        </Container>
    );
}
