import React from "react"
import { Flex, Text, useBreakpoint } from "@chakra-ui/react"
import { ReactComponent as Logo } from "../../images/svg/logo.svg"
import { ResponsiveBreakpoint } from "../utils"

export const Header = () => {
  const breakpoint = useBreakpoint() as ResponsiveBreakpoint
  return (
    <Flex py={2} pl={2} gridGap={2} alignItems={"center"} bg={"white"}>
      <Logo height={32} width={32} />
      {breakpoint !== "base" && breakpoint !== "sm" && (
        <Text fontSize={"xl"} fontWeight={"black"}>
          forkfacts
        </Text>
      )}
    </Flex>
  )
}
