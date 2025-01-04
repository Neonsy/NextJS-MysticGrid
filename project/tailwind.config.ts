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
        extend: {
            colors: {
                body: 'hsl(var(--body-primary) / <alpha-value>)',
                header: 'hsl(var(--header-primary) / <alpha-value>)',
                footer: 'hsl(var(--footer-primary) / <alpha-value>)',
            },
        },
    },
    plugins: [
        fluid,
        forms,
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
