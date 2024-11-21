import Link from 'next/link';

export default function Hero() {
    return (
        <section id='hero' className='flex min-h-hero flex-col items-center justify-center gap-y-12 bg-slate-950 text-default'>
            <h1 className='text-5xl font-bold text-primary'>Unlock the Mystic Grid</h1>
            <p className='text-lg'>
                Embark on a journey through the enigmatic world of Sudoku,
                <br />
                where numbers hold the key to unlocking ancient mysteries.
            </p>
            <Link href='/play' className='rounded-full bg-primary px-6 py-3 text-xl font-bold text-inverted'>
                Begin Your Quest
            </Link>
        </section>
    );
}
