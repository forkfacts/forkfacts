import React from "react"
import { Box, Text } from "@chakra-ui/react"
//import {ReactComponent as ForkFactsLogo}  from "../../images/forkfacts-logo.svg"

export const Header = () => {
  return <Box h={56} border={'1px solid black'}>
    {/*<ForkFactsLogo />*/}
    <Text>ForkFacts</Text>
  </Box>
}