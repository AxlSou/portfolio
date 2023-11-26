/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '4rem',
		},
		extend: {
			colors: {
				primary: '#B7AB98',
				secondary: '#EB5939',
				tertiary: '#B8AC99'
			},
			fontFamily: {
				sans: 'Noto Sans Javanese, sans-serif',
				artifika: 'Artifika, serif'
			},
			sepia: {
				25: '.25',
				50: '.50',
			},
			animation: {
				'underline-effect': 'underline 0.3s linear 1'
			},
			keyframes: {
				underline: {
					'0%': {width: '0%'},
					'100%': {width: '100%'},
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
