import {
  theme as defaultTheme,
  extendTheme,
  ThemeOverride,
} from "@chakra-ui/react"

const themeOverride: ThemeOverride = {
  fonts: {
    body: "Inter",
    heading: "Inter",
  },
}
export const theme = extendTheme(themeOverride, defaultTheme)
