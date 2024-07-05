import type { Meta, StoryObj } from "@storybook/react"

import Dummy from "."

const meta = {
  component: Dummy,
} satisfies Meta

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {},
}
