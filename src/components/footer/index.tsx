import Container from '@/components/container';
import { getYear } from '@/lib/utils/date';
import Link from 'next/link';
import { FaDiscord, FaRegCopyright } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className='bg-footer py-12 text-default'>
            <Container className='flex flex-col items-center justify-center gap-y-6'>
                
                <h2 className='text-3xl font-bold text-primary'>Mystic Grid</h2>
                <p>This is a hobby Project. The code is open source and available on GitHub.</p>
                <p>If you have any questions, feedback, or just want to say hi, feel free to reach out!</p>

                <div className='flex items-center gap-x-3'>
                    <Link href='https://github.com/Neonsy' target='_blank' rel='noopener noreferrer' className='text-3xl'>
                        <FaGithub />
                    </Link>
                    <Link href='https://discord.gg/aK3B9QyGU4' target='_blank' rel='noopener noreferrer' className='text-3xl'>
                        <FaDiscord />
                    </Link>
                </div>

                <p className='flex items-center gap-x-1'>
                    <FaRegCopyright />
                    {getYear()} Mystic Grid. All rights reserved in this realm and beyond.
                </p>
            </Container>
        </footer>
    );
}
