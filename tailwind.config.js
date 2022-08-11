/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				secondary: ["Lexend Deca", "sans-serif"],
			},
			colors: {
				primary: "rgba(var(--color-primary), <alpha-value>)",
				theme: "rgba(var(--color-theme), <alpha-value>)",
				"theme-reverse":
					"rgba(var(--color-theme-reverse), <alpha-value>)",
				"theme-light": "rgba(229, 229, 229, <alpha-value>)",
			},
		},
	},
	plugins: [],
};
