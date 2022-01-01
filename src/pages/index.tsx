import * as React from "react";
import Seo from "../components/seo";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { Home } from "../components/Home";

const Index = () => (
  <ChakraProvider theme={theme}>
    <Seo title="ForkFacts" />
    <div
      className="container"
      style={{
        display: "grid",
        height: "95vh",
        gridTemplateColumns: "repeat(4, 1fr)",
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
          width: "100%",
        }}
      >
        <Home />
      </div>
    </div>
  </ChakraProvider>
);

export default Index;
