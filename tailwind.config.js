/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: "390px",
				sm: "768px",
				md: "1024px",
				lg: "1440px",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				spacemono: ["Space Mono", "monospace"],
			},
			colors: {
				white: "#fff",
				black: "#000",
				gray: "#eee",
				red: "#fd6944",
				yellow: "#f6e596",
			},
		},
	},
	plugins: [],
};
