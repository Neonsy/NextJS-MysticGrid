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
            });
        }),
    ],
} satisfies Config;
