/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f766e",
        "primary-bg": "#F7FDFC",
        "primary-200": "#90D5D2",
        "primary-100": "#E0F5F4",
        warning: "#E30909",
        "grey-700": "#333333",
        "grey-500": "#666666",
        "grey-400": "#999999",
        "grey-300": "#CCCCCC",
        "grey-200": "#E1E1E1",
        "grey-50": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
