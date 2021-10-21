import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "@chakra-ui/react"

export const parameters = {
  backgrounds: {
    default: "gray300",
    values: [
      { name: "gray100", value: "#EDF2F7" },
      { name: "gray300", value: "#CBD5E0" },
      { name: "gray600", value: "#4A5568" },
      { name: "white", value: "#FFFFFF" },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: { theme: theme },
}

export const decorators = [
  Story => {
    return (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    )
  },
]
