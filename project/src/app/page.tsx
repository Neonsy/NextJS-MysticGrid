import type { Metadata } from 'next';

import Hero from '@/app/page/sections/hero';
import Modes from '@/app/page/sections/modes';
import MysticalPowers from '@/app/page/sections/mysticalPowers';
import Container from '@/components/container';
import Technologies from './page/sections/technologies';

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
               <Modes />
                <Technologies />
        </Container>
    );
}
