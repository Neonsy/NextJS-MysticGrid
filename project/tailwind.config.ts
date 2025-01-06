import type { Config } from 'tailwindcss';

import fluid, { extract } from 'fluid-tailwind';
import forms from '@tailwindcss/forms';
import plugin from 'tailwindcss/plugin';

export default {
    content: {
        files: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
        extract,
    },

    theme: {
        screens: {
            xs: '320px',
            sm: '375px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            '3xl': '1920px',
            '4xl': '2560px',
            '5xl': '3840px',
        },
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
                play: 'hsl(var(--color-play) / <alpha-value>)',
                generate: 'hsl(var(--color-generate) / <alpha-value>)',
                verify: 'hsl(var(--color-verify) / <alpha-value>)',
                solve: 'hsl(var(--color-solve) / <alpha-value>)',
                'play-text': 'hsl(var(--color-play-text) / <alpha-value>)',
                'generate-text': 'hsl(var(--color-generate-text) / <alpha-value>)',
                'verify-text': 'hsl(var(--color-verify-text) / <alpha-value>)',
                'solve-text': 'hsl(var(--color-solve-text) / <alpha-value>)',
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
                        width: '100%',
                        height: '100%',
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
} satisfies Config;
