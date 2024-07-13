/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/renderer/**/*.{js,ts,jsx,tsx,html}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: ["dark"],
		base: false,
		styled: true,
		utils: true,
	},
};
