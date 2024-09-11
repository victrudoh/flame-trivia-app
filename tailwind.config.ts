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
      },
      fontFamily: {
        geistsans: ["var(--font-geist-sans)"],
        geistmono: ["var(--font-geist-mono)"],
      },

      colors: {
        brand: {
          dark: "#000000",
          white: "#FFFFFF",
          main: "#1F0047",
          secondary: "#B1D362",
          lightYellow: "#FCFF45",
          grayish: "#7B7B7B",
          // grayish: "#9CA3AF",
          ash: "#F4F4F4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
