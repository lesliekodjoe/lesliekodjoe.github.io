import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "10px",
          lg: "80px",
        },
      },
      letterSpacing: {
        "extra-wide": "0.5em",
        "super-wide": "0.9em",
      },
      backgroundImage: {
        "project-img": "url('../assets/background/about_background.jpg')",
        "trial-img": "url('../assets/projectBackground/proIMG1.jpg')",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
  },
  plugins: [],
};
export default config;
