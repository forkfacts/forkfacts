import React from "react"
import { Box, HStack, Text, useBreakpoint } from "@chakra-ui/react"
import { ReactComponent as Logo } from "../../images/svg/logo.svg"
import { ResponsiveBreakpoint } from "../utils"
import { navigate } from "gatsby"
import Search from "../Search"

export const Header = () => {
  const breakpoint = useBreakpoint() as ResponsiveBreakpoint
  const sm = breakpoint === "sm"
  const base = breakpoint === "base"
  return (
    <HStack spacing={sm || base ? 4 : 10} px={sm || base ? 2 : 4}>
      {sm || (base && <ForkfactsLogo size={32} />)}
      {!base && !sm && <LogoWithName />}
      <Box w="100%">
        <Search />
      </Box>
    </HStack>
  )
}

const LogoWithName = () => {
  return (
    <HStack spacing="16px">
      <ForkfactsLogo size={24} />
      <Text fontSize={"xl"} fontWeight={"black"}>
        forkfacts
      </Text>
    </HStack>
  )
}

const ForkfactsLogo = ({ size }: { size: number }) => {
  return (
    <Logo
      height={size}
      width={size}
      onClick={() => navigate("/")}
      style={{ cursor: "pointer" }}
    />
  )
}
