import { FaDatabase, FaReact } from 'react-icons/fa';
import { SiClerk, SiDatabricks, SiDrizzle, SiFramer, SiNextdotjs, SiPosthog, SiSentry, SiTailwindcss, SiTypescript, SiXstate } from 'react-icons/si';

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
        <section className='flex flex-col items-center justify-center gap-6 bg-slate-950/75 px-8 py-16 sm:gap-8 sm:px-16 sm:py-24'>
            <h2 className='text-center font-bold ~text-3xl/4xl'>Arcane Technologies</h2>
            <div className='mx-auto grid w-full max-w-[theme(screens.xs)] grid-cols-1 gap-3 sm:max-w-[theme(screens.sm)] sm:gap-4 md:max-w-[theme(screens.md)] md:grid-cols-2 lg:max-w-[theme(screens.lg)] lg:grid-cols-3 xl:max-w-[theme(screens.xl)] xl:grid-cols-4'>
                {technologies.map((tech) => (
                    <TechnologyCard key={tech.name} {...tech} />
                ))}
            </div>
        </section>
    );
}
