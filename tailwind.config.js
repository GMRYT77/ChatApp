/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      xs: "380px",
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1260px",
      xxl: "1440px",
    },
    extend: {
      backgroundImage: {
        "bg-login": "url('/Bg-login.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
