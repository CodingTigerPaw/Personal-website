import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				blue: '#1D2F6F',
				frenchGrey: '#C5CBD3',
				vermilion: '#DC493A',
				caribbeann: '#0F7173',
				aureolin: '#F7E733'
			},
			transitionProperty: {
				height: 'width'
			},
			filter: {
				orange:
					'brightness(0) saturate(100%) invert(40%) sepia(100%) saturate(500%) hue-rotate(-30deg)'
			}
		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
