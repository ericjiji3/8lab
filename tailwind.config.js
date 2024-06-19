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
        'blue': '#00c01d;',
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
          textShadow: '2px 2px #000000'
        }],
        'mobilebase': ['14px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '500',
          textShadow: '2px 2px #000000'
        }],
        'mobilelg': ['16px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '500',
          textShadow: '2px 2px #000000'
        }],
        'lg': ['20px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '500',
          textShadow: '2px 2px #000000'
        }],
        'button': ['13px', {

          letterSpacing: '0',
          fontWeight: '500',
          textShadow: '2px 2px #000000'
        }],
        'xl': ['24px', {
          letterSpacing: '0',
          fontWeight: '600',
          textShadow: '2px 2px #000000'
        }],
        '2xl': ['50px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '700',
          textShadow: '2px 2px #000000'
        }],
        'mobile2xl': ['30px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '700',
          textShadow: '2px 2px #000000'
        }]
      },
      borderRadius: {
        'sm' : '10px',
        'md': '20px',
        'lg': '30px',
        'xl': '40px',
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
        },
        rotate: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        }
      },
      animation: {
        spin: 'spin 15s linear infinite',
        reverseSpin: 'reverseSpin 15s linear infinite',
        fadeIn: 'fadeIn 0.15s ease-in 1.5s forwards',
        rotate: 'rotate 5s linear infinite'
      }
    },
  },
  plugins: [],
};
