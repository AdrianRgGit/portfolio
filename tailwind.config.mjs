/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "white-1": "#FFFFFF",
        "black-1": "#040D12",
        "gray-1": "#09101A",
        "gray-2": "#222831",
        "green-1": "#55E6A5",
      },
    },
  },
  plugins: [],
};
