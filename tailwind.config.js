/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				primary: {
					green: "#495E57",
					yellow: "#F4CE14",
				},
				accent: {
					green: "#48742C",
				},
				placeholder: "#D9D9D9",
				secondary: {
					salmon: "#EE9972",
					peach: "#FBDABB",
					gray: "#EDEFEE",
					dark: "#333333",
				},
			},
			fontFamily: {
				display: ["MarkaziText"],
				body: ["Karla"],
				"body-medium": ["Karla-Medium"],
				"body-bold": ["Karla-Bold"],
			},
			borderRadius: {
				pill: "16px",
				card: "8px",
			},
		},
	},
	plugins: [],
}
