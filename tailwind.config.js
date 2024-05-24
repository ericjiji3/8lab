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
      fontSize: {
        'base': ['20px', {
          lineHeight: 'normal',
          letterSpacing: '0',
          fontWeight: '400',
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
    },
  },
  plugins: [],
};
