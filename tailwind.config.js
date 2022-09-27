/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			primary: "rgba(var(--color-primary), <alpha-value>)",
			theme: "rgba(var(--color-theme), <alpha-value>)",
			"theme-reverse": "rgba(var(--color-theme-reverse), <alpha-value>)",
			"theme-light": "rgba(229, 229, 229, <alpha-value>)",
			"theme-dark": "rgba(9, 53, 69, <alpha-value>)",
			white: "#FFFFFF",
			black: "#000000",
			gray: {
				50: "#EFEFEF",
				100: "#E2E2E2",
				200: "#D1D1D1",
				300: "#C7C7C7",
				600: "#7D7D7D",
				900: "#1E1414",
			},
			red: {
				100: "#FECDD3",
				300: "#F9A8D4",
				600: "#D70000",
			},
			green: {
				200: "#86EFAC",
				300: "#BEF264",
				600: "#20df7f",
			},
			blue: {
				300: "#93C5FD",
				400: "#0EA5E9",
				600: "#6BA5BA",
				700: "#467E93",
				800: "#0E7490",
			},
			sky: {
				500: "#376A7C",
				600: "#164E63",
				700: "#0C4A6E",
				800: "#224957",
				900: "#093545",
			},
		},
		extend: {
			fontFamily: {
				secondary: ["Lexend Deca", "sans-serif"],
			},
		},
	},
	plugins: [],
};
