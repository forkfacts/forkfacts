import React from "react"
import { Flex, Text, useBreakpoint } from "@chakra-ui/react"
import { ReactComponent as Logo } from "../../images/svg/logo.svg"
import { ResponsiveBreakpoint } from "../utils"
import { navigate } from "gatsby"

export const Header = () => {
  const breakpoint = useBreakpoint() as ResponsiveBreakpoint
  return (
    <Flex
      py={4}
      pl={4}
      gridGap={2}
      alignItems={"center"}
      bg={"white"}
      style={{ cursor: "pointer" }}
      onClick={() => navigate("/")}
    >
      <Logo height={24} width={24} />
      {breakpoint !== "base" && breakpoint !== "sm" && (
        <Text fontSize={"xl"} fontWeight={"black"}>
          forkfacts
        </Text>
      )}
    </Flex>
  )
}
