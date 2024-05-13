import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.25rem",
        lg: "1.875rem",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1320px",
        "2xl": "1640px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-NeueHaas)", "sans-serif"],
      },
      colors: {
        blue: '#043BFF',
        black: '#1C1C1C',
        grey: {
          500: '#E4E4E4',
          400: '#F8F8F8'
        }
      }
    },
  },
  plugins: [],
};

export default config;
