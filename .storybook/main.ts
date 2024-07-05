import type { StorybookConfig } from "@storybook/react-vite"

import tsconfigPaths from "vite-tsconfig-paths"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async config => {
    const UnoCSS = (await import("unocss/vite")).default

    config.plugins?.push(UnoCSS())

    config.plugins?.push(tsconfigPaths())

    return config
  },
}
export default config
