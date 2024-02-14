module.exports = {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: "'dharma-gothic-e', sans-serif",
        body: "'work-sans', sans-serif",
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        yellow: "#FEC903",
        darkgrey: "#5F5F5F",
      },
      fontSize: {
        "1.5xl": "1.375rem",
        "2.5xl": "1.625rem",
      },
      typography: {
        DEFAULT: {
          css: {
            letterSpacing: "-0.5px",
            color: "#5F5F5F",
            maxWidth: "100%",
            lineHeight: "1.5rem",
            a: {
              color: "#FEC903",
              fontWeight: "600",
              textDecoration: "none",
              transitionDuration: "300ms",
              strong: {
                fontWeight: "600",
              },
              "&:hover": {
                color: "#FEC903!important",
              },
            },
            h1: { color: "#000000" },
            h2: { color: "#000000" },
            h3: { color: "#000000" },
            h4: { color: "#000000" },
            h5: { color: "#000000" },
            h6: { color: "#000000" },
            ul: {
              li: {
                marginTop: "0.5em",
                marginBottom: "0.5em",
                paddingLeft: "0em",
                "&::marker": { color: '#FEC903'},
                p: {
                  margin: "0",
                },
              },
            },
            ol: {
              li: {
                marginTop: "0.5em",
                marginBottom: "0.5em",
                paddingLeft: "0em",
                p: {
                  margin: "0",
                },
              },
            },
            strong: {
              fontWeight: "600",
            },
            b: {
              fontWeight: "600",
            },
          },
        },
      },
      animation: {
        "reverse-spin": "reverse-spin 15s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
      maxWidth: {
        '8xl': '1370px',
      },
      screens: {
        'tall': { 'raw': '(min-height: 920px)' },
      }      
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
