import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customStart: '#FFAB00',
        customEnd: '#F5BA41B2',
        cyellow: "#F5BA41",
        fgrey: "#373A40",
        textGray:"#E6E6E6",
        fadedColor:"rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      fontSize:{
        "h1-xl":"61px",
        "h1-lg":"32px",


        "h2-xl":"32px",
        "h2-lg":"28px",
        


        "p2":"20px",
        "p2-xl":"30px",
        "p2-lg":"20px",

        
      }
    },
  },
  plugins: [],
};
export default config;
