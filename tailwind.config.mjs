/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'proyecto': 'url("./images/fondo proyectos.jpg")',
				'proyecto2': 'url("./images/fondo proyectos2.jpg")'
			},
			fontFamily: {
				'after-sick': ['After Sick', 'sans-serif'],
				'inter': ['Inter', 'sans-serif']
			}
		},
	},
	plugins: [],
}
