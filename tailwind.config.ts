

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    ".app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'xxs': '.60rem',
      'xs': '.75rem',   // Extra Small
      'sm': '.875rem',  // Small
      'base': '1rem',   // Base
      'bigger':'1.075rem',
      'lg': '1.125rem', // Large
      'xl': '1.25rem',  // Extra Large
      '2xl': '1.5rem',  // 2 Extra Large
      '3xl': '1.875rem', // 3 Extra Large
      '4xl': '2.25rem', // 4 Extra Large
      '5xl': '3rem',    // 5 Extra Large
      '6xl': '4rem',    // 6 Extra Large
      "footerText": "10px",
    },
    fontFamily:{
      'body': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors:{
        "footer-text": "#414042"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
