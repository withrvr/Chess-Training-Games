const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// teal: colors.teal,
				// sky: colors.sky,
				cyan: colors.cyan,
			},
		},
		container: {
			center: true,
			padding: "1rem",
		},
		screens: {
			sm: "540px",
			md: "720px",
			lg: "960px",
			xl: "1140px",
			"2xl": "1320px",
			"3xl": "1600px",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
