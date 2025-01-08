import type { Metadata } from 'next';

import Hero from '@/app/_page/sections/hero';
import Modes from '@/app/_page/sections/modes';
import MysticalPowers from '@/app/_page/sections/mysticalPowers';
import Container from '@/components/container';
import Technologies from './_page/sections/technologies';

export const metadata: Metadata = {
    title: {
        template: 'Mystic Grid | %s',
        default: 'Mystic Grid | Placeholder',
        absolute: 'Mystic Grid | Home',
    },
};

export default function Home() {
    return (
        <Container>
            <Hero />
            <MysticalPowers />
            <Modes />
            <Technologies />
        </Container>
    );
}
