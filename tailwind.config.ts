import type { Config } from 'tailwindcss';

import fluid, { extract } from 'fluid-tailwind';

export default {
    content: {
        files: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
        extract,
    },

    theme: {
        extend: {
            // textColor: {
            //     default: 'hsl(var(--color-text) / <alpha-value>)',
            // },
            // backgroundColor: {
            //     header: 'hsl(var(--color-header) / <alpha-value>)',
            // },
            colors: {
                header: 'hsl(var(--color-header) / <alpha-value>)',
                default: 'hsl(var(--color-text) / <alpha-value>)',
                inverted: 'hsl(var(--color-text-inverted) / <alpha-value>)',
                primary: 'hsl(var(--color-primary) / <alpha-value>)',
            },
        },
    },
    plugins: [fluid, require('@tailwindcss/forms')],
} satisfies Config;
