import { defineConfig } from "unocss"

import preset from "./src/preset"

export default defineConfig({
  presets: [preset()],
})
