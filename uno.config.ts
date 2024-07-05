import { defineConfig } from "unocss"

import preset from "./src/preset"

export default defineConfig({
  presets: [preset()],
  content: {
    pipeline: {
      include: ["src/**/*.{ts,tsx}"],
    },
  },
})
