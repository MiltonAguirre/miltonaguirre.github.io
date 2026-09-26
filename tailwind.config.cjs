module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// Palette taken from the profile photo: sky blue, shirt navy, sunlit yellow wall, white.
			colors: {
				cobalt: { DEFAULT: '#1D3FBF', deep: '#16309A' },
				navy: '#0E1B4D',
				mist: '#EEF2FA',
				sun: '#FFC83D',
			},
			fontFamily: {
				display: ['Anybody', 'system-ui', 'sans-serif'],
				sans: ['"Public Sans"', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
