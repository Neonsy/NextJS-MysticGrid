import Link from 'next/link';
import { socialNav } from '@/lib/links';

import Container from '@/components/container';
import Links from '@/components/links';

export default function Footer() {
    return (
        <footer className='border-t border-white/30 bg-footer bg-footer/50 py-3 shadow-xl backdrop-blur-lg'>
            <Container className='flex flex-col items-center justify-center gap-y-4'>
                <div className='flex max-w-xl flex-col items-center justify-center gap-y-4'>
                    <Links links={socialNav} className='flex items-center gap-x-9' />
                </div>
                <Link href='https://github.com/neonsy' target='_blank' rel='noopener noreferrer' className='text-center text-lg'>
                    &copy; {new Date().getFullYear()} NeonSpace
                </Link>
            </Container>
        </footer>
    );
}
