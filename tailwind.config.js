const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "9/16": "9/16",
        "2/3": "2 / 3",
        "5/7": "5 / 7",
        "4/3": "4 / 3",
        "16/9": "16 / 9",
      },
      fontFamily: {
        sans: ["var(--font-suisse-intl)", ...fontFamily.sans],
        serif: ["var(--font-suisse-works)", ...fontFamily.serif],
        mono: ["var(--font-suisse-mono)", ...fontFamily.mono],
      },
      fontSize: {
        "fluid-1": ["clamp(4rem, 8vw, 8rem)", "1"],
        "fluid-2": ["clamp(3rem, 6vw, 6rem)", "1"],
        "fluid-3": ["clamp(2rem, 4vw, 4rem)", "1"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
