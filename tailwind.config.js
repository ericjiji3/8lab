/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'blue': '#6398CE',
        'black': '#121212',
        'white': '#E4E4E4',
      },
      fontFamily: {
        andalemo: ['var(--font-andalemo)'],
        kl: ['var(--font-kl)'],
      },
      fontSize: {
        'base': ['11px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '500',
        }],
        'lg': ['20px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '500',
        }],
        'button': ['13px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '500',
        }],
        'xl': ['24px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '600',
        }],
        '2xl': ['50px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '700',
        }]
      },
      borderRadius: {
        'sm' : '10px',
        'md': '20px',
        'lg': '30px',
        'full': '100px',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        reverseSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        spin: 'spin 15s linear infinite',
        reverseSpin: 'reverseSpin 15s linear infinite',
        fadeIn: 'fadeIn 0.15s ease-in 1.5s forwards'
      }
    },
  },
  plugins: [],
};
