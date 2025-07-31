import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '778px',
      lg: '960px',
      xl: '1430px',
    },
    extend: {
      aspectRatio: {
        '5/4': '5 / 4',
        '3/2': '3 / 2',
      },
    },
  },
  // plugins: [require('tailwindcss-animate')],
};
export default config;
