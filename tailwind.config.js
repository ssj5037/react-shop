/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-banner": "url('./assets/images/banner.jpg')",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      keyframes: {
        skeleton: {
          "0%, 100%": { opacity: 1.5 },
          "50%": { opacity: 0.5 },
        },
      },
      animation: {
        skeleton: "skeleton 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
