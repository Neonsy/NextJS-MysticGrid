import { Inter } from 'next/font/google';
import Image from 'next/image';
import HeroImage from '@/assets/images/body-backdrop.webp';

import Header from '@/components/header';
import Footer from '@/components/footer';

import './globals.css';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    description: 'MysticGrid - A powerful grid-based game platform. Explore unique puzzles and challenges.',
    keywords: ['grid game', 'puzzle game', 'strategy', 'sudoku', 'sudoku web app', 'mystic grid'],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    // openGraph: {
    //     type: 'website',
    //     locale: 'en_US',
    //     url: 'https://nextjs-mysticgrid.vercel.app/',
    //     siteName: 'MysticGrid',
    //     title: 'MysticGrid',
    //     description: 'MysticGrid - A powerful grid-based game platform. Explore unique puzzles and challenges.',
    //     images: [
    //         {
    //             url: '/og-image.png',
    //             width: 1200,
    //             height: 630,
    //             alt: 'MysticGrid Preview',
    //         },
    //     ],
    // },
    // twitter: {
    //     card: 'summary_large_image',
    //     title: 'MysticGrid',
    //     description: 'MysticGrid - A powerful grid-based game platform. Explore unique puzzles and challenges.',
    //     images: ['/twitter-image.png'],
    //     creator: '@DrNeonsy',
    // },
    icons: {
        icon: '/favicon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${inter.className} bg-gradient-body antialiased`}>
                <Image
                    src={HeroImage}
                    alt='Background'
                    className='fixed inset-0 -z-10 h-full w-full select-none border-y border-white/20 bg-white/10 bg-cover bg-center opacity-75 shadow-lg backdrop-blur-sm'
                    placeholder='blur'
                    quality={75}
                    priority
                    loading='eager'
                />
                <div className='flex min-h-dvh flex-col'>
                    <Header />
                    <main className='flex-grow'>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
