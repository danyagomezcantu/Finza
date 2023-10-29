/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "studio-darkmode-allwhite-ffffff": "#fff",
        cornflowerblue: {
          "100": "#37a6fb",
          "200": "#1262af",
        },
        black: "#000",
        whitesmoke: "#eaeaea",
        gainsboro: "rgba(226, 226, 226, 0.1)",
        lavender: "#ccdcec",
        darkslategray: "#303030",
        gray: {
          "100": "#8e8e94",
          "200": "rgba(0, 0, 0, 0.23)",
          "300": "rgba(0, 0, 0, 0.87)",
          "400": "rgba(255, 255, 255, 0)",
        },
        steelblue: {
          "100": "#2778b6",
          "200": "#0f4b79",
        },
        "text-secondary": "rgba(0, 0, 0, 0.6)",
      },
      spacing: {},
      fontFamily: {
        "components-button-large": "Roboto",
        inter: "Inter",
        inconsolata: "Inconsolata",
        "roboto-mono": "'Roboto Mono'",
      },
      borderRadius: {
        "3xs": "10px",
        mini: "15px",
      },
    },
    fontSize: {
      xl: "20px",
      "17xl": "36px",
      "21xl": "40px",
      "29xl": "48px",
      mini: "15px",
      lg: "18px",
      "3xl": "22px",
      base: "16px",
      "5xl": "24px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
