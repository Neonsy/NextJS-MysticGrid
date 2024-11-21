import Container from '@/components/container';
import InfoCard from '@/components/infoCard';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa6';
import { GiBearFace } from 'react-icons/gi';
import { LuAtom } from 'react-icons/lu';
import { MdAutoAwesomeMotion } from 'react-icons/md';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiClerk } from 'react-icons/si';

export default function Technologies() {
    return (
        <section id='technologies' className='bg-technologies py-12'>
            <Container className='flex flex-col justify-center gap-y-9'>
                <h2 className='text-center text-3xl font-bold text-primary'>Arcane Technologies</h2>

                <div className='grid grid-cols-4 gap-9'>
                    <InfoCard title='TypeScript' icon={BiLogoTypescript} />
                    <InfoCard title='React' icon={FaReact} />
                    <InfoCard title='NextJS' icon={RiNextjsFill} />
                    <InfoCard title='Tailwind' icon={RiTailwindCssFill} />
                    <InfoCard title='Motion' icon={MdAutoAwesomeMotion} />
                    <InfoCard title='Clerk' icon={SiClerk} />
                    <InfoCard title='Zustand' icon={GiBearFace} />
                    <InfoCard title='Jotai' icon={LuAtom} />
                </div>
            </Container>
        </section>
    );
}
