// tailwind.config.js
module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				spaceMono: ['Space Mono', 'sans-serif'],
			},
			colors: {
				background: '#004643',
				headline: '#fffffe',
				paragraph: '#abd1c6',
				button: '#f9bc60',
				'button-text': '#001e1d',
				tertiary: '#e16162',
				'card-bg': '#e8e4e6',
				'card-text': '#0f3433',
				// Section 2
				'section-bg': '#abd1c6',
				'section-headline': '#001e1d',
				'sub-headline': '#0f3433',
				'section-card-bg': '#004643',
				'section-card-heading': '#fffffe',
				'section-card-text': '#abd1c6',
			},
			height: { 90: '88vh' },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
