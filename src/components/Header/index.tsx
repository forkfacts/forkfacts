import React from "react"
import { Box, Text, useBreakpoint } from "@chakra-ui/react"
import { ReactComponent as Logo } from "../../images/svg/logo.svg"
import { ResponsiveBreakpoint } from "../utils"
// import { navigate } from "gatsby"
import Search from "../Search"

export const Header = () => {
  const breakpoint = useBreakpoint() as ResponsiveBreakpoint
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: (breakpoint !== "base" && breakpoint !== "sm")?"1fr 5fr 1fr": "1fr 5fr",
      gridGap:  (breakpoint !== "base" && breakpoint !== "sm")?"30px": "2px",
      padding: "15px"
    }}>
      <Box style={{
        display: "grid",
        gridTemplateColumns: (breakpoint !== "base" && breakpoint !== "sm")?"24px 100px": "24px",
        gridGap:  (breakpoint !== "base" && breakpoint !== "sm")?"10px": "0px",
        alignItems: "center"
      }}>
      <Logo height={24} width={24} />
      {breakpoint !== "base" && breakpoint !== "sm" && (
        <Text fontSize={"xl"} fontWeight={"black"}>
          forkfacts
        </Text>
      )}
      </Box>
      <Search />
    </div>
  )
}
