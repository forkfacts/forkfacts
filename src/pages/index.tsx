import * as React from "react";
import Seo from "../components/seo";
import { ChakraProvider, useBreakpoint } from "@chakra-ui/react";
import { theme } from "../theme";
import { Home } from "../components/Home";
import { ResponsiveBreakpoint } from "../components/utils";

const Index = () => {
  const breakpoint = useBreakpoint() as ResponsiveBreakpoint;
  const sm = breakpoint === "sm";
  const base = breakpoint === "base";
  // todo: this does not seem to be working
  const columnWidth = sm || base ? "0.2fr 2fr 2fr 0.2fr" : "repeat(4, 1fr)";
  return (
    <ChakraProvider theme={theme}>
      <Seo title="ForkFacts" />
      <div
        className="container"
        style={{
          display: "grid",
          height: "95vh",
          gridTemplateColumns: columnWidth,
          gap: "10px",
          gridTemplateRows: "repeat(4, 1fr)",
          gridTemplateAreas: `
        ". Content Content ."
        ". Content Content ."
        ". Content Content ."
        ". Content Content ."
        `,
        }}
      >
        <div
          className="Content"
          style={{
            gridArea: "Content",
            alignSelf: "center",
            justifySelf: "center",
            border: "0px solid blue",
          }}
        >
          <Home />
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Index;
