import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily:{
			sans: ["'Audiowide'", 'serif'],
		},
		extend: {
			screens:{
				'3xl': '1930px'
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
