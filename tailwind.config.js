/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
          "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
          "loop-scroll" :{
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-100%)" },
          },
      },
    },
  },
  plugins: [],
};

