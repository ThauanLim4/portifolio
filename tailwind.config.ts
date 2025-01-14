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
        blackDefault: "var(--blackDefault)",
        blackOne: "var(--blackOne)",
        blackTwo: "var(--blackTwo)",
        blackThree: "var(--blackThree)",
        purpleDefault: "var(--pupleDefault)",
        background: "var(--background)",
        bgpurple: "var(----purpleShadowBG)",
        purpleShadow: "var(--purpleShadow)",
        purpleShadowBG: "var(--purpleShadowBG)",
        boxShadow: "var(--boxShadow)",
        grayOne: "var(--grayOne)",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        bgPurpleShadow: "var(--purpleShadow)",
        bgShadow: "var(--boxShadow)"
      },
      gridAutoColumns: {
        "2-cols": "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
