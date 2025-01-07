'use client';

import { motion } from 'motion/react';
import Container from '@/components/container';
import Nav from '@/components/header/nav';

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className='sticky top-0 z-50 border-b border-white/30 bg-header/60 py-6 shadow-lg backdrop-blur-lg'>
            <Container>
                <Nav />
            </Container>
        </motion.header>
    );
}
