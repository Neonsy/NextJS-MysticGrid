import type { Metadata } from 'next';

import './globals.css';

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
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
