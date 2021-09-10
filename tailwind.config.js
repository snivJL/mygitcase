module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#C9D1D9",
        hover: "#AAB5B6",
        linkHover: "#58A6F0",
        button: "#21262d",
        link: "#58a6ff",
        input: "#1f6feb",
        bg100: "#161B22",
      },
      backgroundColor: {
        light: "#6e768166",
        bg100: "#161B22",
        bg500: "#0D1117",
        bg900: "#010409",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
