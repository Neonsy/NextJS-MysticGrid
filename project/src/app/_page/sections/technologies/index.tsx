'use client';

import { FaDatabase, FaReact } from 'react-icons/fa';
import { SiClerk, SiDatabricks, SiDrizzle, SiFramer, SiNextdotjs, SiPosthog, SiSentry, SiTailwindcss, SiTypescript, SiXstate } from 'react-icons/si';
import { motion } from 'motion/react';

import TechnologyCard from '@/app/_page/sections/technologies/TechnologyCard';

export default function Technologies() {
    const technologies = [
        { name: 'TypeScript', icon: SiTypescript, href: 'https://www.typescriptlang.org', color: 'typescript' },
        { name: 'React', icon: FaReact, href: 'https://react.dev', color: 'react' },
        { name: 'Next.js', icon: SiNextdotjs, href: 'https://nextjs.org', color: 'nextjs' },
        { name: 'Tailwind', icon: SiTailwindcss, href: 'https://tailwindcss.com', color: 'tailwind' },
        { name: 'Motion', icon: SiFramer, href: 'https://www.motion.dev', color: 'motion' },
        { name: 'XState', icon: SiXstate, href: 'https://xstate.js.org', color: 'xstate' },
        { name: 'Clerk', icon: SiClerk, href: 'https://clerk.com', color: 'clerk' },
        { name: 'TanStack Query', icon: FaDatabase, href: 'https://tanstack.com/query', color: 'tanstack' },
        { name: 'DrizzleORM', icon: SiDrizzle, href: 'https://orm.drizzle.team', color: 'drizzle' },
        { name: 'Turso', icon: SiDatabricks, href: 'https://turso.tech', color: 'turso' },
        { name: 'Posthog', icon: SiPosthog, href: 'https://posthog.com', color: 'posthog' },
        { name: 'Sentry', icon: SiSentry, href: 'https://sentry.io', color: 'sentry' },
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className='flex flex-col items-center justify-center bg-slate-950/75 backdrop-blur-sm ~gap-6/16 ~px-8/16 ~py-16/32'>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-center font-bold ~text-4xl/7xl'>
                Arcane Technologies
            </motion.h2>
            <div className='mx-auto grid w-full max-w-[theme(screens.xs)] grid-cols-1 gap-3 sm:max-w-[theme(screens.sm)] sm:gap-4 md:max-w-[theme(screens.md)] md:grid-cols-2 lg:max-w-[theme(screens.lg)] lg:grid-cols-3 xl:max-w-[theme(screens.xl)] xl:grid-cols-4'>
                {technologies.map((tech) => (
                    <TechnologyCard key={tech.name} {...tech} />
                ))}
            </div>
        </motion.section>
    );
}
