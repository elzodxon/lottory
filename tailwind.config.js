module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#111111",
          100: "#060C13",
        },
        gray: {
          DEFAULT: "#79899B",
          100: "#EDF1F5",
        },
        blue: {
          DEFAULT: "#008FF6",
        },
        green: {
          DEFAULT: "#63D455",
        },
        darkCream:{
          DEFAULT: "#5B432C"
        }
      },
    },
  },
  plugins: [],
};
