import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        home_Mobile: 'url("/home/home-mobile.jpg")',
        home_Tablet: 'url("/home/home-tablet.jpg")',
        home_Desktop: 'url("/home/home-desktop.jpg")',
        desti_Mobile: 'url("/assets/destination/destination-mobile.jpg")',
        desti_Tablet: 'url("/assets/destination/destination-tablet.jpg")',
        desti_Desktop: 'url("/assets/destination/destination-desktop.jpg")',
        crew_Mobile: 'url("/assets/crew/crew-mobile.jpg")',
        crew_Tablet: 'url("/assets/crew/crew-tablet.jpg")',
        crew_Desktop: 'url("/assets/crew/crew-desktop.jpg")',
        tech_Mobile: 'url("/assets/technology/technology-mobile.jpg")',
        tech_Tablet: 'url("/assets/technology/technology-tablet.jpg")',
        tech_Desktop: 'url("/assets/technology/technology-desktop.jpg")',

      },
      fontFamily: {
        bellafair: ["Bellefair", "serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      backdropBlur: {
        xs: "20px",
      },
      colors: {
        darkblue: "#0B0D17",
        paleblue: "#D0D6F9",
      },
      screens: {
        mobile: "320px",
        // => @media (min-width: 640px) { ... }

        tablet: "480px",
        // => @media (min-width: 768px) { ... }

        desktop: "1440px",

        // => @media (min-width: 1024px) { ... }

        // => @media (min-width: 1280px) { ... }

        "2xl": "1736px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
