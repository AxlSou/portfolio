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
				secondary: '#EB5939'
			},
			fontFamily: {
				sans: 'Noto Sans Javanese, sans-serif',
				artifika: 'Artifika, serif'
			},
			sepia: {
				25: '.25',
				50: '.50',
			}
		},
	},
	plugins: [],
}
