// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontSize: {
        h1: [
          "clamp(2rem, 5vw, 3rem)",
          { lineHeight: "1.2", fontWeight: "700" },
        ],
        h2: [
          "clamp(1.75rem, 4vw, 2.25rem)",
          { lineHeight: "1.3", fontWeight: "700" },
        ],
        h3: [
          "clamp(1.25rem, 3vw, 1.75rem)",
          { lineHeight: "1.4", fontWeight: "600" },
        ],
        h4: [
          "clamp(1.1rem, 2.5vw, 1.4rem)",
          { lineHeight: "1.4", fontWeight: "600" },
        ],
        p: [
          "clamp(0.95rem, 2vw, 1.1rem)",
          { lineHeight: "1.6", fontWeight: "400" },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
