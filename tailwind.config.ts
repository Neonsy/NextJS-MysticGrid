import type { Config } from 'tailwindcss';

import fluid, { extract } from 'fluid-tailwind';
import plugin from 'tailwindcss/plugin';
import Hero from '@/components/pages/home/hero';

export default {
    content: {
        files: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
        extract,
    },

    theme: {
        extend: {
            colors: {
                default: 'hsl(var(--color-text) / <alpha-value>)',
                inverted: 'hsl(var(--color-text-inverted) / <alpha-value>)',

                primary: 'hsl(var(--color-primary) / <alpha-value>)',
                generate: 'hsl(var(--color-generate) / <alpha-value>)',
                verify: 'hsl(var(--color-verify) / <alpha-value>)',
                solve: 'hsl(var(--color-solve) / <alpha-value>)',
            },
            backgroundColor: {
                header: 'hsl(var(--bg-header) / <alpha-value>)',
                features: 'hsl(var(--bg-features) / <alpha-value>)',
            },
            gradientColorStops: {
                primaryL: 'hsl(var(--gradient-primary-l) / <alpha-value>)',
                primaryR: 'hsl(var(--gradient-primary-r) / <alpha-value>)',
            },
            height: {
                header: 'var(--height-header)',
            },
            minHeight: {
                hero: 'var(--height-hero)',
            },
        },
    },
    plugins: [
        fluid,
        require('@tailwindcss/forms'),
        plugin(function ({ addComponents }) {
            addComponents({
                '.info-card-blob': {
                    borderRadius: '0 45% 0 100%',
                    width: '50px',
                    height: '50px',
                },
            });
        }),
    ],
} satisfies Config;
