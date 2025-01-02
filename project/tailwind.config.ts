import type { Config } from 'tailwindcss';

import fluid, { extract } from 'fluid-tailwind';
import plugin from 'tailwindcss/plugin';

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

                'board-primary': 'hsl(var(--color-board-primary) / <alpha-value>)',
                'board-generate': 'hsl(var(--color-board-generate) / <alpha-value>)',
                'board-solve': 'hsl(var(--color-board-solve) / <alpha-value>)',
                'board-verify': 'hsl(var(--color-board-verify) / <alpha-value>)',
            },
            backgroundColor: {
                header: 'hsl(var(--bg-header) / <alpha-value>)',
                features: 'hsl(var(--bg-features) / <alpha-value>)',
                technologies: 'hsl(var(--bg-technologies) / <alpha-value>)',
                footer: 'hsl(var(--bg-footer) / <alpha-value>)',
            },
            gradientColorStops: {
                'primary-l': 'hsl(var(--gradient-primary-l) / <alpha-value>)',
                'primary-r': 'hsl(var(--gradient-primary-r) / <alpha-value>)',
                'generate-l': 'hsl(var(--gradient-generate-l) / <alpha-value>)',
                'generate-r': 'hsl(var(--gradient-generate-r) / <alpha-value>)',
                'solve-l': 'hsl(var(--gradient-solve-l) / <alpha-value>)',
                'solve-r': 'hsl(var(--gradient-solve-r) / <alpha-value>)',
                'verify-l': 'hsl(var(--gradient-verify-l) / <alpha-value>)',
                'verify-r': 'hsl(var(--gradient-verify-r) / <alpha-value>)',
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
                '.board-cell-shadow': {
                    boxShadow: 'inset 0 0 6px 1px rgba(0, 0, 0, 0.75)',
                },
            });
        }),
    ],
} satisfies Config;
