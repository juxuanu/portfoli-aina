import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  extend: {
    colors: {
      customGray: "#808080",
    },
  },
  plugins: [],
};

export default config;
