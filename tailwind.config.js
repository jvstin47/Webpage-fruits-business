/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'var(--brand-50)',
          100: 'var(--brand-100)',
          500: 'var(--brand-500)',
          600: 'var(--brand-600)',
          900: 'var(--brand-900)',
        },
        neutral: {
          950: '#060608'
        }
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
      },
    },
  },
  plugins: [],
};
