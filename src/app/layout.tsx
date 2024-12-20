import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Mystic Grid',
    description: 'TBD',
    icons: {
        icon: '/favicon.webp',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${inter.className} bg-header antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
