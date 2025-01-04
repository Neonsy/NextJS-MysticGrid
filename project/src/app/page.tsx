import Hero from '@/components/app/home/sections/hero';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: 'Mystic Grid | %s',
        default: 'Mystic Grid | Placeholder',
        absolute: 'Mystic Grid | Home',
    },
};

export default function Home() {
    return <Hero />;
}
