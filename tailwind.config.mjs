/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#111827',
				accent: '#156b5c', // Color verde azulado más oscuro para mejor contraste (WCAG AA)
				muted: '#4B5563',
				bodyBg: '#F3F4F6',
				border: '#E5E7EB',
				// Añadimos un color 'soft' para fondos de sección más elegantes
				card: '#FFFFFF',
				canvas: '#FAFBFD', 
			},
			fontFamily: {
				// 'Playfair Display' para un look editorial médico/premium
				// 'Satoshi' o 'Inter' para el cuerpo técnico y legible
				sans: ['Inter', 'ui-sans-serif', 'system-ui'],
				serif: ['"Playfair Display"', 'ui-serif', 'Georgia'],
			},
			boxShadow: {
				// Sombras mucho más suaves y modernas (Soft UI)
				'soft': '0 4px 20px -2px rgba(17, 24, 39, 0.05)',
				'premium': '0 20px 40px -10px rgba(21, 107, 92, 0.12)', // Actualizado con el nuevo color
			},
			animation: {
				// Animación de aparición suave al cargar o hacer scroll
				'fade-up': 'fadeUp 0.8s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes: {
				fadeUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' },
				}
			},
		},
	},
	plugins: [],
}
