/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: {
          text: "#050505",
          background: "#fafafa",
          primary: "#2d4895",
          secondary: "#f3ecd8",
          accent: "#3a5fc5",
        },
        dark: {
          text: "#fafafa",
          background: "#050505",
          primary: "#2d4895",
          secondary: "#27200c",
          accent: "#899fdc",
        },
      },
    },
  },
  plugins: [],
};
