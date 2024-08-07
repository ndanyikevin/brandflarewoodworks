
import type { PluginAPI, Config } from "tailwindcss/types/config";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/sample/banner.png')",
        main: "url('/sample/Background.jpg')",
        about: "url('/sample/aboutpage-bg.png')",
        services: "url('/sample/servicespage-bg.jpg')",
        contact: "url('/sample/contactpage-bg.jpg')",
      },
      fontFamily: {
        dm: ["DM Serif Display", "serif"],
        jost: ["Jost", "sans-serif"], // Ensure fonts with spaces have " " surrounding it.
      },
      colors: {
        // Configure your color palette here
        primary: {
          100: "#CDA274",
          200: "#292F36",
          300: "#F4F0EC",
          400: "#E2E2E2",
        },
        text: {
          blue: "#1B2534",
          gray: "#4D4F52",
          "gray-100": "#5F5F5F",
          "gray-200": "#4D5053",
          "gray-300": "#E5E5E5",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: {addUtilities: PluginAPI["addUtilities"]}) {
      addUtilities({
        ".center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".startCenter": {
          display: "flex",
          "align-items": "center",
        },
        ".btwn": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
      });
    }),
  ],
};
