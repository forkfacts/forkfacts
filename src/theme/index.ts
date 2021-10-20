import { theme as defaultTheme, extendTheme, ThemeOverride } from "@chakra-ui/react"

const themeOverride: ThemeOverride = {
 fonts: {
   body: "Inter, sans-serif",
   heading: "Inter, sans-serif"
 }
}
export const theme = extendTheme(themeOverride, defaultTheme)
