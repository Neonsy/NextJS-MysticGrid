import Image from 'next/image';

import HeroImage from '@/assets/images/home/body-backdrop.webp';

export default function Hero() {
    return (
        <section>
            <Image
                src={HeroImage}
                alt='Hero'
                className='absolute inset-0 h-full select-none rounded-lg border-y-2 border-white/20 bg-white/10 bg-cover bg-center opacity-75 shadow-lg backdrop-blur-sm'
            />
        </section>
    );
}
