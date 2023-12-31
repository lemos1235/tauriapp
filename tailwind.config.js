/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--semi-color-primary)",
        secondary: "var(--semi-color-secondary)",
        tertiary: "var(--semi-color-tertiary)",
        info: "var(--semi-color-info)",
        success: "var(--semi-color-success)",
        warning: "var(--semi-color-warning)",
        danger: "var(--semi-color-danger)",
      },
    },
  },
  plugins: [],
};
