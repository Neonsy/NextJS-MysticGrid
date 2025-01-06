import Link from 'next/link';

export default function Hero() {
    return (
        <section className='flex flex-col items-center justify-center bg-slate-950/75 px-8 py-16'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='bg-clip-text text-4xl font-bold'>Welcome to MysticGrid</h1>
                <p className='mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-300/90'>
                    Discover the ancient art of Sudoku reimagined - where numbers meet mysticism in an enchanting puzzle experience.
                </p>
            </div>
            <Link
                href='/play'
                className='mt-8 inline-block rounded-lg border border-white/20 bg-slate-900/40 px-8 py-3 text-lg font-semibold text-white/90 shadow-[0_4px_12px_rgba(255,255,255,0.08)] backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px] hover:border-white/30 hover:bg-slate-800/40 hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)] focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950 active:translate-y-[1px]'>
                Begin Your Quest
            </Link>
        </section>
    );
}
