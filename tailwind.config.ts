import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        slate: '#334155',
        muted: '#64748b',
        border: '#e2e8f0'
      }
    }
  },
  plugins: []
};

export default config;
