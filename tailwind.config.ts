import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        softElevatedShadow: "0px 1px 2px 0px #0A0D120D",
        subtleDeepShadow: "0px 1px 2px 0px #1018280D",
      },
      fontSize: {
        h1: ["72px", { lineHeight: "90px" }],
        h2: ["60px", { lineHeight: "72px" }],
        h3: ["36px", { lineHeight: "44px" }],
        h4: ["30px", { lineHeight: "44px" }],
        h5: ["24px", { lineHeight: "32px" }],
        h6: ["20px", { lineHeight: "30px" }],
        h7: ["18px", { lineHeight: "28px" }],
        h8: ["16px", { lineHeight: "24px" }],
        h9: ["14px", { lineHeight: "20px" }],
        h10: ["48px", { lineHeight: "60px" }],
        h11: ["164px", { lineHeight: "141px" }],
      },
      colors: {
        darkblue1: "#001A31",
        darkblue2: "#002647",
        lightblue: "#005BAA",
        grayText: "#969696",
        grayText2: "#B7B7B7",
        hoverYellow: "#F69400",
        grayHeading: "#2A2A2A",
        borderWhite: "#E7E7E7",
        cardBlue: "#012D55"

      },
      fontFamily: {
        formalRegular: ["FormaDJRDisplayRegular", "sans-serif"],
        formalMedium: ["FormaDJRDisplayMedium", "sans-serif"],
        formalLight: ["FormaDJRDisplayLight", "sans-serif"],
        gelasio: ["Gelasio", "serif"],
      },
    },
  },
  variants: {
    extend: {
      filter: ["hover", "group-hover"],
    },
  },
  plugins: [],
} satisfies Config;
