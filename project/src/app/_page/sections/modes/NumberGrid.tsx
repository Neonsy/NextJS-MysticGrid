'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

type NumberProps = {
    variant: 'play' | 'generate' | 'solve' | 'verify';
    direction?: 'ltr' | 'rtl';
    shouldAnimate?: boolean;
};

const getVariantColor = (variant: NumberProps['variant']) =>
    ({
        play: 'bg-modes-play-text/50',
        generate: 'bg-modes-generate-text/50',
        solve: 'bg-modes-solve-text/50',
        verify: 'bg-modes-verify-text/50',
    })[variant];

export default function NumberGrid({ variant, direction = 'ltr', shouldAnimate = false }: NumberProps) {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [hasAnimated, setHasAnimated] = useState(false);

    if (shouldAnimate && !hasAnimated) {
        setHasAnimated(true);
        setNumbers([...Array(9)].map((_, i) => i + 1).sort(() => Math.random() - 0.5));
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: direction === 'rtl' ? 25 : -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                },
                opacity: { duration: 0.5, delay: 0.2 },
                x: { duration: 0.5, delay: 0.2 },
            }}
            className='flex items-center justify-center p-4'>
            <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                    transform: `perspective(500px) rotateY(${direction === 'rtl' ? '10deg' : '-10deg'})`,
                    transformOrigin: 'center center',
                }}
                className='relative rounded-lg bg-slate-900/45 p-2 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md'>
                <div className={`grid h-[270px] w-[270px] grid-cols-3 gap-[1.5px] lg:h-[369px] lg:w-[369px] ${getVariantColor(variant)}`}>
                    {numbers.map((number, index) => (
                        <motion.div
                            key={index}
                            transition={{
                                duration: 0.2,
                                type: 'spring',
                                stiffness: 260,
                                damping: 20,
                            }}
                            whileHover={{ scale: 1.036 }}
                            whileTap={{ scale: 0.9 }}
                            tabIndex={-1}
                            className='flex aspect-square select-none items-center justify-center rounded-sm bg-slate-950/90 ~text-3xl/5xl'>
                            {number}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
