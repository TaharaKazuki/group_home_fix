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
      backgroundImage: {
        hero_image: 'url(/assets/hero/hero_background_2.png)',
      },
    },
  },
  // plugins: [require('tailwindcss-animate')],
};
export default config;
