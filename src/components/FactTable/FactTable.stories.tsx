import { FactTable } from "./index"
import React from "react"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

export default {
  title: "Components/FactTable",
  component: FactTable,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
}

export const Desktop = () => <FactTable />

export const Mobile = () => <FactTable />
Mobile.parameters = {
  viewport: {
    defaultViewport: "pixel",
  },
}

export const Tablet = () => <FactTable />
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
}
