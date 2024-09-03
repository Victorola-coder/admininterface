/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "san-serif"],
        quick: ["Quicksand", "san-serif"],
      },

      colors: {
        primary: {
          DEFAULT: "#5907A8",
          100: "#7A39B9",
        },
        dark: {
          DEFAULT: "#171717",
          100: "#2C3131",
        },
        secondary: {
          DEFAULT: "#D30B49",
          100: "#E05480",
        },
      },

      keyframes: {
        "fade-effect": {
          "0%": {
            transform: "scale(0.9)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },

        "slide-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        loader: {
          "0%": {
            opacity: "0.2",
          },
          "100%": {
            opacity: "1",
          },
        },
        screens: {
          'xs': '480px',  // Extra small devices
          'sm': '640px',  // Small devices (mobile)
          'md': '768px',  // Medium devices (tablets)
          'lg': '1024px', // Large devices (desktops)
          'xl': '1280px', // Extra large devices (large desktops)
          '2xl': '1536px' // 2x large devices
        },
      },
      animation: {
        "fade-in": "fade-effect 300ms linear",
        "slide-down": "slide-down 300ms linear forwards",
        "slide-up": "slide-up 300ms linear forwards",
        "rotate-clockwise": "rotate-clockwise 1s infinite linear",
        "loader-opacity": "loader 1s ease-in-out alternate infinite",
      },
    },
  },
  plugins: [],
};
