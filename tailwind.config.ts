import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nmBlue: '#0057B8', // Replace with the actual Northwestern Mutual blue
        nmLightBlue: '#89CFF0', // Replace with a lighter variant
        nmDarkBlue: '#004185', // Replace with a darker variant
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};

export default config;

