import type { Config } from 'tailwindcss';
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';
import forms from '@tailwindcss/forms';
import plugin from 'tailwindcss/plugin';

export default {
    content: {
        files: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
        extract,
    },

    theme: {
        screens,
        fontSize,
        extend: {
            colors: {
                body: 'hsl(var(--body-primary) / <alpha-value>)',
                header: 'hsl(var(--header-primary) / <alpha-value>)',
                footer: 'hsl(var(--footer-primary) / <alpha-value>)',
                gradient: {
                    'logo-start': 'hsl(var(--gradient-logo-start) / <alpha-value>)',
                    'logo-middle': 'hsl(var(--gradient-logo-middle) / <alpha-value>)',
                    'logo-end': 'hsl(var(--gradient-logo-end) / <alpha-value>)',
                },
                modes: {
                    play: 'hsl(var(--color-play) / <alpha-value>)',
                    generate: 'hsl(var(--color-generate) / <alpha-value>)',
                    verify: 'hsl(var(--color-verify) / <alpha-value>)',
                    solve: 'hsl(var(--color-solve) / <alpha-value>)',
                    'play-text': 'hsl(var(--color-play-text) / <alpha-value>)',
                    'generate-text': 'hsl(var(--color-generate-text) / <alpha-value>)',
                    'verify-text': 'hsl(var(--color-verify-text) / <alpha-value>)',
                    'solve-text': 'hsl(var(--color-solve-text) / <alpha-value>)',
                },
                tech: {
                    typescript: 'hsl(var(--color-typescript) / <alpha-value>)',
                    react: 'hsl(var(--color-react) / <alpha-value>)',
                    nextjs: 'hsl(var(--color-nextjs) / <alpha-value>)',
                    tailwind: 'hsl(var(--color-tailwind) / <alpha-value>)',
                    motion: 'hsl(var(--color-motion) / <alpha-value>)',
                    xstate: 'hsl(var(--color-xstate) / <alpha-value>)',
                    clerk: 'hsl(var(--color-clerk) / <alpha-value>)',
                    tanstack: 'hsl(var(--color-tanstack) / <alpha-value>)',
                    drizzle: 'hsl(var(--color-drizzle) / <alpha-value>)',
                    turso: 'hsl(var(--color-turso) / <alpha-value>)',
                    posthog: 'hsl(var(--color-posthog) / <alpha-value>)',
                    sentry: 'hsl(var(--color-sentry) / <alpha-value>)',
                },
            },
            screens: {
                xs: '20rem', // 320px
                sm: '23.4375rem', // 375px
                md: '48rem', // 768px
                lg: '64rem', // 1024px
                xl: '80rem', // 1280px
                '2xl': '96rem', // 1536px
                '3xl': '120rem', // 1920px
                '4xl': '160rem', // 2560px
                '5xl': '240rem', // 3840px
            },
        },
    },
    plugins: [
        fluid,
        forms,
        plugin(function ({ addComponents }) {
            addComponents({
                '.bg-body-backdrop': {
                    position: 'relative',
                    background: 'linear-gradient(to bottom right, hsl(var(--body-start)), hsl(var(--body-middle)), hsl(var(--body-end)))',
                    '&::before': {
                        content: '""',
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100dvw',
                        height: '100dvh',
                        backgroundImage: 'url(/images/body-backdrop.webp)',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                        opacity: '0.75',
                        zIndex: '-50',
                    },
                },
                '::-webkit-scrollbar': {
                    width: '15px',
                },
                '::-webkit-scrollbar-track': {
                    background: 'hsl(var(--track))',
                    backdropFilter: 'blur(12px)',
                },
                '::-webkit-scrollbar-thumb': {
                    background: 'hsl(var(--thumb))',
                    border: '3.6px solid transparent',
                    borderRadius: '6px',
                    backgroundClip: 'padding-box',
                    backdropFilter: 'blur(12px)',
                },
                '::-webkit-scrollbar-thumb:hover': {
                    background: 'hsl(var(--thumb-hover))',
                    border: '2px solid transparent',
                    borderRadius: '6px',
                    backgroundClip: 'padding-box',
                    backdropFilter: 'blur(12px)',
                },
            });
        }),
    ],
    safelist: [
        'text-tech-typescript',
        'bg-tech-typescript',
        'border-tech-typescript',
        'text-tech-react',
        'bg-tech-react', 
        'border-tech-react',
        'text-tech-nextjs',
        'bg-tech-nextjs',
        'border-tech-nextjs',
        'text-tech-tailwind',
        'bg-tech-tailwind',
        'border-tech-tailwind',
        'text-tech-motion',
        'bg-tech-motion',
        'border-tech-motion',
        'text-tech-xstate',
        'bg-tech-xstate',
        'border-tech-xstate',
        'text-tech-clerk',
        'bg-tech-clerk',
        'border-tech-clerk',
        'text-tech-tanstack',
        'bg-tech-tanstack',
        'border-tech-tanstack',
        'text-tech-drizzle',
        'bg-tech-drizzle',
        'border-tech-drizzle',
        'text-tech-turso',
        'bg-tech-turso',
        'border-tech-turso',
        'text-tech-posthog',
        'bg-tech-posthog',
        'border-tech-posthog',
        'text-tech-sentry',
        'bg-tech-sentry',
        'border-tech-sentry',
    ],
} satisfies Config;
