import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  extend: {
    colors: {
      customGray: "#808080",
      aina: {
        50: "#FEF7EB",
        100: "#FEF0D7",
        200: "#FDE0B0",
        300: "#FBCF83",
        400: "#FAC05B",
        500: "#F9B233",
        600: "#E99607",
        700: "#AD7005",
        800: "#774D03",
        900: "#3B2602",
        950: "#1E1301",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    base: false,
    styled: false,
    darkTheme: "light",
  },
};

export default config;
