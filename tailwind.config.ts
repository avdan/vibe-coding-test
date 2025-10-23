import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          midnight: "#0B1742",
          primary: "#142A63",
          secondary: "#F96C5C",
          accent: "#3FC7C9",
          highlight: "#F4C95D",
          light: "#F5F7FF",
          muted: "#CFD7F2",
          ink: "#0B1026"
        },
        surface: {
          base: "#FFFFFF",
          subtle: "#F5F7FF",
          elevated: "#EBF1FF",
          inverted: "#0B1742"
        },
        text: {
          primary: "#0B1026",
          secondary: "#2E3A5F",
          muted: "#667299",
          inverted: "#FFFFFF"
        }
      },
      fontFamily: {
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
        body: ["Source Sans Pro", "ui-sans-serif", "system-ui"]
      },
      spacing: {
        gutter: "clamp(1.25rem, 4vw, 3.5rem)",
        section: "clamp(4.5rem, 9vw, 7.5rem)",
        "section-tight": "clamp(2.75rem, 7vw, 5rem)"
      },
      boxShadow: {
        soft: "0 28px 60px -32px rgba(14, 27, 72, 0.45)",
        medium: "0 18px 40px -20px rgba(9, 23, 58, 0.42)",
        ring: "0 0 0 1px rgba(255, 255, 255, 0.14), 0 22px 45px -25px rgba(10, 18, 42, 0.55)"
      },
      borderRadius: {
        xl: "1.5rem",
        "3xl": "2rem"
      }
    }
  },
  plugins: []
};

export default config;
