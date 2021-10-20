import React from "react"
import { Header } from "./index"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

// INITIAL_VIEWPORTS values come from https://github.com/storybookjs/storybook/blob/master/addons/viewport/src/defaults.ts#L135

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
}

export const Desktop = () => <Header />

export const Mobile = () => <Header />
Mobile.parameters = {
  viewport: {
    defaultViewport: "pixel",
  },
}

export const Tablet = () => <Header />
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
}
