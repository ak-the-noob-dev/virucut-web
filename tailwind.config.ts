import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mukta: ["Mukta", "sans-serif"],
        verdana: ["Verdana", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark_jungle_green: "hsl(188, 63%, 7%)",
        prussian_blue: "hsl(200, 69%, 14%)",
        raisin_black_1: "hsl(227, 29%, 13%)",
        raisin_black_2: "hsl(229, 17%, 19%)",
        yellow_green: "hsl(89, 72%, 45%)",
        main_green: "hsl(119, 85%, 37%)",
        cultured_1: "hsl(0, 0%, 93%)",
        cultured_2: "hsl(192, 24%, 96%)",
        misty_rose: "hsl(7, 56%, 91%)",
        alice_blue: "hsl(210, 100%, 97%)",
        seashell: "hsl(8, 100%, 97%)",
        cadet: "hsl(200, 15%, 43%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        opal: "hsl(180, 20%, 62%)",
      },
      scrollbar: {
        thin: "8px",
      },
    },
  },
  variants: {
    extend: {
      scrollbar: ["rounded"], // Add support for rounded scrollbars
    },
  },
  plugins: [],
};
export default config;
